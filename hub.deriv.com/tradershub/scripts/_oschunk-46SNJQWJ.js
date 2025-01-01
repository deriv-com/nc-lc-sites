import {
    Ag as g,
    uj as i
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as p
} from "./_oschunk-2JKANR6M.js";
import {
    c as t
} from "./_oschunk-DVBKI63I.js";
var e = p,
    a = class a extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return g
        }
        static fromStructure(l) {
            return new a(new a.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(l)
            }))
        }
    };
t(a, "GetLanguagesByEnabledAggrRec");
var r = a;
r.init();
var n = class n extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URL", "uRLVar", "URL", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("AppId", "appIdVar", "AppId", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("FeatureFlags", "featureFlagsVar", "FeatureFlags", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !1, i), this.attr("GetLanguagesByEnabled", "getLanguagesByEnabledAggr", "GetLanguagesByEnabled", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new r)
        }, !0, r)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(n, "VariablesRecord");
var s = n;
s.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: e.Model.ValidationWidgetRecord,
            Input_URL: e.Model.ValidationWidgetRecord,
            Input_AppId: e.Model.ValidationWidgetRecord,
            LanguageSwitcherDropdown: e.Model.ValidationWidgetRecord,
            Switch1: e.Model.ValidationWidgetRecord
        }
    }
};
t(u, "WidgetsRecord");
var o = u,
    c = class c extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return o
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
t(c, "Model");
var d = c;
d._hasValidationWidgetsValue = void 0;
var T = new e.Model.ModelFactory(d);
export {
    T as a
};