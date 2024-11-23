import {
    ia as n
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = n,
    i = class i extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ServerURL", "serverURLVar", "ServerURL", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("OAuthAppID2", "oAuthAppID2Var", "OAuthAppID2", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(i, "VariablesRecord");
var a = i;
a.init();
var s = class s extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: e.Model.ValidationWidgetRecord,
            Server: e.Model.ValidationWidgetRecord,
            OAuthAppID: e.Model.ValidationWidgetRecord,
            LanguageSwitcherToggle: e.Model.ValidationWidgetRecord,
            EventFilterToggle: e.Model.ValidationWidgetRecord,
            CFDCommissionToggle2: e.Model.ValidationWidgetRecord
        }
    }
};
t(s, "WidgetsRecord");
var o = s,
    d = class d extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
t(d, "Model");
var r = d;
r._hasValidationWidgetsValue = void 0;
var p = new e.Model.ModelFactory(r);
export {
    p as a
};