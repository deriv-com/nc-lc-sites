import {
    e as p
} from "./_oschunk-WJ75ZXAT.js";
import {
    ed as y
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as r
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = r,
    V = class V extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("RatingValue", "ratingValueIn", "RatingValue", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
                return e.DataTypes.Decimal.defaultValue
            }, !1), this.attr("_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RatingScale", "ratingScaleIn", "RatingScale", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 5
            }, !1), this.attr("_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsEdit", "isEditIn", "IsEdit", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isEditInDataFetchStatus", "_isEditInDataFetchStatus", "_isEditInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(V, "VariablesRecord");
var d = V;
d.init();
var F = class F extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(F, "WidgetsRecord");
var m = F,
    _ = class _ extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "RatingValue" in t && (this.variables.ratingValueIn = t.RatingValue, "_ratingValueInDataFetchStatus" in t && (this.variables._ratingValueInDataFetchStatus = t._ratingValueInDataFetchStatus)), "RatingScale" in t && (this.variables.ratingScaleIn = t.RatingScale, "_ratingScaleInDataFetchStatus" in t && (this.variables._ratingScaleInDataFetchStatus = t._ratingScaleInDataFetchStatus)), "IsEdit" in t && (this.variables.isEditIn = t.IsEdit, "_isEditInDataFetchStatus" in t && (this.variables._isEditInDataFetchStatus = t._isEditInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(_, "Model");
var D = _;
D._hasValidationWidgetsValue = void 0;
var U = new e.Model.ModelFactory(D);
var s = r,
    u = class u extends s.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new y)
            }, !0, y)].concat(s.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new u(new u.RecordClass({
                trustPilotOutputOut: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(u, "TrustPilotDataActRec");
var o = u;
o.init();
var c = class c extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new o)
        }, !0, o)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new c(new c.RecordClass({
            trustPilotDataAct: s.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(c, "VariablesRecord");
var f = c;
f.init();
var x = class x extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(x, "WidgetsRecord");
var C = x,
    n = class n extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(n, "Model");
var h = n;
h._hasValidationWidgetsValue = void 0;
var k = new s.Model.ModelFactory(h);
var l = r,
    R = class R extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var I = R;
I.init();
var O = class O extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RealDemoSwitcher: l.Model.ValidationWidgetRecord
        }
    }
};
a(O, "WidgetsRecord");
var M = O,
    v = class v extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
a(v, "Model");
var S = v;
S._hasValidationWidgetsValue = void 0;
var H = new l.Model.ModelFactory(S);
var i = r,
    w = class w extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsNotResident", "isNotResidentVar", "IsNotResident", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(w, "VariablesRecord");
var g = w;
g.init();
var E = class E extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CheckIcon2: i.Model.ValidationWidgetRecord
        }
    }
};
a(E, "WidgetsRecord");
var W = E,
    B = class B extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
a(B, "Model");
var T = B;
T._hasValidationWidgetsValue = void 0;
var Z = new i.Model.ModelFactory(T);
export {
    U as a, k as b, H as c, Z as d
};