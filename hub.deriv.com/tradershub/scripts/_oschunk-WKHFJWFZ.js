import {
    a as X
} from "./_oschunk-M2HM6MS3.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-ESAL6IS4.js";
import "./_oschunk-FRF3DI3V.js";
import {
    a as ue
} from "./_oschunk-B4KP6LRO.js";
import {
    a as ge
} from "./_oschunk-RDOQ73RA.js";
import "./_oschunk-26LPX23H.js";
import {
    a as I
} from "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    a as W
} from "./_oschunk-3DUHVNXP.js";
import {
    b as Z
} from "./_oschunk-G7GFWP74.js";
import {
    a as J
} from "./_oschunk-5ETXRNLC.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import {
    a as K
} from "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as O,
    c as q,
    d as w,
    h as d,
    j as y,
    k as N,
    l as U,
    r as B,
    u as Q,
    v as Y,
    y as T
} from "./_oschunk-42NACYKQ.js";
import {
    a as de
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as ce,
    g as M,
    i as D
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as R,
    b as H,
    c as j
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Le as F,
    a as S
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as A
} from "./_oschunk-2JKANR6M.js";
import {
    c as s,
    g as le
} from "./_oschunk-DVBKI63I.js";
var i = le(ce());
var g = le(ce());
var h = A,
    te = class te extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TransactionsByDate", "transactionsByDateVar", "TransactionsByDate", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("TransationsDate", "transationsDateIn", "TransationsDate", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(te, "VariablesRecord");
var G = te;
G.init();
var re = class re extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(re, "WidgetsRecord");
var ee = re,
    L = class L extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return L._hasValidationWidgetsValue === void 0 && (L._hasValidationWidgetsValue = void 0 || void 0 || void 0), L._hasValidationWidgetsValue
        }
        setInputs(e) {
            "TransationsDate" in e && (this.variables.transationsDateIn = e.TransationsDate, "_transationsDateInDataFetchStatus" in e && (this.variables._transationsDateInDataFetchStatus = e._transationsDateInDataFetchStatus)), "TransactionsList" in e && (this.variables.transactionsListIn = e.TransactionsList, "_transactionsListInDataFetchStatus" in e && (this.variables._transactionsListInDataFetchStatus = e._transactionsListInDataFetchStatus))
        }
    };
s(L, "Model");
var z = L;
z._hasValidationWidgetsValue = void 0;
var be = new h.Model.ModelFactory(z);
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
    ye = {
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

function ie(k, e, o, r) {
    navigator.clipboard.writeText(k.TextToCopy).catch(l => {
        console.error("Failed to copy text: ", l)
    })
}
s(ie, "default");
var b = A; {
    let e = class e extends b.Controller.BaseViewController {
        constructor(r, l, t) {
            super(r, l, t, ye);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onTransactionClick$Action() {
            return this.hasOwnProperty("__onTransactionClick$Action") || (this.__onTransactionClick$Action = function(r) {
                var l = this.model,
                    t = this.controller,
                    f = this.idService;
                return b.Logger.startActiveSpan("OnTransactionClick", function(u) {
                    return u && (u.setAttribute("code.function", "OnTransactionClick"), u.setAttribute("outsystems.function.key", "28ace539-5973-403d-8cf2-bd6829089d60"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnTransactionClick"), r = t.callContext(r), b.Flow.executeAsyncFlow(function() {
                            return b.Flow.executeSequence(function() {
                                if (l.variables.transactionsByDateVar.getCurrent(r.iterationContext).isPendingAttr) return t.onClickEvent$Action(l.variables.transactionsByDateVar.getCurrent(r.iterationContext), r)
                            })
                        })
                    }, function() {
                        u && u.end()
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
                    f = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(u) {
                    u && (u.setAttribute("code.function", "OnReady"), u.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var v = new b.DataTypes.VariableHolder,
                            c = new b.DataTypes.VariableHolder;
                        l.variables.isLoadingVar = !0, v.value = b.SystemActions.listFilter(l.variables.transactionsListIn, function(_) {
                            return _.dateAttr === l.variables.transationsDateIn
                        }, r), c.value = j.getBalanceByLoginId$Action(R.getActiveWalletLoginId(), r), l.variables.transactionsByDateVar = v.value.filteredListOut, l.variables.currencyVar = c.value.currencyOut, l.variables.isLoadingVar = !1
                    } finally {
                        u && u.end()
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
                    f = this.idService;
                return b.Logger.startActiveSpan("TooltipInitialized", function(u) {
                    u && (u.setAttribute("code.function", "TooltipInitialized"), u.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipInitialized"), r = t.callContext(r), b.Logger.startActiveSpan("ClipboardAction", function(v) {
                            v && (v.setAttribute("code.function", "ClipboardAction"), v.setAttribute("outsystems.function.key", "edd05965-06ea-49dc-baea-4a23ca0750e2"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ie, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: b.DataConversion.JSNodeParamConverter.to(b.BuiltinFunctions.longIntegerToText(l.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), b.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__tooltipInitialized$Action
        }
        set _tooltipInitialized$Action(r) {
            this.__tooltipInitialized$Action = r
        }
        onTransactionClick$Action(r) {
            var l = this.controller;
            return b.Logger.startActiveSpan("OnTransactionClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnTransactionClick"), t.setAttribute("outsystems.function.key", "28ace539-5973-403d-8cf2-bd6829089d60"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return l.safeExecuteClientAction(l._onTransactionClick$Action, r)
                }, function() {
                    t && t.end()
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
                    f = this.idService;
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
                    f = this.idService;
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
    let k = e;
    _e = k
}
var _e, he = new b.Controller.ControllerFactory(_e, de);
var P = A,
    $ = D.PlaceholderContent,
    Ve = D.IteratorPlaceholderContent,
    V = class V extends M.BaseWebBlock {
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
            return [I, W, J]
        }
        get modelFactory() {
            return be
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
                f = o.callContext(),
                u = V.ifWidget,
                v = V.textWidget,
                c = V.asPrimitiveValue,
                _ = V.getTranslation,
                p = this;
            return g.createElement("div", this.getRootNodeProperties(), u(e.variables.isLoadingVar, !1, this, function() {
                return [g.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(I, {
                    getOwnerSpan: s(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(n) {
                            o.handleError(n)
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
                }), g.createElement(I, {
                    getOwnerSpan: s(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(n) {
                            o.handleError(n)
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
                })), g.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(I, {
                    getOwnerSpan: s(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(n) {
                            o.handleError(n)
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
                }), g.createElement(I, {
                    getOwnerSpan: s(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(n) {
                            o.handleError(n)
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
                return [g.createElement(N, {
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
                        content: new Ve(function(n, a) {
                            return [g.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [c(e.variables._transactionsListInDataFetchStatus), c(e.variables.transactionsListIn.getCurrent(a.iterationContext).transaction_idAttr), c(R.getAccountType()), c(e.variables.currencyVar), c(e.variables.transactionsByDateVar.length), c(e.variables.transactionsByDateVar.getCurrentRowNumber(a.iterationContext)), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).longcodeAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).fromAttr.platformAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).toAttr.platformAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).transaction_idAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr), c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).isPendingAttr)]
                            }, g.createElement(U, {
                                onClick: s(function() {
                                    return Promise.resolve().then(function() {
                                        var C = a.clone();
                                        return o.onTransactionClick$Action(o.callContext(C))
                                    })
                                }, "onClick"),
                                style: e.getCachedValue(n.getId("ListItem1.Style"), function() {
                                    return "wallet-transaction-item " + (e.variables.transactionsByDateVar.getCurrent(a.iterationContext).isPendingAttr ? "cursor-pointer" : "")
                                }, function() {
                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).isPendingAttr
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: n,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: $.Empty,
                                    content: new $(function() {
                                        return [g.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }, u(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).isPendingAttr, !1, this, function() {
                                            return [g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: t
                                            }, g.createElement(y, {
                                                style: "wallet-transaction-action-type",
                                                value: e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            }), g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex gap-s align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: t
                                            }, g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-radius: 100%; height: 6px;"
                                                },
                                                gridProperties: {
                                                    classes: "OSInline",
                                                    width: "6px"
                                                },
                                                style: e.getCachedValue(n.getId("VvRnhwtxSUOaalTFOZsH1Q.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr === "In review" ? "background-yellow" : e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr === "In process" ? "background-info" : e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr === "Unsuccessful" ? "background-red-dark" : ""
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: t
                                            }), g.createElement(y, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: "wallet-transaction-action-type text-neutral-7",
                                                value: e.variables.transactionsByDateVar.getCurrent(a.iterationContext).statusAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: t
                                            }))), g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: t
                                            }, g.createElement(y, {
                                                value: e.variables.currencyVar + " Wallets",
                                                _idProps: {
                                                    service: n,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: t
                                            }), g.createElement(y, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(n.getId("0p+SaclaGkmGx8gAbgeNDg.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "deposit" ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr
                                                }),
                                                value: e.getCachedValue(n.getId("0p+SaclaGkmGx8gAbgeNDg.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "deposit" ? "+" + H.formatMoney$Action(P.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", a).formattedNumberOut + " " + e.variables.currencyVar : "-" + H.formatMoney$Action(P.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", a).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }, function() {
                                            return [g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: t
                                            }, g.createElement(y, {
                                                style: "wallet-transaction-action-type",
                                                value: e.getCachedValue(n.getId("k7tzKP2BbUCMSyAHPCYkvw.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr.gt(P.BuiltinFunctions.integerToDecimal(0)) ? "Transfer from" : "Transfer to" : R.getAccountType() === "demo" && (e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "deposit" || e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "withdrawal") ? "Reset Balance" : e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr
                                                }, function() {
                                                    return R.getAccountType()
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: t
                                            }), u(!e.variables.transactionsListIn.getCurrent(a.iterationContext).transaction_idAttr.equals(P.BuiltinFunctions.integerToLongInteger(P.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                                return [g.createElement(W, {
                                                    getOwnerSpan: s(function() {
                                                        return p.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return p.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Position: S.position.topLeft,
                                                        Trigger: S.trigger.onClick
                                                    },
                                                    events: {
                                                        _handleError: s(function(C) {
                                                            o.handleError(C)
                                                        }, "_handleError"),
                                                        onToggle$Action: s(function(C, oe) {
                                                            var Pe = a.clone();
                                                            o.tooltipInitialized$Action(o.callContext(Pe))
                                                        }, "onToggle$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: l
                                                    },
                                                    _idProps: {
                                                        service: n,
                                                        uuid: "22",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        content: new $(function() {
                                                            return [g.createElement(y, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                style: "wallet-transaction-action-type",
                                                                value: "Ref.ID:" + P.BuiltinFunctions.longIntegerToText(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).transaction_idAttr),
                                                                _idProps: {
                                                                    service: n,
                                                                    uuid: "23"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })]
                                                        }),
                                                        tooltip: new $(function() {
                                                            return [v(_("8xjGkhMAtkuBadfD3CoBiQ#Value", "Copied"))]
                                                        })
                                                    },
                                                    _dependencies: [c(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).transaction_idAttr)]
                                                })]
                                            }, function() {
                                                return []
                                            })), g.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: t
                                            }, g.createElement(y, {
                                                value: e.getCachedValue(n.getId("vzFP_CqmHUO0+7YCDZ6dKw.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(a.iterationContext).toAttr.platformAttr === P.BuiltinFunctions.nullTextIdentifier() && e.variables.transactionsByDateVar.getCurrent(a.iterationContext).fromAttr.platformAttr === P.BuiltinFunctions.nullTextIdentifier() ? e.variables.transactionsByDateVar.getCurrent(a.iterationContext).longcodeAttr : e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr.lt(P.BuiltinFunctions.integerToDecimal(0)) ? e.variables.transactionsByDateVar.getCurrent(a.iterationContext).toAttr.platformAttr : e.variables.transactionsByDateVar.getCurrent(a.iterationContext).fromAttr.platformAttr : e.variables.currencyVar + " Wallets"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).toAttr.platformAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).fromAttr.platformAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).longcodeAttr
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: t
                                            }), g.createElement(y, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(n.getId("1joVmOSuUEqJmZjl2HfdYA.Style"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr.gt(P.BuiltinFunctions.integerToDecimal(0)) ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr
                                                }),
                                                value: e.getCachedValue(n.getId("1joVmOSuUEqJmZjl2HfdYA.Value"), function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr.gt(P.BuiltinFunctions.integerToDecimal(0)) ? "+" + H.formatMoney$Action(P.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", a).formattedNumberOut + " " + e.variables.currencyVar : H.formatMoney$Action(P.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", a).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.transactionsByDateVar.getCurrent(a.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }))]
                                    }),
                                    rightActions: $.Empty
                                }
                            }), g.createElement(d, {
                                align: 0,
                                animate: !0,
                                style: "padding-x-base background-neutral-1",
                                visible: e.variables.transactionsByDateVar.getCurrentRowNumber(a.iterationContext) !== e.variables.transactionsByDateVar.length - 1,
                                _idProps: {
                                    service: n,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, g.createElement(J, {
                                getOwnerSpan: s(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: S.color.neutral3,
                                    Space: S.space.none
                                },
                                events: {
                                    _handleError: s(function(C) {
                                        o.handleError(C)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: l
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "28",
                                    alias: "6"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })))]
                        }, f, r, "1")
                    },
                    _dependencies: [c(e.variables._transactionsListInDataFetchStatus), c(e.variables.transactionsListIn.getCurrent(f.iterationContext).transaction_idAttr), c(R.getAccountType()), c(e.variables.currencyVar)]
                })]
            }))
        }
    };
s(V, "View");
var ne = V,
    ae = ne;
var m = A,
    E = D.PlaceholderContent,
    De = D.IteratorPlaceholderContent,
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
            return [Z, X, K, ae, W]
        }
        get modelFactory() {
            return ue
        }
        get controllerFactory() {
            return ge
        }
        get title() {
            let e = this.model,
                o = this.controller,
                r = this.idService,
                l = o.validationService,
                t = o.callContext(),
                f = x.asPrimitiveValue,
                u = x.getTranslation,
                v = this;
            return m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("p0dXA5rf3EG2NUYra7BP3w#TitleExpression.2118442357.1", "Transactions")
        }
        internalRender() {
            let e = this.model,
                o = this.controller,
                r = this.idService,
                l = o.validationService,
                t = this.widgetsRecordProvider,
                f = o.callContext(),
                u = x.ifWidget,
                v = x.textWidget,
                c = x.asPrimitiveValue,
                _ = x.getTranslation,
                p = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(Z, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(n) {
                        o.handleError(n)
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
                    content: new E(function() {
                        return [i.createElement(X, {
                            getOwnerSpan: s(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("1dw8hqdk3keFKAqmHeBEEw#Value.2118442357.1", "Transactions")
                            },
                            events: {
                                _handleError: s(function(n) {
                                    o.handleError(n)
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
                                walletOverlayPageContent: new E(function() {
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
                                    }, i.createElement(T, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [v(_("y0td2RELukOpHNdWu7Z0Pw#Value", "Transactions"))],
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
                                    }, u(R.getAccountType() === "real", !1, this, function() {
                                        return [i.createElement(q, {
                                            _validationProps: {
                                                validationService: l
                                            },
                                            enabled: !0,
                                            mandatory: !1,
                                            onChange: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var n = f.clone();
                                                    return o.onReady$Action(o.callContext(n))
                                                })
                                            }, "onChange"),
                                            style: "wallets-filter-buttons",
                                            variable: e.createVariable(m.DataTypes.DataTypes.Text, e.variables.sortVar, function(n) {
                                                e.variables.sortVar = n
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
                                        }, v(_("hlWEyxxL3kG3QfBrx654Eg#Value", "All"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "withdrawal_pending",
                                            visible: e.variables.isCryptoVar,
                                            _idProps: {
                                                service: r,
                                                name: "Pending"
                                            },
                                            _widgetRecordProvider: t
                                        }, v(_("Vh1oU_5Jx0qm96Dt_GzcQQ#Value", "Pending"))), i.createElement(w, {
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
                                        }, v(_("Kq0lMCe6MUS71k+qubUZug#Value", "Deposit"))), i.createElement(w, {
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
                                        }, v(_("kmAUjEtiuk+Hg6sQDyh7Lg#Value", "Withdraw"))), i.createElement(w, {
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
                                        }, v(_("bJ4ZfptGikW9YdVsl3Ym3g#Value", "Transfer"))))]
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
                                                    var n = f.clone();
                                                    return o.onReady$Action(o.callContext(n))
                                                })
                                            }, "onChange"),
                                            style: '"button-group"',
                                            variable: e.createVariable(m.DataTypes.DataTypes.Text, e.variables.actionTypeValueVar, function(n) {
                                                e.variables.actionTypeValueVar = n
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
                                        }, v(_("WTulOKdWiEekiWOUjhbPlQ#Value", "All"))), i.createElement(w, {
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
                                        }, v(_("OjSDz9AGOkCCTTXzKl9tig#Value", "Transfer"))), i.createElement(w, {
                                            enabled: !e.variables.isLoadingVar,
                                            extendedProperties: {
                                                style: "height: 32px; margin-left: 8px;"
                                            },
                                            style: "btn wallet-transaction-btn btn-small",
                                            value: "reset balance",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "Deposit2"
                                            },
                                            _widgetRecordProvider: t
                                        }, v(_("YfyKr2t6skeW4ucndbqnpg#Value", "Reset Balance"))))]
                                    })), u(e.variables.isLoadingVar, !1, this, function() {
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
                                                return p.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: s(function() {
                                                return p.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: s(function(n) {
                                                    o.handleError(n)
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
                                        }, u(e.variables.transactionsVar.length < 1, !1, this, function() {
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
                                                image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: t
                                            })), i.createElement(T, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [v(_("R5vETfYBYUWiCHLBsjKLqA#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: r,
                                                    uuid: "22"
                                                },
                                                _widgetRecordProvider: t
                                            }), i.createElement(T, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [v(_("M4rt3Iir10eX40aqD1n_lA#Value", "Your transactions will appear here."))],
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
                                                    content: new De(function(n, a) {
                                                        return [i.createElement(U, {
                                                            style: '"list-item"',
                                                            triggerActionOnFullSwipeLeft: !1,
                                                            triggerActionOnFullSwipeRight: !1,
                                                            _idProps: {
                                                                service: n,
                                                                name: "ListItem"
                                                            },
                                                            _widgetRecordProvider: t,
                                                            placeholders: {
                                                                leftActions: E.Empty,
                                                                content: new E(function() {
                                                                    return [i.createElement(d, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column gap-s",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: n,
                                                                            uuid: "26"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, i.createElement(y, {
                                                                        extendedProperties: {
                                                                            style: "font-size: 14px;"
                                                                        },
                                                                        value: e.variables.datesListVar.getCurrent(a.iterationContext),
                                                                        _idProps: {
                                                                            service: n,
                                                                            uuid: "27"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }), i.createElement(d, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: n,
                                                                            uuid: "28"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, i.createElement(ae, {
                                                                        getOwnerSpan: s(function() {
                                                                            return p.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: s(function() {
                                                                            return p.getChildSpan("destroy")
                                                                        }, "getOwnerDisposeSpan"),
                                                                        inputs: {
                                                                            TransactionsList: e.variables.transactionsVar,
                                                                            TransationsDate: e.variables.datesListVar.getCurrent(a.iterationContext)
                                                                        },
                                                                        events: {
                                                                            _handleError: s(function(C) {
                                                                                o.handleError(C)
                                                                            }, "_handleError"),
                                                                            onClickEvent$Action: s(function(C) {
                                                                                var oe = a.clone();
                                                                                o.walletsTransationsListByDateOnClickEvent$Action(C, o.callContext(oe))
                                                                            }, "onClickEvent$Action")
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: l
                                                                        },
                                                                        _idProps: {
                                                                            service: n,
                                                                            uuid: "29",
                                                                            alias: "4"
                                                                        },
                                                                        _widgetRecordProvider: t,
                                                                        _dependencies: []
                                                                    })))]
                                                                }),
                                                                rightActions: E.Empty
                                                            },
                                                            _dependencies: [c(e.variables.transactionsVar), c(e.variables.datesListVar.getCurrent(a.iterationContext))]
                                                        })]
                                                    }, f, r, "1")
                                                },
                                                _dependencies: [c(e.variables.transactionsVar)]
                                            })]
                                        }))]
                                    }))]
                                }),
                                mobileFooterContent: E.Empty
                            },
                            _dependencies: [c(e.variables.datesListVar), c(e.variables.transactionsVar), c(e.variables.actionTypeValueVar), c(e.variables.isCryptoVar), c(e.variables.isLoadingVar), c(e.variables.sortVar), c(R.getAccountType())]
                        })]
                    })
                },
                _dependencies: [c(e.variables.datesListVar), c(e.variables.transactionsVar), c(e.variables.actionTypeValueVar), c(e.variables.isCryptoVar), c(e.variables.isLoadingVar), c(e.variables.sortVar), c(R.getAccountType())]
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
                        var n = f.clone();
                        o.closeIconOnClick$Action(o.callContext(n))
                    }, "onClick")
                },
                image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: r,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            }), i.createElement(T, {
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
                value: m.BuiltinFunctions.longIntegerToText(e.variables.currentTransactionDetailsVar.refIdAttr),
                _idProps: {
                    service: r,
                    uuid: "45"
                },
                _widgetRecordProvider: t
            }), i.createElement(W, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Trigger: S.trigger.onClick,
                    Position: S.position.topLeft
                },
                events: {
                    _handleError: s(function(n) {
                        o.handleError(n)
                    }, "_handleError"),
                    onToggle$Action: s(function(n, a) {
                        var C = f.clone();
                        o.clipboardAction$Action(o.callContext(C))
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
                    content: new E(function() {
                        return [i.createElement(O, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-width: 0px;"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var n = f.clone();
                                o.clipboardAction$Action(o.callContext(n))
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
                            image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.clipboard_bold.svg"),
                            type: 0,
                            _idProps: {
                                service: r,
                                uuid: "48"
                            },
                            _widgetRecordProvider: t
                        }))]
                    }),
                    tooltip: new E(function() {
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
                    return m.BuiltinFunctions.formatDecimal(e.variables.currentTransactionDetailsVar.amountAttr, 8, ".", ".") + " " + e.variables.currencyVar
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
                    var n = f.clone();
                    o.addressLinkOnClick$Action(e.variables.currentTransactionDetailsVar.addressUrlAttr, o.callContext(n))
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
                    return m.BuiltinFunctions.toUpper(m.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.addressHashAttr, 0, 4) + "...." + m.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.addressHashAttr, m.BuiltinFunctions.length(e.variables.currentTransactionDetailsVar.addressHashAttr) - 4, 4))
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
            }, "Transaction hash", u(e.variables.currentTransactionDetailsVar.transactionHashAttr === m.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
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
                        var n = f.clone();
                        o.addressLinkOnClick$Action(e.variables.currentTransactionDetailsVar.transactionUrlAttr, o.callContext(n))
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
                        return m.BuiltinFunctions.toUpper(m.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.transactionHashAttr, 0, 4) + "...." + m.BuiltinFunctions.substr(e.variables.currentTransactionDetailsVar.transactionHashAttr, m.BuiltinFunctions.length(e.variables.currentTransactionDetailsVar.transactionHashAttr) - 4, 4))
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
            }, i.createElement(O, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: s(function() {
                    var n = f.clone();
                    o.cancelTransactionOnClick$Action(o.callContext(n))
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
            }, i.createElement(T, {
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
            }), i.createElement(O, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: unset; border-width: 0px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var n = f.clone();
                    o.closeCancelWithdrawalModal$Action(o.callContext(n))
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "68"
                },
                _widgetRecordProvider: t
            }, i.createElement(B, {
                image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "69"
                },
                _widgetRecordProvider: t
            }))), i.createElement(T, {
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
            }, i.createElement(O, {
                enabled: !0,
                isDefault: !1,
                onClick: s(function() {
                    var n = f.clone();
                    o.closeCancelWithdrawalModal$Action(o.callContext(n))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "72"
                },
                _widgetRecordProvider: t
            }, "Keep transaction"), i.createElement(O, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var n = f.clone();
                        return o.confirmCancelTransactionOnClick$Action(m.BuiltinFunctions.longIntegerToText(e.variables.currentTransactionDetailsVar.refIdAttr), o.callContext(n))
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
var se = x,
    ft = se;
export {
    ft as
    default
};