import {
    Gj as l,
    Ya as c,
    Yj as L,
    te as d,
    zg as W
} from "./_oschunk-UATY3RVV.js";
import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var u = n,
    O = class O extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CurrentStep", "currentStepIn", "CurrentStep", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(O, "VariablesRecord");
var T = O;
T.init();
var R = class R extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(R, "WidgetsRecord");
var C = R,
    f = class f extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return f._hasValidationWidgetsValue === void 0 && (f._hasValidationWidgetsValue = void 0 || void 0), f._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CurrentStep" in t && (this.variables.currentStepIn = t.CurrentStep, "_currentStepInDataFetchStatus" in t && (this.variables._currentStepInDataFetchStatus = t._currentStepInDataFetchStatus))
        }
    };
a(f, "Model");
var h = f;
h._hasValidationWidgetsValue = void 0;
var St = new u.Model.ModelFactory(h);
var e = n,
    U = class U extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StateListInput", "stateListInputVar", "StateListInput", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("ShowTitle", "showTitleIn", "ShowTitle", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AddressField", "addressFieldIn", "AddressField", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_addressFieldInDataFetchStatus", "_addressFieldInDataFetchStatus", "_addressFieldInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TownCityField", "townCityFieldIn", "TownCityField", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_townCityFieldInDataFetchStatus", "_townCityFieldInDataFetchStatus", "_townCityFieldInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PostalZipCodeField", "postalZipCodeFieldIn", "PostalZipCodeField", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("_postalZipCodeFieldInDataFetchStatus", "_postalZipCodeFieldInDataFetchStatus", "_postalZipCodeFieldInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedState", "selectedStateIn", "SelectedState", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("_selectedStateInDataFetchStatus", "_selectedStateInDataFetchStatus", "_selectedStateInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(U, "VariablesRecord");
var y = U;
y.init();
var E = class E extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            AddressDetailsform: e.Model.ValidationWidgetRecord,
            Input_Address: e.Model.ValidationWidgetRecord,
            Input_TownCity: e.Model.ValidationWidgetRecord,
            Input_PostalZipCode: e.Model.ValidationWidgetRecord
        }
    }
};
a(E, "WidgetsRecord");
var B = E,
    Z = class Z extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "ShowTitle" in t && (this.variables.showTitleIn = t.ShowTitle, "_showTitleInDataFetchStatus" in t && (this.variables._showTitleInDataFetchStatus = t._showTitleInDataFetchStatus)), "AddressField" in t && (this.variables.addressFieldIn = t.AddressField, "_addressFieldInDataFetchStatus" in t && (this.variables._addressFieldInDataFetchStatus = t._addressFieldInDataFetchStatus)), "TownCityField" in t && (this.variables.townCityFieldIn = t.TownCityField, "_townCityFieldInDataFetchStatus" in t && (this.variables._townCityFieldInDataFetchStatus = t._townCityFieldInDataFetchStatus)), "PostalZipCodeField" in t && (this.variables.postalZipCodeFieldIn = t.PostalZipCodeField, "_postalZipCodeFieldInDataFetchStatus" in t && (this.variables._postalZipCodeFieldInDataFetchStatus = t._postalZipCodeFieldInDataFetchStatus)), "SelectedState" in t && (this.variables.selectedStateIn = t.SelectedState, "_selectedStateInDataFetchStatus" in t && (this.variables._selectedStateInDataFetchStatus = t._selectedStateInDataFetchStatus))
        }
    };
a(Z, "Model");
var _ = Z;
_._hasValidationWidgetsValue = void 0;
var Mt = new e.Model.ModelFactory(_);
var r = n,
    N = class N extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowError", "showErrorVar", "ShowError", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedDocument", "selectedDocumentVar", "SelectedDocument", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("SuppoertedDocuemntList", "suppoertedDocuemntListVar", "SuppoertedDocuemntList", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new L)
            }, !1, L), this.attr("DocumentList", "documentListIn", "DocumentList", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new r.DataTypes.TextList)
            }, !1, r.DataTypes.TextList), this.attr("_documentListInDataFetchStatus", "_documentListInDataFetchStatus", "_documentListInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(N, "VariablesRecord");
var I = N;
I.init();
var z = class z extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var G = z,
    p = class p extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0 || void 0), p._hasValidationWidgetsValue
        }
        setInputs(t) {
            "DocumentList" in t && (this.variables.documentListIn = t.DocumentList, "_documentListInDataFetchStatus" in t && (this.variables._documentListInDataFetchStatus = t._documentListInDataFetchStatus))
        }
    };
a(p, "Model");
var g = p;
g._hasValidationWidgetsValue = void 0;
var vt = new r.Model.ModelFactory(g);
var i = n,
    H = class H extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDroppedDocument", "isDroppedDocumentVar", "IsDroppedDocument", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowRequiredError", "showRequiredErrorVar", "ShowRequiredError", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DroppedDocument", "droppedDocumentVar", "DroppedDocument", !0, !1, i.DataTypes.DataTypes.Record, function() {
                return i.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("ShowPopup", "showPopupVar", "ShowPopup", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Isloading", "isloadingVar", "Isloading", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SheetID", "sheetIDVar", "SheetID", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ShowServerError", "showServerErrorVar", "ShowServerError", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(H, "VariablesRecord");
var M = H;
M.init();
var J = class J extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(J, "WidgetsRecord");
var j = J,
    D = class D extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return M
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0 || void 0 || void 0), D._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(D, "Model");
var b = D;
b._hasValidationWidgetsValue = void 0;
var xt = new i.Model.ModelFactory(b);
var o = n,
    X = class X extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SearchedState", "searchedStateVar", "SearchedState", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StateListInput", "stateListInputVar", "StateListInput", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("FilteredList", "filteredListVar", "FilteredList", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SuggestedState", "suggestedStateVar", "SuggestedState", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedState", "selectedStateIn", "SelectedState", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("_selectedStateInDataFetchStatus", "_selectedStateInDataFetchStatus", "_selectedStateInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(X, "VariablesRecord");
var V = X;
V.init();
var Y = class Y extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedState: o.Model.ValidationWidgetRecord
        }
    }
};
a(Y, "WidgetsRecord");
var K = Y,
    $ = class $ extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return K
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "SelectedState" in t && (this.variables.selectedStateIn = t.SelectedState, "_selectedStateInDataFetchStatus" in t && (this.variables._selectedStateInDataFetchStatus = t._selectedStateInDataFetchStatus))
        }
    };
a($, "Model");
var F = $;
F._hasValidationWidgetsValue = void 0;
var Nt = new o.Model.ModelFactory(F);
var s = n,
    et = class et extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UserAddress", "userAddressVar", "UserAddress", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserTownCity", "userTownCityVar", "UserTownCity", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserPostalZip", "userPostalZipVar", "UserPostalZip", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Step2", "step2Var", "Step2", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Step", "stepVar", "Step", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentName", "documentNameVar", "DocumentName", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserStateProvince", "userStateProvinceVar", "UserStateProvince", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("POAVerificationStatus", "pOAVerificationStatusVar", "POAVerificationStatus", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("SetStateListFlag", "setStateListFlagVar", "SetStateListFlag", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AllowResubmission", "allowResubmissionVar", "AllowResubmission", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("LastRejectedReason", "lastRejectedReasonVar", "LastRejectedReason", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("POIVerificationStatus", "pOIVerificationStatusVar", "POIVerificationStatus", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(et, "VariablesRecord");
var A = et;
A.init();
var at = class at extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(at, "WidgetsRecord");
var tt = at,
    m = class m extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return tt
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), m._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(m, "Model");
var v = m;
v._hasValidationWidgetsValue = void 0;
var Kt = new s.Model.ModelFactory(v);
export {
    St as a, Mt as b, vt as c, xt as d, Nt as e, Kt as f
};