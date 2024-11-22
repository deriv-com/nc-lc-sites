import {
    dc as e,
    oc as o
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as u
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";
var t = u,
    d = class d extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("RecentTransactionsList", "recentTransactionsListVar", "RecentTransactionsList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(d, "VariablesRecord");
var r = d;
r.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(l, "WidgetsRecord");
var c = l,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(s) {
            "TransactionsList" in s && (this.variables.transactionsListIn = s.TransactionsList, "_transactionsListInDataFetchStatus" in s && (this.variables._transactionsListInDataFetchStatus = s._transactionsListInDataFetchStatus))
        }
    };
i(a, "Model");
var n = a;
n._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(n);
export {
    D as a
};