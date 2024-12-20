import {
    b as g
} from "./_oschunk-OOUVJ7PM.js";
import {
    yd as S
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as r
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = r,
    p = class p extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("RatingValue", "ratingValueIn", "RatingValue", !0, !1, e.DataTypes.DataTypes.Decimal, function() {
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
a(p, "VariablesRecord");
var o = p;
o.init();
var b = class b extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(b, "WidgetsRecord");
var T = b,
    m = class m extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "RatingValue" in t && (this.variables.ratingValueIn = t.RatingValue, "_ratingValueInDataFetchStatus" in t && (this.variables._ratingValueInDataFetchStatus = t._ratingValueInDataFetchStatus)), "RatingScale" in t && (this.variables.ratingScaleIn = t.RatingScale, "_ratingScaleInDataFetchStatus" in t && (this.variables._ratingScaleInDataFetchStatus = t._ratingScaleInDataFetchStatus)), "IsEdit" in t && (this.variables.isEditIn = t.IsEdit, "_isEditInDataFetchStatus" in t && (this.variables._isEditInDataFetchStatus = t._isEditInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(m, "Model");
var d = m;
d._hasValidationWidgetsValue = void 0;
var v = new e.Model.ModelFactory(d);
var s = r,
    l = class l extends s.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new S)
            }, !0, S)].concat(s.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new l(new l.RecordClass({
                trustPilotOutputOut: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(l, "TrustPilotDataActRec");
var c = l;
c.init();
var u = class u extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new c)
        }, !0, c)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new u(new u.RecordClass({
            trustPilotDataAct: s.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(u, "VariablesRecord");
var D = u;
D.init();
var F = class F extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(F, "WidgetsRecord");
var V = F,
    n = class n extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(n, "Model");
var f = n;
f._hasValidationWidgetsValue = void 0;
var W = new s.Model.ModelFactory(f);
var i = r,
    C = class C extends i.DataTypes.GenericRecord {
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
a(C, "VariablesRecord");
var h = C;
h.init();
var x = class x extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CheckIcon2: i.Model.ValidationWidgetRecord
        }
    }
};
a(x, "WidgetsRecord");
var _ = x,
    M = class M extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
a(M, "Model");
var I = M;
I._hasValidationWidgetsValue = void 0;
var k = new i.Model.ModelFactory(I);
export {
    v as a, W as b, k as c
};