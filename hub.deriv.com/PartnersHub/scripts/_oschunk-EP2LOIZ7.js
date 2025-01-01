import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = n,
    r = class r extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(m) {
            return new r(new r.RecordClass({
                isLoadingVar: e.DataTypes.ImmutableBase.getData(m)
            }))
        }
    };
t(r, "VariablesRecord");
var d = r;
d.init();
var V = class V extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(V, "WidgetsRecord");
var p = V,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
t(a, "Model");
var l = a;
l._hasValidationWidgetsValue = void 0;
var y = new e.Model.ModelFactory(l);
var i = n,
    h = class h extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(h, "VariablesRecord");
var u = h;
u.init();
var M = class M extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var f = M,
    s = class s extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
t(s, "Model");
var c = s;
c._hasValidationWidgetsValue = void 0;
var L = new i.Model.ModelFactory(c);
export {
    y as a, L as b
};