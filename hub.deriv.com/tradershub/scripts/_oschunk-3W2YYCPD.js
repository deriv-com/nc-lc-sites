import {
    se as s
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as l
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = l,
    d = class d extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StateList", "stateListVar", "StateList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsStateSelectionPopopOpen", "isStateSelectionPopopOpenVar", "IsStateSelectionPopopOpen", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(d, "VariablesRecord");
var a = d;
a.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            AddressForm: t.Model.ValidationWidgetRecord,
            Input_Address: t.Model.ValidationWidgetRecord,
            Input_Town: t.Model.ValidationWidgetRecord,
            Input_InputState: t.Model.ValidationWidgetRecord,
            Input_PostCode: t.Model.ValidationWidgetRecord
        }
    }
};
e(i, "WidgetsRecord");
var r = i,
    n = class n extends t.Model.BaseViewModel {
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
e(n, "Model");
var o = n;
o._hasValidationWidgetsValue = void 0;
var M = new t.Model.ModelFactory(o);
export {
    M as a
};