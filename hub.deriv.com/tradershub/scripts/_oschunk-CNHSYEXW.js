import {
    Ge as T,
    If as s,
    dc as d,
    oc as n
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as p
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = p,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return T
        }
        static fromStructure(b) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(b)
            }))
        }
    };
a(r, "GetCurrenciesByCodeAggrRec");
var i = r;
i.init();
var c = class c extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new n)
        }, !1, n), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new d)
        }, !1, d), this.attr("WalletsAccountList", "walletsAccountListVar", "WalletsAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !1, s), this.attr("DeserializeAddMoreWalletsList", "deserializeAddMoreWalletsListVar", "DeserializeAddMoreWalletsList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !1, s), this.attr("SerializeAddMoreWaleltsList", "serializeAddMoreWaleltsListVar", "SerializeAddMoreWaleltsList", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("GetCurrenciesByCode", "getCurrenciesByCodeAggr", "GetCurrenciesByCode", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !0, i)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(c, "VariablesRecord");
var l = c;
l.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(f, "WidgetsRecord");
var u = f,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(b) {}
    };
a(t, "Model");
var o = t;
o._hasValidationWidgetsValue = void 0;
var W = new e.Model.ModelFactory(o);
export {
    W as a
};