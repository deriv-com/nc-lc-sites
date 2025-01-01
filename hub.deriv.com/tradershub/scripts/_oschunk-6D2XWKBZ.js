import {
    Qj as d,
    kj as b
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as f
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = f,
    s = class s extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return b
        }
        static fromStructure(c) {
            return new s(new s.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
a(s, "GetCurrenciesAggrRec");
var r = s;
r.init();
var u = class u extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("AvailableAccounts", "availableAccountsVar", "AvailableAccounts", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new d)
        }, !1, d), this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new r)
        }, !0, r)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(u, "VariablesRecord");
var i = u;
i.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(l, "WidgetsRecord");
var n = l,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0), t._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
a(t, "Model");
var o = t;
o._hasValidationWidgetsValue = void 0;
var h = new e.Model.ModelFactory(o);
export {
    h as a
};