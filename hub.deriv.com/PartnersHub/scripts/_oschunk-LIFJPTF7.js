import {
    Df as l,
    Kc as L,
    Of as h,
    Ye as I,
    rf as f,
    sf as D,
    vf as g
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as M
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = M,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return L
        }
        static fromStructure(t) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(r, "GetCountriesAggrRec");
var u = r;
u.init();
var s = class s extends e.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return l
    }
    static fromStructure(t) {
        return new s(new s.RecordClass({
            RecordListType: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(s, "GetLanguagesByEnabledAggrRec");
var c = s;
c.init();
var n = class n extends e.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return h
    }
    static fromStructure(t) {
        return new n(new n.RecordClass({
            RecordListType: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(n, "GetEventTypesAggrRec");
var i = n;
i.init();
var o = class o extends e.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return I
    }
    static fromStructure(t) {
        return new o(new o.RecordClass({
            RecordListType: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(o, "GetEventsAggrRec");
var d = o;
d.init();
var y = class y extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventFilters", "eventFiltersVar", "EventFilters", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("EventsData", "eventsDataVar", "EventsData", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new f)
        }, !1, f), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventTypes", "eventTypesVar", "EventTypes", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new g)
        }, !1, g), this.attr("EventLanguages", "eventLanguagesVar", "EventLanguages", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new l)
        }, !1, l), this.attr("IsSidebarOpen", "isSidebarOpenVar", "IsSidebarOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ModalId", "modalIdVar", "ModalId", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("GetCountries", "getCountriesAggr", "GetCountries", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new u)
        }, !0, u), this.attr("GetLanguagesByEnabled", "getLanguagesByEnabledAggr", "GetLanguagesByEnabled", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new c)
        }, !0, c), this.attr("GetEventTypes", "getEventTypesAggr", "GetEventTypes", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !0, i), this.attr("GetEvents", "getEventsAggr", "GetEvents", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new d)
        }, !0, d)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(y, "VariablesRecord");
var b = y;
b.init();
var m = class m extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            LanguageCheckbox: e.Model.ValidationWidgetRecord,
            LocationCheckbox: e.Model.ValidationWidgetRecord
        }
    }
};
a(m, "WidgetsRecord");
var T = m,
    R = class R extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
a(R, "Model");
var p = R;
p._hasValidationWidgetsValue = void 0;
var V = new e.Model.ModelFactory(p);
export {
    V as a
};