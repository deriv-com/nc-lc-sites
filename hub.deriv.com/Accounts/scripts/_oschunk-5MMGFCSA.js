import {
    ia as a
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = a,
    V = class V extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Device", "deviceVar", "Device", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ObserverObj", "observerObjVar", "ObserverObj", !0, !1, e.DataTypes.DataTypes.Object, function() {
                return null
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(V, "VariablesRecord");
var o = V;
o.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(f, "WidgetsRecord");
var m = f,
    y = class y extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(x) {}
    };
t(y, "Model");
var c = y;
c._hasValidationWidgetsValue = void 0;
var S = new e.Model.ModelFactory(c);
var r = a,
    h = class h extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(h, "VariablesRecord");
var l = h;
l.init();
var M = class M extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var D = M,
    s = class s extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0), s._hasValidationWidgetsValue
        }
        setInputs(x) {}
    };
t(s, "Model");
var d = s;
d._hasValidationWidgetsValue = void 0;
var w = new r.Model.ModelFactory(d);
var n = a,
    v = class v extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(v, "VariablesRecord");
var u = v;
u.init();
var W = class W extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(W, "WidgetsRecord");
var O = W,
    i = class i extends n.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(x) {}
    };
t(i, "Model");
var p = i;
p._hasValidationWidgetsValue = void 0;
var _ = new n.Model.ModelFactory(p);
export {
    S as a, w as b, _ as c
};