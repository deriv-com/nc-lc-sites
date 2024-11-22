import {
    f as _
} from "./_oschunk-WJ75ZXAT.js";
import {
    Dd as y,
    rd as S,
    sb as T
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as i
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var n = i,
    C = class C extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(C, "VariablesRecord");
var o = C;
o.init();
var F = class F extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(F, "WidgetsRecord");
var g = F,
    m = class m extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVertical" in t && (this.variables.isVerticalIn = t.IsVertical, "_isVerticalInDataFetchStatus" in t && (this.variables._isVerticalInDataFetchStatus = t._isVerticalInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(m, "Model");
var c = m;
c._hasValidationWidgetsValue = void 0;
var G = new n.Model.ModelFactory(c);
var r = i,
    v = class v extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(v, "VariablesRecord");
var u = v;
u.init();
var M = class M extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(M, "WidgetsRecord");
var b = M,
    V = class V extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "UseTopLabel" in t && (this.variables.useTopLabelIn = t.UseTopLabel, "_useTopLabelInDataFetchStatus" in t && (this.variables._useTopLabelInDataFetchStatus = t._useTopLabelInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(V, "Model");
var d = V;
d._hasValidationWidgetsValue = void 0;
var A = new r.Model.ModelFactory(d);
var a = i,
    U = class U extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new _)
            }, !1, _), this.attr("Progress", "progressIn", "Progress", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return S.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return S.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(U, "VariablesRecord");
var h = U;
h.init();
var B = class B extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(B, "WidgetsRecord");
var O = B,
    L = class L extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Progress" in t && (this.variables.progressIn = t.Progress, "_progressInDataFetchStatus" in t && (this.variables._progressInDataFetchStatus = t._progressInDataFetchStatus)), "ProgressColor" in t && (this.variables.progressColorIn = t.ProgressColor, "_progressColorInDataFetchStatus" in t && (this.variables._progressColorInDataFetchStatus = t._progressColorInDataFetchStatus)), "TrailColor" in t && (this.variables.trailColorIn = t.TrailColor, "_trailColorInDataFetchStatus" in t && (this.variables._trailColorInDataFetchStatus = t._trailColorInDataFetchStatus)), "Thickness" in t && (this.variables.thicknessIn = t.Thickness, "_thicknessInDataFetchStatus" in t && (this.variables._thicknessInDataFetchStatus = t._thicknessInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(L, "Model");
var f = L;
f._hasValidationWidgetsValue = void 0;
var J = new a.Model.ModelFactory(f);
var s = i,
    w = class w extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowCloseModal", "showCloseModalVar", "ShowCloseModal", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideTitle", "hideTitleIn", "HideTitle", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Analytics", "analyticsIn", "Analytics", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(w, "VariablesRecord");
var D = w;
D.init();
var E = class E extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(E, "WidgetsRecord");
var k = E,
    l = class l extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HideTitle" in t && (this.variables.hideTitleIn = t.HideTitle, "_hideTitleInDataFetchStatus" in t && (this.variables._hideTitleInDataFetchStatus = t._hideTitleInDataFetchStatus)), "Analytics" in t && (this.variables.analyticsIn = t.Analytics, "_analyticsInDataFetchStatus" in t && (this.variables._analyticsInDataFetchStatus = t._analyticsInDataFetchStatus))
        }
    };
e(l, "Model");
var I = l;
I._hasValidationWidgetsValue = void 0;
var tt = new s.Model.ModelFactory(I);
export {
    G as a, A as b, J as c, tt as d
};