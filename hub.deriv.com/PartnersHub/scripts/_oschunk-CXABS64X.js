import {
    ga as o,
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
    u = class u extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("isInitialLoading", "isInitialLoadingVar", "isInitialLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("DesktopSelectedCitizenship", "desktopSelectedCitizenshipVar", "DesktopSelectedCitizenship", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("CountryOfResidence", "countryOfResidenceIn", "CountryOfResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_countryOfResidenceInDataFetchStatus", "_countryOfResidenceInDataFetchStatus", "_countryOfResidenceInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(u, "VariablesRecord");
var s = u;
s.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(d, "WidgetsRecord");
var c = d,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(l) {
            "CountryOfResidence" in l && (this.variables.countryOfResidenceIn = e.DataConversion.ServerDataConverter.from(l.CountryOfResidence, e.DataTypes.DataTypes.Text))
        }
    };
a(t, "Model");
var r = t;
r._hasValidationWidgetsValue = void 0;
var C = new e.Model.ModelFactory(r);
export {
    C as a
};