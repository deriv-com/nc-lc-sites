import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = s,
    c = class c extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Timer", "timerVar", "Timer", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 60
            }, !1), this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(c, "VariablesRecord");
var i = c;
i.init();
var m = class m extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(m, "WidgetsRecord");
var l = m,
    p = class p extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(M) {}
    };
t(p, "Model");
var o = p;
o._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(o);
var r = s,
    f = class f extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(f, "VariablesRecord");
var n = f;
n.init();
var y = class y extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(y, "WidgetsRecord");
var g = y,
    a = class a extends r.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(M) {}
    };
t(a, "Model");
var u = a;
u._hasValidationWidgetsValue = void 0;
var H = new r.Model.ModelFactory(u);
export {
    D as a, H as b
};