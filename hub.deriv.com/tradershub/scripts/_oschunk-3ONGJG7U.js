import {
    ia as d
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = d,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var r = i;
r.init();
var o = class o extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RealDemoSwitcher: t.Model.ValidationWidgetRecord
        }
    }
};
e(o, "WidgetsRecord");
var s = o,
    n = class n extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
e(n, "Model");
var a = n;
a._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(a);
export {
    p as a
};