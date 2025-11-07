import {
    a as H
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as x
} from "./_oschunk-V3QAPXBF.js";
import {
    a as R
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as y,
    h as P,
    i as z,
    j as B
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Y,
    g as A,
    m as N,
    n as W,
    q as k,
    r as M,
    s as U,
    t as T
} from "./_oschunk-4VHUVDBV.js";
import {
    a as D
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as w,
    ub as _
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as o,
    e as X
} from "./_oschunk-M5BUVJ72.js";
var G = {};
var s = S; {
    let f = class f extends s.Controller.BaseViewController {
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
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "2c98de85-6014-4bf4-abee-1298f754e723"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "4289cbbc-8b28-45cd-9cbe-fe46dafda817"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var u = new s.DataTypes.VariableHolder;
                        u.value = w.getTradingSuitabilityConfigCache$Action("trading_experience", e), t.variables.questionVar = u.value.questionOut, t.variables.trading_frequencyVar = u.value.answersOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectTradingFrequency$Action() {
            return this.hasOwnProperty("__onSelectTradingFrequency$Action") || (this.__onSelectTradingFrequency$Action = function(e, t) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnSelectTradingFrequency", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectTradingFrequency"), u.setAttribute("outsystems.function.key", "ab6261fb-5bdf-4793-bbbe-94776ae48c6d"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSelectTradingFrequency"), t = r.callContext(t);
                        var C = new s.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TradingSuitability.UserTradingFrequency.OnSelectTradingFrequency$vars")));
                        return C.value.selected_trading_frequencyInLocal = e, _.settrading_experience(C.value.selected_trading_frequencyInLocal), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "user/cfd-trading-experience", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectTradingFrequency$Action
        }
        set _onSelectTradingFrequency$Action(e) {
            this.__onSelectTradingFrequency$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "2c98de85-6014-4bf4-abee-1298f754e723"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "4289cbbc-8b28-45cd-9cbe-fe46dafda817"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectTradingFrequency$Action(e, t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnSelectTradingFrequency__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnSelectTradingFrequency"), r.setAttribute("outsystems.function.key", "ab6261fb-5bdf-4793-bbbe-94776ae48c6d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectTradingFrequency$Action, t, e)
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
                return x.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(f, "ControllerInner");
    let v = f;
    V = v, V.registerVariableGroupType("uae.TradingSuitability.UserTradingFrequency.OnSelectTradingFrequency$vars", [{
        name: "selected_trading_frequency",
        attrName: "selected_trading_frequencyInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var V, F = new s.Controller.ControllerFactory(V, D);
var a = X(Y());
var g = S,
    L = class L extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("trading_frequency", "trading_frequencyVar", "trading_frequency", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new g.DataTypes.TextList)
            }, !1, g.DataTypes.TextList), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionVar", "Question", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(L, "VariablesRecord");
var O = L;
O.init();
var $ = class $ extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o($, "WidgetsRecord");
var q = $,
    h = class h extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return q
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(f) {}
    };
o(h, "Model");
var E = h;
E._hasValidationWidgetsValue = void 0;
var I = new g.Model.ModelFactory(E);
var b = A.PlaceholderContent,
    Z = A.IteratorPlaceholderContent,
    ee = o(function() {
        var v = W(function(f) {
            var l = f.model,
                e = f.controller,
                t = f.controller.idService,
                n = e.validationService,
                r = e.callContext(),
                i = U,
                u = T,
                C = {
                    props: f,
                    validateWidget: o(function(c) {
                        f.validateWidget(f, c)
                    }, "validateWidget")
                },
                d = l,
                K = M,
                ne = k,
                p = N();
            return a.createElement("div", f.rootNodeProperties, a.createElement(R, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_close_icon: !0,
                    has_back_button: !0
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    closeEvent$Action: o(function() {
                        var c = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(c))
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
                _widgetRecordProvider: d,
                placeholders: {
                    content: new b(function() {
                        return [a.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: d
                        }, a.createElement(P, {
                            style: "heading2 font-extra-bold margin-bottom-base",
                            value: l.variables.questionVar,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: d
                        }), a.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: d
                        }, K(l.variables.trading_frequencyVar.length < 1, !1, this, function() {
                            return [a.createElement(y, {
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
                                _widgetRecordProvider: d
                            }, a.createElement(y, {
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
                                _widgetRecordProvider: d
                            }), a.createElement(y, {
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
                                _widgetRecordProvider: d
                            }), a.createElement(y, {
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
                                _widgetRecordProvider: d
                            }), a.createElement(y, {
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
                                _widgetRecordProvider: d
                            }))]
                        }, function() {
                            return [a.createElement(z, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: l.variables.trading_frequencyVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: d,
                                placeholders: {
                                    content: new Z(function(c, m) {
                                        return [a.createElement(B, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var j = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                e.onSelectTradingFrequency$Action(l.variables.trading_frequencyVar.getCurrent(m.iterationContext), e.callContext(j))
                                            }, "onClick"),
                                            style: l.getCachedValue(c.getId("ListItem1.Style"), function() {
                                                return l.variables.trading_frequencyVar.getCurrent(m.iterationContext) === _.gettrading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return l.variables.trading_frequencyVar.getCurrent(m.iterationContext)
                                            }, function() {
                                                return _.gettrading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: c,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: d,
                                            placeholders: {
                                                leftActions: b.Empty,
                                                content: new b(function() {
                                                    return [a.createElement(y, {
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
                                                            service: c,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: d
                                                    }, a.createElement(P, {
                                                        value: l.variables.trading_frequencyVar.getCurrent(m.iterationContext),
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: d
                                                    }))]
                                                }),
                                                rightActions: b.Empty
                                            },
                                            _dependencies: [i(l.variables.trading_frequencyVar.getCurrent(m.iterationContext))]
                                        })]
                                    }, r, t, "1")
                                },
                                _dependencies: [i(_.gettrading_experience())]
                            })]
                        })))]
                    }),
                    footer: b.Empty
                },
                _dependencies: [i(_.gettrading_experience()), i(l.variables.trading_frequencyVar), i(l.variables.questionVar)]
            }), a.createElement(H, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: l.variables.showStopOnboardingVar
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var c = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(c))
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
                _widgetRecordProvider: d,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "UserTradingFrequency",
                    functionKey: "74709ecc-9eec-4b0c-a273-e15d876ad145",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.UserTradingFrequency",
            modelFactory: I,
            controllerFactory: F,
            getTitle: o(function() {
                return T("zJ5wdOyeDEuic+Fdh2rRRQ#Title", "UserTradingFrequency")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TradingSuitability.UserTradingFrequency.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [R, H]
        }, v
    }, "componentFactory"),
    te = ee();
export {
    F as controllerModule, I as modelModule, te as viewModule, x as webFlowControllerModule
};