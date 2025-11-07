import {
    a as ve
} from "./_oschunk-25YNSA55.js";
import {
    a as he
} from "./_oschunk-XBLRNF6Q.js";
import {
    b as be
} from "./_oschunk-3PTSEXX2.js";
import {
    a as fe
} from "./_oschunk-V2GLUWLZ.js";
import {
    a as ce
} from "./_oschunk-TNUZI776.js";
import {
    a as ue
} from "./_oschunk-Q5H2JROI.js";
import {
    b as X,
    h as m,
    i as O,
    o as Y,
    q as K,
    r as Me,
    t as J,
    x as j
} from "./_oschunk-O5KC3WOL.js";
import {
    a as de,
    g as R,
    m as B,
    o as N,
    q as M,
    r as $,
    s as L,
    t as G
} from "./_oschunk-NVHFAAS2.js";
import {
    a as U
} from "./_oschunk-AW35UT34.js";
import {
    Ha as A,
    K as H,
    Ka as E,
    aa as Q,
    c as x,
    ka as T,
    v as Be,
    w as Ne
} from "./_oschunk-WCMQG33O.js";
import {
    J as S,
    X as V,
    c as o,
    f as le,
    n as I,
    o as k,
    q,
    w as Ue
} from "./_oschunk-DFKJJKI4.js";
var P = V,
    _e = class _e extends P.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowPassword", "showPasswordVar", "ShowPassword", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ValidPassword", "validPasswordVar", "ValidPassword", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordInformation", "passwordInformationIn", "PasswordInformation", !0, !1, P.DataTypes.DataTypes.Record, function() {
                return P.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("_passwordInformationInDataFetchStatus", "_passwordInformationInDataFetchStatus", "_passwordInformationInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsFetchingData", "isFetchingDataIn", "IsFetchingData", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isFetchingDataInDataFetchStatus", "_isFetchingDataInDataFetchStatus", "_isFetchingDataInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(P.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(_e, "VariablesRecord");
var ee = _e;
ee.init();
var Ce = class Ce extends P.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form_SetPassword: P.Model.ValidationWidgetRecord,
            PasswordInput: P.Model.ValidationWidgetRecord
        }
    }
};
o(Ce, "WidgetsRecord");
var me = Ce,
    ge = class ge extends P.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return me
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {
            "PasswordInformation" in d && (this.variables.passwordInformationIn = d.PasswordInformation, "_passwordInformationInDataFetchStatus" in d && (this.variables._passwordInformationInDataFetchStatus = d._passwordInformationInDataFetchStatus)), "IsFetchingData" in d && (this.variables.isFetchingDataIn = d.IsFetchingData, "_isFetchingDataInDataFetchStatus" in d && (this.variables._isFetchingDataInDataFetchStatus = d._isFetchingDataInDataFetchStatus))
        }
    };
o(ge, "Model");
var te = ge;
te._hasValidationWidgetsValue = void 0;
var $e = new P.Model.ModelFactory(te);
var p = V,
    we = class we extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsSubmitting", "isSubmittingVar", "IsSubmitting", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("password", "passwordIn", "password", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ClientInformation", "clientInformationIn", "ClientInformation", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new x)
            }, !1, x), this.attr("_clientInformationInDataFetchStatus", "_clientInformationInDataFetchStatus", "_clientInformationInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AuthenticationCodeType", "authenticationCodeTypeIn", "AuthenticationCodeType", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_authenticationCodeTypeInDataFetchStatus", "_authenticationCodeTypeInDataFetchStatus", "_authenticationCodeTypeInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OTPConfig", "oTPConfigIn", "OTPConfig", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new H)
            }, !1, H), this.attr("_oTPConfigInDataFetchStatus", "_oTPConfigInDataFetchStatus", "_oTPConfigInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsVisible", "isVisibleIn", "IsVisible", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(we, "VariablesRecord");
var ae = we;
ae.init();
var Ee = class Ee extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: p.Model.ValidationWidgetRecord
        }
    }
};
o(Ee, "WidgetsRecord");
var Ae = Ee,
    Se = class Se extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ae
        }
        static getWidgetsRecordConstructor() {
            return Ae
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {
            "password" in d && (this.variables.passwordIn = d.password, "_passwordInDataFetchStatus" in d && (this.variables._passwordInDataFetchStatus = d._passwordInDataFetchStatus)), "ClientInformation" in d && (this.variables.clientInformationIn = d.ClientInformation, "_clientInformationInDataFetchStatus" in d && (this.variables._clientInformationInDataFetchStatus = d._clientInformationInDataFetchStatus)), "AuthenticationCodeType" in d && (this.variables.authenticationCodeTypeIn = d.AuthenticationCodeType, "_authenticationCodeTypeInDataFetchStatus" in d && (this.variables._authenticationCodeTypeInDataFetchStatus = d._authenticationCodeTypeInDataFetchStatus)), "OTPConfig" in d && (this.variables.oTPConfigIn = d.OTPConfig, "_oTPConfigInDataFetchStatus" in d && (this.variables._oTPConfigInDataFetchStatus = d._oTPConfigInDataFetchStatus)), "IsVisible" in d && (this.variables.isVisibleIn = d.IsVisible, "_isVisibleInDataFetchStatus" in d && (this.variables._isVisibleInDataFetchStatus = d._isVisibleInDataFetchStatus))
        }
    };
o(Se, "Model");
var ne = Se;
ne._hasValidationWidgetsValue = void 0;
var Le = new p.Model.ModelFactory(ne);
var F = V,
    Te = class Te extends F.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ModalContent", "modalContentVar", "ModalContent", !0, !1, F.DataTypes.DataTypes.Text, function() {
                return "reset"
            }, !1), this.attr("Password", "passwordVar", "Password", !0, !1, F.DataTypes.DataTypes.Record, function() {
                return F.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("AuthenticationCodeType", "authenticationCodeTypeVar", "AuthenticationCodeType", !0, !1, F.DataTypes.DataTypes.Text, function() {
                return "email"
            }, !1), this.attr("ClientInformation", "clientInformationVar", "ClientInformation", !0, !1, F.DataTypes.DataTypes.Record, function() {
                return F.DataTypes.ImmutableBase.getData(new x)
            }, !1, x), this.attr("OTPConfig", "oTPConfigVar", "OTPConfig", !0, !1, F.DataTypes.DataTypes.Record, function() {
                return F.DataTypes.ImmutableBase.getData(new H)
            }, !1, H), this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(F.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Te, "VariablesRecord");
var oe = Te;
oe.init();
var Pe = class Pe extends F.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Pe, "WidgetsRecord");
var Ve = Pe,
    W = class W extends F.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return oe
        }
        static getWidgetsRecordConstructor() {
            return Ve
        }
        static get hasValidationWidgets() {
            return W._hasValidationWidgetsValue === void 0 && (W._hasValidationWidgetsValue = void 0 || void 0), W._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
o(W, "Model");
var ie = W;
ie._hasValidationWidgetsValue = void 0;
var Ge = new F.Model.ModelFactory(ie);
var z = le(de());
var je = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u062D\u062F\u062B \u062E\u0637\u0623. \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649!"
    },
    et = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u0995\u09CB\u09A1 \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0995\u09BF\u099B\u09C1 \u09AD\u09C1\u09B2 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8!"
    },
    tt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Best\xE4tigungscode gesendet.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut!"
    },
    rt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "C\xF3digo de verificaci\xF3n enviado.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Algo sali\xF3 mal. \xA1Por favor, intenta de nuevo!"
    },
    at = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Code de v\xE9rification envoy\xE9.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Quelque chose a mal tourn\xE9. Veuillez r\xE9essayer !"
    },
    nt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Codice di verifica inviato.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Qualcosa \xE8 andato storto. Per favore, riprova!"
    },
    ot = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1795\u17D2\u1789\u17BE\u17D4",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17BE\u178F\u17A1\u17BE\u1784\u17D4 \u179F\u17BC\u1798\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u1798\u17D2\u178A\u1784\u1791\u17C0\u178F!"
    },
    it = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\uC778\uC99D \uCF54\uB4DC\uAC00 \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694!"
    },
    st = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445 \u043A\u043E\u0434 \u0438\u043B\u0433\u044D\u044D\u044D\u0433\u0434\u043B\u044D\u044D.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u042F\u043C\u0430\u0440 \u043D\u044D\u0433\u044D\u043D \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430. Anhdaah \u0434\u0430\u0445\u0438\u043D \u043E\u0440\u043E\u043B\u0434\u043E\u043D\u043E \u0443\u0443!"
    },
    lt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Kod weryfikacyjny zosta\u0142 wys\u0142any.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Co\u015B posz\u0142o nie tak. Spr\xF3buj ponownie!"
    },
    dt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "C\xF3digo de verifica\xE7\xE3o enviado.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Algo correu mal. Por favor, tente novamente!"
    },
    ut = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"
    },
    ct = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0D91\u0DC0\u0DD3\u0DBA.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0D9A\u0DD2\u0DC3\u0DD2\u0DBA\u0DB8\u0DCA \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DCA \u0DC3\u0DD2\u0DAF\u0DD4 \u0DC0\u0DD2\u0DBA. \u0D9A\u0DBB\u0DD4\u0DAB\u0DCF\u0D9A\u0DBB \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1!"
    },
    ft = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Msimbo wa uthibitisho umetumwa.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Kitu kimekwenda vibaya. Tafadhali jaribu tena!"
    },
    vt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BCD \u0B95\u0BCB\u0B9F\u0BC1 \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0B8F\u0BA4\u0BBE\u0BB5\u0BA4\u0BC1 \u0BA4\u0BB5\u0BB1\u0BC1 \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB2\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD!"
    },
    ht = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E36\u0E49\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07!"
    },
    bt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Do\u011Frulama kodu g\xF6nderildi.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Bir hata oldu. L\xFCtfen tekrar deneyin!"
    },
    mt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Tasdiqlash kodi yuborildi.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Nimadir noto'g'ri ketdi. Iltimos, qayta urinib ko'ring!"
    },
    yt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "Tasdiqlash kodi yuborildi.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "Nimadir noto'g'ri ketdi. Iltimos, qayta urinib ko'ring!"
    },
    _t = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "M\xE3 x\xE1c minh \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi.",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u0110\xE3 x\u1EA3y ra s\u1EF1 c\u1ED1. Vui l\xF2ng th\u1EED l\u1EA1i!"
    },
    Ct = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u3002",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u51FA\u9519\u4E86\u3002\u8BF7\u518D\u8BD5\u4E00\u6B21\uFF01"
    },
    gt = {
        "675GMX06ZUCTQszSIHHB3w#Value.-72021336.1": "\u9A57\u8B49\u78BC\u5DF2\u5BC4\u51FA\u3002",
        "980GttCZu0e1SczDlc1_XA#Value.-828138845.1": "\u767C\u751F\u932F\u8AA4\u3002\u8ACB\u518D\u8A66\u4E00\u6B21\uFF01"
    },
    We = {
        "ar-001": {
            translations: je,
            isRTL: !0
        },
        "bn-BD": {
            translations: et,
            isRTL: !1
        },
        "de-DE": {
            translations: tt,
            isRTL: !1
        },
        "es-ES": {
            translations: rt,
            isRTL: !1
        },
        "fr-FR": {
            translations: at,
            isRTL: !1
        },
        "it-IT": {
            translations: nt,
            isRTL: !1
        },
        "km-KH": {
            translations: ot,
            isRTL: !1
        },
        "ko-KR": {
            translations: it,
            isRTL: !1
        },
        "mn-MN": {
            translations: st,
            isRTL: !1
        },
        "pl-PL": {
            translations: lt,
            isRTL: !1
        },
        "pt-PT": {
            translations: dt,
            isRTL: !1
        },
        "ru-RU": {
            translations: ut,
            isRTL: !1
        },
        "si-LK": {
            translations: ct,
            isRTL: !1
        },
        "sw-KE": {
            translations: ft,
            isRTL: !1
        },
        "ta-IN": {
            translations: vt,
            isRTL: !1
        },
        "th-TH": {
            translations: ht,
            isRTL: !1
        },
        "tr-TR": {
            translations: bt,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: mt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: yt,
            isRTL: !1
        },
        "vi-VN": {
            translations: _t,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ct,
            isRTL: !1
        },
        "zh-TW": {
            translations: gt,
            isRTL: !1
        }
    };

function Fe(f, d, l) {
    window.OTPTimerInterval = setInterval(() => {
        f.SetTimer()
    }, 1e3)
}
o(Fe, "default");

function Oe(f, d, l) {
    window.OTPTimerInterval && clearInterval(window.OTPTimerInterval)
}
o(Oe, "default");
var c = V; {
    let d = class d extends c.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, We);
            var a = this.controller;
            this.clientActionProxies = {
                setTimer$Action: o(function() {
                    return a.executeActionInsideJSNode(a._setTimer$Action.bind(a), a.callContext(), function(n) {
                        return {}
                    }, function() {}, "SetTimer")
                }, "setTimer$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _setTimerInterval$Action() {
            return this.hasOwnProperty("__setTimerInterval$Action") || (this.__setTimerInterval$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("SetTimerInterval", function(n) {
                    n && (n.setAttribute("code.function", "SetTimerInterval"), n.setAttribute("outsystems.function.key", "171a1b10-f8d6-4609-8c3b-fb947319eff4"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetTimerInterval"), e = t.callContext(e), c.Logger.startActiveSpan("SetTImer", function(s) {
                            s && (s.setAttribute("code.function", "SetTImer"), s.setAttribute("outsystems.function.key", "29b9b936-31c0-4521-bbbf-1317cbc08ae2"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Fe, "SetTImer", "SetTimerInterval", null, function(h) {}, {
                                    SetTimer: t.clientActionProxies.setTimer$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__setTimerInterval$Action
        }
        set _setTimerInterval$Action(e) {
            this.__setTimerInterval$Action = e
        }
        get _cFDVerifyUserServerError$Action() {
            return this.hasOwnProperty("__cFDVerifyUserServerError$Action") || (this.__cFDVerifyUserServerError$Action = function(e, r, t) {
                var a = this.model,
                    n = this.controller,
                    s = this.idService;
                return c.Logger.startActiveSpan("CFDVerifyUserServerError", function(h) {
                    return h && (h.setAttribute("code.function", "CFDVerifyUserServerError"), h.setAttribute("outsystems.function.key", "1f57bb98-cfd0-40a4-a14f-cd9cacd6c180"), h.setAttribute("outsystems.function.owner.name", "dashboard"), h.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), h.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        n.ensureControllerAlive("CFDVerifyUserServerError"), t = n.callContext(t);
                        var i = new c.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.CFDVerifyUserServerError$vars")));
                        return i.value.errorInfoInLocal = e.clone(), i.value.errorCodeInLocal = r, c.Flow.executeAsyncFlow(function() {
                            return c.Flow.executeSequence(function() {
                                if (i.value.errorCodeInLocal === "RateLimit") return n.closeModal$Action(t).then(function() {
                                    E.toasterError$Action(i.value.errorInfoInLocal.errorMessasgeAttr, t)
                                });
                                a.variables.passwordVar = i.value.errorInfoInLocal, a.variables.modalContentVar = "reset"
                            })
                        })
                    }, function() {
                        h && h.end()
                    })
                }, 1)
            }), this.__cFDVerifyUserServerError$Action
        }
        set _cFDVerifyUserServerError$Action(e) {
            this.__cFDVerifyUserServerError$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "37808938-8408-4d8c-91f1-0fe879486875"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var s = new c.DataTypes.VariableHolder,
                            h = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return r.flush(), E.gET_ClientOnboardingStatus$Action(e).then(function(i) {
                                h.value = i
                            }).then(function() {
                                s.value = E.savedAuthInfo$Action(e), r.variables.clientInformationVar = s.value.responseOut, A.setCFDTimer(0), r.variables.clientInformationVar.dataAttr.userAttr.user_metadataAttr.phone_verifiedAttr = h.value.responseOut.dataAttr.verificationAttr.phone_verifiedAttr
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return c.Logger.startActiveSpan("OnClickNext", function(s) {
                    return s && (s.setAttribute("code.function", "OnClickNext"), s.setAttribute("outsystems.function.key", "69fad7d9-99a6-44ea-87ac-01e0e3e51dbf"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnClickNext"), r = a.callContext(r);
                        var h = new c.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.OnClickNext$vars")));
                        h.value.passwordInfoInLocal = e.clone();
                        var i = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return t.variables.isFetchingDataVar = !0, t.variables.passwordVar = h.value.passwordInfoInLocal, c.Flow.executeSequence(function() {
                                if (A.getCFDTimer() > 0 || A.getCFDTimer() !== c.BuiltinFunctions.nullIdentifier()) t.variables.isFetchingDataVar = !1, t.variables.modalContentVar = "verify";
                                else return t.flush(), E.pOST_Reauthenticate$Action((function() {
                                    var _ = new Q;
                                    return _.emailAttr = t.variables.clientInformationVar.dataAttr.userAttr.user_metadataAttr.emailAttr, _.otpTypeAttr = "mt5_password_change", _
                                })(), r).then(function(_) {
                                    i.value = _
                                }).then(function() {
                                    return c.Flow.executeSequence(function() {
                                        if (i.value.isErrorOut) t.variables.oTPConfigVar.isErrorAttr = !0, t.variables.oTPConfigVar.errorMessageAttr = i.value.errorResponseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr, t.variables.isFetchingDataVar = !1, t.variables.modalContentVar = "verify";
                                        else return t.variables.modalContentVar = "verify", t.variables.isFetchingDataVar = !1, A.setCFDTimer(59), a._setTimerInterval$Action(r), c.Flow.executeSequence(function() {
                                            if (A.getCFDTimer() === 0) return E.toasterError$Action(c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("980GttCZu0e1SczDlc1_XA#Value.-828138845.1", "Something went wrong. Please try again!"), r), a.closeModal$Action(r)
                                        })
                                    })
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _clearInterval$Action() {
            return this.hasOwnProperty("__clearInterval$Action") || (this.__clearInterval$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("ClearInterval", function(n) {
                    n && (n.setAttribute("code.function", "ClearInterval"), n.setAttribute("outsystems.function.key", "ae1306e4-94b1-448f-9a29-a523b49294b3"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ClearInterval"), e = t.callContext(e), c.Logger.startActiveSpan("SetTImer", function(s) {
                            s && (s.setAttribute("code.function", "SetTImer"), s.setAttribute("outsystems.function.key", "7671f109-2ddc-4d7d-9c9b-3407ecf87ae7"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Oe, "SetTImer", "ClearInterval", null, function(h) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__clearInterval$Action
        }
        set _clearInterval$Action(e) {
            this.__clearInterval$Action = e
        }
        get _gobacktoResetModal$Action() {
            return this.hasOwnProperty("__gobacktoResetModal$Action") || (this.__gobacktoResetModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("GobacktoResetModal", function(n) {
                    n && (n.setAttribute("code.function", "GobacktoResetModal"), n.setAttribute("outsystems.function.key", "af26c51f-584a-41f8-9a24-ff6bd2339845"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GobacktoResetModal"), e = t.callContext(e), r.variables.modalContentVar = "reset", r.variables.isFetchingDataVar = !1, r.variables.passwordVar.isErrorAttr = !1, r.variables.passwordVar.errorMessasgeAttr = c.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__gobacktoResetModal$Action
        }
        set _gobacktoResetModal$Action(e) {
            this.__gobacktoResetModal$Action = e
        }
        get _resendVerificationCode$Action() {
            return this.hasOwnProperty("__resendVerificationCode$Action") || (this.__resendVerificationCode$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("ResendVerificationCode", function(n) {
                    return n && (n.setAttribute("code.function", "ResendVerificationCode"), n.setAttribute("outsystems.function.key", "b4abdb3c-103d-4cc6-8d9a-358989702fc5"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendVerificationCode"), e = t.callContext(e);
                        var s = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return c.Flow.executeSequence(function() {
                                if (!(A.getCFDTimer() > 0)) return A.setCFDTimer(59), r.variables.oTPConfigVar.isErrorAttr = !1, r.variables.oTPConfigVar.errorMessageAttr = c.BuiltinFunctions.nullTextIdentifier(), t._setTimerInterval$Action(e), E.toasterSuccess$Action(c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("675GMX06ZUCTQszSIHHB3w#Value.-72021336.1", "Verification code sent."), e), r.flush(), E.pOST_Reauthenticate$Action((function() {
                                    var h = new Q;
                                    return h.emailAttr = r.variables.authenticationCodeTypeVar === "email" ? r.variables.clientInformationVar.dataAttr.userAttr.emailAttr : "", h.phoneAttr = r.variables.authenticationCodeTypeVar === "phone" ? "+" + r.variables.clientInformationVar.dataAttr.userAttr.phoneAttr : "", h.otpTypeAttr = "mt5_password_change", h
                                })(), e).then(function(h) {
                                    s.value = h
                                }).then(function() {
                                    s.value.isErrorOut && (r.variables.oTPConfigVar.isErrorAttr = s.value.isErrorOut, r.variables.oTPConfigVar.errorMessageAttr = s.value.responseOut.dataAttr.messageAttr)
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resendVerificationCode$Action
        }
        set _resendVerificationCode$Action(e) {
            this.__resendVerificationCode$Action = e
        }
        get _cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action() {
            return this.hasOwnProperty("__cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action") || (this.__cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return c.Logger.startActiveSpan("CFDVerifyUserSendVerifactionCodeBasedOnAuthType", function(s) {
                    return s && (s.setAttribute("code.function", "CFDVerifyUserSendVerifactionCodeBasedOnAuthType"), s.setAttribute("outsystems.function.key", "b7e2fdfa-47c7-4df2-aeb5-70b73ec0d699"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        a.ensureControllerAlive("CFDVerifyUserSendVerifactionCodeBasedOnAuthType"), r = a.callContext(r);
                        var h = new c.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.CFDVerifyUserSendVerifactionCodeBasedOnAuthType$vars")));
                        h.value.authenticationCodeType2InLocal = e;
                        var i = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return t.variables.authenticationCodeTypeVar = h.value.authenticationCodeType2InLocal, A.setCFDTimer(59), a._setTimerInterval$Action(r), t.flush(), E.pOST_Reauthenticate$Action((function() {
                                var _ = new Q;
                                return _.emailAttr = t.variables.authenticationCodeTypeVar === "email" ? t.variables.clientInformationVar.dataAttr.userAttr.emailAttr : "", _.phoneAttr = t.variables.authenticationCodeTypeVar === "phone" ? "+" + t.variables.clientInformationVar.dataAttr.userAttr.phoneAttr : "", _.otpTypeAttr = "mt5_password_change", _
                            })(), r).then(function(_) {
                                i.value = _
                            }).then(function() {
                                i.value.isErrorOut && (t.variables.oTPConfigVar.isErrorAttr = !0, t.variables.oTPConfigVar.errorMessageAttr = i.value.responseOut.dataAttr.messageAttr)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action
        }
        set _cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action(e) {
            this.__cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "ccbd5716-d100-402e-b7fe-97bbfa253882"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), t._clearInterval$Action(e), A.setCFDTimer(c.BuiltinFunctions.nullIdentifier())
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _setTimer$Action() {
            return this.hasOwnProperty("__setTimer$Action") || (this.__setTimer$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("SetTimer", function(n) {
                    n && (n.setAttribute("code.function", "SetTimer"), n.setAttribute("outsystems.function.key", "efe9afcf-0727-43c9-8a42-2d77e22463ee"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetTimer"), e = t.callContext(e), A.getCFDTimer() === 0 ? t._clearInterval$Action(e) : A.setCFDTimer(A.getCFDTimer() - 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__setTimer$Action
        }
        set _setTimer$Action(e) {
            this.__setTimer$Action = e
        }
        setTimerInterval$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("SetTimerInterval__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetTimerInterval"), t.setAttribute("outsystems.function.key", "171a1b10-f8d6-4609-8c3b-fb947319eff4"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setTimerInterval$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        cFDVerifyUserServerError$Action(e, r, t) {
            var a = this.controller;
            return c.Logger.startActiveSpan("CFDVerifyUserServerError__proxy", function(n) {
                return n && (n.setAttribute("code.function", "CFDVerifyUserServerError"), n.setAttribute("outsystems.function.key", "1f57bb98-cfd0-40a4-a14f-cd9cacd6c180"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._cFDVerifyUserServerError$Action, t, e, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "37808938-8408-4d8c-91f1-0fe879486875"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickNext$Action(e, r) {
            var t = this.controller;
            return c.Logger.startActiveSpan("OnClickNext__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnClickNext"), a.setAttribute("outsystems.function.key", "69fad7d9-99a6-44ea-87ac-01e0e3e51dbf"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickNext$Action, r, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        clearInterval$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("ClearInterval__proxy", function(t) {
                t && (t.setAttribute("code.function", "ClearInterval"), t.setAttribute("outsystems.function.key", "ae1306e4-94b1-448f-9a29-a523b49294b3"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._clearInterval$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        gobacktoResetModal$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("GobacktoResetModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "GobacktoResetModal"), t.setAttribute("outsystems.function.key", "af26c51f-584a-41f8-9a24-ff6bd2339845"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._gobacktoResetModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        resendVerificationCode$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("ResendVerificationCode__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendVerificationCode"), t.setAttribute("outsystems.function.key", "b4abdb3c-103d-4cc6-8d9a-358989702fc5"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._resendVerificationCode$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action(e, r) {
            var t = this.controller;
            return c.Logger.startActiveSpan("CFDVerifyUserSendVerifactionCodeBasedOnAuthType__proxy", function(a) {
                return a && (a.setAttribute("code.function", "CFDVerifyUserSendVerifactionCodeBasedOnAuthType"), a.setAttribute("outsystems.function.key", "b7e2fdfa-47c7-4df2-aeb5-70b73ec0d699"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action, r, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "ccbd5716-d100-402e-b7fe-97bbfa253882"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setTimer$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("SetTimer__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetTimer"), t.setAttribute("outsystems.function.key", "efe9afcf-0727-43c9-8a42-2d77e22463ee"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setTimer$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get closeModal$Action() {
            return this.hasOwnProperty("_closeModal$Action") || (this._closeModal$Action = function() {
                return Promise.resolve()
            }), this._closeModal$Action
        }
        set closeModal$Action(e) {
            this._closeModal$Action = e
        }
        get onSuccess$Action() {
            return this.hasOwnProperty("_onSuccess$Action") || (this._onSuccess$Action = function() {
                return Promise.resolve()
            }), this._onSuccess$Action
        }
        set onSuccess$Action(e) {
            this._onSuccess$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let f = d;
    Z = f, Z.registerVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.CFDVerifyUserServerError$vars", [{
        name: "ErrorInfo",
        attrName: "errorInfoInLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }, {
        name: "ErrorCode",
        attrName: "errorCodeInLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), Z.registerVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.OnClickNext$vars", [{
        name: "passwordInfo",
        attrName: "passwordInfoInLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }]), Z.registerVariableGroupType("dashboard.CFDs.CFDResetPasswordModal.CFDVerifyUserSendVerifactionCodeBasedOnAuthType$vars", [{
        name: "AuthenticationCodeType2",
        attrName: "authenticationCodeType2InLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var Z, ze = new c.Controller.ControllerFactory(Z, U);
var y = le(de());
var At = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u0647\u0630\u0627 \u0633\u064A\u0639\u064A\u062F \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u0643\u0644 \u062D\u0633\u0627\u0628\u0627\u062A MT5 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5"
    },
    pt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u098F\u099F\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09AE\u09B8\u09CD\u09A4 MT5 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7\u09B0 \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09B0\u09BF\u09B8\u09C7\u099F \u0995\u09B0\u09AC\u09C7\u0964",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09B0\u09BF\u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8"
    },
    wt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Weiter",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Passwort",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Dies setzt das Passwort f\xFCr alle deine MT5-Konten zur\xFCck.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5-Passwort zur\xFCcksetzen"
    },
    Et = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Siguiente",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Contrase\xF1a",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Esto restablecer\xE1 la contrase\xF1a de todas tus cuentas MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "Restablecer contrase\xF1a de MT5"
    },
    St = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Suivant",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Mot de passe",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Cela r\xE9initialisera le mot de passe de tous vos comptes MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "R\xE9initialiser le mot de passe MT5"
    },
    Vt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Successivo",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Password",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Questo reimposta la password per tutti i tuoi account MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "Reimposta password MT5"
    },
    Tt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u1794\u1793\u17D2\u1791\u17B6\u1794\u17CB",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u1793\u17C1\u17C7\u0E08\u0E30\u1780\u17C6\u178E\u178F\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1782\u178E\u1793\u17B8 MT5 \u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u179C\u17B7\u1789\u17D4",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u1780\u17C6\u178E\u178F\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB MT5 \u1798\u17D2\u178F\u1784\u1791\u17C0\u178F"
    },
    Pt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\uB2E4\uC74C",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\uBE44\uBC00\uBC88\uD638",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\uC774 \uC791\uC5C5\uC740 \uBAA8\uB4E0 MT5 \uACC4\uC815\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD569\uB2C8\uB2E4.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
    },
    Ft = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0414\u0430\u0440\u0430\u0430\u0433\u0438\u0439\u043D",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u041D\u0443\u0443\u0446 \u04AF\u0433",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u042D\u043D\u044D \u043D\u044C \u0442\u0430\u043D\u044B \u0431\u04AF\u0445 MT5 \u0434\u0430\u043D\u0441\u043D\u044B \u043D\u0443\u0443\u0446 \u04AF\u0433\u0438\u0439\u0433 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \u043D\u0443\u0443\u0446 \u04AF\u0433 \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0445"
    },
    Ot = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Nast\u0119pny",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Has\u0142o",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "To zresetuje has\u0142o dla wszystkich Twoich kont MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "Zresetuj has\u0142o MT5"
    },
    Dt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Seguinte",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Palavra-passe",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Isto ir\xE1 redefinir a palavra-passe de todas as suas contas MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "Redefinir palavra-passe do MT5"
    },
    It = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0414\u0430\u043B\u0435\u0435",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u041F\u0430\u0440\u043E\u043B\u044C",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u042D\u0442\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0432\u0430\u0448\u0438\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432 MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C MT5"
    },
    kt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0D8A\u0DC5\u0D9F",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u0DB8\u0DD9\u0DBA \u0D94\u0DB6\u0DDA \u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 MT5 \u0D9C\u0DD2\u0DAB\u0DD4\u0DB8\u0DCA \u0DC3\u0DB3\u0DC4\u0DCF \u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DC3\u0D9A\u0DC3\u0DBA\u0DD2.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DC3\u0D9A\u0DC3\u0DB1\u0DCA\u0DB1"
    },
    Rt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Ifuatayo",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Nenosiri",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Hii itarejesha nywila za akaunti zako zote za MT5.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "Weka upya nenosiri la MT5"
    },
    xt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0C24\u0C26\u0C41\u0C2A\u0C30\u0C3F",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u0B87\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BA4\u0BC1 \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 MT5 \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BC8 \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8\u0B95\u0BCD\u0B95\u0BC1"
    },
    Ht = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u0E16\u0E31\u0E14\u0E44\u0E1B",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u0E2A\u0E34\u0E48\u0E07\u0E19\u0E35\u0E49\u0E08\u0E30\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35 MT5 \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 MT5"
    },
    Ut = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Sonraki",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u015Eifre",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Bu i\u015Flem t\xFCm MT5 hesaplar\u0131n\u0131z\u0131n \u015Fifresini s\u0131f\u0131rlar.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 \u015Fifresini s\u0131f\u0131rla"
    },
    Bt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Keyingi",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Parol",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Bu, barcha MT5 hisoblaringizning parolni tiklaydi.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 parolani tiklash"
    },
    Nt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Keyingi",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "Parol",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Bu, barcha MT5 hisoblaringizning parolni tiklaydi.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "MT5 parolani tiklash"
    },
    Mt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "Ti\u1EBFp theo",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "M\u1EADt kh\u1EA9u",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "Thao t\xE1c n\xE0y s\u1EBD \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho t\u1EA5t c\u1EA3 c\xE1c t\xE0i kho\u1EA3n MT5 c\u1EE7a b\u1EA1n.",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u MT5"
    },
    $t = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u4E0B\u4E00\u6B65",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u5BC6\u7801",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u8FD9\u5C06\u91CD\u7F6E\u60A8\u6240\u6709MT5\u8D26\u6237\u7684\u5BC6\u7801\u3002",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u91CD\u7F6E MT5 \u5BC6\u7801"
    },
    Lt = {
        "b8ipns9HckCrxpg2KOitFw#Value": "\u4E0B\u4E00\u6B65",
        "S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1": "\u5BC6\u78BC",
        "u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1": "\u9019\u5C07\u91CD\u8A2D\u60A8\u6240\u6709\u7684 MT5 \u5E33\u6236\u5BC6\u78BC\u3002",
        "MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1": "\u91CD\u8A2D MT5 \u5BC6\u78BC"
    },
    qe = {
        "ar-001": {
            translations: At,
            isRTL: !0
        },
        "bn-BD": {
            translations: pt,
            isRTL: !1
        },
        "de-DE": {
            translations: wt,
            isRTL: !1
        },
        "es-ES": {
            translations: Et,
            isRTL: !1
        },
        "fr-FR": {
            translations: St,
            isRTL: !1
        },
        "it-IT": {
            translations: Vt,
            isRTL: !1
        },
        "km-KH": {
            translations: Tt,
            isRTL: !1
        },
        "ko-KR": {
            translations: Pt,
            isRTL: !1
        },
        "mn-MN": {
            translations: Ft,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ot,
            isRTL: !1
        },
        "pt-PT": {
            translations: Dt,
            isRTL: !1
        },
        "ru-RU": {
            translations: It,
            isRTL: !1
        },
        "si-LK": {
            translations: kt,
            isRTL: !1
        },
        "sw-KE": {
            translations: Rt,
            isRTL: !1
        },
        "ta-IN": {
            translations: xt,
            isRTL: !1
        },
        "th-TH": {
            translations: Ht,
            isRTL: !1
        },
        "tr-TR": {
            translations: Ut,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Bt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Nt,
            isRTL: !1
        },
        "vi-VN": {
            translations: Mt,
            isRTL: !1
        },
        "zh-CN": {
            translations: $t,
            isRTL: !1
        },
        "zh-TW": {
            translations: Lt,
            isRTL: !1
        }
    };
var w = V; {
    let d = class d extends w.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, qe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return w.Logger.startActiveSpan("PasswordPolicyCompliant", function(s) {
                    s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "00aab00d-66bc-4039-98c6-99f3f74aaeb5"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("PasswordPolicyCompliant"), r = a.callContext(r);
                        var h = new w.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.CFDs.CFDChangePassword.PasswordPolicyCompliant$vars")));
                        h.value.isValidInLocal = e, t.variables.validPasswordVar = h.value.isValidInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _onCloseOnClick$Action() {
            return this.hasOwnProperty("__onCloseOnClick$Action") || (this.__onCloseOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return w.Logger.startActiveSpan("OnCloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "OnCloseOnClick"), n.setAttribute("outsystems.function.key", "325a3b8d-7fdc-4e0c-8fb4-f277fb76eb99"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnCloseOnClick"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
                            return t.goPreviousPage$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onCloseOnClick$Action
        }
        set _onCloseOnClick$Action(e) {
            this.__onCloseOnClick$Action = e
        }
        get _passwordInputOnChange$Action() {
            return this.hasOwnProperty("__passwordInputOnChange$Action") || (this.__passwordInputOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return w.Logger.startActiveSpan("PasswordInputOnChange", function(n) {
                    n && (n.setAttribute("code.function", "PasswordInputOnChange"), n.setAttribute("outsystems.function.key", "78154e99-5bc3-4820-9ecc-f39a8bc53996"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("PasswordInputOnChange"), e = t.callContext(e), r.widgets.get(a.getId("PasswordInput")).validAttr = !0, r.widgets.get(a.getId("PasswordInput")).validationMessageAttr = w.BuiltinFunctions.nullIdentifier().toString()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__passwordInputOnChange$Action
        }
        set _passwordInputOnChange$Action(e) {
            this.__passwordInputOnChange$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return w.Logger.startActiveSpan("OnClickShowPassword", function(n) {
                    n && (n.setAttribute("code.function", "OnClickShowPassword"), n.setAttribute("outsystems.function.key", "961ba56c-de3c-485b-8dc7-ad9ac38965d1"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), e = t.callContext(e), r.variables.showPasswordVar = !r.variables.showPasswordVar
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return w.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "cf3f4e07-12e4-4dd2-b944-6717b3b2b6c0"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.widgets.get(a.getId("PasswordInput")).validAttr = !r.variables.passwordInformationIn.isErrorAttr, r.widgets.get(a.getId("PasswordInput")).validationMessageAttr = r.variables.passwordInformationIn.errorMessasgeAttr, r.variables.passwordInformationIn.passwordAttr = r.variables.passwordInformationIn.passwordAttr, r.variables.validPasswordVar = !r.variables.passwordInformationIn.isErrorAttr
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        passwordPolicyCompliant$Action(e, r) {
            var t = this.controller;
            return w.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(a) {
                a && (a.setAttribute("code.function", "PasswordPolicyCompliant"), a.setAttribute("outsystems.function.key", "00aab00d-66bc-4039-98c6-99f3f74aaeb5"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, r, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onCloseOnClick$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnCloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnCloseOnClick"), t.setAttribute("outsystems.function.key", "325a3b8d-7fdc-4e0c-8fb4-f277fb76eb99"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onCloseOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        passwordInputOnChange$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("PasswordInputOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "PasswordInputOnChange"), t.setAttribute("outsystems.function.key", "78154e99-5bc3-4820-9ecc-f39a8bc53996"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._passwordInputOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "961ba56c-de3c-485b-8dc7-ad9ac38965d1"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickShowPassword$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "cf3f4e07-12e4-4dd2-b944-6717b3b2b6c0"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClickNext$Action() {
            return this.hasOwnProperty("_onClickNext$Action") || (this._onClickNext$Action = function() {
                return Promise.resolve()
            }), this._onClickNext$Action
        }
        set onClickNext$Action(e) {
            this._onClickNext$Action = e
        }
        get goPreviousPage$Action() {
            return this.hasOwnProperty("_goPreviousPage$Action") || (this._goPreviousPage$Action = function() {
                return Promise.resolve()
            }), this._goPreviousPage$Action
        }
        set goPreviousPage$Action(e) {
            this._goPreviousPage$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let f = d;
    Ie = f, Ie.registerVariableGroupType("dashboard.CFDs.CFDChangePassword.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var Ie, Ke = new w.Controller.ControllerFactory(Ie, U);
var ke = R.PlaceholderContent,
    Qr = R.IteratorPlaceholderContent,
    Gt = o(function() {
        var f = N(function(d) {
            var l = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                n = L,
                s = G,
                h = {
                    props: d,
                    validateWidget: o(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                i = l,
                _ = $,
                C = M,
                g = B();
            return y.createElement("div", d.rootNodeProperties, y.createElement(m, {
                align: 0,
                animate: !1,
                style: "cfd-password__container",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ResetPasswordModal"
                },
                _widgetRecordProvider: i
            }, y.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: start; display: flex;"
                },
                style: "hide-mobile",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "DesktopHeader"
                },
                _widgetRecordProvider: i
            }, y.createElement(X, {
                enabled: !l.variables.isFetchingDataIn,
                extendedProperties: {
                    style: "background: none; border: none; margin: 0; padding: 0;"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        return e.onCloseOnClick$Action(e.callContext(u))
                    })
                }, "onClick"),
                style: "cursor-pointer",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: i,
                enabled_dataFetchStatus: S.calculateDataFetchStatus(l.variables._isFetchingDataInDataFetchStatus)
            }, y.createElement(K, {
                image: q.VersionedURL.getVersionedUrl("img/dashboard.back_btn.svg"),
                style: "rotate-180",
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            }))), y.createElement(m, {
                align: 0,
                animate: !1,
                style: "hide-desktop full-width text-align-right",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "MobileHeader"
                },
                _widgetRecordProvider: i
            }, y.createElement(X, {
                enabled: !l.variables.isFetchingDataIn,
                extendedProperties: {
                    style: "background: none; border: none; cursor: pointer; margin: none; padding: none;"
                },
                gridProperties: {
                    width: "auto"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        return e.onCloseOnClick$Action(e.callContext(u))
                    })
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "5"
                },
                _widgetRecordProvider: i,
                enabled_dataFetchStatus: S.calculateDataFetchStatus(l.variables._isFetchingDataInDataFetchStatus)
            }, y.createElement(K, {
                image: q.VersionedURL.getVersionedUrl("img/dashboard.buttonclose.svg"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "6"
                },
                _widgetRecordProvider: i
            }))), y.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Header"
                },
                _widgetRecordProvider: i
            }, y.createElement(O, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "font-bold font-size-h5 flex-1 margin-bottom-s",
                value: I.resolve(k.TranslationsService).getMessage("MFfXk7aY90GbrWdeJAB6Ag#ValueExpression.1249653342.1", "Reset MT5 password"),
                _idProps: {
                    service: r,
                    uuid: "8"
                },
                _widgetRecordProvider: i
            }), y.createElement(O, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                value: I.resolve(k.TranslationsService).getMessage("u9torvoT0UuuqqZz3GUBrw#ValueExpression.-962957512.1", "This will reset the password for all your MT5 accounts."),
                _idProps: {
                    service: r,
                    uuid: "9"
                },
                _widgetRecordProvider: i
            })), y.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Body"
                },
                _widgetRecordProvider: i
            }, y.createElement(Y, {
                _validationProps: {
                    validationService: t
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form",
                _idProps: {
                    service: r,
                    name: "Form_SetPassword"
                },
                _widgetRecordProvider: i
            }, y.createElement(fe, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: A.getLanguage() === "en-US",
                    ExtendedClass: "cfd-password-input__wrapper"
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t,
                    validationParentId: r.getId("Form_SetPassword")
                },
                _idProps: {
                    service: r,
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    icon: new ke(function() {
                        return [y.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(r.getId("ShowPasswordImages.Style"), function() {
                                return l.widgets.get(r.getId("PasswordInput")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                            }, function() {
                                return l.widgets.get(r.getId("PasswordInput")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ShowPasswordImages"
                            },
                            _widgetRecordProvider: i
                        }, _(l.variables.showPasswordVar, !1, this, function() {
                            return [y.createElement(K, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                        e.onClickShowPassword$Action(e.callContext(u))
                                    }, "onClick")
                                },
                                image: q.VersionedURL.getVersionedUrl("img/dashboard.eyeunsplash.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [y.createElement(K, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                        e.onClickShowPassword$Action(e.callContext(u))
                                    }, "onClick")
                                },
                                image: q.VersionedURL.getVersionedUrl("img/dashboard.eyeslashsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: i
                            })]
                        }))]
                    }),
                    input: new ke(function() {
                        return [y.createElement(Me, {
                            _validationProps: {
                                validationService: t,
                                validationParentId: r.getId("Form_SetPassword")
                            },
                            enabled: !0,
                            extendedProperties: {
                                type: l.getCachedValue(r.getId("PasswordInput.type"), function() {
                                    return l.variables.showPasswordVar ? "text" : "password"
                                }, function() {
                                    return l.variables.showPasswordVar
                                }),
                                autoComplete: "new-password"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 16,
                            onChange: o(function() {
                                var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                e.passwordInputOnChange$Action(e.callContext(u))
                            }, "onChange"),
                            prompt: I.resolve(k.TranslationsService).getMessage("S77KUsBcjU2FknyNmKEZUQ#ValueExpression.1281629883.1", "Password"),
                            style: "cfd-password-input  form-control",
                            variable: l.createVariable(Ue.DataTypes.Text, l.variables.passwordInformationIn.passwordAttr, function(u) {
                                l.variables.passwordInformationIn.passwordAttr = u
                            }),
                            _idProps: {
                                service: r,
                                name: "PasswordInput"
                            },
                            _widgetRecordProvider: i,
                            variable_dataFetchStatus: S.calculateDataFetchStatus(l.variables._passwordInformationInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [n(l.variables._passwordInformationInDataFetchStatus), n(l.variables.passwordInformationIn.passwordAttr), n(l.variables.showPasswordVar), n(l.widgets.get(r.getId("PasswordInput")).validAttr)]
            }), y.createElement(m, {
                align: 0,
                animate: !1,
                style: "padding-x-base",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "17"
                },
                _widgetRecordProvider: i
            }, y.createElement(ve, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasAtLeastUpperCase: !0,
                    HasAtLeastOneNumber: !0,
                    HasAtLeastLowerCase: !0,
                    Type: "CREATE",
                    MustNotContainSpaces: !0,
                    HasAtLeastOneSpecialCharacter: !0,
                    Password: l.variables.passwordInformationIn.passwordAttr,
                    _passwordInDataFetchStatus: S.calculateDataFetchStatus(l.variables._passwordInformationInDataFetchStatus),
                    Length: 8
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    compliant$Action: o(function(u) {
                        var D = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.passwordPolicyCompliant$Action(u, e.callContext(D))
                    }, "compliant$Action")
                },
                _validationProps: {
                    validationService: t,
                    validationParentId: r.getId("Form_SetPassword")
                },
                _idProps: {
                    service: r,
                    uuid: "18",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })))), y.createElement(m, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "cfd-password__footer",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Footer"
                },
                _widgetRecordProvider: i
            }, y.createElement(ce, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "cfd-password__footer--btn",
                    ShowLabelOnLoading: !0,
                    IsLoading: l.variables.isFetchingDataIn,
                    _isLoadingInDataFetchStatus: S.calculateDataFetchStatus(l.variables._isFetchingDataInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "20",
                    alias: "3"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    button: new ke(function() {
                        return [y.createElement(X, {
                            enabled: l.variables.validPasswordVar === !0,
                            extendedProperties: {
                                form: r.getId("Form_SetPassword"),
                                type: "submit"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                e.onClickNext$Action(l.variables.passwordInformationIn, e.callContext(u))
                            }, "onClick"),
                            style: "btn btn-primary btn-rounded",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "21"
                            },
                            _widgetRecordProvider: i
                        }, y.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        }), C(s("b8ipns9HckCrxpg2KOitFw#Value", "Next")))]
                    })
                },
                _dependencies: [n(l.variables.validPasswordVar)]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "CFDChangePassword",
                    functionKey: "5c14621d-831a-45f7-ad70-a5fb5a248096",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDChangePassword",
            modelFactory: $e,
            controllerFactory: Ke
        });
        return f.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDChangePassword.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [fe, ve, ce]
        }, f
    }, "componentFactory"),
    Re = Gt();
var b = le(de());
var Wt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u0623\u0631\u0633\u0644 \u0627\u0644\u0631\u0645\u0632 \u0625\u0644\u0649 \u0627\u0644\u0647\u0627\u062A\u0641",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u0623\u0631\u0633\u0644 \u0627\u0644\u0631\u0645\u0632 \u0625\u0644\u0649 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0623\u0648",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0623\u0639\u062F \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}) \u062B\u0627\u0646\u064A\u0629",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0623\u0639\u062F \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u0644\u0645 \u062A\u062A\u0644\u0642\u064E \u0627\u0644\u0631\u0645\u0632\u061F",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0631\u0633\u0644 \u0625\u0644\u0649",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0631\u0633\u0644 \u0625\u0644\u0649",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0631\u0645\u0632 \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D."
    },
    zt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u0995\u09CB\u09A1\u099F\u09BF \u09AB\u09CB\u09A8\u09C7 \u09AA\u09BE\u09A0\u09BE\u09A8",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u0995\u09CB\u09A1\u099F\u09BF \u0987\u09AE\u09C7\u0987\u09B2\u09C7 \u09AA\u09BE\u09A0\u09BE\u09A8",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0985\u09A5\u09AC\u09BE",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0995\u09CB\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09AA\u09BE\u09A0\u09BE\u09A8",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}) \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0995\u09CB\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09AA\u09BE\u09A0\u09BE\u09A8",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u0995\u09CB\u09A1 \u09AA\u09BE\u09AF\u09BC\u09A8\u09BF?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u098F\u0987 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE\u09AF\u09BC \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u0995\u09CB\u09A1 \u09B2\u09BF\u0996\u09C1\u09A8",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u098F\u0987 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE\u09AF\u09BC \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u0995\u09CB\u09A1 \u09B2\u09BF\u0996\u09C1\u09A8",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4\u0995\u09B0\u09A3 \u0995\u09CB\u09A1 \u09B2\u09BF\u0996\u09C1\u09A8",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u099F\u09CB\u0995\u09C7\u09A8\u099F\u09BF \u09AE\u09C7\u09DF\u09BE\u09A6 \u09B6\u09C7\u09B7 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7 \u09AC\u09BE \u0985\u09AC\u09C8\u09A7\u0964"
    },
    qt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Code an das Telefon senden",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Code per E-Mail senden",
        "NYZRyYNAZES9pAkFcueFBw#Value": "oder",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Code erneut senden",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Code erneut senden",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Code nicht erhalten?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Geben Sie den Verifizierungscode ein, der an gesendet wurde",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Geben Sie den Verifizierungscode ein, der an gesendet wurde",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Verifizierungs-Code eingeben",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token ist abgelaufen oder ung\xFCltig."
    },
    Kt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Enviar c\xF3digo al tel\xE9fono",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Enviar c\xF3digo por correo electr\xF3nico",
        "NYZRyYNAZES9pAkFcueFBw#Value": "o",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Reenviar c\xF3digo",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Reenviar c\xF3digo",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\xBFNo recibiste el c\xF3digo?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Introduzca el c\xF3digo de verificaci\xF3n enviado a",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Introduzca el c\xF3digo de verificaci\xF3n enviado a",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Introduce el c\xF3digo de verificaci\xF3n",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "El token ha caducado o no es v\xE1lido."
    },
    Zt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Envoyer le code au t\xE9l\xE9phone",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Envoyer le code par e-mail",
        "NYZRyYNAZES9pAkFcueFBw#Value": "ou",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Renvoyer le code",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Renvoyer le code",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Vous n'avez pas re\xE7u le code ?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Entrez le code de v\xE9rification envoy\xE9 \xE0",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Entrez le code de v\xE9rification envoy\xE9 \xE0",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Entrez le code de v\xE9rification",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Le jeton a expir\xE9 ou n\u2019est pas valide."
    },
    Qt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Invia il codice al telefono",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Invia il codice via email",
        "NYZRyYNAZES9pAkFcueFBw#Value": "o",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Rispedisci il codice",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Rispedisci il codice",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Non hai ricevuto il codice?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Inserisci il codice di verifica inviato a",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Inserisci il codice di verifica inviato a",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Inserisci il codice di verifica",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Il token \xE8 scaduto o non valido."
    },
    Xt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u1795\u17D2\u1789\u17BE\u1780\u17BC\u178A\u1791\u17C5\u1791\u17BC\u179A\u179F\u17D0\u1796\u17D2\u1791",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u1795\u17D2\u1789\u17BE\u1780\u17BC\u178A\u1791\u17C5\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u17AC",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u1795\u17D2\u1789\u17BE\u1780\u17BC\u178A\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u1795\u17D2\u1789\u17BE\u1780\u17BC\u178A\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u1798\u17B7\u1793\u1794\u17B6\u1793\u1791\u1791\u17BD\u179B\u1780\u17BC\u178A\u1791\u17C1?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1795\u17D2\u1789\u17BE\u1791\u17C5",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1795\u17D2\u1789\u17BE\u1791\u17C5",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u179C\u178F\u17D2\u1790\u17BB\u178F\u17BC\u1781\u17C1\u1793\u1795\u17BB\u178F\u1780\u17C6\u178E\u178F\u17CB \u17AC\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4"
    },
    Yt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\uCF54\uB4DC\uB97C \uC804\uD654\uB85C \uBCF4\uB0B4\uAE30",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\uC774\uBA54\uC77C\uB85C \uCF54\uB4DC \uBCF4\uB0B4\uAE30",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\uB610\uB294",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\uCF54\uB4DC \uC7AC\uC804\uC1A1",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})\uCD08",
        "FPH0skf3dE29653tIdmBqQ#Value": "\uCF54\uB4DC \uC7AC\uC804\uC1A1",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\uCF54\uB4DC\uB97C \uBC1B\uC9C0 \uBABB\uD558\uC168\uB098\uC694?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\uBCF4\uB0B4\uC9C4 \uC778\uC99D \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\uBCF4\uB0B4\uC9C4 \uC778\uC99D \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\uC778\uC99D \uCF54\uB4DC \uC785\uB825",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uAC70\uB098 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    },
    Jt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u043A\u043E\u0434\u044B\u0433 \u0443\u0442\u0441\u0430\u043D\u0434 \u0438\u043B\u0433\u044D\u044D\u0445",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u043A\u043E\u0434\u044B\u0433 \u0438-\u043C\u044D\u0439\u043B \u0445\u0430\u044F\u0433\u0430\u0430\u0440 \u0438\u043B\u0433\u044D\u044D\u0445",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u044D\u0441\u0432\u044D\u043B",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0434\u0430\u0445\u0438\u043D \u0438\u043B\u0433\u044D\u044D\u0445",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}\u0441)",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0434\u0430\u0445\u0438\u043D \u0438\u043B\u0433\u044D\u044D\u0445",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u041A\u043E\u0434 \u0431\u0438\u0447\u0438\u0433\u0434\u044D\u044D\u0433\u04AF\u0439 \u044E\u043C \u0443\u0443?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0438\u043B\u0433\u044D\u044D\u0441\u044D\u043D \u043A\u043E\u0434 \u043E\u0440\u0443\u0443\u043B\u0430\u0445",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0438\u043B\u0433\u044D\u044D\u0441\u044D\u043D \u043A\u043E\u0434 \u043E\u0440\u0443\u0443\u043B\u0430\u0445",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0448\u0430\u043B\u0433\u0430\u0445 \u043A\u043E\u0434 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token \u0445\u04AF\u0447\u0438\u043D\u0442\u044D\u0439 \u0431\u0438\u0448 \u044D\u0441\u0432\u044D\u043B \u0445\u0443\u0433\u0430\u0446\u0430\u0430 \u043D\u044C \u0434\u0443\u0443\u0441\u0441\u0430\u043D."
    },
    jt = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Wy\u015Blij kod na telefon",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Wy\u015Blij kod na e-mail",
        "NYZRyYNAZES9pAkFcueFBw#Value": "lub",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Wy\u015Blij ponownie kod",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Wy\u015Blij ponownie kod",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Nie otrzyma\u0142e\u015B kodu?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Wprowad\u017A kod weryfikacyjny wys\u0142any do",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Wprowad\u017A kod weryfikacyjny wys\u0142any do",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Wprowad\u017A kod weryfikacyjny",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token wygas\u0142 lub jest nieprawid\u0142owy."
    },
    er = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Enviar c\xF3digo para o telefone",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Enviar c\xF3digo por e-mail",
        "NYZRyYNAZES9pAkFcueFBw#Value": "ou",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Reenviar c\xF3digo",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Reenviar c\xF3digo",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "N\xE3o recebeu o c\xF3digo?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Insira o c\xF3digo de verifica\xE7\xE3o enviado para",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Insira o c\xF3digo de verifica\xE7\xE3o enviado para",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Introduza o c\xF3digo de verifica\xE7\xE3o",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "O token expirou ou \xE9 inv\xE1lido."
    },
    tr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0438\u043B\u0438",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})\u0441",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u043E\u0434?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u0422\u043E\u043A\u0435\u043D \u0438\u0441\u0442\u0451\u043A \u0438\u043B\u0438 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D."
    },
    rr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DAF\u0DD4\u0DBB\u0D9A\u0DAE\u0DB1\u0DBA\u0DA7 \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u0D9A\u0DDA\u0DAD\u0DBA \u0D8A\u0DB8\u0DDA\u0DBD\u0DBA\u0DA7 \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0DC4\u0DDD",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DBD\u0DD0\u0DB6\u0DD4\u0DB1\u0DDA \u0DB1\u0DD0\u0DAF\u0DCA\u0DAF?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0DBA\u0DC0\u0DB1 \u0DBD\u0DAF \u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0DBA\u0DC0\u0DB1 \u0DBD\u0DAF \u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u0DA7\u0DDD\u0D9A\u0DB1\u0DBA \u0D9A\u0DBD\u0DCA \u0D89\u0D9A\u0DD4\u0DAD\u0DCA \u0DC0\u0DD3 \u0D87\u0DAD \u0DC4\u0DDD \u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0DB1\u0DDC\u0DC0\u0DDA."
    },
    ar = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Tuma msimbo kwa simu",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Tuma msimbo kupitia barua pepe",
        "NYZRyYNAZES9pAkFcueFBw#Value": "au",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Tuma msimbo tena",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Tuma msimbo tena",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Haukujapata msimbo?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Ingiza msimbo wa uthibitisho uliotumwa kwa",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Ingiza msimbo wa uthibitisho uliotumwa kwa",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Ingiza msimbo wa uthibitisho",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Tokeni imeisha muda au si sahihi."
    },
    nr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0BA4\u0BCA\u0BB2\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BB5\u0BC1\u0BAE\u0BCD",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BB5\u0BC1\u0BAE\u0BCD",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0BAE\u0BB1\u0BC1\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}s)",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0BAE\u0BB1\u0BC1\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BAF \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BAF \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0AB8\u0ABE\u0AAE\u0AC7\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u0B9F\u0BCB\u0B95\u0BCD\u0B95\u0BA9\u0BCD \u0B86\u0B95\u0BBF\u0BAF\u0BA4\u0BC1 \u0B95\u0BBE\u0BB2\u0BBE\u0BB5\u0BA4\u0BBF \u0B87\u0BA4\u0BC1 \u0627\u0648 \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9\u0BA4\u0BC1."
    },
    or = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u0E2B\u0E23\u0E37\u0E2D",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E0A\u0E48\u0E44\u0E2B\u0E21?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u0E1B\u0E49\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u0E1B\u0E49\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u0E43\u0E2A\u0E48\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u0E42\u0E17\u0E40\u0E04\u0E47\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
    },
    ir = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Kodu telefonuna g\xF6nder",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Kodu e-posta yoluyla g\xF6nder",
        "NYZRyYNAZES9pAkFcueFBw#Value": "veya",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Kodu yeniden g\xF6nder",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Kodu yeniden g\xF6nder",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Kodu almad\u0131n\u0131z m\u0131?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "G\xF6nderilen do\u011Frulama kodunu giriniz",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "G\xF6nderilen do\u011Frulama kodunu giriniz",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Do\u011Frulama kodunu girin",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token s\xFCresi doldu veya ge\xE7ersiz."
    },
    sr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Kodni telefonga yuboring",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Kodni elektron pochta orqali yuboring",
        "NYZRyYNAZES9pAkFcueFBw#Value": "yoki",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Kodni qayta yuborish",
        "FPH0skf3dE29653tIdmBqQ#Value": "Kodni qayta yuborish",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Kodni olmadingizmi?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Yuborilgan tasdiqlash kodini kiriting",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Yuborilgan tasdiqlash kodini kiriting",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Tasdiqlash kodini kiriting",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token muddati tugagan yoki yaroqsiz."
    },
    lr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "Kodni telefonga yuboring",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "Kodni elektron pochta orqali yuboring",
        "NYZRyYNAZES9pAkFcueFBw#Value": "yoki",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "Kodni qayta yuborish",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}})s",
        "FPH0skf3dE29653tIdmBqQ#Value": "Kodni qayta yuborish",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Kodni olmadingizmi?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Yuborilgan tasdiqlash kodini kiriting",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Yuborilgan tasdiqlash kodini kiriting",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Tasdiqlash kodini kiriting",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token muddati tugagan yoki yaroqsiz."
    },
    dr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "G\u1EEDi m\xE3 t\u1EDBi \u0111i\u1EC7n tho\u1EA1i",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "G\u1EEDi m\xE3 qua email",
        "NYZRyYNAZES9pAkFcueFBw#Value": "ho\u1EB7c",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "G\u1EEDi l\u1EA1i m\xE3",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}}) gi\xE2y",
        "FPH0skf3dE29653tIdmBqQ#Value": "G\u1EEDi l\u1EA1i m\xE3",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c m\xE3?",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "Nh\u1EADp m\xE3 x\xE1c minh \u0111\xE3 g\u1EEDi \u0111\u1EBFn",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "Nh\u1EADp m\xE3 x\xE1c minh \u0111\xE3 g\u1EEDi \u0111\u1EBFn",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "Nh\u1EADp m\xE3 x\xE1c minh",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "Token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7."
    },
    ur = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u53D1\u9001\u9A8C\u8BC1\u7801\u5230\u624B\u673A",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u53D1\u9001\u9A8C\u8BC1\u7801",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u6216\u8005",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u7801",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})\u79D2",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u7801",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u6CA1\u6709\u6536\u5230\u9A8C\u8BC1\u7801\uFF1F",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u8F93\u5165\u5DF2\u53D1\u9001\u81F3\u7684\u9A8C\u8BC1\u7801",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u8F93\u5165\u5DF2\u53D1\u9001\u81F3\u7684\u9A8C\u8BC1\u7801",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u8F93\u5165\u9A8C\u8BC1\u7801",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u4EE4\u724C\u5DF2\u8FC7\u671F\u6216\u65E0\u6548\u3002"
    },
    cr = {
        "RNfIw7yHDk6AFBoTN1KKOA#Value": "\u767C\u9001\u9A57\u8B49\u78BC\u5230\u624B\u6A5F",
        "XbvJGw3f0kmmzgtZ7tDe0Q#Value": "\u901A\u904E\u96FB\u5B50\u90F5\u4EF6\u767C\u9001\u9A57\u8B49\u78BC",
        "NYZRyYNAZES9pAkFcueFBw#Value": "\u6216\u8005",
        "l6zPePUUtEOnUfjGWfYG4Q#Value": "\u91CD\u65B0\u50B3\u9001\u9A57\u8B49\u78BC",
        "GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1": "({{0}})\u79D2",
        "FPH0skf3dE29653tIdmBqQ#Value": "\u91CD\u65B0\u50B3\u9001\u9A57\u8B49\u78BC",
        "BuQeSbUv6UC1iMlntUd4Eg#Value": "\u6C92\u6709\u6536\u5230\u9A57\u8B49\u78BC\uFF1F",
        "9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1": "\u8F38\u5165\u5DF2\u50B3\u9001\u5230\u7684\u9A57\u8B49\u78BC",
        "5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1": "\u8F38\u5165\u5DF2\u50B3\u9001\u5230\u7684\u9A57\u8B49\u78BC",
        "9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1": "\u8F38\u5165\u9A57\u8B49\u78BC",
        "9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1": "\u4EE4\u724C\u5DF2\u904E\u671F\u6216\u7121\u6548\u3002"
    },
    Xe = {
        "ar-001": {
            translations: Wt,
            isRTL: !0
        },
        "bn-BD": {
            translations: zt,
            isRTL: !1
        },
        "de-DE": {
            translations: qt,
            isRTL: !1
        },
        "es-ES": {
            translations: Kt,
            isRTL: !1
        },
        "fr-FR": {
            translations: Zt,
            isRTL: !1
        },
        "it-IT": {
            translations: Qt,
            isRTL: !1
        },
        "km-KH": {
            translations: Xt,
            isRTL: !1
        },
        "ko-KR": {
            translations: Yt,
            isRTL: !1
        },
        "mn-MN": {
            translations: Jt,
            isRTL: !1
        },
        "pl-PL": {
            translations: jt,
            isRTL: !1
        },
        "pt-PT": {
            translations: er,
            isRTL: !1
        },
        "ru-RU": {
            translations: tr,
            isRTL: !1
        },
        "si-LK": {
            translations: rr,
            isRTL: !1
        },
        "sw-KE": {
            translations: ar,
            isRTL: !1
        },
        "ta-IN": {
            translations: nr,
            isRTL: !1
        },
        "th-TH": {
            translations: or,
            isRTL: !1
        },
        "tr-TR": {
            translations: ir,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: sr,
            isRTL: !1
        },
        "uz-UZ": {
            translations: lr,
            isRTL: !1
        },
        "vi-VN": {
            translations: dr,
            isRTL: !1
        },
        "zh-CN": {
            translations: ur,
            isRTL: !1
        },
        "zh-TW": {
            translations: cr,
            isRTL: !1
        }
    };

function xe(f, d, l, e) {
    let r = {
        password: f.Password,
        type: f.Type,
        token: f.OTP
    };
    f.Email && f.Email !== "" && (r.email = f.Email), f.Phone && f.Phone !== "" && (r.phone = f.Phone), f.Payload = JSON.stringify(r)
}
o(xe, "default");
var v = V; {
    let d = class d extends v.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Xe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _oTPOnBlur$Action() {
            return this.hasOwnProperty("__oTPOnBlur$Action") || (this.__oTPOnBlur$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return v.Logger.startActiveSpan("OTPOnBlur", function(n) {
                    n && (n.setAttribute("code.function", "OTPOnBlur"), n.setAttribute("outsystems.function.key", "00b7f2a3-fc13-47ff-8cfe-2d1230cfd986"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OTPOnBlur"), e = t.callContext(e), r.variables.oTPConfigIn.errorMessageAttr = v.BuiltinFunctions.nullTextIdentifier(), r.variables.oTPConfigIn.isErrorAttr = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__oTPOnBlur$Action
        }
        set _oTPOnBlur$Action(e) {
            this.__oTPOnBlur$Action = e
        }
        get _oTPOnComplete$Action() {
            return this.hasOwnProperty("__oTPOnComplete$Action") || (this.__oTPOnComplete$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return v.Logger.startActiveSpan("OTPOnComplete", function(s) {
                    return s && (s.setAttribute("code.function", "OTPOnComplete"), s.setAttribute("outsystems.function.key", "4733f3c0-da0c-44e4-8699-e30740e5fcd3"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OTPOnComplete"), r = a.callContext(r);
                        var h = new v.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.CFDs.CFDVerifyUser.OTPOnComplete$vars")));
                        h.value.oTPInLocal = e;
                        var i = new v.DataTypes.VariableHolder,
                            _ = new v.DataTypes.VariableHolder;
                        return v.Flow.executeAsyncFlow(function() {
                            return t.variables.oTPConfigIn.disabledAttr = !1, t.variables.oTPConfigIn.isErrorAttr = !1, t.variables.oTPConfigIn.errorMessageAttr = v.BuiltinFunctions.nullTextIdentifier(), t.variables.isSubmittingVar = !0, _.value = v.Logger.startActiveSpan("Payload", function(C) {
                                C && (C.setAttribute("code.function", "Payload"), C.setAttribute("outsystems.function.key", "e3a3f58f-b90e-42c5-8844-31b628e6e29a"), C.setAttribute("outsystems.function.owner.name", "dashboard"), C.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), C.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return a.safeExecuteJSNode(xe, "Payload", "OTPOnComplete", {
                                        Email: v.DataConversion.JSNodeParamConverter.to(t.variables.authenticationCodeTypeIn === "email" ? t.variables.clientInformationIn.dataAttr.userAttr.user_metadataAttr.emailAttr : "", v.DataTypes.DataTypes.Email),
                                        Phone: v.DataConversion.JSNodeParamConverter.to(t.variables.authenticationCodeTypeIn === "phone" ? "+" + t.variables.clientInformationIn.dataAttr.userAttr.phoneAttr : "", v.DataTypes.DataTypes.PhoneNumber),
                                        OTP: v.DataConversion.JSNodeParamConverter.to(h.value.oTPInLocal, v.DataTypes.DataTypes.Text),
                                        Password: v.DataConversion.JSNodeParamConverter.to(t.variables.passwordIn.passwordAttr, v.DataTypes.DataTypes.Text),
                                        Type: v.DataConversion.JSNodeParamConverter.to(t.variables.authenticationCodeTypeIn === "phone" ? "sms" : t.variables.authenticationCodeTypeIn, v.DataTypes.DataTypes.Text),
                                        Payload: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text)
                                    }, function(g) {
                                        var u = new(a.constructor.getVariableGroupType("dashboard.CFDs.CFDVerifyUser.OTPOnComplete$payloadJSResult"));
                                        return u.payloadOut = v.DataConversion.JSNodeParamConverter.from(g.Payload, v.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    C && C.end()
                                }
                            }, 1), t.flush(), E.fetch_Post$Action("/v1/platform/trading/change-password", _.value.payloadOut, !1, "", 600, "", new(v.GenericTypeCache.getGenericList(Be)), new(v.GenericTypeCache.getGenericList(Ne)), r).then(function(C) {
                                i.value = C
                            }).then(function() {
                                return v.Flow.executeSequence(function() {
                                    return i.value.isErrorOut ? v.Flow.executeSequence(function() {
                                        if (i.value.errorResponseOut.errorsAttr.getCurrent(r.iterationContext).codeAttr === "InvalidToken") t.variables.oTPConfigIn.isErrorAttr = !0, t.variables.oTPConfigIn.errorMessageAttr = v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("9hnHqydT8EOCnoCe8B_wgA#Value.1135433176.1", "Token has expired or is invalid."), t.variables.isSubmittingVar = !1, h.value.oTPInLocal = v.BuiltinFunctions.nullIdentifier().toString();
                                        else return t.variables.oTPConfigIn.isErrorAttr = !0, t.variables.oTPConfigIn.errorMessageAttr = i.value.errorResponseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr, t.variables.isSubmittingVar = !1, t.variables.passwordIn.passwordAttr = v.BuiltinFunctions.nullTextIdentifier(), t.variables.passwordIn.isErrorAttr = i.value.isErrorOut, t.variables.passwordIn.errorMessasgeAttr = i.value.errorResponseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr, a.serverError$Action(t.variables.passwordIn, i.value.errorResponseOut.errorsAttr.getCurrent(r.iterationContext).codeAttr, r)
                                    }) : (t.variables.oTPConfigIn.disabledAttr = !1, t.variables.oTPConfigIn.isErrorAttr = !1, t.variables.oTPConfigIn.errorMessageAttr = v.BuiltinFunctions.nullTextIdentifier(), t.variables.oTPConfigIn.verifySuccessAttr = !0, t.variables.isSubmittingVar = !1, a.successResetPassword$Action(r))
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__oTPOnComplete$Action
        }
        set _oTPOnComplete$Action(e) {
            this.__oTPOnComplete$Action = e
        }
        oTPOnBlur$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("OTPOnBlur__proxy", function(t) {
                t && (t.setAttribute("code.function", "OTPOnBlur"), t.setAttribute("outsystems.function.key", "00b7f2a3-fc13-47ff-8cfe-2d1230cfd986"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._oTPOnBlur$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        oTPOnComplete$Action(e, r) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OTPOnComplete__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OTPOnComplete"), a.setAttribute("outsystems.function.key", "4733f3c0-da0c-44e4-8699-e30740e5fcd3"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._oTPOnComplete$Action, r, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        get resendVerificationCode$Action() {
            return this.hasOwnProperty("_resendVerificationCode$Action") || (this._resendVerificationCode$Action = function() {
                return Promise.resolve()
            }), this._resendVerificationCode$Action
        }
        set resendVerificationCode$Action(e) {
            this._resendVerificationCode$Action = e
        }
        get onCloseVerifyCFDUser$Action() {
            return this.hasOwnProperty("_onCloseVerifyCFDUser$Action") || (this._onCloseVerifyCFDUser$Action = function() {
                return Promise.resolve()
            }), this._onCloseVerifyCFDUser$Action
        }
        set onCloseVerifyCFDUser$Action(e) {
            this._onCloseVerifyCFDUser$Action = e
        }
        get serverError$Action() {
            return this.hasOwnProperty("_serverError$Action") || (this._serverError$Action = function() {
                return Promise.resolve()
            }), this._serverError$Action
        }
        set serverError$Action(e) {
            this._serverError$Action = e
        }
        get sendVerifactionCodeViaAuthType$Action() {
            return this.hasOwnProperty("_sendVerifactionCodeViaAuthType$Action") || (this._sendVerifactionCodeViaAuthType$Action = function() {
                return Promise.resolve()
            }), this._sendVerifactionCodeViaAuthType$Action
        }
        set sendVerifactionCodeViaAuthType$Action(e) {
            this._sendVerifactionCodeViaAuthType$Action = e
        }
        get successResetPassword$Action() {
            return this.hasOwnProperty("_successResetPassword$Action") || (this._successResetPassword$Action = function() {
                return Promise.resolve()
            }), this._successResetPassword$Action
        }
        set successResetPassword$Action(e) {
            this._successResetPassword$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let f = d;
    se = f, se.registerVariableGroupType("dashboard.CFDs.CFDVerifyUser.OTPOnComplete$vars", [{
        name: "OTP",
        attrName: "oTPInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), se.registerVariableGroupType("dashboard.CFDs.CFDVerifyUser.OTPOnComplete$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var se, Ye = new v.Controller.ControllerFactory(se, U);
var ma = R.PlaceholderContent,
    ya = R.IteratorPlaceholderContent,
    fr = o(function() {
        var f = N(function(d) {
            var l = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                n = L,
                s = G,
                h = {
                    props: d,
                    validateWidget: o(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                i = l,
                _ = $,
                C = M,
                g = B();
            return b.createElement("div", d.rootNodeProperties, b.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: l.getCachedValue(r.getId("7tECDujUbk+vImgBq0PM8A.style"), function() {
                        return l.variables.isSubmittingVar ? "pointer-events: none;" : ""
                    }, function() {
                        return l.variables.isSubmittingVar
                    })
                },
                style: "verify-container",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, b.createElement(he, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsPhone: l.variables.authenticationCodeTypeIn === "phone",
                    _isPhoneInDataFetchStatus: S.calculateDataFetchStatus(l.variables._authenticationCodeTypeInDataFetchStatus),
                    custom: !0,
                    login: !0,
                    withdraw: !1
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickBack$Action: o(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.onCloseVerifyCFDUser$Action(e.callContext(u))
                    }, "onClickBack$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), b.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; padding: 24px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }, b.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            }, b.createElement(O, {
                extendedProperties: {
                    style: "font-size: 20px; font-style: normal; font-weight: 800; line-height: 28px;"
                },
                value: I.resolve(k.TranslationsService).getMessage("9l3WqEL0+kOokHHoUsH0Og#ValueExpression.-1379041942.1", "Enter verification code"),
                _idProps: {
                    service: r,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            })), _(l.variables.authenticationCodeTypeIn === "phone", !1, this, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "5"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(O, {
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    value: I.resolve(k.TranslationsService).getMessage("5bGP4uLlq06gF1BCAtf77g#ValueExpression.-268043170.1", "Enter the verification code sent to") + " ",
                    _idProps: {
                        service: r,
                        uuid: "6"
                    },
                    _widgetRecordProvider: i
                }), b.createElement(O, {
                    extendedProperties: {
                        style: "font-size: 16px; font-weight: bold; max-width: 100%; overflow-wrap: anywhere;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    value: "+" + l.variables.clientInformationIn.dataAttr.userAttr.phoneAttr,
                    _idProps: {
                        service: r,
                        uuid: "7"
                    },
                    _widgetRecordProvider: i,
                    value_dataFetchStatus: S.calculateDataFetchStatus(l.variables._clientInformationInDataFetchStatus)
                }))]
            }, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "8"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(O, {
                    value: I.resolve(k.TranslationsService).getMessage("9iqrdkuKykWpObg1PWOakA#ValueExpression.-268043170.1", "Enter the verification code sent to") + " ",
                    _idProps: {
                        service: r,
                        uuid: "9"
                    },
                    _widgetRecordProvider: i
                }), b.createElement(O, {
                    extendedProperties: {
                        style: "font-weight: bold; max-width: 100%; overflow-wrap: anywhere;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    value: l.variables.clientInformationIn.dataAttr.userAttr.emailAttr,
                    _idProps: {
                        service: r,
                        uuid: "10"
                    },
                    _widgetRecordProvider: i,
                    value_dataFetchStatus: S.calculateDataFetchStatus(l.variables._clientInformationInDataFetchStatus)
                }))]
            }), b.createElement(m, {
                align: 0,
                animate: !0,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "margin-top-m otp-container",
                visible: l.variables.isVisibleIn,
                _idProps: {
                    service: r,
                    uuid: "11"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: S.calculateDataFetchStatus(l.variables._isVisibleInDataFetchStatus)
            }, b.createElement(be, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ErrorMessage: l.variables.oTPConfigIn.errorMessageAttr,
                    _errorMessageInDataFetchStatus: S.calculateDataFetchStatus(l.variables._oTPConfigInDataFetchStatus),
                    IsSuccess: l.variables.oTPConfigIn.verifySuccessAttr,
                    _isSuccessInDataFetchStatus: S.calculateDataFetchStatus(l.variables._oTPConfigInDataFetchStatus),
                    IsDisabled: l.variables.isSubmittingVar
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    clearErrorMessage$Action: o(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.oTPOnBlur$Action(e.callContext(u))
                    }, "clearErrorMessage$Action"),
                    enteredOTP$Action: o(function(u) {
                        return Promise.resolve().then(function() {
                            var D = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            return e.oTPOnComplete$Action(u, e.callContext(D))
                        })
                    }, "enteredOTP$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "12",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })), b.createElement(Y, {
                _validationProps: {
                    validationService: t
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form",
                _idProps: {
                    service: r,
                    name: "Form1"
                },
                _widgetRecordProvider: i
            }, b.createElement(m, {
                align: 0,
                animate: !1,
                style: "verify-container__code",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "14"
                },
                _widgetRecordProvider: i
            }, b.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-right: auto; margin-top: 24px;"
                },
                gridProperties: {
                    marginLeft: "auto"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "15"
                },
                _widgetRecordProvider: i
            }, C(s("BuQeSbUv6UC1iMlntUd4Eg#Value", "Didn\u2019t receive the code?"))), _(A.getCFDTimer() > 0, !1, this, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-right: auto;"
                    },
                    gridProperties: {
                        marginLeft: "auto"
                    },
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "16"
                    },
                    _widgetRecordProvider: i
                }, C(s("FPH0skf3dE29653tIdmBqQ#Value", "Resend code")), b.createElement(m, {
                    align: 0,
                    animate: !0,
                    style: "display-inline-block",
                    visible: A.getCFDTimer() > 0,
                    _idProps: {
                        service: r,
                        uuid: "17"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(O, {
                    gridProperties: {
                        width: "auto",
                        marginLeft: "0px"
                    },
                    style: " font-tabular-nums",
                    value: l.getCachedValue(r.getId("6qhqutkccU+84UCzx94LkA.Value"), function() {
                        return " " + E.localize$Action(I.resolve(k.TranslationsService).getMessage("GJBvPvVVvEykr8HsQXt_OA#ValueExpression.2056301918.1", "({{0}}s)"), A.getVerifyOTPTimer().toString(), "", "", "", "", a).translatedStringOut
                    }, function() {
                        return A.getVerifyOTPTimer()
                    }),
                    _idProps: {
                        service: r,
                        uuid: "18"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return [b.createElement(J, {
                    enabled: !0,
                    onClick: o(function() {
                        h.validateWidget(r.getId("Form1"));
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.resendVerificationCode$Action(e.callContext(u))
                    }, "onClick"),
                    style: "text-neutral-10",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "19"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(j, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    style: "font-size-base",
                    text: [C(s("l6zPePUUtEOnUfjGWfYG4Q#Value", "Resend code"))],
                    _idProps: {
                        service: r,
                        uuid: "20"
                    },
                    _widgetRecordProvider: i
                }))]
            }), b.createElement(m, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                visible: l.variables.clientInformationIn.dataAttr.userAttr.user_metadataAttr.phone_verifiedAttr,
                _idProps: {
                    service: r,
                    uuid: "21"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: S.calculateDataFetchStatus(l.variables._clientInformationInDataFetchStatus)
            }, C(s("NYZRyYNAZES9pAkFcueFBw#Value", "or"))), _(l.variables.authenticationCodeTypeIn === "phone", !1, this, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "22"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(J, {
                    enabled: !0,
                    onClick: o(function() {
                        h.validateWidget(r.getId("Form1"));
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.sendVerifactionCodeViaAuthType$Action("email", e.callContext(u))
                    }, "onClick"),
                    style: "text-neutral-10",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "23"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(j, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    text: [C(s("XbvJGw3f0kmmzgtZ7tDe0Q#Value", "Send code to email"))],
                    _idProps: {
                        service: r,
                        uuid: "24"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    visible: l.variables.clientInformationIn.dataAttr.userAttr.user_metadataAttr.phone_verifiedAttr,
                    _idProps: {
                        service: r,
                        uuid: "25"
                    },
                    _widgetRecordProvider: i,
                    visible_dataFetchStatus: S.calculateDataFetchStatus(l.variables._clientInformationInDataFetchStatus)
                }, b.createElement(J, {
                    enabled: !0,
                    onClick: o(function() {
                        h.validateWidget(r.getId("Form1"));
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.sendVerifactionCodeViaAuthType$Action("phone", e.callContext(u))
                    }, "onClick"),
                    style: "text-neutral-10",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "26"
                    },
                    _widgetRecordProvider: i
                }, b.createElement(j, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    text: [C(s("RNfIw7yHDk6AFBoTN1KKOA#Value", "Send code to phone"))],
                    _idProps: {
                        service: r,
                        uuid: "27"
                    },
                    _widgetRecordProvider: i
                })))]
            }))))), b.createElement(ue, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "28",
                    alias: "3"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "CFDVerifyUser",
                    functionKey: "13456706-452c-4553-829c-4edf47201c0f",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDVerifyUser",
            modelFactory: Le,
            controllerFactory: Ye
        });
        return f.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDVerifyUser.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [he, be, ue]
        }, f
    }, "componentFactory"),
    He = fr();
var Oa = R.PlaceholderContent,
    Da = R.IteratorPlaceholderContent,
    vr = o(function() {
        var f = N(function(d) {
            var l = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                n = L,
                s = G,
                h = {
                    props: d,
                    validateWidget: o(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                i = l,
                _ = $,
                C = M,
                g = B();
            return z.createElement("div", d.rootNodeProperties, z.createElement(m, {
                align: 0,
                animate: !1,
                style: l.getCachedValue(r.getId("ResetPassword.Style"), function() {
                    return l.variables.modalContentVar === "reset" ? "" : "display-none"
                }, function() {
                    return l.variables.modalContentVar
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ResetPassword"
                },
                _widgetRecordProvider: i
            }, z.createElement(Re, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    PasswordInformation: l.variables.passwordVar,
                    IsFetchingData: l.variables.isFetchingDataVar
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    goPreviousPage$Action: o(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.closeModal$Action(e.callContext(u))
                    }, "goPreviousPage$Action"),
                    onClickNext$Action: o(function(u) {
                        return Promise.resolve().then(function() {
                            var D = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            return e.onClickNext$Action(u, e.callContext(D))
                        })
                    }, "onClickNext$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })), z.createElement(m, {
                align: 0,
                animate: !1,
                style: l.getCachedValue(r.getId("Verify.Style"), function() {
                    return l.variables.modalContentVar === "verify" ? "" : "display-none"
                }, function() {
                    return l.variables.modalContentVar
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Verify"
                },
                _widgetRecordProvider: i
            }, z.createElement(He, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    OTPConfig: l.variables.oTPConfigVar,
                    IsVisible: l.variables.modalContentVar === "verify",
                    AuthenticationCodeType: l.variables.authenticationCodeTypeVar,
                    ClientInformation: l.variables.clientInformationVar,
                    password: l.variables.passwordVar
                },
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    resendVerificationCode$Action: o(function() {
                        return Promise.resolve().then(function() {
                            var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            return e.resendVerificationCode$Action(e.callContext(u))
                        })
                    }, "resendVerificationCode$Action"),
                    onCloseVerifyCFDUser$Action: o(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.gobacktoResetModal$Action(e.callContext(u))
                    }, "onCloseVerifyCFDUser$Action"),
                    serverError$Action: o(function(u, D) {
                        return Promise.resolve().then(function() {
                            var Je = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            return e.cFDVerifyUserServerError$Action(u, D, e.callContext(Je))
                        })
                    }, "serverError$Action"),
                    successResetPassword$Action: o(function() {
                        var u = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.onSuccess$Action(e.callContext(u))
                    }, "successResetPassword$Action"),
                    sendVerifactionCodeViaAuthType$Action: o(function(u) {
                        return Promise.resolve().then(function() {
                            var D = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            return e.cFDVerifyUserSendVerifactionCodeBasedOnAuthType$Action(u, e.callContext(D))
                        })
                    }, "sendVerifactionCodeViaAuthType$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "3",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "CFDResetPasswordModal",
                    functionKey: "bad7dd35-cc08-4eb9-becd-17c1d3b572ed",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDResetPasswordModal",
            modelFactory: Ge,
            controllerFactory: ze
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [Re, He]
        }, f
    }, "componentFactory"),
    Ia = vr();
export {
    Ia as a
};