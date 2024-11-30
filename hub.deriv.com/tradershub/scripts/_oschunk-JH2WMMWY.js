import {
    Xe as S,
    _f as D,
    ic as h,
    pd as f,
    tc as p
} from "./_oschunk-44PT7RP7.js";
import {
    ia as i
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var s = i,
    m = class m extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPopup", "showPopupIn", "ShowPopup", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Currency", "currencyIn", "Currency", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(m, "VariablesRecord");
var n = m;
n.init();
var b = class b extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(b, "WidgetsRecord");
var y = b,
    M = class M extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ShowPopup" in t && (this.variables.showPopupIn = t.ShowPopup, "_showPopupInDataFetchStatus" in t && (this.variables._showPopupInDataFetchStatus = t._showPopupInDataFetchStatus)), "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
a(M, "Model");
var c = M;
c._hasValidationWidgetsValue = void 0;
var V = new s.Model.ModelFactory(c);
var e = i,
    o = class o extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return S
        }
        static fromStructure(t) {
            return new o(new o.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(o, "GetCurrenciesByCodeAggrRec");
var l = o;
l.init();
var _ = class _ extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new p)
        }, !1, p), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new h)
        }, !1, h), this.attr("DeserializeAddMoreWalletsList", "deserializeAddMoreWalletsListVar", "DeserializeAddMoreWalletsList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("SerializeAddMoreWaleltsList", "serializeAddMoreWaleltsListVar", "SerializeAddMoreWaleltsList", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("AccountList", "accountListVar", "AccountList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("ShowNewWalletModal", "showNewWalletModalVar", "ShowNewWalletModal", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("DemoAccountBalance", "demoAccountBalanceVar", "DemoAccountBalance", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("GetCurrenciesByCode", "getCurrenciesByCodeAggr", "GetCurrenciesByCode", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new l)
        }, !0, l)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(_, "VariablesRecord");
var u = _;
u.init();
var w = class w extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(w, "WidgetsRecord");
var g = w,
    r = class r extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(r, "Model");
var d = r;
d._hasValidationWidgetsValue = void 0;
var k = new e.Model.ModelFactory(d);
export {
    V as a, k as b
};