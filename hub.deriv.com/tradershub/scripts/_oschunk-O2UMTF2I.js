import {
    b as S
} from "./_oschunk-2ZI4JQLD.js";
import {
    Bg as f
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var a = l,
    g = class g extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("RatingValue", "ratingValueIn", "RatingValue", !0, !1, a.DataTypes.DataTypes.Decimal, function() {
                return a.DataTypes.Decimal.defaultValue
            }, !1), this.attr("_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RatingScale", "ratingScaleIn", "RatingScale", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 5
            }, !1), this.attr("_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsEdit", "isEditIn", "IsEdit", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isEditInDataFetchStatus", "_isEditInDataFetchStatus", "_isEditInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(g, "VariablesRecord");
var c = g;
c.init();
var T = class T extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(T, "WidgetsRecord");
var h = T,
    y = class y extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return h
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "RatingValue" in t && (this.variables.ratingValueIn = t.RatingValue, "_ratingValueInDataFetchStatus" in t && (this.variables._ratingValueInDataFetchStatus = t._ratingValueInDataFetchStatus)), "RatingScale" in t && (this.variables.ratingScaleIn = t.RatingScale, "_ratingScaleInDataFetchStatus" in t && (this.variables._ratingScaleInDataFetchStatus = t._ratingScaleInDataFetchStatus)), "IsEdit" in t && (this.variables.isEditIn = t.IsEdit, "_isEditInDataFetchStatus" in t && (this.variables._isEditInDataFetchStatus = t._isEditInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(y, "Model");
var d = y;
d._hasValidationWidgetsValue = void 0;
var _ = new a.Model.ModelFactory(d);
var e = l,
    i = class i extends e.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new f)
            }, !0, f)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new i(new i.RecordClass({
                trustPilotOutputOut: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
s(i, "TrustPilotDataActRec");
var u = i;
u.init();
var n = class n extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new u)
        }, !0, u)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new n(new n.RecordClass({
            trustPilotDataAct: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
s(n, "VariablesRecord");
var o = n;
o.init();
var p = class p extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(p, "WidgetsRecord");
var m = p,
    r = class r extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
s(r, "Model");
var D = r;
D._hasValidationWidgetsValue = void 0;
var x = new e.Model.ModelFactory(D);
export {
    _ as a, x as b
};