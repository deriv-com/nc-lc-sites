import {
    yf as l
} from "./_oschunk-44PT7RP7.js";
import {
    ia as o
} from "./_oschunk-NTQBNJ73.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = o,
    r = class r extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new l)
            }, !1, l)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(c) {
            return new r(new r.RecordClass({
                supportedDocumentsVar: e.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
t(r, "VariablesRecord");
var i = r;
i.init();
var D = class D extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DocumentNumberForm: e.Model.ValidationWidgetRecord,
            Input_DocumentName: e.Model.ValidationWidgetRecord,
            Input_DocumentName2: e.Model.ValidationWidgetRecord
        }
    }
};
t(D, "WidgetsRecord");
var m = D,
    g = class g extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return i
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
t(g, "Model");
var d = g;
d._hasValidationWidgetsValue = void 0;
var y = new e.Model.ModelFactory(d);
var s = o,
    V = class V extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(V, "VariablesRecord");
var n = V;
n.init();
var M = class M extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(M, "WidgetsRecord");
var f = M,
    a = class a extends s.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
t(a, "Model");
var u = a;
u._hasValidationWidgetsValue = void 0;
var W = new s.Model.ModelFactory(u);
export {
    y as a, W as b
};