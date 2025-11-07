import {
    a as N
} from "./_oschunk-OWG424DW.js";
import {
    a as D
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as F
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as m,
    h as T,
    i as V,
    j as L,
    n as H,
    u as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ie,
    g as I,
    m as Z,
    n as Q,
    q as Y,
    r as J,
    s as q,
    t as x
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as K,
    Sb as h,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as O,
    c as d,
    e as re,
    p as R
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "TaA8KZenEUGhOzU2D6LTwQ#Value": "\u0645\u0627 \u0647\u0648 \u0645\u0635\u062F\u0631 \u062F\u062E\u0644\u0643\u061F",
        "UZ9nWWH_2kKNv5ciFe+4Gw#Value": "\u0645\u0627 \u0647\u0648 \u0645\u0635\u062F\u0631 \u062F\u062E\u0644\u0643\u061F"
    },
    X = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };
var u = O; {
    let _ = class _ extends u.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, X);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "07ddf1c3-0da2-48f6-8625-149c61bb8d0c"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var g = new u.DataTypes.VariableHolder;
                        g.value = h.getFinancialAssessmentConfigCache$Action("source_of_income", e), t.variables.source_of_income_listVar = g.value.configValueOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectIncomeSource$Action() {
            return this.hasOwnProperty("__onSelectIncomeSource$Action") || (this.__onSelectIncomeSource$Action = function(e, t) {
                var n = this.model,
                    s = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnSelectIncomeSource", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectIncomeSource"), g.setAttribute("outsystems.function.key", "3ac87a97-bc11-4f2a-9d22-91a7e0d0a7c3"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSelectIncomeSource"), t = s.callContext(t);
                        var w = new u.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserSourceOfIncome.OnSelectIncomeSource$vars")));
                        return w.value.income_sourceInLocal = e, f.setsource_of_income(w.value.income_sourceInLocal), n.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-source-of-wealth", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectIncomeSource$Action
        }
        set _onSelectIncomeSource$Action(e) {
            this.__onSelectIncomeSource$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("StopOnboardingOnContinue", function(o) {
                    o && (o.setAttribute("code.function", "StopOnboardingOnContinue"), o.setAttribute("outsystems.function.key", "fb844a22-edc8-4c3e-b68a-5434b649a070"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "07ddf1c3-0da2-48f6-8625-149c61bb8d0c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectIncomeSource$Action(e, t) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnSelectIncomeSource__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSelectIncomeSource"), s.setAttribute("outsystems.function.key", "3ac87a97-bc11-4f2a-9d22-91a7e0d0a7c3"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectIncomeSource$Action, t, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "fb844a22-edc8-4c3e-b68a-5434b649a070"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
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
                    s = this.idService;
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
                return N.default.handleError(e, this.callContext())
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
    d(_, "ControllerInner");
    let p = _;
    $ = p, $.registerVariableGroupType("uae.FinancialAssessmentFlow.UserSourceOfIncome.OnSelectIncomeSource$vars", [{
        name: "income_source",
        attrName: "income_sourceInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var $, k = new u.Controller.ControllerFactory($, j);
var r = re(ie());
var v = O,
    B = class B extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("source_of_income_list", "source_of_income_listVar", "source_of_income_list", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
                return v.DataTypes.ImmutableBase.getData(new v.DataTypes.TextList)
            }, !1, v.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(B, "VariablesRecord");
var C = B;
C.init();
var z = class z extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(z, "WidgetsRecord");
var U = z,
    S = class S extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return U
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(_) {
            "is_stand_alone" in _ && (this.variables.is_stand_aloneIn = v.DataConversion.ServerDataConverter.from(_.is_stand_alone, v.DataTypes.DataTypes.Boolean))
        }
    };
d(S, "Model");
var E = S;
E._hasValidationWidgetsValue = void 0;
var M = new v.Model.ModelFactory(E);
var y = I.PlaceholderContent,
    ne = I.IteratorPlaceholderContent,
    se = d(function() {
        var p = Q(function(_) {
            var a = _.model,
                e = _.controller,
                t = _.controller.idService,
                n = e.validationService,
                s = e.callContext(),
                o = q,
                g = x,
                w = {
                    props: _,
                    validateWidget: d(function(c) {
                        _.validateWidget(_, c)
                    }, "validateWidget")
                },
                i = a,
                b = J,
                G = Y,
                P = Z();
            return r.createElement("div", _.rootNodeProperties, b(K.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [r.createElement(F, {
                    getOwnerSpan: d(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: d(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        closeBtnEvent$Action: d(function() {
                            var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(c))
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
                    _widgetRecordProvider: i,
                    placeholders: {
                        contentbody: new y(function() {
                            return [r.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [G(g("UZ9nWWH_2kKNv5ciFe+4Gw#Value", "What\u2019s your source of income?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer4"
                                },
                                _widgetRecordProvider: i
                            }, b(a.variables.source_of_income_listVar.length < 1, !1, this, function() {
                                return [r.createElement(m, {
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
                                        name: "LoaderContainer5"
                                    },
                                    _widgetRecordProvider: i
                                }, r.createElement(m, {
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
                                        name: "ListItemPlaceholder14"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder15"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder16"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder17"
                                    },
                                    _widgetRecordProvider: i
                                }))]
                            }, function() {
                                return [r.createElement(V, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: a.variables.source_of_income_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer5"
                                    },
                                    _widgetRecordProvider: i,
                                    placeholders: {
                                        content: new ne(function(c, l) {
                                            return [r.createElement(L, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                                    e.onSelectIncomeSource$Action(a.variables.source_of_income_listVar.getCurrent(l.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: a.getCachedValue(c.getId("ListItem4.Style"), function() {
                                                    return a.variables.source_of_income_listVar.getCurrent(l.iterationContext) === f.getsource_of_income() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return a.variables.source_of_income_listVar.getCurrent(l.iterationContext)
                                                }, function() {
                                                    return f.getsource_of_income()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: c,
                                                    name: "ListItem4"
                                                },
                                                _widgetRecordProvider: i,
                                                placeholders: {
                                                    leftActions: y.Empty,
                                                    content: new y(function() {
                                                        return [r.createElement(m, {
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
                                                            _widgetRecordProvider: i
                                                        }, r.createElement(T, {
                                                            value: a.getCachedValue(c.getId("cLSrt9y7rU+ljHBbQUrKpg.Value"), function() {
                                                                return h.translate$Action(a.variables.source_of_income_listVar.getCurrent(l.iterationContext), l).translatedTextOut
                                                            }, function() {
                                                                return a.variables.source_of_income_listVar.getCurrent(l.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: c,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: i
                                                        }), r.createElement(m, {
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
                                                                service: c,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: i
                                                        }, b(a.variables.source_of_income_listVar.getCurrent(l.iterationContext) === f.getsource_of_income(), !1, this, function() {
                                                            return [r.createElement(H, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: i
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: y.Empty
                                                },
                                                _dependencies: [o(f.getsource_of_income()), o(a.variables.source_of_income_listVar.getCurrent(l.iterationContext))]
                                            })]
                                        }, s, t, "1")
                                    },
                                    _dependencies: [o(f.getsource_of_income())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [o(f.getsource_of_income()), o(a.variables.source_of_income_listVar)]
                })]
            }, function() {
                return [r.createElement(D, {
                    getOwnerSpan: d(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !a.variables.is_stand_aloneIn,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: d(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        closeEvent$Action: d(function() {
                            var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(c))
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
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new y(function() {
                            return [r.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [G(g("TaA8KZenEUGhOzU2D6LTwQ#Value", "What\u2019s your source of income?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer5"
                                },
                                _widgetRecordProvider: i
                            }, b(a.variables.source_of_income_listVar.length < 1, !1, this, function() {
                                return [r.createElement(m, {
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
                                        name: "LoaderContainer6"
                                    },
                                    _widgetRecordProvider: i
                                }, r.createElement(m, {
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
                                        name: "ListItemPlaceholder18"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder19"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder20"
                                    },
                                    _widgetRecordProvider: i
                                }), r.createElement(m, {
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
                                        name: "ListItemPlaceholder21"
                                    },
                                    _widgetRecordProvider: i
                                }))]
                            }, function() {
                                return [r.createElement(V, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: a.variables.source_of_income_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer6"
                                    },
                                    _widgetRecordProvider: i,
                                    placeholders: {
                                        content: new ne(function(c, l) {
                                            return [r.createElement(L, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                                    e.onSelectIncomeSource$Action(a.variables.source_of_income_listVar.getCurrent(l.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: a.getCachedValue(c.getId("ListItem5.Style"), function() {
                                                    return a.variables.source_of_income_listVar.getCurrent(l.iterationContext) === f.getsource_of_income() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return a.variables.source_of_income_listVar.getCurrent(l.iterationContext)
                                                }, function() {
                                                    return f.getsource_of_income()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: c,
                                                    name: "ListItem5"
                                                },
                                                _widgetRecordProvider: i,
                                                placeholders: {
                                                    leftActions: y.Empty,
                                                    content: new y(function() {
                                                        return [r.createElement(m, {
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
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: i
                                                        }, r.createElement(T, {
                                                            value: a.getCachedValue(c.getId("IfA07H_pVUu4UDrypaMghw.Value"), function() {
                                                                return h.translate$Action(a.variables.source_of_income_listVar.getCurrent(l.iterationContext), l).translatedTextOut
                                                            }, function() {
                                                                return a.variables.source_of_income_listVar.getCurrent(l.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: c,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: i
                                                        }), r.createElement(m, {
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
                                                                service: c,
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: i
                                                        }, b(a.variables.source_of_income_listVar.getCurrent(l.iterationContext) === f.getsource_of_income(), !1, this, function() {
                                                            return [r.createElement(H, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: i
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: y.Empty
                                                },
                                                _dependencies: [o(f.getsource_of_income()), o(a.variables.source_of_income_listVar.getCurrent(l.iterationContext))]
                                            })]
                                        }, s, t, "2")
                                    },
                                    _dependencies: [o(f.getsource_of_income())]
                                })]
                            })))]
                        }),
                        footer: y.Empty
                    },
                    _dependencies: [o(f.getsource_of_income()), o(a.variables.source_of_income_listVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "UserSourceOfIncome",
                    functionKey: "23988ce1-27ba-47be-ba51-68c17cd706f3",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserSourceOfIncome",
            modelFactory: M,
            controllerFactory: k,
            getTitle: d(function() {
                return x("4YyYI7onvke6UWjBfNcG8w#Title", "UserSourceOfIncome")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserSourceOfIncome.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [F, D]
        }, p
    }, "componentFactory"),
    ce = se();
export {
    k as controllerModule, M as modelModule, ce as viewModule, N as webFlowControllerModule
};