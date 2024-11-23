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
var a = i;
a.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(n, "WidgetsRecord");
var r = n,
    o = class o extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(l) {}
    };
e(o, "Model");
var s = o;
s._hasValidationWidgetsValue = void 0;
var u = new t.Model.ModelFactory(s);
export {
    u as a
};