import {
    a as $
} from "./_oschunk-OWG424DW.js";
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
    f as m,
    h as V,
    i as L,
    j as H,
    n as W,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ae,
    g as x,
    m as q,
    n as Y,
    q as Q,
    r as ee,
    s as T,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as X
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as K,
    Sb as h,
    ub as p
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as d,
    e as oe,
    m as J,
    n as Z,
    p as R
} from "./_oschunk-M5BUVJ72.js";
var se = {
        "qrmL2j3xpkWbRfeLZirR7w#Value": "\u0645\u0627 \u0647\u064A \u0645\u0647\u0646\u062A\u0643\u061F",
        "GNCEXrnEBEWjTo_jb2mhIw#Value": "\u0645\u0627 \u0647\u064A \u0645\u0647\u0646\u062A\u0643\u061F",
        "DLJ_1OJTZUWBC8zHN20jyA#Title": "\u0627\u0644\u0645\u0647\u0646\u0629 | Deriv",
        "DLJ_1OJTZUWBC8zHN20jyA#TitleExpression.1574104709.1": "\u0627\u0644\u0645\u0647\u0646\u0629 | Deriv"
    },
    te = {
        "ar-001": {
            translations: se,
            isRTL: !0
        }
    };
var u = S; {
    let g = class g extends u.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, te);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectOccupation$Action() {
            return this.hasOwnProperty("__onSelectOccupation$Action") || (this.__onSelectOccupation$Action = function(e, t) {
                var n = this.model,
                    s = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnSelectOccupation", function(f) {
                    f && (f.setAttribute("code.function", "OnSelectOccupation"), f.setAttribute("outsystems.function.key", "2df24abd-4bd7-432e-9c78-e667104beb44"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSelectOccupation"), t = s.callContext(t);
                        var C = new u.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserOccupation.OnSelectOccupation$vars")));
                        return C.value.selected_occupationInLocal = e, p.setoccupation_category(C.value.selected_occupationInLocal), n.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-industry-of-employment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSelectOccupation$Action
        }
        set _onSelectOccupation$Action(e) {
            this.__onSelectOccupation$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "2ead1f6e-fd05-4401-876a-207b839d2023"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var f = new u.DataTypes.VariableHolder;
                        f.value = h.getFinancialAssessmentConfigCache$Action("occupation", e), t.variables.occupation_category_listVar = f.value.configValueOut
                    } finally {
                        o && o.end()
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
                    n = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("StopOnboardingOnContinue", function(o) {
                    o && (o.setAttribute("code.function", "StopOnboardingOnContinue"), o.setAttribute("outsystems.function.key", "30cbb609-c106-4113-966f-0d956c96d7ff"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        onSelectOccupation$Action(e, t) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnSelectOccupation__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSelectOccupation"), s.setAttribute("outsystems.function.key", "2df24abd-4bd7-432e-9c78-e667104beb44"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectOccupation$Action, t, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "2ead1f6e-fd05-4401-876a-207b839d2023"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "30cbb609-c106-4113-966f-0d956c96d7ff"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    d(g, "ControllerInner");
    let v = g;
    k = v, k.registerVariableGroupType("uae.FinancialAssessmentFlow.UserOccupation.OnSelectOccupation$vars", [{
        name: "selected_occupation",
        attrName: "selected_occupationInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, U = new u.Controller.ControllerFactory(k, X);
var i = oe(ae());
var y = S,
    j = class j extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("occupation_category_list", "occupation_category_listVar", "occupation_category_list", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new y.DataTypes.TextList)
            }, !1, y.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(j, "VariablesRecord");
var E = j;
E.init();
var z = class z extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(z, "WidgetsRecord");
var M = z,
    b = class b extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(g) {
            "is_stand_alone" in g && (this.variables.is_stand_aloneIn = y.DataConversion.ServerDataConverter.from(g.is_stand_alone, y.DataTypes.DataTypes.Boolean))
        }
    };
d(b, "Model");
var w = b;
w._hasValidationWidgetsValue = void 0;
var B = new y.Model.ModelFactory(w);
var _ = x.PlaceholderContent,
    ie = x.IteratorPlaceholderContent,
    ce = d(function() {
        var v = Y(function(g) {
            var a = g.model,
                e = g.controller,
                t = g.controller.idService,
                n = e.validationService,
                s = e.callContext(),
                o = T,
                f = I,
                C = {
                    props: g,
                    validateWidget: d(function(l) {
                        g.validateWidget(g, l)
                    }, "validateWidget")
                },
                r = a,
                O = ee,
                G = Q,
                P = q();
            return i.createElement("div", g.rootNodeProperties, O(K.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [i.createElement(F, {
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
                        _handleError: d(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        closeBtnEvent$Action: d(function() {
                            var l = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(l))
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
                        contentbody: new _(function() {
                            return [i.createElement(m, {
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
                                text: [G(f("GNCEXrnEBEWjTo_jb2mhIw#Value", "What\u2019s your occupation?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: r
                            }, O(a.variables.occupation_category_listVar.length < 1, !1, this, function() {
                                return [i.createElement(m, {
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
                                }, i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                    source: a.variables.occupation_category_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ie(function(l, c) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectOccupation$Action(a.variables.occupation_category_listVar.getCurrent(c.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: a.getCachedValue(l.getId("ListItem2.Style"), function() {
                                                    return a.variables.occupation_category_listVar.getCurrent(c.iterationContext) === p.getemployment_industry() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return a.variables.occupation_category_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return p.getemployment_industry()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: l,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: _.Empty,
                                                    content: new _(function() {
                                                        return [i.createElement(m, {
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
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(V, {
                                                            value: a.getCachedValue(l.getId("apXT56OchUOPMkY6d1wEkg.Value"), function() {
                                                                return h.translate$Action(a.variables.occupation_category_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return a.variables.occupation_category_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: l,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(m, {
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
                                                                service: l,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, O(a.variables.occupation_category_listVar.getCurrent(c.iterationContext) === p.getemployment_industry(), !1, this, function() {
                                                            return [i.createElement(W, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: l,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: _.Empty
                                                },
                                                _dependencies: [o(p.getemployment_industry()), o(a.variables.occupation_category_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, s, t, "1")
                                    },
                                    _dependencies: [o(p.getemployment_industry())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [o(p.getemployment_industry()), o(a.variables.occupation_category_listVar)]
                })]
            }, function() {
                return [i.createElement(N, {
                    getOwnerSpan: d(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !a.variables.is_stand_aloneIn
                    },
                    events: {
                        _handleError: d(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        closeEvent$Action: d(function() {
                            var l = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(l))
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
                        content: new _(function() {
                            return [i.createElement(m, {
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
                                text: [G(f("qrmL2j3xpkWbRfeLZirR7w#Value", "What\u2019s your occupation?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: r
                            }, O(a.variables.occupation_category_listVar.length < 1, !1, this, function() {
                                return [i.createElement(m, {
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
                                }, i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                }), i.createElement(m, {
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
                                    source: a.variables.occupation_category_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ie(function(l, c) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectOccupation$Action(a.variables.occupation_category_listVar.getCurrent(c.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: a.getCachedValue(l.getId("ListItem1.Style"), function() {
                                                    return a.variables.occupation_category_listVar.getCurrent(c.iterationContext) === p.getemployment_industry() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return a.variables.occupation_category_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return p.getemployment_industry()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: l,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: _.Empty,
                                                    content: new _(function() {
                                                        return [i.createElement(m, {
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
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(V, {
                                                            value: a.getCachedValue(l.getId("6+H1JUzA40WbKGoMNhAcWA.Value"), function() {
                                                                return h.translate$Action(a.variables.occupation_category_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return a.variables.occupation_category_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: l,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(m, {
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
                                                                service: l,
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, O(a.variables.occupation_category_listVar.getCurrent(c.iterationContext) === p.getemployment_industry(), !1, this, function() {
                                                            return [i.createElement(W, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: l,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: _.Empty
                                                },
                                                _dependencies: [o(p.getemployment_industry()), o(a.variables.occupation_category_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, s, t, "2")
                                    },
                                    _dependencies: [o(p.getemployment_industry())]
                                })]
                            })))]
                        }),
                        footer: _.Empty
                    },
                    _dependencies: [o(p.getemployment_industry()), o(a.variables.occupation_category_listVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "UserOccupation",
                    functionKey: "d47fb20c-53e2-4565-810b-ccc7376d23c8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserOccupation",
            modelFactory: B,
            controllerFactory: U,
            getTitle: d(function(g) {
                var a = g.model,
                    e = g.controller,
                    t = g.controller.idService,
                    n = e.validationService,
                    s = e.callContext(),
                    o = T,
                    f = I,
                    C = {
                        props: g,
                        validateWidget: d(function(r) {
                            g.validateWidget(g, r)
                        }, "validateWidget")
                    };
                return J.resolve(Z.TranslationsService).getMessage("DLJ_1OJTZUWBC8zHN20jyA#TitleExpression.1574104709.1", "Occupation | Deriv")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserOccupation.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [F, N]
        }, v
    }, "componentFactory"),
    de = ce();
export {
    U as controllerModule, B as modelModule, de as viewModule, $ as webFlowControllerModule
};