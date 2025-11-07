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
    f as y,
    h as T,
    i as L,
    j as H,
    n as D,
    u as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as I,
    m as X,
    n as Z,
    q as ee,
    r as te,
    s as x,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Q
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as q,
    Sb as b,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as O,
    c as d,
    e as se,
    m as Y,
    n as K,
    p as R
} from "./_oschunk-M5BUVJ72.js";
var de = {
        "TlJ+JhAuO0iFlasHcVQmbg#Value": "\u0635\u0646\u0627\u0639\u062A\u0643",
        "lhOgm3Slcka4W0DPGAjRbw#Value": "\u0635\u0646\u0627\u0639\u062A\u0643",
        "8oJF2kYBu0mWEILjIhtNzw#Title": "\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0645\u0644 | Deriv",
        "8oJF2kYBu0mWEILjIhtNzw#TitleExpression.-1413834675.1": "\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0645\u0644 | Deriv"
    },
    ne = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };
var u = O; {
    let m = class m extends u.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, ne);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectEmploymentIndustry$Action() {
            return this.hasOwnProperty("__onSelectEmploymentIndustry$Action") || (this.__onSelectEmploymentIndustry$Action = function(e, t) {
                var n = this.model,
                    o = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("OnSelectEmploymentIndustry", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectEmploymentIndustry"), g.setAttribute("outsystems.function.key", "8b14ac61-879e-41b7-85f9-8d0c8c36791e"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectEmploymentIndustry"), t = o.callContext(t);
                        var P = new u.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserIndustryOfEmployment.OnSelectEmploymentIndustry$vars")));
                        return P.value.employment_industryInLocal = e, f.setemployment_industry(P.value.employment_industryInLocal), n.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-source-of-income", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectEmploymentIndustry$Action
        }
        set _onSelectEmploymentIndustry$Action(e) {
            this.__onSelectEmploymentIndustry$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "9da5a3d9-fae9-42e1-88a3-df6fc6169fca"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var g = new u.DataTypes.VariableHolder;
                        g.value = b.getFinancialAssessmentConfigCache$Action("industry_of_employment", e), t.variables.employment_industry_listVar = g.value.configValueOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(a) {
                    a && (a.setAttribute("code.function", "LayoutOnboardingcloseEvent"), a.setAttribute("outsystems.function.key", "f6ab4f13-b51e-4cd4-90cb-37b56e15fe7e"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = n.callContext(e), t.variables.is_stand_aloneIn) return u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), e, !0);
                        t.variables.shouldStopOnboardingVar = !t.variables.shouldStopOnboardingVar
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        onSelectEmploymentIndustry$Action(e, t) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnSelectEmploymentIndustry__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectEmploymentIndustry"), o.setAttribute("outsystems.function.key", "8b14ac61-879e-41b7-85f9-8d0c8c36791e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSelectEmploymentIndustry$Action, t, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9da5a3d9-fae9-42e1-88a3-df6fc6169fca"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        layoutOnboardingcloseEvent$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(n) {
                n && (n.setAttribute("code.function", "LayoutOnboardingcloseEvent"), n.setAttribute("outsystems.function.key", "f6ab4f13-b51e-4cd4-90cb-37b56e15fe7e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._layoutOnboardingcloseEvent$Action, e)
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
            return b.defaultTimeout
        }
    };
    d(m, "ControllerInner");
    let p = m;
    M = p, M.registerVariableGroupType("uae.FinancialAssessmentFlow.UserIndustryOfEmployment.OnSelectEmploymentIndustry$vars", [{
        name: "Employment_industry",
        attrName: "employment_industryInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var M, U = new u.Controller.ControllerFactory(M, Q);
var i = se(le());
var v = O,
    j = class j extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("employment_industry_list", "employment_industry_listVar", "employment_industry_list", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
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
d(j, "VariablesRecord");
var w = j;
w.init();
var J = class J extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(J, "WidgetsRecord");
var z = J,
    S = class S extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(m) {
            "is_stand_alone" in m && (this.variables.is_stand_aloneIn = v.DataConversion.ServerDataConverter.from(m.is_stand_alone, v.DataTypes.DataTypes.Boolean))
        }
    };
d(S, "Model");
var C = S;
C._hasValidationWidgetsValue = void 0;
var B = new v.Model.ModelFactory(C);
var _ = I.PlaceholderContent,
    ae = I.IteratorPlaceholderContent,
    ue = d(function() {
        var p = Z(function(m) {
            var l = m.model,
                e = m.controller,
                t = m.controller.idService,
                n = e.validationService,
                o = e.callContext(),
                a = x,
                g = V,
                P = {
                    props: m,
                    validateWidget: d(function(s) {
                        m.validateWidget(m, s)
                    }, "validateWidget")
                },
                r = l,
                E = te,
                G = ee,
                h = X();
            return i.createElement("div", m.rootNodeProperties, E(q.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [i.createElement(N, {
                    getOwnerSpan: d(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: d(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeBtnEvent$Action: d(function() {
                            var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.layoutOnboardingcloseEvent$Action(e.callContext(s))
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
                            return [i.createElement(y, {
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
                                text: [G(g("lhOgm3Slcka4W0DPGAjRbw#Value", "Your industry"))],
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: r
                            }, E(l.variables.employment_industry_listVar.length < 1, !1, this, function() {
                                return [i.createElement(y, {
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
                                }, i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                    source: l.variables.employment_industry_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ae(function(s, c) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectEmploymentIndustry$Action(l.variables.employment_industry_listVar.getCurrent(c.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem2.Style"), function() {
                                                    return l.variables.employment_industry_listVar.getCurrent(c.iterationContext) === f.getemployment_industry() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.employment_industry_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return f.getemployment_industry()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: _.Empty,
                                                    content: new _(function() {
                                                        return [i.createElement(y, {
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
                                                            value: l.getCachedValue(s.getId("_cDmMLr0xUK_lr6byRVxFw.Value"), function() {
                                                                return b.translate$Action(l.variables.employment_industry_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return l.variables.employment_industry_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(y, {
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
                                                        }, E(l.variables.employment_industry_listVar.getCurrent(c.iterationContext) === f.getemployment_industry(), !1, this, function() {
                                                            return [i.createElement(D, {
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
                                                    rightActions: _.Empty
                                                },
                                                _dependencies: [a(f.getemployment_industry()), a(l.variables.employment_industry_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, o, t, "1")
                                    },
                                    _dependencies: [a(f.getemployment_industry())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [a(f.getemployment_industry()), a(l.variables.employment_industry_listVar)]
                })]
            }, function() {
                return [i.createElement(F, {
                    getOwnerSpan: d(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !l.variables.is_stand_aloneIn
                    },
                    events: {
                        _handleError: d(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeEvent$Action: d(function() {
                            var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.layoutOnboardingcloseEvent$Action(e.callContext(s))
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
                            return [i.createElement(y, {
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
                                text: [G(g("TlJ+JhAuO0iFlasHcVQmbg#Value", "Your industry"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: r
                            }, E(l.variables.employment_industry_listVar.length < 1, !1, this, function() {
                                return [i.createElement(y, {
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
                                }, i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                }), i.createElement(y, {
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
                                    source: l.variables.employment_industry_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new ae(function(s, c) {
                                            return [i.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var A = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectEmploymentIndustry$Action(l.variables.employment_industry_listVar.getCurrent(c.iterationContext), e.callContext(A))
                                                }, "onClick"),
                                                style: l.getCachedValue(s.getId("ListItem1.Style"), function() {
                                                    return l.variables.employment_industry_listVar.getCurrent(c.iterationContext) === f.getemployment_industry() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return l.variables.employment_industry_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return f.getemployment_industry()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: _.Empty,
                                                    content: new _(function() {
                                                        return [i.createElement(y, {
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
                                                            value: l.getCachedValue(s.getId("H9qzd_lppECA0zoMzeq59A.Value"), function() {
                                                                return b.translate$Action(l.variables.employment_industry_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return l.variables.employment_industry_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(y, {
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
                                                        }, E(l.variables.employment_industry_listVar.getCurrent(c.iterationContext) === f.getemployment_industry(), !1, this, function() {
                                                            return [i.createElement(D, {
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
                                                    rightActions: _.Empty
                                                },
                                                _dependencies: [a(f.getemployment_industry()), a(l.variables.employment_industry_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, o, t, "2")
                                    },
                                    _dependencies: [a(f.getemployment_industry())]
                                })]
                            })))]
                        }),
                        footer: _.Empty
                    },
                    _dependencies: [a(f.getemployment_industry()), a(l.variables.employment_industry_listVar)]
                })]
            }), i.createElement($, {
                getOwnerSpan: d(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: l.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: d(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: d(function() {
                        var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.layoutOnboardingcloseEvent$Action(e.callContext(s))
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
            getAttributes: d(function() {
                return {
                    codeFunction: "UserIndustryOfEmployment",
                    functionKey: "da4582f2-0146-49bb-9610-82e3221b4dcf",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserIndustryOfEmployment",
            modelFactory: B,
            controllerFactory: U,
            getTitle: d(function(m) {
                var l = m.model,
                    e = m.controller,
                    t = m.controller.idService,
                    n = e.validationService,
                    o = e.callContext(),
                    a = x,
                    g = V,
                    P = {
                        props: m,
                        validateWidget: d(function(r) {
                            m.validateWidget(m, r)
                        }, "validateWidget")
                    };
                return Y.resolve(K.TranslationsService).getMessage("8oJF2kYBu0mWEILjIhtNzw#TitleExpression.-1413834675.1", "Industry of employment | Deriv")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserIndustryOfEmployment.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [N, F, $]
        }, p
    }, "componentFactory"),
    me = ue();
export {
    U as controllerModule, B as modelModule, me as viewModule, k as webFlowControllerModule
};