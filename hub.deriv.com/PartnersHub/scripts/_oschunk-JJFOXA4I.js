import {
    ia as s
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = s,
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
            IndividualForm: e.Model.ValidationWidgetRecord,
            IndividualWebsite: e.Model.ValidationWidgetRecord
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
var o = p;
o._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(o);
var r = s,
    V = class V extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(V, "VariablesRecord");
var n = V;
n.init();
var M = class M extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var g = M,
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
        setInputs(W) {}
    };
t(a, "Model");
var d = a;
d._hasValidationWidgetsValue = void 0;
var T = new r.Model.ModelFactory(d);
export {
    C as a, T as b
};