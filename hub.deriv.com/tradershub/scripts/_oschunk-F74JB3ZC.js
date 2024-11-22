import {
    oc as i,
    vd as s
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IframeUrl", "iframeUrlVar", "IframeUrl", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CryptoAddress", "cryptoAddressVar", "CryptoAddress", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("WithdrawalAmount", "withdrawalAmountVar", "WithdrawalAmount", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.BuiltinFunctions.integerToDecimal(0)
            }, !1), this.attr("IsWithdrawalPriority", "isWithdrawalPriorityVar", "IsWithdrawalPriority", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CryptoMinimumWthdrawalAmount", "cryptoMinimumWthdrawalAmountVar", "CryptoMinimumWthdrawalAmount", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExchangeRate", "exchangeRateVar", "ExchangeRate", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SerializePriorityWithdrawalInfo", "serializePriorityWithdrawalInfoVar", "SerializePriorityWithdrawalInfo", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("FinalCryptoAmount", "finalCryptoAmountVar", "FinalCryptoAmount", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FinalConvertedAmount", "finalConvertedAmountVar", "FinalConvertedAmount", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("RateTimer", "rateTimerVar", "RateTimer", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("PriorityWithdrawalTimer", "priorityWithdrawalTimerVar", "PriorityWithdrawalTimer", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("DeserializePriorityWithdrawalInfo", "deserializePriorityWithdrawalInfoVar", "DeserializePriorityWithdrawalInfo", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CurrencySwitcher", "currencySwitcherVar", "CurrencySwitcher", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("WithdrawalAmountInCrypto", "withdrawalAmountInCryptoVar", "WithdrawalAmountInCrypto", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("WithdrawalAmountInFiat", "withdrawalAmountInFiatVar", "WithdrawalAmountInFiat", !0, !1, t.DataTypes.DataTypes.Currency, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("isPriorityWithdrawalError", "isPriorityWithdrawalErrorVar", "isPriorityWithdrawalError", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isTransactionLimitReached", "isTransactionLimitReachedVar", "isTransactionLimitReached", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(o, "VariablesRecord");
var e = o;
e.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: t.Model.ValidationWidgetRecord,
            Input_CryptoAddress: t.Model.ValidationWidgetRecord,
            ButtonGroup: t.Model.ValidationWidgetRecord,
            Input_CryptoAmount: t.Model.ValidationWidgetRecord,
            ExchangeRateSwitcher: t.Model.ValidationWidgetRecord,
            Checkbox1: t.Model.ValidationWidgetRecord
        }
    }
};
a(l, "WidgetsRecord");
var n = l,
    u = class u extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return e
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(f) {}
    };
a(u, "Model");
var r = u;
r._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(r);
export {
    D as a
};