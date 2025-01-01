import {
    ga as r,
    rb as n,
    tb as i
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as m
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = m,
    c = class c extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("IsInitialLoading", "isInitialLoadingVar", "IsInitialLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("DesktopSelectedCountry", "desktopSelectedCountryVar", "DesktopSelectedCountry", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("Code", "codeIn", "Code", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(c, "VariablesRecord");
var s = c;
s.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(u, "WidgetsRecord");
var d = u,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return d
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(l) {
            "Code" in l && (this.variables.codeIn = e.DataConversion.ServerDataConverter.from(l.Code, e.DataTypes.DataTypes.Text))
        }
    };
a(t, "Model");
var o = t;
o._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(o);
export {
    C as a
};