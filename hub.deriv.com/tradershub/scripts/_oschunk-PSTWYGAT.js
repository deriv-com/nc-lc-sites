import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = l,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UserEmail", "userEmailVar", "UserEmail", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Password", "passwordVar", "Password", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var a = i;
a.init();
var o = class o extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            LoginForm: t.Model.ValidationWidgetRecord,
            Input_Username: t.Model.ValidationWidgetRecord,
            Input_Password: t.Model.ValidationWidgetRecord
        }
    }
};
e(o, "WidgetsRecord");
var r = o,
    n = class n extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
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
var s = n;
s._hasValidationWidgetsValue = void 0;
var T = new t.Model.ModelFactory(s);
export {
    T as a
};