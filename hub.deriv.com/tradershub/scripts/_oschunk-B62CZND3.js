import {
    ia as y
} from "./_oschunk-5EPHB76O.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var t = y,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AmountAfterFees", "amountAfterFeesVar", "AmountAfterFees", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FormattedAddress", "formattedAddressVar", "FormattedAddress", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CryptoAmount", "cryptoAmountIn", "CryptoAmount", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("_cryptoAmountInDataFetchStatus", "_cryptoAmountInDataFetchStatus", "_cryptoAmountInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CryptoAddress", "cryptoAddressIn", "CryptoAddress", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_cryptoAddressInDataFetchStatus", "_cryptoAddressInDataFetchStatus", "_cryptoAddressInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CryptoCurrency", "cryptoCurrencyIn", "CryptoCurrency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_cryptoCurrencyInDataFetchStatus", "_cryptoCurrencyInDataFetchStatus", "_cryptoCurrencyInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionFee", "transactionFeeIn", "TransactionFee", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.DataTypes.Decimal.defaultValue
            }, !1), this.attr("_transactionFeeInDataFetchStatus", "_transactionFeeInDataFetchStatus", "_transactionFeeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsPriority", "isPriorityIn", "IsPriority", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPriorityInDataFetchStatus", "_isPriorityInDataFetchStatus", "_isPriorityInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(i, "VariablesRecord");
var s = i;
s.init();
var u = class u extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(u, "WidgetsRecord");
var o = u,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(a) {
            "CryptoAmount" in a && (this.variables.cryptoAmountIn = t.DataConversion.ServerDataConverter.from(a.CryptoAmount, t.DataTypes.DataTypes.Decimal)), "CryptoAddress" in a && (this.variables.cryptoAddressIn = t.DataConversion.ServerDataConverter.from(a.CryptoAddress, t.DataTypes.DataTypes.Text)), "CryptoCurrency" in a && (this.variables.cryptoCurrencyIn = t.DataConversion.ServerDataConverter.from(a.CryptoCurrency, t.DataTypes.DataTypes.Text)), "TransactionFee" in a && (this.variables.transactionFeeIn = t.DataConversion.ServerDataConverter.from(a.TransactionFee, t.DataTypes.DataTypes.Decimal)), "IsPriority" in a && (this.variables.isPriorityIn = t.DataConversion.ServerDataConverter.from(a.IsPriority, t.DataTypes.DataTypes.Boolean))
        }
    };
r(e, "Model");
var n = e;
n._hasValidationWidgetsValue = void 0;
var f = new t.Model.ModelFactory(n);
export {
    f as a
};