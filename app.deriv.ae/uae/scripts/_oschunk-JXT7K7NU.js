import {
    a as I
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as R
} from "./_oschunk-V3QAPXBF.js";
import {
    a as P
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f,
    h as T,
    i as z,
    j as G
} from "./_oschunk-VR5BNL2K.js";
import {
    a as X,
    g as A,
    m as F,
    n as k,
    q as M,
    r as U,
    s as B,
    t as w
} from "./_oschunk-4VHUVDBV.js";
import {
    a as W
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as x,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as o,
    e as j
} from "./_oschunk-M5BUVJ72.js";
var q = {};
var s = S; {
    let u = class u extends s.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, q);
            var r = this.controller;
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
                var t = this.model,
                    n = this.controller,
                    r = this.idService;
                return s.Logger.startActiveSpan("StopOnboardingOnContinue", function(i) {
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "211738de-7cc0-4a08-916c-09ef998d4017"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("StopOnboardingOnContinue"), e = n.callContext(e), t.variables.showStopOnboardingVar = !t.variables.showStopOnboardingVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onSelectInstrumentsTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectInstrumentsTradingExperience$Action") || (this.__onSelectInstrumentsTradingExperience$Action = function(e, t) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnSelectInstrumentsTradingExperience", function(l) {
                    l && (l.setAttribute("code.function", "OnSelectInstrumentsTradingExperience"), l.setAttribute("outsystems.function.key", "32740264-4db8-47c7-af96-6ede1767bac0"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSelectInstrumentsTradingExperience"), t = r.callContext(t);
                        var C = new s.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TradingSuitability.UserInstrumentsTradingExperience.OnSelectInstrumentsTradingExperience$vars")));
                        return C.value.instrument_trading_expInLocal = e, y.setinstruments_trading_experience(C.value.instrument_trading_expInLocal), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "user/previous-trading-experience", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onSelectInstrumentsTradingExperience$Action
        }
        set _onSelectInstrumentsTradingExperience$Action(e) {
            this.__onSelectInstrumentsTradingExperience$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    r = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "ab0b4a4c-c858-449d-a4f4-f649442c598c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var l = new s.DataTypes.VariableHolder;
                        l.value = x.getTradingSuitabilityConfigCache$Action("instruments_trading_experience", e), t.variables.questionVar = l.value.questionOut, t.variables.instruments_trading_experienceVar = l.value.answersOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "211738de-7cc0-4a08-916c-09ef998d4017"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectInstrumentsTradingExperience$Action(e, t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnSelectInstrumentsTradingExperience__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnSelectInstrumentsTradingExperience"), r.setAttribute("outsystems.function.key", "32740264-4db8-47c7-af96-6ede1767bac0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectInstrumentsTradingExperience$Action, t, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ab0b4a4c-c858-449d-a4f4-f649442c598c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    r = this.idService;
                return t.onReady$Action(e)
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
            return x.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let v = u;
    H = v, H.registerVariableGroupType("uae.TradingSuitability.UserInstrumentsTradingExperience.OnSelectInstrumentsTradingExperience$vars", [{
        name: "instrument_trading_exp",
        attrName: "instrument_trading_expInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var H, V = new s.Controller.ControllerFactory(H, W);
var a = j(X());
var g = S,
    D = class D extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("instruments_trading_experience", "instruments_trading_experienceVar", "instruments_trading_experience", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new g.DataTypes.TextList)
            }, !1, g.DataTypes.TextList), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionVar", "Question", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(D, "VariablesRecord");
var E = D;
E.init();
var N = class N extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(N, "WidgetsRecord");
var L = N,
    _ = class _ extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
o(_, "Model");
var O = _;
O._hasValidationWidgetsValue = void 0;
var $ = new g.Model.ModelFactory(O);
var h = A.PlaceholderContent,
    Z = A.IteratorPlaceholderContent,
    ee = o(function() {
        var v = k(function(u) {
            var m = u.model,
                e = u.controller,
                t = u.controller.idService,
                n = e.validationService,
                r = e.callContext(),
                i = B,
                l = w,
                C = {
                    props: u,
                    validateWidget: o(function(d) {
                        u.validateWidget(u, d)
                    }, "validateWidget")
                },
                c = m,
                Y = U,
                ne = M,
                b = F();
            return a.createElement("div", u.rootNodeProperties, a.createElement(P, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_close_icon: !0,
                    has_back_button: !0
                },
                events: {
                    _handleError: o(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    closeEvent$Action: o(function() {
                        var d = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(d))
                    }, "closeEvent$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    content: new h(function() {
                        return [a.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: c
                        }, a.createElement(T, {
                            style: "heading2 font-extra-bold margin-bottom-base",
                            value: m.variables.questionVar,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: c
                        }), a.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: c
                        }, Y(m.variables.instruments_trading_experienceVar.length < 1, !1, this, function() {
                            return [a.createElement(f, {
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
                                    service: t,
                                    name: "LoaderContainer2"
                                },
                                _widgetRecordProvider: c
                            }, a.createElement(f, {
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
                                    service: t,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: c
                            }), a.createElement(f, {
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
                                    service: t,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: c
                            }), a.createElement(f, {
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
                                    service: t,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: c
                            }), a.createElement(f, {
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
                                    service: t,
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: c
                            }))]
                        }, function() {
                            return [a.createElement(z, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: m.variables.instruments_trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    content: new Z(function(d, p) {
                                        return [a.createElement(G, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var J = typeof p != "undefined" && p !== null ? p.clone() : e.callContext().clone();
                                                e.onSelectInstrumentsTradingExperience$Action(m.variables.instruments_trading_experienceVar.getCurrent(p.iterationContext), e.callContext(J))
                                            }, "onClick"),
                                            style: m.getCachedValue(d.getId("ListItem1.Style"), function() {
                                                return m.variables.instruments_trading_experienceVar.getCurrent(p.iterationContext) === y.getinstruments_trading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return m.variables.instruments_trading_experienceVar.getCurrent(p.iterationContext)
                                            }, function() {
                                                return y.getinstruments_trading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: d,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: c,
                                            placeholders: {
                                                leftActions: h.Empty,
                                                content: new h(function() {
                                                    return [a.createElement(f, {
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
                                                        _widgetRecordProvider: c
                                                    }, a.createElement(T, {
                                                        value: m.variables.instruments_trading_experienceVar.getCurrent(p.iterationContext),
                                                        _idProps: {
                                                            service: d,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }))]
                                                }),
                                                rightActions: h.Empty
                                            },
                                            _dependencies: [i(m.variables.instruments_trading_experienceVar.getCurrent(p.iterationContext))]
                                        })]
                                    }, r, t, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    }),
                    footer: h.Empty
                },
                _dependencies: [i(m.variables.instruments_trading_experienceVar), i(m.variables.questionVar)]
            }), a.createElement(I, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var d = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(d))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "13",
                    alias: "2"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "UserInstrumentsTradingExperience",
                    functionKey: "4f746191-a8f1-4bb2-9885-a8a0f4ec6f61",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.UserInstrumentsTradingExperience",
            modelFactory: $,
            controllerFactory: V,
            getTitle: o(function() {
                return w("kWF0T_GoskuYhaig9OxvYQ#Title", "UserInstrumentsTradingExperience")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TradingSuitability.UserInstrumentsTradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [P, I]
        }, v
    }, "componentFactory"),
    te = ee();
export {
    V as controllerModule, $ as modelModule, te as viewModule, R as webFlowControllerModule
};