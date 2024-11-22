import {
    ia as r
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = r,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(u, "VariablesRecord");
var i = u;
i.init();
var g = class g extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DobForm: e.Model.ValidationWidgetRecord,
            Input_date: e.Model.ValidationWidgetRecord
        }
    }
};
t(g, "WidgetsRecord");
var l = g,
    m = class m extends e.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(b) {}
    };
t(m, "Model");
var o = m;
o._hasValidationWidgetsValue = void 0;
var W = new e.Model.ModelFactory(o);
var s = r,
    M = class M extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(M, "VariablesRecord");
var n = M;
n.init();
var V = class V extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(V, "WidgetsRecord");
var p = V,
    a = class a extends s.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(b) {}
    };
t(a, "Model");
var d = a;
d._hasValidationWidgetsValue = void 0;
var C = new s.Model.ModelFactory(d);
export {
    W as a, C as b
};