import {
    a as le
} from "./_oschunk-T5MFL36Y.js";
import {
    a as J
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import {
    a as oe
} from "./_oschunk-ZO42NMAA.js";
import "./_oschunk-UK73WSZT.js";
import {
    a as E
} from "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as G
} from "./_oschunk-XFSPMJPV.js";
import {
    a as U
} from "./_oschunk-CJZXGA6I.js";
import {
    a as z
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-MZYHHGAU.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import {
    a as $
} from "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    c as ne,
    d as x,
    h as g,
    j as h,
    k as L,
    l as F,
    r as se,
    y as H
} from "./_oschunk-HUOHOHZB.js";
import {
    a as ae
} from "./_oschunk-Y45M2O2K.js";
import {
    a as ie,
    g as B,
    i as A
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as te,
    c as k,
    d as re
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as O,
    dc as W,
    oc as R
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as ee
} from "./_oschunk-DVBKI63I.js";
var l = ee(ie());
var u = ee(ie());
var f = _,
    Y = class Y extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TransactionsByDate", "transactionsByDateVar", "TransactionsByDate", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransationsDate", "transationsDateIn", "TransationsDate", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Y, "VariablesRecord");
var N = Y;
N.init();
var K = class K extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(K, "WidgetsRecord");
var j = K,
    T = class T extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return T._hasValidationWidgetsValue === void 0 && (T._hasValidationWidgetsValue = void 0 || void 0 || void 0), T._hasValidationWidgetsValue
        }
        setInputs(e) {
            "TransationsDate" in e && (this.variables.transationsDateIn = e.TransationsDate, "_transationsDateInDataFetchStatus" in e && (this.variables._transationsDateInDataFetchStatus = e._transationsDateInDataFetchStatus)), "TransactionsList" in e && (this.variables.transactionsListIn = e.TransactionsList, "_transactionsListInDataFetchStatus" in e && (this.variables._transactionsListInDataFetchStatus = e._transactionsListInDataFetchStatus))
        }
    };
a(T, "Model");
var M = T;
M._hasValidationWidgetsValue = void 0;
var ge = new f.Model.ModelFactory(M);
var me = {};

function q(V, e, c, r) {
    navigator.clipboard.writeText(V.TextToCopy).catch(s => {
        console.error("Failed to copy text: ", s)
    })
}
a(q, "default");
var p = _; {
    let e = class e extends p.Controller.BaseViewController {
        constructor(r, s, t) {
            super(r, s, t, me);
            var b = this.controller;
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
                var s = this.model,
                    t = this.controller,
                    b = this.idService;
                return p.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var m = new p.DataTypes.VariableHolder,
                            o = new p.DataTypes.VariableHolder(new(p.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        s.variables.isLoadingVar = !0, m.value = p.SystemActions.listFilter(s.variables.transactionsListIn, function(P) {
                            return P.dateAttr === s.variables.transationsDateIn
                        }, r), o.value.dataOut = p.JSONUtils.deserializeFromJSON(te.getActiveWallet(), R, !1), s.variables.transactionsByDateVar = m.value.filteredListOut, s.variables.activeWalletVar = o.value.dataOut, s.variables.isLoadingVar = !1
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
                var s = this.model,
                    t = this.controller,
                    b = this.idService;
                return p.Logger.startActiveSpan("TooltipInitialized", function(d) {
                    d && (d.setAttribute("code.function", "TooltipInitialized"), d.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipInitialized"), r = t.callContext(r), p.Logger.startActiveSpan("ClipboardAction", function(m) {
                            m && (m.setAttribute("code.function", "ClipboardAction"), m.setAttribute("outsystems.function.key", "edd05965-06ea-49dc-baea-4a23ca0750e2"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(q, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: p.DataConversion.JSNodeParamConverter.to(p.BuiltinFunctions.longIntegerToText(s.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), p.DataTypes.DataTypes.Text)
                                }, function(o) {}, {}, {})
                            } finally {
                                m && m.end()
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
            var s = this.controller;
            return p.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onReady$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tooltipInitialized$Action(r) {
            var s = this.controller;
            return p.Logger.startActiveSpan("TooltipInitialized__proxy", function(t) {
                t && (t.setAttribute("code.function", "TooltipInitialized"), t.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._tooltipInitialized$Action, r)
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
                var s = this.controller,
                    t = this.model,
                    b = this.idService;
                return s.onReady$Action(r)
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
                var s = this.controller,
                    t = this.model,
                    b = this.idService;
                return s.onReady$Action(r)
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
            return re.defaultTimeout
        }
    };
    a(e, "ControllerInner");
    let V = e;
    fe = V
}
var fe, pe = new p.Controller.ControllerFactory(fe, ae);
var S = _,
    I = A.PlaceholderContent,
    Se = A.IteratorPlaceholderContent,
    C = class C extends B.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsTransationsListByDate"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransationsListByDate",
                functionKey: "e07f29e4-1b28-4e41-99be-2b0a8f2677b1",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransationsListByDate.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E, U, G]
        }
        get modelFactory() {
            return ge
        }
        get controllerFactory() {
            return pe
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                r = this.idService,
                s = c.validationService,
                t = this.widgetsRecordProvider,
                b = c.callContext(),
                d = C.ifWidget,
                m = C.textWidget,
                o = C.asPrimitiveValue,
                P = C.getTranslation,
                v = this;
            return u.createElement("div", this.getRootNodeProperties(), d(e.variables.isLoadingVar, !1, this, function() {
                return [u.createElement(g, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(g, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(g, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(E, {
                    getOwnerSpan: a(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(i) {
                            c.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: r,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), u.createElement(E, {
                    getOwnerSpan: a(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(i) {
                            c.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: r,
                        uuid: "4",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), u.createElement(g, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(E, {
                    getOwnerSpan: a(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(i) {
                            c.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: r,
                        uuid: "6",
                        alias: "3"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), u.createElement(E, {
                    getOwnerSpan: a(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(i) {
                            c.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
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
                return [u.createElement(L, {
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
                        content: new Se(function(i, n) {
                            return [u.createElement(g, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [o(e.variables._transactionsListInDataFetchStatus), o(e.variables.transactionsListIn.getCurrent(n.iterationContext).transaction_idAttr), o(e.variables.activeWalletVar.currencyAttr), o(e.variables.activeWalletVar.nameAttr), o(e.variables.activeWalletVar.loginidAttr), o(e.variables.transactionsByDateVar.length), o(e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext)), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr)]
                            }, u.createElement(F, {
                                style: "wallet-transaction-item",
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: i,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: I.Empty,
                                    content: new I(function() {
                                        return [u.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(h, {
                                            style: "wallet-transaction-action-type",
                                            value: e.getCachedValue(i.getId("7zgT6HPONkeuYCpB2qP06Q.Value"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr === e.variables.activeWalletVar.loginidAttr ? "Transfer to" : "Transfer from" : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr
                                            }, function() {
                                                return e.variables.activeWalletVar.loginidAttr
                                            }),
                                            _idProps: {
                                                service: i,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: t
                                        }), d(!e.variables.transactionsListIn.getCurrent(n.iterationContext).transaction_idAttr.equals(S.BuiltinFunctions.integerToLongInteger(S.BuiltinFunctions.nullIdentifier())), !1, this, function() {
                                            return [u.createElement(U, {
                                                getOwnerSpan: a(function() {
                                                    return v.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: a(function() {
                                                    return v.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Trigger: O.trigger.onClick,
                                                    Position: O.position.topLeft
                                                },
                                                events: {
                                                    _handleError: a(function(w) {
                                                        c.handleError(w)
                                                    }, "_handleError"),
                                                    onToggle$Action: a(function(w, Pe) {
                                                        var ye = n.clone();
                                                        c.tooltipInitialized$Action(c.callContext(ye))
                                                    }, "onToggle$Action")
                                                },
                                                _validationProps: {
                                                    validationService: s
                                                },
                                                _idProps: {
                                                    service: i,
                                                    uuid: "14",
                                                    alias: "5"
                                                },
                                                _widgetRecordProvider: t,
                                                placeholders: {
                                                    content: new I(function() {
                                                        return [u.createElement(h, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            style: "wallet-transaction-action-type",
                                                            value: "Ref.ID:" + S.BuiltinFunctions.longIntegerToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr),
                                                            _idProps: {
                                                                service: i,
                                                                uuid: "15"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })]
                                                    }),
                                                    tooltip: new I(function() {
                                                        return ["Copied"]
                                                    })
                                                },
                                                _dependencies: [o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr)]
                                            })]
                                        }, function() {
                                            return []
                                        })), u.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(h, {
                                            value: e.getCachedValue(i.getId("gWnZE4oJwU68nPY_MB9NYg.Value"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr === "transfer" ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr === e.variables.activeWalletVar.loginidAttr ? e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr : e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr : e.variables.activeWalletVar.nameAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr
                                            }, function() {
                                                return e.variables.activeWalletVar.loginidAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr
                                            }, function() {
                                                return e.variables.activeWalletVar.nameAttr
                                            }),
                                            _idProps: {
                                                service: i,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: t
                                        }), u.createElement(h, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: e.getCachedValue(i.getId("4GdpZfT3o0C+Sy0MUvhkFw.Style"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(S.BuiltinFunctions.integerToDecimal(0)) ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                            }),
                                            value: e.getCachedValue(i.getId("4GdpZfT3o0C+Sy0MUvhkFw.Value"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(S.BuiltinFunctions.integerToDecimal(0)) ? "+" + k.formatMoney$Action(S.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.activeWalletVar.currencyAttr, "en-US", "", n).formattedNumberOut + " " + e.variables.activeWalletVar.currencyAttr : k.formatMoney$Action(S.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.activeWalletVar.currencyAttr, "en-US", "", n).formattedNumberOut + " " + e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                            }, function() {
                                                return e.variables.activeWalletVar.currencyAttr
                                            }),
                                            _idProps: {
                                                service: i,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: t
                                        })))]
                                    }),
                                    rightActions: I.Empty
                                }
                            }), u.createElement(g, {
                                align: 0,
                                animate: !0,
                                style: "padding-x-base background-neutral-1",
                                visible: e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext) !== e.variables.transactionsByDateVar.length - 1,
                                _idProps: {
                                    service: i,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(G, {
                                getOwnerSpan: a(function() {
                                    return v.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return v.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: O.color.neutral3,
                                    Space: O.space.none
                                },
                                events: {
                                    _handleError: a(function(w) {
                                        c.handleError(w)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "20",
                                    alias: "6"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })))]
                        }, b, r, "1")
                    },
                    _dependencies: [o(e.variables._transactionsListInDataFetchStatus), o(e.variables.transactionsListIn.getCurrent(b.iterationContext).transaction_idAttr), o(e.variables.activeWalletVar.currencyAttr), o(e.variables.activeWalletVar.nameAttr), o(e.variables.activeWalletVar.loginidAttr)]
                })]
            }))
        }
    };
a(C, "View");
var Z = C,
    Q = Z;
var be = _,
    D = A.PlaceholderContent,
    Ce = A.IteratorPlaceholderContent,
    y = class y extends B.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsTransactions"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransactions",
                functionKey: "035747a7-df9a-41dc-b635-462b6bb04fdf",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsTransactions.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [z, J, $, Q]
        }
        get modelFactory() {
            return oe
        }
        get controllerFactory() {
            return le
        }
        get title() {
            let e = this.model,
                c = this.controller,
                r = this.idService,
                s = c.validationService,
                t = c.callContext(),
                b = y.asPrimitiveValue,
                d = y.getTranslation,
                m = this;
            return "Transactions"
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                r = this.idService,
                s = c.validationService,
                t = this.widgetsRecordProvider,
                b = c.callContext(),
                d = y.ifWidget,
                m = y.textWidget,
                o = y.asPrimitiveValue,
                P = y.getTranslation,
                v = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(z, {
                getOwnerSpan: a(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(i) {
                        c.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new D(function() {
                        return [l.createElement(J, {
                            getOwnerSpan: a(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Recent Transactions"
                            },
                            events: {
                                _handleError: a(function(i) {
                                    c.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: s
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                walletOverlayPageContent: new D(function() {
                                    return [l.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionsMainContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(H, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [m(P("y0td2RELukOpHNdWu7Z0Pw#Value", "Transactions"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t
                                    }), l.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s full-width margin-top-base",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionFilterContainer2"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(ne, {
                                        _validationProps: {
                                            validationService: s
                                        },
                                        enabled: !0,
                                        mandatory: !1,
                                        onChange: a(function() {
                                            return Promise.resolve().then(function() {
                                                var i = b.clone();
                                                return c.fetchTransactions$Action(e.variables.actionTypeValueVar, "", c.callContext(i))
                                            })
                                        }, "onChange"),
                                        style: '"button-group"',
                                        variable: e.createVariable(be.DataTypes.DataTypes.Text, e.variables.actionTypeValueVar, function(i) {
                                            e.variables.actionTypeValueVar = i
                                        }),
                                        _idProps: {
                                            service: r,
                                            name: "ButtonGroup"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(x, {
                                        enabled: !e.variables.isExecutingVar,
                                        extendedProperties: {
                                            style: "margin-left: 0px;"
                                        },
                                        style: "btn wallet-transaction-btn btn-small",
                                        value: "all",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "All"
                                        },
                                        _widgetRecordProvider: t
                                    }, "All"), l.createElement(x, {
                                        enabled: !e.variables.isExecutingVar,
                                        extendedProperties: {
                                            style: "margin-left: 8px;"
                                        },
                                        style: "btn wallet-transaction-btn btn-small",
                                        value: "deposit",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Deposit"
                                        },
                                        _widgetRecordProvider: t
                                    }, "Deposit"), l.createElement(x, {
                                        enabled: !e.variables.isExecutingVar,
                                        extendedProperties: {
                                            style: "margin-left: 8px;"
                                        },
                                        style: "btn wallet-transaction-btn btn-small",
                                        value: "withdraw",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Withdraw"
                                        },
                                        _widgetRecordProvider: t
                                    }, "Withdraw"), l.createElement(x, {
                                        enabled: !e.variables.isExecutingVar,
                                        extendedProperties: {
                                            style: "margin-left: 8px;"
                                        },
                                        style: "btn wallet-transaction-btn btn-small",
                                        value: "transfer",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Transfer"
                                        },
                                        _widgetRecordProvider: t
                                    }, "Transfer"))), d(e.variables.isExecutingVar, !1, this, function() {
                                        return [l.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallet-loading-container",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement($, {
                                            getOwnerSpan: a(function() {
                                                return v.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return v.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: a(function(i) {
                                                    c.handleError(i)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: r,
                                                uuid: "11",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }))]
                                    }, function() {
                                        return [l.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "TransactionListContainer"
                                            },
                                            _widgetRecordProvider: t
                                        }, d(e.variables.transactionsVar.length < 1, !1, this, function() {
                                            return [l.createElement(g, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallet-loading-container display-flex align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            }, l.createElement(g, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContainer"
                                                },
                                                _widgetRecordProvider: t
                                            }, l.createElement(g, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: t
                                            }, l.createElement(se, {
                                                gridProperties: {
                                                    width: "36px"
                                                },
                                                image: be.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: t
                                            })), l.createElement(H, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [m(P("R5vETfYBYUWiCHLBsjKLqA#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: r,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: t
                                            }), l.createElement(H, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [m(P("M4rt3Iir10eX40aqD1n_lA#Value", "Your transactions will appear here."))],
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContentContainer"
                                                },
                                                _widgetRecordProvider: t
                                            })))]
                                        }, function() {
                                            return [l.createElement(L, {
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
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: t,
                                                placeholders: {
                                                    content: new Ce(function(i, n) {
                                                        return [l.createElement(F, {
                                                            style: '"list-item"',
                                                            triggerActionOnFullSwipeLeft: !1,
                                                            triggerActionOnFullSwipeRight: !1,
                                                            _idProps: {
                                                                service: i,
                                                                name: "ListItem"
                                                            },
                                                            _widgetRecordProvider: t,
                                                            placeholders: {
                                                                leftActions: D.Empty,
                                                                content: new D(function() {
                                                                    return [l.createElement(g, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column gap-s",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "21"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, l.createElement(h, {
                                                                        extendedProperties: {
                                                                            style: "font-size: 14px;"
                                                                        },
                                                                        value: e.variables.datesListVar.getCurrent(n.iterationContext),
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "22"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }), l.createElement(g, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "23"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, l.createElement(Q, {
                                                                        getOwnerSpan: a(function() {
                                                                            return v.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: a(function() {
                                                                            return v.getChildSpan("destroy")
                                                                        }, "getOwnerDisposeSpan"),
                                                                        inputs: {
                                                                            TransactionsList: e.variables.transactionsVar,
                                                                            TransationsDate: e.variables.datesListVar.getCurrent(n.iterationContext)
                                                                        },
                                                                        events: {
                                                                            _handleError: a(function(w) {
                                                                                c.handleError(w)
                                                                            }, "_handleError")
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: s
                                                                        },
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "24",
                                                                            alias: "4"
                                                                        },
                                                                        _widgetRecordProvider: t,
                                                                        _dependencies: []
                                                                    })))]
                                                                }),
                                                                rightActions: D.Empty
                                                            },
                                                            _dependencies: [o(e.variables.transactionsVar), o(e.variables.datesListVar.getCurrent(n.iterationContext))]
                                                        })]
                                                    }, b, r, "1")
                                                },
                                                _dependencies: [o(e.variables.transactionsVar)]
                                            })]
                                        }))]
                                    }))]
                                }),
                                mobileFooterContent: D.Empty
                            },
                            _dependencies: [o(e.variables.datesListVar), o(e.variables.transactionsVar), o(e.variables.isExecutingVar), o(e.variables.actionTypeValueVar)]
                        })]
                    })
                },
                _dependencies: [o(e.variables.datesListVar), o(e.variables.transactionsVar), o(e.variables.isExecutingVar), o(e.variables.actionTypeValueVar)]
            }))
        }
    };
a(y, "View");
var X = y,
    ot = X;
export {
    ot as
    default
};