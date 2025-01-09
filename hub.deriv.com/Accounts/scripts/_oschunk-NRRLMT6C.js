import {
    Bj as r
} from "./_oschunk-UATY3RVV.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var t = l,
    i = class i extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("BannerConfig", "bannerConfigVar", "BannerConfig", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new r)
            }, !1, r), this.attr("Type", "typeIn", "Type", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Text", "textIn", "Text", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(i, "VariablesRecord");
var s = i;
s.init();
var u = class u extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(u, "WidgetsRecord");
var c = u,
    o = class o extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return c
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "Type" in e && (this.variables.typeIn = e.Type, "_typeInDataFetchStatus" in e && (this.variables._typeInDataFetchStatus = e._typeInDataFetchStatus)), "Text" in e && (this.variables.textIn = e.Text, "_textInDataFetchStatus" in e && (this.variables._textInDataFetchStatus = e._textInDataFetchStatus))
        }
    };
a(o, "Model");
var n = o;
n._hasValidationWidgetsValue = void 0;
var D = new t.Model.ModelFactory(n);
export {
    D as a
};