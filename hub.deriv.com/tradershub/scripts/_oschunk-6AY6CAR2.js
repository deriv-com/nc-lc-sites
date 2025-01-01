import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var t = u,
    r = class r extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPopup", "showPopupVar", "ShowPopup", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideCloseButton", "hideCloseButtonIn", "HideCloseButton", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(r, "VariablesRecord");
var i = r;
i.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var n = l,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(a) {
            "IsLoading" in a && (this.variables.isLoadingIn = a.IsLoading, "_isLoadingInDataFetchStatus" in a && (this.variables._isLoadingInDataFetchStatus = a._isLoadingInDataFetchStatus)), "PageTitle" in a && (this.variables.pageTitleIn = a.PageTitle, "_pageTitleInDataFetchStatus" in a && (this.variables._pageTitleInDataFetchStatus = a._pageTitleInDataFetchStatus)), "HideCloseButton" in a && (this.variables.hideCloseButtonIn = a.HideCloseButton, "_hideCloseButtonInDataFetchStatus" in a && (this.variables._hideCloseButtonInDataFetchStatus = a._hideCloseButtonInDataFetchStatus))
        }
    };
s(e, "Model");
var o = e;
o._hasValidationWidgetsValue = void 0;
var T = new t.Model.ModelFactory(o);
export {
    T as a
};