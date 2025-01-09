import {
    Hg as f,
    Id as e,
    Ig as g
} from "./_oschunk-UATY3RVV.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var D = s,
    E = class E extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(E, "VariablesRecord");
var S = E;
S.init();
var w = class w extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(w, "WidgetsRecord");
var B = w,
    K = class K extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(K, "Model");
var p = K;
p._hasValidationWidgetsValue = void 0;
var mt = new D.Model.ModelFactory(p);
var u = s,
    q = class q extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HeadingText", "headingTextIn", "HeadingText", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headingTextInDataFetchStatus", "_headingTextInDataFetchStatus", "_headingTextInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StatusConfig", "statusConfigIn", "StatusConfig", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_statusConfigInDataFetchStatus", "_statusConfigInDataFetchStatus", "_statusConfigInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(q, "VariablesRecord");
var y = q;
y.init();
var H = class H extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(H, "WidgetsRecord");
var G = H,
    m = class m extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0 || void 0), m._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HeadingText" in t && (this.variables.headingTextIn = t.HeadingText, "_headingTextInDataFetchStatus" in t && (this.variables._headingTextInDataFetchStatus = t._headingTextInDataFetchStatus)), "StatusConfig" in t && (this.variables.statusConfigIn = t.StatusConfig, "_statusConfigInDataFetchStatus" in t && (this.variables._statusConfigInDataFetchStatus = t._statusConfigInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(m, "Model");
var V = m;
V._hasValidationWidgetsValue = void 0;
var Tt = new u.Model.ModelFactory(V);
var c = s,
    j = class j extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StatusConfig", "statusConfigVar", "StatusConfig", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("IsPOARequired", "isPOARequiredVar", "IsPOARequired", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldResubmitPOI", "shouldResubmitPOIVar", "ShouldResubmitPOI", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("KYCConfigData", "kYCConfigDataIn", "KYCConfigData", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(j, "VariablesRecord");
var b = j;
b.init();
var z = class z extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var N = z,
    h = class h extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(t) {
            "KYCConfigData" in t && (this.variables.kYCConfigDataIn = t.KYCConfigData, "_kYCConfigDataInDataFetchStatus" in t && (this.variables._kYCConfigDataInDataFetchStatus = t._kYCConfigDataInDataFetchStatus))
        }
    };
a(h, "Model");
var A = h;
A._hasValidationWidgetsValue = void 0;
var pt = new c.Model.ModelFactory(A);
var i = s,
    X = class X extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsPOARequired", "isPOARequiredVar", "IsPOARequired", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldResubmitPOI", "shouldResubmitPOIVar", "ShouldResubmitPOI", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Status", "statusVar", "Status", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StatusConfig", "statusConfigVar", "StatusConfig", !0, !1, i.DataTypes.DataTypes.RecordList, function() {
                return i.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("KYCConfigData", "kYCConfigDataIn", "KYCConfigData", !0, !1, i.DataTypes.DataTypes.Record, function() {
                return i.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(X, "VariablesRecord");
var R = X;
R.init();
var Z = class Z extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Z, "WidgetsRecord");
var J = Z,
    C = class C extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return C._hasValidationWidgetsValue === void 0 && (C._hasValidationWidgetsValue = void 0 || void 0), C._hasValidationWidgetsValue
        }
        setInputs(t) {
            "KYCConfigData" in t && (this.variables.kYCConfigDataIn = t.KYCConfigData, "_kYCConfigDataInDataFetchStatus" in t && (this.variables._kYCConfigDataInDataFetchStatus = t._kYCConfigDataInDataFetchStatus))
        }
    };
a(C, "Model");
var O = C;
O._hasValidationWidgetsValue = void 0;
var bt = new i.Model.ModelFactory(O);
var n = s,
    at = class at extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsPOARequired", "isPOARequiredVar", "IsPOARequired", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldResubmitPOI", "shouldResubmitPOIVar", "ShouldResubmitPOI", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Status", "statusVar", "Status", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StatusConfig", "statusConfigVar", "StatusConfig", !0, !1, n.DataTypes.DataTypes.RecordList, function() {
                return n.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("KYCConfigData", "kYCConfigDataIn", "KYCConfigData", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(at, "VariablesRecord");
var v = at;
v.init();
var et = class et extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(et, "WidgetsRecord");
var $ = et,
    T = class T extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return v
        }
        static getWidgetsRecordConstructor() {
            return $
        }
        static get hasValidationWidgets() {
            return T._hasValidationWidgetsValue === void 0 && (T._hasValidationWidgetsValue = void 0 || void 0), T._hasValidationWidgetsValue
        }
        setInputs(t) {
            "KYCConfigData" in t && (this.variables.kYCConfigDataIn = t.KYCConfigData, "_kYCConfigDataInDataFetchStatus" in t && (this.variables._kYCConfigDataInDataFetchStatus = t._kYCConfigDataInDataFetchStatus))
        }
    };
a(T, "Model");
var P = T;
P._hasValidationWidgetsValue = void 0;
var Ot = new n.Model.ModelFactory(P);
var r = s,
    it = class it extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsPOARequired", "isPOARequiredVar", "IsPOARequired", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldResubmitPOI", "shouldResubmitPOIVar", "ShouldResubmitPOI", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Status", "statusVar", "Status", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StatusConfig", "statusConfigVar", "StatusConfig", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("KYCConfigData", "kYCConfigDataIn", "KYCConfigData", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", "_kYCConfigDataInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(it, "VariablesRecord");
var F = it;
F.init();
var nt = class nt extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(nt, "WidgetsRecord");
var st = nt,
    _ = class _ extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return st
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(t) {
            "KYCConfigData" in t && (this.variables.kYCConfigDataIn = t.KYCConfigData, "_kYCConfigDataInDataFetchStatus" in t && (this.variables._kYCConfigDataInDataFetchStatus = t._kYCConfigDataInDataFetchStatus))
        }
    };
a(_, "Model");
var Y = _;
Y._hasValidationWidgetsValue = void 0;
var Yt = new r.Model.ModelFactory(Y);
var l = s,
    ct = class ct extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("KYCAuthStatusData", "kYCAuthStatusDataVar", "KYCAuthStatusData", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new e)
            }, !1, e)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ct, "VariablesRecord");
var k = ct;
k.init();
var ut = class ut extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ut, "WidgetsRecord");
var rt = ut,
    I = class I extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return rt
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), I._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(I, "Model");
var x = I;
x._hasValidationWidgetsValue = void 0;
var wt = new l.Model.ModelFactory(x);
export {
    mt as a, Tt as b, pt as c, bt as d, Ot as e, Yt as f, wt as g
};