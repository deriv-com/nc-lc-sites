import {
    e as I
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as h,
    Sg as D
} from "./_oschunk-UATY3RVV.js";
import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var r = n,
    g = class g extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsOpen", "isOpenIn", "IsOpen", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Heading", "headingIn", "Heading", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return "Exit identity verification"
            }, !1), this.attr("_headingInDataFetchStatus", "_headingInDataFetchStatus", "_headingInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(g, "VariablesRecord");
var o = g;
o.init();
var C = class C extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(C, "WidgetsRecord");
var p = C,
    y = class y extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsOpen" in t && (this.variables.isOpenIn = t.IsOpen, "_isOpenInDataFetchStatus" in t && (this.variables._isOpenInDataFetchStatus = t._isOpenInDataFetchStatus)), "Heading" in t && (this.variables.headingIn = t.Heading, "_headingInDataFetchStatus" in t && (this.variables._headingInDataFetchStatus = t._headingInDataFetchStatus))
        }
    };
e(y, "Model");
var l = y;
l._hasValidationWidgetsValue = void 0;
var E = new r.Model.ModelFactory(l);
var a = n,
    F = class F extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("Progress", "progressIn", "Progress", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return h.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return h.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(F, "VariablesRecord");
var c = F;
c.init();
var m = class m extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(m, "WidgetsRecord");
var T = m,
    x = class x extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Progress" in t && (this.variables.progressIn = t.Progress, "_progressInDataFetchStatus" in t && (this.variables._progressInDataFetchStatus = t._progressInDataFetchStatus)), "ProgressColor" in t && (this.variables.progressColorIn = t.ProgressColor, "_progressColorInDataFetchStatus" in t && (this.variables._progressColorInDataFetchStatus = t._progressColorInDataFetchStatus)), "TrailColor" in t && (this.variables.trailColorIn = t.TrailColor, "_trailColorInDataFetchStatus" in t && (this.variables._trailColorInDataFetchStatus = t._trailColorInDataFetchStatus)), "Thickness" in t && (this.variables.thicknessIn = t.Thickness, "_thicknessInDataFetchStatus" in t && (this.variables._thicknessInDataFetchStatus = t._thicknessInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(x, "Model");
var u = x;
u._hasValidationWidgetsValue = void 0;
var k = new a.Model.ModelFactory(u);
var s = n,
    M = class M extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShouldDisplayExitConfirmModal", "shouldDisplayExitConfirmModalVar", "ShouldDisplayExitConfirmModal", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CurrentStep", "currentStepIn", "CurrentStep", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StepCount", "stepCountIn", "StepCount", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 3
            }, !1), this.attr("_stepCountInDataFetchStatus", "_stepCountInDataFetchStatus", "_stepCountInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DisplayExitConfirmModalHeading", "displayExitConfirmModalHeadingIn", "DisplayExitConfirmModalHeading", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return "Exit identity verification"
            }, !1), this.attr("_displayExitConfirmModalHeadingInDataFetchStatus", "_displayExitConfirmModalHeadingInDataFetchStatus", "_displayExitConfirmModalHeadingInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(M, "VariablesRecord");
var d = M;
d.init();
var O = class O extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(O, "WidgetsRecord");
var b = O,
    i = class i extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CurrentStep" in t && (this.variables.currentStepIn = t.CurrentStep, "_currentStepInDataFetchStatus" in t && (this.variables._currentStepInDataFetchStatus = t._currentStepInDataFetchStatus)), "StepCount" in t && (this.variables.stepCountIn = t.StepCount, "_stepCountInDataFetchStatus" in t && (this.variables._stepCountInDataFetchStatus = t._stepCountInDataFetchStatus)), "DisplayExitConfirmModalHeading" in t && (this.variables.displayExitConfirmModalHeadingIn = t.DisplayExitConfirmModalHeading, "_displayExitConfirmModalHeadingInDataFetchStatus" in t && (this.variables._displayExitConfirmModalHeadingInDataFetchStatus = t._displayExitConfirmModalHeadingInDataFetchStatus))
        }
    };
e(i, "Model");
var f = i;
f._hasValidationWidgetsValue = void 0;
var G = new s.Model.ModelFactory(f);
export {
    E as a, k as b, G as c
};