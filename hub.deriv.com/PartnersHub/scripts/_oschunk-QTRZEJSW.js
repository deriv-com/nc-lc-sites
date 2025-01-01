import {
    Ve as D,
    gf as tt
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var s = i,
    L = class L extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LeftIcon", "leftIconIn", "LeftIcon", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RightIcon", "rightIconIn", "RightIcon", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsActive", "isActiveIn", "IsActive", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BodyClassName", "bodyClassNameIn", "BodyClassName", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_bodyClassNameInDataFetchStatus", "_bodyClassNameInDataFetchStatus", "_bodyClassNameInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RightIconClassName", "rightIconClassNameIn", "RightIconClassName", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconClassNameInDataFetchStatus", "_rightIconClassNameInDataFetchStatus", "_rightIconClassNameInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(L, "VariablesRecord");
var S = L;
S.init();
var P = class P extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(P, "WidgetsRecord");
var W = P,
    c = class c extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "LeftIcon" in t && (this.variables.leftIconIn = t.LeftIcon, "_leftIconInDataFetchStatus" in t && (this.variables._leftIconInDataFetchStatus = t._leftIconInDataFetchStatus)), "RightIcon" in t && (this.variables.rightIconIn = t.RightIcon, "_rightIconInDataFetchStatus" in t && (this.variables._rightIconInDataFetchStatus = t._rightIconInDataFetchStatus)), "IsActive" in t && (this.variables.isActiveIn = t.IsActive, "_isActiveInDataFetchStatus" in t && (this.variables._isActiveInDataFetchStatus = t._isActiveInDataFetchStatus)), "BodyClassName" in t && (this.variables.bodyClassNameIn = t.BodyClassName, "_bodyClassNameInDataFetchStatus" in t && (this.variables._bodyClassNameInDataFetchStatus = t._bodyClassNameInDataFetchStatus)), "RightIconClassName" in t && (this.variables.rightIconClassNameIn = t.RightIconClassName, "_rightIconClassNameInDataFetchStatus" in t && (this.variables._rightIconClassNameInDataFetchStatus = t._rightIconClassNameInDataFetchStatus))
        }
    };
a(c, "Model");
var g = c;
g._hasValidationWidgetsValue = void 0;
var lt = new s.Model.ModelFactory(g);
var l = i,
    B = class B extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LeftIcon", "leftIconIn", "LeftIcon", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(B, "VariablesRecord");
var T = B;
T.init();
var O = class O extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(O, "WidgetsRecord");
var N = O,
    h = class h extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0), h._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "LeftIcon" in t && (this.variables.leftIconIn = t.LeftIcon, "_leftIconInDataFetchStatus" in t && (this.variables._leftIconInDataFetchStatus = t._leftIconInDataFetchStatus))
        }
    };
a(h, "Model");
var y = h;
y._hasValidationWidgetsValue = void 0;
var ht = new l.Model.ModelFactory(y);
var m = i,
    G = class G extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(G, "VariablesRecord");
var F = G;
F.init();
var k = class k extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(k, "WidgetsRecord");
var A = k,
    w = class w extends m.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return A
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
a(w, "Model");
var v = w;
v._hasValidationWidgetsValue = void 0;
var ft = new m.Model.ModelFactory(v);
var o = i,
    q = class q extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsActive", "isActiveIn", "IsActive", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Icon", "iconIn", "Icon", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(q, "VariablesRecord");
var M = q;
M.init();
var z = class z extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var E = z,
    I = class I extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return M
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0), I._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "IsActive" in t && (this.variables.isActiveIn = t.IsActive, "_isActiveInDataFetchStatus" in t && (this.variables._isActiveInDataFetchStatus = t._isActiveInDataFetchStatus)), "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus))
        }
    };
a(I, "Model");
var C = I;
C._hasValidationWidgetsValue = void 0;
var _t = new o.Model.ModelFactory(C);
var n = i,
    Q = class Q extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LeftIcon", "leftIconIn", "LeftIcon", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", "_leftIconInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RightIcon", "rightIconIn", "RightIcon", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", "_rightIconInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Q, "VariablesRecord");
var p = Q;
p.init();
var X = class X extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(X, "WidgetsRecord");
var J = X,
    d = class d extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "LeftIcon" in t && (this.variables.leftIconIn = t.LeftIcon, "_leftIconInDataFetchStatus" in t && (this.variables._leftIconInDataFetchStatus = t._leftIconInDataFetchStatus)), "RightIcon" in t && (this.variables.rightIconIn = t.RightIcon, "_rightIconInDataFetchStatus" in t && (this.variables._rightIconInDataFetchStatus = t._rightIconInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(d, "Model");
var V = d;
V._hasValidationWidgetsValue = void 0;
var gt = new n.Model.ModelFactory(V);
var e = i,
    _ = class _ extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return tt
        }
        static fromStructure(t) {
            return new _(new _.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(_, "GetLanguagesAggrRec");
var b = _;
b.init();
var Z = class Z extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoggingOut", "isLoggingOutVar", "IsLoggingOut", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("Message", "messageVar", "Message", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return "Click to copy ID"
        }, !1), this.attr("LanguageModal", "languageModalVar", "LanguageModal", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("ProfileModal", "profileModalVar", "ProfileModal", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("CurrentScreen", "currentScreenIn", "CurrentScreen", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("_currentScreenInDataFetchStatus", "_currentScreenInDataFetchStatus", "_currentScreenInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("HasCustomMobileHeader", "hasCustomMobileHeaderIn", "HasCustomMobileHeader", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_hasCustomMobileHeaderInDataFetchStatus", "_hasCustomMobileHeaderInDataFetchStatus", "_hasCustomMobileHeaderInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("HasCustomMobileFooter", "hasCustomMobileFooterIn", "HasCustomMobileFooter", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_hasCustomMobileFooterInDataFetchStatus", "_hasCustomMobileFooterInDataFetchStatus", "_hasCustomMobileFooterInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetLanguages", "getLanguagesAggr", "GetLanguages", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new b)
        }, !0, b)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(Z, "VariablesRecord");
var H = Z;
H.init();
var $ = class $ extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a($, "WidgetsRecord");
var Y = $,
    f = class f extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return f._hasValidationWidgetsValue === void 0 && (f._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), f._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CurrentScreen" in t && (this.variables.currentScreenIn = t.CurrentScreen, "_currentScreenInDataFetchStatus" in t && (this.variables._currentScreenInDataFetchStatus = t._currentScreenInDataFetchStatus)), "HasCustomMobileHeader" in t && (this.variables.hasCustomMobileHeaderIn = t.HasCustomMobileHeader, "_hasCustomMobileHeaderInDataFetchStatus" in t && (this.variables._hasCustomMobileHeaderInDataFetchStatus = t._hasCustomMobileHeaderInDataFetchStatus)), "HasCustomMobileFooter" in t && (this.variables.hasCustomMobileFooterIn = t.HasCustomMobileFooter, "_hasCustomMobileFooterInDataFetchStatus" in t && (this.variables._hasCustomMobileFooterInDataFetchStatus = t._hasCustomMobileFooterInDataFetchStatus))
        }
    };
a(f, "Model");
var x = f;
x._hasValidationWidgetsValue = void 0;
var Ht = new e.Model.ModelFactory(x);
export {
    lt as a, ht as b, ft as c, _t as d, gt as e, Ht as f
};