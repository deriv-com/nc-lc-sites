import {
    c as m
} from "./_oschunk-FZ6FUHBV.js";
import {
    Te as S,
    Zc as D,
    jd as V,
    rd as I,
    tf as _
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as r
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    T = class T extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return V.direction.right
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
s(T, "VariablesRecord");
var l = T;
l.init();
var b = class b extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(b, "WidgetsRecord");
var y = b,
    p = class p extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Direction" in t && (this.variables.directionIn = t.Direction, "_directionInDataFetchStatus" in t && (this.variables._directionInDataFetchStatus = t._directionInDataFetchStatus)), "HasOverlay" in t && (this.variables.hasOverlayIn = t.HasOverlay, "_hasOverlayInDataFetchStatus" in t && (this.variables._hasOverlayInDataFetchStatus = t._hasOverlayInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(p, "Model");
var c = p;
c._hasValidationWidgetsValue = void 0;
var N = new e.Model.ModelFactory(c);
var a = r,
    g = class g extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HeaderInfo", "headerInfoIn", "HeaderInfo", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new _)
            }, !1, _), this.attr("_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FooterInfo", "footerInfoIn", "FooterInfo", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
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
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(g, "VariablesRecord");
var u = g;
u.init();
var v = class v extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(v, "WidgetsRecord");
var C = v,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HeaderInfo" in t && (this.variables.headerInfoIn = t.HeaderInfo, "_headerInfoInDataFetchStatus" in t && (this.variables._headerInfoInDataFetchStatus = t._headerInfoInDataFetchStatus)), "FooterInfo" in t && (this.variables.footerInfoIn = t.FooterInfo, "_footerInfoInDataFetchStatus" in t && (this.variables._footerInfoInDataFetchStatus = t._footerInfoInDataFetchStatus)), "IsSidebarOpen" in t && (this.variables.isSidebarOpenIn = t.IsSidebarOpen, "_isSidebarOpenInDataFetchStatus" in t && (this.variables._isSidebarOpenInDataFetchStatus = t._isSidebarOpenInDataFetchStatus)), "ContentClassName" in t && (this.variables.contentClassNameIn = t.ContentClassName, "_contentClassNameInDataFetchStatus" in t && (this.variables._contentClassNameInDataFetchStatus = t._contentClassNameInDataFetchStatus)), "HasCustomButton" in t && (this.variables.hasCustomButtonIn = t.HasCustomButton, "_hasCustomButtonInDataFetchStatus" in t && (this.variables._hasCustomButtonInDataFetchStatus = t._hasCustomButtonInDataFetchStatus)), "HasFooter" in t && (this.variables.hasFooterIn = t.HasFooter, "_hasFooterInDataFetchStatus" in t && (this.variables._hasFooterInDataFetchStatus = t._hasFooterInDataFetchStatus))
        }
    };
s(i, "Model");
var d = i;
d._hasValidationWidgetsValue = void 0;
var U = new a.Model.ModelFactory(d);
var n = r,
    B = class B extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("EventImages", "eventImagesVar", "EventImages", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("EventDetails", "eventDetailsIn", "EventDetails", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(B, "VariablesRecord");
var h = B;
h.init();
var M = class M extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(M, "WidgetsRecord");
var O = M,
    o = class o extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {
            "EventDetails" in t && (this.variables.eventDetailsIn = t.EventDetails, "_eventDetailsInDataFetchStatus" in t && (this.variables._eventDetailsInDataFetchStatus = t._eventDetailsInDataFetchStatus))
        }
    };
s(o, "Model");
var f = o;
f._hasValidationWidgetsValue = void 0;
var q = new n.Model.ModelFactory(f);
export {
    N as a, U as b, q as c
};