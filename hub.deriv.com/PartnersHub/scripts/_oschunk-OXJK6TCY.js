import {
    Ab as c
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = r,
    p = class p extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CreatePassword", "createPasswordVar", "CreatePassword", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isLoading", "isLoadingIn", "isLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(p, "VariablesRecord");
var o = p;
o.init();
var D = class D extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            MobilePasswordField: t.Model.ValidationWidgetRecord
        }
    }
};
s(D, "WidgetsRecord");
var u = D,
    h = class h extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {
            "isLoading" in a && (this.variables.isLoadingIn = a.isLoading, "_isLoadingInDataFetchStatus" in a && (this.variables._isLoadingInDataFetchStatus = a._isLoadingInDataFetchStatus))
        }
    };
s(h, "Model");
var n = h;
n._hasValidationWidgetsValue = void 0;
var P = new t.Model.ModelFactory(n);
var e = r,
    g = class g extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Residence", "residenceIn", "Residence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_residenceInDataFetchStatus", "_residenceInDataFetchStatus", "_residenceInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Citizenship", "citizenshipIn", "Citizenship", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_citizenshipInDataFetchStatus", "_citizenshipInDataFetchStatus", "_citizenshipInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(g, "VariablesRecord");
var l = g;
l.init();
var y = class y extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(y, "WidgetsRecord");
var m = y,
    i = class i extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(a) {
            "Residence" in a && (this.variables.residenceIn = e.DataConversion.ServerDataConverter.from(a.Residence, e.DataTypes.DataTypes.Text)), "Citizenship" in a && (this.variables.citizenshipIn = e.DataConversion.ServerDataConverter.from(a.Citizenship, e.DataTypes.DataTypes.Text))
        }
    };
s(i, "Model");
var d = i;
d._hasValidationWidgetsValue = void 0;
var x = new e.Model.ModelFactory(d);
export {
    P as a, x as b
};