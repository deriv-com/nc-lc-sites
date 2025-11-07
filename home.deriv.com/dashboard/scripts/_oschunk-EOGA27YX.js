import {
    a as M
} from "./_oschunk-WZ2P4FAM.js";
import {
    a as A
} from "./_oschunk-J3DG2BKZ.js";
import {
    a as ue
} from "./_oschunk-24WIHVSN.js";
import {
    a as x,
    h as y,
    v as O,
    x as W
} from "./_oschunk-O5KC3WOL.js";
import {
    a as ce,
    g as C,
    m as L,
    o as T,
    q as I,
    r as P,
    s as D,
    t as V
} from "./_oschunk-NVHFAAS2.js";
import {
    a as de
} from "./_oschunk-AW35UT34.js";
import {
    Ca as se,
    Ga as w,
    Ka as le,
    a as oe,
    ya as ie
} from "./_oschunk-WCMQG33O.js";
import {
    J as ae,
    X as p,
    c as n,
    f as ne
} from "./_oschunk-DFKJJKI4.js";
var d = ne(ce());
var g = p,
    j = class j extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Device", "deviceVar", "Device", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ObserverObj", "observerObjVar", "ObserverObj", !0, !1, g.DataTypes.DataTypes.Object, function() {
                return null
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(j, "VariablesRecord");
var U = j;
U.init();
var Y = class Y extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Y, "WidgetsRecord");
var N = Y,
    q = class q extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(s) {}
    };
n(q, "Model");
var k = q;
k._hasValidationWidgetsValue = void 0;
var he = new g.Model.ModelFactory(k);
var b = p,
    B = class B extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return "full-width justify-content-center"
            }, !1), this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(B, "VariablesRecord");
var F = B;
F.init();
var Q = class Q extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Q, "WidgetsRecord");
var K = Q,
    E = class E extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return K
        }
        static get hasValidationWidgets() {
            return E._hasValidationWidgetsValue === void 0 && (E._hasValidationWidgetsValue = void 0 || void 0 || void 0), E._hasValidationWidgetsValue
        }
        setInputs(s) {
            "ExtendedClasses" in s && (this.variables.extendedClassesIn = s.ExtendedClasses, "_extendedClassesInDataFetchStatus" in s && (this.variables._extendedClassesInDataFetchStatus = s._extendedClassesInDataFetchStatus))
        }
    };
n(E, "Model");
var G = E;
G._hasValidationWidgetsValue = void 0;
var me = new b.Model.ModelFactory(G);
var be = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0630\u0647\u0628\u060C \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629\u060C \u0627\u0644\u0641\u0648\u0631\u0643\u0633\u060C \u0627\u0644\u0646\u0641\u0637\u060C \u0648\u0623\u0643\u062B\u0631.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0633\u0631\u064A\u0639\u0629\u060C \u0633\u062D\u0648\u0628\u0627\u062A \u0633\u0631\u064A\u0639\u0629.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0644\u0644\u062C\u0645\u064A\u0639. \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646. \u0641\u064A \u0623\u064A \u0648\u0642\u062A."
    },
    we = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u09B8\u09CB\u09A8\u09BE, \u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F\u09CB, \u09AB\u09B0\u09C7\u0995\u09CD\u09B8, \u09A4\u09C7\u09B2 \u098F\u09AC\u0982 \u0986\u09B0\u0993 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1 \u099F\u09CD\u09B0\u09C7\u09A1 \u0995\u09B0\u09C1\u09A8\u0964",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u09A6\u09CD\u09B0\u09C1\u09A4 \u099C\u09AE\u09BE, \u09A6\u09CD\u09B0\u09C1\u09A4 \u0989\u09A4\u09CD\u09A4\u09CB\u09B2\u09A8\u0964",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u09B8\u09AC\u09BE\u0987 \u099C\u09A8\u09CD\u09AF \u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982\u0964 \u09AF\u09C7 \u0995\u09CB\u09A8 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC\u0964 \u09AF\u09C7 \u0995\u09CB\u09A8 \u09B8\u09AE\u09AF\u09BC\u0964"
    },
    Ce = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Handeln Sie Gold, Krypto, Forex, \xD6l und mehr.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Schnelle Einzahlungen, schnelle Auszahlungen.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Trading f\xFCr jeden. \xDCberall. Jederzeit."
    },
    Oe = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Opera con oro, criptomonedas, Forex, petr\xF3leo y m\xE1s.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Dep\xF3sitos r\xE1pidos, retiros r\xE1pidos.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Trading para todos. En todo lugar. En todo momento."
    },
    Ee = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Tradez de l\u2019or, des cryptos, du Forex, du p\xE9trole et plus encore.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "D\xE9p\xF4ts rapides, retraits rapides.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Le trading pour tous. Partout. \xC0 tout moment."
    },
    Ae = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Trade oro, crypto, forex, petrolio e altro ancora.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Depositi rapidi, prelievi veloci.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Trading per chiunque. Ovunque. In qualsiasi momento."
    },
    Re = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u1787\u17BD\u1789\u178A\u17BC\u179A\u1798\u17B6\u179F, \u1780\u17D2\u179A\u17B8\u1794\u178F\u17BC, Forex, \u1794\u17D2\u179A\u17C1\u1784 \u1793\u17B7\u1784\u1785\u17D2\u179A\u17BE\u1793\u1791\u17C0\u178F\u17D4",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u1780\u17B6\u179A\u178A\u17B6\u1780\u17CB\u1794\u17D2\u179A\u17B6\u1780\u17CB\u179B\u17BF\u1793 \u1780\u17B6\u179A\u178A\u1780\u1794\u17D2\u179A\u17B6\u1780\u17CB\u179B\u17BF\u1793\u17D4",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u1780\u17B6\u179A\u1787\u17BD\u1789\u178A\u17BC\u179A\u1787\u17B6\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u1793\u17B6\u17D4 \u1793\u17C5\u1791\u17B8\u178E\u17B6\u1780\u17CF\u1794\u17B6\u1793\u17D4 \u1793\u17C5\u1796\u17C1\u179B\u178E\u17B6\u17A1\u17BE\u1799\u17D4"
    },
    He = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\uAE08, \uC554\uD638\uD654\uD3D0, Forex, \uC11D\uC720 \uB4F1\uC744 \uAC70\uB798\uD558\uC138\uC694.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\uBE60\uB978 \uC785\uAE08, \uBE60\uB978 \uCD9C\uAE08.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\uB204\uAD6C\uB098 \uAC70\uB798\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5B4\uB514\uC11C\uB4E0. \uC5B8\uC81C\uB4E0."
    },
    Le = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u0410\u043B\u0442, \u043A\u0440\u0438\u043F\u0442\u043E, \u0444\u043E\u0440\u0435\u043A\u0441, \u0431\u0438\u0447\u0438\u043B \u043D\u0435\u0444\u0442, \u0433\u044D\u0445 \u043C\u044D\u0442\u044D\u044D\u0440 \u0430\u0440\u0438\u043B\u0436\u0430\u0430 \u0445\u0438\u0439\u043D\u044D.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0428\u0443\u0443\u0440\u0445\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u043C\u0436, \u0445\u0443\u0440\u0434\u0430\u043D \u0431\u0443\u0446\u0430\u0430\u043D \u0430\u0432\u0430\u043B\u0442.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0425\u044D\u043D \u0431\u04AF\u0445\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0441\u043E\u043D \u0430\u0440\u0438\u043B\u0436\u0430\u0430. \u0410\u043B\u044C \u0445\u044D\u0434\u0438\u0439\u043D. \u0425\u0430\u0430\u043D\u0430 \u0447 \u0431\u0430\u0439."
    },
    Te = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Handluj z\u0142otem, kryptowalutami, Forex, rop\u0105 i wi\u0119cej.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Szybkie depozyty, szybkie wyp\u0142aty.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Handlowanie dla ka\u017Cdego. Gdziekolwiek. W dowolnym czasie."
    },
    Ie = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Negocie ouro, criptomoedas, Forex, petr\xF3leo e mais.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Dep\xF3sitos r\xE1pidos, retiradas r\xE1pidas.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Negocia\xE7\xE3o para qualquer pessoa. Em qualquer lugar. A qualquer hora."
    },
    Pe = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u0422\u043E\u0440\u0433\u0443\u0439\u0442\u0435 \u0437\u043E\u043B\u043E\u0442\u043E\u043C, \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043E\u0439, \u0444\u043E\u0440\u0435\u043A\u0441\u043E\u043C, \u043D\u0435\u0444\u0442\u044C\u044E \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u044B, \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0422\u043E\u0440\u0433\u043E\u0432\u043B\u044F \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E. \u0412 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435. \u0412 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F."
    },
    De = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u0DBB\u0DAD\u0DCA\u200D\u0DBB\u0DB1\u0DCA, \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DB4\u0DCA\u0DA7\u0DDD, Forex, \u0DAD\u0DD9\u0DBD\u0DCA \u0DC3\u0DC4 \u0DAD\u0DC0\u0DAD\u0DCA \u0DB6\u0DDC\u0DC4\u0DDD \u0DAF\u0DDA \u0DC0\u0DD9\u0DC5\u0DB3\u0DCF\u0DB8\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0DC0\u0DDA\u0D9C\u0DC0\u0DAD\u0DCA \u0DAD\u0DD0\u0DB1\u0DCA\u0DB4\u0DAD\u0DD4, \u0DC0\u0DDA\u0D9C\u0DC0\u0DAD\u0DCA \u0DB8\u0DD4\u0DAF\u0DBD\u0DCA \u0D86\u0DB4\u0DC3\u0DD4 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DCA.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0D95\u0DB1\u0DD1\u0DB8 \u0D9A\u0DD9\u0DB1\u0DD9\u0D9A\u0DD4\u0DA7 \u0DC0\u0DD9\u0DC5\u0DB3\u0DCF\u0DB8. \u0D95\u0DB1\u0DD1\u0DB8 \u0DAD\u0DD0\u0DB1\u0D9A. \u0D95\u0DB1\u0DD1\u0DB8 \u0DC0\u0DDA\u0DBD\u0DCF\u0DC0\u0D9A."
    },
    Ve = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Biashara dhahabu, crypto, forex, mafuta, na zaidi.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Amana ya haraka, uchukuzi wa haraka.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Biashara kwa kila mtu. Mahali popote. Wakati wowote."
    },
    xe = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u0BA4\u0B99\u0BCD\u0B95\u0BAE\u0BCD, \u0B95\u0BBF\u0BB0\u0BBF\u0BAA\u0BCD\u0B9F\u0BCB, \u092B\u0ACB\u0AB0\u0BC6\u0B95\u0BCD\u0BB8\u0BCD, \u0B8E\u0BA3\u0BCD\u0BA3\u0BC6\u0BAF\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BBF.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBE\u0BA9 \u0BB5\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1, \u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBE\u0BA9 \u0BAA\u0BA3\u0BAE\u0BC6\u0BB3\u0BA9\u0BC0\u0B9F\u0BC1.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0BAF\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BB5\u0BBE\u0B99\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD. \u0B8E\u0B99\u0BCD\u0B95\u0BC1\u0BAE\u0BCD. \u0B8E\u0BAA\u0BCD\u0BAA\u0BB5\u0BC1\u0BAE\u0BCD."
    },
    We = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u0E17\u0E2D\u0E07\u0E04\u0E33, \u0E04\u0E23\u0E34\u0E1B\u0E42\u0E15, Forex, \u0E19\u0E49\u0E33\u0E21\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u0E1D\u0E32\u0E01\u0E40\u0E07\u0E34\u0E19\u0E40\u0E23\u0E47\u0E27, \u0E16\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E23\u0E47\u0E27.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E19 \u0E17\u0E38\u0E01\u0E17\u0E35\u0E48 \u0E17\u0E38\u0E01\u0E40\u0E27\u0E25\u0E32"
    },
    Ue = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Alt\u0131n, Kripto, Forex, Petrol ve daha fazlas\u0131n\u0131 i\u015Flem yap\u0131n.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "H\u0131zl\u0131 yat\u0131r\u0131mlar, h\u0131zl\u0131 \xE7ekimler.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Herkes i\xE7in i\u015Flem. Her yerde. Her zaman."
    },
    ke = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Zolotoy, Kripto, Forex, Neft va ko\u2018proq savdo qiling.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Tez depozitlar, tez chiqarishlar.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Har bir odam uchun savdo. Har joyda. Har vaqtda."
    },
    Fe = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Zolotoy, Kripto, Forex, Neft va ko\u2018proq savdo qiling.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "Tez depozitlar, tez chiqarishlar.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Har bir odam uchun savdo. Har joyda. Har vaqtda."
    },
    Ge = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "Giao d\u1ECBch V\xE0ng, Crypto, Forex, D\u1EA7u v\xE0 h\u01A1n th\u1EBF n\u1EEFa.",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "G\u1EEDi ti\u1EC1n nhanh, r\xFAt ti\u1EC1n nhanh.",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "Giao d\u1ECBch cho m\u1ECDi ng\u01B0\u1EDDi. B\u1EA5t c\u1EE9 n\u01A1i n\xE0o. B\u1EA5t c\u1EE9 l\xFAc n\xE0o."
    },
    ze = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u4EA4\u6613\u9EC4\u91D1\u3001\u52A0\u5BC6\u8D27\u5E01\u3001\u5916\u6C47\u3001\u77F3\u6CB9\u53CA\u66F4\u591A\u3002",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u5FEB\u901F\u5B58\u6B3E\uFF0C\u5FEB\u901F\u63D0\u6B3E\u3002",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u4E3A\u4EFB\u4F55\u4EBA\u800C\u4EA4\u6613\u3002\u4EFB\u4F55\u5730\u65B9\u3002\u4EFB\u4F55\u65F6\u95F4\u3002"
    },
    $e = {
        "y1h4W71GzUCDxjw0h3AsGg#Value": "\u4EA4\u6613\u9EC3\u91D1\u3001\u52A0\u5BC6\u8CA8\u5E63\u3001\u5916\u532F\u3001\u77F3\u6CB9\u53CA\u66F4\u591A\u3002",
        "E+9wH71a+USkSZ2IT9ZFjQ#Value": "\u8FC5\u901F\u5B58\u6B3E\uFF0C\u5FEB\u901F\u63D0\u6B3E\u3002",
        "pWYKTwYc_Eq9LRl94GXrww#Value": "\u70BA\u4EFB\u4F55\u4EBA\u800C\u4EA4\u6613\u3002\u4EFB\u4F55\u5730\u65B9\u3002\u4EFB\u4F55\u6642\u9593\u3002"
    },
    fe = {
        "ar-001": {
            translations: be,
            isRTL: !0
        },
        "bn-BD": {
            translations: we,
            isRTL: !1
        },
        "de-DE": {
            translations: Ce,
            isRTL: !1
        },
        "es-ES": {
            translations: Oe,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ee,
            isRTL: !1
        },
        "it-IT": {
            translations: Ae,
            isRTL: !1
        },
        "km-KH": {
            translations: Re,
            isRTL: !1
        },
        "ko-KR": {
            translations: He,
            isRTL: !1
        },
        "mn-MN": {
            translations: Le,
            isRTL: !1
        },
        "pl-PL": {
            translations: Te,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ie,
            isRTL: !1
        },
        "ru-RU": {
            translations: Pe,
            isRTL: !1
        },
        "si-LK": {
            translations: De,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ve,
            isRTL: !1
        },
        "ta-IN": {
            translations: xe,
            isRTL: !1
        },
        "th-TH": {
            translations: We,
            isRTL: !1
        },
        "tr-TR": {
            translations: Ue,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ke,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Fe,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ge,
            isRTL: !1
        },
        "zh-CN": {
            translations: ze,
            isRTL: !1
        },
        "zh-TW": {
            translations: $e,
            isRTL: !1
        }
    };
var _ = p; {
    let s = class s extends _.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, fe);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "1151a77e-5fd3-471f-861b-1bcdfeee7051"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e);
                        var l = new _.DataTypes.VariableHolder;
                        l.value = w.carouselDisableOnRender$Action(o.getId("LoginCarousel"), e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _carouselOnSlideMoved$Action() {
            return this.hasOwnProperty("__carouselOnSlideMoved$Action") || (this.__carouselOnSlideMoved$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    a = this.idService;
                return _.Logger.startActiveSpan("CarouselOnSlideMoved", function(l) {
                    l && (l.setAttribute("code.function", "CarouselOnSlideMoved"), l.setAttribute("outsystems.function.key", "2a0fb47e-25fe-4b16-b9a8-e7deedabd2d1"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CarouselOnSlideMoved"), r = o.callContext(r);
                        var v = new _.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("dashboard.Layouts.LayoutAuthentication.CarouselOnSlideMoved$vars")));
                        v.value.itemIndexInLocal = e;
                        var i = new _.DataTypes.VariableHolder;
                        i.value = w.carouselGoTo$Action(a.getId("LoginCarousel"), v.value.itemIndexInLocal, r)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__carouselOnSlideMoved$Action
        }
        set _carouselOnSlideMoved$Action(e) {
            this.__carouselOnSlideMoved$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "1151a77e-5fd3-471f-861b-1bcdfeee7051"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        carouselOnSlideMoved$Action(e, r) {
            var t = this.controller;
            return _.Logger.startActiveSpan("CarouselOnSlideMoved__proxy", function(o) {
                o && (o.setAttribute("code.function", "CarouselOnSlideMoved"), o.setAttribute("outsystems.function.key", "2a0fb47e-25fe-4b16-b9a8-e7deedabd2d1"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._carouselOnSlideMoved$Action, r, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        get leftButtonOnClick$Action() {
            return this.hasOwnProperty("_leftButtonOnClick$Action") || (this._leftButtonOnClick$Action = function() {
                return Promise.resolve()
            }), this._leftButtonOnClick$Action
        }
        set leftButtonOnClick$Action(e) {
            this._leftButtonOnClick$Action = e
        }
        get rightButtonOnClick$Action() {
            return this.hasOwnProperty("_rightButtonOnClick$Action") || (this._rightButtonOnClick$Action = function() {
                return Promise.resolve()
            }), this._rightButtonOnClick$Action
        }
        set rightButtonOnClick$Action(e) {
            this._rightButtonOnClick$Action = e
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
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
            return le.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let u = s;
    X = u, X.registerVariableGroupType("dashboard.Layouts.LayoutAuthentication.CarouselOnSlideMoved$vars", [{
        name: "ItemIndex",
        attrName: "itemIndexInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Integer,
        defaultValue: n(function() {
            return 0
        }, "defaultValue")
    }])
}
var X, _e = new _.Controller.ControllerFactory(X, de);
var R = ne(ce());
var pe = {};

function J(u, s, m, e) {
    var r = document.body,
        t = {
            attributes: !0
        },
        o = n(function() {
            s.OnInitialize()
        }, "callback"),
        a = new MutationObserver(o);
    a.observe(r, t), u.ObserverObject = a
}
n(J, "default");

function ee(u, s, m, e) {
    u.ObserverObj.disconnect()
}
n(ee, "default");
var h = p; {
    let s = class s extends h.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, pe);
            var o = this.controller;
            this.clientActionProxies = {
                onInitialize$Action: n(function() {
                    return o.executeActionInsideJSNode(o._onInitialize$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "OnInitialize")
                }, "onInitialize$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return h.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new h.DataTypes.VariableHolder;
                        l.value = h.Logger.startActiveSpan("SetMutationObserver", function(v) {
                            v && (v.setAttribute("code.function", "SetMutationObserver"), v.setAttribute("outsystems.function.key", "17fc1e21-6f89-445f-826c-66b3f0e037e1"), v.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), v.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(J, "SetMutationObserver", "OnReady", {
                                    ObserverObject: h.DataConversion.JSNodeParamConverter.to(null, h.DataTypes.DataTypes.Object)
                                }, function(i) {
                                    var S = new(t.constructor.getVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult"));
                                    return S.observerObjectOut = h.DataConversion.JSNodeParamConverter.from(i.ObserverObject, h.DataTypes.DataTypes.Object), S
                                }, {
                                    OnInitialize: t.clientActionProxies.onInitialize$Action
                                }, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), r.variables.observerObjVar = l.value.observerObjectOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return h.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new h.DataTypes.VariableHolder;
                        l.value = w.getDeviceType$Action(e), r.variables.deviceVar = l.value.deviceOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return h.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), h.Logger.startActiveSpan("StopObserver", function(l) {
                            l && (l.setAttribute("code.function", "StopObserver"), l.setAttribute("outsystems.function.key", "02e1979d-774c-4d7f-b036-c14402c6d16a"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ee, "StopObserver", "OnDestroy", {
                                    ObserverObj: h.DataConversion.JSNodeParamConverter.to(r.variables.observerObjVar, h.DataTypes.DataTypes.Object)
                                }, function(v) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return h.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return h.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return h.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
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
                    o = this.idService;
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
            return w.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let u = s;
    te = u, te.registerVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult", [{
        name: "ObserverObject",
        attrName: "observerObjectOut",
        mandatory: !0,
        dataType: h.DataTypes.DataTypes.Object,
        defaultValue: n(function() {
            return null
        }, "defaultValue")
    }])
}
var te, Se = new h.Controller.ControllerFactory(te, ue);
var Pt = C.PlaceholderContent,
    Dt = C.IteratorPlaceholderContent,
    je = n(function() {
        var u = T(function(s) {
            var m = s.model,
                e = s.controller,
                r = s.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                a = D,
                l = V,
                v = {
                    props: s,
                    validateWidget: n(function(c) {
                        s.validateWidget(s, c)
                    }, "validateWidget")
                },
                i = m,
                S = P,
                H = I,
                f = L();
            return R.createElement("div", s.rootNodeProperties, S(m.variables.deviceVar === "desktop", !1, this, function() {
                return [R.createElement(O, {
                    align: 0,
                    content: v.props.placeholders.onDesktop,
                    style: "display-on-device-desktop",
                    _idProps: {
                        service: r,
                        name: "OnDesktop"
                    },
                    _widgetRecordProvider: i
                })]
            }, function() {
                return []
            }), S(m.variables.deviceVar === "tablet", !1, this, function() {
                return [R.createElement(O, {
                    align: 0,
                    content: v.props.placeholders.onTablet,
                    style: "display-on-device-tablet",
                    _idProps: {
                        service: r,
                        name: "OnTablet"
                    },
                    _widgetRecordProvider: i
                })]
            }, function() {
                return []
            }), S(m.variables.deviceVar === "phone", !1, this, function() {
                return [R.createElement(O, {
                    align: 0,
                    content: v.props.placeholders.onPhone,
                    style: "display-on-device-phone",
                    _idProps: {
                        service: r,
                        name: "OnPhone"
                    },
                    _widgetRecordProvider: i
                })]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "DisplayOnDevice",
                    functionKey: "558f2ce5-0350-4196-8060-44e236bc40af",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Adaptive.DisplayOnDevice",
            modelFactory: he,
            controllerFactory: Se
        });
        return u.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, u.getJsDependencies = function() {
            return []
        }, u.getBlocks = function() {
            return []
        }, u
    }, "componentFactory"),
    re = je();
var z = C.PlaceholderContent,
    qt = C.IteratorPlaceholderContent,
    Ye = n(function() {
        var u = T(function(s) {
            var m = s.model,
                e = s.controller,
                r = s.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                a = D,
                l = V,
                v = {
                    props: s,
                    validateWidget: n(function(c) {
                        s.validateWidget(s, c)
                    }, "validateWidget")
                },
                i = m,
                S = P,
                H = I,
                f = L();
            return d.createElement("div", s.rootNodeProperties, d.createElement(y, {
                align: 0,
                animate: !1,
                style: "ph-signup-main-container",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                style: "ph-signup-layout-content-container",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: i
            }, d.createElement(re, {
                getOwnerSpan: n(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    onDesktop: new z(function() {
                        return [d.createElement(M, {
                            getOwnerSpan: n(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Navigation: oe.carouselNavigation.dots,
                                ItemsPerSlide: m.getCachedValue(r.getId("LoginCarousel.ItemsPerSlide"), function() {
                                    return (function() {
                                        var c = new se;
                                        return c.desktopAttr = 1, c.tabletAttr = 1, c.phoneAttr = 1, c
                                    })()
                                }),
                                ExtendedClass: "ph-layout-carousel",
                                OptionalConfigs: m.getCachedValue(r.getId("LoginCarousel.OptionalConfigs"), function() {
                                    return (function() {
                                        var c = new ie;
                                        return c.autoPlayAttr = !0, c.loopAttr = !0, c.startingPositionAttr = 0, c
                                    })()
                                })
                            },
                            events: {
                                _handleError: n(function(c) {
                                    e.handleError(c)
                                }, "_handleError"),
                                initialized$Action: n(function(c) {
                                    var $ = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onDestroy$Action(e.callContext($))
                                }, "initialized$Action"),
                                onSlideMoved$Action: n(function(c, $) {
                                    var ge = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.carouselOnSlideMoved$Action($, e.callContext(ge))
                                }, "onSlideMoved$Action")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: r,
                                name: "LoginCarousel",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                carouselItems: new z(function() {
                                    return [d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-signup-layout-header",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Header2"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(A, {
                                        getOwnerSpan: n(function() {
                                            return f.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return f.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="107" height="34" viewBox="0 0 107 34" fill="none"><g clip-path="url(#clip0_4707_89817)"><path d="M21.4354 1.07249L19.6036 11.0174H13.2449C7.31272 11.0174 1.65837 15.6185 0.610369 21.2975L0.166783 23.7147C-0.876333 29.3938 3.0817 33.9949 9.01391 33.9949H14.3173C18.6409 33.9949 22.7598 30.6443 23.5203 26.5053L28.4044 0L21.4354 1.07249ZM16.9236 25.5673C16.6896 26.8459 15.4872 27.8866 14.1516 27.8866H10.9296C8.26325 27.8866 6.47921 25.8146 6.94713 23.2574L7.22499 21.7502C7.6978 19.1976 10.2423 17.121 12.9086 17.121H18.4793L16.9236 25.5673ZM70.4056 33.9944L74.5781 11.3342H81.178L77.0055 33.9944H70.4056ZM71.1195 11.5955C70.7886 13.3929 70.4564 15.1902 70.1256 16.9876C66.9988 16.0574 63.7728 16.3536 62.7817 16.5428C61.7114 22.3614 60.6395 28.1814 59.5677 34H52.9634C53.8603 29.1315 56.9242 12.5047 56.9242 12.5047C59.0723 11.6532 64.3472 9.92499 71.1195 11.5955ZM44.3596 11.0135H39.222C34.2159 11.0135 29.444 14.896 28.5616 19.6884L27.5234 25.3208C26.6411 30.1131 29.9802 33.9957 34.9863 33.9957H45.9147L47.0359 27.906H36.7652C35.0983 27.906 33.982 26.6133 34.2794 25.0128L34.3135 24.8214H50.872L51.8176 19.6884C52.6997 14.896 49.3608 11.0135 44.3548 11.0135H44.3596ZM45.1932 19.2031L45.1542 19.5297H35.308L35.3616 19.2404C35.6587 17.6445 37.1797 16.2399 38.8515 16.2399H42.6975C44.35 16.2399 45.4663 17.6212 45.1932 19.2031ZM100.325 11.3342H106.93C104.68 17.0607 99.5236 26.8018 94.5289 33.9944H87.9242C85.6315 27.1488 84.151 17.6106 83.8686 11.3342H90.4735C90.5927 13.3815 91.5501 20.9754 92.6427 26.2806C95.6394 21.1195 98.9432 14.348 100.32 11.3342H100.325Z" fill="#FF444F"/></g><defs><clipPath id="clip0_4707_89817"><rect width="107" height="34" fill="white"/></clipPath></defs></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(c) {
                                                e.handleError(c)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            name: "Logo",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })), d.createElement(x, {
                                        extendedProperties: {
                                            src: "https://assets.deriv.com/home/image-signup-1.png",
                                            className: "ph-carousel-image OSFillParent"
                                        },
                                        tag: "img",
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }), d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-carousel-content",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(W, {
                                        style: "ph-carousel-content-title",
                                        text: [H(l("pWYKTwYc_Eq9LRl94GXrww#Value", "Trading for anyone.\u2028Anywhere. Anytime."))],
                                        _idProps: {
                                            service: r,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }))), d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-signup-layout-header",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Header3"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(A, {
                                        getOwnerSpan: n(function() {
                                            return f.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return f.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="107" height="34" viewBox="0 0 107 34" fill="none"><g clip-path="url(#clip0_4707_89817)"><path d="M21.4354 1.07249L19.6036 11.0174H13.2449C7.31272 11.0174 1.65837 15.6185 0.610369 21.2975L0.166783 23.7147C-0.876333 29.3938 3.0817 33.9949 9.01391 33.9949H14.3173C18.6409 33.9949 22.7598 30.6443 23.5203 26.5053L28.4044 0L21.4354 1.07249ZM16.9236 25.5673C16.6896 26.8459 15.4872 27.8866 14.1516 27.8866H10.9296C8.26325 27.8866 6.47921 25.8146 6.94713 23.2574L7.22499 21.7502C7.6978 19.1976 10.2423 17.121 12.9086 17.121H18.4793L16.9236 25.5673ZM70.4056 33.9944L74.5781 11.3342H81.178L77.0055 33.9944H70.4056ZM71.1195 11.5955C70.7886 13.3929 70.4564 15.1902 70.1256 16.9876C66.9988 16.0574 63.7728 16.3536 62.7817 16.5428C61.7114 22.3614 60.6395 28.1814 59.5677 34H52.9634C53.8603 29.1315 56.9242 12.5047 56.9242 12.5047C59.0723 11.6532 64.3472 9.92499 71.1195 11.5955ZM44.3596 11.0135H39.222C34.2159 11.0135 29.444 14.896 28.5616 19.6884L27.5234 25.3208C26.6411 30.1131 29.9802 33.9957 34.9863 33.9957H45.9147L47.0359 27.906H36.7652C35.0983 27.906 33.982 26.6133 34.2794 25.0128L34.3135 24.8214H50.872L51.8176 19.6884C52.6997 14.896 49.3608 11.0135 44.3548 11.0135H44.3596ZM45.1932 19.2031L45.1542 19.5297H35.308L35.3616 19.2404C35.6587 17.6445 37.1797 16.2399 38.8515 16.2399H42.6975C44.35 16.2399 45.4663 17.6212 45.1932 19.2031ZM100.325 11.3342H106.93C104.68 17.0607 99.5236 26.8018 94.5289 33.9944H87.9242C85.6315 27.1488 84.151 17.6106 83.8686 11.3342H90.4735C90.5927 13.3815 91.5501 20.9754 92.6427 26.2806C95.6394 21.1195 98.9432 14.348 100.32 11.3342H100.325Z" fill="#FF444F"/></g><defs><clipPath id="clip0_4707_89817"><rect width="107" height="34" fill="white"/></clipPath></defs></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(c) {
                                                e.handleError(c)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            name: "Logo3",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })), d.createElement(x, {
                                        extendedProperties: {
                                            src: "https://assets.deriv.com/home/image-signup-2.png",
                                            className: "ph-carousel-image OSFillParent"
                                        },
                                        tag: "img",
                                        _idProps: {
                                            service: r,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    }), d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-carousel-content",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(W, {
                                        extendedProperties: {
                                            style: "height: 78px;"
                                        },
                                        style: "ph-carousel-content-title",
                                        text: [H(l("E+9wH71a+USkSZ2IT9ZFjQ#Value", "Fast deposits, quick withdrawals."))],
                                        _idProps: {
                                            service: r,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: i
                                    }))), d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-signup-layout-header",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Header4"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(A, {
                                        getOwnerSpan: n(function() {
                                            return f.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return f.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="107" height="34" viewBox="0 0 107 34" fill="none"><g clip-path="url(#clip0_4707_89817)"><path d="M21.4354 1.07249L19.6036 11.0174H13.2449C7.31272 11.0174 1.65837 15.6185 0.610369 21.2975L0.166783 23.7147C-0.876333 29.3938 3.0817 33.9949 9.01391 33.9949H14.3173C18.6409 33.9949 22.7598 30.6443 23.5203 26.5053L28.4044 0L21.4354 1.07249ZM16.9236 25.5673C16.6896 26.8459 15.4872 27.8866 14.1516 27.8866H10.9296C8.26325 27.8866 6.47921 25.8146 6.94713 23.2574L7.22499 21.7502C7.6978 19.1976 10.2423 17.121 12.9086 17.121H18.4793L16.9236 25.5673ZM70.4056 33.9944L74.5781 11.3342H81.178L77.0055 33.9944H70.4056ZM71.1195 11.5955C70.7886 13.3929 70.4564 15.1902 70.1256 16.9876C66.9988 16.0574 63.7728 16.3536 62.7817 16.5428C61.7114 22.3614 60.6395 28.1814 59.5677 34H52.9634C53.8603 29.1315 56.9242 12.5047 56.9242 12.5047C59.0723 11.6532 64.3472 9.92499 71.1195 11.5955ZM44.3596 11.0135H39.222C34.2159 11.0135 29.444 14.896 28.5616 19.6884L27.5234 25.3208C26.6411 30.1131 29.9802 33.9957 34.9863 33.9957H45.9147L47.0359 27.906H36.7652C35.0983 27.906 33.982 26.6133 34.2794 25.0128L34.3135 24.8214H50.872L51.8176 19.6884C52.6997 14.896 49.3608 11.0135 44.3548 11.0135H44.3596ZM45.1932 19.2031L45.1542 19.5297H35.308L35.3616 19.2404C35.6587 17.6445 37.1797 16.2399 38.8515 16.2399H42.6975C44.35 16.2399 45.4663 17.6212 45.1932 19.2031ZM100.325 11.3342H106.93C104.68 17.0607 99.5236 26.8018 94.5289 33.9944H87.9242C85.6315 27.1488 84.151 17.6106 83.8686 11.3342H90.4735C90.5927 13.3815 91.5501 20.9754 92.6427 26.2806C95.6394 21.1195 98.9432 14.348 100.32 11.3342H100.325Z" fill="#FF444F"/></g><defs><clipPath id="clip0_4707_89817"><rect width="107" height="34" fill="white"/></clipPath></defs></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(c) {
                                                e.handleError(c)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            name: "Logo4",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })), d.createElement(x, {
                                        extendedProperties: {
                                            src: "https://assets.deriv.com/home/image-signup-3.png",
                                            className: "ph-carousel-image OSFillParent"
                                        },
                                        tag: "img",
                                        _idProps: {
                                            service: r,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: i
                                    }), d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-carousel-content",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i
                                    }, d.createElement(W, {
                                        extendedProperties: {
                                            style: "height: 78px;"
                                        },
                                        style: "ph-carousel-content-title",
                                        text: [H(l("y1h4W71GzUCDxjw0h3AsGg#Value", "Trade Gold, Crypto, Forex, Oil, and more."))],
                                        _idProps: {
                                            service: r,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    onTablet: z.Empty,
                    onPhone: z.Empty
                },
                _dependencies: []
            }), d.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Content3"
                },
                _widgetRecordProvider: i
            }, d.createElement(O, {
                align: 0,
                content: v.props.placeholders.content,
                style: "full-width display-flex " + m.variables.extendedClassesIn,
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: ae.calculateDataFetchStatus(m.variables._extendedClassesInDataFetchStatus)
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "LayoutAuthentication",
                    functionKey: "cbbc9a58-4fa5-4b90-9833-e2952652be4f",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutAuthentication",
            modelFactory: me,
            controllerFactory: _e
        });
        return u.getCssDependencies = function() {
            return ["css/dashboard.Layouts.LayoutAuthentication.css", "css/OutSystemsReactWidgets.css"]
        }, u.getJsDependencies = function() {
            return []
        }, u.getBlocks = function() {
            return [re, M, A]
        }, u
    }, "componentFactory"),
    Kt = Ye();
export {
    Kt as a
};