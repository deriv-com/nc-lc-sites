import {
    ma as n,
    te as e,
    w as o
} from "./_oschunk-UATY3RVV.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = f,
    h = class h extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ErrorData", "errorDataVar", "ErrorData", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new n)
            }, !1, n), this.attr("FirstNameField", "firstNameFieldIn", "FirstNameField", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_firstNameFieldInDataFetchStatus", "_firstNameFieldInDataFetchStatus", "_firstNameFieldInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LastNameField", "lastNameFieldIn", "LastNameField", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new e)
            }, !1, e), this.attr("_lastNameFieldInDataFetchStatus", "_lastNameFieldInDataFetchStatus", "_lastNameFieldInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DateOfBirthField", "dateOfBirthFieldIn", "DateOfBirthField", !0, !1, a.DataTypes.DataTypes.Record, function() {
                return a.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("_dateOfBirthFieldInDataFetchStatus", "_dateOfBirthFieldInDataFetchStatus", "_dateOfBirthFieldInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowName", "showNameIn", "ShowName", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showNameInDataFetchStatus", "_showNameInDataFetchStatus", "_showNameInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowDOB", "showDOBIn", "ShowDOB", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showDOBInDataFetchStatus", "_showDOBInDataFetchStatus", "_showDOBInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowTitle", "showTitleIn", "ShowTitle", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ButtonText", "buttonTextIn", "ButtonText", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsFormUpdate", "isFormUpdateIn", "IsFormUpdate", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isFormUpdateInDataFetchStatus", "_isFormUpdateInDataFetchStatus", "_isFormUpdateInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(h, "VariablesRecord");
var r = h;
r.init();
var u = class u extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Personaldetailsform: a.Model.ValidationWidgetRecord,
            Input_FirstName: a.Model.ValidationWidgetRecord,
            Input_LastName: a.Model.ValidationWidgetRecord,
            DesktopDate: a.Model.ValidationWidgetRecord,
            MobileDate: a.Model.ValidationWidgetRecord
        }
    }
};
s(u, "WidgetsRecord");
var l = u,
    c = class c extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "FirstNameField" in t && (this.variables.firstNameFieldIn = t.FirstNameField, "_firstNameFieldInDataFetchStatus" in t && (this.variables._firstNameFieldInDataFetchStatus = t._firstNameFieldInDataFetchStatus)), "LastNameField" in t && (this.variables.lastNameFieldIn = t.LastNameField, "_lastNameFieldInDataFetchStatus" in t && (this.variables._lastNameFieldInDataFetchStatus = t._lastNameFieldInDataFetchStatus)), "DateOfBirthField" in t && (this.variables.dateOfBirthFieldIn = t.DateOfBirthField, "_dateOfBirthFieldInDataFetchStatus" in t && (this.variables._dateOfBirthFieldInDataFetchStatus = t._dateOfBirthFieldInDataFetchStatus)), "ShowName" in t && (this.variables.showNameIn = t.ShowName, "_showNameInDataFetchStatus" in t && (this.variables._showNameInDataFetchStatus = t._showNameInDataFetchStatus)), "ShowDOB" in t && (this.variables.showDOBIn = t.ShowDOB, "_showDOBInDataFetchStatus" in t && (this.variables._showDOBInDataFetchStatus = t._showDOBInDataFetchStatus)), "ShowTitle" in t && (this.variables.showTitleIn = t.ShowTitle, "_showTitleInDataFetchStatus" in t && (this.variables._showTitleInDataFetchStatus = t._showTitleInDataFetchStatus)), "ButtonText" in t && (this.variables.buttonTextIn = t.ButtonText, "_buttonTextInDataFetchStatus" in t && (this.variables._buttonTextInDataFetchStatus = t._buttonTextInDataFetchStatus)), "IsFormUpdate" in t && (this.variables.isFormUpdateIn = t.IsFormUpdate, "_isFormUpdateInDataFetchStatus" in t && (this.variables._isFormUpdateInDataFetchStatus = t._isFormUpdateInDataFetchStatus))
        }
    };
s(c, "Model");
var i = c;
i._hasValidationWidgetsValue = void 0;
var b = new a.Model.ModelFactory(i);
export {
    b as a
};