import {
    ia as d
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = d,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var s = i;
s.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(l, "WidgetsRecord");
var o = l,
    t = class t extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
a(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var f = new e.Model.ModelFactory(r);
export {
    f as a
};