import {
    ia as d
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = d,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isCreateAccountLoading", "isCreateAccountLoadingVar", "isCreateAccountLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(c) {
            return new e(new e.RecordClass({
                isCreateAccountLoadingVar: t.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
a(e, "VariablesRecord");
var r = e;
r.init();
var s = class s extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form3: t.Model.ValidationWidgetRecord,
            Email3: t.Model.ValidationWidgetRecord,
            Form2: t.Model.ValidationWidgetRecord,
            Email2: t.Model.ValidationWidgetRecord
        }
    }
};
a(s, "WidgetsRecord");
var i = s,
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
        setInputs(c) {}
    };
a(n, "Model");
var o = n;
o._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(o);
export {
    p as a
};