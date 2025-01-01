import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var e = l,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Icon", "iconVar", "Icon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Balance", "balanceVar", "Balance", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var r = i;
r.init();
var o = class o extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(o, "WidgetsRecord");
var n = o,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0), t._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
a(t, "Model");
var s = t;
s._hasValidationWidgetsValue = void 0;
var h = new e.Model.ModelFactory(s);
export {
    h as a
};