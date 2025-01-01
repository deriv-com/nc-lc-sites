import {
    e as h
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = i,
    I = class I extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new h)
            }, !1, h), this.attr("SVGCode", "sVGCodeIn", "SVGCode", !0, !1, a.DataTypes.DataTypes.Text, function() {
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
s(I, "VariablesRecord");
var r = I;
r.init();
var f = class f extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(f, "WidgetsRecord");
var c = f,
    D = class D extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
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
var o = D;
o._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(o);
var e = i,
    T = class T extends e.DataTypes.GenericRecord {
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
            }, !1), this.attr("IsSidebarTitle", "isSidebarTitleIn", "IsSidebarTitle", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSidebarTitleInDataFetchStatus", "_isSidebarTitleInDataFetchStatus", "_isSidebarTitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(T, "VariablesRecord");
var u = T;
u.init();
var g = class g extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(g, "WidgetsRecord");
var S = g,
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
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShowLeftButton" in t && (this.variables.showLeftButtonIn = t.ShowLeftButton, "_showLeftButtonInDataFetchStatus" in t && (this.variables._showLeftButtonInDataFetchStatus = t._showLeftButtonInDataFetchStatus)), "ShowRightButton" in t && (this.variables.showRightButtonIn = t.ShowRightButton, "_showRightButtonInDataFetchStatus" in t && (this.variables._showRightButtonInDataFetchStatus = t._showRightButtonInDataFetchStatus)), "CustomRightIcon" in t && (this.variables.customRightIconIn = t.CustomRightIcon, "_customRightIconInDataFetchStatus" in t && (this.variables._customRightIconInDataFetchStatus = t._customRightIconInDataFetchStatus)), "IsSidebarTitle" in t && (this.variables.isSidebarTitleIn = t.IsSidebarTitle, "_isSidebarTitleInDataFetchStatus" in t && (this.variables._isSidebarTitleInDataFetchStatus = t._isSidebarTitleInDataFetchStatus))
        }
    };
s(n, "Model");
var l = n;
l._hasValidationWidgetsValue = void 0;
var b = new e.Model.ModelFactory(l);
export {
    F as a, b
};