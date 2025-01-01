import {
    Gk as b,
    Le as M,
    qd as S
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as a
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var r = a,
    B = class B extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("ActiveWalletLoginId", "activeWalletLoginIdIn", "ActiveWalletLoginId", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(B, "VariablesRecord");
var f = B;
f.init();
var F = class F extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(F, "WidgetsRecord");
var V = F,
    C = class C extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ActiveWalletLoginId" in t && (this.variables.activeWalletLoginIdIn = t.ActiveWalletLoginId, "_activeWalletLoginIdInDataFetchStatus" in t && (this.variables._activeWalletLoginIdInDataFetchStatus = t._activeWalletLoginIdInDataFetchStatus))
        }
    };
e(C, "Model");
var p = C;
p._hasValidationWidgetsValue = void 0;
var lt = new r.Model.ModelFactory(p);
var o = a,
    R = class R extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowP2PBanner2", "showP2PBanner2Var", "ShowP2PBanner2", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Currency", "currencyVar", "Currency", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(R, "VariablesRecord");
var g = R;
g.init();
var A = class A extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(A, "WidgetsRecord");
var x = A,
    k = class k extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
e(k, "Model");
var D = k;
D._hasValidationWidgetsValue = void 0;
var ft = new o.Model.ModelFactory(D);
var l = a,
    N = class N extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPopup", "showPopupIn", "ShowPopup", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", "_showPopupInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Currency", "currencyIn", "Currency", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(N, "VariablesRecord");
var W = N;
W.init();
var U = class U extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(U, "WidgetsRecord");
var O = U,
    H = class H extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ShowPopup" in t && (this.variables.showPopupIn = t.ShowPopup, "_showPopupInDataFetchStatus" in t && (this.variables._showPopupInDataFetchStatus = t._showPopupInDataFetchStatus)), "Currency" in t && (this.variables.currencyIn = t.Currency, "_currencyInDataFetchStatus" in t && (this.variables._currencyInDataFetchStatus = t._currencyInDataFetchStatus))
        }
    };
e(H, "Model");
var I = H;
I._hasValidationWidgetsValue = void 0;
var Dt = new l.Model.ModelFactory(I);
var s = a,
    z = class z extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("WalletsAccountsList", "walletsAccountsListVar", "WalletsAccountsList", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
                return s.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("ShowNewWalletModal", "showNewWalletModalVar", "ShowNewWalletModal", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CreatedWalletName", "createdWalletNameVar", "CreatedWalletName", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ActiveWalletLoginId", "activeWalletLoginIdIn", "ActiveWalletLoginId", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(z, "VariablesRecord");
var m = z;
m.init();
var E = class E extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(E, "WidgetsRecord");
var j = E,
    c = class c extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ActiveWalletLoginId" in t && (this.variables.activeWalletLoginIdIn = t.ActiveWalletLoginId, "_activeWalletLoginIdInDataFetchStatus" in t && (this.variables._activeWalletLoginIdInDataFetchStatus = t._activeWalletLoginIdInDataFetchStatus))
        }
    };
e(c, "Model");
var T = c;
T._hasValidationWidgetsValue = void 0;
var yt = new s.Model.ModelFactory(T);
var i = a,
    Q = class Q extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, i.DataTypes.DataTypes.RecordList, function() {
                return i.DataTypes.ImmutableBase.getData(new M)
            }, !1, M), this.attr("ActiveWalletLoginId", "activeWalletLoginIdIn", "ActiveWalletLoginId", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", "_activeWalletLoginIdInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Q, "VariablesRecord");
var y = Q;
y.init();
var X = class X extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(X, "WidgetsRecord");
var J = X,
    d = class d extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ActiveWalletLoginId" in t && (this.variables.activeWalletLoginIdIn = t.ActiveWalletLoginId, "_activeWalletLoginIdInDataFetchStatus" in t && (this.variables._activeWalletLoginIdInDataFetchStatus = t._activeWalletLoginIdInDataFetchStatus))
        }
    };
e(d, "Model");
var v = d;
v._hasValidationWidgetsValue = void 0;
var Lt = new i.Model.ModelFactory(v);
var n = a,
    h = class h extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveLoginId", "activeLoginIdVar", "ActiveLoginId", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new h(new h.RecordClass({
                activeLoginIdVar: n.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(h, "VariablesRecord");
var _ = h;
_.init();
var Z = class Z extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Z, "WidgetsRecord");
var Y = Z,
    u = class u extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(u, "Model");
var L = u;
L._hasValidationWidgetsValue = void 0;
var bt = new n.Model.ModelFactory(L);
export {
    lt as a, ft as b, Dt as c, yt as d, Lt as e, bt as f
};