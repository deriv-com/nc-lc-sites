import {
    a as k
} from "./_oschunk-OWG424DW.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as F
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as N
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as T,
    i as L,
    j as H,
    n as W,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as I,
    m as Z,
    n as X,
    q as ee,
    r as te,
    s as x,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Y
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as j,
    Sb as b,
    ub as v
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    c,
    e as se,
    m as q,
    n as J,
    p as R
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "JDUBq4OTQk+ABb0Fd9_Wcw#Value": "\u062F\u062E\u0644\u0643 \u0627\u0644\u0633\u0646\u0648\u064A \u0627\u0644\u0635\u0627\u0641\u064A",
        "f_7Wm5Zpg0CepoxOptWoqQ#Value": "\u062F\u062E\u0644\u0643 \u0627\u0644\u0633\u0646\u0648\u064A \u0627\u0644\u0635\u0627\u0641\u064A",
        "0IdiKcmblESAShpNoC1oVQ#Title": "\u0627\u0644\u062F\u062E\u0644 \u0627\u0644\u0633\u0646\u0648\u064A | Deriv",
        "0IdiKcmblESAShpNoC1oVQ#TitleExpression.-416286460.1": "\u0627\u0644\u062F\u062E\u0644 \u0627\u0644\u0633\u0646\u0648\u064A | Deriv"
    },
    ne = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var u = C; {
    let m = class m extends u.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, ne);
            var a = this.controller;
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
                    a = this.idService;
                return u.Logger.startActiveSpan("StopOnboardingOnContinue", function(o) {
                    o && (o.setAttribute("code.function", "StopOnboardingOnContinue"), o.setAttribute("outsystems.function.key", "2e513d46-1fa5-44a8-9904-5be116c3609b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("StopOnboardingOnContinue"), e = n.callContext(e), t.variables.is_stand_aloneIn) return u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), e, !0);
                        t.variables.shouldStopOnboardingVar = !t.variables.shouldStopOnboardingVar
                    } finally {
                        o && o.end()
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
                    a = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "50e9ee24-c570-4a57-b0f9-df2e61f71eb3"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var f = new u.DataTypes.VariableHolder;
                        f.value = b.getFinancialAssessmentConfigCache$Action("net_annual_income", e), t.variables.annual_income2Var = f.value.configValueOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectAnnualIncome$Action() {
            return this.hasOwnProperty("__onSelectAnnualIncome$Action") || (this.__onSelectAnnualIncome$Action = function(e, t) {
                var n = this.model,
                    a = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnSelectAnnualIncome", function(f) {
                    f && (f.setAttribute("code.function", "OnSelectAnnualIncome"), f.setAttribute("outsystems.function.key", "93f5369a-999d-4190-af32-c9bf913148c9"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnSelectAnnualIncome"), t = a.callContext(t);
                        var P = new u.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserAnnualIncome.OnSelectAnnualIncome$vars")));
                        return P.value.annual_incomeInLocal = e, v.setannual_income(P.value.annual_incomeInLocal), n.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-net-worth", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSelectAnnualIncome$Action
        }
        set _onSelectAnnualIncome$Action(e) {
            this.__onSelectAnnualIncome$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "2e513d46-1fa5-44a8-9904-5be116c3609b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "50e9ee24-c570-4a57-b0f9-df2e61f71eb3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectAnnualIncome$Action(e, t) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnSelectAnnualIncome__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnSelectAnnualIncome"), a.setAttribute("outsystems.function.key", "93f5369a-999d-4190-af32-c9bf913148c9"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectAnnualIncome$Action, t, e)
                } finally {
                    a && a.end()
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
                    a = this.idService;
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
                return k.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    c(m, "ControllerInner");
    let y = m;
    M = y, M.registerVariableGroupType("uae.FinancialAssessmentFlow.UserAnnualIncome.OnSelectAnnualIncome$vars", [{
        name: "annual_income",
        attrName: "annual_incomeInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var M, U = new u.Controller.ControllerFactory(M, Y);
var i = se(le());
var _ = C,
    z = class z extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("annual_income2", "annual_income2Var", "annual_income2", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new _.DataTypes.TextList)
            }, !1, _.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(z, "VariablesRecord");
var A = z;
A.init();
var G = class G extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(G, "WidgetsRecord");
var B = G,
    S = class S extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(m) {
            "is_stand_alone" in m && (this.variables.is_stand_aloneIn = _.DataConversion.ServerDataConverter.from(m.is_stand_alone, _.DataTypes.DataTypes.Boolean))
        }
    };
c(S, "Model");
var E = S;
E._hasValidationWidgetsValue = void 0;
var Q = new _.Model.ModelFactory(E);
var p = I.PlaceholderContent,
    oe = I.IteratorPlaceholderContent,
    ue = c(function() {
        var y = X(function(m) {
            var l = m.model,
                e = m.controller,
                t = m.controller.idService,
                n = e.validationService,
                a = e.callContext(),
                o = x,
                f = V,
                P = {
                    props: m,
                    validateWidget: c(function(s) {
                        m.validateWidget(m, s)
                    }, "validateWidget")
                },
                r = l,
                O = te,
                K = ee,
                h = Z();
            return i.createElement("div", m.rootNodeProperties, O(j.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [i.createElement(N, {
                    getOwnerSpan: c(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: c(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeBtnEvent$Action: c(function() {
                            var s = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        contentbody: new p(function() {
                            return [i.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [K(f("f_7Wm5Zpg0CepoxOptWoqQ#Value", "Your net annual income"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: r
                            }, O(l.variables.annual_income2Var.length < 1, !1, this, function() {
                                return [i.createElement(g, {
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
                                        name: "LoaderContainer3"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(g, {
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
                                        name: "ListItemPlaceholder6"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                        name: "ListItemPlaceholder7"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                        name: "ListItemPlaceholder8"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                        name: "ListItemPlaceholder9"
                                    },
                                    _widgetRecordProvider: r
                                }))]
                            }, function() {
                                return [i.createElement(L, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.annual_income2Var,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new oe(function(s, d) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: c(function() {
                                                    var w = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    e.onSelectAnnualIncome$Action(l.variables.annual_income2Var.getCurrent(d.iterationContext), e.callContext(w))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem2.Style"), function() {
                                                    return l.variables.annual_income2Var.getCurrent(d.iterationContext) === v.getannual_income() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.annual_income2Var.getCurrent(d.iterationContext)
                                                }, function() {
                                                    return v.getannual_income()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: p.Empty,
                                                    content: new p(function() {
                                                        return [i.createElement(g, {
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
                                                                service: s,
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(T, {
                                                            value: l.getCachedValue(s.getId("RC+KsF5Fkku6yc2mUrBLLQ.Value"), function() {
                                                                return b.translate$Action(l.variables.annual_income2Var.getCurrent(d.iterationContext), d).translatedTextOut
                                                            }, function() {
                                                                return l.variables.annual_income2Var.getCurrent(d.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(g, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex; justify-content: center;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "32px",
                                                                marginLeft: "auto"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, O(l.variables.annual_income2Var.getCurrent(d.iterationContext) === v.getannual_income(), !1, this, function() {
                                                            return [i.createElement(W, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: p.Empty
                                                },
                                                _dependencies: [o(v.getannual_income()), o(l.variables.annual_income2Var.getCurrent(d.iterationContext))]
                                            })]
                                        }, a, t, "1")
                                    },
                                    _dependencies: [o(v.getannual_income())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [o(v.getannual_income()), o(l.variables.annual_income2Var)]
                })]
            }, function() {
                return [i.createElement(F, {
                    getOwnerSpan: c(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !l.variables.is_stand_aloneIn,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: c(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeEvent$Action: c(function() {
                            var s = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "15",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new p(function() {
                            return [i.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "mb-12",
                                text: [K(f("JDUBq4OTQk+ABb0Fd9_Wcw#Value", "Your net annual income"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: r
                            }, O(l.variables.annual_income2Var.length < 1, !1, this, function() {
                                return [i.createElement(g, {
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
                                    _widgetRecordProvider: r
                                }, i.createElement(g, {
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
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                    _widgetRecordProvider: r
                                }), i.createElement(g, {
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
                                    _widgetRecordProvider: r
                                }))]
                            }, function() {
                                return [i.createElement(L, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.annual_income2Var,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new oe(function(s, d) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: c(function() {
                                                    var w = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    e.onSelectAnnualIncome$Action(l.variables.annual_income2Var.getCurrent(d.iterationContext), e.callContext(w))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem1.Style"), function() {
                                                    return l.variables.annual_income2Var.getCurrent(d.iterationContext) === v.getannual_income() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.annual_income2Var.getCurrent(d.iterationContext)
                                                }, function() {
                                                    return v.getannual_income()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: p.Empty,
                                                    content: new p(function() {
                                                        return [i.createElement(g, {
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
                                                                service: s,
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(T, {
                                                            value: l.getCachedValue(s.getId("NerdiuQB8kGxu4MdJglxeQ.Value"), function() {
                                                                return b.translate$Action(l.variables.annual_income2Var.getCurrent(d.iterationContext), d).translatedTextOut
                                                            }, function() {
                                                                return l.variables.annual_income2Var.getCurrent(d.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(g, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex; justify-content: center;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "32px",
                                                                marginLeft: "auto"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, O(l.variables.annual_income2Var.getCurrent(d.iterationContext) === v.getannual_income(), !1, this, function() {
                                                            return [i.createElement(W, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: p.Empty
                                                },
                                                _dependencies: [o(v.getannual_income()), o(l.variables.annual_income2Var.getCurrent(d.iterationContext))]
                                            })]
                                        }, a, t, "2")
                                    },
                                    _dependencies: [o(v.getannual_income())]
                                })]
                            })))]
                        }),
                        footer: p.Empty
                    },
                    _dependencies: [o(v.getannual_income()), o(l.variables.annual_income2Var)]
                })]
            }), i.createElement($, {
                getOwnerSpan: c(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: l.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: c(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: c(function() {
                        var s = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(s))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "30",
                    alias: "3"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "UserAnnualIncome",
                    functionKey: "296287d0-9bc9-4494-804a-1a4da02d6855",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserAnnualIncome",
            modelFactory: Q,
            controllerFactory: U,
            getTitle: c(function(m) {
                var l = m.model,
                    e = m.controller,
                    t = m.controller.idService,
                    n = e.validationService,
                    a = e.callContext(),
                    o = x,
                    f = V,
                    P = {
                        props: m,
                        validateWidget: c(function(r) {
                            m.validateWidget(m, r)
                        }, "validateWidget")
                    };
                return q.resolve(J.TranslationsService).getMessage("0IdiKcmblESAShpNoC1oVQ#TitleExpression.-416286460.1", "Annual income | Deriv")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserAnnualIncome.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [N, F, $]
        }, y
    }, "componentFactory"),
    me = ue();
export {
    U as controllerModule, Q as modelModule, me as viewModule, k as webFlowControllerModule
};