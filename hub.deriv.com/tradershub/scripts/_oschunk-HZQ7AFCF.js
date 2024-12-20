import {
    Fb as u,
    Pf as a,
    Rb as t
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as T
} from "./_oschunk-5EPHB76O.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var e = T,
    l = class l extends e.DataTypes.GenericRecord {
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
            }, !1), this.attr("HasNoFunds", "hasNoFundsVar", "HasNoFunds", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasNoAccounts", "hasNoAccountsVar", "HasNoAccounts", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("DailyCumulativeAmountTransfers", "dailyCumulativeAmountTransfersVar", "DailyCumulativeAmountTransfers", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DailyTransfersCount", "dailyTransfersCountVar", "DailyTransfersCount", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("NullTransferAccount", "nullTransferAccountVar", "NullTransferAccount", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("ShowInitialTransferModal", "showInitialTransferModalVar", "ShowInitialTransferModal", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowDisclaimerMessage", "showDisclaimerMessageVar", "ShowDisclaimerMessage", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVerified", "isVerifiedVar", "IsVerified", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("LifetimeTransferLimit", "lifetimeTransferLimitVar", "LifetimeTransferLimit", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("FullTransferAccountList", "fullTransferAccountListVar", "FullTransferAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("FullTransferFromAccountList", "fullTransferFromAccountListVar", "FullTransferFromAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("to", "toIn", "to", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_toInDataFetchStatus", "_toInDataFetchStatus", "_toInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(l, "VariablesRecord");
var s = l;
s.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            InputTransferExchangeAmount: e.Model.ValidationWidgetRecord,
            ExchangeRateSwitcher: e.Model.ValidationWidgetRecord,
            InputTransferAmount: e.Model.ValidationWidgetRecord
        }
    }
};
r(f, "WidgetsRecord");
var o = f,
    i = class i extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {
            "to" in c && (this.variables.toIn = e.DataConversion.ServerDataConverter.from(c.to, e.DataTypes.DataTypes.Text))
        }
    };
r(i, "Model");
var n = i;
n._hasValidationWidgetsValue = void 0;
var A = new e.Model.ModelFactory(n);
export {
    A as a
};