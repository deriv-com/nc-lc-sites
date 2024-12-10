import {
    ga as o,
    sb as i
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = c,
    l = class l extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(l, "VariablesRecord");
var s = l;
s.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var n = d,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(p) {}
    };
a(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var R = new e.Model.ModelFactory(r);
export {
    R as a
};