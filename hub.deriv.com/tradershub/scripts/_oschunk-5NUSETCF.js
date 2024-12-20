import {
    a as X
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import {
    a as ve
} from "./_oschunk-MMQJWWJM.js";
import {
    a as pe
} from "./_oschunk-FTNXEJTP.js";
import "./_oschunk-EK7BIWKQ.js";
import {
    a as L
} from "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as I
} from "./_oschunk-LS2CNLHX.js";
import {
    a as Z
} from "./_oschunk-ZGZGC7WW.js";
import {
    a as J
} from "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-CCRNOUNW.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import {
    a as K
} from "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as W,
    c as q,
    d as w,
    h as d,
    j as y,
    k as N,
    l as U,
    r as B,
    u as Q,
    v as Y,
    y as V
} from "./_oschunk-E7JQAU4J.js";
import {
    a as ue
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as ge,
    g as M,
    i as O
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as C,
    c as H,
    d as j
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as S,
    vc as E
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as A
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as ce
} from "./_oschunk-DVBKI63I.js";
var i = ce(ge());
var v = ce(ge());
var h = A,
    re = class re extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TransactionsByDate", "transactionsByDateVar", "TransactionsByDate", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new E)
            }, !1, E), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("TransationsDate", "transationsDateIn", "TransationsDate", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new E)
            }, !1, E), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(re, "VariablesRecord");
var G = re;
G.init();
var ie = class ie extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(ie, "WidgetsRecord");
var ee = ie,
    k = class k extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return k._hasValidationWidgetsValue === void 0 && (k._hasValidationWidgetsValue = void 0 || void 0 || void 0), k._hasValidationWidgetsValue
        }
        setInputs(e) {
            "TransationsDate" in e && (this.variables.transationsDateIn = e.TransationsDate, "_transationsDateInDataFetchStatus" in e && (this.variables._transationsDateInDataFetchStatus = e._transationsDateInDataFetchStatus)), "TransactionsList" in e && (this.variables.transactionsListIn = e.TransactionsList, "_transactionsListInDataFetchStatus" in e && (this.variables._transactionsListInDataFetchStatus = e._transactionsListInDataFetchStatus))
        }
    };
s(k, "Model");
var z = k;
z._hasValidationWidgetsValue = void 0;
var ye = new h.Model.ModelFactory(z);
var Ce = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    Re = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "Kopiert"
    },
    we = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "Copiado"
    },
    xe = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "Copiato"
    },
    Ae = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "Skopiowano"
    },
    Se = {
        "8xjGkhMAtkuBadfD3CoBiQ#Value": "Copiado"
    },
    _e = {
        "ar-001": {
            translations: Ce,
            isRTL: !0
        },
        "de-DE": {
            translations: Re,
            isRTL: !1
        },
        "es-ES": {
            translations: we,
            isRTL: !1
        },
        "it-IT": {
            translations: xe,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ae,
            isRTL: !1
        },
        "pt-PT": {
            translations: Se,
            isRTL: !1
        }
    };

function ae(F, e, o, r) {
    navigator.clipboard.writeText(F.TextToCopy).catch(l => {
        console.error("Failed to copy text: ", l)
    })
}
s(ae, "default");
var b = A; {
    let e = class e extends b.Controller.BaseViewController {
        constructor(r, l, t) {
            super(r, l, t, _e);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onTransactionClick$Action() {
            return this.hasOwnProperty("__onTransactionClick$Action") || (this.__onTransactionClick$Action = function(r, l) {
                var t = this.model,
                    u = this.controller,
                    p = this.idService;
                return b.Logger.startActiveSpan("OnTransactionClick", function(g) {
                    return g && (g.setAttribute("code.function", "OnTransactionClick"), g.setAttribute("outsystems.function.key", "28ace539-5973-403d-8cf2-bd6829089d60"), g.setAttribute("outsystems.function.owner.name", "tradershub"), g.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        u.ensureControllerAlive("OnTransactionClick"), l = u.callContext(l);
                        var c = new b.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransationListByDate.OnTransactionClick$vars")));
                        return c.value.formattedTransactionItemListInLocal = r.clone(), b.Flow.executeAsyncFlow(function() {
                            return b.Flow.executeSequence(function() {
                                if (t.variables.transactionsByDateVar.getCurrent(l.iterationContext).isPendingAttr) return u.onClickEvent$Action(t.variables.transactionsByDateVar.getCurrent(l.iterationContext), l)
                            })
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 1)
            }), this.__onTransactionClick$Action
        }
        set _onTransactionClick$Action(r) {
            this.__onTransactionClick$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var l = this.model,
                    t = this.controller,
                    u = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(p) {
                    p && (p.setAttribute("code.function", "OnReady"), p.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var g = new b.DataTypes.VariableHolder,
                            c = new b.DataTypes.VariableHolder;
                        l.variables.isLoadingVar = !0, g.value = b.SystemActions.listFilter(l.variables.transactionsListIn, function(_) {
                            return _.dateAttr === l.variables.transationsDateIn
                        }, r), c.value = j.getBalanceByLoginId$Action(C.getActiveWalletLoginId(), r), l.variables.transactionsByDateVar = g.value.filteredListOut, l.variables.currencyVar = c.value.currencyOut, l.variables.isLoadingVar = !1
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _tooltipInitialized$Action() {
            return this.hasOwnProperty("__tooltipInitialized$Action") || (this.__tooltipInitialized$Action = function(r) {
                var l = this.model,
                    t = this.controller,
                    u = this.idService;
                return b.Logger.startActiveSpan("TooltipInitialized", function(p) {
                    p && (p.setAttribute("code.function", "TooltipInitialized"), p.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipInitialized"), r = t.callContext(r), b.Logger.startActiveSpan("ClipboardAction", function(g) {
                            g && (g.setAttribute("code.function", "ClipboardAction"), g.setAttribute("outsystems.function.key", "edd05965-06ea-49dc-baea-4a23ca0750e2"), g.setAttribute("outsystems.function.owner.name", "tradershub"), g.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ae, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: b.DataConversion.JSNodeParamConverter.to(b.BuiltinFunctions.longIntegerToText(l.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), b.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                g && g.end()
                            }
                        }, 1)
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__tooltipInitialized$Action
        }
        set _tooltipInitialized$Action(r) {
            this.__tooltipInitialized$Action = r
        }
        onTransactionClick$Action(r, l) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnTransactionClick__proxy", function(u) {
                return u && (u.setAttribute("code.function", "OnTransactionClick"), u.setAttribute("outsystems.function.key", "28ace539-5973-403d-8cf2-bd6829089d60"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onTransactionClick$Action, l, r)
                }, function() {
                    u && u.end()
                })
            }, 0)
        }
        onReady$Action(r) {
            var l = this.controller;
            return b.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return l.safeExecuteClientAction(l._onReady$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tooltipInitialized$Action(r) {
            var l = this.controller;
            return b.Logger.startActiveSpan("TooltipInitialized__proxy", function(t) {
                t && (t.setAttribute("code.function", "TooltipInitialized"), t.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return l.safeExecuteClientAction(l._tooltipInitialized$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClickEvent$Action() {
            return this.hasOwnProperty("_onClickEvent$Action") || (this._onClickEvent$Action = function() {
                return Promise.resolve()
            }), this._onClickEvent$Action
        }
        set onClickEvent$Action(r) {
            this._onClickEvent$Action = r
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var l = this.controller,
                    t = this.model,
                    u = this.idService;
                return l.onReady$Action(r)
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
                var l = this.controller,
                    t = this.model,
                    u = this.idService;
                return l.onReady$Action(r)
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
            return j.defaultTimeout
        }
    };
    s(e, "ControllerInner");
    let F = e;
    ne = F, ne.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransationListByDate.OnTransactionClick$vars", [{
        name: "FormattedTransactionItemList",
        attrName: "formattedTransactionItemListInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.RecordList,
        defaultValue: s(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }])
}
var ne, he = new b.Controller.ControllerFactory(ne, ue);
var R = A,
    $ = O.PlaceholderContent,
    Ve = O.IteratorPlaceholderContent,
    D = class D extends M.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsTransationListByDate"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransationListByDate",
                functionKey: "e07f29e4-1b28-4e41-99be-2b0a8f2677b1",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransationListByDate.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [L, I, J]
        }
        get modelFactory() {
            return ye
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                o = this.controller,
                r = this.idService,
                l = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                p = D.ifWidget,
                g = D.textWidget,
                c = D.asPrimitiveValue,
                _ = D.getTranslation,
                m = this;
            return v.createElement("div", this.getRootNodeProperties(), p(e.variables.isLoadingVar, !1, this, function() {
                return [v.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(L, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(a) {
                            o.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: r,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), v.createElement(L, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(a) {
                            o.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: r,
                        uuid: "4",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), v.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(L, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(a) {
                            o.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: r,
                        uuid: "6",
                        alias: "3"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), v.createElement(L, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(a) {
                            o.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: r,
                        uuid: "7",
                        alias: "4"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))))]
            }, function() {
                return [v.createElement(N, {
                    animateItems: !0,
                    extendedProperties: {
                        style: "border-radius: 8px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: e.variables.transactionsByDateVar,
                    style: "list list-group",
                    tag: "div",
                    _idProps: {
                        service: r,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new Ve(function(a, n) {
                            return [v.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [c(e.variables._transactionsListInDataFetchStatus), c(e.variables.transactionsListIn.getCurrent(n.iterationContext).transaction_idAttr), c(C.getAccountType()), c(e.variables.currencyVar), c(e.variables.transactionsByDateVar.length), c(e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext)), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr), c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).isPendingAttr)]
                            }, v.createElement(U, {
                                onClick: s(function() {
                                    return Promise.resolve().then(function() {
                                        var P = n.clone();
                                        return o.onTransactionClick$Action(e.variables.transactionsByDateVar, o.callContext(P))
                                    })
                                }, "onClick"),
                                style: e.getCachedValue(a.getId("ListItem1.Style"), function() {
                                    return "wallet-transaction-item " + (e.variables.transactionsByDateVar.getCurrent(n.iterationContext).isPendingAttr ? "cursor-pointer" : "")
                                }, function() {
                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).isPendingAttr
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: a,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: $.Empty,
                                    content: new $(function() {
                                        return [v.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }, p(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).isPendingAttr, !1, this, function() {
                                            return [v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: t
                                            }, v.createElement(y, {
                                                style: "wallet-transaction-action-type",
                                                value: e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            }), v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex gap-s align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: t
                                            }, v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-radius: 100%; height: 6px;"
                                                },
                                                gridProperties: {
                                                    classes: "OSInline",
                                                    width: "6px"
                                                },
                                                style: e.getCachedValue(a.getId("VvRnhwtxSUOaalTFOZsH1Q.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr === "In review" ? "background-yellow" : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr === "In process" ? "background-info" : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr === "Unsuccessful" ? "background-red-dark" : ""
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: t
                                            }), v.createElement(y, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: "wallet-transaction-action-type text-neutral-7",
                                                value: e.variables.transactionsByDateVar.getCurrent(n.iterationContext).statusAttr,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: t
                                            }))), v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: t
                                            }, v.createElement(y, {
                                                value: e.variables.currencyVar + " Wallets",
                                                _idProps: {
                                                    service: a,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: t
                                            }), v.createElement(y, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(a.getId("0p+SaclaGkmGx8gAbgeNDg.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "deposit" ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                                }),
                                                value: e.getCachedValue(a.getId("0p+SaclaGkmGx8gAbgeNDg.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "deposit" ? "+" + H.formatMoney$Action(R.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", n).formattedNumberOut + " " + e.variables.currencyVar : "-" + H.formatMoney$Action(R.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", n).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: a,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }, function() {
                                            return [v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: t
                                            }, v.createElement(y, {
                                                style: "wallet-transaction-action-type",
                                                value: e.getCachedValue(a.getId("k7tzKP2BbUCMSyAHPCYkvw.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(R.BuiltinFunctions.integerToDecimal(0)) ? "Transfer from" : "Transfer to" : C.getAccountType() === "demo" && (e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "deposit" || e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "withdrawal") ? "Reset Balance" : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                                }, function() {
                                                    return C.getAccountType()
                                                }),
                                                _idProps: {
                                                    service: a,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: t
                                            }), p(!e.variables.transactionsListIn.getCurrent(n.iterationContext).transaction_idAttr.equals(R.BuiltinFunctions.integerToLongInteger(R.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                                return [v.createElement(I, {
                                                    getOwnerSpan: s(function() {
                                                        return m.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return m.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Position: S.position.topLeft,
                                                        Trigger: S.trigger.onClick
                                                    },
                                                    events: {
                                                        _handleError: s(function(P) {
                                                            o.handleError(P)
                                                        }, "_handleError"),
                                                        onToggle$Action: s(function(P, de) {
                                                            var Pe = n.clone();
                                                            o.tooltipInitialized$Action(o.callContext(Pe))
                                                        }, "onToggle$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: l
                                                    },
                                                    _idProps: {
                                                        service: a,
                                                        uuid: "22",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        content: new $(function() {
                                                            return [v.createElement(y, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                style: "wallet-transaction-action-type",
                                                                value: "Ref.ID:" + R.BuiltinFunctions.longIntegerToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr),
                                                                _idProps: {
                                                                    service: a,
                                                                    uuid: "23"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })]
                                                        }),
                                                        tooltip: new $(function() {
                                                            return [g(_("8xjGkhMAtkuBadfD3CoBiQ#Value", "Copied"))]
                                                        })
                                                    },
                                                    _dependencies: [c(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr)]
                                                })]
                                            }, function() {
                                                return []
                                            })), v.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: t
                                            }, v.createElement(y, {
                                                value: e.getCachedValue(a.getId("vzFP_CqmHUO0+7YCDZ6dKw.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.lt(R.BuiltinFunctions.integerToDecimal(0)) ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr : e.variables.currencyVar + " Wallets"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: a,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: t
                                            }), v.createElement(y, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(a.getId("1joVmOSuUEqJmZjl2HfdYA.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(R.BuiltinFunctions.integerToDecimal(0)) ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                                }),
                                                value: e.getCachedValue(a.getId("1joVmOSuUEqJmZjl2HfdYA.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(R.BuiltinFunctions.integerToDecimal(0)) ? "+" + H.formatMoney$Action(R.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", n).formattedNumberOut + " " + e.variables.currencyVar : H.formatMoney$Action(R.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", n).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: a,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }))]
                                    }),
                                    rightActions: $.Empty
                                }
                            }), v.createElement(d, {
                                align: 0,
                                animate: !0,
                                style: "padding-x-base background-neutral-1",
                                visible: e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext) !== e.variables.transactionsByDateVar.length - 1,
                                _idProps: {
                                    service: a,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, v.createElement(J, {
                                getOwnerSpan: s(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: S.color.neutral3,
                                    Space: S.space.none
                                },
                                events: {
                                    _handleError: s(function(P) {
                                        o.handleError(P)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: l
                                },
                                _idProps: {
                                    service: a,
                                    uuid: "28",
                                    alias: "6"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })))]
                        }, u, r, "1")
                    },
                    _dependencies: [c(e.variables._transactionsListInDataFetchStatus), c(e.variables.transactionsListIn.getCurrent(u.iterationContext).transaction_idAttr), c(C.getAccountType()), c(e.variables.currencyVar)]
                })]
            }))
        }
    };
s(D, "View");
var se = D,
    oe = se;
var f = A,
    T = O.PlaceholderContent,
    De = O.IteratorPlaceholderContent,
    x = class x extends M.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsTransaction"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransaction",
                functionKey: "035747a7-df9a-41dc-b635-462b6bb04fdf",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsTransaction.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Z, X, K, oe, I]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return pe
        }
        get title() {
            let e = this.model,
                o = this.controller,
                r = this.idService,
                l = o.validationService,
                t = o.callContext(),
                u = x.asPrimitiveValue,
                p = x.getTranslation,
                g = this;
            return f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("p0dXA5rf3EG2NUYra7BP3w#TitleExpression.2118442357.1", "Transactions")
        }
        internalRender() {
            let e = this.model,
                o = this.controller,
                r = this.idService,
                l = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                p = x.ifWidget,
                g = x.textWidget,
                c = x.asPrimitiveValue,
                _ = x.getTranslation,
                m = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(Z, {
                getOwnerSpan: s(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: l
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new T(function() {
                        return [i.createElement(X, {
                            getOwnerSpan: s(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("1dw8hqdk3keFKAqmHeBEEw#Value.2118442357.1", "Transactions")
                            },
                            events: {
                                _handleError: s(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                walletOverlayPageContent: new T(function() {
                                    return [i.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionsMainContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, i.createElement(V, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [g(_("y0td2RELukOpHNdWu7Z0Pw#Value", "Transactions"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t
                                    }), i.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s full-width margin-top-base",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionFilterContainer2"
                                        },
                                        _widgetRecordProvider: t
                                    }, p(C.getAccountType() === "real", !1, this, function() {
                                        return [i.createElement(q, {
                                            _validationProps: {
                                                validationService: l
                                            },
                                            enabled: !0,
                                            mandatory: !1,
                                            onChange: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var a = u.clone();
                                                    return o.onReady$Action(o.callContext(a))
                                                })
                                            }, "onChange"),
                                            style: "wallets-filter-buttons",
                                            variable: e.createVariable(f.DataTypes.DataTypes.Text, e.variables.actionTypeValueVar, function(a) {
                                                e.variables.actionTypeValueVar = a
                                            }),
                                            _idProps: {
                                                service: r,
                                                name: "RealButtonGroup"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 0px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "all",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "All"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("hlWEyxxL3kG3QfBrx654Eg#Value", "All"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "pending",
                                            visible: e.variables.isCryptoVar,
                                            _idProps: {
                                                service: r,
                                                name: "Pending"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("Vh1oU_5Jx0qm96Dt_GzcQQ#Value", "Pending"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "deposit",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Deposit"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("Kq0lMCe6MUS71k+qubUZug#Value", "Deposit"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "withdrawal",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Withdraw"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("kmAUjEtiuk+Hg6sQDyh7Lg#Value", "Withdraw"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "transfer",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Transfer"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("bJ4ZfptGikW9YdVsl3Ym3g#Value", "Transfer"))))]
                                    }, function() {
                                        return [i.createElement(q, {
                                            _validationProps: {
                                                validationService: l
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "overflow-x: auto;"
                                            },
                                            mandatory: !1,
                                            onChange: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var a = u.clone();
                                                    return o.onReady$Action(o.callContext(a))
                                                })
                                            }, "onChange"),
                                            style: '"button-group"',
                                            variable: e.createVariable(f.DataTypes.DataTypes.Text, e.variables.actionTypeValueVar, function(a) {
                                                e.variables.actionTypeValueVar = a
                                            }),
                                            _idProps: {
                                                service: r,
                                                name: "DemoButtonGroup"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 0px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "all",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "All2"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("WTulOKdWiEekiWOUjhbPlQ#Value", "All"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "transfer",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Transfer2"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("OjSDz9AGOkCCTTXzKl9tig#Value", "Transfer"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "deposit",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Deposit2"
                                            },
                                            _widgetRecordProvider: t
                                        }, g(_("YfyKr2t6skeW4ucndbqnpg#Value", "Reset Balance"))))]
                                    })), p(e.variables.isLoadingVar, !1, this, function() {
                                        return [i.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallet-loading-container",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(K, {
                                            getOwnerSpan: s(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: s(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: s(function(a) {
                                                    o.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: l
                                            },
                                            _idProps: {
                                                service: r,
                                                uuid: "16",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }))]
                                    }, function() {
                                        return [i.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "TransactionListContainer"
                                            },
                                            _widgetRecordProvider: t
                                        }, p(e.variables.transactionsVar.length < 1, !1, this, function() {
                                            return [i.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallet-loading-container display-flex align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContainer"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(B, {
                                                gridProperties: {
                                                    width: "36px"
                                                },
                                                image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: t
                                            })), i.createElement(V, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [g(_("R5vETfYBYUWiCHLBsjKLqA#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: r,
                                                    uuid: "22"
                                                },
                                                _widgetRecordProvider: t
                                            }), i.createElement(V, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [g(_("M4rt3Iir10eX40aqD1n_lA#Value", "Your transactions will appear here."))],
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContentContainer"
                                                },
                                                _widgetRecordProvider: t
                                            })))]
                                        }, function() {
                                            return [i.createElement(N, {
                                                animateItems: !0,
                                                extendedProperties: {
                                                    style: "border-radius: 8px;"
                                                },
                                                gridProperties: {
                                                    classes: "OSFillParent"
                                                },
                                                mode: 0,
                                                source: e.variables.datesListVar,
                                                style: "display-flex flex-direction-column gap-base",
                                                tag: "div",
                                                _idProps: {
                                                    service: r,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: t,
                                                placeholders: {
                                                    content: new De(function(a, n) {
                                                        return [i.createElement(U, {
                                                            style: '"list-item"',
                                                            triggerActionOnFullSwipeLeft: !1,
                                                            triggerActionOnFullSwipeRight: !1,
                                                            _idProps: {
                                                                service: a,
                                                                name: "ListItem"
                                                            },
                                                            _widgetRecordProvider: t,
                                                            placeholders: {
                                                                leftActions: T.Empty,
                                                                content: new T(function() {
                                                                    return [i.createElement(d, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column gap-s",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: a,
                                                                            uuid: "26"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, i.createElement(y, {
                                                                        extendedProperties: {
                                                                            style: "font-size: 14px;"
                                                                        },
                                                                        value: e.variables.datesListVar.getCurrent(n.iterationContext),
                                                                        _idProps: {
                                                                            service: a,
                                                                            uuid: "27"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }), i.createElement(d, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: a,
                                                                            uuid: "28"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, i.createElement(oe, {
                                                                        getOwnerSpan: s(function() {
                                                                            return m.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: s(function() {
                                                                            return m.getChildSpan("destroy")
                                                                        }, "getOwnerDisposeSpan"),
                                                                        inputs: {
                                                                            TransactionsList: e.variables.transactionsVar,
                                                                            TransationsDate: e.variables.datesListVar.getCurrent(n.iterationContext)
                                                                        },
                                                                        events: {
                                                                            _handleError: s(function(P) {
                                                                                o.handleError(P)
                                                                            }, "_handleError"),
                                                                            onClickEvent$Action: s(function(P) {
                                                                                var de = n.clone();
                                                                                o.walletsTransationsListByDateOnClickEvent$Action(P, o.callContext(de))
                                                                            }, "onClickEvent$Action")
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: l
                                                                        },
                                                                        _idProps: {
                                                                            service: a,
                                                                            uuid: "29",
                                                                            alias: "4"
                                                                        },
                                                                        _widgetRecordProvider: t,
                                                                        _dependencies: []
                                                                    })))]
                                                                }),
                                                                rightActions: T.Empty
                                                            },
                                                            _dependencies: [c(e.variables.transactionsVar), c(e.variables.datesListVar.getCurrent(n.iterationContext))]
                                                        })]
                                                    }, u, r, "1")
                                                },
                                                _dependencies: [c(e.variables.transactionsVar)]
                                            })]
                                        }))]
                                    }))]
                                }),
                                mobileFooterContent: T.Empty
                            },
                            _dependencies: [c(e.variables.datesListVar), c(e.variables.transactionsVar), c(e.variables.isCryptoVar), c(e.variables.isLoadingVar), c(e.variables.actionTypeValueVar), c(C.getAccountType())]
                        })]
                    })
                },
                _dependencies: [c(e.variables.datesListVar), c(e.variables.transactionsVar), c(e.variables.isCryptoVar), c(e.variables.isLoadingVar), c(e.variables.actionTypeValueVar), c(C.getAccountType())]
            }), i.createElement(Y, {
                showPopup: e.variables.showTransactionDetailsVar,
                style: "popup-dialog full-height-popup",
                _idProps: {
                    service: r,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center gap-base",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(B, {
                extendedEvents: {
                    onClick: s(function() {
                        var a = u.clone();
                        o.closeIconOnClick$Action(o.callContext(a))
                    }, "onClick")
                },
                image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: r,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            }), i.createElement(V, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Transaction details"],
                _idProps: {
                    service: r,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            })), i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "margin-bottom-m display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }, i.createElement(B, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                gridProperties: {
                    width: "20px"
                },
                type: 1,
                url: e.variables.currentTransactionDetailsVar.iconAttr,
                _idProps: {
                    service: r,
                    uuid: "36"
                },
                _widgetRecordProvider: t
            }), i.createElement(d, {
                align: 0,
                animate: !1,
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "37"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }, i.createElement(y, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                value: e.variables.currentTransactionDetailsVar.statusAttr,
                _idProps: {
                    service: r,
                    uuid: "39"
                },
                _widgetRecordProvider: t
            }), i.createElement(y, {
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "label font-light",
                value: e.variables.currentTransactionDetailsVar.dateAttr,
                _idProps: {
                    service: r,
                    uuid: "40"
                },
                _widgetRecordProvider: t
            })))), i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "41"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "padding-base background-neutral-2",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "42"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "43"
                },
                _widgetRecordProvider: t
            }, "Reference ID", i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s align-items-center",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "44"
                },
                _widgetRecordProvider: t
            }, i.createElement(y, {
                gridProperties: {
                    marginLeft: "0px"
                },
                value: f.BuiltinFunctions.longIntegerToText(e.variables.currentTransactionDetailsVar.refIdAttr),
                _idProps: {
                    service: r,
                    uuid: "45"
                },
                _widgetRecordProvider: t
            }), i.createElement(I, {
                getOwnerSpan: s(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Trigger: S.trigger.onClick,
                    Position: S.position.topLeft
                },
                events: {
                    _handleError: s(function(a) {
                        o.handleError(a)
                    }, "_handleError"),
                    onToggle$Action: s(function(a, n) {
                        var P = u.clone();
                        o.clipboardAction$Action(o.callContext(P))
                    }, "onToggle$Action")
                },
                _validationProps: {
                    validationService: l
                },
                _idProps: {
                    service: r,
                    uuid: "46",
                    alias: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new T(function() {
                        return [i.createElement(W, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-width: 0px;"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var a = u.clone();
                                o.clipboardAction$Action(o.callContext(a))
                            }, "onClick"),
                            style: '"btn"',
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "47"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(B, {
                            gridProperties: {
                                width: "14px",
                                marginLeft: "0px"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.clipboard_bold.svg"),
                            type: 0,
                            _idProps: {
                                service: r,
                                uuid: "48"
                            },
                            _widgetRecordProvider: t
                        }))]
                    }),
                    tooltip: new T(function() {
                        return ["Copied"]
                    })
                },
                _dependencies: []
            })))), i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "padding-base background-neutral-2",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "49"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "50"
                },
                _widgetRecordProvider: t
            }, "Withdraw amount", i.createElement(y, {
                gridProperties: {
                    marginLeft: "0px"
                },
                value: e.getCachedValue(r.getId("TMsUd8h4DEqRuqtyr30nIw.Value"), function() {
                    return f.BuiltinFunctions.formatDecimal(e.variables.currentTransactionDetailsVar.amountAttr, 8, ".", ".") + " " + e.variables.currencyVar
                }, function() {
                    return e.variables.currentTransactionDetailsVar.amountAttr
                }, function() {
                    return e.variables.currencyVar
                }),
                _idProps: {
                    service: r,
                    uuid: "51"
                },
                _widgetRecordProvider: t
            }))), i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "padding-base background-neutral-2",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "52"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "53"
                },
                _widgetRecordProvider: t
            }, "Destination address", i.createElement(Q, {
                enabled: !0,
                extendedProperties: {
                    target: "_blank"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var a = u.clone();
                    o.addressLinkOnClick$Action(e.variables.currentTransactionDetailsVar.addressUrlAttr, o.callContext(a))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "54"
                },
                _widgetRecordProvider: t
            }, i.createElement(y, {
                extendedProperties: {
                    style: "font-weight: bold; text-decoration: underline;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "wallets-link",
                value: e.getCachedValue(r.getId("gaSUuY7590GGQ1destVjsQ.Value"), function() {
                    return f.BuiltinFunctions.toUpper(f.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.addressHashAttr, 0, 4) + "...." + f.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.addressHashAttr, f.BuiltinFunctions.length(e.variables.currentTransactionDetailsVar.addressHashAttr) - 4, 4))
                }, function() {
                    return e.variables.currentTransactionDetailsVar.addressHashAttr
                }),
                _idProps: {
                    service: r,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            })))), i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "padding-base background-neutral-2",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "57"
                },
                _widgetRecordProvider: t
            }, "Transaction hash", p(e.variables.currentTransactionDetailsVar.transactionHashAttr === f.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [i.createElement(y, {
                    value: e.getCachedValue(r.getId("YPAFdqEPYU66Zxo2nyqTVw.Value"), function() {
                        return e.variables.currentTransactionDetailsVar.action_typeAttr === "withdraw" ? "Pending" : "Not available"
                    }, function() {
                        return e.variables.currentTransactionDetailsVar.action_typeAttr
                    }),
                    _idProps: {
                        service: r,
                        uuid: "58"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [i.createElement(Q, {
                    enabled: !0,
                    extendedProperties: {
                        target: "_blank"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    onClick: s(function() {
                        var a = u.clone();
                        o.addressLinkOnClick$Action(e.variables.currentTransactionDetailsVar.transactionUrlAttr, o.callContext(a))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "59"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "font-weight: bold; text-decoration: underline;"
                    },
                    style: "wallets-link",
                    value: e.getCachedValue(r.getId("TOjwWGl1m06YHycOnNgafA.Value"), function() {
                        return f.BuiltinFunctions.toUpper(f.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.transactionHashAttr, 0, 4) + "...." + f.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.transactionHashAttr, f.BuiltinFunctions.length(e.variables.currentTransactionDetailsVar.transactionHashAttr) - 4, 4))
                    }, function() {
                        return e.variables.currentTransactionDetailsVar.transactionHashAttr
                    }),
                    _idProps: {
                        service: r,
                        uuid: "60"
                    },
                    _widgetRecordProvider: t
                }))]
            }))))), i.createElement(d, {
                align: 0,
                animate: !0,
                style: "cfd-modal-sticky-footer",
                visible: e.variables.currentTransactionDetailsVar.isValidToCancelAttr,
                _idProps: {
                    service: r,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px; margin-top: 16px; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ActionBtnContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(W, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: s(function() {
                    var a = u.clone();
                    o.cancelTransactionOnClick$Action(o.callContext(a))
                }, "onClick"),
                style: "btn btn-cancel",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ActionButton"
                },
                _widgetRecordProvider: t
            }, "Cancel transaction ")))), i.createElement(Y, {
                showPopup: e.variables.showCancelWithdrawalModalVar,
                style: "popup-dialog ",
                _idProps: {
                    service: r,
                    uuid: "64"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-m",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "65"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "full-width display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ModalTitle"
                },
                _widgetRecordProvider: t
            }, i.createElement(V, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                style: "flex-1",
                text: ["Cancel transaction?"],
                _idProps: {
                    service: r,
                    uuid: "67"
                },
                _widgetRecordProvider: t
            }), i.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: unset; border-width: 0px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var a = u.clone();
                    o.closeCancelWithdrawalModal$Action(o.callContext(a))
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "68"
                },
                _widgetRecordProvider: t
            }, i.createElement(B, {
                image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "69"
                },
                _widgetRecordProvider: t
            }))), i.createElement(V, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: ["This action cannot be undone. "],
                _idProps: {
                    service: r,
                    uuid: "70"
                },
                _widgetRecordProvider: t
            }), i.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column align-items-center full-width gap-s",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "71"
                },
                _widgetRecordProvider: t
            }, i.createElement(W, {
                enabled: !0,
                isDefault: !1,
                onClick: s(function() {
                    var a = u.clone();
                    o.closeCancelWithdrawalModal$Action(o.callContext(a))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "72"
                },
                _widgetRecordProvider: t
            }, "Keep transaction"), i.createElement(W, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var a = u.clone();
                        return o.confirmCancelTransactionOnClick$Action(f.BuiltinFunctions.longIntegerToText(e.variables.currentTransactionDetailsVar.refIdAttr), o.callContext(a))
                    })
                }, "onClick"),
                style: "btn full-width",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "73"
                },
                _widgetRecordProvider: t
            }, "Cancel transaction")))))
        }
    };
s(x, "View");
var le = x,
    pt = le;
export {
    pt as
    default
};