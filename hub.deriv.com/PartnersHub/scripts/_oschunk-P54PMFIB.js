import {
    Bd as L,
    Fc as _,
    Rf as E,
    Zc as v
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as n
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var r = n,
    h = class h extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Data", "dataIn", "Data", !0, !1, r.DataTypes.DataTypes.Record, function() {
                return r.DataTypes.ImmutableBase.getData(new _)
            }, !1, _), this.attr("_dataInDataFetchStatus", "_dataInDataFetchStatus", "_dataInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(h, "VariablesRecord");
var m = h;
m.init();
var S = class S extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(S, "WidgetsRecord");
var T = S,
    o = class o extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(e) {
            "Data" in e && (this.variables.dataIn = e.Data, "_dataInDataFetchStatus" in e && (this.variables._dataInDataFetchStatus = e._dataInDataFetchStatus))
        }
    };
a(o, "Model");
var f = o;
f._hasValidationWidgetsValue = void 0;
var j = new r.Model.ModelFactory(f);
var s = n,
    d = class d extends s.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(s.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return L
        }
        static fromStructure(e) {
            return new d(new d.RecordClass({
                RecordListType: s.DataTypes.ImmutableBase.getData(e)
            }))
        }
    };
a(d, "GetEventSpeakerMappingsByEventIdAggrRec");
var u = d;
u.init();
var V = class V extends s.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventId", "eventIdIn", "EventId", !0, !1, s.DataTypes.DataTypes.LongInteger, function() {
            return s.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEventSpeakerMappingsByEventId", "getEventSpeakerMappingsByEventIdAggr", "GetEventSpeakerMappingsByEventId", !0, !0, s.DataTypes.DataTypes.Record, function() {
            return s.DataTypes.ImmutableBase.getData(new u)
        }, !0, u)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(V, "VariablesRecord");
var g = V;
g.init();
var C = class C extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(C, "WidgetsRecord");
var b = C,
    B = class B extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "EventId" in e && (this.variables.eventIdIn = e.EventId, "_eventIdInDataFetchStatus" in e && (this.variables._eventIdInDataFetchStatus = e._eventIdInDataFetchStatus))
        }
    };
a(B, "Model");
var D = B;
D._hasValidationWidgetsValue = void 0;
var z = new s.Model.ModelFactory(D);
var t = n,
    c = class c extends t.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(t.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return E
        }
        static fromStructure(e) {
            return new c(new c.RecordClass({
                RecordListType: t.DataTypes.ImmutableBase.getData(e)
            }))
        }
    };
a(c, "GetEventByIdAggrRec");
var l = c;
l.init();
var H = class H extends t.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventImages", "eventImagesVar", "EventImages", !0, !1, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new v)
        }, !1, v), this.attr("IsLoadingImages", "isLoadingImagesVar", "IsLoadingImages", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventId", "eventIdIn", "EventId", !0, !1, t.DataTypes.DataTypes.LongInteger, function() {
            return t.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEventById", "getEventByIdAggr", "GetEventById", !0, !0, t.DataTypes.DataTypes.Record, function() {
            return t.DataTypes.ImmutableBase.getData(new l)
        }, !0, l)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(H, "VariablesRecord");
var p = H;
p.init();
var P = class P extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(P, "WidgetsRecord");
var W = P,
    i = class i extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(e) {
            "EventId" in e && (this.variables.eventIdIn = t.DataConversion.ServerDataConverter.from(e.EventId, t.DataTypes.DataTypes.LongInteger))
        }
    };
a(i, "Model");
var I = i;
I._hasValidationWidgetsValue = void 0;
var Y = new t.Model.ModelFactory(I);
export {
    j as a, z as b, Y as c
};