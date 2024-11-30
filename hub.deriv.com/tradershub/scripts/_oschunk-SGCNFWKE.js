import {
    ic as r
} from "./_oschunk-44PT7RP7.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var t = c,
    n = class n extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Transactions", "transactionsVar", "Transactions", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("DatesList", "datesListVar", "DatesList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new t.DataTypes.TextList)
            }, !1, t.DataTypes.TextList), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActionTypeValue", "actionTypeValueVar", "ActionTypeValue", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "all"
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(n, "VariablesRecord");
var a = n;
a.init();
var o = class o extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            ButtonGroup: t.Model.ValidationWidgetRecord
        }
    }
};
e(o, "WidgetsRecord");
var i = o,
    u = class u extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return a
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {}
    };
e(u, "Model");
var s = u;
s._hasValidationWidgetsValue = void 0;
var T = new t.Model.ModelFactory(s);
export {
    T as a
};