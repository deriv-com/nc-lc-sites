import {
    c as Q
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as jt,
    Uc as K,
    ic as S
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as a
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var r = a,
    Y = class Y extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ProductIcon", "productIconIn", "ProductIcon", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Name", "nameIn", "Name", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Balance", "balanceIn", "Balance", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_balanceInDataFetchStatus", "_balanceInDataFetchStatus", "_balanceInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Y, "VariablesRecord");
var m = Y;
m.init();
var Z = class Z extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Z, "WidgetsRecord");
var X = Z,
    $ = class $ extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return X
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "Name" in t && (this.variables.nameIn = t.Name, "_nameInDataFetchStatus" in t && (this.variables._nameInDataFetchStatus = t._nameInDataFetchStatus)), "Balance" in t && (this.variables.balanceIn = t.Balance, "_balanceInDataFetchStatus" in t && (this.variables._balanceInDataFetchStatus = t._balanceInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e($, "Model");
var _ = $;
_._hasValidationWidgetsValue = void 0;
var Kt = new r.Model.ModelFactory(_);
var u = a,
    et = class et extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ProductIcon", "productIconIn", "ProductIcon", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProductName", "productNameIn", "ProductName", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productNameInDataFetchStatus", "_productNameInDataFetchStatus", "_productNameInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProductDescription", "productDescriptionIn", "ProductDescription", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(et, "VariablesRecord");
var g = et;
g.init();
var at = class at extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(at, "WidgetsRecord");
var tt = at,
    st = class st extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return tt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "ProductName" in t && (this.variables.productNameIn = t.ProductName, "_productNameInDataFetchStatus" in t && (this.variables._productNameInDataFetchStatus = t._productNameInDataFetchStatus)), "ProductDescription" in t && (this.variables.productDescriptionIn = t.ProductDescription, "_productDescriptionInDataFetchStatus" in t && (this.variables._productDescriptionInDataFetchStatus = t._productDescriptionInDataFetchStatus))
        }
    };
e(st, "Model");
var V = st;
V._hasValidationWidgetsValue = void 0;
var Zt = new u.Model.ModelFactory(V);
var s = a,
    rt = class rt extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordInputValue", "passwordInputValueVar", "PasswordInputValue", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowPassword", "showPasswordVar", "ShowPassword", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsPasswordSet", "isPasswordSetIn", "IsPasswordSet", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new K)
            }, !1, K), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(rt, "VariablesRecord");
var w = rt;
w.init();
var nt = class nt extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_password: s.Model.ValidationWidgetRecord
        }
    }
};
e(nt, "WidgetsRecord");
var it = nt,
    ct = class ct extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return it
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "IsPasswordSet" in t && (this.variables.isPasswordSetIn = t.IsPasswordSet, "_isPasswordSetInDataFetchStatus" in t && (this.variables._isPasswordSetInDataFetchStatus = t._isPasswordSetInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus))
        }
    };
e(ct, "Model");
var M = ct;
M._hasValidationWidgetsValue = void 0;
var ae = new s.Model.ModelFactory(M);
var f = a,
    lt = class lt extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(lt, "VariablesRecord");
var v = lt;
v.init();
var ut = class ut extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ut, "WidgetsRecord");
var ot = ut,
    p = class p extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return v
        }
        static getWidgetsRecordConstructor() {
            return ot
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0), p._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
e(p, "Model");
var x = p;
x._hasValidationWidgetsValue = void 0;
var ue = new f.Model.ModelFactory(x);
var n = a,
    Dt = class Dt extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordInputValue", "passwordInputValueVar", "PasswordInputValue", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isUpdated", "isUpdatedVar", "isUpdated", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Platform", "platformIn", "Platform", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_platformInDataFetchStatus", "_platformInDataFetchStatus", "_platformInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Dt, "VariablesRecord");
var C = Dt;
C.init();
var ft = class ft extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PasswordInput7: n.Model.ValidationWidgetRecord
        }
    }
};
e(ft, "WidgetsRecord");
var dt = ft,
    ht = class ht extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return dt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "Platform" in t && (this.variables.platformIn = t.Platform, "_platformInDataFetchStatus" in t && (this.variables._platformInDataFetchStatus = t._platformInDataFetchStatus))
        }
    };
e(ht, "Model");
var B = ht;
B._hasValidationWidgetsValue = void 0;
var Ie = new n.Model.ModelFactory(B);
var h = a,
    F = class F extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowInfo", "showInfoVar", "ShowInfo", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new F(new F.RecordClass({
                showInfoVar: h.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(F, "VariablesRecord");
var W = F;
W.init();
var St = class St extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(St, "WidgetsRecord");
var It = St,
    pt = class pt extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return It
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
e(pt, "Model");
var P = pt;
P._hasValidationWidgetsValue = void 0;
var be = new h.Model.ModelFactory(P);
var d = a,
    bt = class bt extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InfoMessage", "infoMessageIn", "InfoMessage", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(bt, "VariablesRecord");
var O = bt;
O.init();
var yt = class yt extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(yt, "WidgetsRecord");
var Tt = yt,
    Ft = class Ft extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return Tt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "InfoMessage" in t && (this.variables.infoMessageIn = t.InfoMessage, "_infoMessageInDataFetchStatus" in t && (this.variables._infoMessageInDataFetchStatus = t._infoMessageInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(Ft, "Model");
var A = Ft;
A._hasValidationWidgetsValue = void 0;
var _e = new d.Model.ModelFactory(A);
var c = a,
    _t = class _t extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayLogin", "displayLoginVar", "DisplayLogin", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(_t, "VariablesRecord");
var R = _t;
R.init();
var gt = class gt extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(gt, "WidgetsRecord");
var mt = gt,
    b = class b extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return mt
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0), b._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(b, "Model");
var G = b;
G._hasValidationWidgetsValue = void 0;
var xe = new c.Model.ModelFactory(G);
var l = a,
    wt = class wt extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(wt, "VariablesRecord");
var N = wt;
N.init();
var Mt = class Mt extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Mt, "WidgetsRecord");
var Vt = Mt,
    y = class y extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return Vt
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0), y._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(y, "Model");
var U = y;
U._hasValidationWidgetsValue = void 0;
var Ae = new l.Model.ModelFactory(U);
var i = a,
    xt = class xt extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Icon", "iconIn", "Icon", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(xt, "VariablesRecord");
var H = xt;
H.init();
var Ct = class Ct extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Ct, "WidgetsRecord");
var vt = Ct,
    Bt = class Bt extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return vt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus))
        }
    };
e(Bt, "Model");
var L = Bt;
L._hasValidationWidgetsValue = void 0;
var Ue = new i.Model.ModelFactory(L);
var D = a,
    Pt = class Pt extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("status", "statusIn", "status", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Pt, "VariablesRecord");
var E = Pt;
E.init();
var Ot = class Ot extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Ot, "WidgetsRecord");
var Wt = Ot,
    At = class At extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return Wt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "status" in t && (this.variables.statusIn = t.status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e(At, "Model");
var k = At;
k._hasValidationWidgetsValue = void 0;
var ke = new D.Model.ModelFactory(k);
var I = a,
    Gt = class Gt extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, I.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Gt, "VariablesRecord");
var j = Gt;
j.init();
var Nt = class Nt extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Nt, "WidgetsRecord");
var Rt = Nt,
    Ut = class Ut extends I.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return Rt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
e(Ut, "Model");
var q = Ut;
q._hasValidationWidgetsValue = void 0;
var Qe = new I.Model.ModelFactory(q);
var o = a,
    Lt = class Lt extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new Q)
            }, !1, Q), this.attr("Shape", "shapeIn", "Shape", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return jt.shape.softRounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowHandler", "showHandlerIn", "ShowHandler", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Lt, "VariablesRecord");
var z = Lt;
z.init();
var Et = class Et extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Et, "WidgetsRecord");
var Ht = Et,
    kt = class kt extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return Ht
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "ShowHandler" in t && (this.variables.showHandlerIn = t.ShowHandler, "_showHandlerInDataFetchStatus" in t && (this.variables._showHandlerInDataFetchStatus = t._showHandlerInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(kt, "Model");
var J = kt;
J._hasValidationWidgetsValue = void 0;
var ta = new o.Model.ModelFactory(J);
export {
    Kt as a, Zt as b, ae as c, ue as d, Ie as e, be as f, _e as g, xe as h, Ae as i, Ue as j, ke as k, Qe as l, ta as m
};