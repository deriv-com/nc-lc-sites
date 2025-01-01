import {
    Ek as n,
    Mk as t,
    ge as d,
    of as l,
    pf as i
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as _
} from "./_oschunk-2JKANR6M.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var a = _,
    u = class u extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("CreatedCtraderAccounts", "createdCtraderAccountsVar", "CreatedCtraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("SelectedAccount", "selectedAccountVar", "SelectedAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("SelectedAvailableAccount", "selectedAvailableAccountVar", "SelectedAvailableAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("TotalCTraderBalance", "totalCTraderBalanceVar", "TotalCTraderBalance", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DataLoading", "dataLoadingVar", "DataLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("IsMt5PasswordSet", "isMt5PasswordSetVar", "IsMt5PasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsDxtradePasswordSet", "isDxtradePasswordSetVar", "IsDxtradePasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CTraderAvailableAccountsCount", "cTraderAvailableAccountsCountVar", "CTraderAvailableAccountsCount", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("ProfileSetup", "profileSetupVar", "ProfileSetup", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("IsDowntime", "isDowntimeVar", "IsDowntime", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AccountCreationLoading", "accountCreationLoadingVar", "AccountCreationLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowModal", "showModalVar", "ShowModal", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ProductIdentifier", "productIdentifierIn", "ProductIdentifier", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(u, "VariablesRecord");
var o = u;
o.init();
var f = class f extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(f, "WidgetsRecord");
var c = f,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(m) {
            "ProductIdentifier" in m && (this.variables.productIdentifierIn = a.DataConversion.ServerDataConverter.from(m.ProductIdentifier, a.DataTypes.DataTypes.Text))
        }
    };
r(e, "Model");
var s = e;
s._hasValidationWidgetsValue = void 0;
var E = new a.Model.ModelFactory(s);
export {
    E as a
};