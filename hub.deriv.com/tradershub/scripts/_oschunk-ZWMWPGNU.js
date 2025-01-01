import {
    a as U
} from "./_oschunk-XYZMD3X7.js";
import {
    a as f
} from "./_oschunk-QYZYO3AQ.js";
import {
    a as W
} from "./_oschunk-3DUHVNXP.js";
import {
    a as S
} from "./_oschunk-5ETXRNLC.js";
import {
    b as B,
    h as l,
    j as b,
    k,
    l as M,
    r as $,
    y as J
} from "./_oschunk-42NACYKQ.js";
import {
    a as N
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as K,
    g as z,
    i as x
} from "./_oschunk-RKYF3TWC.js";
import {
    a as y,
    b as P,
    c as O
} from "./_oschunk-DOFMR6EA.js";
import {
    Le as V,
    a as m
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as A
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as q
} from "./_oschunk-DVBKI63I.js";
var s = q(K());
var Z = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0632\u064A\u062F",
        "8mtxH2av4EStFlTdZwal0Q#Value": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    X = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "Mehr anzeigen",
        "8mtxH2av4EStFlTdZwal0Q#Value": "Kopiert"
    },
    Y = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "Ver m\xE1s",
        "8mtxH2av4EStFlTdZwal0Q#Value": "Copiado"
    },
    ee = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "Vedi di pi\xF9",
        "8mtxH2av4EStFlTdZwal0Q#Value": "Copiato"
    },
    te = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "Zobacz wi\u0119cej",
        "8mtxH2av4EStFlTdZwal0Q#Value": "Skopiowano"
    },
    re = {
        "x7JPzp19M0ixHqAi5o22Ow#Value": "Ver mais",
        "8mtxH2av4EStFlTdZwal0Q#Value": "Copiado"
    },
    j = {
        "ar-001": {
            translations: Z,
            isRTL: !0
        },
        "de-DE": {
            translations: X,
            isRTL: !1
        },
        "es-ES": {
            translations: Y,
            isRTL: !1
        },
        "it-IT": {
            translations: ee,
            isRTL: !1
        },
        "pl-PL": {
            translations: te,
            isRTL: !1
        },
        "pt-PT": {
            translations: re,
            isRTL: !1
        }
    };

function I(h, e, u, r) {
    let o = JSON.parse(h.TransactionsList);
    h.RecentTransactionsList = JSON.stringify(o.slice(0, 5))
}
a(I, "default");

function D(h, e, u, r) {
    navigator.clipboard.writeText(h.TextToCopy).catch(o => {
        console.error("Failed to copy text: ", o)
    })
}
a(D, "default");
var c = A; {
    let e = class e extends c.Controller.BaseViewController {
        constructor(r, o, t) {
            super(r, o, t, j);
            var C = this.controller;
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
                    t = this.controller,
                    C = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(v) {
                    return v && (v.setAttribute("code.function", "OnReady"), v.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var _ = new c.DataTypes.VariableHolder,
                            p = new c.DataTypes.VariableHolder,
                            T = new c.DataTypes.VariableHolder,
                            d = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            n = new c.DataTypes.VariableHolder(new(c.Controller.BaseController.getJSONDeserializeOutputType(V)));
                        return c.Flow.executeAsyncFlow(function() {
                            return o.flush(), O.sendAuthorize$Action(!1, r).then(function(i) {
                                _.value = i
                            }).then(function() {
                                p.value = O.getBalanceByLoginId$Action(y.getActiveWalletLoginId(), r), d.value.jSONOut = c.JSONUtils.serializeToJSON(o.variables.transactionsListIn, !1, !1), T.value = c.Logger.startActiveSpan("ModifiedTransactionsList", function(i) {
                                    i && (i.setAttribute("code.function", "ModifiedTransactionsList"), i.setAttribute("outsystems.function.key", "e2438b4a-16cb-4c52-8ed8-1e550f5c9fe6"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(I, "ModifiedTransactionsList", "OnReady", {
                                            TransactionsList: c.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, c.DataTypes.DataTypes.Text),
                                            RecentTransactionsList: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text)
                                        }, function(R) {
                                            var L = new(t.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransactionList.OnReady$modifiedTransactionsListJSResult"));
                                            return L.recentTransactionsListOut = c.DataConversion.JSNodeParamConverter.from(R.RecentTransactionsList, c.DataTypes.DataTypes.Text), L
                                        }, {}, {})
                                    } finally {
                                        i && i.end()
                                    }
                                }, 1), n.value.dataOut = c.JSONUtils.deserializeFromJSON(T.value.recentTransactionsListOut, V, !1), o.variables.recentTransactionsListVar = n.value.dataOut, o.variables.currencyVar = p.value.currencyOut, o.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        v && v.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _tooltipInitialized$Action() {
            return this.hasOwnProperty("__tooltipInitialized$Action") || (this.__tooltipInitialized$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    C = this.idService;
                return c.Logger.startActiveSpan("TooltipInitialized", function(v) {
                    v && (v.setAttribute("code.function", "TooltipInitialized"), v.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipInitialized"), r = t.callContext(r), c.Logger.startActiveSpan("ClipboardAction", function(_) {
                            _ && (_.setAttribute("code.function", "ClipboardAction"), _.setAttribute("outsystems.function.key", "67e6fc2e-7f48-48a9-8ecd-e438a59b62d8"), _.setAttribute("outsystems.function.owner.name", "tradershub"), _.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(D, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: c.DataConversion.JSNodeParamConverter.to(c.BuiltinFunctions.longIntegerToText(o.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), c.DataTypes.DataTypes.Text)
                                }, function(p) {}, {}, {})
                            } finally {
                                _ && _.end()
                            }
                        }, 1)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__tooltipInitialized$Action
        }
        set _tooltipInitialized$Action(r) {
            this.__tooltipInitialized$Action = r
        }
        onReady$Action(r) {
            var o = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        tooltipInitialized$Action(r) {
            var o = this.controller;
            return c.Logger.startActiveSpan("TooltipInitialized__proxy", function(t) {
                t && (t.setAttribute("code.function", "TooltipInitialized"), t.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._tooltipInitialized$Action, r)
                } finally {
                    t && t.end()
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
                    t = this.model,
                    C = this.idService;
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return O.defaultTimeout
        }
    };
    a(e, "ControllerInner");
    let h = e;
    F = h, F.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransactionList.OnReady$modifiedTransactionsListJSResult", [{
        name: "RecentTransactionsList",
        attrName: "recentTransactionsListOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var F, Q = new c.Controller.ControllerFactory(F, N);
var g = A,
    E = x.PlaceholderContent,
    ne = x.IteratorPlaceholderContent,
    w = class w extends z.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsTransactionList"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransactionList",
                functionKey: "a35a5f01-4f55-4d47-967b-871f11552948",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransactionList.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f, S, W]
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return Q
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                u = this.controller,
                r = this.idService,
                o = u.validationService,
                t = this.widgetsRecordProvider,
                C = u.callContext(),
                v = w.ifWidget,
                _ = w.textWidget,
                p = w.asPrimitiveValue,
                T = w.getTranslation,
                d = this;
            return s.createElement("div", this.getRootNodeProperties(), v(e.variables.isLoadingVar, !1, this, function() {
                return [s.createElement(l, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "4",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "5",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "7",
                        alias: "3"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "8",
                        alias: "4"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })))), s.createElement(S, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Color: m.color.neutral3,
                        Space: m.space.none
                    },
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "9",
                        alias: "5"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "13",
                        alias: "6"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "14",
                        alias: "7"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "16",
                        alias: "8"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "17",
                        alias: "9"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })))), s.createElement(S, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: m.space.none,
                        Color: m.color.neutral3
                    },
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "18",
                        alias: "10"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "20"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "22",
                        alias: "11"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "23",
                        alias: "12"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "25",
                        alias: "13"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), s.createElement(f, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "26",
                        alias: "14"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })))), s.createElement(S, {
                    getOwnerSpan: a(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: m.space.none,
                        Color: m.color.neutral3
                    },
                    events: {
                        _handleError: a(function(n) {
                            u.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: r,
                        uuid: "27",
                        alias: "15"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            }, function() {
                return [s.createElement(l, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }, s.createElement(k, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: e.variables.recentTransactionsListVar,
                    style: e.getCachedValue(r.getId("ecRzVWwp7EusnKSdPcNstA.Style"), function() {
                        return "list list-group " + (e.variables.transactionsListIn.length > 6 ? "wallet-transaction-container-no-border" : "wallet-transaction-container-border")
                    }, function() {
                        return e.variables.transactionsListIn.length
                    }),
                    tag: "div",
                    _idProps: {
                        service: r,
                        uuid: "29"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: g.Model.calculateDataFetchStatus(e.variables._transactionsListInDataFetchStatus),
                    placeholders: {
                        content: new ne(function(n, i) {
                            return [s.createElement(l, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [p(e.variables._transactionsListInDataFetchStatus), p(e.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr), p(y.getAccountType()), p(e.variables.currencyVar), p(e.variables.recentTransactionsListVar.length), p(e.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext)), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.platformAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr), p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).isPendingAttr)]
                            }, s.createElement(M, {
                                style: "wallet-transaction-item",
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: n,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: E.Empty,
                                    content: new E(function() {
                                        return [s.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "32"
                                            },
                                            _widgetRecordProvider: t
                                        }, v(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).isPendingAttr, !1, this, function() {
                                            return [s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "33"
                                                },
                                                _widgetRecordProvider: t
                                            }, s.createElement(b, {
                                                style: "wallet-transaction-action-type",
                                                value: e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "34"
                                                },
                                                _widgetRecordProvider: t
                                            }), s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex gap-s align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "35"
                                                },
                                                _widgetRecordProvider: t
                                            }, s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-radius: 100%; height: 6px;"
                                                },
                                                gridProperties: {
                                                    classes: "OSInline",
                                                    width: "6px"
                                                },
                                                style: e.getCachedValue(n.getId("g4kqGa5UPkOPsoUzSvyDfQ.Style"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr === "In review" ? "background-yellow" : e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr === "In process" ? "background-info" : e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr === "Unsuccessful" ? "background-red-dark" : ""
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "36"
                                                },
                                                _widgetRecordProvider: t
                                            }), s.createElement(b, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: "wallet-transaction-action-type",
                                                value: e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).statusAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "37"
                                                },
                                                _widgetRecordProvider: t
                                            }))), s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "38"
                                                },
                                                _widgetRecordProvider: t
                                            }, s.createElement(b, {
                                                value: e.variables.currencyVar + " Wallet",
                                                _idProps: {
                                                    service: n,
                                                    uuid: "39"
                                                },
                                                _widgetRecordProvider: t
                                            }), s.createElement(b, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(n.getId("vi2Lvl7zuUadwR5F9pGa1Q.Style"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "deposit" ? "font-bold text-green" : "font-bold text-red"
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                                }),
                                                value: e.getCachedValue(n.getId("vi2Lvl7zuUadwR5F9pGa1Q.Value"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "deposit" ? "+" + P.formatMoney$Action(g.BuiltinFunctions.decimalToText(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", i).formattedNumberOut + " " + e.variables.currencyVar : "-" + P.formatMoney$Action(g.BuiltinFunctions.decimalToText(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", i).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "40"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }, function() {
                                            return [s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "41"
                                                },
                                                _widgetRecordProvider: t
                                            }, s.createElement(b, {
                                                style: "wallet-transaction-action-type",
                                                value: e.getCachedValue(n.getId("7IN9LVlVNkiDgy6Jii82IA.Value"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "transfer" ? e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.lt(g.BuiltinFunctions.integerToDecimal(0)) ? "Transfer to" : "Transfer from" : y.getAccountType() === "demo" && (e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "deposit" || e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "withdrawal") ? "Reset Balance" : e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                                }, function() {
                                                    return y.getAccountType()
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "42"
                                                },
                                                _widgetRecordProvider: t
                                            }), v(!e.variables.transactionsListIn.getCurrent(i.iterationContext).transaction_idAttr.equals(g.BuiltinFunctions.integerToLongInteger(g.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                                return [s.createElement(W, {
                                                    getOwnerSpan: a(function() {
                                                        return d.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return d.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Trigger: m.trigger.onClick,
                                                        Position: m.position.topLeft
                                                    },
                                                    events: {
                                                        _handleError: a(function(R) {
                                                            u.handleError(R)
                                                        }, "_handleError"),
                                                        onToggle$Action: a(function(R, L) {
                                                            var G = i.clone();
                                                            u.tooltipInitialized$Action(u.callContext(G))
                                                        }, "onToggle$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: o
                                                    },
                                                    _idProps: {
                                                        service: n,
                                                        uuid: "43",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        content: new E(function() {
                                                            return [s.createElement(b, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                style: "wallet-transaction-action-type",
                                                                value: "Ref.ID:" + g.BuiltinFunctions.longIntegerToText(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr),
                                                                _idProps: {
                                                                    service: n,
                                                                    uuid: "44"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })]
                                                        }),
                                                        tooltip: new E(function() {
                                                            return [_(T("8mtxH2av4EStFlTdZwal0Q#Value", "Copied"))]
                                                        })
                                                    },
                                                    _dependencies: [p(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).transaction_idAttr)]
                                                })]
                                            }, function() {
                                                return []
                                            })), s.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "45"
                                                },
                                                _widgetRecordProvider: t
                                            }, s.createElement(b, {
                                                value: e.getCachedValue(n.getId("Ql2Blf0_+keEKwHr0DSfSw.Value"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr === "transfer" ? e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr === g.BuiltinFunctions.nullTextIdentifier() && e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.platformAttr === g.BuiltinFunctions.nullTextIdentifier() ? "Archived account" : e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.lt(g.BuiltinFunctions.integerToDecimal(0)) ? e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr : e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.platformAttr : e.variables.currencyVar + " Wallets"
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).action_typeAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).toAttr.platformAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).fromAttr.platformAttr
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "46"
                                                },
                                                _widgetRecordProvider: t
                                            }), s.createElement(b, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                style: e.getCachedValue(n.getId("pHUVlLKXc0yKtBXyfJzasA.Style"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.gt(g.BuiltinFunctions.integerToDecimal(0)) ? "font-bold text-green" : "font-bold text-red"
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                                }),
                                                value: e.getCachedValue(n.getId("pHUVlLKXc0yKtBXyfJzasA.Value"), function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr.gt(g.BuiltinFunctions.integerToDecimal(0)) ? "+" + P.formatMoney$Action(g.BuiltinFunctions.decimalToText(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", i).formattedNumberOut + " " + e.variables.currencyVar : P.formatMoney$Action(g.BuiltinFunctions.decimalToText(e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr), e.variables.currencyVar, "en-US", "", i).formattedNumberOut + " " + e.variables.currencyVar
                                                }, function() {
                                                    return e.variables.recentTransactionsListVar.getCurrent(i.iterationContext).amountAttr
                                                }, function() {
                                                    return e.variables.currencyVar
                                                }),
                                                _idProps: {
                                                    service: n,
                                                    uuid: "47"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        }))]
                                    }),
                                    rightActions: E.Empty
                                }
                            }), s.createElement(l, {
                                align: 0,
                                animate: !0,
                                style: "padding-x-base background-neutral-1",
                                visible: e.variables.recentTransactionsListVar.getCurrentRowNumber(i.iterationContext) !== e.variables.recentTransactionsListVar.length - 1,
                                _idProps: {
                                    service: n,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: t
                            }, s.createElement(S, {
                                getOwnerSpan: a(function() {
                                    return d.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return d.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: m.color.neutral3,
                                    Space: m.space.none
                                },
                                events: {
                                    _handleError: a(function(R) {
                                        u.handleError(R)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "49",
                                    alias: "17"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })))]
                        }, C, r, "1")
                    },
                    _dependencies: [p(e.variables._transactionsListInDataFetchStatus), p(e.variables.transactionsListIn.getCurrent(C.iterationContext).transaction_idAttr), p(y.getAccountType()), p(e.variables.currencyVar)]
                }), v(e.variables.isLoadingVar, !1, this, function() {
                    return []
                }, function() {
                    return [s.createElement(l, {
                        align: 0,
                        animate: !0,
                        visible: e.variables.transactionsListIn.length > 6,
                        _idProps: {
                            service: r,
                            uuid: "50"
                        },
                        _widgetRecordProvider: t,
                        visible_dataFetchStatus: g.Model.calculateDataFetchStatus(e.variables._transactionsListInDataFetchStatus)
                    }, s.createElement(l, {
                        align: 0,
                        animate: !1,
                        style: "padding-x-base background-neutral-1",
                        visible: !0,
                        _idProps: {
                            service: r,
                            uuid: "51"
                        },
                        _widgetRecordProvider: t
                    }, s.createElement(S, {
                        getOwnerSpan: a(function() {
                            return d.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: a(function() {
                            return d.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Space: m.space.none,
                            Color: m.color.neutral3
                        },
                        events: {
                            _handleError: a(function(n) {
                                u.handleError(n)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: o
                        },
                        _idProps: {
                            service: r,
                            uuid: "52",
                            alias: "18"
                        },
                        _widgetRecordProvider: t,
                        _dependencies: []
                    })), s.createElement(B, {
                        enabled: !0,
                        isDefault: !1,
                        onClick: a(function() {
                            try {
                                g.Navigation.navigateTo(g.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default), null, !0)
                            } catch (n) {
                                if (n.name !== "RedirectOccurredException") throw n
                            }
                        }, "onClick"),
                        style: "wallet-transaction-btn cursor-pointer",
                        visible: !0,
                        _idProps: {
                            service: r,
                            uuid: "53"
                        },
                        _widgetRecordProvider: t
                    }, s.createElement(l, {
                        align: 0,
                        animate: !1,
                        style: "display-flex justify-content-center align-items-center",
                        visible: !0,
                        _idProps: {
                            service: r,
                            uuid: "54"
                        },
                        _widgetRecordProvider: t
                    }, s.createElement(J, {
                        extendedProperties: {
                            style: "color: #101213; font-size: 12px;"
                        },
                        text: [_(T("x7JPzp19M0ixHqAi5o22Ow#Value", "See more"))],
                        _idProps: {
                            service: r,
                            uuid: "55"
                        },
                        _widgetRecordProvider: t
                    }), s.createElement($, {
                        extendedProperties: {
                            style: "font-size: 10px; height: 10px;"
                        },
                        gridProperties: {
                            width: "7px",
                            marginLeft: "4.5px"
                        },
                        image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                        type: 0,
                        _idProps: {
                            service: r,
                            uuid: "56"
                        },
                        _widgetRecordProvider: t
                    }))))]
                }))]
            }))
        }
    };
a(w, "View");
var H = w,
    Le = H;
export {
    Le as a
};