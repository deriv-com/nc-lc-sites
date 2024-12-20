import {
    Fb as s,
    vc as r
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as o
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var a = o,
    T = class T extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("Icon", "iconVar", "Icon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Balance", "balanceVar", "Balance", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(T, "VariablesRecord");
var n = T;
n.init();
var h = class h extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(h, "WidgetsRecord");
var f = h,
    l = class l extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(b) {}
    };
e(l, "Model");
var c = l;
c._hasValidationWidgetsValue = void 0;
var C = new a.Model.ModelFactory(c);
var t = o,
    m = class m extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("Icon", "iconVar", "Icon", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Balance", "balanceVar", "Balance", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(m, "VariablesRecord");
var u = m;
u.init();
var D = class D extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(D, "WidgetsRecord");
var y = D,
    i = class i extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(b) {}
    };
e(i, "Model");
var d = i;
d._hasValidationWidgetsValue = void 0;
var w = new t.Model.ModelFactory(d);
export {
    C as a, w as b
};