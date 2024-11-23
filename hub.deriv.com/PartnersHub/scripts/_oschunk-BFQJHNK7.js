import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var t = l,
    e = class e extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(m) {
            return new e(new e.RecordClass({
                isExitModalOpenVar: t.DataTypes.ImmutableBase.getData(m)
            }))
        }
    };
s(e, "VariablesRecord");
var o = e;
o.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(n, "WidgetsRecord");
var r = n,
    a = class a extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return r
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), a._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
s(a, "Model");
var i = a;
i._hasValidationWidgetsValue = void 0;
var v = new t.Model.ModelFactory(i);
export {
    v as a
};