import {
    Kf as b,
    ib as D,
    vc as T
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var r = i,
    g = class g extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PhoneNumberImpl", "phoneNumberImplVar", "PhoneNumberImpl", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsDirty", "isDirtyVar", "IsDirty", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PhoneNumber2", "phoneNumber2In", "PhoneNumber2", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_phoneNumber2InDataFetchStatus", "_phoneNumber2InDataFetchStatus", "_phoneNumber2InDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(g, "VariablesRecord");
var u = g;
u.init();
var S = class S extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: r.Model.ValidationWidgetRecord,
            PhoneNumber: r.Model.ValidationWidgetRecord
        }
    }
};
a(S, "WidgetsRecord");
var y = S,
    _ = class _ extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(e) {
            "PhoneNumber2" in e && (this.variables.phoneNumber2In = e.PhoneNumber2, "_phoneNumber2InDataFetchStatus" in e && (this.variables._phoneNumber2InDataFetchStatus = e._phoneNumber2InDataFetchStatus)), "ErrorMessage" in e && (this.variables.errorMessageIn = e.ErrorMessage, "_errorMessageInDataFetchStatus" in e && (this.variables._errorMessageInDataFetchStatus = e._errorMessageInDataFetchStatus))
        }
    };
a(_, "Model");
var l = _;
l._hasValidationWidgetsValue = void 0;
var q = new r.Model.ModelFactory(l);
var s = i,
    V = class V extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("OTPCode", "oTPCodeVar", "OTPCode", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Carrier", "carrierIn", "Carrier", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_carrierInDataFetchStatus", "_carrierInDataFetchStatus", "_carrierInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PhoneNumber", "phoneNumberIn", "PhoneNumber", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(V, "VariablesRecord");
var c = V;
c.init();
var C = class C extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: s.Model.ValidationWidgetRecord,
            OTPCodeInput: s.Model.ValidationWidgetRecord
        }
    }
};
a(C, "WidgetsRecord");
var P = C,
    N = class N extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(e) {
            "Carrier" in e && (this.variables.carrierIn = e.Carrier, "_carrierInDataFetchStatus" in e && (this.variables._carrierInDataFetchStatus = e._carrierInDataFetchStatus)), "PhoneNumber" in e && (this.variables.phoneNumberIn = e.PhoneNumber, "_phoneNumberInDataFetchStatus" in e && (this.variables._phoneNumberInDataFetchStatus = e._phoneNumberInDataFetchStatus))
        }
    };
a(N, "Model");
var d = N;
d._hasValidationWidgetsValue = void 0;
var Q = new s.Model.ModelFactory(d);
var o = i,
    R = class R extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Code", "codeVar", "Code", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Timer", "timerVar", "Timer", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 60
            }, !1), this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("email", "emailIn", "email", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var f = R;
f.init();
var v = class v extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_Code: o.Model.ValidationWidgetRecord
        }
    }
};
a(v, "WidgetsRecord");
var F = v,
    x = class x extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(e) {
            "email" in e && (this.variables.emailIn = e.email, "_emailInDataFetchStatus" in e && (this.variables._emailInDataFetchStatus = e._emailInDataFetchStatus))
        }
    };
a(x, "Model");
var m = x;
m._hasValidationWidgetsValue = void 0;
var $ = new o.Model.ModelFactory(m);
var t = i,
    B = class B extends t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PhoneNumberList", "phoneNumberListVar", "PhoneNumberList", !0, !1, t.DataTypes.DataTypes.RecordList, function() {
                return t.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("SelectedCarrier", "selectedCarrierVar", "SelectedCarrier", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentBlock", "currentBlockVar", "CurrentBlock", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return "EmailVerificationBlock"
            }, !1), this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", !0, !1, t.DataTypes.DataTypes.Record, function() {
                return t.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("IsResendCodePopupOpen", "isResendCodePopupOpenVar", "IsResendCodePopupOpen", !0, !1, t.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PhoneNumberChallengeErrorMessage", "phoneNumberChallengeErrorMessageVar", "PhoneNumberChallengeErrorMessage", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserEmailCode", "userEmailCodeVar", "UserEmailCode", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Code", "codeIn", "Code", !0, !1, t.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", !0, !1, t.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(B, "VariablesRecord");
var h = B;
h.init();
var H = class H extends t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(H, "WidgetsRecord");
var O = H,
    n = class n extends t.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(e) {
            "Code" in e && (this.variables.codeIn = t.DataConversion.ServerDataConverter.from(e.Code, t.DataTypes.DataTypes.Text))
        }
    };
a(n, "Model");
var p = n;
p._hasValidationWidgetsValue = void 0;
var ne = new t.Model.ModelFactory(p);
export {
    q as a, Q as b, $ as c, ne as d
};