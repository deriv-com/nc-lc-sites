import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = u,
    n = class n extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(n, "VariablesRecord");
var o = n;
o.init();
var r = class r extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(r, "WidgetsRecord");
var i = r,
    t = class t extends a.Model.VariablelessViewModel {
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
e(t, "Model");
var s = t;
s._hasValidationWidgetsValue = void 0;
var V = new a.Model.ModelFactory(s);
export {
    V as a
};