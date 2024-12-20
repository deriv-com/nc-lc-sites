import {
    ia as h
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = h,
    r = class r extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("title", "titleIn", "title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BackgroundColor", "backgroundColorIn", "BackgroundColor", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "#FF444F"
            }, !1), this.attr("_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("isLoading", "isLoadingIn", "isLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("class", "classIn", "class", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_classInDataFetchStatus", "_classInDataFetchStatus", "_classInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("enabled", "enabledIn", "enabled", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_enabledInDataFetchStatus", "_enabledInDataFetchStatus", "_enabledInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("visible", "visibleIn", "visible", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_visibleInDataFetchStatus", "_visibleInDataFetchStatus", "_visibleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("borderRadius", "borderRadiusIn", "borderRadius", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "16px"
            }, !1), this.attr("_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("height", "heightIn", "height", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "48px"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("buttonType", "buttonTypeIn", "buttonType", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "button"
            }, !1), this.attr("_buttonTypeInDataFetchStatus", "_buttonTypeInDataFetchStatus", "_buttonTypeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("builtInValidation", "builtInValidationIn", "builtInValidation", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_builtInValidationInDataFetchStatus", "_builtInValidationInDataFetchStatus", "_builtInValidationInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(r, "VariablesRecord");
var s = r;
s.init();
var l = class l extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var n = l,
    u = class u extends a.Model.BaseViewModel {
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
            "title" in t && (this.variables.titleIn = t.title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "BackgroundColor" in t && (this.variables.backgroundColorIn = t.BackgroundColor, "_backgroundColorInDataFetchStatus" in t && (this.variables._backgroundColorInDataFetchStatus = t._backgroundColorInDataFetchStatus)), "isLoading" in t && (this.variables.isLoadingIn = t.isLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "class" in t && (this.variables.classIn = t.class, "_classInDataFetchStatus" in t && (this.variables._classInDataFetchStatus = t._classInDataFetchStatus)), "enabled" in t && (this.variables.enabledIn = t.enabled, "_enabledInDataFetchStatus" in t && (this.variables._enabledInDataFetchStatus = t._enabledInDataFetchStatus)), "visible" in t && (this.variables.visibleIn = t.visible, "_visibleInDataFetchStatus" in t && (this.variables._visibleInDataFetchStatus = t._visibleInDataFetchStatus)), "borderRadius" in t && (this.variables.borderRadiusIn = t.borderRadius, "_borderRadiusInDataFetchStatus" in t && (this.variables._borderRadiusInDataFetchStatus = t._borderRadiusInDataFetchStatus)), "height" in t && (this.variables.heightIn = t.height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "buttonType" in t && (this.variables.buttonTypeIn = t.buttonType, "_buttonTypeInDataFetchStatus" in t && (this.variables._buttonTypeInDataFetchStatus = t._buttonTypeInDataFetchStatus)), "builtInValidation" in t && (this.variables.builtInValidationIn = t.builtInValidation, "_builtInValidationInDataFetchStatus" in t && (this.variables._builtInValidationInDataFetchStatus = t._builtInValidationInDataFetchStatus))
        }
    };
e(u, "Model");
var i = u;
i._hasValidationWidgetsValue = void 0;
var c = new a.Model.ModelFactory(i);
export {
    c as a
};