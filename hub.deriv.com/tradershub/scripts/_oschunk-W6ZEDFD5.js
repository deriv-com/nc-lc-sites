import {
    a as H
} from "./_oschunk-7EJDEKFB.js";
import {
    a as m
} from "./_oschunk-RAZ4EXDC.js";
import {
    h as u,
    j as C,
    r as A
} from "./_oschunk-E7JQAU4J.js";
import {
    a as O
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as N,
    g as w,
    i as R
} from "./_oschunk-T77XORCW.js";
import {
    a as s,
    c as S,
    d as f
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as E
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as D
} from "./_oschunk-DVBKI63I.js";
var i = D(N());
var W = {};
var d = E; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, W);
            var y = this.controller;
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
                    y = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var p = new d.DataTypes.VariableHolder,
                            c = new d.DataTypes.VariableHolder,
                            b = new d.DataTypes.VariableHolder;
                        n.variables.isLoadingVar = !0, c.value = f.getBalanceByLoginId$Action(s.getActiveWalletLoginId(), e), p.value = f.getIcon$Action(c.value.currencyOut, e), b.value = S.formatMoney$Action(c.value.balanceOut, c.value.currencyOut, "en-US", "", e), n.variables.isLoadingVar = !1, n.variables.currencyVar = c.value.currencyOut, n.variables.iconVar = p.value.currencyIconOut, n.variables.balanceVar = b.value.formattedNumberOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
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
                    y = this.idService;
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
            return f.defaultTimeout
        }
    };
    o(r, "ControllerInner");
    let g = r;
    V = g
}
var V, x = new d.Controller.ControllerFactory(V, O);
var ee = R.PlaceholderContent,
    te = R.IteratorPlaceholderContent,
    l = class l extends w.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsCashierHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsCashierHeader",
                functionKey: "db31b58d-787e-4a06-ae6d-6087868a7467",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsCashierHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [m]
        }
        get modelFactory() {
            return H
        }
        get controllerFactory() {
            return x
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                h = this.controller,
                e = this.idService,
                n = h.validationService,
                t = this.widgetsRecordProvider,
                y = h.callContext(),
                a = l.ifWidget,
                p = l.textWidget,
                c = l.asPrimitiveValue,
                b = l.getTranslation,
                v = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px; padding-bottom: 12px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 12px;"
                },
                style: "display-flex align-items-center justify-content-space-between gap-s full-width background-neutral-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContainer"
                },
                _widgetRecordProvider: t
            }, a(r.variables.isLoadingVar, !1, this, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "currency-icon-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [i.createElement(A, {
                    gridProperties: {
                        width: "32px"
                    },
                    type: 1,
                    url: r.getCachedValue(e.getId("WalletCashierHeaderIcon.Url"), function() {
                        return s.getAccountType() === "demo" ? "/tradershub/img/tradershub.CurrencyDemo2.svg" : r.variables.iconVar
                    }, function() {
                        return s.getAccountType()
                    }, function() {
                        return r.variables.iconVar
                    }),
                    _idProps: {
                        service: e,
                        name: "WalletCashierHeaderIcon"
                    },
                    _widgetRecordProvider: t
                })]
            }), a(r.variables.isLoadingVar, !1, this, function() {
                return [i.createElement(m, {
                    getOwnerSpan: o(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(_) {
                            h.handleError(_)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(C, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    style: "font-bold font-size-s",
                    value: r.getCachedValue(e.getId("UnrUMsdEtUu0DyNVRhND4Q.Value"), function() {
                        return s.getAccountType() === "demo" ? "Demo Wallet" : r.variables.currencyVar + " Wallet"
                    }, function() {
                        return s.getAccountType()
                    }, function() {
                        return r.variables.currencyVar
                    }),
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-right",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, a(r.variables.isLoadingVar, !1, this, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-flex-end",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(m, {
                    getOwnerSpan: o(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(_) {
                            h.handleError(_)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: e,
                        uuid: "7",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            }, function() {
                return [i.createElement(C, {
                    style: "font-size-s font-bold",
                    value: r.variables.balanceVar + " " + r.variables.currencyVar,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })]
            }))))
        }
    };
o(l, "View");
var P = l,
    re = P;
export {
    re as a
};