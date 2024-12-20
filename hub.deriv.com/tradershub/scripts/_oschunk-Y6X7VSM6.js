import {
    ia as c
} from "./_oschunk-5EPHB76O.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var t = c,
    l = class l extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
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
s(l, "VariablesRecord");
var i = l;
i.init();
var d = class d extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(d, "WidgetsRecord");
var n = d,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(e) {
            "HasFixedHeader" in e && (this.variables.hasFixedHeaderIn = e.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in e && (this.variables._hasFixedHeaderInDataFetchStatus = e._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in e && (this.variables.enableAccessibilityFeaturesIn = e.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in e && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = e._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
s(a, "Model");
var r = a;
r._hasValidationWidgetsValue = void 0;
var y = new t.Model.ModelFactory(r);
export {
    y as a
};