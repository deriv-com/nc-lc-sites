import {
    df as f
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = c,
    a = class a extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return f
        }
        static fromStructure(u) {
            return new a(new a.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
e(a, "GetUserDetailAggrRec");
var s = a;
s.init();
var n = class n extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OldPassword", "oldPasswordVar", "OldPassword", !0, !1, t.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("NewPassword", "newPasswordVar", "NewPassword", !0, !1, t.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("ConfirmPassword", "confirmPasswordVar", "ConfirmPassword", !0, !1, t.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsConfirmPasswordVisible", "isConfirmPasswordVisibleVar", "IsConfirmPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsNewPasswordCompliant", "isNewPasswordCompliantVar", "IsNewPasswordCompliant", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("GetUserDetail", "getUserDetailAggr", "GetUserDetail", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new s)
        }, !0, s)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(n, "VariablesRecord");
var r = n;
r.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: t.Model.ValidationWidgetRecord,
            Input_OldPassword: t.Model.ValidationWidgetRecord,
            Input_NewPassword: t.Model.ValidationWidgetRecord,
            Input_ConfirmPassword: t.Model.ValidationWidgetRecord
        }
    }
};
e(l, "WidgetsRecord");
var i = l,
    d = class d extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
e(d, "Model");
var o = d;
o._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(o);
export {
    D as a
};