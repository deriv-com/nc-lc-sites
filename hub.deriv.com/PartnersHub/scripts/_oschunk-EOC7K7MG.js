import {
    Rf as t,
    Z as i
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = l,
    c = class c extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("LandingCompany", "landingCompanyVar", "LandingCompany", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("FilteredRecommendedCurrencies", "filteredRecommendedCurrenciesVar", "FilteredRecommendedCurrencies", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t), this.attr("FilteredOtherCurrencies", "filteredOtherCurrenciesVar", "FilteredOtherCurrencies", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new t)
            }, !1, t)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(c, "VariablesRecord");
var r = c;
r.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var n = d,
    o = class o extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(u) {}
    };
a(o, "Model");
var s = o;
s._hasValidationWidgetsValue = void 0;
var T = new e.Model.ModelFactory(s);
export {
    T as a
};