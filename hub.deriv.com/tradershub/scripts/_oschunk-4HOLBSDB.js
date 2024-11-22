import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var a = d,
    r = class r extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideBackButton", "hideBackButtonIn", "HideBackButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideWalletHeader", "hideWalletHeaderIn", "HideWalletHeader", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideWalletHeaderInDataFetchStatus", "_hideWalletHeaderInDataFetchStatus", "_hideWalletHeaderInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideCloseButton", "hideCloseButtonIn", "HideCloseButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(r, "VariablesRecord");
var i = r;
i.init();
var o = class o extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(o, "WidgetsRecord");
var l = o,
    e = class e extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "HideBackButton" in t && (this.variables.hideBackButtonIn = t.HideBackButton, "_hideBackButtonInDataFetchStatus" in t && (this.variables._hideBackButtonInDataFetchStatus = t._hideBackButtonInDataFetchStatus)), "PageTitle" in t && (this.variables.pageTitleIn = t.PageTitle, "_pageTitleInDataFetchStatus" in t && (this.variables._pageTitleInDataFetchStatus = t._pageTitleInDataFetchStatus)), "HideWalletHeader" in t && (this.variables.hideWalletHeaderIn = t.HideWalletHeader, "_hideWalletHeaderInDataFetchStatus" in t && (this.variables._hideWalletHeaderInDataFetchStatus = t._hideWalletHeaderInDataFetchStatus)), "HideCloseButton" in t && (this.variables.hideCloseButtonIn = t.HideCloseButton, "_hideCloseButtonInDataFetchStatus" in t && (this.variables._hideCloseButtonInDataFetchStatus = t._hideCloseButtonInDataFetchStatus))
        }
    };
s(e, "Model");
var n = e;
n._hasValidationWidgetsValue = void 0;
var I = new a.Model.ModelFactory(n);
export {
    I as a
};