import {
    Df as d,
    mb as r,
    wf as o
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = c,
    n = class n extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceList", "residenceListVar", "ResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("TINValidationsResponse", "tINValidationsResponseVar", "TINValidationsResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("CanBypassTINStatus", "canBypassTINStatusVar", "CanBypassTINStatus", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("EmploymentStatusLIst", "employmentStatusLIstVar", "EmploymentStatusLIst", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(n, "VariablesRecord");
var a = n;
a.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: e.Model.ValidationWidgetRecord,
            EmployementStatusDropdown: e.Model.ValidationWidgetRecord,
            NoTaxIDNumberAvailable: e.Model.ValidationWidgetRecord,
            Input_TIDNumber: e.Model.ValidationWidgetRecord,
            TaxIDConfirmationCheckbox: e.Model.ValidationWidgetRecord
        }
    }
};
t(l, "WidgetsRecord");
var i = l,
    u = class u extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(f) {}
    };
t(u, "Model");
var s = u;
s._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(s);
export {
    D as a
};