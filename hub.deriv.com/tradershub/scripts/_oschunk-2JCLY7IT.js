import {
    ia as d
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("NewPassword", "newPasswordVar", "NewPassword", !0, !1, t.DataTypes.DataTypes.Text, function() {
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
            }, !1), this.attr("Email", "emailIn", "Email", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("VerificationCode", "verificationCodeIn", "VerificationCode", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var s = o;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PasswordResetForm: t.Model.ValidationWidgetRecord,
            Input_Email: t.Model.ValidationWidgetRecord,
            Input_Code: t.Model.ValidationWidgetRecord,
            Input_NewPassword: t.Model.ValidationWidgetRecord,
            Input_ConfirmPassword: t.Model.ValidationWidgetRecord
        }
    }
};
e(n, "WidgetsRecord");
var i = n,
    l = class l extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {
            "Email" in a && (this.variables.emailIn = t.DataConversion.ServerDataConverter.from(a.Email, t.DataTypes.DataTypes.Email)), "VerificationCode" in a && (this.variables.verificationCodeIn = t.DataConversion.ServerDataConverter.from(a.VerificationCode, t.DataTypes.DataTypes.Text))
        }
    };
e(l, "Model");
var r = l;
r._hasValidationWidgetsValue = void 0;
var T = new t.Model.ModelFactory(r);
export {
    T as a
};