import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = n,
    r = class r extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(r, "VariablesRecord");
var o = r;
o.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(l, "WidgetsRecord");
var i = l,
    e = class e extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(_) {}
    };
a(e, "Model");
var s = e;
s._hasValidationWidgetsValue = void 0;
var g = new t.Model.ModelFactory(s);
export {
    g as a
};