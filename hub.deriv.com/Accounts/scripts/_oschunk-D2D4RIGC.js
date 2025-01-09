import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = c,
    n = class n extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(n, "VariablesRecord");
var o = n;
o.init();
var r = class r extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(r, "WidgetsRecord");
var i = r,
    t = class t extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
a(t, "Model");
var s = t;
s._hasValidationWidgetsValue = void 0;
var M = new e.Model.ModelFactory(s);
export {
    M as a
};