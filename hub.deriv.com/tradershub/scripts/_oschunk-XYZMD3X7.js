import {
    Le as e
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var t = l,
    c = class c extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("RecentTransactionsList", "recentTransactionsListVar", "RecentTransactionsList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("Currency", "currencyVar", "Currency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("TransactionsList", "transactionsListIn", "TransactionsList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(c, "VariablesRecord");
var i = c;
i.init();
var d = class d extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(d, "WidgetsRecord");
var o = d,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(s) {
            "TransactionsList" in s && (this.variables.transactionsListIn = s.TransactionsList, "_transactionsListInDataFetchStatus" in s && (this.variables._transactionsListInDataFetchStatus = s._transactionsListInDataFetchStatus))
        }
    };
r(a, "Model");
var n = a;
n._hasValidationWidgetsValue = void 0;
var _ = new t.Model.ModelFactory(n);
export {
    _ as a
};