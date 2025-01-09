import {
    c as r
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as u
} from "./_oschunk-UATY3RVV.js";
import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = o,
    d = class d extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("Shape", "shapeIn", "Shape", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return u.shape.softRounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowHandler", "showHandlerIn", "ShowHandler", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(d, "VariablesRecord");
var s = d;
s.init();
var h = class h extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(h, "WidgetsRecord");
var l = h,
    i = class i extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "Shape" in e && (this.variables.shapeIn = e.Shape, "_shapeInDataFetchStatus" in e && (this.variables._shapeInDataFetchStatus = e._shapeInDataFetchStatus)), "ShowHandler" in e && (this.variables.showHandlerIn = e.ShowHandler, "_showHandlerInDataFetchStatus" in e && (this.variables._showHandlerInDataFetchStatus = e._showHandlerInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(i, "Model");
var n = i;
n._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(n);
export {
    D as a
};