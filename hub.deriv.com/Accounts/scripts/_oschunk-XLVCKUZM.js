import {
    bd as a,
    ne as f
} from "./_oschunk-UATY3RVV.js";
import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = d,
    D = class D extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("LimitText", "limitTextVar", "LimitText", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("LoginDataToday", "loginDataTodayVar", "LoginDataToday", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("LoginDataLast7", "loginDataLast7Var", "LoginDataLast7", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("LoginDataLast90", "loginDataLast90Var", "LoginDataLast90", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new a)
            }, !1, a)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(D, "VariablesRecord");
var r = D;
r.init();
var _ = class _ extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(_, "WidgetsRecord");
var p = _,
    o = class o extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(V) {}
    };
e(o, "Model");
var l = o;
l._hasValidationWidgetsValue = void 0;
var C = new t.Model.ModelFactory(l);
var n = d,
    T = class T extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(T, "VariablesRecord");
var u = T;
u.init();
var M = class M extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(M, "WidgetsRecord");
var y = M,
    s = class s extends n.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(V) {}
    };
e(s, "Model");
var m = s;
m._hasValidationWidgetsValue = void 0;
var S = new n.Model.ModelFactory(m);
export {
    C as a, S as b
};