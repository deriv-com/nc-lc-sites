import {
    Ye as _,
    _c as d
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = c,
    o = class o extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return _
        }
        static fromStructure(s) {
            return new o(new o.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(s)
            }))
        }
    };
a(o, "GetEventByIdAggrRec");
var r = o;
r.init();
var m = class m extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventImages", "eventImagesVar", "EventImages", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new d)
        }, !1, d), this.attr("IsLoadingImages", "isLoadingImagesVar", "IsLoadingImages", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventId", "eventIdIn", "EventId", !0, !1, e.DataTypes.DataTypes.LongInteger, function() {
            return e.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEventById", "getEventByIdAggr", "GetEventById", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new r)
        }, !0, r)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(m, "VariablesRecord");
var n = m;
n.init();
var u = class u extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(u, "WidgetsRecord");
var l = u,
    t = class t extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return n
        }
        static getWidgetsRecordConstructor() {
            return l
        }
        static get hasValidationWidgets() {
            return t._hasValidationWidgetsValue === void 0 && (t._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), t._hasValidationWidgetsValue
        }
        setInputs(s) {
            "EventId" in s && (this.variables.eventIdIn = e.DataConversion.ServerDataConverter.from(s.EventId, e.DataTypes.DataTypes.LongInteger))
        }
    };
a(t, "Model");
var i = t;
i._hasValidationWidgetsValue = void 0;
var H = new e.Model.ModelFactory(i);
export {
    H as a
};