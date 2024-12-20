import {
    a as k
} from "./_oschunk-ZOYETE4I.js";
import {
    c as E,
    d as b
} from "./_oschunk-E7JQAU4J.js";
import {
    a as y
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as H,
    g as R,
    i as g
} from "./_oschunk-T77XORCW.js";
import {
    a as i,
    d
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as _
} from "./_oschunk-5EPHB76O.js";
import {
    c as u,
    g as V
} from "./_oschunk-DVBKI63I.js";
var v = V(H());
var F = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u062D\u0642\u064A\u0642\u064A",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u062A\u062C\u0631\u064A\u0628\u064A"
    },
    p = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    $ = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    O = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "R\xE9el",
        "Iu0uTGMV2U+scsffftluAw#Value": "D\xE9mo"
    },
    I = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Reale",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    L = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Rzeczywiste",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    x = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    M = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0439",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    },
    P = {
        "ar-001": {
            translations: F,
            isRTL: !0
        },
        "de-DE": {
            translations: p,
            isRTL: !1
        },
        "es-ES": {
            translations: $,
            isRTL: !1
        },
        "fr-FR": {
            translations: O,
            isRTL: !1
        },
        "it-IT": {
            translations: I,
            isRTL: !1
        },
        "pl-PL": {
            translations: L,
            isRTL: !1
        },
        "pt-PT": {
            translations: x,
            isRTL: !1
        },
        "ru-RU": {
            translations: M,
            isRTL: !1
        }
    };
var r = _; {
    let f = class f extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, P);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _realClick$Action() {
            return this.hasOwnProperty("__realClick$Action") || (this.__realClick$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("RealClick", function(n) {
                    return n && (n.setAttribute("code.function", "RealClick"), n.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("RealClick"), e = t.callContext(e);
                        var s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (i.getAccountType() !== "real") return s.value = d.getTradingAccountsList$Action(e), c.value = d.getWalletsAccountsList$Action(e), r.Flow.executeSequence(function() {
                                    return i.getNoRealAccount() ? (i.setInitializeRealSignup(!0), i.setOnInitialPageLoad(!1), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "currency-selection", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))) : (i.setAccountType("real"), i.setActiveWalletLoginId(c.value.walletsAccountsListOut.getCurrent(e.iterationContext).loginidAttr), i.setActiveTradingLoginId(s.value.tradingAccountsListOut.getCurrent(e.iterationContext).loginidAttr), t.realClickEvent$Action(e))
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__realClick$Action
        }
        set _realClick$Action(e) {
            this.__realClick$Action = e
        }
        get _demoClick$Action() {
            return this.hasOwnProperty("__demoClick$Action") || (this.__demoClick$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("DemoClick", function(n) {
                    return n && (n.setAttribute("code.function", "DemoClick"), n.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("DemoClick"), e = t.callContext(e);
                        var s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (i.getAccountType() !== "demo") return s.value = d.getVRTCAccount$Action(e), c.value = d.getVRWAccount$Action(e), i.setAccountType("demo"), i.setActiveWalletLoginId(c.value.vRWAccountListOut.getCurrent(e.iterationContext).loginidAttr), i.setActiveTradingLoginId(s.value.vRTCAccountListOut.getCurrent(e.iterationContext).loginidAttr), t.demoClickEvent$Action(e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__demoClick$Action
        }
        set _demoClick$Action(e) {
            this.__demoClick$Action = e
        }
        realClick$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("RealClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RealClick"), t.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._realClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        demoClick$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("DemoClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "DemoClick"), t.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._demoClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get demoClickEvent$Action() {
            return this.hasOwnProperty("_demoClickEvent$Action") || (this._demoClickEvent$Action = function() {
                return Promise.resolve()
            }), this._demoClickEvent$Action
        }
        set demoClickEvent$Action(e) {
            this._demoClickEvent$Action = e
        }
        get realClickEvent$Action() {
            return this.hasOwnProperty("_realClickEvent$Action") || (this._realClickEvent$Action = function() {
                return Promise.resolve()
            }), this._realClickEvent$Action
        }
        set realClickEvent$Action(e) {
            this._realClickEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return d.defaultTimeout
        }
    };
    u(f, "ControllerInner");
    let A = f;
    T = A
}
var T, D = new r.Controller.ControllerFactory(T, y);
var S = _,
    re = g.PlaceholderContent,
    ne = g.IteratorPlaceholderContent,
    a = class a extends R.BaseWebBlock {
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
            return k
        }
        get controllerFactory() {
            return D
        }
        get title() {
            return ""
        }
        internalRender() {
            let f = this.model,
                l = this.controller,
                e = this.idService,
                o = l.validationService,
                t = this.widgetsRecordProvider,
                m = l.callContext(),
                n = a.ifWidget,
                s = a.textWidget,
                c = a.asPrimitiveValue,
                C = a.getTranslation,
                N = this;
            return v.createElement("div", this.getRootNodeProperties(), n(i.getAuthToken() !== S.BuiltinFunctions.nullTextIdentifier(), !0, this, function() {
                return [v.createElement(E, {
                    _validationProps: {
                        validationService: o
                    },
                    enabled: !0,
                    mandatory: !0,
                    style: "real-demo-switcher",
                    variable: f.createVariable(S.DataTypes.DataTypes.Text, i.getAccountType(), function(h) {
                        i.setAccountType(h)
                    }),
                    _idProps: {
                        service: e,
                        name: "RealDemoSwitcher"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(b, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: u(function() {
                            return Promise.resolve().then(function() {
                                var h = m.clone();
                                return l.demoClick$Action(l.callContext(h))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "demo",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "demo"
                    },
                    _widgetRecordProvider: t
                }, s(C("Iu0uTGMV2U+scsffftluAw#Value", "Demo"))), v.createElement(b, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: u(function() {
                            return Promise.resolve().then(function() {
                                var h = m.clone();
                                return l.realClick$Action(l.callContext(h))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "real",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "real"
                    },
                    _widgetRecordProvider: t
                }, s(C("ggfnr5HPPUCxE3D9mz+sbw#Value", "Real"))))]
            }, function() {
                return []
            }))
        }
    };
u(a, "View");
var w = a,
    ie = w;
export {
    ie as a
};