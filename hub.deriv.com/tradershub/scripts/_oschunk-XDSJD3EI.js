import {
    Jb as o,
    qb as s
} from "./_oschunk-44PT7RP7.js";
import {
    ia as u
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = u,
    n = class n extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceList", "residenceListVar", "ResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("IsCountrySelectorPopupOpen", "isCountrySelectorPopupOpenVar", "IsCountrySelectorPopupOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TINValidationsResponse", "tINValidationsResponseVar", "TINValidationsResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new s)
            }, !1, s)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(n, "VariablesRecord");
var a = n;
a.init();
var d = class d extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: e.Model.ValidationWidgetRecord,
            Input_InputState: e.Model.ValidationWidgetRecord,
            Input_TIDNumber: e.Model.ValidationWidgetRecord,
            TaxIDConfirmationCheckbox: e.Model.ValidationWidgetRecord
        }
    }
};
t(d, "WidgetsRecord");
var i = d,
    c = class c extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
t(c, "Model");
var r = c;
r._hasValidationWidgetsValue = void 0;
var T = new e.Model.ModelFactory(r);
export {
    T as a
};