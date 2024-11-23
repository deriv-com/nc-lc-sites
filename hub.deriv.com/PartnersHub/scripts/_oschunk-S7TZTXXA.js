import {
    ia as o
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = o,
    u = class u extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(u, "VariablesRecord");
var s = u;
s.init();
var m = class m extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CompanyDetailsForm: t.Model.ValidationWidgetRecord,
            CompanyNameInput: t.Model.ValidationWidgetRecord,
            CompanyRegistrationNumberInput: t.Model.ValidationWidgetRecord,
            CompanyWebsiteInput: t.Model.ValidationWidgetRecord
        }
    }
};
e(m, "WidgetsRecord");
var l = m,
    p = class p extends t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(M) {}
    };
e(p, "Model");
var i = p;
i._hasValidationWidgetsValue = void 0;
var f = new t.Model.ModelFactory(i);
var r = o,
    V = class V extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(V, "VariablesRecord");
var n = V;
n.init();
var y = class y extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(y, "WidgetsRecord");
var g = y,
    a = class a extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
e(a, "Model");
var d = a;
d._hasValidationWidgetsValue = void 0;
var T = new r.Model.ModelFactory(d);
export {
    f as a, T as b
};