import {
    ia as n
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = n,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var a = i;
a.init();
var s = class s extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DesktopForm: t.Model.ValidationWidgetRecord,
            salutation: t.Model.ValidationWidgetRecord,
            Input_FirstName: t.Model.ValidationWidgetRecord,
            Input_LastName: t.Model.ValidationWidgetRecord,
            Input_Date: t.Model.ValidationWidgetRecord
        }
    }
};
e(s, "WidgetsRecord");
var r = s,
    d = class d extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
e(d, "Model");
var o = d;
o._hasValidationWidgetsValue = void 0;
var g = new t.Model.ModelFactory(o);
export {
    g as a
};