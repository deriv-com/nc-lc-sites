import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = r,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayBackButton", "displayBackButtonIn", "DisplayBackButton", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_displayBackButtonInDataFetchStatus", "_displayBackButtonInDataFetchStatus", "_displayBackButtonInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DisplayCloseButton", "displayCloseButtonIn", "DisplayCloseButton", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_displayCloseButtonInDataFetchStatus", "_displayCloseButtonInDataFetchStatus", "_displayCloseButtonInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var s = o;
s.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(i, "WidgetsRecord");
var l = i,
    u = class u extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "DisplayBackButton" in a && (this.variables.displayBackButtonIn = a.DisplayBackButton, "_displayBackButtonInDataFetchStatus" in a && (this.variables._displayBackButtonInDataFetchStatus = a._displayBackButtonInDataFetchStatus)), "DisplayCloseButton" in a && (this.variables.displayCloseButtonIn = a.DisplayCloseButton, "_displayCloseButtonInDataFetchStatus" in a && (this.variables._displayCloseButtonInDataFetchStatus = a._displayCloseButtonInDataFetchStatus))
        }
    };
e(u, "Model");
var n = u;
n._hasValidationWidgetsValue = void 0;
var B = new t.Model.ModelFactory(n);
export {
    B as a
};