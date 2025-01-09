import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    n = class n extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(n, "VariablesRecord");
var s = n;
s.init();
var c = class c extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(c, "WidgetsRecord");
var o = c,
    t = class t extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0), t._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
a(t, "Model");
var i = t;
i._hasValidationWidgetsValue = void 0;
var g = new e.Model.ModelFactory(i);
export {
    g as a
};