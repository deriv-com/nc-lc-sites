import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = d,
    l = class l extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Email", "emailIn", "Email", !0, !1, a.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(l, "VariablesRecord");
var s = l;
s.init();
var o = class o extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(o, "WidgetsRecord");
var i = o,
    t = class t extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(n) {
            "Email" in n && (this.variables.emailIn = a.DataConversion.ServerDataConverter.from(n.Email, a.DataTypes.DataTypes.Email))
        }
    };
e(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var g = new a.Model.ModelFactory(r);
export {
    g as a
};