import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var a = n,
    o = class o extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("iFrameURL", "iFrameURLVar", "iFrameURL", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasError", "hasErrorVar", "HasError", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(o, "VariablesRecord");
var r = o;
r.init();
var l = class l extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(l, "WidgetsRecord");
var i = l,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
t(e, "Model");
var s = e;
s._hasValidationWidgetsValue = void 0;
var h = new a.Model.ModelFactory(s);
export {
    h as a
};