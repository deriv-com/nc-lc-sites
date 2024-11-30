import {
    f as nt
} from "./_oschunk-JSVFHRDW.js";
import {
    Bd as Te,
    Gc as it,
    Hc as _,
    Sb as be,
    Yb as f,
    Yf as D,
    Zf as me,
    eg as h
} from "./_oschunk-44PT7RP7.js";
import {
    ia as s
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var n = s,
    lt = class lt extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ProductIcon", "productIconIn", "ProductIcon", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Name", "nameIn", "Name", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Balance", "balanceIn", "Balance", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_balanceInDataFetchStatus", "_balanceInDataFetchStatus", "_balanceInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(lt, "VariablesRecord");
var A = lt;
A.init();
var ut = class ut extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ut, "WidgetsRecord");
var ot = ut,
    dt = class dt extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return ot
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "Name" in t && (this.variables.nameIn = t.Name, "_nameInDataFetchStatus" in t && (this.variables._nameInDataFetchStatus = t._nameInDataFetchStatus)), "Balance" in t && (this.variables.balanceIn = t.Balance, "_balanceInDataFetchStatus" in t && (this.variables._balanceInDataFetchStatus = t._balanceInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e(dt, "Model");
var x = dt;
x._hasValidationWidgetsValue = void 0;
var we = new n.Model.ModelFactory(x);
var d = s,
    ht = class ht extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ProductIcon", "productIconIn", "ProductIcon", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProductName", "productNameIn", "ProductName", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productNameInDataFetchStatus", "_productNameInDataFetchStatus", "_productNameInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProductDescription", "productDescriptionIn", "ProductDescription", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(ht, "VariablesRecord");
var R = ht;
R.init();
var It = class It extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(It, "WidgetsRecord");
var ft = It,
    pt = class pt extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return ft
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "ProductName" in t && (this.variables.productNameIn = t.ProductName, "_productNameInDataFetchStatus" in t && (this.variables._productNameInDataFetchStatus = t._productNameInDataFetchStatus)), "ProductDescription" in t && (this.variables.productDescriptionIn = t.ProductDescription, "_productDescriptionInDataFetchStatus" in t && (this.variables._productDescriptionInDataFetchStatus = t._productDescriptionInDataFetchStatus))
        }
    };
e(pt, "Model");
var W = pt;
W._hasValidationWidgetsValue = void 0;
var Be = new d.Model.ModelFactory(W);
var r = s,
    St = class St extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordInputValue", "passwordInputValueVar", "PasswordInputValue", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowPassword", "showPasswordVar", "ShowPassword", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsPasswordSet", "isPasswordSetIn", "IsPasswordSet", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new _)
            }, !1, _), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(St, "VariablesRecord");
var P = St;
P.init();
var _t = class _t extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_password: r.Model.ValidationWidgetRecord
        }
    }
};
e(_t, "WidgetsRecord");
var bt = _t,
    yt = class yt extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return bt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "IsPasswordSet" in t && (this.variables.isPasswordSetIn = t.IsPasswordSet, "_isPasswordSetInDataFetchStatus" in t && (this.variables._isPasswordSetInDataFetchStatus = t._isPasswordSetInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus))
        }
    };
e(yt, "Model");
var L = yt;
L._hasValidationWidgetsValue = void 0;
var Re = new r.Model.ModelFactory(L);
var T = s,
    Mt = class Mt extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Mt, "VariablesRecord");
var O = Mt;
O.init();
var Vt = class Vt extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Vt, "WidgetsRecord");
var Ft = Vt,
    y = class y extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return Ft
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0), y._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
e(y, "Model");
var k = y;
k._hasValidationWidgetsValue = void 0;
var Ue = new T.Model.ModelFactory(k);
var o = s,
    vt = class vt extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordInputValue", "passwordInputValueVar", "PasswordInputValue", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isUpdated", "isUpdatedVar", "isUpdated", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Platform", "platformIn", "Platform", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_platformInDataFetchStatus", "_platformInDataFetchStatus", "_platformInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(vt, "VariablesRecord");
var G = vt;
G.init();
var Bt = class Bt extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PasswordInput7: o.Model.ValidationWidgetRecord
        }
    }
};
e(Bt, "WidgetsRecord");
var wt = Bt,
    At = class At extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return wt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "Platform" in t && (this.variables.platformIn = t.Platform, "_platformInDataFetchStatus" in t && (this.variables._platformInDataFetchStatus = t._platformInDataFetchStatus))
        }
    };
e(At, "Model");
var U = At;
U._hasValidationWidgetsValue = void 0;
var Xe = new o.Model.ModelFactory(U);
var m = s,
    V = class V extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowInfo", "showInfoVar", "ShowInfo", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new V(new V.RecordClass({
                showInfoVar: m.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(V, "VariablesRecord");
var N = V;
N.init();
var Wt = class Wt extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Wt, "WidgetsRecord");
var xt = Wt,
    Pt = class Pt extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return xt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
e(Pt, "Model");
var H = Pt;
H._hasValidationWidgetsValue = void 0;
var qe = new m.Model.ModelFactory(H);
var I = s,
    Ot = class Ot extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InfoMessage", "infoMessageIn", "InfoMessage", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, I.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ot, "VariablesRecord");
var E = Ot;
E.init();
var kt = class kt extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(kt, "WidgetsRecord");
var Lt = kt,
    Gt = class Gt extends I.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return Lt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "InfoMessage" in t && (this.variables.infoMessageIn = t.InfoMessage, "_infoMessageInDataFetchStatus" in t && (this.variables._infoMessageInDataFetchStatus = t._infoMessageInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(Gt, "Model");
var X = Gt;
X._hasValidationWidgetsValue = void 0;
var Ke = new I.Model.ModelFactory(X);
var c = s,
    Ht = class Ht extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayLogin", "displayLoginVar", "DisplayLogin", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ht, "VariablesRecord");
var Y = Ht;
Y.init();
var Et = class Et extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Et, "WidgetsRecord");
var Ut = Et,
    F = class F extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return Ut
        }
        static get hasValidationWidgets() {
            return F._hasValidationWidgetsValue === void 0 && (F._hasValidationWidgetsValue = void 0), F._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(F, "Model");
var j = F;
j._hasValidationWidgetsValue = void 0;
var aa = new c.Model.ModelFactory(j);
var u = s,
    jt = class jt extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(jt, "VariablesRecord");
var q = jt;
q.init();
var qt = class qt extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(qt, "WidgetsRecord");
var Xt = qt,
    g = class g extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return Xt
        }
        static get hasValidationWidgets() {
            return g._hasValidationWidgetsValue === void 0 && (g._hasValidationWidgetsValue = void 0), g._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(g, "Model");
var z = g;
z._hasValidationWidgetsValue = void 0;
var oa = new u.Model.ModelFactory(z);
var i = s,
    Kt = class Kt extends i.DataTypes.GenericRecord {
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
e(Kt, "VariablesRecord");
var J = Kt;
J.init();
var Qt = class Qt extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Qt, "WidgetsRecord");
var zt = Qt,
    Zt = class Zt extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return zt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus))
        }
    };
e(Zt, "Model");
var K = Zt;
K._hasValidationWidgetsValue = void 0;
var ua = new i.Model.ModelFactory(K);
var b = s,
    ee = class ee extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("status", "statusIn", "status", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(ee, "VariablesRecord");
var Q = ee;
Q.init();
var ae = class ae extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ae, "WidgetsRecord");
var $t = ae,
    se = class se extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return $t
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "status" in t && (this.variables.statusIn = t.status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e(se, "Model");
var Z = se;
Z._hasValidationWidgetsValue = void 0;
var Da = new b.Model.ModelFactory(Z);
var S = s,
    ne = class ne extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(ne, "VariablesRecord");
var $ = ne;
$.init();
var oe = class oe extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(oe, "WidgetsRecord");
var re = oe,
    ce = class ce extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $
        }
        static getWidgetsRecordConstructor() {
            return re
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
e(ce, "Model");
var tt = ce;
tt._hasValidationWidgetsValue = void 0;
var Ta = new S.Model.ModelFactory(tt);
var l = s,
    de = class de extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new nt)
            }, !1, nt), this.attr("Shape", "shapeIn", "Shape", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return Te.shape.softRounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowHandler", "showHandlerIn", "ShowHandler", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(de, "VariablesRecord");
var et = de;
et.init();
var fe = class fe extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(fe, "WidgetsRecord");
var le = fe,
    De = class De extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return et
        }
        static getWidgetsRecordConstructor() {
            return le
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "ShowHandler" in t && (this.variables.showHandlerIn = t.ShowHandler, "_showHandlerInDataFetchStatus" in t && (this.variables._showHandlerInDataFetchStatus = t._showHandlerInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(De, "Model");
var at = De;
at._hasValidationWidgetsValue = void 0;
var ya = new l.Model.ModelFactory(at);
var a = s,
    w = class w extends a.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return be
        }
        static fromStructure(t) {
            return new w(new w.RecordClass({
                RecordListType: a.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(w, "GetCFDAccountsAggrRec");
var v = w;
v.init();
var C = class C extends a.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return me
    }
    static fromStructure(t) {
        return new C(new C.RecordClass({
            RecordListType: a.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
e(C, "GetMockDataAggrRec");
var B = C;
B.init();
var Ie = class Ie extends a.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AvailableMT5Accounts", "availableMT5AccountsVar", "AvailableMT5Accounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("AvailableCTraderAccounts", "availableCTraderAccountsVar", "AvailableCTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("AvailableDXTraderAccounts", "availableDXTraderAccountsVar", "AvailableDXTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("CreatedMT5Accounts", "createdMT5AccountsVar", "CreatedMT5Accounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new h)
        }, !1, h), this.attr("CreatedCTraderAccounts", "createdCTraderAccountsVar", "CreatedCTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new h)
        }, !1, h), this.attr("CreatedDXTraderAccounts", "createdDXTraderAccountsVar", "CreatedDXTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new h)
        }, !1, h), this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new h)
        }, !1, h), this.attr("SelectedAccount", "selectedAccountVar", "SelectedAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("SelectedAvailableAccount", "selectedAvailableAccountVar", "SelectedAvailableAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new _)
        }, !1, _), this.attr("TotalCTraderBalance", "totalCTraderBalanceVar", "TotalCTraderBalance", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("IsEmpty", "isEmptyVar", "IsEmpty", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("DataLoading", "dataLoadingVar", "DataLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("IsMt5PasswordSet", "isMt5PasswordSetVar", "IsMt5PasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsDxtradePasswordSet", "isDxtradePasswordSetVar", "IsDxtradePasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("CTraderAvailableAccountsCount", "cTraderAvailableAccountsCountVar", "CTraderAvailableAccountsCount", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("ProfileSetup", "profileSetupVar", "ProfileSetup", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new it)
        }, !1, it), this.attr("IsDowntime", "isDowntimeVar", "IsDowntime", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("AccountCreationLoading", "accountCreationLoadingVar", "AccountCreationLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ShowModal", "showModalVar", "ShowModal", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("HasFIATWallet", "hasFIATWalletVar", "HasFIATWallet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ProductIdentifier", "productIdentifierIn", "ProductIdentifier", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetCFDAccounts", "getCFDAccountsAggr", "GetCFDAccounts", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new v)
        }, !0, v), this.attr("GetMockData", "getMockDataAggr", "GetMockData", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new B)
        }, !0, B)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ie, "VariablesRecord");
var st = Ie;
st.init();
var pe = class pe extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(pe, "WidgetsRecord");
var he = pe,
    M = class M extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return st
        }
        static getWidgetsRecordConstructor() {
            return he
        }
        static get hasValidationWidgets() {
            return M._hasValidationWidgetsValue === void 0 && (M._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), M._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ProductIdentifier" in t && (this.variables.productIdentifierIn = a.DataConversion.ServerDataConverter.from(t.ProductIdentifier, a.DataTypes.DataTypes.Text))
        }
    };
e(M, "Model");
var rt = M;
rt._hasValidationWidgetsValue = void 0;
var Ba = new a.Model.ModelFactory(rt);
export {
    we as a, Be as b, Re as c, Ue as d, Xe as e, qe as f, Ke as g, aa as h, oa as i, ua as j, Da as k, Ta as l, ya as m, Ba as n
};