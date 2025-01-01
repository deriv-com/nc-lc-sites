import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = o,
    l = class l extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("RightIcon", "rightIconIn", "RightIcon", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Label", "labelIn", "Label", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(l, "VariablesRecord");
var i = l;
i.init();
var c = class c extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(c, "WidgetsRecord");
var r = c,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(a) {
            "RightIcon" in a && (this.variables.rightIconIn = a.RightIcon, "_rightIconInDataFetchStatus" in a && (this.variables._rightIconInDataFetchStatus = a._rightIconInDataFetchStatus)), "Label" in a && (this.variables.labelIn = a.Label, "_labelInDataFetchStatus" in a && (this.variables._labelInDataFetchStatus = a._labelInDataFetchStatus))
        }
    };
s(e, "Model");
var n = e;
n._hasValidationWidgetsValue = void 0;
var I = new t.Model.ModelFactory(n);
export {
    I as a
};