import {
    b as mt
} from "./_oschunk-FZ6FUHBV.js";
import {
    Hf as re,
    Kf as ne,
    Qd as dt,
    Qf as ht,
    ea as ut,
    jd as u,
    le as ft,
    sb as ct
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as a
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var b = a,
    gt = class gt extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(gt, "VariablesRecord");
var E = gt;
E.init();
var pt = class pt extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(pt, "WidgetsRecord");
var Dt = pt,
    h = class h extends b.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return Dt
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0), h._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(h, "Model");
var U = h;
U._hasValidationWidgetsValue = void 0;
var De = new b.Model.ModelFactory(U);
var _ = a,
    St = class St extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(St, "VariablesRecord");
var H = St;
H.init();
var yt = class yt extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(yt, "WidgetsRecord");
var It = yt,
    m = class m extends _.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return It
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0), m._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(m, "Model");
var G = m;
G._hasValidationWidgetsValue = void 0;
var ye = new _.Model.ModelFactory(G);
var c = a,
    C = class C extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new ct)
            }, !1, ct)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new C(new C.RecordClass({
                residenceListResponseVar: c.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(C, "VariablesRecord");
var L = C;
L.init();
var bt = class bt extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(bt, "WidgetsRecord");
var Tt = bt,
    D = class D extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return Tt
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0), D._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(D, "Model");
var A = D;
A._hasValidationWidgetsValue = void 0;
var Fe = new c.Model.ModelFactory(A);
var i = a,
    Ct = class Ct extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Space", "spaceIn", "Space", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return u.space.base
            }, !1), this.attr("_spaceInDataFetchStatus", "_spaceInDataFetchStatus", "_spaceInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return u.color.neutral4
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ct, "VariablesRecord");
var k = Ct;
k.init();
var Mt = class Mt extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Mt, "WidgetsRecord");
var _t = Mt,
    vt = class vt extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return _t
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVertical" in t && (this.variables.isVerticalIn = t.IsVertical, "_isVerticalInDataFetchStatus" in t && (this.variables._isVerticalInDataFetchStatus = t._isVerticalInDataFetchStatus)), "Space" in t && (this.variables.spaceIn = t.Space, "_spaceInDataFetchStatus" in t && (this.variables._spaceInDataFetchStatus = t._spaceInDataFetchStatus)), "Color" in t && (this.variables.colorIn = t.Color, "_colorInDataFetchStatus" in t && (this.variables._colorInDataFetchStatus = t._colorInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(vt, "Model");
var q = vt;
q._hasValidationWidgetsValue = void 0;
var We = new i.Model.ModelFactory(q);
var r = a,
    xt = class xt extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new mt)
            }, !1, mt), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return u.carouselNavigation.both
            }, !1), this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new ht)
            }, !1, ht), this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new dt)
            }, !1, dt), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(xt, "VariablesRecord");
var z = xt;
z.init();
var Ot = class Ot extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Ot, "WidgetsRecord");
var Ft = Ot,
    Wt = class Wt extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return Ft
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Navigation" in t && (this.variables.navigationIn = t.Navigation, "_navigationInDataFetchStatus" in t && (this.variables._navigationInDataFetchStatus = t._navigationInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "ItemsPerSlide" in t && (this.variables.itemsPerSlideIn = t.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in t && (this.variables._itemsPerSlideInDataFetchStatus = t._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(Wt, "Model");
var j = Wt;
j._hasValidationWidgetsValue = void 0;
var Re = new r.Model.ModelFactory(j);
var M = a,
    wt = class wt extends M.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(M.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(wt, "VariablesRecord");
var J = wt;
J.init();
var Rt = class Rt extends M.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Rt, "WidgetsRecord");
var Pt = Rt,
    p = class p extends M.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return Pt
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0 || void 0), p._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(p, "Model");
var K = p;
K._hasValidationWidgetsValue = void 0;
var Le = new M.Model.ModelFactory(K);
var n = a,
    Ut = class Ut extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Orientation", "orientationIn", "Orientation", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return u.orientation.horizontal
            }, !1), this.attr("_orientationInDataFetchStatus", "_orientationInDataFetchStatus", "_orientationInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ScrollbarStyle", "scrollbarStyleIn", "ScrollbarStyle", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return u.scrollbarStyle.default
            }, !1), this.attr("_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ut, "VariablesRecord");
var Q = Ut;
Q.init();
var Ht = class Ht extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Ht, "WidgetsRecord");
var Bt = Ht,
    Gt = class Gt extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return Bt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Orientation" in t && (this.variables.orientationIn = t.Orientation, "_orientationInDataFetchStatus" in t && (this.variables._orientationInDataFetchStatus = t._orientationInDataFetchStatus)), "Height" in t && (this.variables.heightIn = t.Height, "_heightInDataFetchStatus" in t && (this.variables._heightInDataFetchStatus = t._heightInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ScrollbarStyle" in t && (this.variables.scrollbarStyleIn = t.ScrollbarStyle, "_scrollbarStyleInDataFetchStatus" in t && (this.variables._scrollbarStyleInDataFetchStatus = t._scrollbarStyleInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(Gt, "Model");
var X = Gt;
X._hasValidationWidgetsValue = void 0;
var ke = new n.Model.ModelFactory(X);
var s = a,
    v = class v extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return re
        }
        static fromStructure(t) {
            return new v(new v.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(v, "GetEventsAggrRec");
var F = v;
F.init();
var Nt = class Nt extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("MaxEvents", "maxEventsIn", "MaxEvents", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 3
        }, !1), this.attr("_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("EventType", "eventTypeIn", "EventType", !0, !1, s.DataTypes.DataTypes.LongInteger, function() {
            return s.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("Languages", "languagesIn", "Languages", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
            return s.DataTypes.ImmutableBase.getData(new s.DataTypes.IntegerList)
        }, !1, s.DataTypes.IntegerList), this.attr("_languagesInDataFetchStatus", "_languagesInDataFetchStatus", "_languagesInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEvents", "getEventsAggr", "GetEvents", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new F)
        }, !0, F)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Nt, "VariablesRecord");
var Y = Nt;
Y.init();
var kt = class kt extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(kt, "WidgetsRecord");
var Lt = kt,
    I = class I extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return Lt
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0 || void 0 || void 0), I._hasValidationWidgetsValue
        }
        setInputs(t) {
            "MaxEvents" in t && (this.variables.maxEventsIn = t.MaxEvents, "_maxEventsInDataFetchStatus" in t && (this.variables._maxEventsInDataFetchStatus = t._maxEventsInDataFetchStatus)), "EventType" in t && (this.variables.eventTypeIn = t.EventType, "_eventTypeInDataFetchStatus" in t && (this.variables._eventTypeInDataFetchStatus = t._eventTypeInDataFetchStatus)), "Languages" in t && (this.variables.languagesIn = t.Languages, "_languagesInDataFetchStatus" in t && (this.variables._languagesInDataFetchStatus = t._languagesInDataFetchStatus))
        }
    };
e(I, "Model");
var Z = I;
Z._hasValidationWidgetsValue = void 0;
var Qe = new s.Model.ModelFactory(Z);
var d = a,
    O = class O extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("NumberOfEvents", "numberOfEventsVar", "NumberOfEvents", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new ft)
            }, !1, ft)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new O(new O.RecordClass({
                numberOfEventsVar: d.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(O, "VariablesRecord");
var $ = O;
$.init();
var zt = class zt extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(zt, "WidgetsRecord");
var qt = zt,
    S = class S extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $
        }
        static getWidgetsRecordConstructor() {
            return qt
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(S, "Model");
var tt = S;
tt._hasValidationWidgetsValue = void 0;
var Ze = new d.Model.ModelFactory(tt);
var f = a,
    W = class W extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("OS", "oSVar", "OS", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new W(new W.RecordClass({
                oSVar: f.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(W, "VariablesRecord");
var et = W;
et.init();
var Jt = class Jt extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Jt, "WidgetsRecord");
var jt = Jt,
    Kt = class Kt extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return et
        }
        static getWidgetsRecordConstructor() {
            return jt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
e(Kt, "Model");
var at = Kt;
at._hasValidationWidgetsValue = void 0;
var sa = new f.Model.ModelFactory(at);
var o = a,
    P = class P extends o.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(o.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return ne
        }
        static fromStructure(t) {
            return new P(new P.RecordClass({
                RecordListType: o.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(P, "GetAffiliateLinksAggrRec");
var R = P;
R.init();
var w = class w extends o.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAffiliateLinks", "getAffiliateLinksAggr", "GetAffiliateLinks", !0, !0, o.DataTypes.DataTypes.Record, function() {
            return o.DataTypes.ImmutableBase.getData(new R)
        }, !0, R)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new w(new w.RecordClass({
            getAffiliateLinksAggr: o.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
e(w, "VariablesRecord");
var st = w;
st.init();
var Xt = class Xt extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Xt, "WidgetsRecord");
var Qt = Xt,
    y = class y extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return st
        }
        static getWidgetsRecordConstructor() {
            return Qt
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0), y._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(y, "Model");
var rt = y;
rt._hasValidationWidgetsValue = void 0;
var ua = new o.Model.ModelFactory(rt);
var B = a,
    Zt = class Zt extends B.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(B.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Zt, "VariablesRecord");
var nt = Zt;
nt.init();
var $t = class $t extends B.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e($t, "WidgetsRecord");
var Yt = $t,
    T = class T extends B.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return nt
        }
        static getWidgetsRecordConstructor() {
            return Yt
        }
        static get hasValidationWidgets() {
            return T._hasValidationWidgetsValue === void 0 && (T._hasValidationWidgetsValue = void 0), T._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(T, "Model");
var it = T;
it._hasValidationWidgetsValue = void 0;
var ma = new B.Model.ModelFactory(it);
var l = a,
    ee = class ee extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("userInput", "userInputVar", "userInput", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new ut)
            }, !1, ut), this.attr("requiredInputError", "requiredInputErrorVar", "requiredInputError", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isSubmitting", "isSubmittingVar", "isSubmitting", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(ee, "VariablesRecord");
var ot = ee;
ot.init();
var ae = class ae extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CFDPasswordInput: l.Model.ValidationWidgetRecord
        }
    }
};
e(ae, "WidgetsRecord");
var te = ae,
    se = class se extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ot
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
e(se, "Model");
var lt = se;
lt._hasValidationWidgetsValue = void 0;
var _a = new l.Model.ModelFactory(lt);
export {
    De as a, ye as b, Fe as c, We as d, Re as e, Le as f, ke as g, Qe as h, Ze as i, sa as j, ua as k, ma as l, _a as m
};