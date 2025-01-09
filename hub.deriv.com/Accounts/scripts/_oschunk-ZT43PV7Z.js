import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var a = o,
    m = class m extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(m, "VariablesRecord");
var n = m;
n.init();
var p = class p extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(p, "WidgetsRecord");
var l = p,
    e = class e extends a.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(A) {}
    };
t(e, "Model");
var c = e;
c._hasValidationWidgetsValue = void 0;
var C = new a.Model.ModelFactory(c);
var i = o,
    g = class g extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(g, "VariablesRecord");
var r = g;
r.init();
var V = class V extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(V, "WidgetsRecord");
var _ = V,
    s = class s extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(A) {}
    };
t(s, "Model");
var d = s;
d._hasValidationWidgetsValue = void 0;
var L = new i.Model.ModelFactory(d);
export {
    C as a, L as b
};