import {
    f as L,
    g as w,
    k as G
} from "./_oschunk-FZ6FUHBV.js";
import {
    Of as dt,
    Wb as lt,
    jd as B,
    mf as H,
    of as R
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as n
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = n,
    A = class A extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new L)
            }, !1, L), this.attr("TabsOrientation", "tabsOrientationIn", "TabsOrientation", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return B.orientation.horizontal
            }, !1), this.attr("_tabsOrientationInDataFetchStatus", "_tabsOrientationInDataFetchStatus", "_tabsOrientationInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartingTab", "startingTabIn", "StartingTab", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TabsVerticalPosition", "tabsVerticalPositionIn", "TabsVerticalPosition", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return B.direction.left
            }, !1), this.attr("_tabsVerticalPositionInDataFetchStatus", "_tabsVerticalPositionInDataFetchStatus", "_tabsVerticalPositionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(A, "VariablesRecord");
var y = A;
y.init();
var N = class N extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(N, "WidgetsRecord");
var E = N,
    k = class k extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "TabsOrientation" in t && (this.variables.tabsOrientationIn = t.TabsOrientation, "_tabsOrientationInDataFetchStatus" in t && (this.variables._tabsOrientationInDataFetchStatus = t._tabsOrientationInDataFetchStatus)), "StartingTab" in t && (this.variables.startingTabIn = t.StartingTab, "_startingTabInDataFetchStatus" in t && (this.variables._startingTabInDataFetchStatus = t._startingTabInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "TabsVerticalPosition" in t && (this.variables.tabsVerticalPositionIn = t.TabsVerticalPosition, "_tabsVerticalPositionInDataFetchStatus" in t && (this.variables._tabsVerticalPositionInDataFetchStatus = t._tabsVerticalPositionInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(k, "Model");
var p = k;
p._hasValidationWidgetsValue = void 0;
var It = new e.Model.ModelFactory(p);
var o = n,
    j = class j extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new G)
            }, !1, G), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(j, "VariablesRecord");
var C = j;
C.init();
var q = class q extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(q, "WidgetsRecord");
var z = q,
    J = class J extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(J, "Model");
var v = J;
v._hasValidationWidgetsValue = void 0;
var bt = new o.Model.ModelFactory(v);
var l = n,
    Q = class Q extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new w)
            }, !1, w), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Q, "VariablesRecord");
var M = Q;
M.init();
var X = class X extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(X, "WidgetsRecord");
var K = X,
    Y = class Y extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return M
        }
        static getWidgetsRecordConstructor() {
            return K
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(Y, "Model");
var F = Y;
F._hasValidationWidgetsValue = void 0;
var St = new l.Model.ModelFactory(F);
var s = n,
    h = class h extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return dt
        }
        static fromStructure(t) {
            return new h(new h.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(h, "GetCFDsAllPlansByTabIDAggrRec");
var T = h;
T.init();
var $ = class $ extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("PlanId", "planIdIn", "PlanId", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetCFDsAllPlansByTabID", "getCFDsAllPlansByTabIDAggr", "GetCFDsAllPlansByTabID", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new T)
        }, !0, T)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a($, "VariablesRecord");
var V = $;
V.init();
var tt = class tt extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(tt, "WidgetsRecord");
var Z = tt,
    f = class f extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return Z
        }
        static get hasValidationWidgets() {
            return f._hasValidationWidgetsValue === void 0 && (f._hasValidationWidgetsValue = void 0), f._hasValidationWidgetsValue
        }
        setInputs(t) {
            "PlanId" in t && (this.variables.planIdIn = t.PlanId, "_planIdInDataFetchStatus" in t && (this.variables._planIdInDataFetchStatus = t._planIdInDataFetchStatus))
        }
    };
a(f, "Model");
var x = f;
x._hasValidationWidgetsValue = void 0;
var pt = new s.Model.ModelFactory(x);
var r = n,
    st = class st extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TabData", "tabDataIn", "TabData", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new H)
            }, !1, H), this.attr("_tabDataInDataFetchStatus", "_tabDataInDataFetchStatus", "_tabDataInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ActiveTab", "activeTabIn", "ActiveTab", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(st, "VariablesRecord");
var O = st;
O.init();
var nt = class nt extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(nt, "WidgetsRecord");
var at = nt,
    D = class D extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return at
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), D._hasValidationWidgetsValue
        }
        setInputs(t) {
            "TabData" in t && (this.variables.tabDataIn = t.TabData, "_tabDataInDataFetchStatus" in t && (this.variables._tabDataInDataFetchStatus = t._tabDataInDataFetchStatus)), "ActiveTab" in t && (this.variables.activeTabIn = t.ActiveTab, "_activeTabInDataFetchStatus" in t && (this.variables._activeTabInDataFetchStatus = t._activeTabInDataFetchStatus))
        }
    };
a(D, "Model");
var P = D;
P._hasValidationWidgetsValue = void 0;
var Ft = new r.Model.ModelFactory(P);
var i = n,
    _ = class _ extends i.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(i.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return lt
        }
        static fromStructure(t) {
            return new _(new _.RecordClass({
                RecordListType: i.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(_, "GetCFDsTabInfoAggrRec");
var S = _;
S.init();
var rt = class rt extends i.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActiveTab1", "activeTab1Var", "ActiveTab1", !0, !1, i.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("GetCFDsTabInfo", "getCFDsTabInfoAggr", "GetCFDsTabInfo", !0, !0, i.DataTypes.DataTypes.Record, function() {
            return i.DataTypes.ImmutableBase.getData(new S)
        }, !0, S)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(rt, "VariablesRecord");
var W = rt;
W.init();
var ot = class ot extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ot, "WidgetsRecord");
var it = ot,
    I = class I extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return it
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), I._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(I, "Model");
var U = I;
U._hasValidationWidgetsValue = void 0;
var Wt = new i.Model.ModelFactory(U);
export {
    It as a, bt as b, St as c, pt as d, Ft as e, Wt as f
};