import {
    a as k
} from "./_oschunk-J6UGFGPZ.js";
import {
    a as F
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as D
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as n,
    h as f,
    i as I,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ne,
    g as V,
    m as Q,
    n as X,
    q as Z,
    r as J,
    s as T,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as q
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    O as A,
    P as w,
    Qb as j,
    Sb as L
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as x,
    c as u,
    e as ie,
    m as E,
    n as S,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "OdhBHG4qFkK5pxk4fwrhpw#ValueExpression.-2013538399.1": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "yvZ3wUQ3eEC19ow4+gGmiA#Value": "\u0633\u062C\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "VAlmFyhK6ESbpqorAI97sg#ValueExpression.-2013538399.1": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "YRmXmMKeIkK_5vdhXv8V6w#Value": "\u0633\u062C\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "uQK8+8ICOU+Maj93Db6tpg#Title": "\u0633\u062C\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 | Deriv",
        "uQK8+8ICOU+Maj93Db6tpg#TitleExpression.1880120791.1": "\u0633\u062C\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 | Deriv"
    },
    Y = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };
var d = x; {
    let g = class g extends d.Controller.BaseViewController {
        constructor(e, t, o) {
            super(e, t, o, Y);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getLoginhistory$ServerAction() {
            return this.hasOwnProperty("_getLoginhistory$ServerAction") || (this._getLoginhistory$ServerAction = function(e, t) {
                var o = this.controller;
                return d.Logger.startActiveSpan("GetLoginhistory", function(c) {
                    return c && (c.setAttribute("code.function", "GetLoginhistory"), c.setAttribute("outsystems.function.key", "b7d800fa-f8e7-4245-8b57-51582b89a5af"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), d.Flow.tryFinally(function() {
                        var a = {
                            Authorization: d.DataConversion.ServerDataConverter.to(e, d.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetLoginhistory", "screenservices/uae/UserProfileFlow/LoginHistory/ActionGetLoginhistory", "VqdvLeuZquj4cULg5gZSTQ", a, o.callContext(t), void 0, void 0, !0).then(function(y) {
                            var h = new(o.constructor.getVariableGroupType("uae.UserProfileFlow.LoginHistory$ActionGetLoginhistory"));
                            return h.responseOut = d.DataConversion.ServerDataConverter.from(y.Response, w), h
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 0)
            }), this._getLoginhistory$ServerAction
        }
        set getLoginhistory$ServerAction(e) {
            this._getLoginhistory$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(a) {
                    a && (a.setAttribute("code.function", "LayoutOnboardingcloseEvent"), a.setAttribute("outsystems.function.key", "31b4a49e-4041-4d2b-88c7-62b2b22a656d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return o.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = o.callContext(e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "user-profile", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "f8ce22f9-6f36-4f48-8b32-714d72615451"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnReady"), e = o.callContext(e);
                        var y = new d.DataTypes.VariableHolder,
                            h = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return h.value = L.getAuth$Action(e), t.variables.is_loadingVar = !0, t.flush(), o.getLoginhistory$ServerAction(h.value.tokenOut, e).then(function(r) {
                                y.value = r
                            }).then(function() {
                                t.variables.login_historyVar = y.value.responseOut.dataAttr, t.variables.is_loadingVar = !1
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
        layoutOnboardingcloseEvent$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(o) {
                o && (o.setAttribute("code.function", "LayoutOnboardingcloseEvent"), o.setAttribute("outsystems.function.key", "31b4a49e-4041-4d2b-88c7-62b2b22a656d"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "f8ce22f9-6f36-4f48-8b32-714d72615451"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    o && o.end()
                })
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
                    o = this.model,
                    c = this.idService;
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
            return L.defaultTimeout
        }
    };
    u(g, "ControllerInner");
    let p = g;
    M = p, M.registerVariableGroupType("uae.UserProfileFlow.LoginHistory$ActionGetLoginhistory", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: d.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new w
        }, "defaultValue"),
        complexType: w
    }])
}
var M, $ = new d.Controller.ControllerFactory(M, q);
var i = ie(ne());
var v = x,
    G = class G extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("login_history", "login_historyVar", "login_history", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
                return v.DataTypes.ImmutableBase.getData(new(v.GenericTypeCache.getGenericList(A)))
            }, !1, v.GenericTypeCache.getGenericList(A)), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(G, "VariablesRecord");
var R = G;
R.init();
var z = class z extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(z, "WidgetsRecord");
var N = z,
    _ = class _ extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
u(_, "Model");
var C = _;
C._hasValidationWidgetsValue = void 0;
var U = new v.Model.ModelFactory(C);
var B = V.PlaceholderContent,
    re = V.IteratorPlaceholderContent,
    se = u(function() {
        var p = X(function(g) {
            var l = g.model,
                e = g.controller,
                t = g.controller.idService,
                o = e.validationService,
                c = e.callContext(),
                a = T,
                y = W,
                h = {
                    props: g,
                    validateWidget: u(function(s) {
                        g.validateWidget(g, s)
                    }, "validateWidget")
                },
                r = l,
                O = J,
                K = Z,
                P = Q();
            return i.createElement("div", g.rootNodeProperties, O(j.isDesktop$Action(c).isDesktopOut, !1, this, function() {
                return [i.createElement(D, {
                    getOwnerSpan: u(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !0
                    },
                    events: {
                        _handleError: u(function(s) {
                            e.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        contentbody: new B(function() {
                            return [i.createElement(n, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(n, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(H, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                text: [K(y("YRmXmMKeIkK_5vdhXv8V6w#Value", "Login history"))],
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            })), O(l.variables.is_loadingVar, !1, this, function() {
                                return [i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "w-full flex flex-col gap-4",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingFormContainer2"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem5"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle5"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField5"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem6"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle6"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField6"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem7"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle7"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField7"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem8"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle8"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField8"
                                    },
                                    _widgetRecordProvider: r
                                })))]
                            }, function() {
                                return [i.createElement(I, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.login_historyVar,
                                    style: "list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new re(function(s, m) {
                                            return [i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; align-self: stretch; border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); display: flex; gap: 24px; padding: 16px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: [a(l.variables.login_historyVar.getCurrent(m.iterationContext).ipAttr), a(l.variables.login_historyVar.getCurrent(m.iterationContext).user_agentAttr), a(l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr)]
                                            }, i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "DateTimeContainer2"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                value: l.getCachedValue(s.getId("T94HdQhTFkSLVMPP1YLdqw.Value"), function() {
                                                    return b.substr(b.replace(l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr, "T", " "), 0, 19) + " GMT"
                                                }, function() {
                                                    return l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr
                                                }),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-self: stretch; display: flex; flex-direction: column; height: 44px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                value: l.variables.login_historyVar.getCurrent(m.iterationContext).user_agentAttr,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "22"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: l.variables.login_historyVar.getCurrent(m.iterationContext).ipAttr,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: r
                                            }))), i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; border: 1px solid var(--color-solid-green-700, #00C390); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; max-height: 24px; min-height: 24px; padding: 0px 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "StatusContainer2"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 150% */; color: var(--color-solid-green-700, #00C390); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                                                },
                                                value: E.resolve(S.TranslationsService).getMessage("VAlmFyhK6ESbpqorAI97sg#ValueExpression.-2013538399.1", "Log in"),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: r
                                            })))]
                                        }, c, t, "1")
                                    },
                                    _dependencies: []
                                })]
                            }))]
                        })
                    },
                    _dependencies: [a(l.variables.login_historyVar), a(l.variables.is_loadingVar)]
                })]
            }, function() {
                return [i.createElement(F, {
                    getOwnerSpan: u(function() {
                        return P.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return P.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: u(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeEvent$Action: u(function() {
                            var s = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            e.layoutOnboardingcloseEvent$Action(e.callContext(s))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "26",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new B(function() {
                            return [i.createElement(n, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(H, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                text: [K(y("yvZ3wUQ3eEC19ow4+gGmiA#Value", "Login history"))],
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: r
                            }), O(l.variables.is_loadingVar, !1, this, function() {
                                return [i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "w-full flex flex-col gap-4",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingFormContainer"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem2"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle2"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField2"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem3"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle3"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField3"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-2",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItem4"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 22px;"
                                    },
                                    style: "w-full animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemTitle4"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(n, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background-color: rgb(229 231 235); height: 40px;"
                                    },
                                    style: "w-full rounded animate-pulse",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LoadingItemField4"
                                    },
                                    _widgetRecordProvider: r
                                })))]
                            }, function() {
                                return [i.createElement(I, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: l.variables.login_historyVar,
                                    style: "list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: t,
                                        uuid: "42"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new re(function(s, m) {
                                            return [i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; align-self: stretch; border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); display: flex; gap: 24px; padding: 16px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "43"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: [a(l.variables.login_historyVar.getCurrent(m.iterationContext).ipAttr), a(l.variables.login_historyVar.getCurrent(m.iterationContext).user_agentAttr), a(l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr)]
                                            }, i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "DateTimeContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                value: l.getCachedValue(s.getId("t83pPw_ieUqtUJ2MRyJwmQ.Value"), function() {
                                                    return b.substr(b.replace(l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr, "T", " "), 0, 19) + " GMT"
                                                }, function() {
                                                    return l.variables.login_historyVar.getCurrent(m.iterationContext).created_atAttr
                                                }),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "45"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-self: stretch; display: flex; flex-direction: column; height: 44px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "46"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                value: l.variables.login_historyVar.getCurrent(m.iterationContext).user_agentAttr,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "47"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: l.variables.login_historyVar.getCurrent(m.iterationContext).ipAttr,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "48"
                                                },
                                                _widgetRecordProvider: r
                                            }))), i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; border: 1px solid var(--color-solid-green-700, #00C390); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; max-height: 24px; min-height: 24px; padding: 0px 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "StatusContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(f, {
                                                extendedProperties: {
                                                    style: "---comment-6: /* 150% */; color: var(--color-solid-green-700, #00C390); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                                                },
                                                value: E.resolve(S.TranslationsService).getMessage("OdhBHG4qFkK5pxk4fwrhpw#ValueExpression.-2013538399.1", "Log in"),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "50"
                                                },
                                                _widgetRecordProvider: r
                                            })))]
                                        }, c, t, "2")
                                    },
                                    _dependencies: []
                                })]
                            }))]
                        }),
                        footer: B.Empty
                    },
                    _dependencies: [a(l.variables.login_historyVar), a(l.variables.is_loadingVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "LoginHistory",
                    functionKey: "fbbc02b9-02c2-4f39-8c6a-3f770dbeada6",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfileFlow.LoginHistory",
            modelFactory: U,
            controllerFactory: $,
            getTitle: u(function(g) {
                var l = g.model,
                    e = g.controller,
                    t = g.controller.idService,
                    o = e.validationService,
                    c = e.callContext(),
                    a = T,
                    y = W,
                    h = {
                        props: g,
                        validateWidget: u(function(r) {
                            g.validateWidget(g, r)
                        }, "validateWidget")
                    };
                return E.resolve(S.TranslationsService).getMessage("uQK8+8ICOU+Maj93Db6tpg#TitleExpression.1880120791.1", "Login history | Deriv")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [D, F]
        }, p
    }, "componentFactory"),
    le = se();
export {
    $ as controllerModule, U as modelModule, le as viewModule, k as webFlowControllerModule
};