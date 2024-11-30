import {
    Bf as t,
    Eb as a,
    tc as o
} from "./_oschunk-44PT7RP7.js";
import {
    ia as T
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var e = T,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("TransferAmount", "transferAmountVar", "TransferAmount", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("TransferTo", "transferToVar", "TransferTo", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("TransferFrom", "transferFromVar", "TransferFrom", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("IsTransferFromOpen", "isTransferFromOpenVar", "IsTransferFromOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferAccountList", "transferAccountListVar", "TransferAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("TransferAccountKey", "transferAccountKeyVar", "TransferAccountKey", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new e.DataTypes.TextList)
            }, !1, e.DataTypes.TextList), this.attr("IsTransferToOpen", "isTransferToOpenVar", "IsTransferToOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferFromAccountList", "transferFromAccountListVar", "TransferFromAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("ShowCurrencySwitcher", "showCurrencySwitcherVar", "ShowCurrencySwitcher", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
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
            }, !1), this.attr("HasNoFunds", "hasNoFundsVar", "HasNoFunds", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasNoAccounts", "hasNoAccountsVar", "HasNoAccounts", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("LifetimeFiatToCrypto", "lifetimeFiatToCryptoVar", "LifetimeFiatToCrypto", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("OptionTransferDailyLimit", "optionTransferDailyLimitVar", "OptionTransferDailyLimit", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("LifetimeCryptoToFiat", "lifetimeCryptoToFiatVar", "LifetimeCryptoToFiat", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("LifetimeCryptoToCrypto", "lifetimeCryptoToCryptoVar", "LifetimeCryptoToCrypto", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DailyCumulativeAmountTransfers", "dailyCumulativeAmountTransfersVar", "DailyCumulativeAmountTransfers", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DailyTransfers", "dailyTransfersVar", "DailyTransfers", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("to", "toIn", "to", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_toInDataFetchStatus", "_toInDataFetchStatus", "_toInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(i, "VariablesRecord");
var s = i;
s.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            InputTransferExchangeAmount: e.Model.ValidationWidgetRecord,
            ExchangeRateSwitcher: e.Model.ValidationWidgetRecord,
            InputTransferAmount: e.Model.ValidationWidgetRecord
        }
    }
};
r(l, "WidgetsRecord");
var u = l,
    f = class f extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {
            "to" in c && (this.variables.toIn = e.DataConversion.ServerDataConverter.from(c.to, e.DataTypes.DataTypes.Text))
        }
    };
r(f, "Model");
var n = f;
n._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(n);
export {
    C as a
};