import {
    a as M
} from "./_oschunk-V3NL2V45.js";
import {
    a as S
} from "./_oschunk-XFSPMJPV.js";
import {
    a as P
} from "./_oschunk-CJZXGA6I.js";
import {
    b as $,
    h as m,
    j as p,
    k as F,
    l as z,
    r as B,
    y as J
} from "./_oschunk-HUOHOHZB.js";
import {
    a as D
} from "./_oschunk-Y45M2O2K.js";
import {
    a as K,
    g as H,
    i as L
} from "./_oschunk-6LASTRK7.js";
import {
    a as N,
    c as w,
    d as k
} from "./_oschunk-27GDEXUT.js";
import {
    a as _,
    dc as R,
    oc as E
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as T
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d,
    g as j
} from "./_oschunk-DVBKI63I.js";
var l = j(K());
var U = {};

function I(h, t, v, r) {
    let o = JSON.parse(h.TransactionsList);
    h.RecentTransactionsList = JSON.stringify(o.slice(0, 5))
}
d(I, "default");

function V(h, t, v, r) {
    navigator.clipboard.writeText(h.TextToCopy).catch(o => {
        console.error("Failed to copy text: ", o)
    })
}
d(V, "default");
var a = T; {
    let t = class t extends a.Controller.BaseViewController {
        constructor(r, o, e) {
            super(r, o, e, U);
            var b = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _listItem1OnClick$Action() {
            return this.hasOwnProperty("__listItem1OnClick$Action") || (this.__listItem1OnClick$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    b = this.idService;
                return a.Logger.startActiveSpan("ListItem1OnClick", function(s) {
                    s && (s.setAttribute("code.function", "ListItem1OnClick"), s.setAttribute("outsystems.function.key", "30063580-7acc-4337-8def-74612803a67c"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ListItem1OnClick"), r = e.callContext(r)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__listItem1OnClick$Action
        }
        set _listItem1OnClick$Action(r) {
            this.__listItem1OnClick$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    b = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(s) {
                    s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), r = e.callContext(r);
                        var f = new a.DataTypes.VariableHolder,
                            c = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType),
                            O = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(R))),
                            g = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(E)));
                        c.value.jSONOut = a.JSONUtils.serializeToJSON(o.variables.transactionsListIn, !1, !1), g.value.dataOut = a.JSONUtils.deserializeFromJSON(N.getActiveWallet(), E, !1), o.variables.activeWalletVar = g.value.dataOut, f.value = a.Logger.startActiveSpan("ModifiedTransactionsList", function(n) {
                            n && (n.setAttribute("code.function", "ModifiedTransactionsList"), n.setAttribute("outsystems.function.key", "e2438b4a-16cb-4c52-8ed8-1e550f5c9fe6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(I, "ModifiedTransactionsList", "OnReady", {
                                    TransactionsList: a.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, a.DataTypes.DataTypes.Text),
                                    RecentTransactionsList: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                }, function(i) {
                                    var y = new(e.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult"));
                                    return y.recentTransactionsListOut = a.DataConversion.JSNodeParamConverter.from(i.RecentTransactionsList, a.DataTypes.DataTypes.Text), y
                                }, {}, {})
                            } finally {
                                n && n.end()
                            }
                        }, 1), O.value.dataOut = a.JSONUtils.deserializeFromJSON(f.value.recentTransactionsListOut, R, !1), o.variables.recentTransactionsListVar = O.value.dataOut
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _tooltipInitialized$Action() {
            return this.hasOwnProperty("__tooltipInitialized$Action") || (this.__tooltipInitialized$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    b = this.idService;
                return a.Logger.startActiveSpan("TooltipInitialized", function(s) {
                    s && (s.setAttribute("code.function", "TooltipInitialized"), s.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("TooltipInitialized"), r = e.callContext(r), a.Logger.startActiveSpan("ClipboardAction", function(f) {
                            f && (f.setAttribute("code.function", "ClipboardAction"), f.setAttribute("outsystems.function.key", "67e6fc2e-7f48-48a9-8ecd-e438a59b62d8"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(V, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: a.DataConversion.JSNodeParamConverter.to(a.BuiltinFunctions.longIntegerToText(o.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), a.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__tooltipInitialized$Action
        }
        set _tooltipInitialized$Action(r) {
            this.__tooltipInitialized$Action = r
        }
        listItem1OnClick$Action(r) {
            var o = this.controller;
            return a.Logger.startActiveSpan("ListItem1OnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ListItem1OnClick"), e.setAttribute("outsystems.function.key", "30063580-7acc-4337-8def-74612803a67c"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._listItem1OnClick$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(r) {
            var o = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        tooltipInitialized$Action(r) {
            var o = this.controller;
            return a.Logger.startActiveSpan("TooltipInitialized__proxy", function(e) {
                e && (e.setAttribute("code.function", "TooltipInitialized"), e.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._tooltipInitialized$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var o = this.controller,
                    e = this.model,
                    b = this.idService;
                return o.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(r) {
                var o = this.controller,
                    e = this.model,
                    b = this.idService;
                return o.onReady$Action(r)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return controller.handleError(r)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return k.defaultTimeout
        }
    };
    d(t, "ControllerInner");
    let h = t;
    W = h, W.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult", [{
        name: "RecentTransactionsList",
        attrName: "recentTransactionsListOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var W, Q = new a.Controller.ControllerFactory(W, D);
var u = T,
    C = L.PlaceholderContent,
    X = L.IteratorPlaceholderContent,
    A = class A extends H.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsTransaction"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransaction",
                functionKey: "a35a5f01-4f55-4d47-967b-871f11552948",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransaction.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, S]
        }
        get modelFactory() {
            return M
        }
        get controllerFactory() {
            return Q
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                v = this.controller,
                r = this.idService,
                o = v.validationService,
                e = this.widgetsRecordProvider,
                b = v.callContext(),
                s = A.ifWidget,
                f = A.textWidget,
                c = A.asPrimitiveValue,
                O = A.getTranslation,
                g = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, l.createElement(F, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: t.variables.recentTransactionsListVar,
                style: t.getCachedValue(r.getId("5_O63ezXdkmP0UM+mKmzsg.Style"), function() {
                    return "list list-group " + (t.variables.transactionsListIn.length > 6 ? "wallet-transaction-container-no-border" : "wallet-transaction-container-border")
                }, function() {
                    return t.variables.transactionsListIn.length
                }),
                tag: "div",
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: e,
                style_dataFetchStatus: u.Model.calculateDataFetchStatus(t.variables._transactionsListInDataFetchStatus),
                placeholders: {
                    content: new X(function(n, i) {
                        return [l.createElement(m, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: [c(t.variables._transactionsListInDataFetchStatus), c(t.variables.transactionsListIn.getCurrent(i.iterationContext).amountAttr), c(t.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr), c(t.variables.activeWalletVar.currencyAttr), c(t.variables.activeWalletVar.nameAttr), c(t.variables.activeWalletVar.loginidAttr), c(t.variables.recentTransactionsListVar.length), c(t.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext)), c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr), c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr), c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr), c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr)]
                        }, l.createElement(z, {
                            onClick: d(function() {
                                var y = i.clone();
                                v.listItem1OnClick$Action(v.callContext(y))
                            }, "onClick"),
                            style: "wallet-transaction-item",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: n,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                leftActions: C.Empty,
                                content: new C(function() {
                                    return [l.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: e
                                    }, l.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: e
                                    }, l.createElement(p, {
                                        style: "wallet-transaction-action-type",
                                        value: t.getCachedValue(n.getId("TMbZVntWukWA3_i9mwl6HA.Value"), function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "transfer" ? t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr === t.variables.activeWalletVar.loginidAttr ? "Transfer to" : "Transfer from" : t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr
                                        }, function() {
                                            return t.variables.activeWalletVar.loginidAttr
                                        }),
                                        _idProps: {
                                            service: n,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: e
                                    }), s(!t.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr.equals(u.BuiltinFunctions.integerToLongInteger(u.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                        return [l.createElement(P, {
                                            getOwnerSpan: d(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: d(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Trigger: _.trigger.onClick,
                                                Position: _.position.topLeft
                                            },
                                            events: {
                                                _handleError: d(function(y) {
                                                    v.handleError(y)
                                                }, "_handleError"),
                                                onToggle$Action: d(function(y, Z) {
                                                    var G = i.clone();
                                                    v.tooltipInitialized$Action(v.callContext(G))
                                                }, "onToggle$Action")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: n,
                                                uuid: "7",
                                                alias: "1"
                                            },
                                            _widgetRecordProvider: e,
                                            placeholders: {
                                                content: new C(function() {
                                                    return [l.createElement(p, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        style: "wallet-transaction-action-type",
                                                        value: "Ref.ID:" + u.BuiltinFunctions.longIntegerToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr),
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: e
                                                    })]
                                                }),
                                                tooltip: new C(function() {
                                                    return ["Copied"]
                                                })
                                            },
                                            _dependencies: [c(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr)]
                                        })]
                                    }, function() {
                                        return []
                                    })), l.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: e
                                    }, l.createElement(p, {
                                        value: t.getCachedValue(n.getId("klKvUVNdiU6cALRzFBS10Q.Value"), function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "transfer" ? (t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr === t.variables.activeWalletVar.loginidAttr, t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr) : t.variables.activeWalletVar.nameAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr
                                        }, function() {
                                            return t.variables.activeWalletVar.loginidAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr
                                        }, function() {
                                            return t.variables.activeWalletVar.nameAttr
                                        }),
                                        _idProps: {
                                            service: n,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: e
                                    }), l.createElement(p, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(n.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Style"), function() {
                                            return t.variables.transactionsListIn.getCurrent(i.iterationContext).amountAttr.gt(u.BuiltinFunctions.integerToDecimal(0)) ? "font-bold text-green" : "font-bold text-red"
                                        }, function() {
                                            return t.variables.transactionsListIn.getCurrent(i.iterationContext).amountAttr
                                        }),
                                        value: t.getCachedValue(n.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Value"), function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.gt(u.BuiltinFunctions.integerToDecimal(0)) ? "+" + w.formatMoney$Action(u.BuiltinFunctions.decimalToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), t.variables.activeWalletVar.currencyAttr, "en-US", "", i).formattedNumberOut + " " + t.variables.activeWalletVar.currencyAttr : w.formatMoney$Action(u.BuiltinFunctions.decimalToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), t.variables.activeWalletVar.currencyAttr, "en-US", "", i).formattedNumberOut + " " + t.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                        }, function() {
                                            return t.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: n,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: e,
                                        style_dataFetchStatus: u.Model.calculateDataFetchStatus(t.variables._transactionsListInDataFetchStatus)
                                    })))]
                                }),
                                rightActions: C.Empty
                            }
                        }), l.createElement(m, {
                            align: 0,
                            animate: !0,
                            style: "padding-x-base background-neutral-1",
                            visible: t.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext) !== t.variables.recentTransactionsListVar.length - 1,
                            _idProps: {
                                service: n,
                                uuid: "12"
                            },
                            _widgetRecordProvider: e
                        }, l.createElement(S, {
                            getOwnerSpan: d(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: d(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: _.space.none,
                                Color: _.color.neutral3
                            },
                            events: {
                                _handleError: d(function(y) {
                                    v.handleError(y)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: n,
                                uuid: "13",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: []
                        })))]
                    }, b, r, "1")
                },
                _dependencies: [c(t.variables._transactionsListInDataFetchStatus), c(t.variables.transactionsListIn.getCurrent(b.iterationContext).amountAttr), c(t.variables.transactionsListIn.getCurrent(b.iterationContext).transaction_idAttr), c(t.variables.activeWalletVar.currencyAttr), c(t.variables.activeWalletVar.nameAttr), c(t.variables.activeWalletVar.loginidAttr)]
            }), l.createElement(m, {
                align: 0,
                animate: !0,
                visible: t.variables.transactionsListIn.length > 6,
                _idProps: {
                    service: r,
                    uuid: "14"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: u.Model.calculateDataFetchStatus(t.variables._transactionsListInDataFetchStatus)
            }, l.createElement(m, {
                align: 0,
                animate: !1,
                style: "padding-x-base background-neutral-1",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "15"
                },
                _widgetRecordProvider: e
            }, l.createElement(S, {
                getOwnerSpan: d(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Color: _.color.neutral3,
                    Space: _.space.none
                },
                events: {
                    _handleError: d(function(n) {
                        v.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: r,
                    uuid: "16",
                    alias: "3"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            })), l.createElement($, {
                enabled: !0,
                isDefault: !1,
                onClick: d(function() {
                    try {
                        u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), null, !0)
                    } catch (n) {
                        if (n.name !== "RedirectOccurredException") throw n
                    }
                }, "onClick"),
                style: "wallet-transaction-btn cursor-pointer",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "17"
                },
                _widgetRecordProvider: e
            }, l.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "18"
                },
                _widgetRecordProvider: e
            }, l.createElement(J, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px;"
                },
                text: ["See more"],
                _idProps: {
                    service: r,
                    uuid: "19"
                },
                _widgetRecordProvider: e
            }), l.createElement(B, {
                extendedProperties: {
                    style: "font-size: 10px; height: 10px;"
                },
                gridProperties: {
                    width: "7px",
                    marginLeft: "4.5px"
                },
                image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "20"
                },
                _widgetRecordProvider: e
            }))))))
        }
    };
d(A, "View");
var x = A,
    St = x;
export {
    St as a
};