import {
    Ib as s
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = c,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PEP", "pEPVar", "PEP", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AgreeToTerms", "agreeToTermsVar", "AgreeToTerms", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ValidFields", "validFieldsVar", "ValidFields", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsDuplicateAccount", "isDuplicateAccountVar", "IsDuplicateAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SpainAgreement", "spainAgreementVar", "SpainAgreement", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(i, "VariablesRecord");
var a = i;
a.init();
var n = class n extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            FatcaDeclaration: e.Model.ValidationWidgetRecord,
            Checkbox_PEP: e.Model.ValidationWidgetRecord,
            Checkbox_AgreeToTerm: e.Model.ValidationWidgetRecord,
            Checkbox_Spain: e.Model.ValidationWidgetRecord
        }
    }
};
t(n, "WidgetsRecord");
var o = n,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
t(l, "Model");
var r = l;
r._hasValidationWidgetsValue = void 0;
var g = new e.Model.ModelFactory(r);
export {
    g as a
};