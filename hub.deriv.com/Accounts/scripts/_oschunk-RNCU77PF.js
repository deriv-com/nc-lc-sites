import {
    Jh as R,
    li as d
} from "./_oschunk-UATY3RVV.js";
import {
    ia as a
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var n = a,
    w = class w extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(w, "VariablesRecord");
var V = w;
V.init();
var B = class B extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(B, "WidgetsRecord");
var F = B,
    U = class U extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
t(U, "Model");
var T = U;
T._hasValidationWidgetsValue = void 0;
var pt = new n.Model.ModelFactory(T);
var i = a,
    K = class K extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("LastUsed", "lastUsedVar", "LastUsed", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("PasskeyData", "passkeyDataIn", "PasskeyData", !0, !1, i.DataTypes.DataTypes.Record, function() {
                return i.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("_passkeyDataInDataFetchStatus", "_passkeyDataInDataFetchStatus", "_passkeyDataInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(K, "VariablesRecord");
var I = K;
I.init();
var j = class j extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(j, "WidgetsRecord");
var G = j,
    l = class l extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(e) {
            "PasskeyData" in e && (this.variables.passkeyDataIn = e.PasskeyData, "_passkeyDataInDataFetchStatus" in e && (this.variables._passkeyDataInDataFetchStatus = e._passkeyDataInDataFetchStatus))
        }
    };
t(l, "Model");
var S = l;
S._hasValidationWidgetsValue = void 0;
var gt = new i.Model.ModelFactory(S);
var o = a,
    H = class H extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasskeysList", "passkeysListIn", "PasskeysList", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_passkeysListInDataFetchStatus", "_passkeysListInDataFetchStatus", "_passkeysListInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(H, "VariablesRecord");
var W = H;
W.init();
var J = class J extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(J, "WidgetsRecord");
var q = J,
    u = class u extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return q
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0), u._hasValidationWidgetsValue
        }
        setInputs(e) {
            "PasskeysList" in e && (this.variables.passkeysListIn = e.PasskeysList, "_passkeysListInDataFetchStatus" in e && (this.variables._passkeysListInDataFetchStatus = e._passkeysListInDataFetchStatus))
        }
    };
t(u, "Model");
var C = u;
C._hasValidationWidgetsValue = void 0;
var It = new o.Model.ModelFactory(C);
var D = a,
    Q = class Q extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(Q, "VariablesRecord");
var k = Q;
k.init();
var X = class X extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(X, "WidgetsRecord");
var N = X,
    m = class m extends D.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0), m._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(m, "Model");
var v = m;
v._hasValidationWidgetsValue = void 0;
var xt = new D.Model.ModelFactory(v);
var g = a,
    $ = class $ extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t($, "VariablesRecord");
var x = $;
x.init();
var tt = class tt extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(tt, "WidgetsRecord");
var Y = tt,
    f = class f extends g.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return x
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return f._hasValidationWidgetsValue === void 0 && (f._hasValidationWidgetsValue = void 0 || void 0), f._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(f, "Model");
var P = f;
P._hasValidationWidgetsValue = void 0;
var At = new g.Model.ModelFactory(P);
var M = a,
    st = class st extends M.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(M.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(st, "VariablesRecord");
var b = st;
b.init();
var it = class it extends M.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(it, "WidgetsRecord");
var et = it,
    y = class y extends M.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return et
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), y._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(y, "Model");
var A = y;
A._hasValidationWidgetsValue = void 0;
var Rt = new M.Model.ModelFactory(A);
var s = a,
    rt = class rt extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowLearnMore", "showLearnMoreVar", "ShowLearnMore", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowPasskeysCreate", "showPasskeysCreateVar", "ShowPasskeysCreate", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasskeysList", "passkeysListVar", "PasskeysList", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
                return s.DataTypes.ImmutableBase.getData(new d)
            }, !1, d)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(rt, "VariablesRecord");
var L = rt;
L.init();
var nt = class nt extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(nt, "WidgetsRecord");
var ot = nt,
    _ = class _ extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return ot
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(_, "Model");
var O = _;
O._hasValidationWidgetsValue = void 0;
var Gt = new s.Model.ModelFactory(O);
export {
    pt as a, gt as b, It as c, xt as d, At as e, Rt as f, Gt as g
};