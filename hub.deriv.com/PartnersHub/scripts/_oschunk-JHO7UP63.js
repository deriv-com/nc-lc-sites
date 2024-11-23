import {
    Gc as D,
    Hf as m
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as p
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = p,
    r = class r extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return m
        }
        static fromStructure(n) {
            return new r(new r.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
e(r, "GetDigitalOptionsAggrRec");
var i = r;
i.init();
var s = class s extends t.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return D
    }
    static fromStructure(n) {
        return new s(new s.RecordClass({
            RecordListType: t.DataTypes.ImmutableBase.getData(n)
        }))
    }
};
e(s, "GetOptionsAggrRec");
var o = s;
o.init();
var d = class d extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("IsFetchingDigitalOptions", "isFetchingDigitalOptionsVar", "IsFetchingDigitalOptions", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("IsFetchingOptions", "isFetchingOptionsVar", "IsFetchingOptions", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("GetDigitalOptions", "getDigitalOptionsAggr", "GetDigitalOptions", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new i)
        }, !0, i), this.attr("GetOptions", "getOptionsAggr", "GetOptions", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(d, "VariablesRecord");
var u = d;
u.init();
var g = class g extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(g, "WidgetsRecord");
var l = g,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(n) {}
    };
e(a, "Model");
var c = a;
c._hasValidationWidgetsValue = void 0;
var b = new t.Model.ModelFactory(c);
export {
    b as a
};