import {
    Ve as f
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var G = {
        staticEntities: {}
    },
    W = G.staticEntities;
var t = i,
    p = class p extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DayClassGuid", "dayClassGuidVar", "DayClassGuid", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("HoursClassGuid", "hoursClassGuidVar", "HoursClassGuid", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("MinutesClassGuid", "minutesClassGuidVar", "MinutesClassGuid", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SecondsClassGuid", "secondsClassGuidVar", "SecondsClassGuid", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExpiredClassGuid", "expiredClassGuidVar", "ExpiredClassGuid", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExpirationDateTime", "expirationDateTimeIn", "ExpirationDateTime", !0, !1, t.DataTypes.DataTypes.DateTime, function() {
                return t.DataTypes.DateTime.defaultValue
            }, !1), this.attr("_expirationDateTimeInDataFetchStatus", "_expirationDateTimeInDataFetchStatus", "_expirationDateTimeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DaysCustomClass", "daysCustomClassIn", "DaysCustomClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return t.BuiltinFunctions.nullTextIdentifier()
            }, !1), this.attr("_daysCustomClassInDataFetchStatus", "_daysCustomClassInDataFetchStatus", "_daysCustomClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HoursCustomClass", "hoursCustomClassIn", "HoursCustomClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return t.BuiltinFunctions.nullTextIdentifier()
            }, !1), this.attr("_hoursCustomClassInDataFetchStatus", "_hoursCustomClassInDataFetchStatus", "_hoursCustomClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MinutesCustomClass", "minutesCustomClassIn", "MinutesCustomClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return t.BuiltinFunctions.nullTextIdentifier()
            }, !1), this.attr("_minutesCustomClassInDataFetchStatus", "_minutesCustomClassInDataFetchStatus", "_minutesCustomClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SecondsCustomClass", "secondsCustomClassIn", "SecondsCustomClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return t.BuiltinFunctions.nullTextIdentifier()
            }, !1), this.attr("_secondsCustomClassInDataFetchStatus", "_secondsCustomClassInDataFetchStatus", "_secondsCustomClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExpiredCustomClass", "expiredCustomClassIn", "ExpiredCustomClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return t.BuiltinFunctions.nullTextIdentifier()
            }, !1), this.attr("_expiredCustomClassInDataFetchStatus", "_expiredCustomClassInDataFetchStatus", "_expiredCustomClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(p, "VariablesRecord");
var u = p;
u.init();
var T = class T extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(T, "WidgetsRecord");
var D = T,
    S = class S extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "ExpirationDateTime" in a && (this.variables.expirationDateTimeIn = a.ExpirationDateTime, "_expirationDateTimeInDataFetchStatus" in a && (this.variables._expirationDateTimeInDataFetchStatus = a._expirationDateTimeInDataFetchStatus)), "DaysCustomClass" in a && (this.variables.daysCustomClassIn = a.DaysCustomClass, "_daysCustomClassInDataFetchStatus" in a && (this.variables._daysCustomClassInDataFetchStatus = a._daysCustomClassInDataFetchStatus)), "HoursCustomClass" in a && (this.variables.hoursCustomClassIn = a.HoursCustomClass, "_hoursCustomClassInDataFetchStatus" in a && (this.variables._hoursCustomClassInDataFetchStatus = a._hoursCustomClassInDataFetchStatus)), "MinutesCustomClass" in a && (this.variables.minutesCustomClassIn = a.MinutesCustomClass, "_minutesCustomClassInDataFetchStatus" in a && (this.variables._minutesCustomClassInDataFetchStatus = a._minutesCustomClassInDataFetchStatus)), "SecondsCustomClass" in a && (this.variables.secondsCustomClassIn = a.SecondsCustomClass, "_secondsCustomClassInDataFetchStatus" in a && (this.variables._secondsCustomClassInDataFetchStatus = a._secondsCustomClassInDataFetchStatus)), "ExpiredCustomClass" in a && (this.variables.expiredCustomClassIn = a.ExpiredCustomClass, "_expiredCustomClassInDataFetchStatus" in a && (this.variables._expiredCustomClassInDataFetchStatus = a._expiredCustomClassInDataFetchStatus))
        }
    };
s(S, "Model");
var l = S;
l._hasValidationWidgetsValue = void 0;
var k = new t.Model.ModelFactory(l);
var e = i,
    _ = class _ extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("EmailChangeModal", "emailChangeModalVar", "EmailChangeModal", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("CurrentStep", "currentStepVar", "CurrentStep", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(_, "VariablesRecord");
var d = _;
d.init();
var x = class x extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(x, "WidgetsRecord");
var y = x,
    r = class r extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(a) {}
    };
s(r, "Model");
var C = r;
C._hasValidationWidgetsValue = void 0;
var L = new e.Model.ModelFactory(C);
var o = i,
    F = class F extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(F, "VariablesRecord");
var m = F;
m.init();
var M = class M extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(M, "WidgetsRecord");
var g = M,
    n = class n extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(a) {}
    };
s(n, "Model");
var c = n;
c._hasValidationWidgetsValue = void 0;
var Z = new o.Model.ModelFactory(c);
export {
    k as a, L as b, Z as c
};