import {
    ef as g
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = l,
    a = class a extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return g
        }
        static fromStructure(n) {
            return new a(new a.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
t(a, "GetLanguagesByEnabledAggrRec");
var s = a;
s.init();
var r = class r extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLanguagesByEnabled", "getLanguagesByEnabledAggr", "GetLanguagesByEnabled", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new s)
        }, !0, s)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(n) {
        return new r(new r.RecordClass({
            getLanguagesByEnabledAggr: e.DataTypes.ImmutableBase.getData(n)
        }))
    }
};
t(r, "VariablesRecord");
var o = r;
o.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            LanguageSwitcherDropdown: e.Model.ValidationWidgetRecord
        }
    }
};
t(u, "WidgetsRecord");
var c = u,
    d = class d extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(n) {}
    };
t(d, "Model");
var i = d;
i._hasValidationWidgetsValue = void 0;
var D = new e.Model.ModelFactory(i);
export {
    D as a
};