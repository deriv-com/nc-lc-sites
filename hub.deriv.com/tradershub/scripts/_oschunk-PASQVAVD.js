import {
    d as y
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as E
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as i
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = i,
    _ = class _ extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return E.direction.right
            }, !1), this.attr("_directionInDataFetchStatus", "_directionInDataFetchStatus", "_directionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasOverlay", "hasOverlayIn", "HasOverlay", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return "500px"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(_, "VariablesRecord");
var c = _;
c.init();
var T = class T extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(T, "WidgetsRecord");
var g = T,
    v = class v extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Direction" in t && (this.variables.directionIn = t.Direction, "_directionInDataFetchStatus" in t && (this.variables._directionInDataFetchStatus = t._directionInDataFetchStatus)), "HasOverlay" in t && (this.variables.hasOverlayIn = t.HasOverlay, "_hasOverlayInDataFetchStatus" in t && (this.variables._hasOverlayInDataFetchStatus = t._hasOverlayInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(v, "Model");
var u = v;
u._hasValidationWidgetsValue = void 0;
var N = new a.Model.ModelFactory(u);
var l = i,
    C = class C extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(C, "VariablesRecord");
var h = C;
h.init();
var x = class x extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(x, "WidgetsRecord");
var O = x,
    n = class n extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(n, "Model");
var f = n;
f._hasValidationWidgetsValue = void 0;
var J = new l.Model.ModelFactory(f);
var r = i,
    V = class V extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(V, "VariablesRecord");
var D = V;
D.init();
var W = class W extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(W, "WidgetsRecord");
var b = W,
    U = class U extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(U, "Model");
var I = U;
I._hasValidationWidgetsValue = void 0;
var Q = new r.Model.ModelFactory(I);
var s = i,
    w = class w extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveTab", "activeTabVar", "ActiveTab", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("isAccountSettingNavigationVisible", "isAccountSettingNavigationVisibleVar", "isAccountSettingNavigationVisible", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(w, "VariablesRecord");
var S = w;
S.init();
var L = class L extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(L, "WidgetsRecord");
var B = L,
    o = class o extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
e(o, "Model");
var m = o;
m._hasValidationWidgetsValue = void 0;
var et = new s.Model.ModelFactory(m);
export {
    N as a, J as b, Q as c, et as d
};