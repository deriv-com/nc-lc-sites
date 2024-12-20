import {
    i
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as r
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as D
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = D,
    c = class c extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("Position", "positionIn", "Position", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return r.position.right
            }, !1), this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Trigger", "triggerIn", "Trigger", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return r.trigger.onHover
            }, !1), this.attr("_triggerInDataFetchStatus", "_triggerInDataFetchStatus", "_triggerInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(c, "VariablesRecord");
var s = c;
s.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(l, "WidgetsRecord");
var o = l,
    u = class u extends e.Model.BaseViewModel {
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
            "Position" in t && (this.variables.positionIn = t.Position, "_positionInDataFetchStatus" in t && (this.variables._positionInDataFetchStatus = t._positionInDataFetchStatus)), "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Trigger" in t && (this.variables.triggerIn = t.Trigger, "_triggerInDataFetchStatus" in t && (this.variables._triggerInDataFetchStatus = t._triggerInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(u, "Model");
var n = u;
n._hasValidationWidgetsValue = void 0;
var I = new e.Model.ModelFactory(n);
export {
    I as a
};