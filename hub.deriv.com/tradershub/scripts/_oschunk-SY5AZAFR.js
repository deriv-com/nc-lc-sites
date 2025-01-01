import {
    qd as o
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var t = u,
    l = class l extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("iFrameURL", "iFrameURLVar", "iFrameURL", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new o)
            }, !1, o), this.attr("PageTitle", "pageTitleVar", "PageTitle", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "Deposit"
            }, !1), this.attr("ShowContent", "showContentVar", "ShowContent", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(l, "VariablesRecord");
var s = l;
s.init();
var n = class n extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(n, "WidgetsRecord");
var i = n,
    e = class e extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return i
        }
        static get hasValidationWidgets() {
            return e._hasValidationWidgetsValue === void 0 && (e._hasValidationWidgetsValue = void 0 || void 0 || void 0), e._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
a(e, "Model");
var r = e;
r._hasValidationWidgetsValue = void 0;
var W = new t.Model.ModelFactory(r);
export {
    W as a
};