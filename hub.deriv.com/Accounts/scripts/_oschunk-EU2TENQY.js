import {
    k as a,
    l as o
} from "./_oschunk-KZFTAIEG.js";
import {
    fg as i
} from "./_oschunk-UATY3RVV.js";
import {
    ia as D
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = D,
    u = class u extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("NoOptionsText_Default", "noOptionsText_DefaultVar", "NoOptionsText_Default", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("NoResultsText_Default", "noResultsText_DefaultVar", "NoResultsText_Default", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("Prompt_Default", "prompt_DefaultVar", "Prompt_Default", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("SearchPrompt_Default", "searchPrompt_DefaultVar", "SearchPrompt_Default", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "Search..."
            }, !1), this.attr("OptionsList", "optionsListIn", "OptionsList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartingSelection", "startingSelectionIn", "StartingSelection", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new a)
            }, !1, a), this.attr("_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Prompt", "promptIn", "Prompt", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("_promptInDataFetchStatus", "_promptInDataFetchStatus", "_promptInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(u, "VariablesRecord");
var n = u;
n.init();
var c = class c extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(c, "WidgetsRecord");
var l = c,
    f = class f extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "OptionsList" in e && (this.variables.optionsListIn = e.OptionsList, "_optionsListInDataFetchStatus" in e && (this.variables._optionsListInDataFetchStatus = e._optionsListInDataFetchStatus)), "StartingSelection" in e && (this.variables.startingSelectionIn = e.StartingSelection, "_startingSelectionInDataFetchStatus" in e && (this.variables._startingSelectionInDataFetchStatus = e._startingSelectionInDataFetchStatus)), "Prompt" in e && (this.variables.promptIn = e.Prompt, "_promptInDataFetchStatus" in e && (this.variables._promptInDataFetchStatus = e._promptInDataFetchStatus)), "OptionalConfigs" in e && (this.variables.optionalConfigsIn = e.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in e && (this.variables._optionalConfigsInDataFetchStatus = e._optionalConfigsInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
s(f, "Model");
var r = f;
r._hasValidationWidgetsValue = void 0;
var d = new t.Model.ModelFactory(r);
export {
    d as a
};