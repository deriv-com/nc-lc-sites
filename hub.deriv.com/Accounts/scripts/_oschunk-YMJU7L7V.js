import {
    ma as i,
    te as a,
    w as c
} from "./_oschunk-UATY3RVV.js";
import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = d,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UserFirstName", "userFirstNameVar", "UserFirstName", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("UserLastName", "userLastNameVar", "UserLastName", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("UserDateOfBirth", "userDateOfBirthVar", "UserDateOfBirth", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("ShouldUpdateName", "shouldUpdateNameVar", "ShouldUpdateName", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldUpdateDOB", "shouldUpdateDOBVar", "ShouldUpdateDOB", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("RejectedReason", "rejectedReasonVar", "RejectedReason", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ErrorData", "errorDataVar", "ErrorData", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(u, "VariablesRecord");
var o = u;
o.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var n = l,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(T) {}
    };
s(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var g = new e.Model.ModelFactory(r);
export {
    g as a
};