import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = l,
    o = class o extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("WhyWeCollectPopup", "whyWeCollectPopupVar", "WhyWeCollectPopup", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsRequired", "isRequiredVar", "IsRequired", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("NotUndrestandCfDLossPopUp", "notUndrestandCfDLossPopUpVar", "NotUndrestandCfDLossPopUp", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(o, "VariablesRecord");
var a = o;
a.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RadioGroup1: t.Model.ValidationWidgetRecord
        }
    }
};
e(n, "WidgetsRecord");
var r = n,
    i = class i extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
e(i, "Model");
var s = i;
s._hasValidationWidgetsValue = void 0;
var y = new t.Model.ModelFactory(s);
export {
    y as a
};