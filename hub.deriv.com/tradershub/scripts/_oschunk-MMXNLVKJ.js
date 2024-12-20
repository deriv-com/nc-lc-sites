import {
    qg as i
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as d
} from "./_oschunk-5EPHB76O.js";
import {
    c as s
} from "./_oschunk-DVBKI63I.js";
var t = d,
    a = class a extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AccountPurposeList", "accountPurposeListVar", "AccountPurposeList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new i)
            }, !1, i)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(c) {
            return new a(new a.RecordClass({
                accountPurposeListVar: t.DataTypes.ImmutableBase.getData(c)
            }))
        }
    };
s(a, "VariablesRecord");
var r = a;
r.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(n, "WidgetsRecord");
var u = n,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return r
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0), e._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
s(e, "Model");
var o = e;
o._hasValidationWidgetsValue = void 0;
var b = new t.Model.ModelFactory(o);
export {
    b as a
};