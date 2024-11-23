import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = l,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
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
            }, !1), this.attr("BackgroundColor", "backgroundColorIn", "BackgroundColor", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "#fff"
            }, !1), this.attr("_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasNoLogo", "hasNoLogoIn", "HasNoLogo", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasNoLogoInDataFetchStatus", "_hasNoLogoInDataFetchStatus", "_hasNoLogoInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasHeader", "hasHeaderIn", "HasHeader", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasHeaderInDataFetchStatus", "_hasHeaderInDataFetchStatus", "_hasHeaderInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("NoRedirect", "noRedirectIn", "NoRedirect", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_noRedirectInDataFetchStatus", "_noRedirectInDataFetchStatus", "_noRedirectInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(i, "VariablesRecord");
var s = i;
s.init();
var o = class o extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(o, "WidgetsRecord");
var n = o,
    c = class c extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "HasFixedHeader" in a && (this.variables.hasFixedHeaderIn = a.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in a && (this.variables._hasFixedHeaderInDataFetchStatus = a._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in a && (this.variables.enableAccessibilityFeaturesIn = a.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in a && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = a._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus)), "BackgroundColor" in a && (this.variables.backgroundColorIn = a.BackgroundColor, "_backgroundColorInDataFetchStatus" in a && (this.variables._backgroundColorInDataFetchStatus = a._backgroundColorInDataFetchStatus)), "HasNoLogo" in a && (this.variables.hasNoLogoIn = a.HasNoLogo, "_hasNoLogoInDataFetchStatus" in a && (this.variables._hasNoLogoInDataFetchStatus = a._hasNoLogoInDataFetchStatus)), "HasHeader" in a && (this.variables.hasHeaderIn = a.HasHeader, "_hasHeaderInDataFetchStatus" in a && (this.variables._hasHeaderInDataFetchStatus = a._hasHeaderInDataFetchStatus)), "NoRedirect" in a && (this.variables.noRedirectIn = a.NoRedirect, "_noRedirectInDataFetchStatus" in a && (this.variables._noRedirectInDataFetchStatus = a._noRedirectInDataFetchStatus))
        }
    };
t(c, "Model");
var r = c;
r._hasValidationWidgetsValue = void 0;
var F = new e.Model.ModelFactory(r);
export {
    F as a
};