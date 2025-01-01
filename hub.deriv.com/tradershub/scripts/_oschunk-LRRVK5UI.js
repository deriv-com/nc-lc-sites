import {
    Ek as f,
    Mk as r,
    ge as c,
    of as n,
    pf as u
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as b
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = b,
    s = class s extends e.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("Success", "successOut", "Success", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !0)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(d) {
            return new s(new s.RecordClass({
                successOut: e.DataTypes.ImmutableBase.getData(d)
            }))
        }
    };
t(s, "MT5LoginList2DataActRec");
var o = s;
o.init();
var _ = class _ extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new r)
        }, !1, r), this.attr("CreatedCtraderAccounts", "createdCtraderAccountsVar", "CreatedCtraderAccounts", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new r)
        }, !1, r), this.attr("SelectedAccount", "selectedAccountVar", "SelectedAccount", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new c)
        }, !1, c), this.attr("SelectedAvailableAccount", "selectedAvailableAccountVar", "SelectedAvailableAccount", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new u)
        }, !1, u), this.attr("TotalCTraderBalance", "totalCTraderBalanceVar", "TotalCTraderBalance", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("DataLoading", "dataLoadingVar", "DataLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("IsMt5PasswordSet", "isMt5PasswordSetVar", "IsMt5PasswordSet", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsDxtradePasswordSet", "isDxtradePasswordSetVar", "IsDxtradePasswordSet", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("CTraderAvailableAccountsCount", "cTraderAvailableAccountsCountVar", "CTraderAvailableAccountsCount", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("ProfileSetup", "profileSetupVar", "ProfileSetup", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new n)
        }, !1, n), this.attr("IsDowntime", "isDowntimeVar", "IsDowntime", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("AccountCreationLoading", "accountCreationLoadingVar", "AccountCreationLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ProductIdentifier", "productIdentifierIn", "ProductIdentifier", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("MT5LoginList2", "mT5LoginList2DataAct", "MT5LoginList2", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new o)
        }, !0, o)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(_, "VariablesRecord");
var l = _;
l.init();
var D = class D extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(D, "WidgetsRecord");
var m = D,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(d) {
            "ProductIdentifier" in d && (this.variables.productIdentifierIn = e.DataConversion.ServerDataConverter.from(d.ProductIdentifier, e.DataTypes.DataTypes.Text))
        }
    };
t(a, "Model");
var i = a;
i._hasValidationWidgetsValue = void 0;
var U = new e.Model.ModelFactory(i);
export {
    U as a
};