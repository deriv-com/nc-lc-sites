import {
    ia as u
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var e = u,
    o = class o extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SelectedSection", "selectedSectionIn", "SelectedSection", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedSectionInDataFetchStatus", "_selectedSectionInDataFetchStatus", "_selectedSectionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedMenu", "selectedMenuIn", "SelectedMenu", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedMenuInDataFetchStatus", "_selectedMenuInDataFetchStatus", "_selectedMenuInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(o, "VariablesRecord");
var c = o;
c.init();
var l = class l extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var i = l,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SelectedSection" in t && (this.variables.selectedSectionIn = t.SelectedSection, "_selectedSectionInDataFetchStatus" in t && (this.variables._selectedSectionInDataFetchStatus = t._selectedSectionInDataFetchStatus)), "SelectedMenu" in t && (this.variables.selectedMenuIn = t.SelectedMenu, "_selectedMenuInDataFetchStatus" in t && (this.variables._selectedMenuInDataFetchStatus = t._selectedMenuInDataFetchStatus))
        }
    };
s(a, "Model");
var n = a;
n._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(n);
export {
    D as a
};