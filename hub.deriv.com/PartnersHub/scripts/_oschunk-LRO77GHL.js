import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = i,
    D = class D extends a.DataTypes.GenericRecord {
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
s(D, "VariablesRecord");
var r = D;
r.init();
var d = class d extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(d, "WidgetsRecord");
var h = d,
    I = class I extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return h
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "title" in t && (this.variables.titleIn = t.title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "BackgroundColor" in t && (this.variables.backgroundColorIn = t.BackgroundColor, "_backgroundColorInDataFetchStatus" in t && (this.variables._backgroundColorInDataFetchStatus = t._backgroundColorInDataFetchStatus)), "isLoading" in t && (this.variables.isLoadingIn = t.isLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "class" in t && (this.variables.classIn = t.class, "_classInDataFetchStatus" in t && (this.variables._classInDataFetchStatus = t._classInDataFetchStatus)), "enabled" in t && (this.variables.enabledIn = t.enabled, "_enabledInDataFetchStatus" in t && (this.variables._enabledInDataFetchStatus = t._enabledInDataFetchStatus)), "visible" in t && (this.variables.visibleIn = t.visible, "_visibleInDataFetchStatus" in t && (this.variables._visibleInDataFetchStatus = t._visibleInDataFetchStatus)), "borderRadius" in t && (this.variables.borderRadiusIn = t.borderRadius, "_borderRadiusInDataFetchStatus" in t && (this.variables._borderRadiusInDataFetchStatus = t._borderRadiusInDataFetchStatus)), "height" in t && (this.variables.heightIn = t.height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "buttonType" in t && (this.variables.buttonTypeIn = t.buttonType, "_buttonTypeInDataFetchStatus" in t && (this.variables._buttonTypeInDataFetchStatus = t._buttonTypeInDataFetchStatus)), "builtInValidation" in t && (this.variables.builtInValidationIn = t.builtInValidation, "_builtInValidationInDataFetchStatus" in t && (this.variables._builtInValidationInDataFetchStatus = t._builtInValidationInDataFetchStatus))
        }
    };
s(I, "Model");
var o = I;
o._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(o);
var e = i,
    b = class b extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PrimaryButtonLabel", "primaryButtonLabelIn", "PrimaryButtonLabel", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_primaryButtonLabelInDataFetchStatus", "_primaryButtonLabelInDataFetchStatus", "_primaryButtonLabelInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SecondaryButtonLabel", "secondaryButtonLabelIn", "SecondaryButtonLabel", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_secondaryButtonLabelInDataFetchStatus", "_secondaryButtonLabelInDataFetchStatus", "_secondaryButtonLabelInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldHideOnDesktop", "shouldHideOnDesktopIn", "ShouldHideOnDesktop", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_shouldHideOnDesktopInDataFetchStatus", "_shouldHideOnDesktopInDataFetchStatus", "_shouldHideOnDesktopInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCustomButton", "hasCustomButtonIn", "HasCustomButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCustomButtonInDataFetchStatus", "_hasCustomButtonInDataFetchStatus", "_hasCustomButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(b, "VariablesRecord");
var u = b;
u.init();
var y = class y extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(y, "WidgetsRecord");
var f = y,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "PrimaryButtonLabel" in t && (this.variables.primaryButtonLabelIn = t.PrimaryButtonLabel, "_primaryButtonLabelInDataFetchStatus" in t && (this.variables._primaryButtonLabelInDataFetchStatus = t._primaryButtonLabelInDataFetchStatus)), "SecondaryButtonLabel" in t && (this.variables.secondaryButtonLabelIn = t.SecondaryButtonLabel, "_secondaryButtonLabelInDataFetchStatus" in t && (this.variables._secondaryButtonLabelInDataFetchStatus = t._secondaryButtonLabelInDataFetchStatus)), "ShouldHideOnDesktop" in t && (this.variables.shouldHideOnDesktopIn = t.ShouldHideOnDesktop, "_shouldHideOnDesktopInDataFetchStatus" in t && (this.variables._shouldHideOnDesktopInDataFetchStatus = t._shouldHideOnDesktopInDataFetchStatus)), "HasCustomButton" in t && (this.variables.hasCustomButtonIn = t.HasCustomButton, "_hasCustomButtonInDataFetchStatus" in t && (this.variables._hasCustomButtonInDataFetchStatus = t._hasCustomButtonInDataFetchStatus))
        }
    };
s(n, "Model");
var l = n;
l._hasValidationWidgetsValue = void 0;
var p = new e.Model.ModelFactory(l);
export {
    F as a, p as b
};