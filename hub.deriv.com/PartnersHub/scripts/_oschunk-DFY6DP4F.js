import {
    m as r,
    n as D
} from "./_oschunk-BDI2RWOA.js";
import {
    $c as d,
    fa as f,
    sb as n
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = i,
    h = class h extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("NoOptionsText_Default", "noOptionsText_DefaultVar", "NoOptionsText_Default", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("NoResultsText_Default", "noResultsText_DefaultVar", "NoResultsText_Default", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("Prompt_Default", "prompt_DefaultVar", "Prompt_Default", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("SearchPrompt_Default", "searchPrompt_DefaultVar", "SearchPrompt_Default", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Search..."
            }, !1), this.attr("OptionsList", "optionsListIn", "OptionsList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartingSelection", "startingSelectionIn", "StartingSelection", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Prompt", "promptIn", "Prompt", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("_promptInDataFetchStatus", "_promptInDataFetchStatus", "_promptInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(h, "VariablesRecord");
var c = h;
c.init();
var p = class p extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(p, "WidgetsRecord");
var S = p,
    I = class I extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "OptionsList" in t && (this.variables.optionsListIn = t.OptionsList, "_optionsListInDataFetchStatus" in t && (this.variables._optionsListInDataFetchStatus = t._optionsListInDataFetchStatus)), "StartingSelection" in t && (this.variables.startingSelectionIn = t.StartingSelection, "_startingSelectionInDataFetchStatus" in t && (this.variables._startingSelectionInDataFetchStatus = t._startingSelectionInDataFetchStatus)), "Prompt" in t && (this.variables.promptIn = t.Prompt, "_promptInDataFetchStatus" in t && (this.variables._promptInDataFetchStatus = t._promptInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(I, "Model");
var o = I;
o._hasValidationWidgetsValue = void 0;
var F = new e.Model.ModelFactory(o);
var a = i,
    b = class b extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("Subtitle", "subtitleIn", "Subtitle", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ResidenceList", "residenceListIn", "ResidenceList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("WebsiteStatus", "websiteStatusIn", "WebsiteStatus", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(b, "VariablesRecord");
var u = b;
u.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: a.Model.ValidationWidgetRecord
        }
    }
};
s(y, "WidgetsRecord");
var T = y,
    _ = class _ extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "Subtitle" in t && (this.variables.subtitleIn = t.Subtitle, "_subtitleInDataFetchStatus" in t && (this.variables._subtitleInDataFetchStatus = t._subtitleInDataFetchStatus)), "ResidenceList" in t && (this.variables.residenceListIn = t.ResidenceList, "_residenceListInDataFetchStatus" in t && (this.variables._residenceListInDataFetchStatus = t._residenceListInDataFetchStatus)), "WebsiteStatus" in t && (this.variables.websiteStatusIn = t.WebsiteStatus, "_websiteStatusInDataFetchStatus" in t && (this.variables._websiteStatusInDataFetchStatus = t._websiteStatusInDataFetchStatus))
        }
    };
s(_, "Model");
var l = _;
l._hasValidationWidgetsValue = void 0;
var x = new a.Model.ModelFactory(l);
export {
    F as a, x as b
};