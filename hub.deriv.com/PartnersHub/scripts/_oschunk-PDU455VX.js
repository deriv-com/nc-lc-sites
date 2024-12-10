import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var r = i;
r.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(n, "WidgetsRecord");
var s = n,
    o = class o extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(l) {}
    };
e(o, "Model");
var a = o;
a._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(a);
export {
    p as a
};