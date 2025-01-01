import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = n,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ForgotPasswordEmail", "forgotPasswordEmailVar", "ForgotPasswordEmail", !0, !1, t.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(l) {
            return new e(new e.RecordClass({
                forgotPasswordEmailVar: t.DataTypes.ImmutableBase.getData(l)
            }))
        }
    };
a(e, "VariablesRecord");
var r = e;
r.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            ResetPasswordEmailForm: t.Model.ValidationWidgetRecord,
            EmailInput: t.Model.ValidationWidgetRecord,
            ResetPasswordEmailForm2: t.Model.ValidationWidgetRecord,
            EmailinputMobile: t.Model.ValidationWidgetRecord
        }
    }
};
a(i, "WidgetsRecord");
var o = i,
    d = class d extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
a(d, "Model");
var s = d;
s._hasValidationWidgetsValue = void 0;
var m = new t.Model.ModelFactory(s);
export {
    m as a
};