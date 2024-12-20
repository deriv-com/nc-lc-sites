import {
    ia as l
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = l,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsCoolingOffPopupOpen", "isCoolingOffPopupOpenVar", "IsCoolingOffPopupOpen", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Timestamp", "timestampVar", "Timestamp", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var s = i;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var r = n,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
a(e, "Model");
var o = e;
o._hasValidationWidgetsValue = void 0;
var g = new t.Model.ModelFactory(o);
export {
    g as a
};