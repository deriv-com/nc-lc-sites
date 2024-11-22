import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = d,
    t = class t extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsRequired", "isRequiredVar", "IsRequired", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(u) {
            return new t(new t.RecordClass({
                isRequiredVar: e.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
a(t, "VariablesRecord");
var r = t;
r.init();
var o = class o extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RadioGroupTwo: e.Model.ValidationWidgetRecord
        }
    }
};
a(o, "WidgetsRecord");
var i = o,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
a(n, "Model");
var s = n;
s._hasValidationWidgetsValue = void 0;
var m = new e.Model.ModelFactory(s);
export {
    m as a
};