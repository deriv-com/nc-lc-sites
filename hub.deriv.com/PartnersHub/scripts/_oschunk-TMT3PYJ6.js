import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = i,
    m = class m extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UserEmail", "userEmailIn", "UserEmail", !0, !1, e.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("_userEmailInDataFetchStatus", "_userEmailInDataFetchStatus", "_userEmailInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(m, "VariablesRecord");
var o = m;
o.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(f, "WidgetsRecord");
var c = f,
    p = class p extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(s) {
            "UserEmail" in s && (this.variables.userEmailIn = s.UserEmail, "_userEmailInDataFetchStatus" in s && (this.variables._userEmailInDataFetchStatus = s._userEmailInDataFetchStatus))
        }
    };
t(p, "Model");
var l = p;
l._hasValidationWidgetsValue = void 0;
var b = new e.Model.ModelFactory(l);
var r = i,
    M = class M extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(M, "VariablesRecord");
var n = M;
n.init();
var _ = class _ extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(_, "WidgetsRecord");
var g = _,
    a = class a extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(s) {}
    };
t(a, "Model");
var u = a;
u._hasValidationWidgetsValue = void 0;
var F = new r.Model.ModelFactory(u);
export {
    b as a, F as b
};