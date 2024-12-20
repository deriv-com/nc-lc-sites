import {
    ia as i
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = i,
    h = class h extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FullHeight", "fullHeightIn", "FullHeight", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(h, "VariablesRecord");
var l = h;
l.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(f, "WidgetsRecord");
var o = f,
    g = class g extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "FullHeight" in t && (this.variables.fullHeightIn = t.FullHeight, "_fullHeightInDataFetchStatus" in t && (this.variables._fullHeightInDataFetchStatus = t._fullHeightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(g, "Model");
var r = g;
r._hasValidationWidgetsValue = void 0;
var x = new e.Model.ModelFactory(r);
var n = i,
    y = class y extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(y, "VariablesRecord");
var d = y;
d.init();
var I = class I extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(I, "WidgetsRecord");
var D = I,
    s = class s extends n.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(s, "Model");
var u = s;
u._hasValidationWidgetsValue = void 0;
var C = new n.Model.ModelFactory(u);
export {
    x as a, C as b
};