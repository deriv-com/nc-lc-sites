import {
    kf as a,
    oc as u,
    zb as t
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as T
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var e = T,
    o = class o extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("TransferAmount", "transferAmountVar", "TransferAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("TransferTo", "transferToVar", "TransferTo", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("TransferFrom", "transferFromVar", "TransferFrom", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("IsTransferFromOpen", "isTransferFromOpenVar", "IsTransferFromOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferAccountList", "transferAccountListVar", "TransferAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("TransferAccountKey", "transferAccountKeyVar", "TransferAccountKey", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new e.DataTypes.TextList)
            }, !1, e.DataTypes.TextList), this.attr("IsTransferToOpen", "isTransferToOpenVar", "IsTransferToOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferFromAccountList", "transferFromAccountListVar", "TransferFromAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("ShowCurrencySwitcher", "showCurrencySwitcherVar", "ShowCurrencySwitcher", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CurrencySwitcher", "currencySwitcherVar", "CurrencySwitcher", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExchangeRate", "exchangeRateVar", "ExchangeRate", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ExchangeRateCountdownTimer", "exchangeRateCountdownTimerVar", "ExchangeRateCountdownTimer", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("IsTransferSuccess", "isTransferSuccessVar", "IsTransferSuccess", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferFromConvertedAmount", "transferFromConvertedAmountVar", "TransferFromConvertedAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("CalculatedFees", "calculatedFeesVar", "CalculatedFees", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FinalAmount", "finalAmountVar", "FinalAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedTransferAmount", "convertedTransferAmountVar", "ConvertedTransferAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedCalculatedFees", "convertedCalculatedFeesVar", "ConvertedCalculatedFees", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedFinalAmount", "convertedFinalAmountVar", "ConvertedFinalAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("TransferToConvertedAmount", "transferToConvertedAmountVar", "TransferToConvertedAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("WalletsAccountList", "walletsAccountListIn", "WalletsAccountList", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_walletsAccountListInDataFetchStatus", "_walletsAccountListInDataFetchStatus", "_walletsAccountListInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(o, "VariablesRecord");
var s = o;
s.init();
var c = class c extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            InputTransferExchangeAmount: e.Model.ValidationWidgetRecord,
            ExchangeRateSwitcher: e.Model.ValidationWidgetRecord,
            InputTransferAmount: e.Model.ValidationWidgetRecord
        }
    }
};
r(c, "WidgetsRecord");
var l = c,
    f = class f extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(i) {
            "WalletsAccountList" in i && (this.variables.walletsAccountListIn = e.DataConversion.ServerDataConverter.from(i.WalletsAccountList, e.DataTypes.DataTypes.Text))
        }
    };
r(f, "Model");
var n = f;
n._hasValidationWidgetsValue = void 0;
var m = new e.Model.ModelFactory(n);
export {
    m as a
};