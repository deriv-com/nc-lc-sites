import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Password", "passwordVar", "Password", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
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
            Form: t.Model.ValidationWidgetRecord,
            Input_password: t.Model.ValidationWidgetRecord
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
        setInputs(l) {}
    };
e(n, "Model");
var a = n;
a._hasValidationWidgetsValue = void 0;
var w = new t.Model.ModelFactory(a);
export {
    w as a
};