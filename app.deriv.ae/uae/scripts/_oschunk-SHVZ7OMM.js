import {
    a as R
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as T
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as P
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as I,
    i as q,
    j as K
} from "./_oschunk-VR5BNL2K.js";
import {
    a as te,
    g as x,
    m as M,
    n as U,
    q as B,
    r as G,
    s as Q,
    t as w
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as k,
    Sb as C,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as h,
    c as o,
    e as ee,
    m as F,
    n as W
} from "./_oschunk-M5BUVJ72.js";
var ne = {
        "dGLlkYoCCEu70D1FZVSI+Q#Value.-1438211874.1": "\u0645\u062F\u0649 \u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644"
    },
    J = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        }
    };
var a = h; {
    let u = class u extends a.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, J);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectInstrumentsTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectInstrumentsTradingExperience$Action") || (this.__onSelectInstrumentsTradingExperience$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnSelectInstrumentsTradingExperience", function(d) {
                    d && (d.setAttribute("code.function", "OnSelectInstrumentsTradingExperience"), d.setAttribute("outsystems.function.key", "1bd052c4-7414-4cf0-942b-669944e98ae1"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectInstrumentsTradingExperience"), n = i.callContext(n);
                        var A = new a.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.InstrumentsTradingExperience.OnSelectInstrumentsTradingExperience$vars")));
                        return A.value.instrument_trading_expInLocal = e, y.setinstruments_trading_experience(A.value.instrument_trading_expInLocal), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "previous-trading-experience", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.None), n, !0)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onSelectInstrumentsTradingExperience$Action
        }
        set _onSelectInstrumentsTradingExperience$Action(e) {
            this.__onSelectInstrumentsTradingExperience$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "2cbf05f7-e7b5-4e11-a686-a4ef4b37f4af"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), n.variables.showStopOnboardingVar = !n.variables.showStopOnboardingVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "37ed1bc4-111e-4021-84a4-a6b91fa4647e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var d = new a.DataTypes.VariableHolder;
                        d.value = C.getTradingSuitabilityConfigCache$Action("instruments_trading_experience", e), n.variables.questionVar = d.value.questionOut, n.variables.instruments_trading_experienceVar = d.value.answersOut
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
                return a.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "ec334913-09c9-4c98-aad5-8fd9d0a255f2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), y.setRealSignupCurrentStep(5)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onSelectInstrumentsTradingExperience$Action(e, n) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnSelectInstrumentsTradingExperience__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectInstrumentsTradingExperience"), i.setAttribute("outsystems.function.key", "1bd052c4-7414-4cf0-942b-669944e98ae1"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectInstrumentsTradingExperience$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "2cbf05f7-e7b5-4e11-a686-a4ef4b37f4af"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "37ed1bc4-111e-4021-84a4-a6b91fa4647e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "ec334913-09c9-4c98-aad5-8fd9d0a255f2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                return R.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let v = u;
    V = v, V.registerVariableGroupType("uae.OnboardingFlow.InstrumentsTradingExperience.OnSelectInstrumentsTradingExperience$vars", [{
        name: "instrument_trading_exp",
        attrName: "instrument_trading_expInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var V, H = new a.Controller.ControllerFactory(V, z);
var s = ee(te());
var f = h,
    N = class N extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("instruments_trading_experience", "instruments_trading_experienceVar", "instruments_trading_experience", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new f.DataTypes.TextList)
            }, !1, f.DataTypes.TextList), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionVar", "Question", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(N, "VariablesRecord");
var S = N;
S.init();
var D = class D extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(D, "WidgetsRecord");
var L = D,
    p = class p extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0 || void 0), p._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
o(p, "Model");
var O = p;
O._hasValidationWidgetsValue = void 0;
var $ = new f.Model.ModelFactory(O);
var E = x.PlaceholderContent,
    re = x.IteratorPlaceholderContent,
    ie = o(function() {
        var v = U(function(u) {
            var c = u.model,
                e = u.controller,
                n = u.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                r = Q,
                d = w,
                A = {
                    props: u,
                    validateWidget: o(function(m) {
                        u.validateWidget(u, m)
                    }, "validateWidget")
                },
                l = c,
                j = G,
                ae = B,
                b = M();
            return s.createElement("div", u.rootNodeProperties, s.createElement(T, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldEmitPreviousEvent: !1,
                    shouldShowProgressBarInMobile: !0,
                    Title: F.resolve(W.TranslationsService).getMessage("dGLlkYoCCEu70D1FZVSI+Q#Value.-1438211874.1", "Trading suitability"),
                    ProgressBarPercentage: 83
                },
                events: {
                    _handleError: o(function(m) {
                        e.handleError(m)
                    }, "_handleError")
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
                        return [s.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: l
                        }, s.createElement(I, {
                            style: c.getCachedValue(n.getId("hSQK_vAMpkGI4f0v1yNQ5Q.Style"), function() {
                                return k.isDesktop$Action(i).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                            }),
                            value: c.variables.questionVar,
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: l
                        }), s.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: l
                        }, j(c.variables.instruments_trading_experienceVar.length < 1, !1, this, function() {
                            return [s.createElement(g, {
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
                            }, s.createElement(g, {
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
                            }), s.createElement(g, {
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
                            }), s.createElement(g, {
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
                            }), s.createElement(g, {
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
                            return [s.createElement(q, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: c.variables.instruments_trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    content: new re(function(m, _) {
                                        return [s.createElement(K, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var X = typeof _ != "undefined" && _ !== null ? _.clone() : e.callContext().clone();
                                                e.onSelectInstrumentsTradingExperience$Action(c.variables.instruments_trading_experienceVar.getCurrent(_.iterationContext), e.callContext(X))
                                            }, "onClick"),
                                            style: c.getCachedValue(m.getId("ListItem1.Style"), function() {
                                                return c.variables.instruments_trading_experienceVar.getCurrent(_.iterationContext) === y.getinstruments_trading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return c.variables.instruments_trading_experienceVar.getCurrent(_.iterationContext)
                                            }, function() {
                                                return y.getinstruments_trading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: m,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: l,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [s.createElement(g, {
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
                                                            service: m,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }, s.createElement(I, {
                                                        value: c.variables.instruments_trading_experienceVar.getCurrent(_.iterationContext),
                                                        _idProps: {
                                                            service: m,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [r(c.variables.instruments_trading_experienceVar.getCurrent(_.iterationContext))]
                                        })]
                                    }, i, n, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    })
                },
                _dependencies: [r(c.variables.instruments_trading_experienceVar), r(c.variables.questionVar)]
            }), s.createElement(P, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(m) {
                        e.handleError(m)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var m = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(m))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "13",
                    alias: "2"
                },
                _widgetRecordProvider: l,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "InstrumentsTradingExperience",
                    functionKey: "dd084055-ed5d-4b5d-abe8-bfb1d9400908",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.InstrumentsTradingExperience",
            modelFactory: $,
            controllerFactory: H,
            getTitle: o(function() {
                return w("VUAI3V3tXUur6L+x2UAJCA#Title", "InstrumentsTradingExperience")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.InstrumentsTradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [T, P]
        }, v
    }, "componentFactory"),
    oe = ie();
export {
    H as controllerModule, $ as modelModule, oe as viewModule, R as webFlowControllerModule
};