import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = l,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var s = i;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var o = n,
    e = class e extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
a(e, "Model");
var r = e;
r._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(r);
export {
    p as a
};