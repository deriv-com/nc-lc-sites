import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = l,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var a = o;
a.init();
var d = class d extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: t.Model.ValidationWidgetRecord,
            FirstName2: t.Model.ValidationWidgetRecord,
            LastName2: t.Model.ValidationWidgetRecord,
            Form2: t.Model.ValidationWidgetRecord,
            FirstName3: t.Model.ValidationWidgetRecord,
            LastName3: t.Model.ValidationWidgetRecord,
            Input_DateOfBirth: t.Model.ValidationWidgetRecord
        }
    }
};
e(d, "WidgetsRecord");
var i = d,
    s = class s extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(n) {}
    };
e(s, "Model");
var r = s;
r._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(r);
export {
    p as a
};