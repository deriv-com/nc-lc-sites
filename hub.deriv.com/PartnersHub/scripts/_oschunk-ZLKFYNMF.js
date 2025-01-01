import {
    ia as t
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var r = t,
    b = class b extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(b, "VariablesRecord");
var m = b;
m.init();
var C = class C extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(C, "WidgetsRecord");
var H = C,
    a = class a extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
e(a, "Model");
var u = a;
u._hasValidationWidgetsValue = void 0;
var z = new r.Model.ModelFactory(u);
var n = t,
    v = class v extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(v, "VariablesRecord");
var c = v;
c.init();
var y = class y extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(y, "WidgetsRecord");
var P = y,
    s = class s extends n.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
e(s, "Model");
var p = s;
p._hasValidationWidgetsValue = void 0;
var Q = new n.Model.ModelFactory(p);
var l = t,
    S = class S extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(S, "VariablesRecord");
var _ = S;
_.init();
var x = class x extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(x, "WidgetsRecord");
var D = x,
    i = class i extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
e(i, "Model");
var g = i;
g._hasValidationWidgetsValue = void 0;
var $ = new l.Model.ModelFactory(g);
var d = t,
    O = class O extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(O, "VariablesRecord");
var V = O;
V.init();
var R = class R extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(R, "WidgetsRecord");
var B = R,
    o = class o extends d.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
e(o, "Model");
var f = o;
f._hasValidationWidgetsValue = void 0;
var se = new d.Model.ModelFactory(f);
export {
    z as a, Q as b, $ as c, se as d
};