import {
    c as ot
} from "./_oschunk-2ZI4JQLD.js";
import {
    bh as M,
    ge as y,
    pf as rt
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as e
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var i = e,
    ut = class ut extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Color", "colorIn", "Color", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return M.color.primary
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Shape", "shapeIn", "Shape", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return M.shape.rounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLight", "isLightIn", "IsLight", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ut, "VariablesRecord");
var x = ut;
x.init();
var dt = class dt extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(dt, "WidgetsRecord");
var ct = dt,
    ht = class ht extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return x
        }
        static getWidgetsRecordConstructor() {
            return ct
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Color" in t && (this.variables.colorIn = t.Color, "_colorInDataFetchStatus" in t && (this.variables._colorInDataFetchStatus = t._colorInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "IsLight" in t && (this.variables.isLightIn = t.IsLight, "_isLightInDataFetchStatus" in t && (this.variables._isLightInDataFetchStatus = t._isLightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(ht, "Model");
var v = ht;
v._hasValidationWidgetsValue = void 0;
var pa = new i.Model.ModelFactory(v);
var I = e,
    It = class It extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(It, "VariablesRecord");
var C = It;
C.init();
var St = class St extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(St, "WidgetsRecord");
var Dt = St,
    F = class F extends I.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return Dt
        }
        static get hasValidationWidgets() {
            return F._hasValidationWidgetsValue === void 0 && (F._hasValidationWidgetsValue = void 0), F._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(F, "Model");
var B = F;
B._hasValidationWidgetsValue = void 0;
var ba = new I.Model.ModelFactory(B);
var r = e,
    pt = class pt extends r.DataTypes.GenericRecord {
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
a(pt, "VariablesRecord");
var W = pt;
W.init();
var yt = class yt extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(yt, "WidgetsRecord");
var Tt = yt,
    b = class b extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return Tt
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0), b._hasValidationWidgetsValue
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "Name" in t && (this.variables.nameIn = t.Name, "_nameInDataFetchStatus" in t && (this.variables._nameInDataFetchStatus = t._nameInDataFetchStatus)), "Balance" in t && (this.variables.balanceIn = t.Balance, "_balanceInDataFetchStatus" in t && (this.variables._balanceInDataFetchStatus = t._balanceInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(b, "Model");
var O = b;
O._hasValidationWidgetsValue = void 0;
var ga = new r.Model.ModelFactory(O);
var d = e,
    bt = class bt extends d.DataTypes.GenericRecord {
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
a(bt, "VariablesRecord");
var P = bt;
P.init();
var _t = class _t extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(_t, "WidgetsRecord");
var Ft = _t,
    mt = class mt extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return Ft
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "ProductIcon" in t && (this.variables.productIconIn = t.ProductIcon, "_productIconInDataFetchStatus" in t && (this.variables._productIconInDataFetchStatus = t._productIconInDataFetchStatus)), "ProductName" in t && (this.variables.productNameIn = t.ProductName, "_productNameInDataFetchStatus" in t && (this.variables._productNameInDataFetchStatus = t._productNameInDataFetchStatus)), "ProductDescription" in t && (this.variables.productDescriptionIn = t.ProductDescription, "_productDescriptionInDataFetchStatus" in t && (this.variables._productDescriptionInDataFetchStatus = t._productDescriptionInDataFetchStatus))
        }
    };
a(mt, "Model");
var R = mt;
R._hasValidationWidgetsValue = void 0;
var xa = new d.Model.ModelFactory(R);
var s = e,
    Vt = class Vt extends s.DataTypes.GenericRecord {
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
                return s.DataTypes.ImmutableBase.getData(new rt)
            }, !1, rt), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Vt, "VariablesRecord");
var A = Vt;
A.init();
var Mt = class Mt extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_password: s.Model.ValidationWidgetRecord
        }
    }
};
a(Mt, "WidgetsRecord");
var gt = Mt,
    wt = class wt extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return gt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "IsPasswordSet" in t && (this.variables.isPasswordSetIn = t.IsPasswordSet, "_isPasswordSetInDataFetchStatus" in t && (this.variables._isPasswordSetInDataFetchStatus = t._isPasswordSetInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus))
        }
    };
a(wt, "Model");
var G = wt;
G._hasValidationWidgetsValue = void 0;
var Wa = new s.Model.ModelFactory(G);
var S = e,
    vt = class vt extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(vt, "VariablesRecord");
var L = vt;
L.init();
var Ct = class Ct extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Ct, "WidgetsRecord");
var xt = Ct,
    _ = class _ extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return xt
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0), _._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
a(_, "Model");
var k = _;
k._hasValidationWidgetsValue = void 0;
var Ua = new S.Model.ModelFactory(k);
var o = e,
    Wt = class Wt extends o.DataTypes.GenericRecord {
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
a(Wt, "VariablesRecord");
var U = Wt;
U.init();
var Ot = class Ot extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PasswordInput7: o.Model.ValidationWidgetRecord
        }
    }
};
a(Ot, "WidgetsRecord");
var Bt = Ot,
    Pt = class Pt extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return Bt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "Platform" in t && (this.variables.platformIn = t.Platform, "_platformInDataFetchStatus" in t && (this.variables._platformInDataFetchStatus = t._platformInDataFetchStatus))
        }
    };
a(Pt, "Model");
var N = Pt;
N._hasValidationWidgetsValue = void 0;
var ja = new o.Model.ModelFactory(N);
var T = e,
    w = class w extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowInfo", "showInfoVar", "ShowInfo", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new w(new w.RecordClass({
                showInfoVar: T.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(w, "VariablesRecord");
var z = w;
z.init();
var At = class At extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(At, "WidgetsRecord");
var Rt = At,
    Gt = class Gt extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return Rt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(Gt, "Model");
var E = Gt;
E._hasValidationWidgetsValue = void 0;
var Qa = new T.Model.ModelFactory(E);
var D = e,
    kt = class kt extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InfoMessage", "infoMessageIn", "InfoMessage", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", "_infoMessageInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(kt, "VariablesRecord");
var H = kt;
H.init();
var Ut = class Ut extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Ut, "WidgetsRecord");
var Lt = Ut,
    Nt = class Nt extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
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
a(Nt, "Model");
var j = Nt;
j._hasValidationWidgetsValue = void 0;
var $a = new D.Model.ModelFactory(j);
var h = e,
    Ht = class Ht extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InformationMessage", "informationMessageIn", "InformationMessage", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_informationMessageInDataFetchStatus", "_informationMessageInDataFetchStatus", "_informationMessageInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Link", "linkIn", "Link", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_linkInDataFetchStatus", "_linkInDataFetchStatus", "_linkInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowBanner", "showBannerIn", "ShowBanner", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showBannerInDataFetchStatus", "_showBannerInDataFetchStatus", "_showBannerInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ht, "VariablesRecord");
var q = Ht;
q.init();
var jt = class jt extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(jt, "WidgetsRecord");
var zt = jt,
    qt = class qt extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return zt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "InformationMessage" in t && (this.variables.informationMessageIn = t.InformationMessage, "_informationMessageInDataFetchStatus" in t && (this.variables._informationMessageInDataFetchStatus = t._informationMessageInDataFetchStatus)), "Link" in t && (this.variables.linkIn = t.Link, "_linkInDataFetchStatus" in t && (this.variables._linkInDataFetchStatus = t._linkInDataFetchStatus)), "ShowBanner" in t && (this.variables.showBannerIn = t.ShowBanner, "_showBannerInDataFetchStatus" in t && (this.variables._showBannerInDataFetchStatus = t._showBannerInDataFetchStatus))
        }
    };
a(qt, "Model");
var J = qt;
J._hasValidationWidgetsValue = void 0;
var ee = new h.Model.ModelFactory(J);
var c = e,
    Kt = class Kt extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayLogin", "displayLoginVar", "DisplayLogin", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Kt, "VariablesRecord");
var K = Kt;
K.init();
var Qt = class Qt extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Qt, "WidgetsRecord");
var Jt = Qt,
    g = class g extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return Jt
        }
        static get hasValidationWidgets() {
            return g._hasValidationWidgetsValue === void 0 && (g._hasValidationWidgetsValue = void 0 || void 0), g._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
a(g, "Model");
var Q = g;
Q._hasValidationWidgetsValue = void 0;
var ce = new c.Model.ModelFactory(Q);
var u = e,
    Yt = class Yt extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDowntime", "isDowntimeIn", "IsDowntime", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", "_isDowntimeInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Yt, "VariablesRecord");
var X = Yt;
X.init();
var Zt = class Zt extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Zt, "WidgetsRecord");
var Xt = Zt,
    V = class V extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return X
        }
        static getWidgetsRecordConstructor() {
            return Xt
        }
        static get hasValidationWidgets() {
            return V._hasValidationWidgetsValue === void 0 && (V._hasValidationWidgetsValue = void 0), V._hasValidationWidgetsValue
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "SelectedAccount" in t && (this.variables.selectedAccountIn = t.SelectedAccount, "_selectedAccountInDataFetchStatus" in t && (this.variables._selectedAccountInDataFetchStatus = t._selectedAccountInDataFetchStatus)), "IsDowntime" in t && (this.variables.isDowntimeIn = t.IsDowntime, "_isDowntimeInDataFetchStatus" in t && (this.variables._isDowntimeInDataFetchStatus = t._isDowntimeInDataFetchStatus))
        }
    };
a(V, "Model");
var Y = V;
Y._hasValidationWidgetsValue = void 0;
var fe = new u.Model.ModelFactory(Y);
var n = e,
    ta = class ta extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Icon", "iconIn", "Icon", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Status", "statusIn", "Status", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ta, "VariablesRecord");
var Z = ta;
Z.init();
var aa = class aa extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(aa, "WidgetsRecord");
var $t = aa,
    ea = class ea extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Z
        }
        static getWidgetsRecordConstructor() {
            return $t
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "IsDisabled" in t && (this.variables.isDisabledIn = t.IsDisabled, "_isDisabledInDataFetchStatus" in t && (this.variables._isDisabledInDataFetchStatus = t._isDisabledInDataFetchStatus))
        }
    };
a(ea, "Model");
var $ = ea;
$._hasValidationWidgetsValue = void 0;
var pe = new n.Model.ModelFactory($);
var f = e,
    ia = class ia extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("status", "statusIn", "status", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ia, "VariablesRecord");
var tt = ia;
tt.init();
var na = class na extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(na, "WidgetsRecord");
var sa = na,
    ra = class ra extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return tt
        }
        static getWidgetsRecordConstructor() {
            return sa
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus)), "status" in t && (this.variables.statusIn = t.status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus))
        }
    };
a(ra, "Model");
var at = ra;
at._hasValidationWidgetsValue = void 0;
var _e = new f.Model.ModelFactory(at);
var p = e,
    ca = class ca extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ca, "VariablesRecord");
var et = ca;
et.init();
var la = class la extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(la, "WidgetsRecord");
var oa = la,
    ua = class ua extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return et
        }
        static getWidgetsRecordConstructor() {
            return oa
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVisible" in t && (this.variables.isVisibleIn = t.IsVisible, "_isVisibleInDataFetchStatus" in t && (this.variables._isVisibleInDataFetchStatus = t._isVisibleInDataFetchStatus))
        }
    };
a(ua, "Model");
var st = ua;
st._hasValidationWidgetsValue = void 0;
var xe = new p.Model.ModelFactory(st);
var l = e,
    ha = class ha extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new ot)
            }, !1, ot), this.attr("Shape", "shapeIn", "Shape", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return M.shape.softRounded
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
a(ha, "VariablesRecord");
var it = ha;
it.init();
var Da = class Da extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Da, "WidgetsRecord");
var da = Da,
    fa = class fa extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return it
        }
        static getWidgetsRecordConstructor() {
            return da
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "ShowHandler" in t && (this.variables.showHandlerIn = t.ShowHandler, "_showHandlerInDataFetchStatus" in t && (this.variables._showHandlerInDataFetchStatus = t._showHandlerInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(fa, "Model");
var nt = fa;
nt._hasValidationWidgetsValue = void 0;
var We = new l.Model.ModelFactory(nt);
export {
    pa as a, ba as b, ga as c, xa as d, Wa as e, Ua as f, ja as g, Qa as h, $a as i, ee as j, ce as k, fe as l, pe as m, _e as n, xe as o, We as p
};