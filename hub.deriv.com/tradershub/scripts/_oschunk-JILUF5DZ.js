import {
    Fb as i
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = u,
    l = class l extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("iFrameURL", "iFrameURLVar", "iFrameURL", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("IsDepositLock", "isDepositLockVar", "IsDepositLock", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Description", "descriptionVar", "Description", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ButtonText", "buttonTextVar", "ButtonText", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "Live chat"
            }, !1), this.attr("IsCashierLock", "isCashierLockVar", "IsCashierLock", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(l, "VariablesRecord");
var s = l;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var o = n,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(f) {}
    };
a(e, "Model");
var r = e;
r._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(r);
export {
    D as a
};