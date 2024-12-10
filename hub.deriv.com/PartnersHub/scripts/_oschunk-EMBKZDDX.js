import {
    ia as i
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var s = i,
    y = class y extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StickyHeader", "stickyHeaderIn", "StickyHeader", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StickyFooter", "stickyFooterIn", "StickyFooter", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(y, "VariablesRecord");
var l = y;
l.init();
var g = class g extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(g, "WidgetsRecord");
var I = g,
    n = class n extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "StickyHeader" in t && (this.variables.stickyHeaderIn = t.StickyHeader, "_stickyHeaderInDataFetchStatus" in t && (this.variables._stickyHeaderInDataFetchStatus = t._stickyHeaderInDataFetchStatus)), "StickyFooter" in t && (this.variables.stickyFooterIn = t.StickyFooter, "_stickyFooterInDataFetchStatus" in t && (this.variables._stickyFooterInDataFetchStatus = t._stickyFooterInDataFetchStatus))
        }
    };
e(n, "Model");
var h = n;
h._hasValidationWidgetsValue = void 0;
var k = new s.Model.ModelFactory(h);
var o = i,
    u = class u extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new u(new u.RecordClass({
                isLogoutModalOpenVar: o.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(u, "VariablesRecord");
var d = u;
d.init();
var _ = class _ extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(_, "WidgetsRecord");
var S = _,
    r = class r extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(r, "Model");
var f = r;
f._hasValidationWidgetsValue = void 0;
var A = new o.Model.ModelFactory(f);
var a = i,
    T = class T extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLeftButton", "showLeftButtonIn", "ShowLeftButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", "_showLeftButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowRightButton", "showRightButtonIn", "ShowRightButton", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", "_showRightButtonInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CustomRightIcon", "customRightIconIn", "CustomRightIcon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", "_customRightIconInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(T, "VariablesRecord");
var m = T;
m.init();
var F = class F extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(F, "WidgetsRecord");
var p = F,
    c = class c extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return c._hasValidationWidgetsValue === void 0 && (c._hasValidationWidgetsValue = void 0), c._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "ShowLeftButton" in t && (this.variables.showLeftButtonIn = t.ShowLeftButton, "_showLeftButtonInDataFetchStatus" in t && (this.variables._showLeftButtonInDataFetchStatus = t._showLeftButtonInDataFetchStatus)), "ShowRightButton" in t && (this.variables.showRightButtonIn = t.ShowRightButton, "_showRightButtonInDataFetchStatus" in t && (this.variables._showRightButtonInDataFetchStatus = t._showRightButtonInDataFetchStatus)), "CustomRightIcon" in t && (this.variables.customRightIconIn = t.CustomRightIcon, "_customRightIconInDataFetchStatus" in t && (this.variables._customRightIconInDataFetchStatus = t._customRightIconInDataFetchStatus))
        }
    };
e(c, "Model");
var D = c;
D._hasValidationWidgetsValue = void 0;
var z = new a.Model.ModelFactory(D);
export {
    k as a, A as b, z as c
};