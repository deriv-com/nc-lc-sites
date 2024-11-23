import {
    fa as n,
    rb as a
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as f
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = f,
    d = class d extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("ResidenceList", "residenceListIn", "ResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("WebsiteStatus", "websiteStatusIn", "WebsiteStatus", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(d, "VariablesRecord");
var r = d;
r.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: e.Model.ValidationWidgetRecord
        }
    }
};
s(u, "WidgetsRecord");
var c = u,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "ResidenceList" in t && (this.variables.residenceListIn = t.ResidenceList, "_residenceListInDataFetchStatus" in t && (this.variables._residenceListInDataFetchStatus = t._residenceListInDataFetchStatus)), "WebsiteStatus" in t && (this.variables.websiteStatusIn = t.WebsiteStatus, "_websiteStatusInDataFetchStatus" in t && (this.variables._websiteStatusInDataFetchStatus = t._websiteStatusInDataFetchStatus))
        }
    };
s(l, "Model");
var i = l;
i._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(i);
export {
    D as a
};