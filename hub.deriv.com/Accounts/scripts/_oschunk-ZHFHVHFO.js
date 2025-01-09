import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var t = c,
    r = class r extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDesktop", "isDesktopIn", "IsDesktop", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDesktopInDataFetchStatus", "_isDesktopInDataFetchStatus", "_isDesktopInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsTablet", "isTabletIn", "IsTablet", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isTabletInDataFetchStatus", "_isTabletInDataFetchStatus", "_isTabletInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(r, "VariablesRecord");
var s = r;
s.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(l, "WidgetsRecord");
var n = l,
    o = class o extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return n
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "IsDesktop" in a && (this.variables.isDesktopIn = a.IsDesktop, "_isDesktopInDataFetchStatus" in a && (this.variables._isDesktopInDataFetchStatus = a._isDesktopInDataFetchStatus)), "IsTablet" in a && (this.variables.isTabletIn = a.IsTablet, "_isTabletInDataFetchStatus" in a && (this.variables._isTabletInDataFetchStatus = a._isTabletInDataFetchStatus))
        }
    };
e(o, "Model");
var i = o;
i._hasValidationWidgetsValue = void 0;
var u = new t.Model.ModelFactory(i);
export {
    u as a
};