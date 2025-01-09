import {
    Bj as bt,
    Ed as u,
    Fd as A,
    Gj as g,
    Id as _t,
    Ya as S,
    ma as W,
    te as b,
    w as St,
    zg as l
} from "./_oschunk-UATY3RVV.js";
import {
    ia as a
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var v = a,
    Mt = class Mt extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CurrentStep", "currentStepIn", "CurrentStep", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Mt, "VariablesRecord");
var q = Mt;
q.init();
var Vt = class Vt extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Vt, "WidgetsRecord");
var gt = Vt,
    R = class R extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return gt
        }
        static get hasValidationWidgets() {
            return R._hasValidationWidgetsValue === void 0 && (R._hasValidationWidgetsValue = void 0 || void 0), R._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CurrentStep" in t && (this.variables.currentStepIn = t.CurrentStep, "_currentStepInDataFetchStatus" in t && (this.variables._currentStepInDataFetchStatus = t._currentStepInDataFetchStatus))
        }
    };
e(R, "Model");
var H = R;
H._hasValidationWidgetsValue = void 0;
var qe = new v.Model.ModelFactory(H);
var p = a,
    Wt = class Wt extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListInput", "residenceListInputVar", "ResidenceListInput", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldDisplayExitConfimModal", "shouldDisplayExitConfimModalVar", "ShouldDisplayExitConfimModal", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedResidence", "selectedResidenceIn", "SelectedResidence", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_selectedResidenceInDataFetchStatus", "_selectedResidenceInDataFetchStatus", "_selectedResidenceInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Wt, "VariablesRecord");
var Q = Wt;
Q.init();
var At = class At extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(At, "WidgetsRecord");
var vt = At,
    x = class x extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return vt
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), x._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SelectedResidence" in t && (this.variables.selectedResidenceIn = t.SelectedResidence, "_selectedResidenceInDataFetchStatus" in t && (this.variables._selectedResidenceInDataFetchStatus = t._selectedResidenceInDataFetchStatus))
        }
    };
e(x, "Model");
var Y = x;
Y._hasValidationWidgetsValue = void 0;
var Xe = new p.Model.ModelFactory(Y);
var c = a,
    Ot = class Ot extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AcceptDocumentNumber", "acceptDocumentNumberVar", "AcceptDocumentNumber", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedDocument", "selectedDocumentIn", "SelectedDocument", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentNumber", "documentNumberIn", "DocumentNumber", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AdditionalDocument", "additionalDocumentIn", "AdditionalDocument", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_additionalDocumentInDataFetchStatus", "_additionalDocumentInDataFetchStatus", "_additionalDocumentInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ot, "VariablesRecord");
var K = Ot;
K.init();
var Nt = class Nt extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: c.Model.ValidationWidgetRecord,
            Input_Value: c.Model.ValidationWidgetRecord,
            AdditionalDocField: c.Model.ValidationWidgetRecord,
            Checkbox1: c.Model.ValidationWidgetRecord
        }
    }
};
e(Nt, "WidgetsRecord");
var Rt = Nt,
    Pt = class Pt extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return Rt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "SelectedDocument" in t && (this.variables.selectedDocumentIn = t.SelectedDocument, "_selectedDocumentInDataFetchStatus" in t && (this.variables._selectedDocumentInDataFetchStatus = t._selectedDocumentInDataFetchStatus)), "DocumentNumber" in t && (this.variables.documentNumberIn = t.DocumentNumber, "_documentNumberInDataFetchStatus" in t && (this.variables._documentNumberInDataFetchStatus = t._documentNumberInDataFetchStatus)), "AdditionalDocument" in t && (this.variables.additionalDocumentIn = t.AdditionalDocument, "_additionalDocumentInDataFetchStatus" in t && (this.variables._additionalDocumentInDataFetchStatus = t._additionalDocumentInDataFetchStatus)), "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus))
        }
    };
e(Pt, "Model");
var j = Pt;
j._hasValidationWidgetsValue = void 0;
var ta = new c.Model.ModelFactory(j);
var I = a,
    Lt = class Lt extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, I.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedDocument", "selectedDocumentIn", "SelectedDocument", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Lt, "VariablesRecord");
var J = Lt;
J.init();
var wt = class wt extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(wt, "WidgetsRecord");
var Et = wt,
    O = class O extends I.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return Et
        }
        static get hasValidationWidgets() {
            return O._hasValidationWidgetsValue === void 0 && (O._hasValidationWidgetsValue = void 0 || void 0), O._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus)), "SelectedDocument" in t && (this.variables.selectedDocumentIn = t.SelectedDocument, "_selectedDocumentInDataFetchStatus" in t && (this.variables._selectedDocumentInDataFetchStatus = t._selectedDocumentInDataFetchStatus))
        }
    };
e(O, "Model");
var X = O;
X._hasValidationWidgetsValue = void 0;
var ca = new I.Model.ModelFactory(X);
var T = a,
    Gt = class Gt extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("LoadedSuccessfully", "loadedSuccessfullyVar", "LoadedSuccessfully", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedDocument", "selectedDocumentIn", "SelectedDocument", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Gt, "VariablesRecord");
var Z = Gt;
Z.init();
var zt = class zt extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(zt, "WidgetsRecord");
var Ut = zt,
    N = class N extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Z
        }
        static getWidgetsRecordConstructor() {
            return Ut
        }
        static get hasValidationWidgets() {
            return N._hasValidationWidgetsValue === void 0 && (N._hasValidationWidgetsValue = void 0 || void 0), N._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus)), "SelectedDocument" in t && (this.variables.selectedDocumentIn = t.SelectedDocument, "_selectedDocumentInDataFetchStatus" in t && (this.variables._selectedDocumentInDataFetchStatus = t._selectedDocumentInDataFetchStatus))
        }
    };
e(N, "Model");
var $ = N;
$._hasValidationWidgetsValue = void 0;
var ma = new T.Model.ModelFactory($);
var _ = a,
    Qt = class Qt extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("BannerConfig", "bannerConfigVar", "BannerConfig", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new bt)
            }, !1, bt), this.attr("Type", "typeIn", "Type", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Qt, "VariablesRecord");
var tt = Qt;
tt.init();
var Yt = class Yt extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Yt, "WidgetsRecord");
var qt = Yt,
    Kt = class Kt extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return tt
        }
        static getWidgetsRecordConstructor() {
            return qt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Type" in t && (this.variables.typeIn = t.Type, "_typeInDataFetchStatus" in t && (this.variables._typeInDataFetchStatus = t._typeInDataFetchStatus))
        }
    };
e(Kt, "Model");
var et = Kt;
et._hasValidationWidgetsValue = void 0;
var ya = new _.Model.ModelFactory(et);
var d = a,
    Xt = class Xt extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DocumentNumber", "documentNumberIn", "DocumentNumber", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExpiryDate", "expiryDateIn", "ExpiryDate", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new St)
            }, !1, St), this.attr("_expiryDateInDataFetchStatus", "_expiryDateInDataFetchStatus", "_expiryDateInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedIdentityDocument", "selectedIdentityDocumentIn", "SelectedIdentityDocument", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Xt, "VariablesRecord");
var at = Xt;
at.init();
var Zt = class Zt extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: d.Model.ValidationWidgetRecord,
            Input_DocumentNumber: d.Model.ValidationWidgetRecord,
            Desktop_Expirydate: d.Model.ValidationWidgetRecord,
            Mobile_Expirydate: d.Model.ValidationWidgetRecord
        }
    }
};
e(Zt, "WidgetsRecord");
var jt = Zt,
    $t = class $t extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return at
        }
        static getWidgetsRecordConstructor() {
            return jt
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "DocumentNumber" in t && (this.variables.documentNumberIn = t.DocumentNumber, "_documentNumberInDataFetchStatus" in t && (this.variables._documentNumberInDataFetchStatus = t._documentNumberInDataFetchStatus)), "ExpiryDate" in t && (this.variables.expiryDateIn = t.ExpiryDate, "_expiryDateInDataFetchStatus" in t && (this.variables._expiryDateInDataFetchStatus = t._expiryDateInDataFetchStatus)), "SelectedIdentityDocument" in t && (this.variables.selectedIdentityDocumentIn = t.SelectedIdentityDocument, "_selectedIdentityDocumentInDataFetchStatus" in t && (this.variables._selectedIdentityDocumentInDataFetchStatus = t._selectedIdentityDocumentInDataFetchStatus))
        }
    };
e($t, "Model");
var st = $t;
st._hasValidationWidgetsValue = void 0;
var _a = new d.Model.ModelFactory(st);
var r = a,
    se = class se extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDroppedFirstDocument", "isDroppedFirstDocumentVar", "IsDroppedFirstDocument", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DocumentQuantity", "documentQuantityVar", "DocumentQuantity", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("PageType", "pageTypeVar", "PageType", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsDroppedSecondDocument", "isDroppedSecondDocumentVar", "IsDroppedSecondDocument", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowRequiredError", "showRequiredErrorVar", "ShowRequiredError", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FirstDocumentFile", "firstDocumentFileVar", "FirstDocumentFile", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("SecondDocumentFile", "secondDocumentFileVar", "SecondDocumentFile", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("DocumentType", "documentTypeIn", "DocumentType", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentTypeInDataFetchStatus", "_documentTypeInDataFetchStatus", "_documentTypeInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentPages", "documentPagesIn", "DocumentPages", !0, !1, r.DataTypes.DataTypes.RecordList, function() {
                return r.DataTypes.ImmutableBase.getData(new r.DataTypes.TextList)
            }, !1, r.DataTypes.TextList), this.attr("_documentPagesInDataFetchStatus", "_documentPagesInDataFetchStatus", "_documentPagesInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentName", "documentNameIn", "DocumentName", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentNameInDataFetchStatus", "_documentNameInDataFetchStatus", "_documentNameInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(se, "VariablesRecord");
var ot = se;
ot.init();
var oe = class oe extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(oe, "WidgetsRecord");
var te = oe,
    P = class P extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ot
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return P._hasValidationWidgetsValue === void 0 && (P._hasValidationWidgetsValue = void 0), P._hasValidationWidgetsValue
        }
        setInputs(t) {
            "DocumentType" in t && (this.variables.documentTypeIn = t.DocumentType, "_documentTypeInDataFetchStatus" in t && (this.variables._documentTypeInDataFetchStatus = t._documentTypeInDataFetchStatus)), "DocumentPages" in t && (this.variables.documentPagesIn = t.DocumentPages, "_documentPagesInDataFetchStatus" in t && (this.variables._documentPagesInDataFetchStatus = t._documentPagesInDataFetchStatus)), "DocumentName" in t && (this.variables.documentNameIn = t.DocumentName, "_documentNameInDataFetchStatus" in t && (this.variables._documentNameInDataFetchStatus = t._documentNameInDataFetchStatus))
        }
    };
e(P, "Model");
var rt = P;
rt._hasValidationWidgetsValue = void 0;
var Ma = new r.Model.ModelFactory(rt);
var h = a,
    ce = class ce extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowRequiredError", "showRequiredErrorVar", "ShowRequiredError", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Selfie", "selfieVar", "Selfie", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("IsRequestInProcess", "isRequestInProcessVar", "IsRequestInProcess", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AllowUpload", "allowUploadIn", "AllowUpload", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_allowUploadInDataFetchStatus", "_allowUploadInDataFetchStatus", "_allowUploadInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(ce, "VariablesRecord");
var nt = ce;
nt.init();
var ie = class ie extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ie, "WidgetsRecord");
var re = ie,
    E = class E extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return nt
        }
        static getWidgetsRecordConstructor() {
            return re
        }
        static get hasValidationWidgets() {
            return E._hasValidationWidgetsValue === void 0 && (E._hasValidationWidgetsValue = void 0 || void 0), E._hasValidationWidgetsValue
        }
        setInputs(t) {
            "AllowUpload" in t && (this.variables.allowUploadIn = t.AllowUpload, "_allowUploadInDataFetchStatus" in t && (this.variables._allowUploadInDataFetchStatus = t._allowUploadInDataFetchStatus))
        }
    };
e(E, "Model");
var ct = E;
ct._hasValidationWidgetsValue = void 0;
var Aa = new h.Model.ModelFactory(ct);
var i = a,
    de = class de extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsDroppedDocument", "isDroppedDocumentVar", "IsDroppedDocument", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowRequiredError", "showRequiredErrorVar", "ShowRequiredError", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedFile", "selectedFileVar", "SelectedFile", !0, !1, i.DataTypes.DataTypes.Record, function() {
                return i.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("DocumentType", "documentTypeIn", "DocumentType", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentTypeInDataFetchStatus", "_documentTypeInDataFetchStatus", "_documentTypeInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentPages", "documentPagesIn", "DocumentPages", !0, !1, i.DataTypes.DataTypes.RecordList, function() {
                return i.DataTypes.ImmutableBase.getData(new i.DataTypes.TextList)
            }, !1, i.DataTypes.TextList), this.attr("_documentPagesInDataFetchStatus", "_documentPagesInDataFetchStatus", "_documentPagesInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentPageType", "documentPageTypeIn", "DocumentPageType", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentPageTypeInDataFetchStatus", "_documentPageTypeInDataFetchStatus", "_documentPageTypeInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentName", "documentNameIn", "DocumentName", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentNameInDataFetchStatus", "_documentNameInDataFetchStatus", "_documentNameInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(de, "VariablesRecord");
var it = de;
it.init();
var De = class De extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(De, "WidgetsRecord");
var ue = De,
    B = class B extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return it
        }
        static getWidgetsRecordConstructor() {
            return ue
        }
        static get hasValidationWidgets() {
            return B._hasValidationWidgetsValue === void 0 && (B._hasValidationWidgetsValue = void 0), B._hasValidationWidgetsValue
        }
        setInputs(t) {
            "DocumentType" in t && (this.variables.documentTypeIn = t.DocumentType, "_documentTypeInDataFetchStatus" in t && (this.variables._documentTypeInDataFetchStatus = t._documentTypeInDataFetchStatus)), "DocumentPages" in t && (this.variables.documentPagesIn = t.DocumentPages, "_documentPagesInDataFetchStatus" in t && (this.variables._documentPagesInDataFetchStatus = t._documentPagesInDataFetchStatus)), "DocumentPageType" in t && (this.variables.documentPageTypeIn = t.DocumentPageType, "_documentPageTypeInDataFetchStatus" in t && (this.variables._documentPageTypeInDataFetchStatus = t._documentPageTypeInDataFetchStatus)), "DocumentName" in t && (this.variables.documentNameIn = t.DocumentName, "_documentNameInDataFetchStatus" in t && (this.variables._documentNameInDataFetchStatus = t._documentNameInDataFetchStatus))
        }
    };
e(B, "Model");
var ut = B;
ut._hasValidationWidgetsValue = void 0;
var Na = new i.Model.ModelFactory(ut);
var o = a,
    pe = class pe extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ManualStepPos", "manualStepPosVar", "ManualStepPos", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelfieImage", "selfieImageVar", "SelfieImage", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("FrontImage", "frontImageVar", "FrontImage", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("BackImage", "backImageVar", "BackImage", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("CurrentStep", "currentStepVar", "CurrentStep", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return "FRONT"
            }, !1), this.attr("ErrorCode", "errorCodeVar", "ErrorCode", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DocumentNumber", "documentNumberIn", "DocumentNumber", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExpiryDate", "expiryDateIn", "ExpiryDate", !0, !1, o.DataTypes.DataTypes.Date, function() {
                return o.DataTypes.DateTime.defaultValue
            }, !1), this.attr("_expiryDateInDataFetchStatus", "_expiryDateInDataFetchStatus", "_expiryDateInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedIdentityDocument", "selectedIdentityDocumentIn", "SelectedIdentityDocument", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(pe, "VariablesRecord");
var lt = pe;
lt.init();
var ye = class ye extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ye, "WidgetsRecord");
var fe = ye,
    L = class L extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return lt
        }
        static getWidgetsRecordConstructor() {
            return fe
        }
        static get hasValidationWidgets() {
            return L._hasValidationWidgetsValue === void 0 && (L._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), L._hasValidationWidgetsValue
        }
        setInputs(t) {
            "DocumentNumber" in t && (this.variables.documentNumberIn = t.DocumentNumber, "_documentNumberInDataFetchStatus" in t && (this.variables._documentNumberInDataFetchStatus = t._documentNumberInDataFetchStatus)), "ExpiryDate" in t && (this.variables.expiryDateIn = t.ExpiryDate, "_expiryDateInDataFetchStatus" in t && (this.variables._expiryDateInDataFetchStatus = t._expiryDateInDataFetchStatus)), "SelectedIdentityDocument" in t && (this.variables.selectedIdentityDocumentIn = t.SelectedIdentityDocument, "_selectedIdentityDocumentInDataFetchStatus" in t && (this.variables._selectedIdentityDocumentInDataFetchStatus = t._selectedIdentityDocumentInDataFetchStatus)), "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus))
        }
    };
e(L, "Model");
var dt = L;
dt._hasValidationWidgetsValue = void 0;
var wa = new o.Model.ModelFactory(dt);
var y = a,
    Te = class Te extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowError", "showErrorVar", "ShowError", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedDocument", "selectedDocumentIn", "SelectedDocument", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", "_selectedDocumentInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentList", "documentListIn", "DocumentList", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new A)
            }, !1, A), this.attr("_documentListInDataFetchStatus", "_documentListInDataFetchStatus", "_documentListInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Te, "VariablesRecord");
var Dt = Te;
Dt.init();
var Se = class Se extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Se, "WidgetsRecord");
var he = Se,
    _e = class _e extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Dt
        }
        static getWidgetsRecordConstructor() {
            return he
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "SelectedDocument" in t && (this.variables.selectedDocumentIn = t.SelectedDocument, "_selectedDocumentInDataFetchStatus" in t && (this.variables._selectedDocumentInDataFetchStatus = t._selectedDocumentInDataFetchStatus)), "DocumentList" in t && (this.variables.documentListIn = t.DocumentList, "_documentListInDataFetchStatus" in t && (this.variables._documentListInDataFetchStatus = t._documentListInDataFetchStatus))
        }
    };
e(_e, "Model");
var ft = _e;
ft._hasValidationWidgetsValue = void 0;
var Ga = new y.Model.ModelFactory(ft);
var s = a,
    G = class G extends s.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("isEnabled", "isEnabledOut", "isEnabled", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !0)].concat(s.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new G(new G.RecordClass({
                isEnabledOut: s.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(G, "IsSmileIdEnabledDataActRec");
var z = G;
z.init();
var Fe = class Fe extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentList", "documentListVar", "DocumentList", !0, !1, s.DataTypes.DataTypes.RecordList, function() {
            return s.DataTypes.ImmutableBase.getData(new A)
        }, !1, A), this.attr("IsDocumentSelected", "isDocumentSelectedVar", "IsDocumentSelected", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ServerError", "serverErrorVar", "ServerError", !0, !1, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new W)
        }, !1, W), this.attr("IsSmileIdEnabled2", "isSmileIdEnabled2Var", "IsSmileIdEnabled2", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, s.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("SelectedIdentityDocument", "selectedIdentityDocumentIn", "SelectedIdentityDocument", !0, !1, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new u)
        }, !1, u), this.attr("_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", "_selectedIdentityDocumentInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("DocumentNumber", "documentNumberIn", "DocumentNumber", !0, !1, s.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", "_documentNumberInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("AdditionalDocumentNumber", "additionalDocumentNumberIn", "AdditionalDocumentNumber", !0, !1, s.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("_additionalDocumentNumberInDataFetchStatus", "_additionalDocumentNumberInDataFetchStatus", "_additionalDocumentNumberInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("DocumentExpiryDate", "documentExpiryDateIn", "DocumentExpiryDate", !0, !1, s.DataTypes.DataTypes.Date, function() {
            return s.DataTypes.DateTime.defaultValue
        }, !1), this.attr("_documentExpiryDateInDataFetchStatus", "_documentExpiryDateInDataFetchStatus", "_documentExpiryDateInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("IsSmileIdEnabled", "isSmileIdEnabledDataAct", "IsSmileIdEnabled", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new z)
        }, !0, z)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Fe, "VariablesRecord");
var mt = Fe;
mt.init();
var Me = class Me extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Me, "WidgetsRecord");
var be = Me,
    w = class w extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return mt
        }
        static getWidgetsRecordConstructor() {
            return be
        }
        static get hasValidationWidgets() {
            return w._hasValidationWidgetsValue === void 0 && (w._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), w._hasValidationWidgetsValue
        }
        setInputs(t) {
            "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus)), "SelectedIdentityDocument" in t && (this.variables.selectedIdentityDocumentIn = t.SelectedIdentityDocument, "_selectedIdentityDocumentInDataFetchStatus" in t && (this.variables._selectedIdentityDocumentInDataFetchStatus = t._selectedIdentityDocumentInDataFetchStatus)), "DocumentNumber" in t && (this.variables.documentNumberIn = t.DocumentNumber, "_documentNumberInDataFetchStatus" in t && (this.variables._documentNumberInDataFetchStatus = t._documentNumberInDataFetchStatus)), "AdditionalDocumentNumber" in t && (this.variables.additionalDocumentNumberIn = t.AdditionalDocumentNumber, "_additionalDocumentNumberInDataFetchStatus" in t && (this.variables._additionalDocumentNumberInDataFetchStatus = t._additionalDocumentNumberInDataFetchStatus)), "DocumentExpiryDate" in t && (this.variables.documentExpiryDateIn = t.DocumentExpiryDate, "_documentExpiryDateInDataFetchStatus" in t && (this.variables._documentExpiryDateInDataFetchStatus = t._documentExpiryDateInDataFetchStatus))
        }
    };
e(w, "Model");
var pt = w;
pt._hasValidationWidgetsValue = void 0;
var Ya = new s.Model.ModelFactory(pt);
var D = a,
    Ce = class Ce extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SearchedCountry", "searchedCountryVar", "SearchedCountry", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ResidenceListInput", "residenceListInputVar", "ResidenceListInput", !0, !1, D.DataTypes.DataTypes.RecordList, function() {
                return D.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("FilteredList", "filteredListVar", "FilteredList", !0, !1, D.DataTypes.DataTypes.RecordList, function() {
                return D.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SuggestedCountry", "suggestedCountryVar", "SuggestedCountry", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, D.DataTypes.DataTypes.Record, function() {
                return D.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ce, "VariablesRecord");
var yt = Ce;
yt.init();
var We = class We extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedCountry: D.Model.ValidationWidgetRecord
        }
    }
};
e(We, "WidgetsRecord");
var Ve = We,
    Ae = class Ae extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return yt
        }
        static getWidgetsRecordConstructor() {
            return Ve
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "SelectedCountry" in t && (this.variables.selectedCountryIn = t.SelectedCountry, "_selectedCountryInDataFetchStatus" in t && (this.variables._selectedCountryInDataFetchStatus = t._selectedCountryInDataFetchStatus))
        }
    };
e(Ae, "Model");
var ht = Ae;
ht._hasValidationWidgetsValue = void 0;
var Za = new D.Model.ModelFactory(ht);
var n = a,
    xe = class xe extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Step", "stepVar", "Step", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DocumentIssuingCountry", "documentIssuingCountryVar", "DocumentIssuingCountry", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("UserFirstName", "userFirstNameVar", "UserFirstName", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserLastName", "userLastNameVar", "UserLastName", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserDateOfBirth", "userDateOfBirthVar", "UserDateOfBirth", !0, !1, n.DataTypes.DataTypes.Date, function() {
                return n.DataTypes.DateTime.defaultValue
            }, !1), this.attr("DocumentType", "documentTypeVar", "DocumentType", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("DocumentNumber", "documentNumberVar", "DocumentNumber", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("AdditionalDocumentNumber", "additionalDocumentNumberVar", "AdditionalDocumentNumber", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("DocumentExpiryDate", "documentExpiryDateVar", "DocumentExpiryDate", !0, !1, n.DataTypes.DataTypes.Date, function() {
                return n.DataTypes.DateTime.defaultValue
            }, !1), this.attr("ErrorData", "errorDataVar", "ErrorData", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("KYCAuthStatusData", "kYCAuthStatusDataVar", "KYCAuthStatusData", !0, !1, n.DataTypes.DataTypes.Record, function() {
                return n.DataTypes.ImmutableBase.getData(new _t)
            }, !1, _t)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(xe, "VariablesRecord");
var It = xe;
It.init();
var Oe = class Oe extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Oe, "WidgetsRecord");
var Re = Oe,
    U = class U extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return It
        }
        static getWidgetsRecordConstructor() {
            return Re
        }
        static get hasValidationWidgets() {
            return U._hasValidationWidgetsValue === void 0 && (U._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), U._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(U, "Model");
var Tt = U;
Tt._hasValidationWidgetsValue = void 0;
var ss = new n.Model.ModelFactory(Tt);
export {
    qe as a, Xe as b, ta as c, ca as d, ma as e, ya as f, _a as g, Ma as h, Aa as i, Na as j, wa as k, Ga as l, Ya as m, Za as n, ss as o
};