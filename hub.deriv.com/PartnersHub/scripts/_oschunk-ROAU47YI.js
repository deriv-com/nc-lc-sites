import {
    c as d
} from "./_oschunk-BDI2RWOA.js";
import {
    Ue as l,
    kd as C,
    yf as h
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    D = class D extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return C.direction.right
            }, !1), this.attr("_directionInDataFetchStatus", "_directionInDataFetchStatus", "_directionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasOverlay", "hasOverlayIn", "HasOverlay", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "500px"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(D, "VariablesRecord");
var o = D;
o.init();
var S = class S extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(S, "WidgetsRecord");
var f = S,
    _ = class _ extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Direction" in t && (this.variables.directionIn = t.Direction, "_directionInDataFetchStatus" in t && (this.variables._directionInDataFetchStatus = t._directionInDataFetchStatus)), "HasOverlay" in t && (this.variables.hasOverlayIn = t.HasOverlay, "_hasOverlayInDataFetchStatus" in t && (this.variables._hasOverlayInDataFetchStatus = t._hasOverlayInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(_, "Model");
var i = _;
i._hasValidationWidgetsValue = void 0;
var v = new e.Model.ModelFactory(i);
var a = r,
    m = class m extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HeaderInfo", "headerInfoIn", "HeaderInfo", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new h)
            }, !1, h), this.attr("_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FooterInfo", "footerInfoIn", "FooterInfo", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSidebarOpen", "isSidebarOpenIn", "IsSidebarOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSidebarOpenInDataFetchStatus", "_isSidebarOpenInDataFetchStatus", "_isSidebarOpenInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ContentClassName", "contentClassNameIn", "ContentClassName", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contentClassNameInDataFetchStatus", "_contentClassNameInDataFetchStatus", "_contentClassNameInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCustomButton", "hasCustomButtonIn", "HasCustomButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCustomButtonInDataFetchStatus", "_hasCustomButtonInDataFetchStatus", "_hasCustomButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasFooter", "hasFooterIn", "HasFooter", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFooterInDataFetchStatus", "_hasFooterInDataFetchStatus", "_hasFooterInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCustomHeader", "hasCustomHeaderIn", "HasCustomHeader", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCustomHeaderInDataFetchStatus", "_hasCustomHeaderInDataFetchStatus", "_hasCustomHeaderInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CustomExtendedClass", "customExtendedClassIn", "CustomExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_customExtendedClassInDataFetchStatus", "_customExtendedClassInDataFetchStatus", "_customExtendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(m, "VariablesRecord");
var u = m;
u.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(y, "WidgetsRecord");
var F = y,
    n = class n extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HeaderInfo" in t && (this.variables.headerInfoIn = t.HeaderInfo, "_headerInfoInDataFetchStatus" in t && (this.variables._headerInfoInDataFetchStatus = t._headerInfoInDataFetchStatus)), "FooterInfo" in t && (this.variables.footerInfoIn = t.FooterInfo, "_footerInfoInDataFetchStatus" in t && (this.variables._footerInfoInDataFetchStatus = t._footerInfoInDataFetchStatus)), "IsSidebarOpen" in t && (this.variables.isSidebarOpenIn = t.IsSidebarOpen, "_isSidebarOpenInDataFetchStatus" in t && (this.variables._isSidebarOpenInDataFetchStatus = t._isSidebarOpenInDataFetchStatus)), "ContentClassName" in t && (this.variables.contentClassNameIn = t.ContentClassName, "_contentClassNameInDataFetchStatus" in t && (this.variables._contentClassNameInDataFetchStatus = t._contentClassNameInDataFetchStatus)), "HasCustomButton" in t && (this.variables.hasCustomButtonIn = t.HasCustomButton, "_hasCustomButtonInDataFetchStatus" in t && (this.variables._hasCustomButtonInDataFetchStatus = t._hasCustomButtonInDataFetchStatus)), "HasFooter" in t && (this.variables.hasFooterIn = t.HasFooter, "_hasFooterInDataFetchStatus" in t && (this.variables._hasFooterInDataFetchStatus = t._hasFooterInDataFetchStatus)), "HasCustomHeader" in t && (this.variables.hasCustomHeaderIn = t.HasCustomHeader, "_hasCustomHeaderInDataFetchStatus" in t && (this.variables._hasCustomHeaderInDataFetchStatus = t._hasCustomHeaderInDataFetchStatus)), "CustomExtendedClass" in t && (this.variables.customExtendedClassIn = t.CustomExtendedClass, "_customExtendedClassInDataFetchStatus" in t && (this.variables._customExtendedClassInDataFetchStatus = t._customExtendedClassInDataFetchStatus))
        }
    };
s(n, "Model");
var c = n;
c._hasValidationWidgetsValue = void 0;
var x = new a.Model.ModelFactory(c);
export {
    v as a, x as b
};