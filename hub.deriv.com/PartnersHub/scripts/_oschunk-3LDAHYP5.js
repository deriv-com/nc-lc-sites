import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = n,
    d = class d extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(d, "VariablesRecord");
var r = d;
r.init();
var o = class o extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(o, "WidgetsRecord");
var c = o,
    D = class D extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVertical" in t && (this.variables.isVerticalIn = t.IsVertical, "_isVerticalInDataFetchStatus" in t && (this.variables._isVerticalInDataFetchStatus = t._isVerticalInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(D, "Model");
var l = D;
l._hasValidationWidgetsValue = void 0;
var x = new a.Model.ModelFactory(l);
var e = n,
    I = class I extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(I, "VariablesRecord");
var i = I;
i.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(f, "WidgetsRecord");
var h = f,
    T = class T extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return h
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "UseTopLabel" in t && (this.variables.useTopLabelIn = t.UseTopLabel, "_useTopLabelInDataFetchStatus" in t && (this.variables._useTopLabelInDataFetchStatus = t._useTopLabelInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(T, "Model");
var u = T;
u._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(u);
export {
    x as a, C as b
};