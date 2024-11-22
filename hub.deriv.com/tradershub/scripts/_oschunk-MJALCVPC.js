import {
    Ac as $,
    Bc as m,
    Gf as f,
    Hf as aa,
    Mb as ta,
    Of as D,
    Sb as d
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as s
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var n = s,
    et = class et extends n.DataTypes.GenericRecord {
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
e(et, "VariablesRecord");
var C = et;
C.init();
var st = class st extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(st, "WidgetsRecord");
var tt = st,
    rt = class rt extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return tt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "Name" in t && (this.variables.nameIn = t.Name, "_nameInDataFetchStatus" in t && (this.variables._nameInDataFetchStatus = t._nameInDataFetchStatus)), "Balance" in t && (this.variables.balanceIn = t.Balance, "_balanceInDataFetchStatus" in t && (this.variables._balanceInDataFetchStatus = t._balanceInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e(rt, "Model");
var B = rt;
B._hasValidationWidgetsValue = void 0;
var la = new n.Model.ModelFactory(B);
var u = s,
    ot = class ot extends u.DataTypes.GenericRecord {
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
e(ot, "VariablesRecord");
var A = ot;
A.init();
var ct = class ct extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ct, "WidgetsRecord");
var it = ct,
    lt = class lt extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return it
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "ProductName" in t && (this.variables.productNameIn = t.ProductName, "_productNameInDataFetchStatus" in t && (this.variables._productNameInDataFetchStatus = t._productNameInDataFetchStatus)), "ProductDescription" in t && (this.variables.productDescriptionIn = t.ProductDescription, "_productDescriptionInDataFetchStatus" in t && (this.variables._productDescriptionInDataFetchStatus = t._productDescriptionInDataFetchStatus))
        }
    };
e(lt, "Model");
var x = lt;
x._hasValidationWidgetsValue = void 0;
var fa = new u.Model.ModelFactory(x);
var r = s,
    Dt = class Dt extends r.DataTypes.GenericRecord {
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
                return r.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Dt, "VariablesRecord");
var R = Dt;
R.init();
var ht = class ht extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_password: r.Model.ValidationWidgetRecord
        }
    }
};
e(ht, "WidgetsRecord");
var ut = ht,
    It = class It extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return ut
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "IsPasswordSet" in t && (this.variables.isPasswordSetIn = t.IsPasswordSet, "_isPasswordSetInDataFetchStatus" in t && (this.variables._isPasswordSetInDataFetchStatus = t._isPasswordSetInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus))
        }
    };
e(It, "Model");
var W = It;
W._hasValidationWidgetsValue = void 0;
var Ia = new r.Model.ModelFactory(W);
var p = s,
    Tt = class Tt extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Tt, "VariablesRecord");
var P = Tt;
P.init();
var mt = class mt extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(mt, "WidgetsRecord");
var bt = mt,
    S = class S extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return bt
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0), S._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
e(S, "Model");
var L = S;
L._hasValidationWidgetsValue = void 0;
var ya = new p.Model.ModelFactory(L);
var o = s,
    yt = class yt extends o.DataTypes.GenericRecord {
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
e(yt, "VariablesRecord");
var O = yt;
O.init();
var Ft = class Ft extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PasswordInput7: o.Model.ValidationWidgetRecord
        }
    }
};
e(Ft, "WidgetsRecord");
var St = Ft,
    gt = class gt extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return St
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "Platform" in t && (this.variables.platformIn = t.Platform, "_platformInDataFetchStatus" in t && (this.variables._platformInDataFetchStatus = t._platformInDataFetchStatus))
        }
    };
e(gt, "Model");
var k = gt;
k._hasValidationWidgetsValue = void 0;
var Va = new o.Model.ModelFactory(k);
var T = s,
    g = class g extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowInfo", "showInfoVar", "ShowInfo", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new g(new g.RecordClass({
                showInfoVar: T.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(g, "VariablesRecord");
var G = g;
G.init();
var wt = class wt extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(wt, "WidgetsRecord");
var Mt = wt,
    vt = class vt extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return Mt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
e(vt, "Model");
var N = vt;
N._hasValidationWidgetsValue = void 0;
var Ca = new T.Model.ModelFactory(N);
var h = s,
    Bt = class Bt extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InfoMessage", "infoMessageIn", "InfoMessage", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Bt, "VariablesRecord");
var U = Bt;
U.init();
var At = class At extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(At, "WidgetsRecord");
var Ct = At,
    xt = class xt extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return Ct
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "InfoMessage" in t && (this.variables.infoMessageIn = t.InfoMessage, "_infoMessageInDataFetchStatus" in t && (this.variables._infoMessageInDataFetchStatus = t._infoMessageInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(xt, "Model");
var E = xt;
E._hasValidationWidgetsValue = void 0;
var xa = new h.Model.ModelFactory(E);
var c = s,
    Pt = class Pt extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayLogin", "displayLoginVar", "DisplayLogin", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Pt, "VariablesRecord");
var X = Pt;
X.init();
var Lt = class Lt extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Lt, "WidgetsRecord");
var Rt = Lt,
    _ = class _ extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return X
        }
        static getWidgetsRecordConstructor() {
            return Rt
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0), _._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(_, "Model");
var j = _;
j._hasValidationWidgetsValue = void 0;
var ka = new c.Model.ModelFactory(j);
var l = s,
    Gt = class Gt extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Gt, "VariablesRecord");
var q = Gt;
q.init();
var Nt = class Nt extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Nt, "WidgetsRecord");
var Ot = Nt,
    y = class y extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return Ot
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0), y._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
e(y, "Model");
var z = y;
z._hasValidationWidgetsValue = void 0;
var Xa = new l.Model.ModelFactory(z);
var i = s,
    Xt = class Xt extends i.DataTypes.GenericRecord {
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
e(Xt, "VariablesRecord");
var H = Xt;
H.init();
var jt = class jt extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(jt, "WidgetsRecord");
var Ut = jt,
    qt = class qt extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return Ut
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus))
        }
    };
e(qt, "Model");
var J = qt;
J._hasValidationWidgetsValue = void 0;
var za = new i.Model.ModelFactory(J);
var b = s,
    Jt = class Jt extends b.DataTypes.GenericRecord {
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
e(Jt, "VariablesRecord");
var K = Jt;
K.init();
var Kt = class Kt extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Kt, "WidgetsRecord");
var zt = Kt,
    Qt = class Qt extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return zt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "status" in t && (this.variables.statusIn = t.status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
e(Qt, "Model");
var Q = Qt;
Q._hasValidationWidgetsValue = void 0;
var Ka = new b.Model.ModelFactory(Q);
var a = s,
    M = class M extends a.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return ta
        }
        static fromStructure(t) {
            return new M(new M.RecordClass({
                RecordListType: a.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(M, "GetCFDAccountsAggrRec");
var w = M;
w.init();
var V = class V extends a.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(a.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return aa
    }
    static fromStructure(t) {
        return new V(new V.RecordClass({
            RecordListType: a.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
e(V, "GetMockDataAggrRec");
var v = V;
v.init();
var Zt = class Zt extends a.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AvailableMT5Accounts", "availableMT5AccountsVar", "AvailableMT5Accounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("AvailableCTraderAccounts", "availableCTraderAccountsVar", "AvailableCTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("AvailableDXTraderAccounts", "availableDXTraderAccountsVar", "AvailableDXTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("CreatedMT5Accounts", "createdMT5AccountsVar", "CreatedMT5Accounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("CreatedCTraderAccounts", "createdCTraderAccountsVar", "CreatedCTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("CreatedDXTraderAccounts", "createdDXTraderAccountsVar", "CreatedDXTraderAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("SelectedAccount", "selectedAccountVar", "SelectedAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new d)
        }, !1, d), this.attr("SelectedAvailableAccount", "selectedAvailableAccountVar", "SelectedAvailableAccount", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new m)
        }, !1, m), this.attr("TotalCTraderBalance", "totalCTraderBalanceVar", "TotalCTraderBalance", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("IsEmpty", "isEmptyVar", "IsEmpty", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("DataLoading", "dataLoadingVar", "DataLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("IsMt5PasswordSet", "isMt5PasswordSetVar", "IsMt5PasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsDxtradePasswordSet", "isDxtradePasswordSetVar", "IsDxtradePasswordSet", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("AccountType", "accountTypeVar", "AccountType", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("CTraderAvailableAccountsCount", "cTraderAvailableAccountsCountVar", "CTraderAvailableAccountsCount", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("ProfileSetup", "profileSetupVar", "ProfileSetup", !0, !1, a.DataTypes.DataTypes.RecordList, function() {
            return a.DataTypes.ImmutableBase.getData(new $)
        }, !1, $), this.attr("IsDowntime", "isDowntimeVar", "IsDowntime", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("AccountCreationLoading", "accountCreationLoadingVar", "AccountCreationLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ShowModal", "showModalVar", "ShowModal", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("ProductIdentifier", "productIdentifierIn", "ProductIdentifier", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", "_productIdentifierInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetCFDAccounts", "getCFDAccountsAggr", "GetCFDAccounts", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new w)
        }, !0, w), this.attr("GetMockData", "getMockDataAggr", "GetMockData", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new v)
        }, !0, v)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Zt, "VariablesRecord");
var Y = Zt;
Y.init();
var $t = class $t extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e($t, "WidgetsRecord");
var Yt = $t,
    F = class F extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return Yt
        }
        static get hasValidationWidgets() {
            return F._hasValidationWidgetsValue === void 0 && (F._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), F._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ProductIdentifier" in t && (this.variables.productIdentifierIn = a.DataConversion.ServerDataConverter.from(t.ProductIdentifier, a.DataTypes.DataTypes.Text))
        }
    };
e(F, "Model");
var Z = F;
Z._hasValidationWidgetsValue = void 0;
var ee = new a.Model.ModelFactory(Z);
export {
    la as a, fa as b, Ia as c, ya as d, Va as e, Ca as f, xa as g, ka as h, Xa as i, za as j, Ka as k, ee as l
};