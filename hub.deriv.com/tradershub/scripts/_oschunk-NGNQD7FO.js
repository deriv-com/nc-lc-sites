import {
    ia as t
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var r = t,
    D = class D extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(D, "VariablesRecord");
var n = D;
n.init();
var b = class b extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(b, "WidgetsRecord");
var M = b,
    T = class T extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(h) {}
    };
e(T, "Model");
var d = T;
d._hasValidationWidgetsValue = void 0;
var I = new r.Model.ModelFactory(d);
var i = t,
    y = class y extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(y, "VariablesRecord");
var l = y;
l.init();
var C = class C extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(C, "WidgetsRecord");
var V = C,
    _ = class _ extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(h) {}
    };
e(_, "Model");
var c = _;
c._hasValidationWidgetsValue = void 0;
var k = new i.Model.ModelFactory(c);
var a = t,
    w = class w extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DerivXData", "derivXDataVar", "DerivXData", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(w, "VariablesRecord");
var u = w;
u.init();
var A = class A extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(A, "WidgetsRecord");
var W = A,
    F = class F extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(h) {}
    };
e(F, "Model");
var p = F;
p._hasValidationWidgetsValue = void 0;
var q = new a.Model.ModelFactory(p);
var o = t,
    G = class G extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(G, "VariablesRecord");
var m = G;
m.init();
var O = class O extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(O, "WidgetsRecord");
var B = O,
    s = class s extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(h) {}
    };
e(s, "Model");
var g = s;
g._hasValidationWidgetsValue = void 0;
var K = new o.Model.ModelFactory(g);
export {
    I as a, k as b, q as c, K as d
};