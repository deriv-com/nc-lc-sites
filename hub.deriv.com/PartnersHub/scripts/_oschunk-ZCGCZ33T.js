import {
    Fa as b,
    Kb as m
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = s,
    n = class n extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return m
        }
        static fromStructure(r) {
            return new n(new n.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
t(n, "GetEmploymentStatusesAggrRec");
var c = n;
c.init();
var V = class V extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NoTaxIdentificationNumber", "noTaxIdentificationNumberVar", "NoTaxIdentificationNumber", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new b)
        }, !1, b), this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new c)
        }, !0, c)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(V, "VariablesRecord");
var p = V;
p.init();
var W = class W extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: e.Model.ValidationWidgetRecord,
            Dropdown1: e.Model.ValidationWidgetRecord,
            Checkbox1: e.Model.ValidationWidgetRecord,
            TaxResidence: e.Model.ValidationWidgetRecord,
            TaxIdentificationNumber: e.Model.ValidationWidgetRecord,
            Checkbox2: e.Model.ValidationWidgetRecord
        }
    }
};
t(W, "WidgetsRecord");
var M = W,
    h = class h extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(r) {}
    };
t(h, "Model");
var f = h;
f._hasValidationWidgetsValue = void 0;
var E = new e.Model.ModelFactory(f);
var a = s,
    l = class l extends a.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return m
        }
        static fromStructure(r) {
            return new l(new l.RecordClass({
                RecordListType: a.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
t(l, "GetEmploymentStatusesAggrRec");
var d = l;
d.init();
var P = class P extends a.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("isTaxInfoModalOpen", "isTaxInfoModalOpenVar", "isTaxInfoModalOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new d)
        }, !0, d)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(P, "VariablesRecord");
var g = P;
g.init();
var S = class S extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(S, "WidgetsRecord");
var x = S,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
t(o, "Model");
var T = o;
T._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(T);
var u = s,
    L = class L extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(L, "VariablesRecord");
var y = L;
y.init();
var B = class B extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(B, "WidgetsRecord");
var I = B,
    i = class i extends u.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
t(i, "Model");
var D = i;
D._hasValidationWidgetsValue = void 0;
var J = new u.Model.ModelFactory(D);
export {
    E as a, F as b, J as c
};