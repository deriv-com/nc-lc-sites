import {
    ia as t
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var i = t,
    D = class D extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(D, "VariablesRecord");
var l = D;
l.init();
var V = class V extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(V, "WidgetsRecord");
var f = V,
    T = class T extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {}
    };
e(T, "Model");
var c = T;
c._hasValidationWidgetsValue = void 0;
var I = new i.Model.ModelFactory(c);
var o = t,
    v = class v extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(v, "VariablesRecord");
var u = v;
u.init();
var W = class W extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(W, "WidgetsRecord");
var y = W,
    _ = class _ extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {}
    };
e(_, "Model");
var m = _;
m._hasValidationWidgetsValue = void 0;
var H = new o.Model.ModelFactory(m);
var a = t,
    n = class n extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(r) {
            return new n(new n.RecordClass({
                isLoadingVar: a.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
e(n, "VariablesRecord");
var p = n;
p.init();
var A = class A extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(A, "WidgetsRecord");
var w = A,
    F = class F extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {}
    };
e(F, "Model");
var g = F;
g._hasValidationWidgetsValue = void 0;
var q = new a.Model.ModelFactory(g);
var d = t,
    R = class R extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(R, "VariablesRecord");
var h = R;
h.init();
var S = class S extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(S, "WidgetsRecord");
var B = S,
    s = class s extends d.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
e(s, "Model");
var M = s;
M._hasValidationWidgetsValue = void 0;
var K = new d.Model.ModelFactory(M);
export {
    I as a, H as b, q as c, K as d
};