import {
    Mf as m
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = c,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return m
        }
        static fromStructure(l) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(l)
            }))
        }
    };
a(r, "GetRevShareInfoTablesAggrRec");
var s = r;
s.init();
var d = class d extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("GetRevShareInfoTables", "getRevShareInfoTablesAggr", "GetRevShareInfoTables", !0, !0, e.DataTypes.DataTypes.Record, function() {
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
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(l) {}
    };
a(t, "Model");
var i = t;
i._hasValidationWidgetsValue = void 0;
var T = new e.Model.ModelFactory(i);
export {
    T as a
};