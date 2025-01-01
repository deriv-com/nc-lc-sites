import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(o, "VariablesRecord");
var i = o;
i.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var r = n,
    e = class e extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(_) {}
    };
a(e, "Model");
var s = e;
s._hasValidationWidgetsValue = void 0;
var P = new t.Model.ModelFactory(s);
export {
    P as a
};