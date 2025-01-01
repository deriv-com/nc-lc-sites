import {
    a as D
} from "./_oschunk-3ONGJG7U.js";
import {
    c as S,
    d as g
} from "./_oschunk-42NACYKQ.js";
import {
    a as T
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as $,
    g as k,
    i as C
} from "./_oschunk-RKYF3TWC.js";
import {
    a as o,
    c as d
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as b
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as H
} from "./_oschunk-DVBKI63I.js";
var _ = H($());
var p = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u062D\u0642\u064A\u0642\u064A",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u062A\u062C\u0631\u064A\u0628\u064A"
    },
    L = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    M = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    I = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "R\xE9el",
        "Iu0uTGMV2U+scsffftluAw#Value": "D\xE9mo"
    },
    x = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Reale",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    N = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Rzeczywiste",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    G = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    B = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0439",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    },
    P = {
        "ar-001": {
            translations: p,
            isRTL: !0
        },
        "de-DE": {
            translations: L,
            isRTL: !1
        },
        "es-ES": {
            translations: M,
            isRTL: !1
        },
        "fr-FR": {
            translations: I,
            isRTL: !1
        },
        "it-IT": {
            translations: x,
            isRTL: !1
        },
        "pl-PL": {
            translations: N,
            isRTL: !1
        },
        "pt-PT": {
            translations: G,
            isRTL: !1
        },
        "ru-RU": {
            translations: B,
            isRTL: !1
        }
    };

function y(f, m, l) {
    window.location.pathname.toLowerCase() !== "/tradershub/cfds" && (window.GetMT5AccountsOnAccountSwitch && clearTimeout(GetMT5AccountsOnAccountSwitch), window.GetMT5AccountsOnAccountSwitch = setTimeout(() => {
        f.GetMT5AccountsOnAccountSwitch(), window.GetMT5AccountsOnAccountSwitch = null
    }, 5e3))
}
a(y, "default");

function R(f, m, l) {
    window.location.pathname.toLowerCase() !== "/tradershub/cfds" && (window.GetMT5AccountsOnAccountSwitch && clearTimeout(GetMT5AccountsOnAccountSwitch), window.GetMT5AccountsOnAccountSwitch = setTimeout(() => {
        f.GetMT5AccountsOnAccountSwitch(), window.GetMT5AccountsOnAccountSwitch = null
    }, 5e3))
}
a(R, "default");
var r = b; {
    let m = class m extends r.Controller.BaseViewController {
        constructor(t, s, e) {
            super(t, s, e, P);
            var w = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _realClick$Action() {
            return this.hasOwnProperty("__realClick$Action") || (this.__realClick$Action = function(t) {
                var s = this.model,
                    e = this.controller,
                    w = this.idService;
                return r.Logger.startActiveSpan("RealClick", function(n) {
                    return n && (n.setAttribute("code.function", "RealClick"), n.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("RealClick"), t = e.callContext(t);
                        var u = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder,
                            i = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (o.getAccountType() !== "real") return i.value = d.getWalletsAccountsList$Action(t), u.value = d.getTradingAccountsList$Action(t), h.value = r.SystemActions.listFilter(u.value.tradingAccountsListOut, function(c) {
                                    return c.currencyAttr === i.value.walletsAccountsListOut.getCurrent(t.iterationContext).currencyAttr
                                }, t), r.Flow.executeSequence(function() {
                                    return o.getNoRealAccount() ? (o.setInitializeRealSignup(!0), o.setOnInitialPageLoad(!1), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "currency-selection", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), t, !0))) : (o.setAccountType("real"), o.setActiveWalletLoginId(i.value.walletsAccountsListOut.getCurrent(t.iterationContext).loginidAttr), o.setActiveTradingLoginId(h.value.filteredListOut.isEmpty ? "" : h.value.filteredListOut.getCurrent(t.iterationContext).loginidAttr), e.realClickEvent$Action(t).then(function() {
                                        r.Logger.startActiveSpan("FetchCFDaccounts", function(c) {
                                            c && (c.setAttribute("code.function", "FetchCFDaccounts"), c.setAttribute("outsystems.function.key", "56462ef2-034b-4137-9ee0-da9840cc3d99"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return e.safeExecuteJSNode(y, "FetchCFDaccounts", "RealClick", null, function(v) {}, {
                                                    GetMT5AccountsOnAccountSwitch: d.clientActionProxies.getMT5AccountsOnAccountSwitch$Action
                                                }, {})
                                            } finally {
                                                c && c.end()
                                            }
                                        }, 1)
                                    }))
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__realClick$Action
        }
        set _realClick$Action(t) {
            this.__realClick$Action = t
        }
        get _demoClick$Action() {
            return this.hasOwnProperty("__demoClick$Action") || (this.__demoClick$Action = function(t) {
                var s = this.model,
                    e = this.controller,
                    w = this.idService;
                return r.Logger.startActiveSpan("DemoClick", function(n) {
                    return n && (n.setAttribute("code.function", "DemoClick"), n.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("DemoClick"), t = e.callContext(t);
                        var u = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (o.getAccountType() !== "demo") return u.value = d.getVRTCAccount$Action(t), h.value = d.getVRWAccount$Action(t), o.setAccountType("demo"), o.setActiveWalletLoginId(h.value.vRWAccountListOut.getCurrent(t.iterationContext).loginidAttr), o.setActiveTradingLoginId(u.value.vRTCAccountListOut.getCurrent(t.iterationContext).loginidAttr), e.demoClickEvent$Action(t).then(function() {
                                    r.Logger.startActiveSpan("FetchCFDaccounts", function(i) {
                                        i && (i.setAttribute("code.function", "FetchCFDaccounts"), i.setAttribute("outsystems.function.key", "006c304e-7ec1-4519-8e64-bdfea5902031"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(R, "FetchCFDaccounts", "DemoClick", null, function(c) {}, {
                                                GetMT5AccountsOnAccountSwitch: d.clientActionProxies.getMT5AccountsOnAccountSwitch$Action
                                            }, {})
                                        } finally {
                                            i && i.end()
                                        }
                                    }, 1)
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__demoClick$Action
        }
        set _demoClick$Action(t) {
            this.__demoClick$Action = t
        }
        realClick$Action(t) {
            var s = this.controller;
            return r.Logger.startActiveSpan("RealClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "RealClick"), e.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._realClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        demoClick$Action(t) {
            var s = this.controller;
            return r.Logger.startActiveSpan("DemoClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "DemoClick"), e.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._demoClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get demoClickEvent$Action() {
            return this.hasOwnProperty("_demoClickEvent$Action") || (this._demoClickEvent$Action = function() {
                return Promise.resolve()
            }), this._demoClickEvent$Action
        }
        set demoClickEvent$Action(t) {
            this._demoClickEvent$Action = t
        }
        get realClickEvent$Action() {
            return this.hasOwnProperty("_realClickEvent$Action") || (this._realClickEvent$Action = function() {
                return Promise.resolve()
            }), this._realClickEvent$Action
        }
        set realClickEvent$Action(t) {
            this._realClickEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return d.defaultTimeout
        }
    };
    a(m, "ControllerInner");
    let f = m;
    F = f
}
var F, O = new r.Controller.ControllerFactory(F, T);
var V = b,
    ut = C.PlaceholderContent,
    dt = C.IteratorPlaceholderContent,
    A = class A extends k.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.RealDemoSwitcher"
        }
        static getAttributes() {
            return {
                codeFunction: "RealDemoSwitcher",
                functionKey: "ab7c8517-98d5-4615-b795-4a857fd3d6a4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.RealDemoSwitcher.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return ""
        }
        internalRender() {
            let m = this.model,
                l = this.controller,
                t = this.idService,
                s = l.validationService,
                e = this.widgetsRecordProvider,
                w = l.callContext(),
                n = A.ifWidget,
                u = A.textWidget,
                h = A.asPrimitiveValue,
                i = A.getTranslation,
                c = this;
            return _.createElement("div", this.getRootNodeProperties(), n(o.getAuthToken() !== V.BuiltinFunctions.nullTextIdentifier(), !0, this, function() {
                return [_.createElement(S, {
                    _validationProps: {
                        validationService: s
                    },
                    enabled: !0,
                    mandatory: !0,
                    style: "real-demo-switcher",
                    variable: m.createVariable(V.DataTypes.DataTypes.Text, o.getAccountType(), function(v) {
                        o.setAccountType(v)
                    }),
                    _idProps: {
                        service: t,
                        name: "RealDemoSwitcher"
                    },
                    _widgetRecordProvider: e
                }, _.createElement(g, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: a(function() {
                            return Promise.resolve().then(function() {
                                var v = w.clone();
                                return l.demoClick$Action(l.callContext(v))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "demo",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "demo"
                    },
                    _widgetRecordProvider: e
                }, u(i("Iu0uTGMV2U+scsffftluAw#Value", "Demo"))), _.createElement(g, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: a(function() {
                            return Promise.resolve().then(function() {
                                var v = w.clone();
                                return l.realClick$Action(l.callContext(v))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "real",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "real"
                    },
                    _widgetRecordProvider: e
                }, u(i("ggfnr5HPPUCxE3D9mz+sbw#Value", "Real"))))]
            }, function() {
                return []
            }))
        }
    };
a(A, "View");
var E = A,
    ft = E;
export {
    ft as a
};