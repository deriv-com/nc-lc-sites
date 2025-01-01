import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var t = u,
    a = class a extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TimeLeft", "timeLeftVar", "TimeLeft", !0, !1, t.DataTypes.DataTypes.Decimal, function() {
                return t.BuiltinFunctions.integerToDecimal(60)
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(n) {
            return new a(new a.RecordClass({
                timeLeftVar: t.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
s(a, "VariablesRecord");
var r = a;
r.init();
var l = class l extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(l, "WidgetsRecord");
var o = l,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(n) {}
    };
s(e, "Model");
var i = e;
i._hasValidationWidgetsValue = void 0;
var W = new t.Model.ModelFactory(i);
export {
    W as a
};