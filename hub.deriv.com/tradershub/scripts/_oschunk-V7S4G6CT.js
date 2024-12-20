import {
    Kc as o,
    jg as i,
    ne as n
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as c
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = c,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SelectedResidence", "selectedResidenceVar", "SelectedResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("WebsiteStatusClientCountry", "websiteStatusClientCountryVar", "WebsiteStatusClientCountry", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsCountrySelected", "isCountrySelectedVar", "IsCountrySelected", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsBrazil", "isBrazilVar", "IsBrazil", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowPopup", "showPopupVar", "ShowPopup", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowError", "showErrorVar", "ShowError", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasUserInteracted", "hasUserInteractedVar", "HasUserInteracted", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowUnavailableServiceError", "showUnavailableServiceErrorVar", "ShowUnavailableServiceError", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedResidenceLabel", "selectedResidenceLabelVar", "SelectedResidenceLabel", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(u, "VariablesRecord");
var s = u;
s.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var l = d,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(y) {}
    };
a(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var V = new e.Model.ModelFactory(r);
export {
    V as a
};