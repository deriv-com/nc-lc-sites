import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = l,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Email", "emailVar", "Email", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var a = i;
a.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RecoverPasswordForm: t.Model.ValidationWidgetRecord,
            Input_Email: t.Model.ValidationWidgetRecord
        }
    }
};
e(n, "WidgetsRecord");
var r = n,
    o = class o extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
e(o, "Model");
var s = o;
s._hasValidationWidgetsValue = void 0;
var d = new t.Model.ModelFactory(s);
export {
    d as a
};