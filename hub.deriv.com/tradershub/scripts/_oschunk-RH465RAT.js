import {
    bj as i,
    ei as m
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as n
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var u = n,
    b = class b extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(b, "VariablesRecord");
var d = b;
d.init();
var w = class w extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(w, "WidgetsRecord");
var _ = w,
    F = class F extends u.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(F, "Model");
var h = F;
h._hasValidationWidgetsValue = void 0;
var X = new u.Model.ModelFactory(h);
var r = n,
    A = class A extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("AccountList", "accountListVar", "AccountList", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("HasDemoTradingAccount", "hasDemoTradingAccountVar", "HasDemoTradingAccount", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("HasRealTradingAccount", "hasRealTradingAccountVar", "HasRealTradingAccount", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowAccountSwitcherDropdown", "showAccountSwitcherDropdownVar", "ShowAccountSwitcherDropdown", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowAccountSwitcherModal", "showAccountSwitcherModalVar", "ShowAccountSwitcherModal", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(A, "VariablesRecord");
var f = A;
f.init();
var L = class L extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(L, "WidgetsRecord");
var V = L,
    c = class c extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0 || void 0 || void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(c, "Model");
var D = c;
D._hasValidationWidgetsValue = void 0;
var et = new r.Model.ModelFactory(D);
var o = n,
    W = class W extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Currency", "currencyIn", "Currency", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(W, "VariablesRecord");
var p = W;
p.init();
var x = class x extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(x, "WidgetsRecord");
var v = x,
    P = class P extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
a(P, "Model");
var T = P;
T._hasValidationWidgetsValue = void 0;
var nt = new o.Model.ModelFactory(T);
var s = n,
    G = class G extends s.DataTypes.GenericRecord {
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
a(G, "VariablesRecord");
var y = G;
y.init();
var k = class k extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(k, "WidgetsRecord");
var O = k,
    H = class H extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "ShouldShowProduct" in t && (this.variables.shouldShowProductIn = t.ShouldShowProduct, "_shouldShowProductInDataFetchStatus" in t && (this.variables._shouldShowProductInDataFetchStatus = t._shouldShowProductInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus)), "IsLoading" in t && (this.variables.isLoadingIn = t.IsLoading, "_isLoadingInDataFetchStatus" in t && (this.variables._isLoadingInDataFetchStatus = t._isLoadingInDataFetchStatus))
        }
    };
a(H, "Model");
var S = H;
S._hasValidationWidgetsValue = void 0;
var ct = new s.Model.ModelFactory(S);
var e = n,
    E = class E extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ShouldShowWarningPopup", "shouldShowWarningPopupVar", "ShouldShowWarningPopup", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("OpenAccountSwitcherModal", "openAccountSwitcherModalVar", "OpenAccountSwitcherModal", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsBalanceLoading", "isBalanceLoadingVar", "IsBalanceLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TradingPlatformProductListingResponse", "tradingPlatformProductListingResponseVar", "TradingPlatformProductListingResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("ShowAddMoreAccount", "showAddMoreAccountVar", "ShowAddMoreAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(E, "VariablesRecord");
var g = E;
g.init();
var j = class j extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(j, "WidgetsRecord");
var U = j,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return U
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(l, "Model");
var I = l;
I._hasValidationWidgetsValue = void 0;
var Tt = new e.Model.ModelFactory(I);
export {
    X as a, et as b, nt as c, ct as d, Tt as e
};