import {
    a as $
} from "./_oschunk-OWG424DW.js";
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
    f,
    h as T,
    i as V,
    j as D,
    n as H,
    u as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as oe,
    g as x,
    m as J,
    n as X,
    q as Q,
    r as ee,
    s as L,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as K,
    Sb as h,
    ub as _
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as d,
    e as ae,
    m as q,
    n as Y,
    p as R
} from "./_oschunk-M5BUVJ72.js";
var se = {
        "bhEu9wbLYEmooLGkAq5Pfw#Value": "\u0645\u0633\u062A\u0648\u0627\u0643 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A",
        "w+quDwR01kGZcN8arICWEA#Value": "\u0645\u0633\u062A\u0648\u0627\u0643 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A",
        "lI3uuBDjUEWF1zTd_p160A#Title": "\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A | Deriv",
        "lI3uuBDjUEWF1zTd_p160A#TitleExpression.-1434318586.1": "\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A | Deriv"
    },
    te = {
        "ar-001": {
            translations: se,
            isRTL: !0
        }
    };
var c = E; {
    let u = class u extends c.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, te);
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
                return c.Logger.startActiveSpan("StopOnboardingOnContinue", function(l) {
                    l && (l.setAttribute("code.function", "StopOnboardingOnContinue"), l.setAttribute("outsystems.function.key", "801c4c08-4f6a-48e7-9d20-58a69c630788"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("StopOnboardingOnContinue"), e = n.callContext(e), t.variables.is_stand_aloneIn) return c.Navigation.navigateTo(c.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.None), e, !0);
                        t.variables.shouldStopOnboardingVar = !t.variables.shouldStopOnboardingVar
                    } finally {
                        l && l.end()
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
                return c.Logger.startActiveSpan("OnReady", function(l) {
                    l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "8ec5bc8f-c457-4322-9a3e-fb4533f6af56"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var g = new c.DataTypes.VariableHolder;
                        g.value = h.getFinancialAssessmentConfigCache$Action("education_level", e), t.variables.education_levelVar = g.value.configValueOut
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectEducationalLevel$Action() {
            return this.hasOwnProperty("__onSelectEducationalLevel$Action") || (this.__onSelectEducationalLevel$Action = function(e, t) {
                var n = this.model,
                    a = this.controller,
                    l = this.idService;
                return c.Logger.startActiveSpan("OnSelectEducationalLevel", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectEducationalLevel"), g.setAttribute("outsystems.function.key", "a8301e93-3936-4465-b564-0c24d2a800f6"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnSelectEducationalLevel"), t = a.callContext(t);
                        var O = new c.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserEducationLevel.OnSelectEducationalLevel$vars")));
                        return O.value.education_level2InLocal = e, _.seteducation_level(O.value.education_level2InLocal), n.variables.is_stand_aloneIn ? c.Navigation.navigateTo(c.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.None), t, !0) : c.Navigation.navigateTo(c.Navigation.generateScreenURL("uae", "user-monthly-essential-expenditure", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectEducationalLevel$Action
        }
        set _onSelectEducationalLevel$Action(e) {
            this.__onSelectEducationalLevel$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return c.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "801c4c08-4f6a-48e7-9d20-58a69c630788"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "8ec5bc8f-c457-4322-9a3e-fb4533f6af56"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectEducationalLevel$Action(e, t) {
            var n = this.controller;
            return c.Logger.startActiveSpan("OnSelectEducationalLevel__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnSelectEducationalLevel"), a.setAttribute("outsystems.function.key", "a8301e93-3936-4465-b564-0c24d2a800f6"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectEducationalLevel$Action, t, e)
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
                return $.default.handleError(e, this.callContext())
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
    d(u, "ControllerInner");
    let p = u;
    k = p, k.registerVariableGroupType("uae.FinancialAssessmentFlow.UserEducationLevel.OnSelectEducationalLevel$vars", [{
        name: "education_level2",
        attrName: "education_level2InLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, U = new c.Controller.ControllerFactory(k, Z);
var i = ae(oe());
var m = E,
    B = class B extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("education_level", "education_levelVar", "education_level", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new m.DataTypes.TextList)
            }, !1, m.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(B, "VariablesRecord");
var C = B;
C.init();
var G = class G extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(G, "WidgetsRecord");
var M = G,
    b = class b extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(u) {
            "is_stand_alone" in u && (this.variables.is_stand_aloneIn = m.DataConversion.ServerDataConverter.from(u.is_stand_alone, m.DataTypes.DataTypes.Boolean))
        }
    };
d(b, "Model");
var w = b;
w._hasValidationWidgetsValue = void 0;
var z = new m.Model.ModelFactory(w);
var y = x.PlaceholderContent,
    ie = x.IteratorPlaceholderContent,
    de = d(function() {
        var p = X(function(u) {
            var o = u.model,
                e = u.controller,
                t = u.controller.idService,
                n = e.validationService,
                a = e.callContext(),
                l = L,
                g = I,
                O = {
                    props: u,
                    validateWidget: d(function(s) {
                        u.validateWidget(u, s)
                    }, "validateWidget")
                },
                r = o,
                S = ee,
                j = Q,
                P = J();
            return i.createElement("div", u.rootNodeProperties, S(K.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [i.createElement(N, {
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
                        _handleError: d(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeBtnEvent$Action: d(function() {
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
                        contentbody: new y(function() {
                            return [i.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [j(g("w+quDwR01kGZcN8arICWEA#Value", "Your education level"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: r
                            }, S(o.variables.education_levelVar.length < 1, !1, this, function() {
                                return [i.createElement(f, {
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
                                }, i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                return [i.createElement(V, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.education_levelVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ie(function(s, v) {
                                            return [i.createElement(D, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                    e.onSelectEducationalLevel$Action(o.variables.education_levelVar.getCurrent(v.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: o.getCachedValue(s.getId("ListItem2.Style"), function() {
                                                    return o.variables.education_levelVar.getCurrent(v.iterationContext) === _.geteducation_level() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.education_levelVar.getCurrent(v.iterationContext)
                                                }, function() {
                                                    return _.geteducation_level()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: y.Empty,
                                                    content: new y(function() {
                                                        return [i.createElement(f, {
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
                                                            value: o.getCachedValue(s.getId("EiRu6uiEzUqYAKy5z3HAXA.Value"), function() {
                                                                return h.translate$Action(o.variables.education_levelVar.getCurrent(v.iterationContext), v).translatedTextOut
                                                            }, function() {
                                                                return o.variables.education_levelVar.getCurrent(v.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(f, {
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
                                                        }, S(o.variables.education_levelVar.getCurrent(v.iterationContext) === _.geteducation_level(), !1, this, function() {
                                                            return [i.createElement(H, {
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
                                                    rightActions: y.Empty
                                                },
                                                _dependencies: [l(_.geteducation_level())]
                                            })]
                                        }, a, t, "1")
                                    },
                                    _dependencies: []
                                })]
                            })))]
                        })
                    },
                    _dependencies: [l(o.variables.education_levelVar)]
                })]
            }, function() {
                return [i.createElement(F, {
                    getOwnerSpan: d(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !o.variables.is_stand_aloneIn,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: d(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeEvent$Action: d(function() {
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
                        content: new y(function() {
                            return [i.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "mb-12",
                                text: [j(g("bhEu9wbLYEmooLGkAq5Pfw#Value", "Your education level"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: r
                            }, S(o.variables.education_levelVar.length < 1, !1, this, function() {
                                return [i.createElement(f, {
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
                                }, i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                }), i.createElement(f, {
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
                                return [i.createElement(V, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.education_levelVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ie(function(s, v) {
                                            return [i.createElement(D, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                    e.onSelectEducationalLevel$Action(o.variables.education_levelVar.getCurrent(v.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: o.getCachedValue(s.getId("ListItem1.Style"), function() {
                                                    return o.variables.education_levelVar.getCurrent(v.iterationContext) === _.geteducation_level() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.education_levelVar.getCurrent(v.iterationContext)
                                                }, function() {
                                                    return _.geteducation_level()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: y.Empty,
                                                    content: new y(function() {
                                                        return [i.createElement(f, {
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
                                                            value: o.getCachedValue(s.getId("eRRxfVNqjE2dLuZzxjxYng.Value"), function() {
                                                                return h.translate$Action(o.variables.education_levelVar.getCurrent(v.iterationContext), v).translatedTextOut
                                                            }, function() {
                                                                return o.variables.education_levelVar.getCurrent(v.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(f, {
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
                                                        }, S(o.variables.education_levelVar.getCurrent(v.iterationContext) === _.geteducation_level(), !1, this, function() {
                                                            return [i.createElement(H, {
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
                                                    rightActions: y.Empty
                                                },
                                                _dependencies: [l(_.geteducation_level())]
                                            })]
                                        }, a, t, "2")
                                    },
                                    _dependencies: []
                                })]
                            })))]
                        }),
                        footer: y.Empty
                    },
                    _dependencies: [l(o.variables.education_levelVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "UserEducationLevel",
                    functionKey: "b8ee8d94-e310-4550-85d7-34ddfe9d7ad0",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserEducationLevel",
            modelFactory: z,
            controllerFactory: U,
            getTitle: d(function(u) {
                var o = u.model,
                    e = u.controller,
                    t = u.controller.idService,
                    n = e.validationService,
                    a = e.callContext(),
                    l = L,
                    g = I,
                    O = {
                        props: u,
                        validateWidget: d(function(r) {
                            u.validateWidget(u, r)
                        }, "validateWidget")
                    };
                return q.resolve(Y.TranslationsService).getMessage("lI3uuBDjUEWF1zTd_p160A#TitleExpression.-1434318586.1", "Education level | Deriv")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserEducationLevel.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [N, F]
        }, p
    }, "componentFactory"),
    ce = de();
export {
    U as controllerModule, z as modelModule, ce as viewModule, $ as webFlowControllerModule
};