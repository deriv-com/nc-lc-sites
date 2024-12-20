import {
    Mf as o
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = u,
    d = class d extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(d, "VariablesRecord");
var a = d;
a.init();
var i = class i extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: t.Model.ValidationWidgetRecord,
            Input_DocumentType: t.Model.ValidationWidgetRecord,
            Input_DocumentNumber: t.Model.ValidationWidgetRecord,
            Input_DocumentNumber2: t.Model.ValidationWidgetRecord
        }
    }
};
e(i, "WidgetsRecord");
var s = i,
    n = class n extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return s
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
e(n, "Model");
var r = n;
r._hasValidationWidgetsValue = void 0;
var f = new t.Model.ModelFactory(r);
export {
    f as a
};