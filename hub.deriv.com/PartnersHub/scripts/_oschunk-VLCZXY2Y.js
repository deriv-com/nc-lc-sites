import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = l,
    o = class o extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ServerURL", "serverURLVar", "ServerURL", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserToken", "userTokenVar", "UserToken", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(o, "VariablesRecord");
var r = o;
r.init();
var i = class i extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: e.Model.ValidationWidgetRecord,
            Server: e.Model.ValidationWidgetRecord,
            OAuthAppID: e.Model.ValidationWidgetRecord
        }
    }
};
t(i, "WidgetsRecord");
var s = i,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {}
    };
t(n, "Model");
var a = n;
a._hasValidationWidgetsValue = void 0;
var m = new e.Model.ModelFactory(a);
export {
    m as a
};