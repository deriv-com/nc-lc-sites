import {
    Ea as c,
    Pf as u,
    vc as l
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as r
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = r,
    m = class m extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new c)
            }, !1, c), this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", !0, !1, e.DataTypes.DataTypes.Record, function() {
                return e.DataTypes.ImmutableBase.getData(new l)
            }, !1, l), this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(m, "VariablesRecord");
var o = m;
o.init();
var D = class D extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            IDVDesktop: e.Model.ValidationWidgetRecord,
            Dropdown1: e.Model.ValidationWidgetRecord,
            Input_DocumentNumber: e.Model.ValidationWidgetRecord,
            Input_DocumentNumber2: e.Model.ValidationWidgetRecord
        }
    }
};
t(D, "WidgetsRecord");
var p = D,
    T = class T extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(y) {}
    };
t(T, "Model");
var i = T;
i._hasValidationWidgetsValue = void 0;
var _ = new e.Model.ModelFactory(i);
var s = r,
    R = class R extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(R, "VariablesRecord");
var n = R;
n.init();
var g = class g extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(g, "WidgetsRecord");
var b = g,
    a = class a extends s.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(y) {}
    };
t(a, "Model");
var d = a;
d._hasValidationWidgetsValue = void 0;
var A = new s.Model.ModelFactory(d);
export {
    _ as a, A as b
};