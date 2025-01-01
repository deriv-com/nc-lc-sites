import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var a = u,
    l = class l extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ButtonText", "buttonTextIn", "ButtonText", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(l, "VariablesRecord");
var i = l;
i.init();
var o = class o extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(o, "WidgetsRecord");
var r = o,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(t) {
            "PageTitle" in t && (this.variables.pageTitleIn = t.PageTitle, "_pageTitleInDataFetchStatus" in t && (this.variables._pageTitleInDataFetchStatus = t._pageTitleInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "ButtonText" in t && (this.variables.buttonTextIn = t.ButtonText, "_buttonTextInDataFetchStatus" in t && (this.variables._buttonTextInDataFetchStatus = t._buttonTextInDataFetchStatus)), "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
s(e, "Model");
var n = e;
n._hasValidationWidgetsValue = void 0;
var d = new a.Model.ModelFactory(n);
export {
    d as a
};