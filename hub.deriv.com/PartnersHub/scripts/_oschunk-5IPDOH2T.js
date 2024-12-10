import {
    Hf as c,
    Ze as D,
    xf as i,
    yf as l
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as m
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t
} from "./_oschunk-QHO7QY6K.js";
var e = m,
    r = class r extends e.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return l
        }
        static fromStructure(a) {
            return new r(new r.RecordClass({
                RecordListType: e.DataTypes.ImmutableBase.getData(a)
            }))
        }
    };
t(r, "GetLanguagesByEnabledAggrRec");
var o = r;
o.init();
var s = class s extends e.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return i
    }
    static fromStructure(a) {
        return new s(new s.RecordClass({
            RecordListType: e.DataTypes.ImmutableBase.getData(a)
        }))
    }
};
t(s, "GetEventTypesAggrRec");
var u = s;
u.init();
var n = class n extends e.Model.AggregateRecord {
    static attributesToDeclare() {
        return [].concat(e.Model.AggregateRecord.attributesToDeclare.call(this))
    }
    static get RecordListType() {
        return c
    }
    static fromStructure(a) {
        return new n(new n.RecordClass({
            RecordListType: e.DataTypes.ImmutableBase.getData(a)
        }))
    }
};
t(n, "GetEventsAggrRec");
var d = n;
d.init();
var g = class g extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventFilters", "eventFiltersVar", "EventFilters", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new D)
        }, !1, D), this.attr("EventsData", "eventsDataVar", "EventsData", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new c)
        }, !1, c), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("EventTypes", "eventTypesVar", "EventTypes", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new i)
        }, !1, i), this.attr("EventLanguages", "eventLanguagesVar", "EventLanguages", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new l)
        }, !1, l), this.attr("IsSidebarOpen", "isSidebarOpenVar", "IsSidebarOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ModalId", "modalIdVar", "ModalId", !0, !1, e.DataTypes.DataTypes.Text, function() {
            return ""
        }, !1), this.attr("GetLanguagesByEnabled", "getLanguagesByEnabledAggr", "GetLanguagesByEnabled", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new o)
        }, !0, o), this.attr("GetEventTypes", "getEventTypesAggr", "GetEventTypes", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new u)
        }, !0, u), this.attr("GetEvents", "getEventsAggr", "GetEvents", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new d)
        }, !0, d)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
t(g, "VariablesRecord");
var p = g;
p.init();
var f = class f extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            LanguageCheckbox: e.Model.ValidationWidgetRecord
        }
    }
};
t(f, "WidgetsRecord");
var T = f,
    y = class y extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {}
    };
t(y, "Model");
var b = y;
b._hasValidationWidgetsValue = void 0;
var B = new e.Model.ModelFactory(b);
export {
    B as a
};