import {
    c as b
} from "./_oschunk-JSVFHRDW.js";
import {
    Bd as k,
    Ka as I,
    La as T,
    Sb as H,
    cg as y,
    he as m
} from "./_oschunk-44PT7RP7.js";
import {
    ia as i
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var o = i,
    F = class F extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(F, "VariablesRecord");
var l = F;
l.init();
var M = class M extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(M, "WidgetsRecord");
var _ = M,
    v = class v extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(v, "Model");
var u = v;
u._hasValidationWidgetsValue = void 0;
var q = new o.Model.ModelFactory(u);
var e = i,
    V = class V extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return k.carouselNavigation.both
            }, !1), this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(V, "VariablesRecord");
var f = V;
f.init();
var R = class R extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(R, "WidgetsRecord");
var x = R,
    W = class W extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Navigation" in t && (this.variables.navigationIn = t.Navigation, "_navigationInDataFetchStatus" in t && (this.variables._navigationInDataFetchStatus = t._navigationInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "ItemsPerSlide" in t && (this.variables.itemsPerSlideIn = t.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in t && (this.variables._itemsPerSlideInDataFetchStatus = t._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(W, "Model");
var h = W;
h._hasValidationWidgetsValue = void 0;
var Q = new e.Model.ModelFactory(h);
var r = i,
    U = class U extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TradingSpecification", "tradingSpecificationIn", "TradingSpecification", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("_tradingSpecificationInDataFetchStatus", "_tradingSpecificationInDataFetchStatus", "_tradingSpecificationInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(U, "VariablesRecord");
var g = U;
g.init();
var P = class P extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(P, "WidgetsRecord");
var w = P,
    L = class L extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "TradingSpecification" in t && (this.variables.tradingSpecificationIn = t.TradingSpecification, "_tradingSpecificationInDataFetchStatus" in t && (this.variables._tradingSpecificationInDataFetchStatus = t._tradingSpecificationInDataFetchStatus))
        }
    };
a(L, "Model");
var S = L;
S._hasValidationWidgetsValue = void 0;
var Y = new r.Model.ModelFactory(S);
var s = i,
    c = class c extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return H
        }
        static fromStructure(t) {
            return new c(new c.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(c, "GetCFDAccountsAggrRec");
var d = c;
d.init();
var E = class E extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingSpecification", "tradingSpecificationVar", "TradingSpecification", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
            return s.DataTypes.ImmutableBase.getData(new T)
        }, !1, T), this.attr("GetCFDAccounts", "getCFDAccountsAggr", "GetCFDAccounts", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new d)
        }, !0, d)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(E, "VariablesRecord");
var D = E;
D.init();
var N = class N extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(N, "WidgetsRecord");
var G = N,
    n = class n extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(n, "Model");
var p = n;
p._hasValidationWidgetsValue = void 0;
var at = new s.Model.ModelFactory(p);
export {
    q as a, Q as b, Y as c, at as d
};