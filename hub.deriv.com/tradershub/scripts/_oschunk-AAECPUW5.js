import {
    Ge as C,
    ae as y,
    fb as p,
    ze as S
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as o
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var r = o,
    _ = class _ extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Currency", "currencyIn", "Currency", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(_, "VariablesRecord");
var l = _;
l.init();
var g = class g extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(g, "WidgetsRecord");
var T = g,
    m = class m extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
s(m, "Model");
var u = m;
u._hasValidationWidgetsValue = void 0;
var G = new r.Model.ModelFactory(u);
var e = o,
    F = class F extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Icon", "iconIn", "Icon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowProduct", "shouldShowProductIn", "ShouldShowProduct", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(F, "VariablesRecord");
var d = F;
d.init();
var w = class w extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(w, "WidgetsRecord");
var b = w,
    B = class B extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "ShouldShowProduct" in t && (this.variables.shouldShowProductIn = t.ShouldShowProduct, "_shouldShowProductInDataFetchStatus" in t && (this.variables._shouldShowProductInDataFetchStatus = t._shouldShowProductInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus)), "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
s(B, "Model");
var h = B;
h._hasValidationWidgetsValue = void 0;
var H = new e.Model.ModelFactory(h);
var a = o,
    i = class i extends a.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return C
        }
        static fromStructure(t) {
            return new i(new i.RecordClass({
                RecordListType: a.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
s(i, "GetCurrenciesAggrRec");
var c = i;
c.init();
var V = class V extends a.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new S)
        }, !1, S), this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("ShouldShowWarningPopup", "shouldShowWarningPopupVar", "ShouldShowWarningPopup", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("OpenAccountSwitcherModal", "openAccountSwitcherModalVar", "OpenAccountSwitcherModal", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsBalanceLoading", "isBalanceLoadingVar", "IsBalanceLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("TradingPlatformProductListingResponse", "tradingPlatformProductListingResponseVar", "TradingPlatformProductListingResponse", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new y)
        }, !1, y), this.attr("ShowAddMoreAccount", "showAddMoreAccountVar", "ShowAddMoreAccount", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("BackOfficeLocks", "backOfficeLocksVar", "BackOfficeLocks", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new p)
        }, !1, p), this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new c)
        }, !0, c)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
s(V, "VariablesRecord");
var f = V;
f.init();
var v = class v extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(v, "WidgetsRecord");
var L = v,
    n = class n extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
s(n, "Model");
var D = n;
D._hasValidationWidgetsValue = void 0;
var Q = new a.Model.ModelFactory(D);
export {
    G as a, H as b, Q as c
};