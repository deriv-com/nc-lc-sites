import {
    a as k
} from "./_oschunk-OWG424DW.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as N
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
    f as _,
    h as W,
    i as T,
    j as L,
    n as H,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as x,
    m as J,
    n as q,
    q as ee,
    r as te,
    s as I,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as Z,
    Sb as S,
    ub as m
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as w,
    c,
    e as se,
    m as X,
    n as Y,
    p as A
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "X9kUKfu0I02WgHsipgHtzQ#Value": "\u0645\u0635\u062F\u0631 \u062B\u0631\u0648\u062A\u0643",
        "DE3lyU+e8UKIM0x+boHN_g#Value": "\u0645\u0635\u062F\u0631 \u062B\u0631\u0648\u062A\u0643",
        "YX2Pt7Lwk0u3QtR7EW0ZNg#Title": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv",
        "YX2Pt7Lwk0u3QtR7EW0ZNg#TitleExpression.-329708661.1": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv"
    },
    re = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var u = w; {
    let f = class f extends u.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, re);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectSourceOfWealth$Action() {
            return this.hasOwnProperty("__onSelectSourceOfWealth$Action") || (this.__onSelectSourceOfWealth$Action = function(e, t) {
                var r = this.model,
                    o = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("OnSelectSourceOfWealth", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectSourceOfWealth"), g.setAttribute("outsystems.function.key", "846cdab0-e939-40e2-bc17-67fceaad7455"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectSourceOfWealth"), t = o.callContext(t);
                        var C = new u.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserSourceOfWealth.OnSelectSourceOfWealth$vars")));
                        return C.value.selected_source_of_wealthInLocal = e, m.setsource_of_wealth(C.value.selected_source_of_wealthInLocal), r.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "annual-income", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectSourceOfWealth$Action
        }
        set _onSelectSourceOfWealth$Action(e) {
            this.__onSelectSourceOfWealth$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "9ff85dfd-63fc-4976-9b58-817ce46ceae4"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var g = new u.DataTypes.VariableHolder;
                        g.value = S.getFinancialAssessmentConfigCache$Action("source_of_wealth", e), t.variables.source_of_wealth_listVar = g.value.configValueOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("StopOnboardingOnContinue", function(a) {
                    a && (a.setAttribute("code.function", "StopOnboardingOnContinue"), a.setAttribute("outsystems.function.key", "a1ae1836-df67-4ec1-8f54-fef15c655e93"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("StopOnboardingOnContinue"), e = r.callContext(e), t.variables.is_stand_aloneIn) return u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), e, !0);
                        t.variables.shouldStopOnboardingVar = !t.variables.shouldStopOnboardingVar
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        onSelectSourceOfWealth$Action(e, t) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnSelectSourceOfWealth__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectSourceOfWealth"), o.setAttribute("outsystems.function.key", "846cdab0-e939-40e2-bc17-67fceaad7455"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSelectSourceOfWealth$Action, t, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "9ff85dfd-63fc-4976-9b58-817ce46ceae4"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(r) {
                r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "a1ae1836-df67-4ec1-8f54-fef15c655e93"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
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
                    r = this.model,
                    o = this.idService;
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
            return S.defaultTimeout
        }
    };
    c(f, "ControllerInner");
    let y = f;
    U = y, U.registerVariableGroupType("uae.FinancialAssessmentFlow.UserSourceOfWealth.OnSelectSourceOfWealth$vars", [{
        name: "selected_source_of_wealth",
        attrName: "selected_source_of_wealthInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var U, M = new u.Controller.ControllerFactory(U, j);
var i = se(le());
var v = w,
    K = class K extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("source_of_wealth_list", "source_of_wealth_listVar", "source_of_wealth_list", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
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
c(K, "VariablesRecord");
var P = K;
P.init();
var G = class G extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(G, "WidgetsRecord");
var z = G,
    O = class O extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return O._hasValidationWidgetsValue === void 0 && (O._hasValidationWidgetsValue = void 0 || void 0 || void 0), O._hasValidationWidgetsValue
        }
        setInputs(f) {
            "is_stand_alone" in f && (this.variables.is_stand_aloneIn = v.DataConversion.ServerDataConverter.from(f.is_stand_alone, v.DataTypes.DataTypes.Boolean))
        }
    };
c(O, "Model");
var E = O;
E._hasValidationWidgetsValue = void 0;
var B = new v.Model.ModelFactory(E);
var h = x.PlaceholderContent,
    ae = x.IteratorPlaceholderContent,
    ue = c(function() {
        var y = q(function(f) {
            var l = f.model,
                e = f.controller,
                t = f.controller.idService,
                r = e.validationService,
                o = e.callContext(),
                a = I,
                g = V,
                C = {
                    props: f,
                    validateWidget: c(function(s) {
                        f.validateWidget(f, s)
                    }, "validateWidget")
                },
                n = l,
                b = te,
                Q = ee,
                p = J();
            return i.createElement("div", f.rootNodeProperties, b(Z.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [i.createElement(F, {
                    getOwnerSpan: c(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: c(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeBtnEvent$Action: c(function() {
                            var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        contentbody: new h(function() {
                            return [i.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [Q(g("DE3lyU+e8UKIM0x+boHN_g#Value", "Your source of wealth"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: n
                            }), i.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: n
                            }, b(l.variables.source_of_wealth_listVar.length < 1, !1, this, function() {
                                return [i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }, i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }))]
                            }, function() {
                                return [i.createElement(T, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.source_of_wealth_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        content: new ae(function(s, d) {
                                            return [i.createElement(L, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: c(function() {
                                                    var R = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    e.onSelectSourceOfWealth$Action(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext), e.callContext(R))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem2.Style"), function() {
                                                    return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext) === m.getsource_of_wealth() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext)
                                                }, function() {
                                                    return m.getsource_of_wealth()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: n,
                                                placeholders: {
                                                    leftActions: h.Empty,
                                                    content: new h(function() {
                                                        return [i.createElement(_, {
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
                                                            _widgetRecordProvider: n
                                                        }, i.createElement(W, {
                                                            value: l.getCachedValue(s.getId("ZOKVJwNAq0+_kKNtOkPHNw.Value"), function() {
                                                                return S.translate$Action(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext), d).translatedTextOut
                                                            }, function() {
                                                                return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }), i.createElement(_, {
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
                                                            _widgetRecordProvider: n
                                                        }, b(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext) === m.getsource_of_wealth(), !1, this, function() {
                                                            return [i.createElement(H, {
                                                                image: A.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: n
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: h.Empty
                                                },
                                                _dependencies: [a(m.getsource_of_wealth()), a(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext))]
                                            })]
                                        }, o, t, "1")
                                    },
                                    _dependencies: [a(m.getsource_of_wealth())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [a(m.getsource_of_wealth()), a(l.variables.source_of_wealth_listVar)]
                })]
            }, function() {
                return [i.createElement(N, {
                    getOwnerSpan: c(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return p.getChildSpan("destroy")
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
                            var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "15",
                        alias: "2"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        content: new h(function() {
                            return [i.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "mb-12",
                                text: [Q(g("X9kUKfu0I02WgHsipgHtzQ#Value", "Your source of wealth"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: n
                            }), i.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: n
                            }, b(l.variables.source_of_wealth_listVar.length < 1, !1, this, function() {
                                return [i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }, i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }), i.createElement(_, {
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
                                    _widgetRecordProvider: n
                                }))]
                            }, function() {
                                return [i.createElement(T, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.source_of_wealth_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        content: new ae(function(s, d) {
                                            return [i.createElement(L, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: c(function() {
                                                    var R = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    e.onSelectSourceOfWealth$Action(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext), e.callContext(R))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem1.Style"), function() {
                                                    return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext) === m.getsource_of_wealth() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext)
                                                }, function() {
                                                    return m.getsource_of_wealth()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: n,
                                                placeholders: {
                                                    leftActions: h.Empty,
                                                    content: new h(function() {
                                                        return [i.createElement(_, {
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
                                                            _widgetRecordProvider: n
                                                        }, i.createElement(W, {
                                                            value: l.getCachedValue(s.getId("8CaUud33KUOE7UZLLz62+A.Value"), function() {
                                                                return S.translate$Action(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext), d).translatedTextOut
                                                            }, function() {
                                                                return l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }), i.createElement(_, {
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
                                                            _widgetRecordProvider: n
                                                        }, b(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext) === m.getsource_of_wealth(), !1, this, function() {
                                                            return [i.createElement(H, {
                                                                image: A.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: n
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: h.Empty
                                                },
                                                _dependencies: [a(m.getsource_of_wealth()), a(l.variables.source_of_wealth_listVar.getCurrent(d.iterationContext))]
                                            })]
                                        }, o, t, "2")
                                    },
                                    _dependencies: [a(m.getsource_of_wealth())]
                                })]
                            })))]
                        }),
                        footer: h.Empty
                    },
                    _dependencies: [a(m.getsource_of_wealth()), a(l.variables.source_of_wealth_listVar)]
                })]
            }), i.createElement($, {
                getOwnerSpan: c(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: l.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: c(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: c(function() {
                        var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(s))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "30",
                    alias: "3"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "UserSourceOfWealth",
                    functionKey: "b78f7d61-f0b2-4b93-b742-d47b116d1936",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserSourceOfWealth",
            modelFactory: B,
            controllerFactory: M,
            getTitle: c(function(f) {
                var l = f.model,
                    e = f.controller,
                    t = f.controller.idService,
                    r = e.validationService,
                    o = e.callContext(),
                    a = I,
                    g = V,
                    C = {
                        props: f,
                        validateWidget: c(function(n) {
                            f.validateWidget(f, n)
                        }, "validateWidget")
                    };
                return X.resolve(Y.TranslationsService).getMessage("YX2Pt7Lwk0u3QtR7EW0ZNg#TitleExpression.-329708661.1", "Source of wealth | Deriv")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserSourceOfWealth.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [F, N, $]
        }, y
    }, "componentFactory"),
    fe = ue();
export {
    M as controllerModule, B as modelModule, fe as viewModule, k as webFlowControllerModule
};