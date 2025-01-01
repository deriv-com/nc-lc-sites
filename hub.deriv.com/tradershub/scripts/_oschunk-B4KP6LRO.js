import {
    Ke as r,
    Le as n
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = c,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("DatesList", "datesListVar", "DatesList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new t.DataTypes.TextList)
            }, !1, t.DataTypes.TextList), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActionTypeValue", "actionTypeValueVar", "ActionTypeValue", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "all"
            }, !1), this.attr("ShowTransactionDetails", "showTransactionDetailsVar", "ShowTransactionDetails", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentTransactionDetails", "currentTransactionDetailsVar", "CurrentTransactionDetails", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("ShowCancelWithdrawalModal", "showCancelWithdrawalModalVar", "ShowCancelWithdrawalModal", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsCrypto", "isCryptoVar", "IsCrypto", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Sort", "sortVar", "Sort", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "all"
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var e = i;
e.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RealButtonGroup: t.Model.ValidationWidgetRecord,
            DemoButtonGroup: t.Model.ValidationWidgetRecord
        }
    }
};
a(l, "WidgetsRecord");
var o = l,
    u = class u extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return e
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {}
    };
a(u, "Model");
var s = u;
s._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(s);
export {
    p as a
};