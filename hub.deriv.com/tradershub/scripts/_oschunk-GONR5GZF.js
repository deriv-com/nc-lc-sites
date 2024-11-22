import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var t = d,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(n) {
            return new e(new e.RecordClass({
                isLoadingVar: t.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
s(e, "VariablesRecord");
var r = e;
r.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var o = l,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(n) {}
    };
s(a, "Model");
var i = a;
i._hasValidationWidgetsValue = void 0;
var h = new t.Model.ModelFactory(i);
export {
    h as a
};