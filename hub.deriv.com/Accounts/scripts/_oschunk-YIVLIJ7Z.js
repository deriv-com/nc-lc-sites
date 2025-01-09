import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = r,
    i = class i extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldDisplayBackButton", "shouldDisplayBackButtonIn", "ShouldDisplayBackButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldDisplayBackButtonInDataFetchStatus", "_shouldDisplayBackButtonInDataFetchStatus", "_shouldDisplayBackButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldDisplayCloseButton", "shouldDisplayCloseButtonIn", "ShouldDisplayCloseButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldDisplayCloseButtonInDataFetchStatus", "_shouldDisplayCloseButtonInDataFetchStatus", "_shouldDisplayCloseButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TextAlignment", "textAlignmentIn", "TextAlignment", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_textAlignmentInDataFetchStatus", "_textAlignmentInDataFetchStatus", "_textAlignmentInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(i, "VariablesRecord");
var s = i;
s.init();
var u = class u extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(u, "WidgetsRecord");
var n = u,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShouldDisplayBackButton" in t && (this.variables.shouldDisplayBackButtonIn = t.ShouldDisplayBackButton, "_shouldDisplayBackButtonInDataFetchStatus" in t && (this.variables._shouldDisplayBackButtonInDataFetchStatus = t._shouldDisplayBackButtonInDataFetchStatus)), "ShouldDisplayCloseButton" in t && (this.variables.shouldDisplayCloseButtonIn = t.ShouldDisplayCloseButton, "_shouldDisplayCloseButtonInDataFetchStatus" in t && (this.variables._shouldDisplayCloseButtonInDataFetchStatus = t._shouldDisplayCloseButtonInDataFetchStatus)), "TextAlignment" in t && (this.variables.textAlignmentIn = t.TextAlignment, "_textAlignmentInDataFetchStatus" in t && (this.variables._textAlignmentInDataFetchStatus = t._textAlignmentInDataFetchStatus))
        }
    };
e(o, "Model");
var l = o;
l._hasValidationWidgetsValue = void 0;
var h = new a.Model.ModelFactory(l);
export {
    h as a
};