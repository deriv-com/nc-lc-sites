import {
    a as ue
} from "./_oschunk-XEL4JSC7.js";
import {
    a as Le,
    b as ke,
    c as Fe,
    d as He,
    e as Ie,
    f as Be
} from "./_oschunk-5A6GGVSN.js";
import "./_oschunk-CTAIXTGW.js";
import {
    a as Ue
} from "./_oschunk-NUDAL7WC.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as de
} from "./_oschunk-REKE2HUI.js";
import "./_oschunk-ETP52G4K.js";
import "./_oschunk-HVBO7UJ7.js";
import "./_oschunk-LS2CNLHX.js";
import {
    a as ce
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-ZOYETE4I.js";
import "./_oschunk-CCRNOUNW.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as k,
    h,
    j as V,
    k as Ve,
    l as xe,
    r as R,
    v as $e,
    y as D
} from "./_oschunk-E7JQAU4J.js";
import {
    a as L
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as K,
    g as N,
    i as O
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as _,
    c as te,
    d as A
} from "./_oschunk-VADNKVBQ.js";
import {
    l as Ne
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    lg as le,
    vc as se
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as S
} from "./_oschunk-5EPHB76O.js";
import {
    a as ae,
    b as oe,
    c as o,
    g as G
} from "./_oschunk-DVBKI63I.js";
var x = G(K());
var p = G(K());
var at = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "\u062A\u062D\u0648\u064A\u0644",
        "g+rubxwVrUeAXfWwmef2yg#Value": "\u062A\u062D\u0648\u064A\u0644",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "\u0627\u0644\u0633\u062D\u0628",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639"
    },
    ot = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "\xDCberweisung",
        "g+rubxwVrUeAXfWwmef2yg#Value": "\xDCberweisung",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "Abheben",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "Einzahlung"
    },
    st = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "Transferencia",
        "g+rubxwVrUeAXfWwmef2yg#Value": "Transferencia",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "Retirar",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "Dep\xF3sito"
    },
    lt = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "Transf\xE9rer",
        "g+rubxwVrUeAXfWwmef2yg#Value": "Transf\xE9rer",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "Retirer",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "D\xE9p\xF4t"
    },
    ct = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "Przelew",
        "g+rubxwVrUeAXfWwmef2yg#Value": "Przelew",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "Wyp\u0142a\u0107",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "Wp\u0142ata"
    },
    dt = {
        "hmSm77j8qESt5jkpW3ILUQ#Value": "Transfer\xEAncias",
        "g+rubxwVrUeAXfWwmef2yg#Value": "Transfer\xEAncias",
        "jCgKmB4rSU+El6_SNeu7KQ#Value": "Levantamentos",
        "f5Q0fCmSAEWTrCcn8ARsYg#Value": "Dep\xF3sitos"
    },
    Me = {
        "ar-001": {
            translations: at,
            isRTL: !0
        },
        "de-DE": {
            translations: ot,
            isRTL: !1
        },
        "es-ES": {
            translations: st,
            isRTL: !1
        },
        "fr-FR": {
            translations: lt,
            isRTL: !1
        },
        "pl-PL": {
            translations: ct,
            isRTL: !1
        },
        "pt-PT": {
            translations: dt,
            isRTL: !1
        }
    };

function fe(y, s, l, e) {
    y.Payload = JSON.stringify({
        loginid: y.LoginId
    })
}
o(fe, "default");
var m = S; {
    let s = class s extends m.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Me);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resetBalanceAction$Action() {
            return this.hasOwnProperty("__resetBalanceAction$Action") || (this.__resetBalanceAction$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return m.Logger.startActiveSpan("ResetBalanceAction", function(r) {
                    return r && (r.setAttribute("code.function", "ResetBalanceAction"), r.setAttribute("outsystems.function.key", "18607178-abe5-4c43-a05c-43baed8b6adc"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResetBalanceAction"), e = t.callContext(e);
                        var f = new m.DataTypes.VariableHolder,
                            v = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return v.value = m.Logger.startActiveSpan("TopupVirtualPayload", function(d) {
                                d && (d.setAttribute("code.function", "TopupVirtualPayload"), d.setAttribute("outsystems.function.key", "e2b56755-4dae-440e-b40f-e11d5a29bf81"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(fe, "TopupVirtualPayload", "ResetBalanceAction", {
                                        LoginId: m.DataConversion.JSNodeParamConverter.to(_.getActiveWalletLoginId(), m.DataTypes.DataTypes.Text),
                                        Payload: m.DataConversion.JSNodeParamConverter.to("", m.DataTypes.DataTypes.Text)
                                    }, function(c) {
                                        var a = new(t.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsDashboard.ResetBalanceAction$topupVirtualPayloadJSResult"));
                                        return a.payloadOut = m.DataConversion.JSNodeParamConverter.from(c.Payload, m.DataTypes.DataTypes.Text), a
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), n.flush(), A.derivApiSendMessage$Action(v.value.payloadOut, "topup_virtual", e).then(function(d) {
                                f.value = d
                            }).then(function() {
                                return m.Flow.executeSequence(function() {
                                    if (f.value.isErrorOut) m.FeedbackMessageService.showFeedbackMessage(f.value.errorMessageOut, 3);
                                    else return t.updatePageDataEvent$Action(e).then(function() {
                                        m.FeedbackMessageService.showFeedbackMessage("Your balance has been reset successfully.", 1)
                                    })
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__resetBalanceAction$Action
        }
        set _resetBalanceAction$Action(e) {
            this.__resetBalanceAction$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return m.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "2a024740-2f26-4fd7-8836-79fca90c5a3f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), m.Flow.executeAsyncFlow(function() {
                            return t._getData$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _getData$Action() {
            return this.hasOwnProperty("__getData$Action") || (this.__getData$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return m.Logger.startActiveSpan("GetData", function(r) {
                    return r && (r.setAttribute("code.function", "GetData"), r.setAttribute("outsystems.function.key", "a3c5f6e9-363e-47ac-b086-3fea7f83c9c1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetData"), e = t.callContext(e);
                        var f = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, A.checkWalletLoginId$Action(e), n.flush(), A.getActiveWallet$Action(e).then(function(v) {
                                f.value = v
                            }).then(function() {
                                f.value.isErrorOut ? (m.FeedbackMessageService.showFeedbackMessage(f.value.errorMessageOut, 3), n.variables.isLoadingVar = !1) : (n.variables.activeWalletVar = f.value.activeWalletOut, n.variables.isLoadingVar = !1)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__getData$Action
        }
        set _getData$Action(e) {
            this.__getData$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "b445a5d0-18da-4546-9b2e-8c756aa2bce2"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new m.DataTypes.VariableHolder,
                            v = new m.DataTypes.VariableHolder,
                            d = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return v.value = A.performanceNow$Action(!0, "dashboard", e), n.flush(), A.sendAuthorize$Action(!1, e).then(function(c) {
                                d.value = c
                            }).then(function() {
                                return t._getData$Action(e)
                            }).then(function() {
                                f.value = A.performanceNow$Action(!1, "dashboard", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDashboardClick$Action() {
            return this.hasOwnProperty("__onDashboardClick$Action") || (this.__onDashboardClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return m.Logger.startActiveSpan("OnDashboardClick", function(r) {
                    r && (r.setAttribute("code.function", "OnDashboardClick"), r.setAttribute("outsystems.function.key", "c7027d49-77de-47d5-8d04-2d6a36ad70a2"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnDashboardClick"), e = t.callContext(e), _.getAccountType() === "real") return m.Navigation.navigateTo(m.Navigation.generateScreenURL("tradershub", "wallets/recent-transactions", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDashboardClick$Action
        }
        set _onDashboardClick$Action(e) {
            this.__onDashboardClick$Action = e
        }
        resetBalanceAction$Action(e) {
            var n = this.controller;
            return m.Logger.startActiveSpan("ResetBalanceAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResetBalanceAction"), t.setAttribute("outsystems.function.key", "18607178-abe5-4c43-a05c-43baed8b6adc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._resetBalanceAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return m.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "2a024740-2f26-4fd7-8836-79fca90c5a3f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getData$Action(e) {
            var n = this.controller;
            return m.Logger.startActiveSpan("GetData__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetData"), t.setAttribute("outsystems.function.key", "a3c5f6e9-363e-47ac-b086-3fea7f83c9c1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getData$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b445a5d0-18da-4546-9b2e-8c756aa2bce2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDashboardClick$Action(e) {
            var n = this.controller;
            return m.Logger.startActiveSpan("OnDashboardClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDashboardClick"), t.setAttribute("outsystems.function.key", "c7027d49-77de-47d5-8d04-2d6a36ad70a2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDashboardClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get updatePageDataEvent$Action() {
            return this.hasOwnProperty("_updatePageDataEvent$Action") || (this._updatePageDataEvent$Action = function() {
                return Promise.resolve()
            }), this._updatePageDataEvent$Action
        }
        set updatePageDataEvent$Action(e) {
            this._updatePageDataEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onReady$Action(e)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return A.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let y = s;
    ve = y, ve.registerVariableGroupType("tradershub.WalletBlocks.WalletsDashboard.ResetBalanceAction$topupVirtualPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var ve, Je = new m.Controller.ControllerFactory(ve, L);
var C = S,
    Ut = O.PlaceholderContent,
    Mt = O.IteratorPlaceholderContent,
    U = class U extends N.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsDashboard"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsDashboard",
                functionKey: "97ea78bc-7d4a-4c43-9465-f918e58c15c0",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsDashboard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Le
        }
        get controllerFactory() {
            return Je
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = U.ifWidget,
                f = U.textWidget,
                v = U.asPrimitiveValue,
                d = U.getTranslation,
                c = this;
            return p.createElement("div", this.getRootNodeProperties(), r(s.variables.isLoadingVar, !0, this, function() {
                return [p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "skeleton wallet-dashboard__skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [p.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: o(function() {
                            var a = u.clone();
                            l.onDashboardClick$Action(l.callContext(a))
                        }, "onClick")
                    },
                    style: s.getCachedValue(e.getId("Container.Style"), function() {
                        return _.getAccountType() === "demo" ? "wallet-dashboard wallet-dashboard__demo" : "wallet-dashboard wallet-dashboard__real"
                    }, function() {
                        return _.getAccountType()
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Container"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "wallet-dashboard__info",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "AccountInfo"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    style: "wallet-dashboard__icon",
                    type: 1,
                    url: s.variables.activeWalletVar.iconAttr,
                    _idProps: {
                        service: e,
                        name: "AccountIcon"
                    },
                    _widgetRecordProvider: t
                }), p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "flex-1",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-center flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(V, {
                    style: s.getCachedValue(e.getId("AccountName.Style"), function() {
                        return Ne.isDesktop$Action(u).isDesktopOut ? "font-size-s" : "font-size-xs"
                    }),
                    value: s.variables.activeWalletVar.nameAttr,
                    _idProps: {
                        service: e,
                        name: "AccountName"
                    },
                    _widgetRecordProvider: t
                }), p.createElement(V, {
                    extendedProperties: {
                        style: "font-size: 20px;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    style: "font-bold heading5 full-width",
                    value: s.variables.activeWalletVar.formatted_balanceAttr,
                    _idProps: {
                        service: e,
                        name: "Balance"
                    },
                    _widgetRecordProvider: t
                }))), p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "chevron-icon",
                    visible: _.getAccountType() === "real",
                    _idProps: {
                        service: e,
                        name: "ChevronIconContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        name: "Chevron"
                    },
                    _widgetRecordProvider: t
                }))), p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: s.getCachedValue(e.getId("ActionButtons.Style"), function() {
                        return _.getAccountType() === "demo" ? "wallet-header-actions--demo" : "wallet-header-actions"
                    }, function() {
                        return _.getAccountType()
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ActionButtons"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "display-flex flex-direction-column align-items-center margin-x-s",
                    visible: _.getAccountType() === "real",
                    _idProps: {
                        service: e,
                        name: "DepositContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(k, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: o(function() {
                        try {
                            C.Navigation.navigateTo(C.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), C.Transitions.createTransition(C.Transitions.TransitionAnimation.None), null, !0)
                        } catch (a) {
                            if (a.name !== "RedirectOccurredException") throw a
                        }
                    }, "onClick"),
                    style: "wallet-header-btn wallet-header-btn-primary",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "DepositBtn"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussm.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    style: "margin-top-xs",
                    text: [f(d("f5Q0fCmSAEWTrCcn8ARsYg#Value", "Deposit"))],
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "display-flex flex-direction-column align-items-center margin-x-s",
                    visible: _.getAccountType() === "real",
                    _idProps: {
                        service: e,
                        name: "WithdrawContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(k, {
                    enabled: !0,
                    extendedProperties: {
                        style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    isDefault: !1,
                    onClick: o(function() {
                        try {
                            C.Navigation.navigateTo(C.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/verification", {}), C.Transitions.createTransition(C.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (a) {
                            if (a.name !== "RedirectOccurredException") throw a
                        }
                    }, "onClick"),
                    style: "wallet-header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "WithdrawBtn"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    style: "margin-top-xs",
                    text: [f(d("jCgKmB4rSU+El6_SNeu7KQ#Value", "Withdraw"))],
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "display-flex flex-direction-column align-items-center",
                    visible: _.getAccountType() === "demo",
                    _idProps: {
                        service: e,
                        name: "ResetBalanceContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(k, {
                    enabled: !s.variables.activeWalletVar.balanceAttr.equals(C.BuiltinFunctions.integerToDecimal(1e4)),
                    isDefault: !1,
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var a = u.clone();
                            return l.resetBalanceAction$Action(l.callContext(a))
                        })
                    }, "onClick"),
                    style: "wallet-header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ResetBalanceBtn"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    extendedProperties: {
                        style: "color: #222;"
                    },
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ArrowsRotateSM2.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    style: "margin-top-xs",
                    text: [f(d("g+rubxwVrUeAXfWwmef2yg#Value", "Reset balance"))],
                    _idProps: {
                        service: e,
                        uuid: "22"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "TransferContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(k, {
                    enabled: !0,
                    extendedProperties: {
                        style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                    },
                    isDefault: !1,
                    onClick: o(function() {
                        try {
                            C.Navigation.navigateTo(C.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), C.Transitions.createTransition(C.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (a) {
                            if (a.name !== "RedirectOccurredException") throw a
                        }
                    }, "onClick"),
                    style: "wallet-header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "TransferBtn"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    extendedProperties: {
                        style: "color: #222;"
                    },
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    style: "margin-top-xs",
                    text: [f(d("hmSm77j8qESt5jkpW3ILUQ#Value", "Transfer"))],
                    _idProps: {
                        service: e,
                        uuid: "26"
                    },
                    _widgetRecordProvider: t
                })), p.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "chevron-icon__desktop",
                    visible: _.getAccountType() === "real",
                    _idProps: {
                        service: e,
                        name: "ChevronContainer"
                    },
                    _widgetRecordProvider: t
                }, p.createElement(R, {
                    image: C.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }))))]
            }))
        }
    };
o(U, "View");
var he = U,
    me = he;
var F = G(K());
var ze = {};

function ge(y, s, l, e) {
    var f, v, d;
    let n = JSON.parse(y.P2PResponse),
        t = y.Currency,
        u = !!((v = (f = n == null ? void 0 : n.p2p_settings) == null ? void 0 : f.supported_currencies) != null && v.includes(t.toLocaleLowerCase())),
        r = ((d = n == null ? void 0 : n.p2p_settings) == null ? void 0 : d.disabled) === 0;
    y.IsP2PEnabled = u && r
}
o(ge, "default");

function be(y, s, l, e) {
    if (window.JSCookies) {
        let n = new Date(new Date().getTime() + 6e4);
        JSCookies.set("authtoken", JSON.stringify(y.Token), {
            domain: ".deriv.com",
            expires: n,
            secure: !0
        })
    }
    setTimeout(() => {
        window.location.href = y.P2PURL
    }, 100)
}
o(be, "default");

function ye(y, s, l, e) {
    window.location.hostname !== "hub.deriv.com" ? y.P2PURL = `${y.DerivAppStaging}/redirect?from=tradershub` : y.P2PURL = `${y.DerivAppProduction}/redirect?from=tradershub`
}
o(ye, "default");
var g = S; {
    let s = class s extends g.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ze);
            var u = this.controller;
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
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return g.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "0ac4d9e3-26c9-44d8-9f16-c6367ebbabb0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new g.DataTypes.VariableHolder,
                            v = new g.DataTypes.VariableHolder,
                            d = new g.DataTypes.VariableHolder,
                            c = new g.DataTypes.VariableHolder,
                            a = new g.DataTypes.VariableHolder;
                        return g.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, n.flush(), A.sendAuthorize$Action(!1, e).then(function(b) {
                                c.value = b
                            }).then(function() {
                                return n.flush(), A.p2PSettings$Action(e).then(function(b) {
                                    d.value = b
                                })
                            }).then(function() {
                                return g.Flow.executeSequence(function() {
                                    if (d.value.isErrorOut) g.FeedbackMessageService.showFeedbackMessage(d.value.codeOut, 3), n.variables.isLoadingVar = !1, n.variables.showP2PBanner2Var = !1;
                                    else return n.flush(), A.getAllAccountsBalance$Action(_.getActiveWalletLoginId(), e).then(function(b) {
                                        f.value = b
                                    }).then(function() {
                                        v.value = A.getBalanceByLoginId$Action(_.getActiveWalletLoginId(), e), a.value = g.Logger.startActiveSpan("ShowP2PBanner", function(b) {
                                            b && (b.setAttribute("code.function", "ShowP2PBanner"), b.setAttribute("outsystems.function.key", "1d152f01-2b8a-425a-abb5-ea1b8f8cdbd2"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(ge, "ShowP2PBanner", "OnReady", {
                                                    Currency: g.DataConversion.JSNodeParamConverter.to(v.value.currencyOut, g.DataTypes.DataTypes.Text),
                                                    P2PResponse: g.DataConversion.JSNodeParamConverter.to(d.value.responseOut, g.DataTypes.DataTypes.Text),
                                                    IsP2PEnabled: g.DataConversion.JSNodeParamConverter.to(!1, g.DataTypes.DataTypes.Boolean)
                                                }, function(T) {
                                                    var $ = new(t.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsP2PBanner.OnReady$showP2PBannerJSResult"));
                                                    return $.isP2PEnabledOut = g.DataConversion.JSNodeParamConverter.from(T.IsP2PEnabled, g.DataTypes.DataTypes.Boolean), $
                                                }, {}, {})
                                            } finally {
                                                b && b.end()
                                            }
                                        }, 1), n.variables.isLoadingVar = !1, n.variables.showP2PBanner2Var = a.value.isP2PEnabledOut, n.variables.currencyVar = v.value.currencyOut
                                    })
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _redirectionToP2P$Action() {
            return this.hasOwnProperty("__redirectionToP2P$Action") || (this.__redirectionToP2P$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return g.Logger.startActiveSpan("RedirectionToP2P", function(r) {
                    r && (r.setAttribute("code.function", "RedirectionToP2P"), r.setAttribute("outsystems.function.key", "10e99d75-fdfd-49ce-8b8f-5d061d08ee5b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RedirectionToP2P"), e = t.callContext(e);
                        var f = new g.DataTypes.VariableHolder,
                            v = new g.DataTypes.VariableHolder,
                            d = new g.DataTypes.VariableHolder;
                        v.value = te.getURL$Action(e), d.value = g.Logger.startActiveSpan("GenerateRedirectURL", function(c) {
                            c && (c.setAttribute("code.function", "GenerateRedirectURL"), c.setAttribute("outsystems.function.key", "aaa82715-0f91-474b-ad8b-99c9db299210"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ye, "GenerateRedirectURL", "RedirectionToP2P", {
                                    DerivAppStaging: g.DataConversion.JSNodeParamConverter.to(v.value.uRLsOut.derivP2pStagingAttr, g.DataTypes.DataTypes.Text),
                                    DerivAppProduction: g.DataConversion.JSNodeParamConverter.to(v.value.uRLsOut.derivP2pProductionAttr, g.DataTypes.DataTypes.Text),
                                    P2PURL: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text)
                                }, function(a) {
                                    var b = new(t.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsP2PBanner.RedirectionToP2P$generateRedirectURLJSResult"));
                                    return b.p2PURLOut = g.DataConversion.JSNodeParamConverter.from(a.P2PURL, g.DataTypes.DataTypes.Text), b
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), _.getAuthToken() === g.BuiltinFunctions.nullTextIdentifier() && (f.value = A.getAccountByLoginId$Action(_.getActiveWalletLoginId(), e), _.setAuthToken(f.value.tokenOut)), g.Logger.startActiveSpan("SyncLocalStorage", function(c) {
                            c && (c.setAttribute("code.function", "SyncLocalStorage"), c.setAttribute("outsystems.function.key", "2e908f0e-e8ea-4530-a0c2-379bafab28cb"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(be, "SyncLocalStorage", "RedirectionToP2P", {
                                    P2PURL: g.DataConversion.JSNodeParamConverter.to(d.value.p2PURLOut, g.DataTypes.DataTypes.Text),
                                    Token: g.DataConversion.JSNodeParamConverter.to(_.getAuthToken(), g.DataTypes.DataTypes.Text)
                                }, function(a) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__redirectionToP2P$Action
        }
        set _redirectionToP2P$Action(e) {
            this.__redirectionToP2P$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0ac4d9e3-26c9-44d8-9f16-c6367ebbabb0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        redirectionToP2P$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("RedirectionToP2P__proxy", function(t) {
                t && (t.setAttribute("code.function", "RedirectionToP2P"), t.setAttribute("outsystems.function.key", "10e99d75-fdfd-49ce-8b8f-5d061d08ee5b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._redirectionToP2P$Action, e)
                } finally {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onReady$Action(e)
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
            return A.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let y = s;
    re = y, re.registerVariableGroupType("tradershub.WalletBlocks.WalletsP2PBanner.OnReady$showP2PBannerJSResult", [{
        name: "IsP2PEnabled",
        attrName: "isP2PEnabledOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), re.registerVariableGroupType("tradershub.WalletBlocks.WalletsP2PBanner.RedirectionToP2P$generateRedirectURLJSResult", [{
        name: "P2PURL",
        attrName: "p2PURLOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var re, je = new g.Controller.ControllerFactory(re, L);
var Ge = S,
    gr = O.PlaceholderContent,
    br = O.IteratorPlaceholderContent,
    M = class M extends N.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsP2PBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsP2PBanner",
                functionKey: "6d85e52b-0f42-4ecb-ab57-0cbd9ba35b3e",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsP2PBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ke
        }
        get controllerFactory() {
            return je
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = M.ifWidget,
                f = M.textWidget,
                v = M.asPrimitiveValue,
                d = M.getTranslation,
                c = this;
            return F.createElement("div", this.getRootNodeProperties(), F.createElement(h, {
                align: 0,
                animate: !0,
                style: "full-width",
                visible: s.getCachedValue(e.getId("UFBXYQp0Q0iD8CFUNVUFug.Visible"), function() {
                    return A.featureFlagValueByName$Action("WalletsP2P", u).isEnabledOut && _.getAccountType() === "real" && s.variables.showP2PBanner2Var
                }, function() {
                    return _.getAccountType()
                }, function() {
                    return s.variables.showP2PBanner2Var
                }),
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, r(s.variables.isLoadingVar, !1, this, function() {
                return [F.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "p2p-wallets-banner__skeleton skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [F.createElement(k, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: o(function() {
                        var a = u.clone();
                        l.redirectionToP2P$Action(l.callContext(a))
                    }, "onClick"),
                    style: "p2p-wallets-banner__wrapper",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, F.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: left;"
                    },
                    style: "p2p-wallets-banner__content",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, F.createElement(R, {
                    image: Ge.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyP2P.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }), F.createElement(V, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "flex-1",
                    value: "Easily exchange " + s.variables.currencyVar + " with local currency using Deriv P2P.",
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), F.createElement(R, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    image: Ge.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                })))]
            })))
        }
    };
o(M, "View");
var _e = M,
    Ae = _e;
var P = G(K());
var ft = {
        "FDKM7yVUqUS96vM+EfYglA#Value": "\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u062D\u0627\u0641\u0638"
    },
    vt = {
        "FDKM7yVUqUS96vM+EfYglA#Value": "Weitere Wallets"
    },
    ht = {
        "FDKM7yVUqUS96vM+EfYglA#Value": "M\xE1s billeteras"
    },
    mt = {
        "FDKM7yVUqUS96vM+EfYglA#Value": "Wi\u0119cej portfeli"
    },
    gt = {
        "FDKM7yVUqUS96vM+EfYglA#Value": "Mais wallets"
    },
    Ke = {
        "ar-001": {
            translations: ft,
            isRTL: !0
        },
        "de-DE": {
            translations: vt,
            isRTL: !1
        },
        "es-ES": {
            translations: ht,
            isRTL: !1
        },
        "pl-PL": {
            translations: mt,
            isRTL: !1
        },
        "pt-PT": {
            translations: gt,
            isRTL: !1
        }
    };

function pe(y, s, l, e) {
    var v, d, c, a;
    let n = ((d = (v = JSON.parse(y.AvailableWallets)) == null ? void 0 : v.available_accounts) == null ? void 0 : d.wallets) || [],
        t = ((a = (c = JSON.parse(y.AllAccountsBalance)) == null ? void 0 : c.balance) == null ? void 0 : a.accounts) || {},
        r = JSON.parse(y.WalletsAccountsList).map(b => {
            var ee, Y, De;
            let T = b.currency,
                $ = b.loginid,
                B = ((ee = t == null ? void 0 : t[$]) == null ? void 0 : ee.balance) || 0,
                Q = (Y = s.FormatMoney(B, T)) == null ? void 0 : Y.FormattedNumber,
                E = (De = s.GetIcon(T)) == null ? void 0 : De.CurrencyIcon;
            return oe(ae({}, b), {
                is_selected: y.ActiveWalletLoginId === $,
                name: `${T} Wallet`,
                formatted_balance: `${Q} ${T}`,
                balance: B,
                is_added: !0,
                is_crypto: b.account_type === "crypto",
                icon: E
            })
        }),
        f = n.map(b => {
            var B;
            let T = b.currency,
                $ = (B = s.GetIcon(T)) == null ? void 0 : B.CurrencyIcon;
            return oe(ae({}, b), {
                name: `${T} Wallet`,
                is_added: !1,
                is_crypto: b.account_type === "crypto",
                icon: $
            })
        });
    y.WalletsAccounts = JSON.stringify([...r, ...f])
}
o(pe, "default");
var i = S; {
    let s = class s extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ke);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _createWalletAccount$Action() {
            return this.hasOwnProperty("__createWalletAccount$Action") || (this.__createWalletAccount$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("CreateWalletAccount", function(r) {
                    return r && (r.setAttribute("code.function", "CreateWalletAccount"), r.setAttribute("outsystems.function.key", "0db47a16-7256-4b84-91cc-0becfb076d06"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("CreateWalletAccount"), e = t.callContext(e);
                        var f = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return n.flush(), A.createNewWallet$Action(n.variables.walletsAccountsListVar.getCurrent(e.iterationContext).account_typeAttr, n.variables.walletsAccountsListVar.getCurrent(e.iterationContext).currencyAttr, e).then(function(d) {
                                f.value = d
                            }).then(function() {
                                return n.flush(), A.enableRealTradingAccount$Action(f.value.responseOut.new_account_walletAttr.currencyAttr, e).then(function(d) {
                                    v.value = d
                                })
                            }).then(function() {
                                return t.updatePageDataEvent$Action(e)
                            }).then(function() {
                                n.variables.createdWalletNameVar = n.variables.walletsAccountsListVar.getCurrent(e.iterationContext).nameAttr, n.variables.showNewWalletModalVar = !0
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__createWalletAccount$Action
        }
        set _createWalletAccount$Action(e) {
            this.__createWalletAccount$Action = e
        }
        get _switchAccount$Action() {
            return this.hasOwnProperty("__switchAccount$Action") || (this.__switchAccount$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("SwitchAccount", function(r) {
                    return r && (r.setAttribute("code.function", "SwitchAccount"), r.setAttribute("outsystems.function.key", "1e267a9c-8be3-440d-9599-b281670636e7"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SwitchAccount"), e = t.callContext(e);
                        var f = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return _.setActiveWalletLoginId(n.variables.walletsAccountsListVar.getCurrent(e.iterationContext).loginidAttr), f.value = A.getTradingAccountsList$Action(e), v.value = i.SystemActions.listFilter(f.value.tradingAccountsListOut, function(d) {
                                return d.currencyAttr === n.variables.walletsAccountsListVar.getCurrent(e.iterationContext).currencyAttr
                            }, e), _.setActiveTradingLoginId(v.value.filteredListOut.getCurrent(e.iterationContext).loginidAttr), t.updatePageDataEvent$Action(e).then(function() {
                                return i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets/recent-transactions", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__switchAccount$Action
        }
        set _switchAccount$Action(e) {
            this.__switchAccount$Action = e
        }
        get _depositAction$Action() {
            return this.hasOwnProperty("__depositAction$Action") || (this.__depositAction$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("DepositAction", function(r) {
                    r && (r.setAttribute("code.function", "DepositAction"), r.setAttribute("outsystems.function.key", "68f8273b-0f12-461a-b745-1be37c4c1a37"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("DepositAction"), e = t.callContext(e), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__depositAction$Action
        }
        set _depositAction$Action(e) {
            this.__depositAction$Action = e
        }
        get _fetchingData$Action() {
            return this.hasOwnProperty("__fetchingData$Action") || (this.__fetchingData$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("FetchingData", function(r) {
                    return r && (r.setAttribute("code.function", "FetchingData"), r.setAttribute("outsystems.function.key", "788c5e88-c506-4261-bdd8-6ea9aa45c2f8"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("FetchingData"), e = t.callContext(e);
                        var f = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder,
                            d = new i.DataTypes.VariableHolder,
                            c = new i.DataTypes.VariableHolder,
                            a = new i.DataTypes.VariableHolder,
                            b = new i.DataTypes.VariableHolder,
                            T = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            $ = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            B = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            Q = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(le)));
                        return i.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, n.flush(), A.getAvailableWallets$Action(e).then(function(E) {
                                d.value = E
                            }).then(function() {
                                return n.flush(), A.getAllAccountsBalance$Action(_.getActiveWalletLoginId(), e).then(function(E) {
                                    c.value = E
                                })
                            }).then(function() {
                                a.value = A.getWalletsAccountsList$Action(e), $.value.jSONOut = i.JSONUtils.serializeToJSON(a.value.walletsAccountsListOut, !1, !1), b.value = i.Logger.startActiveSpan("DataModification", function(E) {
                                    E && (E.setAttribute("code.function", "DataModification"), E.setAttribute("outsystems.function.key", "0531bfbe-e327-47f4-b034-b144d360667f"), E.setAttribute("outsystems.function.owner.name", "tradershub"), E.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), E.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(pe, "DataModification", "FetchingData", {
                                            ActiveWalletLoginId: i.DataConversion.JSNodeParamConverter.to(_.getActiveWalletLoginId(), i.DataTypes.DataTypes.Text),
                                            WalletsAccountsList: i.DataConversion.JSNodeParamConverter.to($.value.jSONOut, i.DataTypes.DataTypes.Text),
                                            AllAccountsBalance: i.DataConversion.JSNodeParamConverter.to(c.value.responseOut, i.DataTypes.DataTypes.Text),
                                            AvailableWallets: i.DataConversion.JSNodeParamConverter.to(d.value.responseOut, i.DataTypes.DataTypes.Text),
                                            WalletsAccounts: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text)
                                        }, function(ee) {
                                            var Y = new(t.constructor.getVariableGroupType("tradershub.WalletBlocks.MoreWalletsSection.FetchingData$dataModificationJSResult"));
                                            return Y.walletsAccountsOut = i.DataConversion.JSNodeParamConverter.from(ee.WalletsAccounts, i.DataTypes.DataTypes.Text), Y
                                        }, {
                                            FormatMoney: te.clientActionProxies.formatMoney$Action,
                                            GetIcon: A.clientActionProxies.getIcon$Action
                                        }, {})
                                    } finally {
                                        E && E.end()
                                    }
                                }, 1), Q.value.dataOut = i.JSONUtils.deserializeFromJSON(b.value.walletsAccountsOut, le, !1), f.value = i.SystemActions.listFilter(Q.value.dataOut, function(E) {
                                    return E.is_selectedAttr === !1
                                }, e), B.value.jSONOut = i.JSONUtils.serializeToJSON(f.value.filteredListOut, !1, !1), v.value = i.SystemActions.listFilter(Q.value.dataOut, function(E) {
                                    return E.is_selectedAttr
                                }, e), T.value.jSONOut = i.JSONUtils.serializeToJSON(v.value.filteredListOut.getCurrent(e.iterationContext), !1, !1), _.setWalletList(b.value.walletsAccountsOut), n.variables.walletsAccountsListVar = f.value.filteredListOut, n.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__fetchingData$Action
        }
        set _fetchingData$Action(e) {
            this.__fetchingData$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "78dc4c99-0b01-44db-b381-52afcdb8783e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder,
                            d = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return d.value = A.performanceNow$Action(!0, "Add-more-accounts", e), n.flush(), A.sendAuthorize$Action(!1, e).then(function(c) {
                                f.value = c
                            }).then(function() {
                                return t._fetchingData$Action(e)
                            }).then(function() {
                                v.value = A.performanceNow$Action(!1, "Add-more-accounts", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "caa6dbd1-27ab-4742-bf0e-02bd2442e208"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return t._fetchingData$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        createWalletAccount$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("CreateWalletAccount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CreateWalletAccount"), t.setAttribute("outsystems.function.key", "0db47a16-7256-4b84-91cc-0becfb076d06"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._createWalletAccount$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        switchAccount$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("SwitchAccount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SwitchAccount"), t.setAttribute("outsystems.function.key", "1e267a9c-8be3-440d-9599-b281670636e7"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._switchAccount$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        depositAction$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("DepositAction__proxy", function(t) {
                t && (t.setAttribute("code.function", "DepositAction"), t.setAttribute("outsystems.function.key", "68f8273b-0f12-461a-b745-1be37c4c1a37"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._depositAction$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        fetchingData$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("FetchingData__proxy", function(t) {
                return t && (t.setAttribute("code.function", "FetchingData"), t.setAttribute("outsystems.function.key", "788c5e88-c506-4261-bdd8-6ea9aa45c2f8"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._fetchingData$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "78dc4c99-0b01-44db-b381-52afcdb8783e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "caa6dbd1-27ab-4742-bf0e-02bd2442e208"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get updatePageDataEvent$Action() {
            return this.hasOwnProperty("_updatePageDataEvent$Action") || (this._updatePageDataEvent$Action = function() {
                return Promise.resolve()
            }), this._updatePageDataEvent$Action
        }
        set updatePageDataEvent$Action(e) {
            this._updatePageDataEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onReady$Action(e)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return A.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let y = s;
    Pe = y, Pe.registerVariableGroupType("tradershub.WalletBlocks.MoreWalletsSection.FetchingData$dataModificationJSResult", [{
        name: "WalletsAccounts",
        attrName: "walletsAccountsOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var Pe, Qe = new i.Controller.ControllerFactory(Pe, L);
var W = G(K());
var Ye = {};
var ne = S; {
    let s = class s extends ne.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ye);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return ne.Logger.startActiveSpan("OnClose", function(r) {
                    r && (r.setAttribute("code.function", "OnClose"), r.setAttribute("outsystems.function.key", "c3a5b38f-fb48-43de-a945-9e4877175cf9"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClose"), e = t.callContext(e), n.variables.showPopupIn = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onClose$Action(e) {
            var n = this.controller;
            return ne.Logger.startActiveSpan("OnClose__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "c3a5b38f-fb48-43de-a945-9e4877175cf9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClose$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get depositEvent$Action() {
            return this.hasOwnProperty("_depositEvent$Action") || (this._depositEvent$Action = function() {
                return Promise.resolve()
            }), this._depositEvent$Action
        }
        set depositEvent$Action(e) {
            this._depositEvent$Action = e
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
            return A.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let y = s;
    qe = y
}
var qe, Xe = new ne.Controller.ControllerFactory(qe, L);
var ie = S,
    Jr = O.PlaceholderContent,
    zr = O.IteratorPlaceholderContent,
    J = class J extends N.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.NewWalletPopup"
        }
        static getAttributes() {
            return {
                codeFunction: "NewWalletPopup",
                functionKey: "abcefda9-9aa5-46cf-8691-25a34e1f92ba",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.NewWalletPopup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Fe
        }
        get controllerFactory() {
            return Xe
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = J.ifWidget,
                f = J.textWidget,
                v = J.asPrimitiveValue,
                d = J.getTranslation,
                c = this;
            return W.createElement("div", this.getRootNodeProperties(), W.createElement($e, {
                extendedProperties: {
                    style: "margin-left: 0px; margin-right: 0px;"
                },
                showPopup: s.variables.showPopupIn,
                style: "popup-dialog wallet-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: ie.Model.calculateDataFetchStatus(s.variables._showPopupInDataFetchStatus)
            }, W.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var a = u.clone();
                        l.onClose$Action(l.callContext(a))
                    }, "onClick")
                },
                style: "header-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CloseModal"
                },
                _widgetRecordProvider: t
            }, W.createElement(D, {
                extendedProperties: {
                    style: "color: #101213; font-size: 20px; font-weight: bold;"
                },
                style: "header-title",
                text: ["New wallet"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), W.createElement(R, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: ie.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), W.createElement(h, {
                align: 0,
                animate: !1,
                style: "content-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, W.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }, W.createElement(R, {
                image: ie.Navigation.VersionedURL.getVersionedUrl("img/tradershub.visual.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), W.createElement(V, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: "Your " + s.variables.currencyIn + " is ready",
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ie.Model.calculateDataFetchStatus(s.variables._currencyInDataFetchStatus)
            }), W.createElement(D, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; margin-top: 8px;"
                },
                text: ["Make a deposit into your new wallet."],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))), W.createElement(h, {
                align: 0,
                animate: !1,
                style: "button-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButtonsContainer"
                },
                _widgetRecordProvider: t
            }, W.createElement(k, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: o(function() {
                    var a = u.clone();
                    l.depositEvent$Action(l.callContext(a))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, "Deposit"), W.createElement(k, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var a = u.clone();
                    l.onClose$Action(l.callContext(a))
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, "Maybe later"))))
        }
    };
o(J, "View");
var we = J,
    Se = we;
var Ze = S,
    Re = O.PlaceholderContent,
    yt = O.IteratorPlaceholderContent,
    z = class z extends N.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.MoreWalletsSection"
        }
        static getAttributes() {
            return {
                codeFunction: "MoreWalletsSection",
                functionKey: "0ec95796-de9a-4ad6-95c5-e553c90238d3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.MoreWalletsSection.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Se]
        }
        get modelFactory() {
            return He
        }
        get controllerFactory() {
            return Qe
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = z.ifWidget,
                f = z.textWidget,
                v = z.asPrimitiveValue,
                d = z.getTranslation,
                c = this;
            return P.createElement("div", this.getRootNodeProperties(), P.createElement(h, {
                align: 0,
                animate: !0,
                visible: _.getAccountType() === "real",
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, P.createElement(D, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [f(d("FDKM7yVUqUS96vM+EfYglA#Value", "More wallets"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), r(s.variables.isLoadingVar, !0, this, function() {
                return [P.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "more-wallets__container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }), P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }), P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }), P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }), P.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "skeleton more-wallets__card-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return [P.createElement(Ve, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: s.variables.walletsAccountsListVar,
                    style: "more-wallets__container",
                    tag: "div",
                    _idProps: {
                        service: e,
                        name: "WalletAccountsList"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new yt(function(a, b) {
                            return [P.createElement(xe, {
                                extendedProperties: {
                                    style: "border-color: #F1F3F5; border-radius: 8px; border-style: solid; border-width: 1px; font-size: 12px; font-weight: normal;"
                                },
                                style: '"list-item"',
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: a,
                                    name: "ListItem"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: Re.Empty,
                                    content: new Re(function() {
                                        return [r(s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).is_addedAttr, !0, this, function() {
                                            return [P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                extendedEvents: {
                                                    onClick: o(function() {
                                                        return Promise.resolve().then(function() {
                                                            var T = b.clone();
                                                            return l.switchAccount$Action(l.callContext(T))
                                                        })
                                                    }, "onClick")
                                                },
                                                style: "more-wallets__card background-neutral-1",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "AddedAccount"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "TopRow"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(R, {
                                                extendedProperties: {
                                                    style: "height: 24px;"
                                                },
                                                gridProperties: {
                                                    width: "24px"
                                                },
                                                type: 1,
                                                url: s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).iconAttr,
                                                _idProps: {
                                                    service: a,
                                                    name: "AccountIcon"
                                                },
                                                _widgetRecordProvider: t
                                            }), P.createElement(R, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                image: Ze.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    name: "Chevron"
                                                },
                                                _widgetRecordProvider: t
                                            })), P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "BottomRow"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(V, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                value: s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).nameAttr,
                                                _idProps: {
                                                    service: a,
                                                    name: "AccountName"
                                                },
                                                _widgetRecordProvider: t
                                            }), P.createElement(V, {
                                                extendedProperties: {
                                                    style: "font-size: 12px; font-weight: bold; white: ; white-space: nowrap;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                value: s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).formattedBalanceAttr,
                                                _idProps: {
                                                    service: a,
                                                    name: "AccountBalance"
                                                },
                                                _widgetRecordProvider: t
                                            })))]
                                        }, function() {
                                            return [P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                extendedEvents: {
                                                    onClick: o(function() {
                                                        return Promise.resolve().then(function() {
                                                            var T = b.clone();
                                                            return l.createWalletAccount$Action(l.callContext(T))
                                                        })
                                                    }, "onClick")
                                                },
                                                style: "more-wallets__card",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "NewAccount"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "TopRowContainer"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(R, {
                                                extendedProperties: {
                                                    style: "height: 24px;"
                                                },
                                                gridProperties: {
                                                    width: "24px"
                                                },
                                                type: 1,
                                                url: s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).iconAttr,
                                                _idProps: {
                                                    service: a,
                                                    name: "CurrencyIcon"
                                                },
                                                _widgetRecordProvider: t
                                            }), P.createElement(R, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter",
                                                    width: "32px"
                                                },
                                                image: Ze.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    name: "CirclePlus"
                                                },
                                                _widgetRecordProvider: t
                                            })), P.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "BottomRowContainer"
                                                },
                                                _widgetRecordProvider: t
                                            }, P.createElement(V, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                value: s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).nameAttr,
                                                _idProps: {
                                                    service: a,
                                                    name: "AccountName2"
                                                },
                                                _widgetRecordProvider: t
                                            })))]
                                        })]
                                    }),
                                    rightActions: Re.Empty
                                },
                                _dependencies: [v(s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).formattedBalanceAttr), v(s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).nameAttr), v(s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).iconAttr), v(s.variables.walletsAccountsListVar.getCurrent(b.iterationContext).is_addedAttr)]
                            })]
                        }, u, e, "1")
                    },
                    _dependencies: []
                })]
            })), P.createElement(Se, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShowPopup: s.variables.showNewWalletModalVar,
                    Currency: s.variables.createdWalletNameVar
                },
                events: {
                    _handleError: o(function(a) {
                        l.handleError(a)
                    }, "_handleError"),
                    depositEvent$Action: o(function() {
                        var a = u.clone();
                        l.depositAction$Action(l.callContext(a))
                    }, "depositEvent$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "24",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))
        }
    };
o(z, "View");
var Ce = z,
    Ee = Ce;
var H = G(K());
var _t = {
        "MSX_Gbcl0EC+oEjEUsMlFA#Value": "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629"
    },
    At = {
        "MSX_Gbcl0EC+oEjEUsMlFA#Value": "K\xFCrzliche Transaktionen"
    },
    pt = {
        "MSX_Gbcl0EC+oEjEUsMlFA#Value": "Transacciones recientes"
    },
    Pt = {
        "MSX_Gbcl0EC+oEjEUsMlFA#Value": "Ostatnie transakcje"
    },
    wt = {
        "MSX_Gbcl0EC+oEjEUsMlFA#Value": "Transa\xE7\xF5es recentes"
    },
    et = {
        "ar-001": {
            translations: _t,
            isRTL: !0
        },
        "de-DE": {
            translations: At,
            isRTL: !1
        },
        "es-ES": {
            translations: pt,
            isRTL: !1
        },
        "pl-PL": {
            translations: Pt,
            isRTL: !1
        },
        "pt-PT": {
            translations: wt,
            isRTL: !1
        }
    };
var w = S; {
    let s = class s extends w.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, et);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _fetchingData$Action() {
            return this.hasOwnProperty("__fetchingData$Action") || (this.__fetchingData$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return w.Logger.startActiveSpan("FetchingData", function(r) {
                    return r && (r.setAttribute("code.function", "FetchingData"), r.setAttribute("outsystems.function.key", "22242237-f8a1-4bfe-8e7f-eb7aa6cdb29e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        t.ensureControllerAlive("FetchingData"), e = t.callContext(e);
                        var f = new w.DataTypes.VariableHolder,
                            v = new w.DataTypes.VariableHolder(new(w.Controller.BaseController.getJSONDeserializeOutputType(se)));
                        return w.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, n.flush(), A.getWalletStatement$Action(e).then(function(d) {
                                f.value = d
                            }).then(function() {
                                v.value.dataOut = w.JSONUtils.deserializeFromJSON(f.value.walletTransactionsOut, se, !1), n.variables.transactionsVar = v.value.dataOut, n.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__fetchingData$Action
        }
        set _fetchingData$Action(e) {
            this.__fetchingData$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return w.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "2c0b293c-508a-46ba-8c96-095f7bfbdb75"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new w.DataTypes.VariableHolder,
                            v = new w.DataTypes.VariableHolder,
                            d = new w.DataTypes.VariableHolder;
                        return w.Flow.executeAsyncFlow(function() {
                            return v.value = A.performanceNow$Action(!0, "Recent-wallets", e), n.flush(), A.sendAuthorize$Action(!1, e).then(function(c) {
                                f.value = c
                            }).then(function() {
                                return t._fetchingData$Action(e)
                            }).then(function() {
                                d.value = A.performanceNow$Action(!1, "Recent-wallets", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    u = this.idService;
                return w.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "5eea8f25-2c45-4c19-b3a2-0cac8b5f9a87"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
                            return t._fetchingData$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        fetchingData$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("FetchingData__proxy", function(t) {
                return t && (t.setAttribute("code.function", "FetchingData"), t.setAttribute("outsystems.function.key", "22242237-f8a1-4bfe-8e7f-eb7aa6cdb29e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._fetchingData$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "2c0b293c-508a-46ba-8c96-095f7bfbdb75"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "5eea8f25-2c45-4c19-b3a2-0cac8b5f9a87"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onReady$Action(e)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    u = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return A.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let y = s;
    tt = y
}
var tt, rt = new w.Controller.ControllerFactory(tt, L);
var yn = O.PlaceholderContent,
    _n = O.IteratorPlaceholderContent,
    j = class j extends N.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.RecentWalletTransactionsSection"
        }
        static getAttributes() {
            return {
                codeFunction: "RecentWalletTransactionsSection",
                functionKey: "d4a77248-ae9c-4cc9-8199-a3bb2b3bfa4f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.RecentWalletTransactionsSection.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [ue]
        }
        get modelFactory() {
            return Ie
        }
        get controllerFactory() {
            return rt
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = j.ifWidget,
                f = j.textWidget,
                v = j.asPrimitiveValue,
                d = j.getTranslation,
                c = this;
            return H.createElement("div", this.getRootNodeProperties(), H.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, H.createElement(D, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                style: "",
                text: [f(d("MSX_Gbcl0EC+oEjEUsMlFA#Value", "Recent transactions"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            })), H.createElement(h, {
                align: 0,
                animate: !1,
                style: "margin-top-base",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransactionsWrapper"
                },
                _widgetRecordProvider: t
            }, r(s.variables.isLoadingVar, !1, this, function() {
                return [H.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    style: "wallets-recent-transactions-skeleton skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [r(s.variables.transactionsVar.isEmpty, !1, this, function() {
                    return [H.createElement(h, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "text-align: center;"
                        },
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: t
                    }, H.createElement(D, {
                        style: "text-neutral-7-darker",
                        text: ["No transactions made."],
                        _idProps: {
                            service: e,
                            uuid: "5"
                        },
                        _widgetRecordProvider: t
                    }))]
                }, function() {
                    return [H.createElement(ue, {
                        getOwnerSpan: o(function() {
                            return c.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return c.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            TransactionsList: s.variables.transactionsVar
                        },
                        events: {
                            _handleError: o(function(a) {
                                l.handleError(a)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: e,
                            uuid: "6",
                            alias: "1"
                        },
                        _widgetRecordProvider: t,
                        _dependencies: []
                    })]
                })]
            })))
        }
    };
o(j, "View");
var Oe = j,
    Te = Oe;
var nt = S,
    it = O.PlaceholderContent,
    Vn = O.IteratorPlaceholderContent,
    I = class I extends N.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.Wallets"
        }
        static getAttributes() {
            return {
                codeFunction: "Wallets",
                functionKey: "1089ee43-f5d0-45b1-99c6-5fafb2195171",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.Wallets.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [ce, de, me, Ae, Ee, Te]
        }
        get modelFactory() {
            return Be
        }
        get controllerFactory() {
            return Ue
        }
        get title() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = l.callContext(),
                u = I.asPrimitiveValue,
                r = I.getTranslation,
                f = this;
            return nt.Injector.resolve(nt.ServiceNames.TranslationsService).getMessage("Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1", "Wallets")
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                u = l.callContext(),
                r = I.ifWidget,
                f = I.textWidget,
                v = I.asPrimitiveValue,
                d = I.getTranslation,
                c = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(ce, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(a) {
                        l.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new it(function() {
                        return [x.createElement(de, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "My Wallets"
                            },
                            events: {
                                _handleError: o(function(a) {
                                    l.handleError(a)
                                }, "_handleError"),
                                onDemoClick$Action: o(function() {
                                    var a = u.clone();
                                    l.syncData$Action(l.callContext(a))
                                }, "onDemoClick$Action"),
                                onRealClick$Action: o(function() {
                                    var a = u.clone();
                                    l.syncData$Action(l.callContext(a))
                                }, "onRealClick$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                rightSectionPlaceholder: it.Empty
                            },
                            _dependencies: []
                        }), x.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: s.getCachedValue(e.getId("ContentContainer.Style"), function() {
                                return _.getAccountType() === "demo" ? "demo-wallet-container" : "real-wallet-container"
                            }, function() {
                                return _.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: t
                        }, x.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: s.getCachedValue(e.getId("LeftContent.Style"), function() {
                                return _.getAccountType() === "demo" ? "demo-wallet-left-side" : "real-wallet-left-side"
                            }, function() {
                                return _.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftContent"
                            },
                            _widgetRecordProvider: t
                        }, x.createElement(me, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SyncData: s.variables.activeLoginIdVar
                            },
                            events: {
                                _handleError: o(function(a) {
                                    l.handleError(a)
                                }, "_handleError"),
                                updatePageDataEvent$Action: o(function() {
                                    var a = u.clone();
                                    l.syncData$Action(l.callContext(a))
                                }, "updatePageDataEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), x.createElement(Ae, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(a) {
                                    l.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), x.createElement(Ee, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SyncData: s.variables.activeLoginIdVar
                            },
                            events: {
                                _handleError: o(function(a) {
                                    l.handleError(a)
                                }, "_handleError"),
                                updatePageDataEvent$Action: o(function() {
                                    var a = u.clone();
                                    l.syncData$Action(l.callContext(a))
                                }, "updatePageDataEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), x.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: s.getCachedValue(e.getId("JkLNcyj4XEm5YWhRjdG6Ww.Style"), function() {
                                return _.getAccountType() === "real" ? "real-wallet-right-side" : ""
                            }, function() {
                                return _.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }, x.createElement(Te, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SyncData: s.variables.activeLoginIdVar
                            },
                            events: {
                                _handleError: o(function(a) {
                                    l.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "8",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: [v(s.variables.activeLoginIdVar), v(_.getAccountType())]
            }))
        }
    };
o(I, "View");
var We = I,
    xn = We;
export {
    xn as
    default
};