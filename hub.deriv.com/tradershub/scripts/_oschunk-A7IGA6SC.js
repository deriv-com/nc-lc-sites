import {
    $e as s,
    Ge as V,
    yb as p
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = n,
    o = class o extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return V
        }
        static fromStructure(m) {
            return new o(new o.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(m)
            }))
        }
    };
t(o, "GetCurrenciesAggrRec");
var i = o;
i.init();
var b = class b extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LandingCompany", "landingCompanyVar", "LandingCompany", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new p)
        }, !1, p), this.attr("FilteredRecommendedCurrencies", "filteredRecommendedCurrenciesVar", "FilteredRecommendedCurrencies", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !1, s), this.attr("FilteredOtherCurrencies", "filteredOtherCurrenciesVar", "FilteredOtherCurrencies", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !1, s), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !0, i)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(b, "VariablesRecord");
var c = b;
c.init();
var y = class y extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(y, "WidgetsRecord");
var g = y,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
t(a, "Model");
var u = a;
u._hasValidationWidgetsValue = void 0;
var B = new e.Model.ModelFactory(u);
var d = n,
    D = class D extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(D, "VariablesRecord");
var l = D;
l.init();
var C = class C extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(C, "WidgetsRecord");
var T = C,
    r = class r extends d.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
t(r, "Model");
var f = r;
f._hasValidationWidgetsValue = void 0;
var x = new d.Model.ModelFactory(f);
export {
    B as a, x as b
};