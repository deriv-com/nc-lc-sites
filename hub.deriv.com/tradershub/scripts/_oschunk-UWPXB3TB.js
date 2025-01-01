import {
    ia as o
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var a = o,
    h = class h extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isError", "isErrorIn", "isError", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(h, "VariablesRecord");
var n = h;
n.init();
var D = class D extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(D, "WidgetsRecord");
var d = D,
    g = class g extends a.Model.BaseViewModel {
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
t(g, "Model");
var c = g;
c._hasValidationWidgetsValue = void 0;
var C = new a.Model.ModelFactory(c);
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
var l = i;
l.init();
var m = class m extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(m, "WidgetsRecord");
var p = m,
    s = class s extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0), s._hasValidationWidgetsValue
        }
        setInputs(e) {}
    };
t(s, "Model");
var u = s;
u._hasValidationWidgetsValue = void 0;
var M = new r.Model.ModelFactory(u);
export {
    C as a, M as b
};