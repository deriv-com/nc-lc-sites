import {
    g as i
} from "./_oschunk-2ZI4JQLD.js";
import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = c,
    r = class r extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
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
var o = l,
    d = class d extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "ShowLabelOnLoading" in t && (this.variables.showLabelOnLoadingIn = t.ShowLabelOnLoading, "_showLabelOnLoadingInDataFetchStatus" in t && (this.variables._showLabelOnLoadingInDataFetchStatus = t._showLabelOnLoadingInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(d, "Model");
var n = d;
n._hasValidationWidgetsValue = void 0;
var h = new a.Model.ModelFactory(n);
export {
    h as a
};