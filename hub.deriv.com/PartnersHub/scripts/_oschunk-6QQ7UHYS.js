import {
    Fa as r
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as o
} from "./_oschunk-5KJVGEL7.js";
import {
    c as i
} from "./_oschunk-QHO7QY6K.js";
var e = o,
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("type", "typeIn", "type", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("title", "titleIn", "title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("description", "descriptionIn", "description", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("buttonTitle", "buttonTitleIn", "buttonTitle", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Resend email"
            }, !1), this.attr("_buttonTitleInDataFetchStatus", "_buttonTitleInDataFetchStatus", "_buttonTitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(u, "VariablesRecord");
var s = u;
s.init();
var c = class c extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(c, "WidgetsRecord");
var l = c,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(t) {
            "type" in t && (this.variables.typeIn = t.type, "_typeInDataFetchStatus" in t && (this.variables._typeInDataFetchStatus = t._typeInDataFetchStatus)), "title" in t && (this.variables.titleIn = t.title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "description" in t && (this.variables.descriptionIn = t.description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "buttonTitle" in t && (this.variables.buttonTitleIn = t.buttonTitle, "_buttonTitleInDataFetchStatus" in t && (this.variables._buttonTitleInDataFetchStatus = t._buttonTitleInDataFetchStatus))
        }
    };
i(a, "Model");
var n = a;
n._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(n);
export {
    D as a
};