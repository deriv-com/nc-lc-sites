import {
    ia as d
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("email", "emailVar", "email", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("password", "passwordVar", "password", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var a = o;
a.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            LoginForm: t.Model.ValidationWidgetRecord,
            Input_Email: t.Model.ValidationWidgetRecord,
            Input_password: t.Model.ValidationWidgetRecord
        }
    }
};
e(i, "WidgetsRecord");
var r = i,
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
        setInputs(l) {}
    };
e(n, "Model");
var s = n;
s._hasValidationWidgetsValue = void 0;
var c = new t.Model.ModelFactory(s);
export {
    c as a
};