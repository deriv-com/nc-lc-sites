import {
    Le as s
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as o
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = o,
    p = class p extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Icon", "iconVar", "Icon", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Balance", "balanceVar", "Balance", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(p, "VariablesRecord");
var n = p;
n.init();
var h = class h extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(h, "WidgetsRecord");
var u = h,
    r = class r extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(W) {}
    };
e(r, "Model");
var l = r;
l._hasValidationWidgetsValue = void 0;
var C = new t.Model.ModelFactory(l);
var a = o,
    m = class m extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
                return a.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Icon", "iconVar", "Icon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Balance", "balanceVar", "Balance", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(m, "VariablesRecord");
var d = m;
d.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(y, "WidgetsRecord");
var T = y,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(W) {}
    };
e(i, "Model");
var c = i;
c._hasValidationWidgetsValue = void 0;
var O = new a.Model.ModelFactory(c);
export {
    C as a, O as b
};