import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = n,
    f = class f extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StickyHeader", "stickyHeaderIn", "StickyHeader", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StickyFooter", "stickyFooterIn", "StickyFooter", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(f, "VariablesRecord");
var c = f;
c.init();
var y = class y extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(y, "WidgetsRecord");
var m = y,
    o = class o extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(t) {
            "StickyHeader" in t && (this.variables.stickyHeaderIn = t.StickyHeader, "_stickyHeaderInDataFetchStatus" in t && (this.variables._stickyHeaderInDataFetchStatus = t._stickyHeaderInDataFetchStatus)), "StickyFooter" in t && (this.variables.stickyFooterIn = t.StickyFooter, "_stickyFooterInDataFetchStatus" in t && (this.variables._stickyFooterInDataFetchStatus = t._stickyFooterInDataFetchStatus))
        }
    };
a(o, "Model");
var l = o;
l._hasValidationWidgetsValue = void 0;
var k = new e.Model.ModelFactory(l);
var s = n,
    r = class r extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new r(new r.RecordClass({
                isLogoutModalOpenVar: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(r, "VariablesRecord");
var d = r;
d.init();
var h = class h extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(h, "WidgetsRecord");
var p = h,
    i = class i extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(i, "Model");
var u = i;
u._hasValidationWidgetsValue = void 0;
var b = new s.Model.ModelFactory(u);
export {
    k as a, b
};