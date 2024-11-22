import {
    gf as h
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as u
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var e = u,
    n = class n extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return h
        }
        static fromStructure(t) {
            return new n(new n.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
s(n, "GetEUCountriesAggrRec");
var i = n;
i.init();
var c = class c extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsTopDisclaimerExpanded", "isTopDisclaimerExpandedVar", "IsTopDisclaimerExpanded", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ShowCookieConcent", "showCookieConcentVar", "ShowCookieConcent", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("RiskWarning", "riskWarningVar", "RiskWarning", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return "The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. 70.84% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money."
        }, !1), this.attr("IsEU", "isEUVar", "IsEU", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("NoContentMiddle", "noContentMiddleIn", "NoContentMiddle", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("HasLink", "hasLinkIn", "HasLink", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("ClientCountry", "clientCountryIn", "ClientCountry", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_clientCountryInDataFetchStatus", "_clientCountryInDataFetchStatus", "_clientCountryInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEUCountries", "getEUCountriesAggr", "GetEUCountries", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !0, i)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
s(c, "VariablesRecord");
var r = c;
r.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(d, "WidgetsRecord");
var o = d,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HasFixedHeader" in t && (this.variables.hasFixedHeaderIn = t.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in t && (this.variables._hasFixedHeaderInDataFetchStatus = t._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in t && (this.variables.enableAccessibilityFeaturesIn = t.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in t && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = t._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus)), "NoContentMiddle" in t && (this.variables.noContentMiddleIn = t.NoContentMiddle, "_noContentMiddleInDataFetchStatus" in t && (this.variables._noContentMiddleInDataFetchStatus = t._noContentMiddleInDataFetchStatus)), "HasLink" in t && (this.variables.hasLinkIn = t.HasLink, "_hasLinkInDataFetchStatus" in t && (this.variables._hasLinkInDataFetchStatus = t._hasLinkInDataFetchStatus)), "ClientCountry" in t && (this.variables.clientCountryIn = t.ClientCountry, "_clientCountryInDataFetchStatus" in t && (this.variables._clientCountryInDataFetchStatus = t._clientCountryInDataFetchStatus))
        }
    };
s(a, "Model");
var l = a;
l._hasValidationWidgetsValue = void 0;
var T = new e.Model.ModelFactory(l);
export {
    T as a
};