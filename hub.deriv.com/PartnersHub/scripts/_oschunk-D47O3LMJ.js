import {
    e as l
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = i,
    f = class f extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("SVGCode", "sVGCodeIn", "SVGCode", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(f, "VariablesRecord");
var o = f;
o.init();
var I = class I extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(I, "WidgetsRecord");
var c = I,
    D = class D extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "SVGCode" in t && (this.variables.sVGCodeIn = t.SVGCode, "_sVGCodeInDataFetchStatus" in t && (this.variables._sVGCodeInDataFetchStatus = t._sVGCodeInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(D, "Model");
var r = D;
r._hasValidationWidgetsValue = void 0;
var C = new a.Model.ModelFactory(r);
var e = i,
    g = class g extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLeftButton", "showLeftButtonIn", "ShowLeftButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowRightButton", "showRightButtonIn", "ShowRightButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CustomRightIcon", "customRightIconIn", "CustomRightIcon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(g, "VariablesRecord");
var u = g;
u.init();
var T = class T extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(T, "WidgetsRecord");
var S = T,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShowLeftButton" in t && (this.variables.showLeftButtonIn = t.ShowLeftButton, "_showLeftButtonInDataFetchStatus" in t && (this.variables._showLeftButtonInDataFetchStatus = t._showLeftButtonInDataFetchStatus)), "ShowRightButton" in t && (this.variables.showRightButtonIn = t.ShowRightButton, "_showRightButtonInDataFetchStatus" in t && (this.variables._showRightButtonInDataFetchStatus = t._showRightButtonInDataFetchStatus)), "CustomRightIcon" in t && (this.variables.customRightIconIn = t.CustomRightIcon, "_customRightIconInDataFetchStatus" in t && (this.variables._customRightIconInDataFetchStatus = t._customRightIconInDataFetchStatus))
        }
    };
s(n, "Model");
var h = n;
h._hasValidationWidgetsValue = void 0;
var B = new e.Model.ModelFactory(h);
export {
    C as a, B as b
};