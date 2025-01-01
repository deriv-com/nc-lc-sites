import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = c,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Device", "deviceVar", "Device", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ObserverObj", "observerObjVar", "ObserverObj", !0, !1, e.DataTypes.DataTypes.Object, function() {
                return null
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(i, "VariablesRecord");
var s = i;
s.init();
var n = class n extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(n, "WidgetsRecord");
var r = n,
    o = class o extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(u) {}
    };
t(o, "Model");
var a = o;
a._hasValidationWidgetsValue = void 0;
var p = new e.Model.ModelFactory(a);
export {
    p as a
};