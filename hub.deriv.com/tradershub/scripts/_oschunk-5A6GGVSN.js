import {
    Fb as b,
    lg as w,
    vc as V
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as e
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var r = e,
    F = class F extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("SyncData", "syncDataIn", "SyncData", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(F, "VariablesRecord");
var D = F;
D.init();
var C = class C extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(C, "WidgetsRecord");
var B = C,
    x = class x extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "SyncData" in t && (this.variables.syncDataIn = t.SyncData, "_syncDataInDataFetchStatus" in t && (this.variables._syncDataInDataFetchStatus = t._syncDataInDataFetchStatus))
        }
    };
a(x, "Model");
var f = x;
f._hasValidationWidgetsValue = void 0;
var ot = new r.Model.ModelFactory(f);
var i = e,
    R = class R extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowP2PBanner2", "showP2PBanner2Var", "ShowP2PBanner2", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var p = R;
p.init();
var k = class k extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(k, "WidgetsRecord");
var L = k,
    O = class O extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(O, "Model");
var y = O;
y._hasValidationWidgetsValue = void 0;
var Dt = new i.Model.ModelFactory(y);
var o = e,
    A = class A extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPopup", "showPopupIn", "ShowPopup", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Currency", "currencyIn", "Currency", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(A, "VariablesRecord");
var m = A;
m.init();
var U = class U extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(U, "WidgetsRecord");
var G = U,
    H = class H extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ShowPopup" in t && (this.variables.showPopupIn = t.ShowPopup, "_showPopupInDataFetchStatus" in t && (this.variables._showPopupInDataFetchStatus = t._showPopupInDataFetchStatus)), "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
a(H, "Model");
var T = H;
T._hasValidationWidgetsValue = void 0;
var yt = new o.Model.ModelFactory(T);
var s = e,
    z = class z extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("WalletsAccountsList", "walletsAccountsListVar", "WalletsAccountsList", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
                return s.DataTypes.ImmutableBase.getData(new w)
            }, !1, w), this.attr("ShowNewWalletModal", "showNewWalletModalVar", "ShowNewWalletModal", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CreatedWalletName", "createdWalletNameVar", "CreatedWalletName", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SyncData", "syncDataIn", "SyncData", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(z, "VariablesRecord");
var g = z;
g.init();
var E = class E extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(E, "WidgetsRecord");
var j = E,
    c = class c extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SyncData" in t && (this.variables.syncDataIn = t.SyncData, "_syncDataInDataFetchStatus" in t && (this.variables._syncDataInDataFetchStatus = t._syncDataInDataFetchStatus))
        }
    };
a(c, "Model");
var S = c;
S._hasValidationWidgetsValue = void 0;
var Wt = new s.Model.ModelFactory(S);
var n = e,
    Q = class Q extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, n.DataTypes.DataTypes.RecordList, function() {
                return n.DataTypes.ImmutableBase.getData(new V)
            }, !1, V), this.attr("SyncData", "syncDataIn", "SyncData", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", "_syncDataInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Q, "VariablesRecord");
var W = Q;
W.init();
var X = class X extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(X, "WidgetsRecord");
var J = X,
    u = class u extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SyncData" in t && (this.variables.syncDataIn = t.SyncData, "_syncDataInDataFetchStatus" in t && (this.variables._syncDataInDataFetchStatus = t._syncDataInDataFetchStatus))
        }
    };
a(u, "Model");
var _ = u;
_._hasValidationWidgetsValue = void 0;
var Mt = new n.Model.ModelFactory(_);
var l = e,
    h = class h extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveLoginId", "activeLoginIdVar", "ActiveLoginId", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new h(new h.RecordClass({
                activeLoginIdVar: l.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(h, "VariablesRecord");
var I = h;
I.init();
var Z = class Z extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Z, "WidgetsRecord");
var Y = Z,
    d = class d extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(d, "Model");
var M = d;
M._hasValidationWidgetsValue = void 0;
var wt = new l.Model.ModelFactory(M);
export {
    ot as a, Dt as b, yt as c, Wt as d, Mt as e, wt as f
};