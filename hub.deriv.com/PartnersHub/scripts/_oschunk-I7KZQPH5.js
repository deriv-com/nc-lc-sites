import {
    ia as r
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = r,
    h = class h extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLeftButton", "showLeftButtonIn", "ShowLeftButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowRightButton", "showRightButtonIn", "ShowRightButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CustomRightIcon", "customRightIconIn", "CustomRightIcon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(h, "VariablesRecord");
var n = h;
n.init();
var u = class u extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(u, "WidgetsRecord");
var o = u,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShowLeftButton" in t && (this.variables.showLeftButtonIn = t.ShowLeftButton, "_showLeftButtonInDataFetchStatus" in t && (this.variables._showLeftButtonInDataFetchStatus = t._showLeftButtonInDataFetchStatus)), "ShowRightButton" in t && (this.variables.showRightButtonIn = t.ShowRightButton, "_showRightButtonInDataFetchStatus" in t && (this.variables._showRightButtonInDataFetchStatus = t._showRightButtonInDataFetchStatus)), "CustomRightIcon" in t && (this.variables.customRightIconIn = t.CustomRightIcon, "_customRightIconInDataFetchStatus" in t && (this.variables._customRightIconInDataFetchStatus = t._customRightIconInDataFetchStatus))
        }
    };
s(e, "Model");
var i = e;
i._hasValidationWidgetsValue = void 0;
var I = new a.Model.ModelFactory(i);
export {
    I as a
};