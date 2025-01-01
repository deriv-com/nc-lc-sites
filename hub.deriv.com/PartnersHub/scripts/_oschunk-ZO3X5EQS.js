import {
    d as i
} from "./_oschunk-BDI2RWOA.js";
import {
    kd as n,
    vd as o
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = h,
    c = class c extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("Progress", "progressIn", "Progress", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return n.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return n.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(c, "VariablesRecord");
var s = c;
s.init();
var u = class u extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(u, "WidgetsRecord");
var l = u,
    f = class f extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Progress" in t && (this.variables.progressIn = t.Progress, "_progressInDataFetchStatus" in t && (this.variables._progressInDataFetchStatus = t._progressInDataFetchStatus)), "ProgressColor" in t && (this.variables.progressColorIn = t.ProgressColor, "_progressColorInDataFetchStatus" in t && (this.variables._progressColorInDataFetchStatus = t._progressColorInDataFetchStatus)), "TrailColor" in t && (this.variables.trailColorIn = t.TrailColor, "_trailColorInDataFetchStatus" in t && (this.variables._trailColorInDataFetchStatus = t._trailColorInDataFetchStatus)), "Thickness" in t && (this.variables.thicknessIn = t.Thickness, "_thicknessInDataFetchStatus" in t && (this.variables._thicknessInDataFetchStatus = t._thicknessInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(f, "Model");
var r = f;
r._hasValidationWidgetsValue = void 0;
var d = new a.Model.ModelFactory(r);
export {
    d as a
};