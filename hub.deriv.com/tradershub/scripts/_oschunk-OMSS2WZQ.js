import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = n,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Password", "passwordVar", "Password", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
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
            Form: t.Model.ValidationWidgetRecord,
            Input_password: t.Model.ValidationWidgetRecord
        }
    }
};
e(i, "WidgetsRecord");
var r = i,
    d = class d extends t.Model.BaseViewModel {
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
e(d, "Model");
var s = d;
s._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(s);
export {
    p as a
};