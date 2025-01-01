import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = i,
    I = class I extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasBackButton", "hasBackButtonIn", "HasBackButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasSeparator", "hasSeparatorIn", "HasSeparator", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
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
var u = f,
    D = class D extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "HasBackButton" in t && (this.variables.hasBackButtonIn = t.HasBackButton, "_hasBackButtonInDataFetchStatus" in t && (this.variables._hasBackButtonInDataFetchStatus = t._hasBackButtonInDataFetchStatus)), "HasCloseIcon" in t && (this.variables.hasCloseIconIn = t.HasCloseIcon, "_hasCloseIconInDataFetchStatus" in t && (this.variables._hasCloseIconInDataFetchStatus = t._hasCloseIconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HasSeparator" in t && (this.variables.hasSeparatorIn = t.HasSeparator, "_hasSeparatorInDataFetchStatus" in t && (this.variables._hasSeparatorInDataFetchStatus = t._hasSeparatorInDataFetchStatus))
        }
    };
s(D, "Model");
var o = D;
o._hasValidationWidgetsValue = void 0;
var T = new a.Model.ModelFactory(o);
var e = i,
    d = class d extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasBackButton", "hasBackButtonIn", "HasBackButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsHeaderVisible", "isHeaderVisibleIn", "IsHeaderVisible", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(d, "VariablesRecord");
var l = d;
l.init();
var B = class B extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(B, "WidgetsRecord");
var S = B,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HasBackButton" in t && (this.variables.hasBackButtonIn = t.HasBackButton, "_hasBackButtonInDataFetchStatus" in t && (this.variables._hasBackButtonInDataFetchStatus = t._hasBackButtonInDataFetchStatus)), "HasCloseIcon" in t && (this.variables.hasCloseIconIn = t.HasCloseIcon, "_hasCloseIconInDataFetchStatus" in t && (this.variables._hasCloseIconInDataFetchStatus = t._hasCloseIconInDataFetchStatus)), "IsHeaderVisible" in t && (this.variables.isHeaderVisibleIn = t.IsHeaderVisible, "_isHeaderVisibleInDataFetchStatus" in t && (this.variables._isHeaderVisibleInDataFetchStatus = t._isHeaderVisibleInDataFetchStatus))
        }
    };
s(n, "Model");
var c = n;
c._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(c);
export {
    T as a, C as b
};