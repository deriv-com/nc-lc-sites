import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var o = i;
o.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var s = n,
    e = class e extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
a(e, "Model");
var r = e;
r._hasValidationWidgetsValue = void 0;
var g = new t.Model.ModelFactory(r);
export {
    g as a
};