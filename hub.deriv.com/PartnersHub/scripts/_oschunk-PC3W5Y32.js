import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    n = class n extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(n, "VariablesRecord");
var r = n;
r.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(i, "WidgetsRecord");
var s = i,
    e = class e extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return r
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
var o = e;
o._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(o);
export {
    p as a
};