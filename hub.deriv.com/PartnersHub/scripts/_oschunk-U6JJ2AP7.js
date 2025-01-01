import {
    ea as g,
    tb as T
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var i = s,
    V = class V extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(V, "VariablesRecord");
var l = V;
l.init();
var b = class b extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(b, "WidgetsRecord");
var y = b,
    r = class r extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
t(r, "Model");
var d = r;
d._hasValidationWidgetsValue = void 0;
var E = new i.Model.ModelFactory(d);
var a = s,
    n = class n extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new T)
            }, !1, T)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(u) {
            return new n(new n.RecordClass({
                residenceListResponseVar: a.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
t(n, "VariablesRecord");
var c = n;
c.init();
var M = class M extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var D = M,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
t(o, "Model");
var m = o;
m._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(m);
var e = s,
    C = class C extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("userInput", "userInputVar", "userInput", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("requiredInputError", "requiredInputErrorVar", "requiredInputError", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isSubmitting", "isSubmittingVar", "isSubmitting", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(C, "VariablesRecord");
var p = C;
p.init();
var I = class I extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CFDPasswordInput: e.Model.ValidationWidgetRecord
        }
    }
};
t(I, "WidgetsRecord");
var S = I,
    h = class h extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
t(h, "Model");
var f = h;
f._hasValidationWidgetsValue = void 0;
var X = new e.Model.ModelFactory(f);
export {
    E as a, F as b, X as c
};