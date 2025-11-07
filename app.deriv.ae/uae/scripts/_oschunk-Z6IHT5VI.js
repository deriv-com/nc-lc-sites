import {
    a as L
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as H
} from "./_oschunk-V3QAPXBF.js";
import {
    a as N
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as v,
    h as V,
    i as j,
    j as K
} from "./_oschunk-VR5BNL2K.js";
import {
    a as te,
    g as R,
    m as J,
    n as U,
    q as z,
    r as B,
    s as q,
    t as D
} from "./_oschunk-4VHUVDBV.js";
import {
    a as M
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as x,
    cb as E,
    ub as S
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    c as o,
    e as ee
} from "./_oschunk-M5BUVJ72.js";
var Q = {};

function $(g, f, d, e) {
    let r = JSON.parse(g.Response);
    g.instruments_trading_experience_list = JSON.stringify(r.instruments_trading_experience), g.previous_trading_experience_list = JSON.stringify(r.previous_trading_experience), g.trading_experience_list = JSON.stringify(r.trading_experience)
}
o($, "default");
var n = C; {
    let f = class f extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Q);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(i) {
                    return i && (i.setAttribute("code.function", "GetTradingSuitabilityConfig"), i.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/TradingSuitability/UserTradingExperience/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", a, t.callContext(r), void 0, void 0, !0).then(function(u) {
                            var p = new(t.constructor.getVariableGroupType("uae.TradingSuitability.UserTradingExperience$ActionGetTradingSuitabilityConfig"));
                            return p.responseOut = n.DataConversion.ServerDataConverter.from(u.Response, E), p
                        })
                    }, function() {
                        i && i.end()
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
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("StopOnboardingOnContinue", function(a) {
                    a && (a.setAttribute("code.function", "StopOnboardingOnContinue"), a.setAttribute("outsystems.function.key", "33dc459d-e6ca-47f7-88e2-7049a753e260"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), r.variables.showStopOnboardingVar = !r.variables.showStopOnboardingVar
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "4c806da9-99f4-4e03-b3da-4bb5b5597aab"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, t._getTradingSuitability$Action(e).then(function() {
                                u.value = x.getTradingSuitabilityConfigCache$Action("trading_experience", e), r.variables.isLoadingVar = !1, r.variables.questionVar = u.value.questionOut, r.variables.trading_experienceVar = u.value.answersOut
                            })
                        })
                    }, function() {
                        a && a.end()
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
                    i = this.idService;
                return n.Logger.startActiveSpan("GetTradingSuitability", function(a) {
                    return a && (a.setAttribute("code.function", "GetTradingSuitability"), a.setAttribute("outsystems.function.key", "93b2ee62-c139-4d3b-bed0-fa9e15bad0ab"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetTradingSuitability"), e = t.callContext(e);
                        var u = new n.DataTypes.VariableHolder,
                            p = new n.DataTypes.VariableHolder,
                            s = new n.DataTypes.VariableHolder,
                            A = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        return n.Flow.executeAsyncFlow(function() {
                            return p.value = x.getAuth$Action(e), r.flush(), t.getTradingSuitabilityConfig$ServerAction(p.value.tokenOut, e).then(function(_) {
                                u.value = _
                            }).then(function() {
                                A.value.jSONOut = n.JSONUtils.serializeToJSON(u.value.responseOut.dataAttr, !1, !1), s.value = n.Logger.startActiveSpan("ParseDara", function(_) {
                                    _ && (_.setAttribute("code.function", "ParseDara"), _.setAttribute("outsystems.function.key", "6d7b07e5-34cf-4224-b828-fe8de7af99fc"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode($, "ParseDara", "GetTradingSuitability", {
                                            Response: n.DataConversion.JSNodeParamConverter.to(A.value.jSONOut, n.DataTypes.DataTypes.Text),
                                            instruments_trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                            previous_trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                            trading_experience_list: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                        }, function(b) {
                                            var c = new(t.constructor.getVariableGroupType("uae.TradingSuitability.UserTradingExperience.GetTradingSuitability$parseDaraJSResult"));
                                            return c.instruments_trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(b.instruments_trading_experience_list, n.DataTypes.DataTypes.Text), c.previous_trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(b.previous_trading_experience_list, n.DataTypes.DataTypes.Text), c.trading_experience_listOut = n.DataConversion.JSNodeParamConverter.from(b.trading_experience_list, n.DataTypes.DataTypes.Text), c
                                        }, {}, {})
                                    } finally {
                                        _ && _.end()
                                    }
                                }, 1), S.setinstruments_trading_experience_list(s.value.instruments_trading_experience_listOut), S.setprevious_trading_experience_list(s.value.previous_trading_experience_listOut), S.settrading_experience_list(s.value.trading_experience_listOut)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getTradingSuitability$Action
        }
        set _getTradingSuitability$Action(e) {
            this.__getTradingSuitability$Action = e
        }
        get _onSelectTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectTradingExperience$Action") || (this.__onSelectTradingExperience$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnSelectTradingExperience", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectTradingExperience"), u.setAttribute("outsystems.function.key", "c33e6c09-1222-45c3-9b10-65d6a1ce50f4"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectTradingExperience"), r = i.callContext(r);
                        var p = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.TradingSuitability.UserTradingExperience.OnSelectTradingExperience$vars")));
                        return p.value.selected_income_rangeInLocal = e, S.settrading_experience(p.value.selected_income_rangeInLocal), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "user/cfd-trading-experience", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectTradingExperience$Action
        }
        set _onSelectTradingExperience$Action(e) {
            this.__onSelectTradingExperience$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "33dc459d-e6ca-47f7-88e2-7049a753e260"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4c806da9-99f4-4e03-b3da-4bb5b5597aab"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getTradingSuitability$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("GetTradingSuitability__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetTradingSuitability"), t.setAttribute("outsystems.function.key", "93b2ee62-c139-4d3b-bed0-fa9e15bad0ab"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getTradingSuitability$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onSelectTradingExperience$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnSelectTradingExperience__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectTradingExperience"), i.setAttribute("outsystems.function.key", "c33e6c09-1222-45c3-9b10-65d6a1ce50f4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectTradingExperience$Action, r, e)
                } finally {
                    i && i.end()
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
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
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
                return H.default.handleError(e, this.callContext())
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
    o(f, "ControllerInner");
    let g = f;
    T = g, T.registerVariableGroupType("uae.TradingSuitability.UserTradingExperience$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), T.registerVariableGroupType("uae.TradingSuitability.UserTradingExperience.GetTradingSuitability$parseDaraJSResult", [{
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
    }]), T.registerVariableGroupType("uae.TradingSuitability.UserTradingExperience.OnSelectTradingExperience$vars", [{
        name: "selected_income_range",
        attrName: "selected_income_rangeInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, I = new n.Controller.ControllerFactory(T, M);
var l = ee(te());
var y = C,
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
var w = W;
w.init();
var G = class G extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(G, "WidgetsRecord");
var F = G,
    h = class h extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(f) {}
    };
o(h, "Model");
var P = h;
P._hasValidationWidgetsValue = void 0;
var k = new y.Model.ModelFactory(P);
var O = R.PlaceholderContent,
    ne = R.IteratorPlaceholderContent,
    re = o(function() {
        var g = U(function(f) {
            var d = f.model,
                e = f.controller,
                r = f.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                a = q,
                u = D,
                p = {
                    props: f,
                    validateWidget: o(function(c) {
                        f.validateWidget(f, c)
                    }, "validateWidget")
                },
                s = d,
                A = B,
                _ = z,
                b = J();
            return l.createElement("div", f.rootNodeProperties, l.createElement(N, {
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
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    closeEvent$Action: o(function() {
                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(c))
                    }, "closeEvent$Action")
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
                    content: new O(function() {
                        return [l.createElement(v, {
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
                            style: "heading2 font-extra-bold margin-bottom-base",
                            value: d.variables.questionVar,
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: s
                        }), l.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: s
                        }, A(d.variables.trading_experienceVar.length < 1 || d.variables.isLoadingVar, !1, this, function() {
                            return [l.createElement(v, {
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
                            }, l.createElement(v, {
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
                            }), l.createElement(v, {
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
                            }), l.createElement(v, {
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
                            }), l.createElement(v, {
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
                                source: d.variables.trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    content: new ne(function(c, m) {
                                        return [l.createElement(K, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                var Y = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                e.onSelectTradingExperience$Action(d.variables.trading_experienceVar.getCurrent(m.iterationContext), e.callContext(Y))
                                            }, "onClick"),
                                            style: d.getCachedValue(c.getId("ListItem1.Style"), function() {
                                                return d.variables.trading_experienceVar.getCurrent(m.iterationContext) === S.gettrading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.trading_experienceVar.getCurrent(m.iterationContext)
                                            }, function() {
                                                return S.gettrading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: c,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: s,
                                            placeholders: {
                                                leftActions: O.Empty,
                                                content: new O(function() {
                                                    return [l.createElement(v, {
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
                                                        _widgetRecordProvider: s
                                                    }, l.createElement(V, {
                                                        value: d.variables.trading_experienceVar.getCurrent(m.iterationContext),
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }))]
                                                }),
                                                rightActions: O.Empty
                                            },
                                            _dependencies: [a(d.variables.trading_experienceVar.getCurrent(m.iterationContext))]
                                        })]
                                    }, i, r, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    }),
                    footer: O.Empty
                },
                _dependencies: [a(d.variables.isLoadingVar), a(d.variables.trading_experienceVar), a(d.variables.questionVar)]
            }), l.createElement(L, {
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
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(c))
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
                    codeFunction: "UserTradingExperience",
                    functionKey: "53e314d3-641d-4369-9d0a-b22959181ec8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.UserTradingExperience",
            modelFactory: k,
            controllerFactory: I,
            getTitle: o(function() {
                return D("0xTjUx1kaUOdCrIpWRgeyA#Title", "UserTradingExperience")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TradingSuitability.UserTradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [N, L]
        }, g
    }, "componentFactory"),
    ie = re();
export {
    I as controllerModule, k as modelModule, ie as viewModule, H as webFlowControllerModule
};