import {
    Fa as u,
    ib as f,
    sb as i
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = n,
    R = class R extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new i)
            }, !1, i), this.attr("Subtitle", "subtitleIn", "Subtitle", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "Current location"
            }, !1), this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var o = R;
o.init();
var T = class T extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: e.Model.ValidationWidgetRecord
        }
    }
};
a(T, "WidgetsRecord");
var p = T,
    S = class S extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(r) {
            "Subtitle" in r && (this.variables.subtitleIn = r.Subtitle, "_subtitleInDataFetchStatus" in r && (this.variables._subtitleInDataFetchStatus = r._subtitleInDataFetchStatus))
        }
    };
a(S, "Model");
var c = S;
c._hasValidationWidgetsValue = void 0;
var W = new e.Model.ModelFactory(c);
var t = n,
    D = class D extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new u)
            }, !1, u), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new f)
            }, !1, f)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(D, "VariablesRecord");
var l = D;
l.init();
var M = class M extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(M, "WidgetsRecord");
var m = M,
    s = class s extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return s._hasValidationWidgetsValue === void 0 && (s._hasValidationWidgetsValue = void 0 || void 0), s._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
a(s, "Model");
var d = s;
d._hasValidationWidgetsValue = void 0;
var O = new t.Model.ModelFactory(d);
export {
    W as a, O as b
};