import {
    ic as o,
    tc as l
} from "./_oschunk-44PT7RP7.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = c,
    d = class d extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new l)
            }, !1, l)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(d, "VariablesRecord");
var s = d;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(n, "WidgetsRecord");
var i = n,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(p) {}
    };
e(a, "Model");
var r = a;
r._hasValidationWidgetsValue = void 0;
var y = new t.Model.ModelFactory(r);
export {
    y as a
};