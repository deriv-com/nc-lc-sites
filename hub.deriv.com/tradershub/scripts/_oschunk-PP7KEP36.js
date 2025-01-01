import {
    ia as d
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = d,
    r = class r extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsDisabled", "isDisabledVar", "IsDisabled", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(r, "VariablesRecord");
var s = r;
s.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var o = l,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
e(a, "Model");
var i = a;
i._hasValidationWidgetsValue = void 0;
var y = new t.Model.ModelFactory(i);
export {
    y as a
};