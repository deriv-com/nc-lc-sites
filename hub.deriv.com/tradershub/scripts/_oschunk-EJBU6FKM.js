import {
    ia as n
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = n,
    o = class o extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(o, "VariablesRecord");
var s = o;
s.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var r = d,
    t = class t extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0), t._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
a(t, "Model");
var i = t;
i._hasValidationWidgetsValue = void 0;
var h = new e.Model.ModelFactory(i);
export {
    h as a
};