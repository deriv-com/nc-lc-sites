import {
    a as L
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as N
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as I
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as b,
    h as V,
    i as Z,
    j as X
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ie,
    g as P,
    m as U,
    n as j,
    q as Q,
    r as q,
    s as K,
    t as D
} from "./_oschunk-4VHUVDBV.js";
import {
    a as B
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as J,
    Sb as E,
    cb as C,
    ub as m
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as T,
    c as o,
    e as re,
    m as M,
    n as z
} from "./_oschunk-M5BUVJ72.js";
var ae = {
        "QjdAh7QhR0S9dLjXKWMyAw#Value.-1438211874.1": "\u0645\u062F\u0649 \u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644"
    },
    Y = {
        "ar-001": {
            translations: ae,
            isRTL: !0
        }
    };

function $(f, g, u, e) {
    let r = JSON.parse(f.Response);
    f.instruments_trading_experience_list = JSON.stringify(r[0].instruments_trading_experience), f.previous_trading_experience_list = JSON.stringify(r[0].previous_trading_experience), f.trading_experience_list = JSON.stringify(r[0].trading_experience)
}
o($, "default");
var n = T; {
    let g = class g extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Y);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(a) {
                    return a && (a.setAttribute("code.function", "GetTradingSuitabilityConfig"), a.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var i = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/OnboardingFlow/TradingExperience/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", i, t.callContext(r), void 0, void 0, !0).then(function(c) {
                            var v = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingExperience$ActionGetTradingSuitabilityConfig"));
                            return v.responseOut = n.DataConversion.ServerDataConverter.from(c.Response, C), v
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "102b2ce0-4aef-4df4-8dac-01931dc7f6dd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), m.setRealSignupCurrentStep(5)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onSelectTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectTradingExperience$Action") || (this.__onSelectTradingExperience$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnSelectTradingExperience", function(c) {
                    c && (c.setAttribute("code.function", "OnSelectTradingExperience"), c.setAttribute("outsystems.function.key", "2a9ea85a-f373-428f-a64f-b3626054f026"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnSelectTradingExperience"), r = a.callContext(r);
                        var v = new n.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.OnboardingFlow.TradingExperience.OnSelectTradingExperience$vars")));
                        return v.value.selected_income_rangeInLocal = e, m.settrading_experience(v.value.selected_income_rangeInLocal), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "cfd-trading-experience", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), r, !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onSelectTradingExperience$Action
        }
        set _onSelectTradingExperience$Action(e) {
            this.__onSelectTradingExperience$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "9b7b4bfb-72ad-46cb-8508-2fef312872bd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, t._getTradingSuitability$Action(e).then(function() {
                                c.value = E.getTradingSuitabilityConfigCache$Action("trading_experience", e), r.variables.isLoadingVar = !1, r.variables.questionVar = c.value.questionOut, r.variables.trading_experienceVar = c.value.answersOut
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
        get _getTradingSuitability$Action() {
            return this.hasOwnProperty("__getTradingSuitability$Action") || (this.__getTradingSuitability$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("GetTradingSuitability", function(i) {
                    return i && (i.setAttribute("code.function", "GetTradingSuitability"), i.setAttribute("outsystems.function.key", "af2297fa-11f2-4c04-ba6a-fc38e2d9ee00"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetTradingSuitability"), e = t.callContext(e);
                        var c = new n.DataTypes.VariableHolder,
                            v = new n.DataTypes.VariableHolder,
                            s = new n.DataTypes.VariableHolder,
                            O = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        return n.Flow.executeAsyncFlow(function() {
                            return v.value = E.getAuth$Action(e), r.flush(), t.getTradingSuitabilityConfig$ServerAction(v.value.tokenOut, e).then(function(_) {
                                c.value = _
                            }).then(function() {
                                O.value.jSONOut = n.JSONUtils.serializeToJSON(c.value.responseOut.dataAttr, !1, !1), s.value = n.Logger.startActiveSpan("ParseDara", function(_) {
                                    _ && (_.setAttribute("code.function", "ParseDara"), _.setAttribute("outsystems.function.key", "24e51740-9f4a-4c93-8c98-c6c10f76c5b3"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode($, "ParseDara", "GetTradingSuitability", {
                                            Response: n.DataConversion.JSNodeParamConverter.to(O.value.jSONOut, n.DataTypes.DataTypes.Text),
                                            instruments_trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                            previous_trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                            trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                        }, function(p) {
                                            var l = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingExperience.GetTradingSuitability$parseDaraJSResult"));
                                            return l.instruments_trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(p.instruments_trading_experience_list, n.DataTypes.DataTypes.Text), l.previous_trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(p.previous_trading_experience_list, n.DataTypes.DataTypes.Text), l.trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(p.trading_experience_list, n.DataTypes.DataTypes.Text), l
                                        }, {}, {})
                                    } finally {
                                        _ && _.end()
                                    }
                                }, 1), m.setinstruments_trading_experience_list(s.value.instruments_trading_experience_listOut), m.setprevious_trading_experience_list(s.value.previous_trading_experience_listOut), m.settrading_experience_list(s.value.trading_experience_listOut)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getTradingSuitability$Action
        }
        set _getTradingSuitability$Action(e) {
            this.__getTradingSuitability$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("StopOnboardingOnContinue", function(i) {
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "ed236946-3a60-479c-8122-b2fff67dfb92"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), r.variables.showStopOnboardingVar = !r.variables.showStopOnboardingVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "102b2ce0-4aef-4df4-8dac-01931dc7f6dd"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectTradingExperience$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnSelectTradingExperience__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnSelectTradingExperience"), a.setAttribute("outsystems.function.key", "2a9ea85a-f373-428f-a64f-b3626054f026"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectTradingExperience$Action, r, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9b7b4bfb-72ad-46cb-8508-2fef312872bd"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getTradingSuitability$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("GetTradingSuitability__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetTradingSuitability"), t.setAttribute("outsystems.function.key", "af2297fa-11f2-4c04-ba6a-fc38e2d9ee00"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getTradingSuitability$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "ed236946-3a60-479c-8122-b2fff67dfb92"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    a = this.idService;
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
                    a = this.idService;
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
                return L.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    o(g, "ControllerInner");
    let f = g;
    A = f, A.registerVariableGroupType("uae.OnboardingFlow.TradingExperience$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new C
        }, "defaultValue"),
        complexType: C
    }]), A.registerVariableGroupType("uae.OnboardingFlow.TradingExperience.OnSelectTradingExperience$vars", [{
        name: "selected_income_range",
        attrName: "selected_income_rangeInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.OnboardingFlow.TradingExperience.GetTradingSuitability$parseDaraJSResult", [{
        name: "instruments_trading_experience_list",
        attrName: "instruments_trading_experience_listOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "previous_trading_experience_list",
        attrName: "previous_trading_experience_listOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "trading_experience_list",
        attrName: "trading_experience_listOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, H = new n.Controller.ControllerFactory(A, B);
var d = re(ie());
var y = T,
    W = class W extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("trading_experience", "trading_experienceVar", "trading_experience", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new y.DataTypes.TextList)
            }, !1, y.DataTypes.TextList), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionVar", "Question", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(W, "VariablesRecord");
var x = W;
x.init();
var G = class G extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(G, "WidgetsRecord");
var F = G,
    h = class h extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return x
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
o(h, "Model");
var w = h;
w._hasValidationWidgetsValue = void 0;
var k = new y.Model.ModelFactory(w);
var R = P.PlaceholderContent,
    oe = P.IteratorPlaceholderContent,
    se = o(function() {
        var f = j(function(g) {
            var u = g.model,
                e = g.controller,
                r = g.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                i = K,
                c = D,
                v = {
                    props: g,
                    validateWidget: o(function(l) {
                        g.validateWidget(g, l)
                    }, "validateWidget")
                },
                s = u,
                O = q,
                _ = Q,
                p = U();
            return d.createElement("div", g.rootNodeProperties, d.createElement(N, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: M.resolve(z.TranslationsService).getMessage("QjdAh7QhR0S9dLjXKWMyAw#Value.-1438211874.1", "Trading suitability"),
                    ProgressBarPercentage: 83,
                    shouldShowProgressBarInMobile: !0
                },
                events: {
                    _handleError: o(function(l) {
                        e.handleError(l)
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
                    content: new R(function() {
                        return [d.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: s
                        }, d.createElement(V, {
                            style: u.getCachedValue(r.getId("zz8uBZgifkilF5+ZXG8hlw.Style"), function() {
                                return J.isDesktop$Action(a).isDesktopOut ? "mb-12  text-xl font-extra-bold" : "mb-12 text-2xl font-extra-bold"
                            }),
                            value: u.variables.questionVar,
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: s
                        }), d.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: s
                        }, O(u.variables.trading_experienceVar.length < 1 || u.variables.isLoadingVar, !1, this, function() {
                            return [d.createElement(b, {
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
                            }, d.createElement(b, {
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
                            }), d.createElement(b, {
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
                            }), d.createElement(b, {
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
                            }), d.createElement(b, {
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
                            return [d.createElement(Z, {
                                animateItems: !1,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: u.variables.trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    content: new oe(function(l, S) {
                                        return [d.createElement(X, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var ne = typeof S != "undefined" && S !== null ? S.clone() : e.callContext().clone();
                                                e.onSelectTradingExperience$Action(u.variables.trading_experienceVar.getCurrent(S.iterationContext), e.callContext(ne))
                                            }, "onClick"),
                                            style: u.getCachedValue(l.getId("ListItem1.Style"), function() {
                                                return u.variables.trading_experienceVar.getCurrent(S.iterationContext) === m.gettrading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return u.variables.trading_experienceVar.getCurrent(S.iterationContext)
                                            }, function() {
                                                return m.gettrading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: l,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: s,
                                            placeholders: {
                                                leftActions: R.Empty,
                                                content: new R(function() {
                                                    return [d.createElement(b, {
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
                                                            service: l,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }, d.createElement(V, {
                                                        value: u.variables.trading_experienceVar.getCurrent(S.iterationContext),
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }))]
                                                }),
                                                rightActions: R.Empty
                                            },
                                            _dependencies: [i(u.variables.trading_experienceVar.getCurrent(S.iterationContext))]
                                        })]
                                    }, a, r, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    })
                },
                _dependencies: [i(u.variables.isLoadingVar), i(u.variables.trading_experienceVar), i(u.variables.questionVar)]
            }), d.createElement(I, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: u.variables.showStopOnboardingVar
                },
                events: {
                    _handleError: o(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var l = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(l))
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
            getAttributes: o(function() {
                return {
                    codeFunction: "TradingExperience",
                    functionKey: "158194b0-cce2-4197-9928-26608b04f65d",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.TradingExperience",
            modelFactory: k,
            controllerFactory: H,
            getTitle: o(function() {
                return D("sJSBFeLMl0GZKCZgiwT2XQ#Title", "TradingExperience")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.TradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [N, I]
        }, f
    }, "componentFactory"),
    ce = se();
export {
    H as controllerModule, k as modelModule, ce as viewModule, L as webFlowControllerModule
};