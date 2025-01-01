import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var a = o,
    D = class D extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isError", "isErrorIn", "isError", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(D, "VariablesRecord");
var n = D;
n.init();
var h = class h extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(h, "WidgetsRecord");
var d = h,
    p = class p extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return d
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "isError" in e && (this.variables.isErrorIn = e.isError, "_isErrorInDataFetchStatus" in e && (this.variables._isErrorInDataFetchStatus = e._isErrorInDataFetchStatus))
        }
    };
t(p, "Model");
var l = p;
l._hasValidationWidgetsValue = void 0;
var T = new a.Model.ModelFactory(l);
var r = o,
    i = class i extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isError", "isErrorVar", "isError", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(e) {
            return new i(new i.RecordClass({
                isErrorVar: r.DataTypes.ImmutableBase.getData(e)
            }))
        }
    };
t(i, "VariablesRecord");
var c = i;
c.init();
var m = class m extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(m, "WidgetsRecord");
var g = m,
    s = class s extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0), s._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(s, "Model");
var u = s;
u._hasValidationWidgetsValue = void 0;
var b = new r.Model.ModelFactory(u);
export {
    T as a, b
};