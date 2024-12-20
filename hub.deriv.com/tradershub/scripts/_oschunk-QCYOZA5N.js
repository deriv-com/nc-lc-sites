import {
    Ac as S,
    Wb as n
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as r
} from "./_oschunk-5EPHB76O.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";
var e = r,
    b = class b extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasBackButton", "hasBackButtonIn", "HasBackButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasSeparator", "hasSeparatorIn", "HasSeparator", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(b, "VariablesRecord");
var o = b;
o.init();
var T = class T extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(T, "WidgetsRecord");
var I = T,
    F = class F extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "HasBackButton" in t && (this.variables.hasBackButtonIn = t.HasBackButton, "_hasBackButtonInDataFetchStatus" in t && (this.variables._hasBackButtonInDataFetchStatus = t._hasBackButtonInDataFetchStatus)), "HasCloseIcon" in t && (this.variables.hasCloseIconIn = t.HasCloseIcon, "_hasCloseIconInDataFetchStatus" in t && (this.variables._hasCloseIconInDataFetchStatus = t._hasCloseIconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HasSeparator" in t && (this.variables.hasSeparatorIn = t.HasSeparator, "_hasSeparatorInDataFetchStatus" in t && (this.variables._hasSeparatorInDataFetchStatus = t._hasSeparatorInDataFetchStatus))
        }
    };
i(F, "Model");
var c = F;
c._hasValidationWidgetsValue = void 0;
var v = new e.Model.ModelFactory(c);
var s = r,
    y = class y extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasBackButton", "hasBackButtonIn", "HasBackButton", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsHeaderVisible", "isHeaderVisibleIn", "IsHeaderVisible", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(y, "VariablesRecord");
var h = y;
h.init();
var p = class p extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(p, "WidgetsRecord");
var _ = p,
    l = class l extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HasBackButton" in t && (this.variables.hasBackButtonIn = t.HasBackButton, "_hasBackButtonInDataFetchStatus" in t && (this.variables._hasBackButtonInDataFetchStatus = t._hasBackButtonInDataFetchStatus)), "HasCloseIcon" in t && (this.variables.hasCloseIconIn = t.HasCloseIcon, "_hasCloseIconInDataFetchStatus" in t && (this.variables._hasCloseIconInDataFetchStatus = t._hasCloseIconInDataFetchStatus)), "IsHeaderVisible" in t && (this.variables.isHeaderVisibleIn = t.IsHeaderVisible, "_isHeaderVisibleInDataFetchStatus" in t && (this.variables._isHeaderVisibleInDataFetchStatus = t._isHeaderVisibleInDataFetchStatus))
        }
    };
i(l, "Model");
var u = l;
u._hasValidationWidgetsValue = void 0;
var H = new s.Model.ModelFactory(u);
var a = r,
    C = class C extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("ResidenceList", "residenceListIn", "ResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("WebsiteStatus", "websiteStatusIn", "WebsiteStatus", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowUnaviableMessage", "shouldShowUnaviableMessageIn", "ShouldShowUnaviableMessage", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowUnaviableMessageInDataFetchStatus", "_shouldShowUnaviableMessageInDataFetchStatus", "_shouldShowUnaviableMessageInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowCitizenshipLabel", "shouldShowCitizenshipLabelIn", "ShouldShowCitizenshipLabel", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowCitizenshipLabelInDataFetchStatus", "_shouldShowCitizenshipLabelInDataFetchStatus", "_shouldShowCitizenshipLabelInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(C, "VariablesRecord");
var d = C;
d.init();
var g = class g extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: a.Model.ValidationWidgetRecord
        }
    }
};
i(g, "WidgetsRecord");
var B = g,
    M = class M extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "ResidenceList" in t && (this.variables.residenceListIn = t.ResidenceList, "_residenceListInDataFetchStatus" in t && (this.variables._residenceListInDataFetchStatus = t._residenceListInDataFetchStatus)), "WebsiteStatus" in t && (this.variables.websiteStatusIn = t.WebsiteStatus, "_websiteStatusInDataFetchStatus" in t && (this.variables._websiteStatusInDataFetchStatus = t._websiteStatusInDataFetchStatus)), "ShouldShowUnaviableMessage" in t && (this.variables.shouldShowUnaviableMessageIn = t.ShouldShowUnaviableMessage, "_shouldShowUnaviableMessageInDataFetchStatus" in t && (this.variables._shouldShowUnaviableMessageInDataFetchStatus = t._shouldShowUnaviableMessageInDataFetchStatus)), "ShouldShowCitizenshipLabel" in t && (this.variables.shouldShowCitizenshipLabelIn = t.ShouldShowCitizenshipLabel, "_shouldShowCitizenshipLabelInDataFetchStatus" in t && (this.variables._shouldShowCitizenshipLabelInDataFetchStatus = t._shouldShowCitizenshipLabelInDataFetchStatus))
        }
    };
i(M, "Model");
var D = M;
D._hasValidationWidgetsValue = void 0;
var W = new a.Model.ModelFactory(D);
export {
    v as a, H as b, W as c
};