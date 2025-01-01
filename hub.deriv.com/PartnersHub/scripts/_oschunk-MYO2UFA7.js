import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = l,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Password", "passwordVar", "Password", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var s = o;
s.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CreatePasswordInput: t.Model.ValidationWidgetRecord
        }
    }
};
e(i, "WidgetsRecord");
var r = i,
    n = class n extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {}
    };
e(n, "Model");
var a = n;
a._hasValidationWidgetsValue = void 0;
var V = new t.Model.ModelFactory(a);
export {
    V as a
};