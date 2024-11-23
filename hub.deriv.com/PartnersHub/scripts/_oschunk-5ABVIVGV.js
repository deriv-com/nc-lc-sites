import {
    ia as o
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = o,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsTermsOfUseButtonDisabled", "isTermsOfUseButtonDisabledVar", "IsTermsOfUseButtonDisabled", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("PEPCheckbox", "pEPCheckboxVar", "PEPCheckbox", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AffiliateTermandConditions", "affiliateTermandConditionsVar", "AffiliateTermandConditions", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ConsentPromotional", "consentPromotionalVar", "ConsentPromotional", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TermsandConditions", "termsandConditionsVar", "TermsandConditions", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(u, "VariablesRecord");
var r = u;
r.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Checkbox1: e.Model.ValidationWidgetRecord,
            Checkbox2: e.Model.ValidationWidgetRecord,
            Checkbox3: e.Model.ValidationWidgetRecord,
            Checkbox4: e.Model.ValidationWidgetRecord
        }
    }
};
t(f, "WidgetsRecord");
var d = f,
    m = class m extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return d
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(g) {}
    };
t(m, "Model");
var n = m;
n._hasValidationWidgetsValue = void 0;
var b = new e.Model.ModelFactory(n);
var s = o,
    T = class T extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(T, "VariablesRecord");
var i = T;
i.init();
var C = class C extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(C, "WidgetsRecord");
var p = C,
    a = class a extends s.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
t(a, "Model");
var l = a;
l._hasValidationWidgetsValue = void 0;
var x = new s.Model.ModelFactory(l);
export {
    b as a, x as b
};