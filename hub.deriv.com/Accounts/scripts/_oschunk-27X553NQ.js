import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    c = class c extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(c, "VariablesRecord");
var a = c;
a.init();
var n = class n extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(n, "WidgetsRecord");
var i = n,
    t = class t extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(_) {}
    };
o(t, "Model");
var s = t;
s._hasValidationWidgetsValue = void 0;
var g = new e.Model.ModelFactory(s);
export {
    g as a
};