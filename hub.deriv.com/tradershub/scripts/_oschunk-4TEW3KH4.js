import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";
var e = u,
    l = class l extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPopup", "showPopupVar", "ShowPopup", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("WalletName", "walletNameVar", "WalletName", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideCloseButton", "hideCloseButtonIn", "HideCloseButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideMobileStickyFooter", "hideMobileStickyFooterIn", "HideMobileStickyFooter", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideMobileStickyFooterInDataFetchStatus", "_hideMobileStickyFooterInDataFetchStatus", "_hideMobileStickyFooterInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(l, "VariablesRecord");
var s = l;
s.init();
var n = class n extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(n, "WidgetsRecord");
var r = n,
    a = class a extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus)), "PageTitle" in t && (this.variables.pageTitleIn = t.PageTitle, "_pageTitleInDataFetchStatus" in t && (this.variables._pageTitleInDataFetchStatus = t._pageTitleInDataFetchStatus)), "HideCloseButton" in t && (this.variables.hideCloseButtonIn = t.HideCloseButton, "_hideCloseButtonInDataFetchStatus" in t && (this.variables._hideCloseButtonInDataFetchStatus = t._hideCloseButtonInDataFetchStatus)), "HideMobileStickyFooter" in t && (this.variables.hideMobileStickyFooterIn = t.HideMobileStickyFooter, "_hideMobileStickyFooterInDataFetchStatus" in t && (this.variables._hideMobileStickyFooterInDataFetchStatus = t._hideMobileStickyFooterInDataFetchStatus))
        }
    };
i(a, "Model");
var o = a;
o._hasValidationWidgetsValue = void 0;
var I = new e.Model.ModelFactory(o);
export {
    I as a
};