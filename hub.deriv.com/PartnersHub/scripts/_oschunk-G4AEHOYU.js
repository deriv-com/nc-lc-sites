import {
    b as p
} from "./_oschunk-BDI2RWOA.js";
import {
    Pf as W,
    Rd as I,
    Vf as T,
    kd as P
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var i = n,
    l = class l extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("OS", "oSVar", "OS", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new l(new l.RecordClass({
                oSVar: i.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(l, "VariablesRecord");
var f = l;
f.init();
var b = class b extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(b, "WidgetsRecord");
var y = b,
    r = class r extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(r, "Model");
var h = r;
h._hasValidationWidgetsValue = void 0;
var B = new i.Model.ModelFactory(h);
var e = n,
    v = class v extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return P.carouselNavigation.both
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
                return e.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(v, "VariablesRecord");
var g = v;
g.init();
var M = class M extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(M, "WidgetsRecord");
var _ = M,
    F = class F extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Navigation" in t && (this.variables.navigationIn = t.Navigation, "_navigationInDataFetchStatus" in t && (this.variables._navigationInDataFetchStatus = t._navigationInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "ItemsPerSlide" in t && (this.variables.itemsPerSlideIn = t.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in t && (this.variables._itemsPerSlideInDataFetchStatus = t._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(F, "Model");
var m = F;
m._hasValidationWidgetsValue = void 0;
var N = new e.Model.ModelFactory(m);
var s = n,
    d = class d extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return W
        }
        static fromStructure(t) {
            return new d(new d.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(d, "GetAffiliateLinksAggrRec");
var c = d;
c.init();
var V = class V extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("GetAffiliateLinks", "getAffiliateLinksAggr", "GetAffiliateLinks", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new c)
        }, !0, c)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(V, "VariablesRecord");
var D = V;
D.init();
var O = class O extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(O, "WidgetsRecord");
var x = O,
    o = class o extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(o, "Model");
var S = o;
S._hasValidationWidgetsValue = void 0;
var J = new s.Model.ModelFactory(S);
export {
    N as a, B as b, J as c
};