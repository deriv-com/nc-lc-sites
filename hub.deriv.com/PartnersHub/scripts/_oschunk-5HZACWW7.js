import {
    Be as f,
    Ke as u,
    Qf as m
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as T
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = T,
    n = class n extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return m
        }
        static fromStructure(a) {
            return new n(new n.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(a)
            }))
        }
    };
e(n, "GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec");
var i = n;
i.init();
var r = class r extends t.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return f
    }
    static fromStructure(a) {
        return new r(new r.RecordClass({
            RecordListType: t.DataTypes.ImmutableBase.getData(a)
        }))
    }
};
e(r, "GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec");
var l = r;
l.init();
var D = class D extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Data", "dataVar", "Data", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
            return t.DataTypes.ImmutableBase.getData(new u)
        }, !1, u), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("CommissionType", "commissionTypeIn", "CommissionType", !0, !1, t.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("IsSubPlan", "isSubPlanIn", "IsSubPlan", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("PlanId", "planIdIn", "PlanId", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetCFDsPlansTableDataByCFDsAllSubPlanId", "getCFDsPlansTableDataByCFDsAllSubPlanIdAggr", "GetCFDsPlansTableDataByCFDsAllSubPlanId", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new i)
        }, !0, i), this.attr("GetCFDsPlansTableDataByCFDsAllPlanId", "getCFDsPlansTableDataByCFDsAllPlanIdAggr", "GetCFDsPlansTableDataByCFDsAllPlanId", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new l)
        }, !0, l)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(D, "VariablesRecord");
var o = D;
o.init();
var I = class I extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(I, "WidgetsRecord");
var d = I,
    s = class s extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return d
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0), s._hasValidationWidgetsValue
        }
        setInputs(a) {
            "CommissionType" in a && (this.variables.commissionTypeIn = a.CommissionType, "_commissionTypeInDataFetchStatus" in a && (this.variables._commissionTypeInDataFetchStatus = a._commissionTypeInDataFetchStatus)), "IsSubPlan" in a && (this.variables.isSubPlanIn = a.IsSubPlan, "_isSubPlanInDataFetchStatus" in a && (this.variables._isSubPlanInDataFetchStatus = a._isSubPlanInDataFetchStatus)), "PlanId" in a && (this.variables.planIdIn = a.PlanId, "_planIdInDataFetchStatus" in a && (this.variables._planIdInDataFetchStatus = a._planIdInDataFetchStatus))
        }
    };
e(s, "Model");
var c = s;
c._hasValidationWidgetsValue = void 0;
var b = new t.Model.ModelFactory(c);
export {
    b as a
};