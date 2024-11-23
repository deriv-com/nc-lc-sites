import {
    ia as n
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var o = n,
    B = class B extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StickyHeader", "stickyHeaderIn", "StickyHeader", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StickyFooter", "stickyFooterIn", "StickyFooter", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(B, "VariablesRecord");
var f = B;
f.init();
var T = class T extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(T, "WidgetsRecord");
var g = T,
    r = class r extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {
            "StickyHeader" in t && (this.variables.stickyHeaderIn = t.StickyHeader, "_stickyHeaderInDataFetchStatus" in t && (this.variables._stickyHeaderInDataFetchStatus = t._stickyHeaderInDataFetchStatus)), "StickyFooter" in t && (this.variables.stickyFooterIn = t.StickyFooter, "_stickyFooterInDataFetchStatus" in t && (this.variables._stickyFooterInDataFetchStatus = t._stickyFooterInDataFetchStatus))
        }
    };
a(r, "Model");
var m = r;
m._hasValidationWidgetsValue = void 0;
var G = new o.Model.ModelFactory(m);
var i = n,
    d = class d extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new d(new d.RecordClass({
                isLogoutModalOpenVar: i.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(d, "VariablesRecord");
var D = d;
D.init();
var b = class b extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(b, "WidgetsRecord");
var F = b,
    u = class u extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(u, "Model");
var y = u;
y._hasValidationWidgetsValue = void 0;
var Q = new i.Model.ModelFactory(y);
var e = n,
    O = class O extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLeftButton", "showLeftButtonIn", "ShowLeftButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowRightButton", "showRightButtonIn", "ShowRightButton", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CustomRightIcon", "customRightIconIn", "CustomRightIcon", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(O, "VariablesRecord");
var I = O;
I.init();
var k = class k extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(k, "WidgetsRecord");
var V = k,
    l = class l extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShowLeftButton" in t && (this.variables.showLeftButtonIn = t.ShowLeftButton, "_showLeftButtonInDataFetchStatus" in t && (this.variables._showLeftButtonInDataFetchStatus = t._showLeftButtonInDataFetchStatus)), "ShowRightButton" in t && (this.variables.showRightButtonIn = t.ShowRightButton, "_showRightButtonInDataFetchStatus" in t && (this.variables._showRightButtonInDataFetchStatus = t._showRightButtonInDataFetchStatus)), "CustomRightIcon" in t && (this.variables.customRightIconIn = t.CustomRightIcon, "_customRightIconInDataFetchStatus" in t && (this.variables._customRightIconInDataFetchStatus = t._customRightIconInDataFetchStatus))
        }
    };
a(l, "Model");
var S = l;
S._hasValidationWidgetsValue = void 0;
var $ = new e.Model.ModelFactory(S);
var s = n,
    C = class C extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PrimaryButtonLabel", "primaryButtonLabelIn", "PrimaryButtonLabel", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_primaryButtonLabelInDataFetchStatus", "_primaryButtonLabelInDataFetchStatus", "_primaryButtonLabelInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SecondaryButtonLabel", "secondaryButtonLabelIn", "SecondaryButtonLabel", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_secondaryButtonLabelInDataFetchStatus", "_secondaryButtonLabelInDataFetchStatus", "_secondaryButtonLabelInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldHideOnDesktop", "shouldHideOnDesktopIn", "ShouldHideOnDesktop", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_shouldHideOnDesktopInDataFetchStatus", "_shouldHideOnDesktopInDataFetchStatus", "_shouldHideOnDesktopInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(C, "VariablesRecord");
var _ = C;
_.init();
var L = class L extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(L, "WidgetsRecord");
var v = L,
    c = class c extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0 || void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "PrimaryButtonLabel" in t && (this.variables.primaryButtonLabelIn = t.PrimaryButtonLabel, "_primaryButtonLabelInDataFetchStatus" in t && (this.variables._primaryButtonLabelInDataFetchStatus = t._primaryButtonLabelInDataFetchStatus)), "SecondaryButtonLabel" in t && (this.variables.secondaryButtonLabelIn = t.SecondaryButtonLabel, "_secondaryButtonLabelInDataFetchStatus" in t && (this.variables._secondaryButtonLabelInDataFetchStatus = t._secondaryButtonLabelInDataFetchStatus)), "ShouldHideOnDesktop" in t && (this.variables.shouldHideOnDesktopIn = t.ShouldHideOnDesktop, "_shouldHideOnDesktopInDataFetchStatus" in t && (this.variables._shouldHideOnDesktopInDataFetchStatus = t._shouldHideOnDesktopInDataFetchStatus))
        }
    };
a(c, "Model");
var p = c;
p._hasValidationWidgetsValue = void 0;
var st = new s.Model.ModelFactory(p);
export {
    G as a, Q as b, $ as c, st as d
};