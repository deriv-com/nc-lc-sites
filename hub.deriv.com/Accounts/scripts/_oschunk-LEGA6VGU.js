import {
    Eg as C,
    Hb as b,
    Sf as v,
    qa as F
} from "./_oschunk-UATY3RVV.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = i,
    L = class L extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Color", "colorIn", "Color", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return C.color.primary
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Shape", "shapeIn", "Shape", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return C.shape.rounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLight", "isLightIn", "IsLight", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(L, "VariablesRecord");
var m = L;
m.init();
var A = class A extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(A, "WidgetsRecord");
var W = A,
    O = class O extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Color" in t && (this.variables.colorIn = t.Color, "_colorInDataFetchStatus" in t && (this.variables._colorInDataFetchStatus = t._colorInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "IsLight" in t && (this.variables.isLightIn = t.IsLight, "_isLightInDataFetchStatus" in t && (this.variables._isLightInDataFetchStatus = t._isLightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(O, "Model");
var I = O;
I._hasValidationWidgetsValue = void 0;
var at = new e.Model.ModelFactory(I);
var o = i,
    U = class U extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(U, "VariablesRecord");
var _ = U;
_.init();
var w = class w extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(w, "WidgetsRecord");
var R = w,
    c = class c extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return R
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0 || void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(c, "Model");
var S = c;
S._hasValidationWidgetsValue = void 0;
var it = new o.Model.ModelFactory(S);
var s = i,
    E = class E extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Ref", "refIn", "Ref", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_refInDataFetchStatus", "_refInDataFetchStatus", "_refInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(E, "VariablesRecord");
var p = E;
p.init();
var P = class P extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(P, "WidgetsRecord");
var G = P,
    l = class l extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "Ref" in t && (this.variables.refIn = t.Ref, "_refInDataFetchStatus" in t && (this.variables._refInDataFetchStatus = t._refInDataFetchStatus))
        }
    };
a(l, "Model");
var g = l;
g._hasValidationWidgetsValue = void 0;
var ot = new s.Model.ModelFactory(g);
var n = i,
    q = class q extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("VerificationStatus", "verificationStatusVar", "VerificationStatus", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("DisableSections", "disableSectionsVar", "DisableSections", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new v)
            }, !1, v)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(q, "VariablesRecord");
var y = q;
y.init();
var H = class H extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(H, "WidgetsRecord");
var k = H,
    u = class u extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(u, "Model");
var T = u;
T._hasValidationWidgetsValue = void 0;
var ft = new n.Model.ModelFactory(T);
var r = i,
    D = class D extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListData", "residenceListDataVar", "ResidenceListData", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new b)
            }, !1, b)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new D(new D.RecordClass({
                residenceListDataVar: r.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(D, "VariablesRecord");
var V = D;
V.init();
var K = class K extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(K, "WidgetsRecord");
var J = K,
    d = class d extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(d, "Model");
var M = d;
M._hasValidationWidgetsValue = void 0;
var _t = new r.Model.ModelFactory(M);
export {
    at as a, it as b, ot as c, ft as d, _t as e
};