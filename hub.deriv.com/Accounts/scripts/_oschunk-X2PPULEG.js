import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = d,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var r = i;
r.init();
var s = class s extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: t.Model.ValidationWidgetRecord,
            Input_Server: t.Model.ValidationWidgetRecord,
            Input_OAuthAppId: t.Model.ValidationWidgetRecord
        }
    }
};
e(s, "WidgetsRecord");
var o = s,
    n = class n extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
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