import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = r,
    o = class o extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayBackButton", "displayBackButtonIn", "DisplayBackButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_displayBackButtonInDataFetchStatus", "_displayBackButtonInDataFetchStatus", "_displayBackButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DisplayCloseButton", "displayCloseButtonIn", "DisplayCloseButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_displayCloseButtonInDataFetchStatus", "_displayCloseButtonInDataFetchStatus", "_displayCloseButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(o, "VariablesRecord");
var i = o;
i.init();
var u = class u extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(u, "WidgetsRecord");
var l = u,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(t) {
            "DisplayBackButton" in t && (this.variables.displayBackButtonIn = t.DisplayBackButton, "_displayBackButtonInDataFetchStatus" in t && (this.variables._displayBackButtonInDataFetchStatus = t._displayBackButtonInDataFetchStatus)), "DisplayCloseButton" in t && (this.variables.displayCloseButtonIn = t.DisplayCloseButton, "_displayCloseButtonInDataFetchStatus" in t && (this.variables._displayCloseButtonInDataFetchStatus = t._displayCloseButtonInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus))
        }
    };
s(e, "Model");
var n = e;
n._hasValidationWidgetsValue = void 0;
var D = new a.Model.ModelFactory(n);
export {
    D as a
};