import {
    $b as H,
    ef as tt
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = i,
    L = class L extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LeftIcon", "leftIconIn", "LeftIcon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RightIcon", "rightIconIn", "RightIcon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsActive", "isActiveIn", "IsActive", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BodyClassName", "bodyClassNameIn", "BodyClassName", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_bodyClassNameInDataFetchStatus", "_bodyClassNameInDataFetchStatus", "_bodyClassNameInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RightIconClassName", "rightIconClassNameIn", "RightIconClassName", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconClassNameInDataFetchStatus", "_rightIconClassNameInDataFetchStatus", "_rightIconClassNameInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(L, "VariablesRecord");
var g = L;
g.init();
var N = class N extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(N, "WidgetsRecord");
var W = N,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "LeftIcon" in t && (this.variables.leftIconIn = t.LeftIcon, "_leftIconInDataFetchStatus" in t && (this.variables._leftIconInDataFetchStatus = t._leftIconInDataFetchStatus)), "RightIcon" in t && (this.variables.rightIconIn = t.RightIcon, "_rightIconInDataFetchStatus" in t && (this.variables._rightIconInDataFetchStatus = t._rightIconInDataFetchStatus)), "IsActive" in t && (this.variables.isActiveIn = t.IsActive, "_isActiveInDataFetchStatus" in t && (this.variables._isActiveInDataFetchStatus = t._isActiveInDataFetchStatus)), "BodyClassName" in t && (this.variables.bodyClassNameIn = t.BodyClassName, "_bodyClassNameInDataFetchStatus" in t && (this.variables._bodyClassNameInDataFetchStatus = t._bodyClassNameInDataFetchStatus)), "RightIconClassName" in t && (this.variables.rightIconClassNameIn = t.RightIconClassName, "_rightIconClassNameInDataFetchStatus" in t && (this.variables._rightIconClassNameInDataFetchStatus = t._rightIconClassNameInDataFetchStatus))
        }
    };
a(l, "Model");
var b = l;
b._hasValidationWidgetsValue = void 0;
var _t = new e.Model.ModelFactory(b);
var n = i,
    A = class A extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LeftIcon", "leftIconIn", "LeftIcon", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(A, "VariablesRecord");
var S = A;
S.init();
var B = class B extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(B, "WidgetsRecord");
var x = B,
    u = class u extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "LeftIcon" in t && (this.variables.leftIconIn = t.LeftIcon, "_leftIconInDataFetchStatus" in t && (this.variables._leftIconInDataFetchStatus = t._leftIconInDataFetchStatus))
        }
    };
a(u, "Model");
var v = u;
v._hasValidationWidgetsValue = void 0;
var bt = new n.Model.ModelFactory(v);
var f = i,
    G = class G extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(G, "VariablesRecord");
var p = G;
p.init();
var w = class w extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(w, "WidgetsRecord");
var O = w,
    k = class k extends f.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(k, "Model");
var y = k;
y._hasValidationWidgetsValue = void 0;
var pt = new f.Model.ModelFactory(y);
var r = i,
    q = class q extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsActive", "isActiveIn", "IsActive", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Icon", "iconIn", "Icon", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(q, "VariablesRecord");
var T = q;
T.init();
var z = class z extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var E = z,
    d = class d extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "IsActive" in t && (this.variables.isActiveIn = t.IsActive, "_isActiveInDataFetchStatus" in t && (this.variables._isActiveInDataFetchStatus = t._isActiveInDataFetchStatus)), "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus))
        }
    };
a(d, "Model");
var M = d;
M._hasValidationWidgetsValue = void 0;
var Mt = new r.Model.ModelFactory(M);
var s = i,
    I = class I extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return tt
        }
        static fromStructure(t) {
            return new I(new I.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(I, "GetLanguagesAggrRec");
var _ = I;
_.init();
var Q = class Q extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoggingOut", "isLoggingOutVar", "IsLoggingOut", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("Message", "messageVar", "Message", !0, !1, s.DataTypes.DataTypes.Text, function() {
            return "Click to copy ID"
        }, !1), this.attr("LanguageModal", "languageModalVar", "LanguageModal", !0, !1, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new H)
        }, !1, H), this.attr("CurrentScreen", "currentScreenIn", "CurrentScreen", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("_currentScreenInDataFetchStatus", "_currentScreenInDataFetchStatus", "_currentScreenInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetLanguages", "getLanguagesAggr", "GetLanguages", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new _)
        }, !0, _)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(Q, "VariablesRecord");
var F = Q;
F.init();
var X = class X extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(X, "WidgetsRecord");
var J = X,
    m = class m extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), m._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CurrentScreen" in t && (this.variables.currentScreenIn = t.CurrentScreen, "_currentScreenInDataFetchStatus" in t && (this.variables._currentScreenInDataFetchStatus = t._currentScreenInDataFetchStatus))
        }
    };
a(m, "Model");
var V = m;
V._hasValidationWidgetsValue = void 0;
var xt = new s.Model.ModelFactory(V);
var D = i,
    Z = class Z extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Z, "VariablesRecord");
var C = Z;
C.init();
var $ = class $ extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a($, "WidgetsRecord");
var Y = $,
    h = class h extends D.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(h, "Model");
var P = h;
P._hasValidationWidgetsValue = void 0;
var Ot = new D.Model.ModelFactory(P);
export {
    _t as a, bt as b, pt as c, Mt as d, xt as e, Ot as f
};