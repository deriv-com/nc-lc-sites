import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = l,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsSubmitting", "isSubmittingVar", "IsSubmitting", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(u) {
            return new e(new e.RecordClass({
                isSubmittingVar: t.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
a(e, "VariablesRecord");
var r = e;
r.init();
var o = class o extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: t.Model.ValidationWidgetRecord,
            Input_Email: t.Model.ValidationWidgetRecord
        }
    }
};
a(o, "WidgetsRecord");
var i = o,
    n = class n extends t.Model.BaseViewModel {
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
var g = new t.Model.ModelFactory(s);
export {
    g as a
};