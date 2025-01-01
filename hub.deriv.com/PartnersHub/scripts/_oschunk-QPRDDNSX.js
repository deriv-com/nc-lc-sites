import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = h,
    o = class o extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("title", "titleIn", "title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BorderColor", "borderColorIn", "BorderColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_borderColorInDataFetchStatus", "_borderColorInDataFetchStatus", "_borderColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("isTitleBold", "isTitleBoldIn", "isTitleBold", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isTitleBoldInDataFetchStatus", "_isTitleBoldInDataFetchStatus", "_isTitleBoldInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("height", "heightIn", "height", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "48px"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("borderRadius", "borderRadiusIn", "borderRadius", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "16px"
            }, !1), this.attr("_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TextColor", "textColorIn", "TextColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "#000000b8"
            }, !1), this.attr("_textColorInDataFetchStatus", "_textColorInDataFetchStatus", "_textColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var r = o;
r.init();
var l = class l extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var i = l,
    n = class n extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "title" in t && (this.variables.titleIn = t.title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "BorderColor" in t && (this.variables.borderColorIn = t.BorderColor, "_borderColorInDataFetchStatus" in t && (this.variables._borderColorInDataFetchStatus = t._borderColorInDataFetchStatus)), "isTitleBold" in t && (this.variables.isTitleBoldIn = t.isTitleBold, "_isTitleBoldInDataFetchStatus" in t && (this.variables._isTitleBoldInDataFetchStatus = t._isTitleBoldInDataFetchStatus)), "height" in t && (this.variables.heightIn = t.height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "borderRadius" in t && (this.variables.borderRadiusIn = t.borderRadius, "_borderRadiusInDataFetchStatus" in t && (this.variables._borderRadiusInDataFetchStatus = t._borderRadiusInDataFetchStatus)), "TextColor" in t && (this.variables.textColorIn = t.TextColor, "_textColorInDataFetchStatus" in t && (this.variables._textColorInDataFetchStatus = t._textColorInDataFetchStatus))
        }
    };
e(n, "Model");
var s = n;
s._hasValidationWidgetsValue = void 0;
var c = new a.Model.ModelFactory(s);
export {
    c as a
};