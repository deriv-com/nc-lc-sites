import {
    ia as n
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = n,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Email", "emailVar", "Email", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(l) {
            return new e(new e.RecordClass({
                emailVar: t.DataTypes.ImmutableBase.getData(l)
            }))
        }
    };
a(e, "VariablesRecord");
var r = e;
r.init();
var o = class o extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form2: t.Model.ValidationWidgetRecord,
            Email_Input2: t.Model.ValidationWidgetRecord,
            Form: t.Model.ValidationWidgetRecord,
            Email_Input: t.Model.ValidationWidgetRecord
        }
    }
};
a(o, "WidgetsRecord");
var s = o,
    d = class d extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
a(d, "Model");
var i = d;
i._hasValidationWidgetsValue = void 0;
var m = new t.Model.ModelFactory(i);
export {
    m as a
};