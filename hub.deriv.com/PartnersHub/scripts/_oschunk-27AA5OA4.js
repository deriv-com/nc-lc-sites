import {
    Pd as D
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    r = class r extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return D
        }
        static fromStructure(e) {
            return new r(new r.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(e)
            }))
        }
    };
s(r, "GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec");
var n = r;
n.init();
var d = class d extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("Title", "titleIn", "Title", !0, !1, t.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("PlanId", "planIdIn", "PlanId", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetCFDsAllSubPlansByCFDsAllPlanId", "getCFDsAllSubPlansByCFDsAllPlanIdAggr", "GetCFDsAllSubPlansByCFDsAllPlanId", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
s(d, "VariablesRecord");
var i = d;
i.init();
var u = class u extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(u, "WidgetsRecord");
var l = u,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(e) {
            "Title" in e && (this.variables.titleIn = t.DataConversion.ServerDataConverter.from(e.Title, t.DataTypes.DataTypes.Text)), "PlanId" in e && (this.variables.planIdIn = t.DataConversion.ServerDataConverter.from(e.PlanId, t.DataTypes.DataTypes.Integer))
        }
    };
s(a, "Model");
var o = a;
o._hasValidationWidgetsValue = void 0;
var y = new t.Model.ModelFactory(o);
export {
    y as a
};