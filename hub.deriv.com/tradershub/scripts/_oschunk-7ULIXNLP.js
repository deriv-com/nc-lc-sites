import {
    a as J
} from "./_oschunk-V3FFUWJG.js";
import {
    a as S
} from "./_oschunk-UHVNGUMG.js";
import {
    a as V
} from "./_oschunk-MAFTJFMD.js";
import {
    b as k,
    h as f,
    j as T,
    k as z,
    l as F,
    r as $,
    y as Q
} from "./_oschunk-WAXNMQCP.js";
import {
    a as H
} from "./_oschunk-LHY3WMNC.js";
import {
    a as G,
    g as B,
    i as L
} from "./_oschunk-J7LCUWB3.js";
import {
    a as N,
    c as W,
    d as D
} from "./_oschunk-XMOR6XCC.js";
import {
    a as p,
    ic as E,
    tc as P
} from "./_oschunk-44PT7RP7.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as K
} from "./_oschunk-DVBKI63I.js";
var s = K(G());
var Z = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0632\u064A\u062F",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    q = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "Mehr anzeigen",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "Kopiert"
    },
    X = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "Ver m\xE1s",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "Copiado"
    },
    Y = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "Vedi di pi\xF9",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "Copiato"
    },
    tt = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "Zobacz wi\u0119cej",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "Skopiowano"
    },
    et = {
        "n0c9QAhrL0ihod3Wp3yNhQ#Value": "Ver mais",
        "H0BmcoW4iEKj+WpP4l38UQ#Value": "Copiado"
    },
    U = {
        "ar-001": {
            translations: Z,
            isRTL: !0
        },
        "de-DE": {
            translations: q,
            isRTL: !1
        },
        "es-ES": {
            translations: X,
            isRTL: !1
        },
        "it-IT": {
            translations: Y,
            isRTL: !1
        },
        "pl-PL": {
            translations: tt,
            isRTL: !1
        },
        "pt-PT": {
            translations: et,
            isRTL: !1
        }
    };

function O(b, t, m, r) {
    let o = JSON.parse(b.TransactionsList);
    b.RecentTransactionsList = JSON.stringify(o.slice(0, 5))
}
c(O, "default");

function w(b, t, m, r) {
    navigator.clipboard.writeText(b.TextToCopy).catch(o => {
        console.error("Failed to copy text: ", o)
    })
}
c(w, "default");
var a = R; {
    let t = class t extends a.Controller.BaseViewController {
        constructor(r, o, e) {
            super(r, o, e, U);
            var h = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    h = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), r = e.callContext(r);
                        var u = new a.DataTypes.VariableHolder,
                            l = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType),
                            A = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(E))),
                            g = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        l.value.jSONOut = a.JSONUtils.serializeToJSON(o.variables.transactionsListIn, !1, !1), g.value.dataOut = a.JSONUtils.deserializeFromJSON(N.getActiveWallet(), P, !1), o.variables.activeWalletVar = g.value.dataOut, u.value = a.Logger.startActiveSpan("ModifiedTransactionsList", function(n) {
                            n && (n.setAttribute("code.function", "ModifiedTransactionsList"), n.setAttribute("outsystems.function.key", "e2438b4a-16cb-4c52-8ed8-1e550f5c9fe6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(O, "ModifiedTransactionsList", "OnReady", {
                                    TransactionsList: a.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, a.DataTypes.DataTypes.Text),
                                    RecentTransactionsList: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                }, function(i) {
                                    var _ = new(e.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult"));
                                    return _.recentTransactionsListOut = a.DataConversion.JSNodeParamConverter.from(i.RecentTransactionsList, a.DataTypes.DataTypes.Text), _
                                }, {}, {})
                            } finally {
                                n && n.end()
                            }
                        }, 1), A.value.dataOut = a.JSONUtils.deserializeFromJSON(u.value.recentTransactionsListOut, E, !1), o.variables.recentTransactionsListVar = A.value.dataOut
                    } finally {
                        d && d.end()
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
                    h = this.idService;
                return a.Logger.startActiveSpan("TooltipInitialized", function(d) {
                    d && (d.setAttribute("code.function", "TooltipInitialized"), d.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("TooltipInitialized"), r = e.callContext(r), a.Logger.startActiveSpan("ClipboardAction", function(u) {
                            u && (u.setAttribute("code.function", "ClipboardAction"), u.setAttribute("outsystems.function.key", "67e6fc2e-7f48-48a9-8ecd-e438a59b62d8"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(w, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: a.DataConversion.JSNodeParamConverter.to(a.BuiltinFunctions.longIntegerToText(o.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), a.DataTypes.DataTypes.Text)
                                }, function(l) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__tooltipInitialized$Action
        }
        set _tooltipInitialized$Action(r) {
            this.__tooltipInitialized$Action = r
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
                    h = this.idService;
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
                    h = this.idService;
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
            return D.defaultTimeout
        }
    };
    c(t, "ControllerInner");
    let b = t;
    I = b, I.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult", [{
        name: "RecentTransactionsList",
        attrName: "recentTransactionsListOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var I, M = new a.Controller.ControllerFactory(I, H);
var v = R,
    C = L.PlaceholderContent,
    it = L.IteratorPlaceholderContent,
    y = class y extends B.BaseWebBlock {
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
            return [V, S]
        }
        get modelFactory() {
            return J
        }
        get controllerFactory() {
            return M
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                m = this.controller,
                r = this.idService,
                o = m.validationService,
                e = this.widgetsRecordProvider,
                h = m.callContext(),
                d = y.ifWidget,
                u = y.textWidget,
                l = y.asPrimitiveValue,
                A = y.getTranslation,
                g = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, s.createElement(z, {
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
                style_dataFetchStatus: v.Model.calculateDataFetchStatus(t.variables._transactionsListInDataFetchStatus),
                placeholders: {
                    content: new it(function(n, i) {
                        return [s.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: [l(t.variables._transactionsListInDataFetchStatus), l(t.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr), l(t.variables.activeWalletVar.currencyAttr), l(t.variables.activeWalletVar.nameAttr), l(t.variables.activeWalletVar.loginidAttr), l(t.variables.recentTransactionsListVar.length), l(t.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext)), l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr), l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr), l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.loginidAttr), l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr)]
                        }, s.createElement(F, {
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
                                    return [s.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: e
                                    }, s.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: e
                                    }, s.createElement(T, {
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
                                    }), d(!t.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr.equals(v.BuiltinFunctions.integerToLongInteger(v.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                        return [s.createElement(V, {
                                            getOwnerSpan: c(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: c(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Trigger: p.trigger.onClick,
                                                Position: p.position.topLeft
                                            },
                                            events: {
                                                _handleError: c(function(_) {
                                                    m.handleError(_)
                                                }, "_handleError"),
                                                onToggle$Action: c(function(_, nt) {
                                                    var j = i.clone();
                                                    m.tooltipInitialized$Action(m.callContext(j))
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
                                                    return [s.createElement(T, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        style: "wallet-transaction-action-type",
                                                        value: "Ref.ID:" + v.BuiltinFunctions.longIntegerToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr),
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: e
                                                    })]
                                                }),
                                                tooltip: new C(function() {
                                                    return [u(A("H0BmcoW4iEKj+WpP4l38UQ#Value", "Copied"))]
                                                })
                                            },
                                            _dependencies: [l(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr)]
                                        })]
                                    }, function() {
                                        return []
                                    })), s.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: e
                                    }, s.createElement(T, {
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
                                    }), s.createElement(T, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(n.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Style"), function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.gt(v.BuiltinFunctions.integerToDecimal(0)) ? "font-bold text-green" : "font-bold text-red"
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                        }),
                                        value: t.getCachedValue(n.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Value"), function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.gt(v.BuiltinFunctions.integerToDecimal(0)) ? "+" + W.formatMoney$Action(v.BuiltinFunctions.decimalToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), t.variables.activeWalletVar.currencyAttr, "en-US", "", i).formattedNumberOut + " " + t.variables.activeWalletVar.currencyAttr : W.formatMoney$Action(v.BuiltinFunctions.decimalToText(t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), t.variables.activeWalletVar.currencyAttr, "en-US", "", i).formattedNumberOut + " " + t.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return t.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                        }, function() {
                                            return t.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: n,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: e
                                    })))]
                                }),
                                rightActions: C.Empty
                            }
                        }), s.createElement(f, {
                            align: 0,
                            animate: !0,
                            style: "padding-x-base background-neutral-1",
                            visible: t.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext) !== t.variables.recentTransactionsListVar.length - 1,
                            _idProps: {
                                service: n,
                                uuid: "12"
                            },
                            _widgetRecordProvider: e
                        }, s.createElement(S, {
                            getOwnerSpan: c(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: p.space.none,
                                Color: p.color.neutral3
                            },
                            events: {
                                _handleError: c(function(_) {
                                    m.handleError(_)
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
                    }, h, r, "1")
                },
                _dependencies: [l(t.variables._transactionsListInDataFetchStatus), l(t.variables.transactionsListIn.getCurrent(h.iterationContext).transaction_idAttr), l(t.variables.activeWalletVar.currencyAttr), l(t.variables.activeWalletVar.nameAttr), l(t.variables.activeWalletVar.loginidAttr)]
            }), s.createElement(f, {
                align: 0,
                animate: !0,
                visible: t.variables.transactionsListIn.length > 6,
                _idProps: {
                    service: r,
                    uuid: "14"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: v.Model.calculateDataFetchStatus(t.variables._transactionsListInDataFetchStatus)
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                style: "padding-x-base background-neutral-1",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "15"
                },
                _widgetRecordProvider: e
            }, s.createElement(S, {
                getOwnerSpan: c(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Color: p.color.neutral3,
                    Space: p.space.none
                },
                events: {
                    _handleError: c(function(n) {
                        m.handleError(n)
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
            })), s.createElement(k, {
                enabled: !0,
                isDefault: !1,
                onClick: c(function() {
                    try {
                        v.Navigation.navigateTo(v.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), null, !0)
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
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "18"
                },
                _widgetRecordProvider: e
            }, s.createElement(Q, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px;"
                },
                text: [u(A("n0c9QAhrL0ihod3Wp3yNhQ#Value", "See more"))],
                _idProps: {
                    service: r,
                    uuid: "19"
                },
                _widgetRecordProvider: e
            }), s.createElement($, {
                extendedProperties: {
                    style: "font-size: 10px; height: 10px;"
                },
                gridProperties: {
                    width: "7px",
                    marginLeft: "4.5px"
                },
                image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "20"
                },
                _widgetRecordProvider: e
            }))))))
        }
    };
c(y, "View");
var x = y,
    Vt = x;
export {
    Vt as a
};