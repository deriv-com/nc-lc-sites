import {
    a as y
} from "./_oschunk-2ZI4JQLD.js";
import {
    Kk as T,
    Vh as m,
    bh as E,
    gc as p,
    hc as I
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as s
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var o = s,
    C = class C extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(C, "VariablesRecord");
var d = C;
d.init();
var F = class F extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(F, "WidgetsRecord");
var b = F,
    M = class M extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(M, "Model");
var l = M;
l._hasValidationWidgetsValue = void 0;
var k = new o.Model.ModelFactory(l);
var e = s,
    O = class O extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return E.carouselNavigation.both
            }, !1), this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
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
a(O, "VariablesRecord");
var u = O;
u.init();
var V = class V extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(V, "WidgetsRecord");
var v = V,
    W = class W extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Navigation" in t && (this.variables.navigationIn = t.Navigation, "_navigationInDataFetchStatus" in t && (this.variables._navigationInDataFetchStatus = t._navigationInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "ItemsPerSlide" in t && (this.variables.itemsPerSlideIn = t.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in t && (this.variables._itemsPerSlideInDataFetchStatus = t._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(W, "Model");
var f = W;
f._hasValidationWidgetsValue = void 0;
var A = new e.Model.ModelFactory(f);
var i = s,
    B = class B extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TradingSpecification", "tradingSpecificationIn", "TradingSpecification", !0, !1, i.DataTypes.DataTypes.Record, function() {
                return i.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("_tradingSpecificationInDataFetchStatus", "_tradingSpecificationInDataFetchStatus", "_tradingSpecificationInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(B, "VariablesRecord");
var h = B;
h.init();
var U = class U extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(U, "WidgetsRecord");
var R = U,
    P = class P extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return R
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "TradingSpecification" in t && (this.variables.tradingSpecificationIn = t.TradingSpecification, "_tradingSpecificationInDataFetchStatus" in t && (this.variables._tradingSpecificationInDataFetchStatus = t._tradingSpecificationInDataFetchStatus))
        }
    };
a(P, "Model");
var g = P;
g._hasValidationWidgetsValue = void 0;
var K = new i.Model.ModelFactory(g);
var r = s,
    c = class c extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TradingSpecification", "tradingSpecificationVar", "TradingSpecification", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new I)
            }, !1, I)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new c(new c.RecordClass({
                tradingSpecificationVar: r.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(c, "VariablesRecord");
var S = c;
S.init();
var L = class L extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(L, "WidgetsRecord");
var G = L,
    n = class n extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
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
var D = n;
D._hasValidationWidgetsValue = void 0;
var tt = new r.Model.ModelFactory(D);
export {
    k as a, A as b, K as c, tt as d
};