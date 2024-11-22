import {
    df as p
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = c,
    a = class a extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return p
        }
        static fromStructure(u) {
            return new a(new a.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
e(a, "GetUserByIdAggrRec");
var r = a;
r.init();
var i = class i extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsExternal", "isExternalVar", "IsExternal", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("GetUserById", "getUserByIdAggr", "GetUserById", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new r)
        }, !0, r)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(i, "VariablesRecord");
var s = i;
s.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: t.Model.ValidationWidgetRecord,
            Input_Name: t.Model.ValidationWidgetRecord
        }
    }
};
e(l, "WidgetsRecord");
var n = l,
    d = class d extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
e(d, "Model");
var o = d;
o._hasValidationWidgetsValue = void 0;
var m = new t.Model.ModelFactory(o);
export {
    m as a
};