import {
    Lh as i,
    ef as o
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = c,
    l = class l extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("HasUserInteracted", "hasUserInteractedVar", "HasUserInteracted", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsCountrySelected", "isCountrySelectedVar", "IsCountrySelected", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowError", "showErrorVar", "ShowError", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedCitizenship", "selectedCitizenshipVar", "SelectedCitizenship", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(l, "VariablesRecord");
var s = l;
s.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var n = d,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(h) {}
    };
a(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var _ = new e.Model.ModelFactory(r);
export {
    _ as a
};