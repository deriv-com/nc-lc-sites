import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";
var t = c,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(o, "VariablesRecord");
var s = o;
s.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(l, "WidgetsRecord");
var n = l,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(e) {
            "PageTitle" in e && (this.variables.pageTitleIn = e.PageTitle, "_pageTitleInDataFetchStatus" in e && (this.variables._pageTitleInDataFetchStatus = e._pageTitleInDataFetchStatus)), "Description" in e && (this.variables.descriptionIn = e.Description, "_descriptionInDataFetchStatus" in e && (this.variables._descriptionInDataFetchStatus = e._descriptionInDataFetchStatus))
        }
    };
i(a, "Model");
var r = a;
r._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(r);
export {
    D as a
};