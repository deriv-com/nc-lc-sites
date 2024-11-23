import {
    ia as r
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(u, "VariablesRecord");
var i = u;
i.init();
var m = class m extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            TaxInfoForm: e.Model.ValidationWidgetRecord,
            Input1: e.Model.ValidationWidgetRecord,
            TaxIdentificationNumber: e.Model.ValidationWidgetRecord,
            Checkbox1: e.Model.ValidationWidgetRecord
        }
    }
};
t(m, "WidgetsRecord");
var l = m,
    p = class p extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(W) {}
    };
t(p, "Model");
var s = p;
s._hasValidationWidgetsValue = void 0;
var h = new e.Model.ModelFactory(s);
var o = r,
    V = class V extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(V, "VariablesRecord");
var n = V;
n.init();
var M = class M extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var g = M,
    a = class a extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(W) {}
    };
t(a, "Model");
var d = a;
d._hasValidationWidgetsValue = void 0;
var T = new o.Model.ModelFactory(d);
export {
    h as a, T as b
};