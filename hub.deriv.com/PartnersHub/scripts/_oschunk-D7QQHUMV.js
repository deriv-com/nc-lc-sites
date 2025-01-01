import {
    Cd as S,
    Fc as f
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var s = c,
    I = class I extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Data", "dataIn", "Data", !0, !1, s.DataTypes.DataTypes.Record, function() {
                return s.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_dataInDataFetchStatus", "_dataInDataFetchStatus", "_dataInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(I, "VariablesRecord");
var d = I;
d.init();
var g = class g extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(g, "WidgetsRecord");
var D = g,
    r = class r extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0), r._hasValidationWidgetsValue
        }
        setInputs(e) {
            "Data" in e && (this.variables.dataIn = e.Data, "_dataInDataFetchStatus" in e && (this.variables._dataInDataFetchStatus = e._dataInDataFetchStatus))
        }
    };
a(r, "Model");
var u = r;
u._hasValidationWidgetsValue = void 0;
var b = new s.Model.ModelFactory(u);
var t = c,
    n = class n extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return S
        }
        static fromStructure(e) {
            return new n(new n.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(e)
            }))
        }
    };
a(n, "GetEventSpeakerMappingsByEventIdAggrRec");
var i = n;
i.init();
var p = class p extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventId", "eventIdIn", "EventId", !0, !1, t.DataTypes.DataTypes.LongInteger, function() {
            return t.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEventSpeakerMappingsByEventId", "getEventSpeakerMappingsByEventIdAggr", "GetEventSpeakerMappingsByEventId", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new i)
        }, !0, i)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(p, "VariablesRecord");
var o = p;
o.init();
var T = class T extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(T, "WidgetsRecord");
var h = T,
    y = class y extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return h
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "EventId" in e && (this.variables.eventIdIn = e.EventId, "_eventIdInDataFetchStatus" in e && (this.variables._eventIdInDataFetchStatus = e._eventIdInDataFetchStatus))
        }
    };
a(y, "Model");
var l = y;
l._hasValidationWidgetsValue = void 0;
var F = new t.Model.ModelFactory(l);
export {
    b as a, F as b
};