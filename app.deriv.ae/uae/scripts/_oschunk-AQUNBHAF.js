import {
    a as H
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as R
} from "./_oschunk-V3QAPXBF.js";
import {
    a as T
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
    h as w,
    i as z,
    j as q
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Y,
    g as x,
    m as F,
    n as k,
    q as M,
    r as U,
    s as B,
    t as A
} from "./_oschunk-4VHUVDBV.js";
import {
    a as W
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as P,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as o,
    e as X
} from "./_oschunk-M5BUVJ72.js";
var G = {};
var s = S; {
    let v = class v extends s.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, G);
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
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "1172c828-f5cf-4ce3-b9c1-0515dfec3c6b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    r = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "6e24e5b6-9872-46b7-9e65-26dd0eb69253"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var u = new s.DataTypes.VariableHolder;
                        u.value = P.getTradingSuitabilityConfigCache$Action("previous_trading_experience", e), t.variables.questionVar = u.value.questionOut, t.variables.previous_trading_experienceVar = u.value.answersOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectPreviousTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectPreviousTradingExperience$Action") || (this.__onSelectPreviousTradingExperience$Action = function(e, t) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnSelectPreviousTradingExperience", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectPreviousTradingExperience"), u.setAttribute("outsystems.function.key", "a9a54e7f-c4bb-42a8-b920-98131a541ca2"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSelectPreviousTradingExperience"), t = r.callContext(t);
                        var C = new s.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TradingSuitability.UserPreviousTradingExperience.OnSelectPreviousTradingExperience$vars")));
                        return C.value.selected_income_rangeInLocal = e, y.setprevious_trading_experience(C.value.selected_income_rangeInLocal), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "main-goal", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectPreviousTradingExperience$Action
        }
        set _onSelectPreviousTradingExperience$Action(e) {
            this.__onSelectPreviousTradingExperience$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "1172c828-f5cf-4ce3-b9c1-0515dfec3c6b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "6e24e5b6-9872-46b7-9e65-26dd0eb69253"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectPreviousTradingExperience$Action(e, t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnSelectPreviousTradingExperience__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnSelectPreviousTradingExperience"), r.setAttribute("outsystems.function.key", "a9a54e7f-c4bb-42a8-b920-98131a541ca2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectPreviousTradingExperience$Action, t, e)
                } finally {
                    r && r.end()
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
            return P.defaultTimeout
        }
    };
    o(v, "ControllerInner");
    let p = v;
    V = p, V.registerVariableGroupType("uae.TradingSuitability.UserPreviousTradingExperience.OnSelectPreviousTradingExperience$vars", [{
        name: "selected_income_range",
        attrName: "selected_income_rangeInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var V, I = new s.Controller.ControllerFactory(V, W);
var a = X(Y());
var g = S,
    D = class D extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("previous_trading_experience", "previous_trading_experienceVar", "previous_trading_experience", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
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
        setInputs(v) {}
    };
o(_, "Model");
var O = _;
O._hasValidationWidgetsValue = void 0;
var $ = new g.Model.ModelFactory(O);
var h = x.PlaceholderContent,
    Z = x.IteratorPlaceholderContent,
    ee = o(function() {
        var p = k(function(v) {
            var d = v.model,
                e = v.controller,
                t = v.controller.idService,
                n = e.validationService,
                r = e.callContext(),
                i = B,
                u = A,
                C = {
                    props: v,
                    validateWidget: o(function(l) {
                        v.validateWidget(v, l)
                    }, "validateWidget")
                },
                c = d,
                j = U,
                ne = M,
                b = F();
            return a.createElement("div", v.rootNodeProperties, a.createElement(T, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0,
                    has_close_icon: !0
                },
                events: {
                    _handleError: o(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    closeEvent$Action: o(function() {
                        var l = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(l))
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
                        }, a.createElement(w, {
                            style: "heading2 font-extra-bold margin-bottom-base",
                            value: d.variables.questionVar,
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
                        }, j(d.variables.previous_trading_experienceVar.length < 1, !1, this, function() {
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
                                source: d.variables.previous_trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    content: new Z(function(l, m) {
                                        return [a.createElement(q, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var J = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                e.onSelectPreviousTradingExperience$Action(d.variables.previous_trading_experienceVar.getCurrent(m.iterationContext), e.callContext(J))
                                            }, "onClick"),
                                            style: d.getCachedValue(l.getId("ListItem1.Style"), function() {
                                                return d.variables.previous_trading_experienceVar.getCurrent(m.iterationContext) === y.getprevious_trading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.previous_trading_experienceVar.getCurrent(m.iterationContext)
                                            }, function() {
                                                return y.getprevious_trading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: l,
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
                                                            service: l,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, a.createElement(w, {
                                                        value: d.variables.previous_trading_experienceVar.getCurrent(m.iterationContext),
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }))]
                                                }),
                                                rightActions: h.Empty
                                            },
                                            _dependencies: [i(d.variables.previous_trading_experienceVar.getCurrent(m.iterationContext))]
                                        })]
                                    }, r, t, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    }),
                    footer: h.Empty
                },
                _dependencies: [i(d.variables.previous_trading_experienceVar), i(d.variables.questionVar)]
            }), a.createElement(H, {
                getOwnerSpan: o(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: d.variables.showStopOnboardingVar
                },
                events: {
                    _handleError: o(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var l = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(l))
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
                    codeFunction: "UserPreviousTradingExperience",
                    functionKey: "6b3340d7-012d-4c5d-ae8c-7ed46ebafab5",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.UserPreviousTradingExperience",
            modelFactory: $,
            controllerFactory: I,
            getTitle: o(function() {
                return A("10Azay0BXUyujH7Ubrr6tQ#Title", "UserPreviousTradingExperience")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TradingSuitability.UserPreviousTradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [T, H]
        }, p
    }, "componentFactory"),
    te = ee();
export {
    I as controllerModule, $ as modelModule, te as viewModule, R as webFlowControllerModule
};