import {
    Qe as c,
    ib as i,
    oe as I
} from "./_oschunk-44PT7RP7.js";
import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var e = n,
    m = class m extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("OpenAccountSwitcherModal", "openAccountSwitcherModalVar", "OpenAccountSwitcherModal", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsBalanceLoading", "isBalanceLoadingVar", "IsBalanceLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowAddMoreAccount", "showAddMoreAccountVar", "ShowAddMoreAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("IsAccountEnabled", "isAccountEnabledVar", "IsAccountEnabled", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("HasDemoOptionsAccount", "hasDemoOptionsAccountVar", "HasDemoOptionsAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DemoAccountBalance", "demoAccountBalanceVar", "DemoAccountBalance", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("BackOfficeLocks", "backOfficeLocksIn", "BackOfficeLocks", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("_backOfficeLocksInDataFetchStatus", "_backOfficeLocksInDataFetchStatus", "_backOfficeLocksInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(m, "VariablesRecord");
var d = m;
d.init();
var g = class g extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(g, "WidgetsRecord");
var b = g,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "BackOfficeLocks" in t && (this.variables.backOfficeLocksIn = t.BackOfficeLocks, "_backOfficeLocksInDataFetchStatus" in t && (this.variables._backOfficeLocksInDataFetchStatus = t._backOfficeLocksInDataFetchStatus))
        }
    };
r(l, "Model");
var f = l;
f._hasValidationWidgetsValue = void 0;
var N = new e.Model.ModelFactory(f);
var o = n,
    F = class F extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Currency", "currencyIn", "Currency", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(F, "VariablesRecord");
var h = F;
h.init();
var L = class L extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(L, "WidgetsRecord");
var M = L,
    V = class V extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
r(V, "Model");
var D = V;
D._hasValidationWidgetsValue = void 0;
var Y = new o.Model.ModelFactory(D);
var s = n,
    O = class O extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Icon", "iconIn", "Icon", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowProduct", "shouldShowProductIn", "ShouldShowProduct", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(O, "VariablesRecord");
var p = O;
p.init();
var k = class k extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(k, "WidgetsRecord");
var w = k,
    v = class v extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "ShouldShowProduct" in t && (this.variables.shouldShowProductIn = t.ShouldShowProduct, "_shouldShowProductInDataFetchStatus" in t && (this.variables._shouldShowProductInDataFetchStatus = t._shouldShowProductInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus)), "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
r(v, "Model");
var T = v;
T._hasValidationWidgetsValue = void 0;
var tt = new s.Model.ModelFactory(T);
var a = n,
    W = class W extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
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
                return a.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("ShowAddMoreAccount", "showAddMoreAccountVar", "ShowAddMoreAccount", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("BackOfficeLocks", "backOfficeLocksVar", "BackOfficeLocks", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsAccountEnabled", "isAccountEnabledVar", "IsAccountEnabled", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(W, "VariablesRecord");
var y = W;
y.init();
var R = class R extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(R, "WidgetsRecord");
var C = R,
    u = class u extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
r(u, "Model");
var S = u;
S._hasValidationWidgetsValue = void 0;
var it = new a.Model.ModelFactory(S);
export {
    N as a, Y as b, tt as c, it as d
};