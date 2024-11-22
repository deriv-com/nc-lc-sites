import {
    a as g
} from "./_oschunk-UK73WSZT.js";
import {
    a as C
} from "./_oschunk-Y45M2O2K.js";
import {
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    dc as O
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as F
} from "./_oschunk-NTQBNJ73.js";
import {
    a as A,
    b as N,
    c as u
} from "./_oschunk-DVBKI63I.js";
var L = {
        "M4rt3Iir10eX40aqD1n_lA#Value": "Vos transactions appara\xEEtront ici.",
        "R5vETfYBYUWiCHLBsjKLqA#Value": "Aucune transaction trouv\xE9e",
        "y0td2RELukOpHNdWu7Z0Pw#Value": "Transactions"
    },
    H = {
        "fr-FR": {
            translations: L,
            isRTL: !1
        }
    };

function S(f, v, R, e) {
    let c = JSON.parse(f.WalletsList);
    window.__wallets = c;
    let i = JSON.parse(f.Transactions);

    function n(y) {
        let h = new Date(y * 1e3),
            r = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
        return h.toLocaleDateString(void 0, r)
    }
    u(n, "formatDate");
    let a = {
        dtrade: "Options trading",
        dxtrade: "Deriv X",
        mt5: "Deriv MT5",
        ctrader: "Deriv cTrader"
    };

    function w(y) {
        let h = u((r = "") => {
            if (r) {
                if (r.startsWith("CRW")) {
                    let s = c.find(d => d.loginid === r);
                    return s ? s.name : ""
                }
                return r.startsWith("CR") ? a.dtrade : r.startsWith("CTR") ? a.ctrader : r.startsWith("CXR") ? a.dxtrade : r.startsWith("MTR") ? a.mt5 : ""
            }
        }, "getPlatform");
        return y.reduce((r, s) => {
            if (s.action_type === "buy" || s.action_type === "sell") return r;
            let d = n(s.transaction_time);
            r[d] || (r[d] = []);
            let m = N(A({}, s), {
                date: d
            });
            return s.from && (m.from.platform = h(s.from.loginid)), s.to && (m.to.platform = h(s.to.loginid)), r[d].push(m), r
        }, {})
    }
    u(w, "groupTransactionsByDate");
    let l = w(i),
        T = Object.keys(l),
        p = Object.values(l).flat();
    f.DatesList = JSON.stringify(T), f.FormattedTransactions = JSON.stringify(p)
}
u(S, "default");
var t = F; {
    let v = class v extends t.Controller.BaseViewController {
        constructor(e, c, i) {
            super(e, c, i, H);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _fetchTransactions$Action() {
            return this.hasOwnProperty("__fetchTransactions$Action") || (this.__fetchTransactions$Action = function(e, c, i) {
                var n = this.model,
                    a = this.controller,
                    w = this.idService;
                return t.Logger.startActiveSpan("FetchTransactions", function(l) {
                    return l && (l.setAttribute("code.function", "FetchTransactions"), l.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        a.ensureControllerAlive("FetchTransactions"), i = a.callContext(i);
                        var T = new t.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$vars")));
                        T.value.actionTypeInLocal = e, T.value.limitInLocal = c;
                        var p = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            h = new t.DataTypes.VariableHolder,
                            r = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            s = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.DataTypes.TextList))),
                            m = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(O)));
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (!n.variables.isExecutingVar) return n.variables.isExecutingVar = !0, n.flush(), b.statement$Action(T.value.actionTypeInLocal === "all" ? t.BuiltinFunctions.nullTextIdentifier() : T.value.actionTypeInLocal, T.value.limitInLocal, i).then(function(o) {
                                    y.value = o
                                }).then(function() {
                                    return n.flush(), b.getWalletsList$Action(i).then(function(o) {
                                        p.value = o
                                    })
                                }).then(function() {
                                    s.value.jSONOut = t.JSONUtils.serializeToJSON(p.value.walletsListOut, !1, !1), r.value.jSONOut = t.JSONUtils.serializeToJSON(y.value.responseOut.statementAttr.transactionsAttr, !1, !1), h.value = t.Logger.startActiveSpan("MapTransactions", function(o) {
                                        o && (o.setAttribute("code.function", "MapTransactions"), o.setAttribute("outsystems.function.key", "6e13d519-bafa-4255-b10d-b808a1cd36a6"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return a.safeExecuteJSNode(S, "MapTransactions", "FetchTransactions", {
                                                Transactions: t.DataConversion.JSNodeParamConverter.to(r.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                WalletsList: t.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                DatesList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                FormattedTransactions: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(E) {
                                                var D = new(a.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$mapTransactionsJSResult"));
                                                return D.datesListOut = t.DataConversion.JSNodeParamConverter.from(E.DatesList, t.DataTypes.DataTypes.Text), D.formattedTransactionsOut = t.DataConversion.JSNodeParamConverter.from(E.FormattedTransactions, t.DataTypes.DataTypes.Text), D
                                            }, {}, {})
                                        } finally {
                                            o && o.end()
                                        }
                                    }, 1), m.value.dataOut = t.JSONUtils.deserializeFromJSON(h.value.formattedTransactionsOut, O, !1), d.value.dataOut = t.JSONUtils.deserializeFromJSON(h.value.datesListOut, t.DataTypes.TextList, !1), n.variables.datesListVar = d.value.dataOut, n.variables.transactionsVar = m.value.dataOut, n.variables.isExecutingVar = !1
                                })
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__fetchTransactions$Action
        }
        set _fetchTransactions$Action(e) {
            this.__fetchTransactions$Action = e
        }
        fetchTransactions$Action(e, c, i) {
            var n = this.controller;
            return t.Logger.startActiveSpan("FetchTransactions__proxy", function(a) {
                return a && (a.setAttribute("code.function", "FetchTransactions"), a.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._fetchTransactions$Action, i, e, c)
                }, function() {
                    a && a.end()
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
                var c = this.controller,
                    i = this.model,
                    n = this.idService;
                return c.fetchTransactions$Action("", "", e)
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
                return g.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    u(v, "ControllerInner");
    let f = v;
    _ = f, _.registerVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$vars", [{
        name: "ActionType",
        attrName: "actionTypeInLocal",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Limit",
        attrName: "limitInLocal",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$mapTransactionsJSResult", [{
        name: "DatesList",
        attrName: "datesListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FormattedTransactions",
        attrName: "formattedTransactionsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var _, B = new t.Controller.ControllerFactory(_, C);
export {
    B as a
};