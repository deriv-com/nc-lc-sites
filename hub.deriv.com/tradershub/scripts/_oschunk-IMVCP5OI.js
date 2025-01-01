import {
    Fd as t,
    bk as e,
    fc as i,
    qd as n
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as D
} from "./_oschunk-2JKANR6M.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var a = D,
    o = class o extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("TransferAmount", "transferAmountVar", "TransferAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("TransferTo", "transferToVar", "TransferTo", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("TransferFrom", "transferFromVar", "TransferFrom", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("IsTransferFromOpen", "isTransferFromOpenVar", "IsTransferFromOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferAccountList", "transferAccountListVar", "TransferAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("TransferAccountKey", "transferAccountKeyVar", "TransferAccountKey", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new a.DataTypes.TextList)
            }, !1, a.DataTypes.TextList), this.attr("IsTransferToOpen", "isTransferToOpenVar", "IsTransferToOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferFromAccountList", "transferFromAccountListVar", "TransferFromAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("ShowCurrencySwitcher", "showCurrencySwitcherVar", "ShowCurrencySwitcher", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CurrencySwitcher", "currencySwitcherVar", "CurrencySwitcher", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExchangeRate", "exchangeRateVar", "ExchangeRate", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ExchangeRateCountdownTimer", "exchangeRateCountdownTimerVar", "ExchangeRateCountdownTimer", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("IsTransferSuccess", "isTransferSuccessVar", "IsTransferSuccess", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TransferFromConvertedAmount", "transferFromConvertedAmountVar", "TransferFromConvertedAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("CalculatedFees", "calculatedFeesVar", "CalculatedFees", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FinalAmount", "finalAmountVar", "FinalAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedTransferAmount", "convertedTransferAmountVar", "ConvertedTransferAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedCalculatedFees", "convertedCalculatedFeesVar", "ConvertedCalculatedFees", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("ConvertedFinalAmount", "convertedFinalAmountVar", "ConvertedFinalAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("TransferToConvertedAmount", "transferToConvertedAmountVar", "TransferToConvertedAmount", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("DailyCumulativeAmountTransfers", "dailyCumulativeAmountTransfersVar", "DailyCumulativeAmountTransfers", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DailyTransfersCount", "dailyTransfersCountVar", "DailyTransfersCount", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("NullTransferAccount", "nullTransferAccountVar", "NullTransferAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("ShowInitialTransferModal", "showInitialTransferModalVar", "ShowInitialTransferModal", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowDisclaimerMessage", "showDisclaimerMessageVar", "ShowDisclaimerMessage", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("LifetimeTransferLimit", "lifetimeTransferLimitVar", "LifetimeTransferLimit", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("FullTransferAccountList", "fullTransferAccountListVar", "FullTransferAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("FullTransferFromAccountList", "fullTransferFromAccountListVar", "FullTransferFromAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("IsTransferButtonLoading", "isTransferButtonLoadingVar", "IsTransferButtonLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PageTitle", "pageTitleVar", "PageTitle", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "Transfer"
            }, !1), this.attr("ShowContent", "showContentVar", "ShowContent", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("POIStatus", "pOIStatusVar", "POIStatus", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CryptoToFiatAvailableLimit", "cryptoToFiatAvailableLimitVar", "CryptoToFiatAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("CryptoToCryptoAvailableLimit", "cryptoToCryptoAvailableLimitVar", "CryptoToCryptoAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FiatToCryptoAvailableLimit", "fiatToCryptoAvailableLimitVar", "FiatToCryptoAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("CryptoToFiatAllowedLimit", "cryptoToFiatAllowedLimitVar", "CryptoToFiatAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("CryptoToCryptoAllowedLimit", "cryptoToCryptoAllowedLimitVar", "CryptoToCryptoAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FiatToCryptoAllowedLimit", "fiatToCryptoAllowedLimitVar", "FiatToCryptoAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("VirtualDailyAvailableLimit", "virtualDailyAvailableLimitVar", "VirtualDailyAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("VirtualDailyAllowedLimit", "virtualDailyAllowedLimitVar", "VirtualDailyAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("DtradeDailyAvailableLimit", "dtradeDailyAvailableLimitVar", "DtradeDailyAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("DtradeDailyAllowedLimit", "dtradeDailyAllowedLimitVar", "DtradeDailyAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("MT5DailyAvailableLimit", "mT5DailyAvailableLimitVar", "MT5DailyAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("MT5DailyAllowedLimit", "mT5DailyAllowedLimitVar", "MT5DailyAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("DxtradeDailyAvailableLimit", "dxtradeDailyAvailableLimitVar", "DxtradeDailyAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("DxtradeDailyAllowedLimit", "dxtradeDailyAllowedLimitVar", "DxtradeDailyAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("WalletDailyAvailableLimit", "walletDailyAvailableLimitVar", "WalletDailyAvailableLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("WalletDailyAllowedLimit", "walletDailyAllowedLimitVar", "WalletDailyAllowedLimit", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("FeePercentage", "feePercentageVar", "FeePercentage", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("MinimumFeeAmount", "minimumFeeAmountVar", "MinimumFeeAmount", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DailyTransferLimitCount", "dailyTransferLimitCountVar", "DailyTransferLimitCount", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsInputDisabled", "isInputDisabledVar", "IsInputDisabled", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("to", "toIn", "to", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_toInDataFetchStatus", "_toInDataFetchStatus", "_toInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(o, "VariablesRecord");
var s = o;
s.init();
var f = class f extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            InputTransferExchangeAmount: a.Model.ValidationWidgetRecord,
            ExchangeRateSwitcher: a.Model.ValidationWidgetRecord,
            InputTransferAmount: a.Model.ValidationWidgetRecord
        }
    }
};
r(f, "WidgetsRecord");
var u = f,
    c = class c extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(T) {
            "to" in T && (this.variables.toIn = a.DataConversion.ServerDataConverter.from(T.to, a.DataTypes.DataTypes.Text))
        }
    };
r(c, "Model");
var l = c;
l._hasValidationWidgetsValue = void 0;
var b = new a.Model.ModelFactory(l);
export {
    b as a
};