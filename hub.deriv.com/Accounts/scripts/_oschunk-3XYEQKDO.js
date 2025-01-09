import {
    d as m
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as V
} from "./_oschunk-UATY3RVV.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = s,
    _ = class _ extends e.DataTypes.GenericRecord {
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
a(_, "VariablesRecord");
var c = _;
c.init();
var S = class S extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(S, "WidgetsRecord");
var y = S,
    I = class I extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
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
a(I, "Model");
var l = I;
l._hasValidationWidgetsValue = void 0;
var B = new e.Model.ModelFactory(l);
var n = s,
    T = class T extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(T, "VariablesRecord");
var d = T;
d.init();
var v = class v extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(v, "WidgetsRecord");
var p = v,
    i = class i extends n.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(i, "Model");
var u = i;
u._hasValidationWidgetsValue = void 0;
var q = new n.Model.ModelFactory(u);
var o = s,
    M = class M extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(M, "VariablesRecord");
var h = M;
h.init();
var F = class F extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(F, "WidgetsRecord");
var O = F,
    r = class r extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(r, "Model");
var f = r;
f._hasValidationWidgetsValue = void 0;
var K = new o.Model.ModelFactory(f);
export {
    B as a, q as b, K as c
};