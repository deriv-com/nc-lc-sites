import {
    Vb as s,
    Wb as o,
    qg as d
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as l
} from "./_oschunk-5EPHB76O.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = l,
    n = class n extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceList", "residenceListVar", "ResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new s)
            }, !1, s), this.attr("IsCountrySelectorPopupOpen", "isCountrySelectorPopupOpenVar", "IsCountrySelectorPopupOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedPlaceOfBirth_Mobile", "selectedPlaceOfBirth_MobileVar", "SelectedPlaceOfBirth_Mobile", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("AccountPurposeList", "accountPurposeListVar", "AccountPurposeList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(n, "VariablesRecord");
var a = n;
a.init();
var c = class c extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DesktopForm: e.Model.ValidationWidgetRecord,
            Input_PlaceOfBirth: e.Model.ValidationWidgetRecord,
            Input_Phonenumber: e.Model.ValidationWidgetRecord,
            Dropdown_AccountPurpose: e.Model.ValidationWidgetRecord
        }
    }
};
t(c, "WidgetsRecord");
var i = c,
    u = class u extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(p) {}
    };
t(u, "Model");
var r = u;
r._hasValidationWidgetsValue = void 0;
var h = new e.Model.ModelFactory(r);
export {
    h as a
};