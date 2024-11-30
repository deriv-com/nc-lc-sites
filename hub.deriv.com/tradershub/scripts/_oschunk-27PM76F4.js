import {
    We as l,
    Xe as p
} from "./_oschunk-44PT7RP7.js";
import {
    ia as f
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = f,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return p
        }
        static fromStructure(c) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
a(r, "GetCurrenciesAggrRec");
var s = r;
s.init();
var d = class d extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CryptoAddress", "cryptoAddressVar", "CryptoAddress", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("HasError", "hasErrorVar", "HasError", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new l)
        }, !1, l), this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !0, s)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(d, "VariablesRecord");
var o = d;
o.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(u, "WidgetsRecord");
var n = u,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
a(t, "Model");
var i = t;
i._hasValidationWidgetsValue = void 0;
var V = new e.Model.ModelFactory(i);
export {
    V as a
};