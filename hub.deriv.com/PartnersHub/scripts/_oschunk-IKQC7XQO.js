import {
    Ea as p,
    gd as P,
    tc as f
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = i,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return P
        }
        static fromStructure(u) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
t(r, "GetAccountPurposesAggrRec");
var s = r;
s.init();
var R = class R extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new p)
        }, !1, p), this.attr("GetAccountPurposes", "getAccountPurposesAggr", "GetAccountPurposes", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !0, s)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(R, "VariablesRecord");
var n = R;
n.init();
var T = class T extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PlaceOfBirthFormDesktop: e.Model.ValidationWidgetRecord,
            PlaceOfBirthDropdownDesktop: e.Model.ValidationWidgetRecord,
            PhoneNumberDesktop: e.Model.ValidationWidgetRecord,
            AccountPurposeDropdown: e.Model.ValidationWidgetRecord,
            Form1: e.Model.ValidationWidgetRecord,
            PlaceofBirth: e.Model.ValidationWidgetRecord,
            PhoneNumber: e.Model.ValidationWidgetRecord
        }
    }
};
t(T, "WidgetsRecord");
var g = T,
    b = class b extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
t(b, "Model");
var c = b;
c._hasValidationWidgetsValue = void 0;
var O = new e.Model.ModelFactory(c);
var o = i,
    M = class M extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(M, "VariablesRecord");
var d = M;
d.init();
var y = class y extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(y, "WidgetsRecord");
var D = y,
    a = class a extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
t(a, "Model");
var l = a;
l._hasValidationWidgetsValue = void 0;
var w = new o.Model.ModelFactory(l);
export {
    O as a, w as b
};