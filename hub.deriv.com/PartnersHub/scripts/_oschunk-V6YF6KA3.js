import {
    zb as c
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = i,
    h = class h extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("NewPassword", "newPasswordVar", "NewPassword", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("EmailVerificationCode", "emailVerificationCodeVar", "EmailVerificationCode", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("width", "widthIn", "width", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "100%"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("verification_code", "verification_codeIn", "verification_code", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_verification_codeInDataFetchStatus", "_verification_codeInDataFetchStatus", "_verification_codeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(h, "VariablesRecord");
var o = h;
o.init();
var m = class m extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            NewPasswordField: t.Model.ValidationWidgetRecord
        }
    }
};
s(m, "WidgetsRecord");
var u = m,
    D = class D extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(e) {
            "width" in e && (this.variables.widthIn = e.width, "_widthInDataFetchStatus" in e && (this.variables._widthInDataFetchStatus = e._widthInDataFetchStatus)), "verification_code" in e && (this.variables.verification_codeIn = e.verification_code, "_verification_codeInDataFetchStatus" in e && (this.variables._verification_codeInDataFetchStatus = e._verification_codeInDataFetchStatus))
        }
    };
s(D, "Model");
var n = D;
n._hasValidationWidgetsValue = void 0;
var b = new t.Model.ModelFactory(n);
var a = i,
    p = class p extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsPasswordReset", "isPasswordResetVar", "IsPasswordReset", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Code", "codeIn", "Code", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(p, "VariablesRecord");
var d = p;
d.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(y, "WidgetsRecord");
var _ = y,
    r = class r extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(e) {
            "Code" in e && (this.variables.codeIn = a.DataConversion.ServerDataConverter.from(e.Code, a.DataTypes.DataTypes.Text))
        }
    };
s(r, "Model");
var l = r;
l._hasValidationWidgetsValue = void 0;
var H = new a.Model.ModelFactory(l);
export {
    b as a, H as b
};