import {
    Ee as e
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as f
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = f,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SearchedState", "searchedStateVar", "SearchedState", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("FilteredStatesList", "filteredStatesListVar", "FilteredStatesList", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("NoSearchText", "noSearchTextVar", "NoSearchText", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var r = i;
r.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: t.Model.ValidationWidgetRecord
        }
    }
};
a(n, "WidgetsRecord");
var o = n,
    d = class d extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
a(d, "Model");
var s = d;
s._hasValidationWidgetsValue = void 0;
var b = new t.Model.ModelFactory(s);
export {
    b as a
};