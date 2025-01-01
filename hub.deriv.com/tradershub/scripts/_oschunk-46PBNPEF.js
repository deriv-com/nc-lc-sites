import {
    Xj as p
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = u,
    a = class a extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return p
        }
        static fromStructure(d) {
            return new a(new a.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(d)
            }))
        }
    };
t(a, "GetEUCountriesByCountryCodeAggrRec");
var s = a;
s.init();
var n = class n extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Password", "passwordVar", "Password", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("RedirectToRealAccountCreation", "redirectToRealAccountCreationVar", "RedirectToRealAccountCreation", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("SelectedResidence", "selectedResidenceVar", "SelectedResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("GetEUCountriesByCountryCode", "getEUCountriesByCountryCodeAggr", "GetEUCountriesByCountryCode", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !0, s)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(n, "VariablesRecord");
var r = n;
r.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: e.Model.ValidationWidgetRecord,
            Input_password: e.Model.ValidationWidgetRecord
        }
    }
};
t(l, "WidgetsRecord");
var i = l,
    c = class c extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {}
    };
t(c, "Model");
var o = c;
o._hasValidationWidgetsValue = void 0;
var w = new e.Model.ModelFactory(o);
export {
    w as a
};