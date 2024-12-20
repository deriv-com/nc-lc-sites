import {
    ia as i
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var c = i,
    V = class V extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(V, "VariablesRecord");
var h = V;
h.init();
var I = class I extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(I, "WidgetsRecord");
var _ = I,
    l = class l extends c.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(l, "Model");
var f = l;
f._hasValidationWidgetsValue = void 0;
var U = new c.Model.ModelFactory(f);
var a = i,
    M = class M extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ButtonText", "buttonTextIn", "ButtonText", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(M, "VariablesRecord");
var T = M;
T.init();
var x = class x extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(x, "WidgetsRecord");
var b = x,
    o = class o extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {
            "PageTitle" in t && (this.variables.pageTitleIn = t.PageTitle, "_pageTitleInDataFetchStatus" in t && (this.variables._pageTitleInDataFetchStatus = t._pageTitleInDataFetchStatus)), "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "ButtonText" in t && (this.variables.buttonTextIn = t.ButtonText, "_buttonTextInDataFetchStatus" in t && (this.variables._buttonTextInDataFetchStatus = t._buttonTextInDataFetchStatus))
        }
    };
e(o, "Model");
var p = o;
p._hasValidationWidgetsValue = void 0;
var q = new a.Model.ModelFactory(p);
var u = i,
    B = class B extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(B, "VariablesRecord");
var g = B;
g.init();
var w = class w extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(w, "WidgetsRecord");
var v = w,
    n = class n extends u.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(n, "Model");
var m = n;
m._hasValidationWidgetsValue = void 0;
var Y = new u.Model.ModelFactory(m);
var s = i,
    O = class O extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowScreen", "showScreenVar", "ShowScreen", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("WIthdrawalPageTitle", "wIthdrawalPageTitleVar", "WIthdrawalPageTitle", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return "Withdrawal"
            }, !1), this.attr("Title", "titleVar", "Title", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return "Withdrawals paused"
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(O, "VariablesRecord");
var D = O;
D.init();
var k = class k extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(k, "WidgetsRecord");
var C = k,
    d = class d extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return d._hasValidationWidgetsValue === void 0 && (d._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), d._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(d, "Model");
var W = d;
W._hasValidationWidgetsValue = void 0;
var st = new s.Model.ModelFactory(W);
export {
    U as a, q as b, Y as c, st as d
};