import {
    Nd as n
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = u,
    i = class i extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Space", "spaceIn", "Space", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return n.space.base
            }, !1), this.attr("_spaceInDataFetchStatus", "_spaceInDataFetchStatus", "_spaceInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return n.color.neutral4
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var s = i;
s.init();
var l = class l extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var c = l,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVertical" in t && (this.variables.isVerticalIn = t.IsVertical, "_isVerticalInDataFetchStatus" in t && (this.variables._isVerticalInDataFetchStatus = t._isVerticalInDataFetchStatus)), "Space" in t && (this.variables.spaceIn = t.Space, "_spaceInDataFetchStatus" in t && (this.variables._spaceInDataFetchStatus = t._spaceInDataFetchStatus)), "Color" in t && (this.variables.colorIn = t.Color, "_colorInDataFetchStatus" in t && (this.variables._colorInDataFetchStatus = t._colorInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(o, "Model");
var r = o;
r._hasValidationWidgetsValue = void 0;
var I = new a.Model.ModelFactory(r);
export {
    I as a
};