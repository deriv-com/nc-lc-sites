import {
    e as g
} from "./_oschunk-OOUVJ7PM.js";
import {
    Jb as y,
    Nd as _,
    Zd as p
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as i
} from "./_oschunk-5EPHB76O.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var n = i,
    b = class b extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(b, "VariablesRecord");
var c = b;
c.init();
var m = class m extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(m, "WidgetsRecord");
var C = m,
    x = class x extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsVertical" in t && (this.variables.isVerticalIn = t.IsVertical, "_isVerticalInDataFetchStatus" in t && (this.variables._isVerticalInDataFetchStatus = t._isVerticalInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(x, "Model");
var d = x;
d._hasValidationWidgetsValue = void 0;
var N = new n.Model.ModelFactory(d);
var r = i,
    V = class V extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(V, "VariablesRecord");
var h = V;
h.init();
var O = class O extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(O, "WidgetsRecord");
var v = O,
    B = class B extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Status" in t && (this.variables.statusIn = t.Status, "_statusInDataFetchStatus" in t && (this.variables._statusInDataFetchStatus = t._statusInDataFetchStatus)), "UseTopLabel" in t && (this.variables.useTopLabelIn = t.UseTopLabel, "_useTopLabelInDataFetchStatus" in t && (this.variables._useTopLabelInDataFetchStatus = t._useTopLabelInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(B, "Model");
var f = B;
f._hasValidationWidgetsValue = void 0;
var j = new r.Model.ModelFactory(f);
var e = i,
    E = class E extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("Progress", "progressIn", "Progress", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return _.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return _.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(E, "VariablesRecord");
var D = E;
D.init();
var w = class w extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(w, "WidgetsRecord");
var W = w,
    L = class L extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Progress" in t && (this.variables.progressIn = t.Progress, "_progressInDataFetchStatus" in t && (this.variables._progressInDataFetchStatus = t._progressInDataFetchStatus)), "ProgressColor" in t && (this.variables.progressColorIn = t.ProgressColor, "_progressColorInDataFetchStatus" in t && (this.variables._progressColorInDataFetchStatus = t._progressColorInDataFetchStatus)), "TrailColor" in t && (this.variables.trailColorIn = t.TrailColor, "_trailColorInDataFetchStatus" in t && (this.variables._trailColorInDataFetchStatus = t._trailColorInDataFetchStatus)), "Thickness" in t && (this.variables.thicknessIn = t.Thickness, "_thicknessInDataFetchStatus" in t && (this.variables._thicknessInDataFetchStatus = t._thicknessInDataFetchStatus)), "OptionalConfigs" in t && (this.variables.optionalConfigsIn = t.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in t && (this.variables._optionalConfigsInDataFetchStatus = t._optionalConfigsInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
s(L, "Model");
var I = L;
I._hasValidationWidgetsValue = void 0;
var Q = new e.Model.ModelFactory(I);
var a = i,
    o = class o extends a.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("IsEnabled", "isEnabledOut", "IsEnabled", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !0)].concat(a.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new o(new o.RecordClass({
                isEnabledOut: a.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
s(o, "HubEnabledCountriesDataActRec");
var u = o;
u.init();
var k = class k extends a.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ShowCloseModal", "showCloseModalVar", "ShowCloseModal", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("RedirectToHub", "redirectToHubVar", "RedirectToHub", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ClientCountry", "clientCountryVar", "ClientCountry", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("HideTitle", "hideTitleIn", "HideTitle", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("Analytics", "analyticsIn", "Analytics", !0, !1, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new y)
        }, !1, y), this.attr("_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("HubEnabledCountries", "hubEnabledCountriesDataAct", "HubEnabledCountries", !0, !0, a.DataTypes.DataTypes.Record, function() {
            return a.DataTypes.ImmutableBase.getData(new u)
        }, !0, u)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
s(k, "VariablesRecord");
var T = k;
T.init();
var P = class P extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(P, "WidgetsRecord");
var R = P,
    l = class l extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return R
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "HideTitle" in t && (this.variables.hideTitleIn = t.HideTitle, "_hideTitleInDataFetchStatus" in t && (this.variables._hideTitleInDataFetchStatus = t._hideTitleInDataFetchStatus)), "Analytics" in t && (this.variables.analyticsIn = t.Analytics, "_analyticsInDataFetchStatus" in t && (this.variables._analyticsInDataFetchStatus = t._analyticsInDataFetchStatus))
        }
    };
s(l, "Model");
var S = l;
S._hasValidationWidgetsValue = void 0;
var et = new a.Model.ModelFactory(S);
export {
    N as a, j as b, Q as c, et as d
};