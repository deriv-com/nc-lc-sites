import {
    gd as M
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    s = class s extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return M
        }
        static fromStructure(r) {
            return new s(new s.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
e(s, "GetAccountPurposesAggrRec");
var n = s;
n.init();
var o = class o extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountPurposes", "getAccountPurposesAggr", "GetAccountPurposes", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(r) {
        return new o(new o.RecordClass({
            getAccountPurposesAggr: t.DataTypes.ImmutableBase.getData(r)
        }))
    }
};
e(o, "VariablesRecord");
var u = o;
u.init();
var f = class f extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(f, "WidgetsRecord");
var g = f,
    b = class b extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {}
    };
e(b, "Model");
var l = b;
l._hasValidationWidgetsValue = void 0;
var h = new t.Model.ModelFactory(l);
var i = c,
    T = class T extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(T, "VariablesRecord");
var d = T;
d.init();
var D = class D extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(D, "WidgetsRecord");
var y = D,
    a = class a extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
e(a, "Model");
var p = a;
p._hasValidationWidgetsValue = void 0;
var B = new i.Model.ModelFactory(p);
export {
    h as a, B as b
};