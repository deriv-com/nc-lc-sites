import {
    Cd as u
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as o
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = o,
    s = class s extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new u)
            }, !1, u)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(l) {
            return new s(new s.RecordClass({
                statesListResponseVar: e.DataTypes.ImmutableBase.getData(l)
            }))
        }
    };
t(s, "VariablesRecord");
var i = s;
i.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: e.Model.ValidationWidgetRecord,
            Address: e.Model.ValidationWidgetRecord,
            TownCity: e.Model.ValidationWidgetRecord,
            StateProvinceDropdown: e.Model.ValidationWidgetRecord,
            StateProvinceInput: e.Model.ValidationWidgetRecord,
            PostalZipCode: e.Model.ValidationWidgetRecord
        }
    }
};
t(f, "WidgetsRecord");
var p = f,
    b = class b extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
t(b, "Model");
var n = b;
n._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(n);
var r = o,
    R = class R extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(R, "VariablesRecord");
var d = R;
d.init();
var M = class M extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var g = M,
    a = class a extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(l) {}
    };
t(a, "Model");
var c = a;
c._hasValidationWidgetsValue = void 0;
var w = new r.Model.ModelFactory(c);
export {
    C as a, w as b
};