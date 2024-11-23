import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = c,
    r = class r extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ClassName", "classNameIn", "ClassName", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_classNameInDataFetchStatus", "_classNameInDataFetchStatus", "_classNameInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SkeletonHeight", "skeletonHeightIn", "SkeletonHeight", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_skeletonHeightInDataFetchStatus", "_skeletonHeightInDataFetchStatus", "_skeletonHeightInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(r, "VariablesRecord");
var s = r;
s.init();
var l = class l extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var i = l,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "ClassName" in t && (this.variables.classNameIn = t.ClassName, "_classNameInDataFetchStatus" in t && (this.variables._classNameInDataFetchStatus = t._classNameInDataFetchStatus)), "SkeletonHeight" in t && (this.variables.skeletonHeightIn = t.SkeletonHeight, "_skeletonHeightInDataFetchStatus" in t && (this.variables._skeletonHeightInDataFetchStatus = t._skeletonHeightInDataFetchStatus))
        }
    };
e(o, "Model");
var n = o;
n._hasValidationWidgetsValue = void 0;
var u = new a.Model.ModelFactory(n);
export {
    u as a
};