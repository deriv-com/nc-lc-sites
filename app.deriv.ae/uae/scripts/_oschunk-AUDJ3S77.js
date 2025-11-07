import {
    a as k
} from "./_oschunk-OWG424DW.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
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
    f as _,
    h as T,
    i as W,
    j as N,
    n as L,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as x,
    m as X,
    n as Z,
    q as ee,
    r as te,
    s as V,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as J,
    Sb as b,
    ub as v
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as O,
    c as d,
    e as se,
    m as q,
    n as Q,
    p as A
} from "./_oschunk-M5BUVJ72.js";
var de = {
        "YxLBFOa1gUypIssiQKWCNQ#Value": "\u0642\u064A\u0645\u062A\u0643 \u0627\u0644\u0635\u0627\u0641\u064A\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0631\u064A\u0629",
        "olKXqHWoyEqsAd+JPkVRvw#Value": "\u0642\u064A\u0645\u062A\u0643 \u0627\u0644\u0635\u0627\u0641\u064A\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0631\u064A\u0629",
        "CY0sR71zKkOxRV3kYAA_lw#Title": "\u0635\u0627\u0641\u064A \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv",
        "CY0sR71zKkOxRV3kYAA_lw#TitleExpression.-880707259.1": "\u0635\u0627\u0641\u064A \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv"
    },
    re = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };
var u = O; {
    let g = class g extends u.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, re);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectNetWorth$Action() {
            return this.hasOwnProperty("__onSelectNetWorth$Action") || (this.__onSelectNetWorth$Action = function(e, t) {
                var r = this.model,
                    s = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("OnSelectNetWorth", function(f) {
                    f && (f.setAttribute("code.function", "OnSelectNetWorth"), f.setAttribute("outsystems.function.key", "57ced8ec-b289-418a-a312-dbf96eced6a0"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSelectNetWorth"), t = s.callContext(t);
                        var C = new u.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserNetWorth.OnSelectNetWorth$vars")));
                        return C.value.selected_net_worthInLocal = e, v.setnet_worth(C.value.selected_net_worthInLocal), r.variables.is_stand_aloneIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.None), t, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("uae", "user-education-level", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSelectNetWorth$Action
        }
        set _onSelectNetWorth$Action(e) {
            this.__onSelectNetWorth$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "cdf1de69-d001-4a14-978e-11322c30ddc7"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var f = new u.DataTypes.VariableHolder;
                        f.value = b.getFinancialAssessmentConfigCache$Action("estimated_net_worth", e), t.variables.net_worth_listVar = f.value.configValueOut
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
                    s = this.idService;
                return u.Logger.startActiveSpan("StopOnboardingOnContinue", function(a) {
                    a && (a.setAttribute("code.function", "StopOnboardingOnContinue"), a.setAttribute("outsystems.function.key", "ce4a7548-92e7-4167-9bb4-5ff4dbd585d1"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        onSelectNetWorth$Action(e, t) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnSelectNetWorth__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSelectNetWorth"), s.setAttribute("outsystems.function.key", "57ced8ec-b289-418a-a312-dbf96eced6a0"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSelectNetWorth$Action, t, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "cdf1de69-d001-4a14-978e-11322c30ddc7"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "ce4a7548-92e7-4167-9bb4-5ff4dbd585d1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    d(g, "ControllerInner");
    let y = g;
    M = y, M.registerVariableGroupType("uae.FinancialAssessmentFlow.UserNetWorth.OnSelectNetWorth$vars", [{
        name: "selected_net_worth",
        attrName: "selected_net_worthInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var M, U = new u.Controller.ControllerFactory(M, j);
var i = se(le());
var m = O,
    z = class z extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("net_worth_list", "net_worth_listVar", "net_worth_list", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new m.DataTypes.TextList)
            }, !1, m.DataTypes.TextList), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(z, "VariablesRecord");
var P = z;
P.init();
var K = class K extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(K, "WidgetsRecord");
var B = K,
    S = class S extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(g) {
            "is_stand_alone" in g && (this.variables.is_stand_aloneIn = m.DataConversion.ServerDataConverter.from(g.is_stand_alone, m.DataTypes.DataTypes.Boolean))
        }
    };
d(S, "Model");
var E = S;
E._hasValidationWidgetsValue = void 0;
var Y = new m.Model.ModelFactory(E);
var h = x.PlaceholderContent,
    ae = x.IteratorPlaceholderContent,
    ue = d(function() {
        var y = Z(function(g) {
            var o = g.model,
                e = g.controller,
                t = g.controller.idService,
                r = e.validationService,
                s = e.callContext(),
                a = V,
                f = I,
                C = {
                    props: g,
                    validateWidget: d(function(l) {
                        g.validateWidget(g, l)
                    }, "validateWidget")
                },
                n = o,
                w = te,
                G = ee,
                p = X();
            return i.createElement("div", g.rootNodeProperties, w(J.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [i.createElement(F, {
                    getOwnerSpan: d(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return p.getChildSpan("destroy")
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
                            }, i.createElement(H, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [G(f("olKXqHWoyEqsAd+JPkVRvw#Value", "Your estimated net worth"))],
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
                            }, w(o.variables.net_worth_listVar.length < 1 || o.variables.is_loadingVar, !1, this, function() {
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
                                return [i.createElement(W, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.net_worth_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        content: new ae(function(l, c) {
                                            return [i.createElement(N, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var R = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectNetWorth$Action(o.variables.net_worth_listVar.getCurrent(c.iterationContext), e.callContext(R))
                                                }, "onClick"),
                                                style: o.getCachedValue(l.getId("ListItem2.Style"), function() {
                                                    return o.variables.net_worth_listVar.getCurrent(c.iterationContext) === v.getnet_worth() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.net_worth_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return v.getnet_worth()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: l,
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
                                                                service: l,
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, i.createElement(T, {
                                                            value: o.getCachedValue(l.getId("+XRlJgZqBEGBWt1YTE+CBg.Value"), function() {
                                                                return b.translate$Action(o.variables.net_worth_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return o.variables.net_worth_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: l,
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
                                                                service: l,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, w(o.variables.net_worth_listVar.getCurrent(c.iterationContext) === v.getnet_worth(), !1, this, function() {
                                                            return [i.createElement(L, {
                                                                image: A.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: l,
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
                                                _dependencies: [a(v.getnet_worth()), a(o.variables.net_worth_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, s, t, "1")
                                    },
                                    _dependencies: [a(v.getnet_worth())]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [a(v.getnet_worth()), a(o.variables.is_loadingVar), a(o.variables.net_worth_listVar)]
                })]
            }, function() {
                return [i.createElement(D, {
                    getOwnerSpan: d(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !o.variables.is_stand_aloneIn,
                        has_close_icon: !0
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
                            }, i.createElement(H, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "mb-12",
                                text: [G(f("YxLBFOa1gUypIssiQKWCNQ#Value", "Your estimated net worth"))],
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
                            }, w(o.variables.net_worth_listVar.length < 1 || o.variables.is_loadingVar, !1, this, function() {
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
                                return [i.createElement(W, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.net_worth_listVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        content: new ae(function(l, c) {
                                            return [i.createElement(N, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    var R = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                    e.onSelectNetWorth$Action(o.variables.net_worth_listVar.getCurrent(c.iterationContext), e.callContext(R))
                                                }, "onClick"),
                                                style: o.getCachedValue(l.getId("ListItem1.Style"), function() {
                                                    return o.variables.net_worth_listVar.getCurrent(c.iterationContext) === v.getnet_worth() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.net_worth_listVar.getCurrent(c.iterationContext)
                                                }, function() {
                                                    return v.getnet_worth()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: l,
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
                                                                service: l,
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, i.createElement(T, {
                                                            value: o.getCachedValue(l.getId("Y19B3e+iP0aVy+6HdOxN+Q.Value"), function() {
                                                                return b.translate$Action(o.variables.net_worth_listVar.getCurrent(c.iterationContext), c).translatedTextOut
                                                            }, function() {
                                                                return o.variables.net_worth_listVar.getCurrent(c.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: l,
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
                                                                service: l,
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, w(o.variables.net_worth_listVar.getCurrent(c.iterationContext) === v.getnet_worth(), !1, this, function() {
                                                            return [i.createElement(L, {
                                                                image: A.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: l,
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
                                                _dependencies: [a(v.getnet_worth()), a(o.variables.net_worth_listVar.getCurrent(c.iterationContext))]
                                            })]
                                        }, s, t, "2")
                                    },
                                    _dependencies: [a(v.getnet_worth())]
                                })]
                            })))]
                        }),
                        footer: h.Empty
                    },
                    _dependencies: [a(v.getnet_worth()), a(o.variables.is_loadingVar), a(o.variables.net_worth_listVar)]
                })]
            }), i.createElement($, {
                getOwnerSpan: d(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: o.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: d(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    onContinue$Action: d(function() {
                        var l = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(l))
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
            getAttributes: d(function() {
                return {
                    codeFunction: "UserNetWorth",
                    functionKey: "472c8d09-73bd-432a-b145-5de460003f97",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserNetWorth",
            modelFactory: Y,
            controllerFactory: U,
            getTitle: d(function(g) {
                var o = g.model,
                    e = g.controller,
                    t = g.controller.idService,
                    r = e.validationService,
                    s = e.callContext(),
                    a = V,
                    f = I,
                    C = {
                        props: g,
                        validateWidget: d(function(n) {
                            g.validateWidget(g, n)
                        }, "validateWidget")
                    };
                return q.resolve(Q.TranslationsService).getMessage("CY0sR71zKkOxRV3kYAA_lw#TitleExpression.-880707259.1", "Net worth | Deriv")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserNetWorth.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [F, D, $]
        }, y
    }, "componentFactory"),
    ge = ue();
export {
    U as controllerModule, Y as modelModule, ge as viewModule, k as webFlowControllerModule
};