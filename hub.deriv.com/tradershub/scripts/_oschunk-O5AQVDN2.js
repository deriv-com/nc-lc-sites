import {
    d as _
} from "./_oschunk-2ZI4JQLD.js";
import {
    bh as j
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as s
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var i = s,
    v = class v extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsNotResident", "isNotResidentVar", "IsNotResident", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPopupOpen", "isPopupOpenVar", "IsPopupOpen", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(v, "VariablesRecord");
var u = v;
u.init();
var O = class O extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CheckIcon2: i.Model.ValidationWidgetRecord
        }
    }
};
e(O, "WidgetsRecord");
var T = O,
    F = class F extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
e(F, "Model");
var h = F;
h._hasValidationWidgetsValue = void 0;
var Y = new i.Model.ModelFactory(h);
var a = s,
    b = class b extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new _)
            }, !1, _), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return j.direction.right
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
e(b, "VariablesRecord");
var f = b;
f.init();
var V = class V extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(V, "WidgetsRecord");
var M = V,
    W = class W extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Direction" in t && (this.variables.directionIn = t.Direction, "_directionInDataFetchStatus" in t && (this.variables._directionInDataFetchStatus = t._directionInDataFetchStatus)), "HasOverlay" in t && (this.variables.hasOverlayIn = t.HasOverlay, "_hasOverlayInDataFetchStatus" in t && (this.variables._hasOverlayInDataFetchStatus = t._hasOverlayInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(W, "Model");
var D = W;
D._hasValidationWidgetsValue = void 0;
var et = new a.Model.ModelFactory(D);
var d = s,
    U = class U extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(U, "VariablesRecord");
var m = U;
m.init();
var R = class R extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(R, "WidgetsRecord");
var B = R,
    o = class o extends d.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(o, "Model");
var I = o;
I._hasValidationWidgetsValue = void 0;
var ot = new d.Model.ModelFactory(I);
var n = s,
    N = class N extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(N, "VariablesRecord");
var p = N;
p.init();
var E = class E extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(E, "WidgetsRecord");
var L = E,
    k = class k extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(k, "Model");
var y = k;
y._hasValidationWidgetsValue = void 0;
var ct = new n.Model.ModelFactory(y);
var r = s,
    H = class H extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveTab", "activeTabVar", "ActiveTab", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("isAccountSettingNavigationVisible", "isAccountSettingNavigationVisibleVar", "isAccountSettingNavigationVisible", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(H, "VariablesRecord");
var S = H;
S.init();
var P = class P extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(P, "WidgetsRecord");
var A = P,
    l = class l extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return A
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
e(l, "Model");
var g = l;
g._hasValidationWidgetsValue = void 0;
var pt = new r.Model.ModelFactory(g);
export {
    et as a, ot as b, ct as c, Y as d, pt as e
};