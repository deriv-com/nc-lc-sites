import {
    a as g
} from "./_oschunk-WER75YAS.js";
import {
    c as y,
    d as w
} from "./_oschunk-WAXNMQCP.js";
import {
    a as R
} from "./_oschunk-LHY3WMNC.js";
import {
    a as H,
    g as E,
    i as b
} from "./_oschunk-J7LCUWB3.js";
import {
    a as c,
    d as v
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l,
    g as T
} from "./_oschunk-DVBKI63I.js";
var f = T(H());
var F = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u062D\u0642\u064A\u0642\u064A",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u062A\u062C\u0631\u064A\u0628\u064A"
    },
    V = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    p = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    $ = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "R\xE9el",
        "Iu0uTGMV2U+scsffftluAw#Value": "D\xE9mo"
    },
    O = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Reale",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    x = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Rzeczywiste",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    I = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Real",
        "Iu0uTGMV2U+scsffftluAw#Value": "Demo"
    },
    M = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0439",
        "Iu0uTGMV2U+scsffftluAw#Value": "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    },
    k = {
        "ar-001": {
            translations: F,
            isRTL: !0
        },
        "de-DE": {
            translations: V,
            isRTL: !1
        },
        "es-ES": {
            translations: p,
            isRTL: !1
        },
        "fr-FR": {
            translations: $,
            isRTL: !1
        },
        "it-IT": {
            translations: O,
            isRTL: !1
        },
        "pl-PL": {
            translations: x,
            isRTL: !1
        },
        "pt-PT": {
            translations: I,
            isRTL: !1
        },
        "ru-RU": {
            translations: M,
            isRTL: !1
        }
    };
var r = h; {
    let u = class u extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, k);
            var d = this.controller;
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
                    d = this.idService;
                return r.Logger.startActiveSpan("RealClick", function(n) {
                    return n && (n.setAttribute("code.function", "RealClick"), n.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("RealClick"), e = t.callContext(e);
                        var i = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return i.value = v.demoRealSwitcher$Action(!1, e), r.Flow.executeSequence(function() {
                                return i.value.noRealAccountPresentOut === !0 ? (c.setInitializeRealSignup(!0), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "currency-selection", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))) : t.realClickEvent$Action(e)
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
                    d = this.idService;
                return r.Logger.startActiveSpan("DemoClick", function(n) {
                    return n && (n.setAttribute("code.function", "DemoClick"), n.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("DemoClick"), e = t.callContext(e);
                        var i = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return i.value = v.demoRealSwitcher$Action(!0, e), t.demoClickEvent$Action(e)
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
            return v.defaultTimeout
        }
    };
    l(u, "ControllerInner");
    let _ = u;
    P = _
}
var P, S = new r.Controller.ControllerFactory(P, R);
var D = h,
    re = b.PlaceholderContent,
    ne = b.IteratorPlaceholderContent,
    s = class s extends E.BaseWebBlock {
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
            return g
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                a = this.controller,
                e = this.idService,
                o = a.validationService,
                t = this.widgetsRecordProvider,
                d = a.callContext(),
                n = s.ifWidget,
                i = s.textWidget,
                N = s.asPrimitiveValue,
                C = s.getTranslation,
                B = this;
            return f.createElement("div", this.getRootNodeProperties(), n(c.getAuthToken() !== D.BuiltinFunctions.nullTextIdentifier(), !0, this, function() {
                return [f.createElement(y, {
                    _validationProps: {
                        validationService: o
                    },
                    enabled: !0,
                    mandatory: !0,
                    style: "real-demo-switcher",
                    variable: u.createVariable(D.DataTypes.DataTypes.Text, c.getAccountType(), function(m) {
                        c.setAccountType(m)
                    }),
                    _idProps: {
                        service: e,
                        name: "RealDemoSwitcher"
                    },
                    _widgetRecordProvider: t
                }, f.createElement(w, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var m = d.clone();
                                return a.demoClick$Action(a.callContext(m))
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
                }, i(C("Iu0uTGMV2U+scsffftluAw#Value", "Demo"))), f.createElement(w, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var m = d.clone();
                                return a.realClick$Action(a.callContext(m))
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
                }, i(C("ggfnr5HPPUCxE3D9mz+sbw#Value", "Real"))))]
            }, function() {
                return []
            }))
        }
    };
l(s, "View");
var A = s,
    oe = A;
export {
    oe as a
};