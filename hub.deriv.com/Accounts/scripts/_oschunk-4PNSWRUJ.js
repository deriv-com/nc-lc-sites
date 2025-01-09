import {
    f as v
} from "./_oschunk-KZFTAIEG.js";
import {
    le as p
} from "./_oschunk-UATY3RVV.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var l = i,
    F = class F extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(F, "VariablesRecord");
var d = F;
d.init();
var M = class M extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(M, "WidgetsRecord");
var g = M,
    c = class c extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0 || void 0 || void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(c, "Model");
var f = c;
f._hasValidationWidgetsValue = void 0;
var P = new l.Model.ModelFactory(f);
var n = i,
    x = class x extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsSelected", "isSelectedIn", "IsSelected", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Ref", "refIn", "Ref", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_refInDataFetchStatus", "_refInDataFetchStatus", "_refInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(x, "VariablesRecord");
var S = x;
S.init();
var b = class b extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(b, "WidgetsRecord");
var V = b,
    A = class A extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsSelected" in t && (this.variables.isSelectedIn = t.IsSelected, "_isSelectedInDataFetchStatus" in t && (this.variables._isSelectedInDataFetchStatus = t._isSelectedInDataFetchStatus)), "Ref" in t && (this.variables.refIn = t.Ref, "_refInDataFetchStatus" in t && (this.variables._refInDataFetchStatus = t._refInDataFetchStatus))
        }
    };
e(A, "Model");
var D = A;
D._hasValidationWidgetsValue = void 0;
var Z = new n.Model.ModelFactory(D);
var s = i,
    G = class G extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new v)
            }, !1, v), this.attr("SVGCode", "sVGCodeIn", "SVGCode", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(G, "VariablesRecord");
var h = G;
h.init();
var R = class R extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(R, "WidgetsRecord");
var W = R,
    U = class U extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "SVGCode" in t && (this.variables.sVGCodeIn = t.SVGCode, "_sVGCodeInDataFetchStatus" in t && (this.variables._sVGCodeInDataFetchStatus = t._sVGCodeInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(U, "Model");
var I = U;
I._hasValidationWidgetsValue = void 0;
var at = new s.Model.ModelFactory(I);
var r = i,
    E = class E extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsSelected", "isSelectedIn", "IsSelected", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Ref", "refIn", "Ref", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_refInDataFetchStatus", "_refInDataFetchStatus", "_refInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(E, "VariablesRecord");
var _ = E;
_.init();
var L = class L extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(L, "WidgetsRecord");
var B = L,
    k = class k extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsSelected" in t && (this.variables.isSelectedIn = t.IsSelected, "_isSelectedInDataFetchStatus" in t && (this.variables._isSelectedInDataFetchStatus = t._isSelectedInDataFetchStatus)), "Ref" in t && (this.variables.refIn = t.Ref, "_refInDataFetchStatus" in t && (this.variables._refInDataFetchStatus = t._refInDataFetchStatus))
        }
    };
e(k, "Model");
var m = k;
m._hasValidationWidgetsValue = void 0;
var nt = new r.Model.ModelFactory(m);
var a = i,
    q = class q extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveSection", "activeSectionIn", "ActiveSection", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_activeSectionInDataFetchStatus", "_activeSectionInDataFetchStatus", "_activeSectionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ActiveMenu", "activeMenuIn", "ActiveMenu", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_activeMenuInDataFetchStatus", "_activeMenuInDataFetchStatus", "_activeMenuInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("User", "userIn", "User", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("_userInDataFetchStatus", "_userInDataFetchStatus", "_userInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(q, "VariablesRecord");
var y = q;
y.init();
var z = class z extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(z, "WidgetsRecord");
var j = z,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ActiveSection" in t && (this.variables.activeSectionIn = t.ActiveSection, "_activeSectionInDataFetchStatus" in t && (this.variables._activeSectionInDataFetchStatus = t._activeSectionInDataFetchStatus)), "ActiveMenu" in t && (this.variables.activeMenuIn = t.ActiveMenu, "_activeMenuInDataFetchStatus" in t && (this.variables._activeMenuInDataFetchStatus = t._activeMenuInDataFetchStatus)), "User" in t && (this.variables.userIn = t.User, "_userInDataFetchStatus" in t && (this.variables._userInDataFetchStatus = t._userInDataFetchStatus))
        }
    };
e(o, "Model");
var T = o;
T._hasValidationWidgetsValue = void 0;
var lt = new a.Model.ModelFactory(T);
export {
    P as a, Z as b, at as c, nt as d, lt as e
};