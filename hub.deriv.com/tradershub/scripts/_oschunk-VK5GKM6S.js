import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = u,
    r = class r extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(r, "VariablesRecord");
var s = r;
s.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(l, "WidgetsRecord");
var n = l,
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
        setInputs(t) {
            "EnableAccessibilityFeatures" in t && (this.variables.enableAccessibilityFeaturesIn = t.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in t && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = t._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(c, "Model");
var i = c;
i._hasValidationWidgetsValue = void 0;
var F = new e.Model.ModelFactory(i);
export {
    F as a
};