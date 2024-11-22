import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var s = n,
    g = class g extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(g, "VariablesRecord");
var r = g;
r.init();
var h = class h extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(h, "WidgetsRecord");
var c = h,
    f = class f extends s.Model.BaseViewModel {
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
            "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(f, "Model");
var d = f;
d._hasValidationWidgetsValue = void 0;
var x = new s.Model.ModelFactory(d);
var a = n,
    I = class I extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveTab", "activeTabVar", "ActiveTab", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(I, "VariablesRecord");
var o = I;
o.init();
var m = class m extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(m, "WidgetsRecord");
var D = m,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
e(i, "Model");
var l = i;
l._hasValidationWidgetsValue = void 0;
var _ = new a.Model.ModelFactory(l);
export {
    x as a, _ as b
};