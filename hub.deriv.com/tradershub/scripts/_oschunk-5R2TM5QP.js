import {
    $b as s
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = u,
    n = class n extends e.DataTypes.GenericRecord {
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
            }, !1), this.attr("RedirectToHub", "redirectToHubVar", "RedirectToHub", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FATCA", "fATCAVar", "FATCA", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsAppropriatenessTestWarningPopupOppen", "isAppropriatenessTestWarningPopupOppenVar", "IsAppropriatenessTestWarningPopupOppen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsRiskTolerencePopupOpen", "isRiskTolerencePopupOpenVar", "IsRiskTolerencePopupOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(n, "VariablesRecord");
var a = n;
a.init();
var i = class i extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Checkbox_FATCA: e.Model.ValidationWidgetRecord,
            Checkbox_PEP: e.Model.ValidationWidgetRecord,
            Checkbox_AgreeToTerm: e.Model.ValidationWidgetRecord,
            Checkbox_Spain: e.Model.ValidationWidgetRecord
        }
    }
};
t(i, "WidgetsRecord");
var o = i,
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
        setInputs(p) {}
    };
t(l, "Model");
var r = l;
r._hasValidationWidgetsValue = void 0;
var g = new e.Model.ModelFactory(r);
export {
    g as a
};