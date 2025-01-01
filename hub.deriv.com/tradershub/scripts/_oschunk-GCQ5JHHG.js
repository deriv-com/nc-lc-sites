import {
    qd as W
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as s
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var l = s,
    y = class y extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(y, "VariablesRecord");
var u = y;
u.init();
var M = class M extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var V = M,
    r = class r extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
t(r, "Model");
var h = r;
h._hasValidationWidgetsValue = void 0;
var O = new l.Model.ModelFactory(h);
var a = s,
    n = class n extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(c) {
            return new n(new n.RecordClass({
                isLoadingVar: a.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
t(n, "VariablesRecord");
var m = n;
m.init();
var b = class b extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(b, "WidgetsRecord");
var _ = b,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
t(i, "Model");
var f = i;
f._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(f);
var e = s,
    v = class v extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowScreen", "showScreenVar", "ShowScreen", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("WithdrawalPageTitle", "withdrawalPageTitleVar", "WithdrawalPageTitle", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Withdrawal"
            }, !1), this.attr("Title", "titleVar", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Withdrawals paused"
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new W)
            }, !1, W)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(v, "VariablesRecord");
var p = v;
p.init();
var B = class B extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(B, "WidgetsRecord");
var w = B,
    o = class o extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), o._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
t(o, "Model");
var g = o;
g._hasValidationWidgetsValue = void 0;
var J = new e.Model.ModelFactory(g);
export {
    O as a, F as b, J as c
};