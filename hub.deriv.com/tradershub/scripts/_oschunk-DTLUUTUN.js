import {
    a as de
} from "./_oschunk-V5HS6GU6.js";
import {
    a as G
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import {
    a as le
} from "./_oschunk-SGCNFWKE.js";
import "./_oschunk-IQUI5AIQ.js";
import {
    a as A
} from "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as Z
} from "./_oschunk-UHVNGUMG.js";
import {
    a as Q
} from "./_oschunk-MAFTJFMD.js";
import {
    a as $
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-PSUEQKJH.js";
import "./_oschunk-BY4KTNYI.js";
import "./_oschunk-HBEXL7KK.js";
import {
    a as z
} from "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    c as se,
    d as x,
    h as f,
    j as C,
    k as F,
    l as H,
    r as oe,
    y as M
} from "./_oschunk-WAXNMQCP.js";
import {
    a as ie
} from "./_oschunk-LHY3WMNC.js";
import {
    a as ne,
    g as L,
    i as T
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as re,
    c as U,
    d as ae
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as O,
    ic as B,
    tc as R
} from "./_oschunk-44PT7RP7.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as te
} from "./_oschunk-DVBKI63I.js";
var l = te(ne());
var u = te(ne());
var g = h,
    j = class j extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TransactionsByDate", "transactionsByDateVar", "TransactionsByDate", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new B)
            }, !1, B), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransationsDate", "transationsDateIn", "TransationsDate", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", "_transationsDateInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new B)
            }, !1, B), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(j, "VariablesRecord");
var k = j;
k.init();
var q = class q extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(q, "WidgetsRecord");
var J = q,
    E = class E extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return E._hasValidationWidgetsValue === void 0 && (E._hasValidationWidgetsValue = void 0 || void 0 || void 0), E._hasValidationWidgetsValue
        }
        setInputs(e) {
            "TransationsDate" in e && (this.variables.transationsDateIn = e.TransationsDate, "_transationsDateInDataFetchStatus" in e && (this.variables._transationsDateInDataFetchStatus = e._transationsDateInDataFetchStatus)), "TransactionsList" in e && (this.variables.transactionsListIn = e.TransactionsList, "_transactionsListInDataFetchStatus" in e && (this.variables._transactionsListInDataFetchStatus = e._transactionsListInDataFetchStatus))
        }
    };
a(E, "Model");
var N = E;
N._hasValidationWidgetsValue = void 0;
var fe = new g.Model.ModelFactory(N);
var ye = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    he = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "Kopiert"
    },
    Ce = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "Copiado"
    },
    Se = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "Copiato"
    },
    Pe = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "Skopiowano"
    },
    we = {
        "QVZCZ0Qc5Ueu5HbTfdPMWQ#Value": "Copiado"
    },
    ge = {
        "ar-001": {
            translations: ye,
            isRTL: !0
        },
        "de-DE": {
            translations: he,
            isRTL: !1
        },
        "es-ES": {
            translations: Ce,
            isRTL: !1
        },
        "it-IT": {
            translations: Se,
            isRTL: !1
        },
        "pl-PL": {
            translations: Pe,
            isRTL: !1
        },
        "pt-PT": {
            translations: we,
            isRTL: !1
        }
    };

function K(W, e, c, r) {
    navigator.clipboard.writeText(W.TextToCopy).catch(s => {
        console.error("Failed to copy text: ", s)
    })
}
a(K, "default");
var p = h; {
    let e = class e extends p.Controller.BaseViewController {
        constructor(r, s, t) {
            super(r, s, t, ge);
            var _ = this.controller;
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
                    _ = this.idService;
                return p.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "81694195-c0cc-4db1-94e8-e83a81b10f99"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var v = new p.DataTypes.VariableHolder,
                            o = new p.DataTypes.VariableHolder(new(p.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        s.variables.isLoadingVar = !0, v.value = p.SystemActions.listFilter(s.variables.transactionsListIn, function(b) {
                            return b.dateAttr === s.variables.transationsDateIn
                        }, r), o.value.dataOut = p.JSONUtils.deserializeFromJSON(re.getActiveWallet(), R, !1), s.variables.transactionsByDateVar = v.value.filteredListOut, s.variables.activeWalletVar = o.value.dataOut, s.variables.isLoadingVar = !1
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
                    _ = this.idService;
                return p.Logger.startActiveSpan("TooltipInitialized", function(d) {
                    d && (d.setAttribute("code.function", "TooltipInitialized"), d.setAttribute("outsystems.function.key", "f422e403-5013-46ca-8879-797020665f92"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipInitialized"), r = t.callContext(r), p.Logger.startActiveSpan("ClipboardAction", function(v) {
                            v && (v.setAttribute("code.function", "ClipboardAction"), v.setAttribute("outsystems.function.key", "edd05965-06ea-49dc-baea-4a23ca0750e2"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(K, "ClipboardAction", "TooltipInitialized", {
                                    TextToCopy: p.DataConversion.JSNodeParamConverter.to(p.BuiltinFunctions.longIntegerToText(s.variables.transactionsListIn.getCurrent(r.iterationContext).transaction_idAttr), p.DataTypes.DataTypes.Text)
                                }, function(o) {}, {}, {})
                            } finally {
                                v && v.end()
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
                    _ = this.idService;
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
                    _ = this.idService;
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
            return ae.defaultTimeout
        }
    };
    a(e, "ControllerInner");
    let W = e;
    pe = W
}
var pe, _e = new p.Controller.ControllerFactory(pe, ie);
var S = h,
    I = T.PlaceholderContent,
    Ae = T.IteratorPlaceholderContent,
    P = class P extends L.BaseWebBlock {
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
            return [A, Q, Z]
        }
        get modelFactory() {
            return fe
        }
        get controllerFactory() {
            return _e
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
                _ = c.callContext(),
                d = P.ifWidget,
                v = P.textWidget,
                o = P.asPrimitiveValue,
                b = P.getTranslation,
                m = this;
            return u.createElement("div", this.getRootNodeProperties(), d(e.variables.isLoadingVar, !1, this, function() {
                return [u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "wallet-transaction-item",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(A, {
                    getOwnerSpan: a(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return m.getChildSpan("destroy")
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
                }), u.createElement(A, {
                    getOwnerSpan: a(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return m.getChildSpan("destroy")
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
                })), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(A, {
                    getOwnerSpan: a(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return m.getChildSpan("destroy")
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
                }), u.createElement(A, {
                    getOwnerSpan: a(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return m.getChildSpan("destroy")
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
                return [u.createElement(F, {
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
                        content: new Ae(function(i, n) {
                            return [u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [o(e.variables._transactionsListInDataFetchStatus), o(e.variables.transactionsListIn.getCurrent(n.iterationContext).transaction_idAttr), o(e.variables.activeWalletVar.currencyAttr), o(e.variables.activeWalletVar.nameAttr), o(e.variables.activeWalletVar.loginidAttr), o(e.variables.transactionsByDateVar.length), o(e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext)), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).toAttr.platformAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.platformAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).fromAttr.loginidAttr), o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).action_typeAttr)]
                            }, u.createElement(H, {
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
                                        return [u.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(C, {
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
                                            return [u.createElement(Q, {
                                                getOwnerSpan: a(function() {
                                                    return m.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: a(function() {
                                                    return m.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Trigger: O.trigger.onClick,
                                                    Position: O.position.topLeft
                                                },
                                                events: {
                                                    _handleError: a(function(w) {
                                                        c.handleError(w)
                                                    }, "_handleError"),
                                                    onToggle$Action: a(function(w, Ve) {
                                                        var be = n.clone();
                                                        c.tooltipInitialized$Action(c.callContext(be))
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
                                                        return [u.createElement(C, {
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
                                                        return [v(b("QVZCZ0Qc5Ueu5HbTfdPMWQ#Value", "Copied"))]
                                                    })
                                                },
                                                _dependencies: [o(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).transaction_idAttr)]
                                            })]
                                        }, function() {
                                            return []
                                        })), u.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: t
                                        }, u.createElement(C, {
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
                                        }), u.createElement(C, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: e.getCachedValue(i.getId("4GdpZfT3o0C+Sy0MUvhkFw.Style"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(S.BuiltinFunctions.integerToDecimal(0)) ? "font-bold wallet-transaction-amount-positive" : "font-bold wallet-transaction-amount-negative"
                                            }, function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr
                                            }),
                                            value: e.getCachedValue(i.getId("4GdpZfT3o0C+Sy0MUvhkFw.Value"), function() {
                                                return e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr.gt(S.BuiltinFunctions.integerToDecimal(0)) ? "+" + U.formatMoney$Action(S.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.activeWalletVar.currencyAttr, "en-US", "", n).formattedNumberOut + " " + e.variables.activeWalletVar.currencyAttr : U.formatMoney$Action(S.BuiltinFunctions.decimalToText(e.variables.transactionsByDateVar.getCurrent(n.iterationContext).amountAttr), e.variables.activeWalletVar.currencyAttr, "en-US", "", n).formattedNumberOut + " " + e.variables.activeWalletVar.currencyAttr
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
                            }), u.createElement(f, {
                                align: 0,
                                animate: !0,
                                style: "padding-x-base background-neutral-1",
                                visible: e.variables.transactionsByDateVar.getCurrentRowNumber(n.iterationContext) !== e.variables.transactionsByDateVar.length - 1,
                                _idProps: {
                                    service: i,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(Z, {
                                getOwnerSpan: a(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return m.getChildSpan("destroy")
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
                        }, _, r, "1")
                    },
                    _dependencies: [o(e.variables._transactionsListInDataFetchStatus), o(e.variables.transactionsListIn.getCurrent(_.iterationContext).transaction_idAttr), o(e.variables.activeWalletVar.currencyAttr), o(e.variables.activeWalletVar.nameAttr), o(e.variables.activeWalletVar.loginidAttr)]
                })]
            }))
        }
    };
a(P, "View");
var Y = P,
    X = Y;
var V = h,
    D = T.PlaceholderContent,
    Ee = T.IteratorPlaceholderContent,
    y = class y extends L.BaseWebScreen {
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
            return [$, G, z, X]
        }
        get modelFactory() {
            return le
        }
        get controllerFactory() {
            return de
        }
        get title() {
            let e = this.model,
                c = this.controller,
                r = this.idService,
                s = c.validationService,
                t = c.callContext(),
                _ = y.asPrimitiveValue,
                d = y.getTranslation,
                v = this;
            return V.Injector.resolve(V.ServiceNames.TranslationsService).getMessage("p0dXA5rf3EG2NUYra7BP3w#TitleExpression.2118442357.1", "Transactions")
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                r = this.idService,
                s = c.validationService,
                t = this.widgetsRecordProvider,
                _ = c.callContext(),
                d = y.ifWidget,
                v = y.textWidget,
                o = y.asPrimitiveValue,
                b = y.getTranslation,
                m = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement($, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
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
                        return [l.createElement(G, {
                            getOwnerSpan: a(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: V.Injector.resolve(V.ServiceNames.TranslationsService).getMessage("1dw8hqdk3keFKAqmHeBEEw#Value.2118442357.1", "Transactions")
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
                                    return [l.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionsMainContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(M, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [v(b("y0td2RELukOpHNdWu7Z0Pw#Value", "Transactions"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t
                                    }), l.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s full-width margin-top-base",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "TransactionFilterContainer2"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(se, {
                                        _validationProps: {
                                            validationService: s
                                        },
                                        enabled: !0,
                                        mandatory: !1,
                                        onChange: a(function() {
                                            return Promise.resolve().then(function() {
                                                var i = _.clone();
                                                return c.fetchTransactions$Action(c.callContext(i))
                                            })
                                        }, "onChange"),
                                        style: '"button-group"',
                                        variable: e.createVariable(V.DataTypes.DataTypes.Text, e.variables.actionTypeValueVar, function(i) {
                                            e.variables.actionTypeValueVar = i
                                        }),
                                        _idProps: {
                                            service: r,
                                            name: "ButtonGroup"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(x, {
                                        enabled: !e.variables.isLoadingVar,
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
                                    }, v(b("68GTmBANiUubMZr6GDahVg#Value", "All"))), l.createElement(x, {
                                        enabled: !e.variables.isLoadingVar,
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
                                    }, v(b("u7HXgj02Ikm2r0jX7pCmAw#Value", "Deposit"))), l.createElement(x, {
                                        enabled: !e.variables.isLoadingVar,
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
                                    }, v(b("5IQr13COlUy7WEtvOmJKzw#Value", "Withdraw"))), l.createElement(x, {
                                        enabled: !e.variables.isLoadingVar,
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
                                    }, v(b("gDzcFqUlOE6CWD9qA6ZJkw#Value", "Transfer"))))), d(e.variables.isLoadingVar, !1, this, function() {
                                        return [l.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallet-loading-container",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(z, {
                                            getOwnerSpan: a(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return m.getChildSpan("destroy")
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
                                        return [l.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "TransactionListContainer"
                                            },
                                            _widgetRecordProvider: t
                                        }, d(e.variables.transactionsVar.length < 1, !1, this, function() {
                                            return [l.createElement(f, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallet-loading-container display-flex align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            }, l.createElement(f, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContainer"
                                                },
                                                _widgetRecordProvider: t
                                            }, l.createElement(f, {
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
                                            }, l.createElement(oe, {
                                                gridProperties: {
                                                    width: "36px"
                                                },
                                                image: V.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: t
                                            })), l.createElement(M, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [v(b("R5vETfYBYUWiCHLBsjKLqA#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: r,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: t
                                            }), l.createElement(M, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [v(b("M4rt3Iir10eX40aqD1n_lA#Value", "Your transactions will appear here."))],
                                                _idProps: {
                                                    service: r,
                                                    name: "EmptyTransactionContentContainer"
                                                },
                                                _widgetRecordProvider: t
                                            })))]
                                        }, function() {
                                            return [l.createElement(F, {
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
                                                    content: new Ee(function(i, n) {
                                                        return [l.createElement(H, {
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
                                                                    return [l.createElement(f, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column gap-s",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "21"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, l.createElement(C, {
                                                                        extendedProperties: {
                                                                            style: "font-size: 14px;"
                                                                        },
                                                                        value: e.variables.datesListVar.getCurrent(n.iterationContext),
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "22"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }), l.createElement(f, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: i,
                                                                            uuid: "23"
                                                                        },
                                                                        _widgetRecordProvider: t
                                                                    }, l.createElement(X, {
                                                                        getOwnerSpan: a(function() {
                                                                            return m.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: a(function() {
                                                                            return m.getChildSpan("destroy")
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
                                                    }, _, r, "1")
                                                },
                                                _dependencies: [o(e.variables.transactionsVar)]
                                            })]
                                        }))]
                                    }))]
                                }),
                                mobileFooterContent: D.Empty
                            },
                            _dependencies: [o(e.variables.datesListVar), o(e.variables.transactionsVar), o(e.variables.isLoadingVar), o(e.variables.actionTypeValueVar)]
                        })]
                    })
                },
                _dependencies: [o(e.variables.datesListVar), o(e.variables.transactionsVar), o(e.variables.isLoadingVar), o(e.variables.actionTypeValueVar)]
            }))
        }
    };
a(y, "View");
var ee = y,
    mt = ee;
export {
    mt as
    default
};