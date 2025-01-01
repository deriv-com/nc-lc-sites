import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = d,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(o, "VariablesRecord");
var i = o;
i.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var r = l,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(e) {
            "HasFixedHeader" in e && (this.variables.hasFixedHeaderIn = e.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in e && (this.variables._hasFixedHeaderInDataFetchStatus = e._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in e && (this.variables.enableAccessibilityFeaturesIn = e.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in e && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = e._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
s(a, "Model");
var n = a;
n._hasValidationWidgetsValue = void 0;
var p = new t.Model.ModelFactory(n);
export {
    p as a
};