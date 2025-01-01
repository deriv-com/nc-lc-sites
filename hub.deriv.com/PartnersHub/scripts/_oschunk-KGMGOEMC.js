import {
    ia as u
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = u,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CommissionType", "commissionTypeIn", "CommissionType", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PlanId", "planIdIn", "PlanId", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Note", "noteIn", "Note", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_noteInDataFetchStatus", "_noteInDataFetchStatus", "_noteInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSubPlan", "isSubPlanIn", "IsSubPlan", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(o, "VariablesRecord");
var n = o;
n.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var i = l,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(a) {
            "Title" in a && (this.variables.titleIn = t.DataConversion.ServerDataConverter.from(a.Title, t.DataTypes.DataTypes.Text)), "CommissionType" in a && (this.variables.commissionTypeIn = t.DataConversion.ServerDataConverter.from(a.CommissionType, t.DataTypes.DataTypes.Text)), "PlanId" in a && (this.variables.planIdIn = t.DataConversion.ServerDataConverter.from(a.PlanId, t.DataTypes.DataTypes.Integer)), "Note" in a && (this.variables.noteIn = t.DataConversion.ServerDataConverter.from(a.Note, t.DataTypes.DataTypes.Text)), "IsSubPlan" in a && (this.variables.isSubPlanIn = t.DataConversion.ServerDataConverter.from(a.IsSubPlan, t.DataTypes.DataTypes.Boolean))
        }
    };
s(e, "Model");
var r = e;
r._hasValidationWidgetsValue = void 0;
var d = new t.Model.ModelFactory(r);
export {
    d as a
};