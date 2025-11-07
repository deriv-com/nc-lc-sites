import {
    h as d,
    p as m,
    x as y
} from "./_oschunk-O5KC3WOL.js";
import {
    a as B,
    g as V,
    m as N,
    o as Q,
    q as A,
    r as D,
    s as T,
    t as M
} from "./_oschunk-NVHFAAS2.js";
import {
    a as I
} from "./_oschunk-AW35UT34.js";
import {
    Ka as R
} from "./_oschunk-WCMQG33O.js";
import {
    J as L,
    X as P,
    c,
    f as J
} from "./_oschunk-DFKJJKI4.js";
var r = J(B());
var h = P,
    b = class b extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsEmpty", "isEmptyVar", "IsEmpty", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("hasSpaces", "hasSpacesVar", "hasSpaces", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isValidLength", "isValidLengthVar", "isValidLength", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("hasOnlyAllowedChars", "hasOnlyAllowedCharsVar", "hasOnlyAllowedChars", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("hasNoSpecialChars", "hasNoSpecialCharsVar", "hasNoSpecialChars", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsValid", "isValidVar", "IsValid", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Nickname", "nicknameIn", "Nickname", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_nicknameInDataFetchStatus", "_nicknameInDataFetchStatus", "_nicknameInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsNicknameAvailable", "isNicknameAvailableIn", "IsNicknameAvailable", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isNicknameAvailableInDataFetchStatus", "_isNicknameAvailableInDataFetchStatus", "_isNicknameAvailableInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(b, "VariablesRecord");
var k = b;
k.init();
var S = class S extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(S, "WidgetsRecord");
var O = S,
    w = class w extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "Nickname" in o && (this.variables.nicknameIn = o.Nickname, "_nicknameInDataFetchStatus" in o && (this.variables._nicknameInDataFetchStatus = o._nicknameInDataFetchStatus)), "IsNicknameAvailable" in o && (this.variables.isNicknameAvailableIn = o.IsNicknameAvailable, "_isNicknameAvailableInDataFetchStatus" in o && (this.variables._isNicknameAvailableInDataFetchStatus = o._isNicknameAvailableInDataFetchStatus))
        }
    };
c(w, "Model");
var C = w;
C._hasValidationWidgetsValue = void 0;
var z = new h.Model.ModelFactory(C);
var W = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0627\u0633\u0645 \u0645\u0633\u062A\u0639\u0627\u0631 \u0645\u062A\u0627\u062D",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u0644\u0627 \u0645\u0633\u0627\u0641\u0627\u062A",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u0644\u0627 \u0623\u062D\u0631\u0641 \u062E\u0627\u0635\u0629",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0623\u062D\u0631\u0641 \u0641\u0642\u0637 (a, b, c ...)\u060C \u0623\u0631\u0642\u0627\u0645 (1, 2, 3 ...)\u060C \u0634\u0631\u0637\u0629 (-)\u060C \u0634\u0631\u0637\u0629 \u0633\u0641\u0644\u064A\u0629 (_)\u060C \u0648\u0646\u0642\u0637\u0629 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 2-16 \u062D\u0631\u0641\u064B\u0627"
    },
    X = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0989\u09AA\u09A8\u09BE\u09AE \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u0997\u09C7\u099B\u09C7",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u09B8\u09CD\u09AA\u09C7\u09B8 \u09A8\u09C7\u0987",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u09AC\u09BF\u09B6\u09C7\u09B7 \u0985\u0995\u09CD\u09B7\u09B0 \u09A8\u09C7\u0987",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0985\u0995\u09CD\u09B7\u09B0 (a, b, c ...)\uFF0C\u09B8\u0982\u0996\u09CD\u09AF\u09BE (1, 2, 3 ...)\uFF0C\u09A1\u09CD\u09AF\u09BE\u09B6 (-)\uFF0C\u0986\u09A8\u09A1\u09BE\u09B0\u09B8\u09CD\u0995\u09CB\u09B0 (_) \u098F\u09AC\u0982 \u09A1\u099F (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u09E8-\u09E7\u09EC \u0985\u0995\u09CD\u09B7\u09B0\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7"
    },
    K = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Spitzname verf\xFCgbar",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Keine Leerzeichen",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Keine Sonderzeichen",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Nur Buchstaben (a, b, c ...), Zahlen (1, 2, 3 ...), Bindestrich (-), Unterstrich (_), und Punkt (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Muss 2-16 Zeichen lang sein"
    },
    q = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Apodo disponible",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Sin espacios",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Sin caracteres especiales",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Solo letras (a, b, c...), n\xFAmeros (1, 2, 3...), guion (-), guion bajo (_), y punto (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Debe tener entre 2 y 16 caracteres"
    },
    Z = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Pseudo disponible",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Pas d'espaces",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Aucun caract\xE8re sp\xE9cial",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Seulement des lettres (a, b, c...), des chiffres (1, 2, 3...), tiret (-), tiret bas (_), et point (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Doit comporter entre 2 et 16 caract\xE8res"
    },
    U = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Nickname disponibile",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Nessuno spazio",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Nessun carattere speciale",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Solo lettere (a, b, c...), numeri (1, 2, 3...), trattino (-), underscore (_), e punto (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Deve essere tra 2 e 16 caratteri"
    },
    j = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u1788\u17D2\u1798\u17C4\u17C7\u1782\u178E\u1793\u17B8\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u1782\u17D2\u1798\u17B6\u1793\u1785\u1793\u17D2\u179B\u17C4\u17C7",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u17A2\u1780\u17D2\u179F\u179A\u1796\u17B7\u179F\u17C1\u179F\u1798\u17B7\u1793\u1798\u17B6\u1793",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u178F\u17C2\u17A2\u1780\u17D2\u179F\u179A (a, b, c ...), \u179B\u17C1\u1781 (1, 2, 3 ...), \u178A\u17B6\u1794\u17CB (-), \u17A2\u1793\u17CB\u178C\u17B6\u179F\u17D2\u1780\u17D0\u179A (_), \u1793\u17B7\u1784\u1785\u17BB\u1785 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793\u17A2\u1780\u17D2\u179F\u179A 2-16 \u178F\u17BD"
    },
    Y = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\uB2C9\uB124\uC784 \uC0AC\uC6A9 \uAC00\uB2A5",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\uACF5\uBC31 \uC5C6\uC74C",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\uD2B9\uC218 \uBB38\uC790 \uC5C6\uC74C",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\uBB38\uC790\uB9CC (a, b, c ...), \uC22B\uC790 (1, 2, 3 ...), \uB300\uC2DC (-), \uBC11\uC904 (_), \uC810 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4"
    },
    $ = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0422\u043E\u0432\u0447 \u043D\u044D\u0440 \u0430\u0448\u0438\u0433\u043B\u0430\u0433\u0434\u0430\u0436 \u0431\u0430\u0439\u043D\u0430",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u0437\u0430\u0439\u0433\u04AF\u0439",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u041E\u043D\u0446\u0433\u043E\u0439 \u0442\u044D\u043C\u0434\u044D\u0433\u0442\u0433\u04AF\u0439",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0417\u04E9\u0432\u0445\u04E9\u043D \u04AF\u0441\u044D\u0433 (a, b, c ...), \u0442\u043E\u043E (1, 2, 3 ...), \u0434\u0430\u043C \u0442\u043E\u0433\u0442\u043E\u043E\u0441\u043E\u043D \u0446\u044D\u0433 (-), \u0434\u043E\u043E\u0434 \u0442\u0430\u043B\u044B\u043D \u0446\u044D\u0433 (_), \u0431\u0430 \u0446\u044D\u0433 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16 \u0442\u044D\u043C\u0434\u044D\u0433\u0442 \u0431\u0430\u0439\u0445 \u0451\u0441\u0442\u043E\u0439"
    },
    ee = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Nick dost\u0119pny",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Brak spacji",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Brak znak\xF3w specjalnych",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Tylko litery (a, b, c...), cyfry (1, 2, 3...), my\u015Blnik (-), podkre\u015Blenie (_), i kropka (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Musi mie\u0107 od 2 do 16 znak\xF3w"
    },
    ae = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Apelido dispon\xEDvel",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Sem espa\xE7os",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Sem caracteres especiais",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Apenas letras (a, b, c...), n\xFAmeros (1, 2, 3...), tra\xE7o (-), underscore (_), e ponto (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Deve ter entre 2 e 16 caracteres"
    },
    te = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u041D\u0435\u0442 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u041D\u0435\u0442 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B (a, b, c ...), \u0446\u0438\u0444\u0440\u044B (1, 2, 3 ...), \u0442\u0438\u0440\u0435 (-), \u043D\u0438\u0436\u043D\u0435\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435 (_), \u0438 \u0442\u043E\u0447\u043A\u0430 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u0414\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 2 \u0434\u043E 16 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
    },
    re = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0D85\u0DB1\u0DCA\u200D\u0DBA\u0DCF \u0DB1\u0DB8\u0DCA \u0DBD\u0DD0\u0DB6\u0DD9\u0DB1\u0DCA\u0DB1\u0DA7 \u0D87\u0DAD",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u0D89\u0DA9\u0D9A\u0DA9 \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u0DC0\u0DD2\u0DC1\u0DDA\u0DC2 \u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DB8\u0DAB\u0D9A\u0DCA (a, b, c ...), \u0D85\u0D82\u0D9A (1, 2, 3 ...), \u0DA9\u0DD1\u0DC2\u0DCA (-), \u0D85\u0DB1\u0DCA\u0DA9\u0DBB\u0DCA\u0DC3\u0DCA\u0D9A\u0DDD\u0DBB\u0DCA (_), \u0DC3\u0DC4 \u0DAF\u0DDC\u0DA7\u0DCA (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 2-16 \u0D85\u0DAD\u0DBB \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA"
    },
    ie = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Jina la utani linapatikana",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Hakuna nafasi",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Hakuna herufi maalum",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Herufi tu (a, b, c ...), nambari (1, 2, 3 ...), dash (-), underscore (_), na dot (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Inapaswa kuwa na herufi 2-16"
    },
    ne = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0B87\u0BB0\u0BC1\u0BAE\u0BC8\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BA4\u0BC1",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u0B87\u0B9F\u0BC8\u0BB5\u0BC6\u0BB3\u0BBF \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BC1 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD (a, b, c ...), \u0B8E\u0BA3\u0BCD\u0B95\u0BB3\u0BCD (1, 2, 3 ...), \u0B9F\u0BC7\u0BB7\u0BCD (-), \u0B85\u0BA3\u0BCD\u0B9F\u0BB0\u0BCD\u0BB8\u0BCD\u0B95\u0BCB\u0BB0\u0BCD (_), \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B9F\u0BCA\u0B9F\u0BCD (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    se = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30\u0E1E\u0E34\u0E40\u0E28\u0E29",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 (a, b, c ...), \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (1, 2, 3 ...), \u0E02\u0E35\u0E14\u0E01\u0E25\u0E32\u0E07 (-), \u0E02\u0E35\u0E14\u0E25\u0E48\u0E32\u0E07 (_), \u0E08\u0E38\u0E14 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 2-16 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"
    },
    oe = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Takma ad kullan\u0131labilir",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Bo\u015Fluk yok",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\xD6zel karakter yok",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Sadece harfler (a, b, c ...), say\u0131lar (1, 2, 3 ...), tire (-), alt \xE7izgi (_), ve nokta (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16 karakter olmal\u0131"
    },
    le = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Nickname mavjud",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Bo\u2018sh joylar yo\u2018q",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Maxsus belgi yo\u2018q",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Faqat harflar (a, b, c ...), sonlar (1, 2, 3 ...), chiziq (-), pastki chertma (_), va nuqta (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16 ta harfdan iborat bo\u2018lishi kerak"
    },
    ce = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Nickname mavjud",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Bo\u2018sh joylar yo\u2018q",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Maxsus belgi yo\u2018q",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Faqat harflar (a, b, c ...), sonlar (1, 2, 3 ...), chiziq (-), pastki chertma (_), va nuqta (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "2-16 ta harfdan iborat bo\u2018lishi kerak"
    },
    de = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "Bi\u1EC7t danh kh\u1EA3 d\u1EE5ng",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "Kh\xF4ng c\xF3 kho\u1EA3ng tr\u1EAFng",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "Kh\xF4ng c\xF3 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "Ch\u1EC9 g\u1ED3m ch\u1EEF c\xE1i (a, b, c ...), s\u1ED1 (1, 2, 3 ...), d\u1EA5u g\u1EA1ch ngang (-), g\u1EA1ch d\u01B0\u1EDBi (_), v\xE0 d\u1EA5u ch\u1EA5m (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "Ph\u1EA3i t\u1EEB 2 \u0111\u1EBFn 16 k\xFD t\u1EF1"
    },
    ue = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u6635\u79F0\u53EF\u7528",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u65E0\u7A7A\u683C",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u65E0\u7279\u6B8A\u5B57\u7B26",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u4EC5\u9650\u5B57\u6BCD (a, b, c ...)\uFF0C\u6570\u5B57 (1, 2, 3 ...)\uFF0C\u8FDE\u5B57\u7B26 (-)\uFF0C\u4E0B\u5212\u7EBF (_)\uFF0C\u70B9 (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u5FC5\u987B\u662F2-16\u4E2A\u5B57\u7B26"
    },
    me = {
        "mf7rpc45JUqFFgw6Coo6pQ#Value": "\u66B1\u7A31\u53EF\u7528",
        "rMOEIuiGVkOIQgJw2_yzpw#Value": "\u7121\u7A7A\u683C",
        "SHALM6QnHkKLmPkCeXZCOg#Value": "\u7121\u7279\u6B8A\u5B57\u7B26",
        "YxlOp1uQxkisQXDPlBjf5g#Value": "\u53EA\u5141\u8A31\u5B57\u6BCD (a, b, c ...)\uFF0C\u6578\u5B57 (1, 2, 3 ...)\uFF0C\u9023\u5B57\u7B26 (-)\uFF0C\u5E95\u7DDA (_)\uFF0C\u8207\u9EDE (.)",
        "M4kNk3CzOEGiMGI2t9LvLQ#Value": "\u5FC5\u9808\u70BA2-16\u500B\u5B57\u7B26"
    },
    H = {
        "ar-001": {
            translations: W,
            isRTL: !0
        },
        "bn-BD": {
            translations: X,
            isRTL: !1
        },
        "de-DE": {
            translations: K,
            isRTL: !1
        },
        "es-ES": {
            translations: q,
            isRTL: !1
        },
        "fr-FR": {
            translations: Z,
            isRTL: !1
        },
        "it-IT": {
            translations: U,
            isRTL: !1
        },
        "km-KH": {
            translations: j,
            isRTL: !1
        },
        "ko-KR": {
            translations: Y,
            isRTL: !1
        },
        "mn-MN": {
            translations: $,
            isRTL: !1
        },
        "pl-PL": {
            translations: ee,
            isRTL: !1
        },
        "pt-PT": {
            translations: ae,
            isRTL: !1
        },
        "ru-RU": {
            translations: te,
            isRTL: !1
        },
        "si-LK": {
            translations: re,
            isRTL: !1
        },
        "sw-KE": {
            translations: ie,
            isRTL: !1
        },
        "ta-IN": {
            translations: ne,
            isRTL: !1
        },
        "th-TH": {
            translations: se,
            isRTL: !1
        },
        "tr-TR": {
            translations: oe,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: le,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ce,
            isRTL: !1
        },
        "vi-VN": {
            translations: de,
            isRTL: !1
        },
        "zh-CN": {
            translations: ue,
            isRTL: !1
        },
        "zh-TW": {
            translations: me,
            isRTL: !1
        }
    };

function E(p, o, i, t) {
    function e(f) {
        let v = /^[\s\S]{2,16}$/.test(f),
            u = !/\s/.test(f),
            g = /^[A-Za-z0-9._-]+$/.test(f.replace(/\s/g, "")),
            l = /^[A-Za-z0-9._ -]+$/.test(f.replace(/\s/g, ""));
        return {
            isValidLength: v,
            hasOnlyAllowedChars: g,
            hasNoSpecialChars: l,
            hasNoSpaces: u,
            isValid: v && g && u
        }
    }
    c(e, "validateNickname");
    let s = e(p.String);
    p.hasNoSpaces = s.hasNoSpaces, p.hasNoSpecialChars = s.hasNoSpecialChars, p.hasOnlyAllowedChars = s.hasOnlyAllowedChars, p.isValidLength = s.isValidLength, p.isValid = s.isValid
}
c(E, "default");
var n = P; {
    let o = class o extends n.Controller.BaseViewController {
        constructor(t, e, s) {
            super(t, e, s, H);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    s = this.controller,
                    f = this.idService;
                return n.Logger.startActiveSpan("OnParametersChanged", function(v) {
                    return v && (v.setAttribute("code.function", "OnParametersChanged"), v.setAttribute("outsystems.function.key", "ce670752-64d0-4ed6-a219-784f32d9ef61"), v.setAttribute("outsystems.function.owner.name", "dashboard"), v.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnParametersChanged"), t = s.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return e.variables.isEmptyVar = n.BuiltinFunctions.length(e.variables.nicknameIn) === 0, u.value = n.Logger.startActiveSpan("checkValid", function(g) {
                                g && (g.setAttribute("code.function", "checkValid"), g.setAttribute("outsystems.function.key", "668190fb-b8e5-403c-bfc8-b5b9c6a19c5f"), g.setAttribute("outsystems.function.owner.name", "dashboard"), g.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return s.safeExecuteJSNode(E, "checkValid", "OnParametersChanged", {
                                        String: n.DataConversion.JSNodeParamConverter.to(e.variables.nicknameIn, n.DataTypes.DataTypes.Text),
                                        hasNoSpaces: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        hasNoSpecialChars: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        hasOnlyAllowedChars: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        isValidLength: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        isValid: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                    }, function(a) {
                                        var l = new(s.constructor.getVariableGroupType("dashboard.Common.NicknamePolicy.OnParametersChanged$checkValidJSResult"));
                                        return l.hasNoSpacesOut = n.DataConversion.JSNodeParamConverter.from(a.hasNoSpaces, n.DataTypes.DataTypes.Boolean), l.hasNoSpecialCharsOut = n.DataConversion.JSNodeParamConverter.from(a.hasNoSpecialChars, n.DataTypes.DataTypes.Boolean), l.hasOnlyAllowedCharsOut = n.DataConversion.JSNodeParamConverter.from(a.hasOnlyAllowedChars, n.DataTypes.DataTypes.Boolean), l.isValidLengthOut = n.DataConversion.JSNodeParamConverter.from(a.isValidLength, n.DataTypes.DataTypes.Boolean), l.isValidOut = n.DataConversion.JSNodeParamConverter.from(a.isValid, n.DataTypes.DataTypes.Boolean), l
                                    }, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), e.variables.hasSpacesVar = !u.value.hasNoSpacesOut, e.variables.isValidLengthVar = u.value.isValidLengthOut, e.variables.hasOnlyAllowedCharsVar = u.value.hasOnlyAllowedCharsOut, e.variables.hasNoSpecialCharsVar = u.value.hasNoSpecialCharsOut, e.variables.isValidVar = u.value.isValidOut, s.compliant$Action(u.value.isValidOut && e.variables.isNicknameAvailableIn, t)
                        })
                    }, function() {
                        v && v.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnParametersChanged"), s.setAttribute("outsystems.function.key", "ce670752-64d0-4ed6-a219-784f32d9ef61"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(t) {
            this._compliant$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var e = this.controller,
                    s = this.model,
                    f = this.idService;
                return e.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return R.defaultTimeout
        }
    };
    c(o, "ControllerInner");
    let p = o;
    x = p, x.registerVariableGroupType("dashboard.Common.NicknamePolicy.OnParametersChanged$checkValidJSResult", [{
        name: "hasNoSpaces",
        attrName: "hasNoSpacesOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasNoSpecialChars",
        attrName: "hasNoSpecialCharsOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasOnlyAllowedChars",
        attrName: "hasOnlyAllowedCharsOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "isValidLength",
        attrName: "isValidLengthOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var x, F = new n.Controller.ControllerFactory(x, I);
var ze = V.PlaceholderContent,
    He = V.IteratorPlaceholderContent,
    pe = c(function() {
        var p = Q(function(o) {
            var i = o.model,
                t = o.controller,
                e = o.controller.idService,
                s = t.validationService,
                f = t.callContext(),
                v = T,
                u = M,
                g = {
                    props: o,
                    validateWidget: c(function(G) {
                        o.validateWidget(o, G)
                    }, "validateWidget")
                },
                a = i,
                l = D,
                _ = A,
                he = N();
            return r.createElement("div", o.rootNodeProperties, r.createElement(d, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 6px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            }, l(i.variables.isEmptyVar, !1, this, function() {
                return [r.createElement(m, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                    },
                    icon: "circle-thin",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: a
                })]
            }, function() {
                return [l(i.variables.isValidLengthVar, !1, this, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "5"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #dc2020; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "times-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "6"
                        },
                        _widgetRecordProvider: a
                    })]
                })]
            })), r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                style: i.getCachedValue(e.getId("UluigOOW8Emwmxpi8K2IEw.Style"), function() {
                    return i.variables.isEmptyVar ? "" : i.variables.isValidLengthVar ? "password-policy__rule--success" : "password-policy__rule--error"
                }, function() {
                    return i.variables.isEmptyVar
                }, function() {
                    return i.variables.isValidLengthVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: a
            }, r.createElement(y, {
                extendedProperties: {
                    style: "color: #6A7178; font-size: 12px;"
                },
                text: [_(u("M4kNk3CzOEGiMGI2t9LvLQ#Value", "Must be 2-16 characters"))],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: a
            }))), r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: a
            }, l(i.variables.isEmptyVar, !1, this, function() {
                return [r.createElement(m, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                    },
                    icon: "circle-thin",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: a
                })]
            }, function() {
                return [l(i.variables.hasOnlyAllowedCharsVar, !1, this, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "12"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #dc2020; font-size: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "times-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "13"
                        },
                        _widgetRecordProvider: a
                    })]
                })]
            })), r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("HQo_gH1qFkeCJoXD4df9EQ.Style"), function() {
                    return i.variables.isEmptyVar ? "" : i.variables.hasOnlyAllowedCharsVar ? "password-policy__rule--success" : "password-policy__rule--error"
                }, function() {
                    return i.variables.isEmptyVar
                }, function() {
                    return i.variables.hasOnlyAllowedCharsVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: a
            }, r.createElement(y, {
                extendedProperties: {
                    style: "color: #6A7178; font-size: 12px;"
                },
                text: [_(u("YxlOp1uQxkisQXDPlBjf5g#Value", "Only letters (a, b,c...), numbers (1, 2, 3...), dash (-), underscore (_), and dot (.)"))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: a
            }))), r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: a
            }, l(i.variables.isEmptyVar, !1, this, function() {
                return [r.createElement(m, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                    },
                    icon: "circle-thin",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: a
                })]
            }, function() {
                return [l(i.variables.hasNoSpecialCharsVar, !1, this, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "19"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #dc2020; font-size: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "times-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "20"
                        },
                        _widgetRecordProvider: a
                    })]
                })]
            })), r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("kKLYzAwMq02MfegqTCz7PA.Style"), function() {
                    return i.variables.isEmptyVar ? "" : i.variables.hasNoSpecialCharsVar ? "password-policy__rule--success" : "password-policy__rule--error"
                }, function() {
                    return i.variables.isEmptyVar
                }, function() {
                    return i.variables.hasNoSpecialCharsVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: a
            }, r.createElement(y, {
                extendedProperties: {
                    style: "color: #6A7178; font-size: 12px;"
                },
                text: [_(u("SHALM6QnHkKLmPkCeXZCOg#Value", "No special characters"))],
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: a
            }))), r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: a
            }, l(i.variables.isEmptyVar, !1, this, function() {
                return [r.createElement(m, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                    },
                    icon: "circle-thin",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: a
                })]
            }, function() {
                return [l(i.variables.hasSpacesVar, !1, this, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #dc2020; font-size: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "times-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "26"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "27"
                        },
                        _widgetRecordProvider: a
                    })]
                })]
            })), r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("qnpeaJZZHUimQg2rAFLibQ.Style"), function() {
                    return i.variables.isEmptyVar ? "" : i.variables.hasSpacesVar ? "password-policy__rule--error" : "password-policy__rule--success"
                }, function() {
                    return i.variables.isEmptyVar
                }, function() {
                    return i.variables.hasSpacesVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: a
            }, r.createElement(y, {
                extendedProperties: {
                    style: "color: #6A7178; font-size: 12px;"
                },
                text: [_(u("rMOEIuiGVkOIQgJw2_yzpw#Value", "No spaces"))],
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: a
            }))), r.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: a
            }, r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: a
            }, l(!i.variables.isValidVar, !1, this, function() {
                return [r.createElement(m, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                    },
                    icon: "circle-thin",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "32"
                    },
                    _widgetRecordProvider: a
                })]
            }, function() {
                return [l(i.variables.isNicknameAvailableIn, !1, this, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "33"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [r.createElement(m, {
                        extendedProperties: {
                            style: "color: #dc2020; font-size: 15px; width: 15px;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        icon: "times-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "34"
                        },
                        _widgetRecordProvider: a
                    })]
                })]
            })), r.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("8ArvObAsfkCvL1Cq2Xu7pg.Style"), function() {
                    return i.variables.isValidVar ? i.variables.isNicknameAvailableIn ? "password-policy__rule--success" : "password-policy__rule--error" : ""
                }, function() {
                    return i.variables.isValidVar
                }, function() {
                    return i.variables.isNicknameAvailableIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: L.calculateDataFetchStatus(i.variables._isNicknameAvailableInDataFetchStatus)
            }, r.createElement(y, {
                extendedProperties: {
                    style: "color: #6A7178; font-size: 12px;"
                },
                text: [_(u("mf7rpc45JUqFFgw6Coo6pQ#Value", "Nickname available"))],
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: a
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "NicknamePolicy",
                    functionKey: "63c838e2-8081-44dc-9954-c94978ba4f6c",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.NicknamePolicy",
            modelFactory: z,
            controllerFactory: F
        });
        return p.getCssDependencies = function() {
            return ["css/dashboard.Common.NicknamePolicy.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return []
        }, p
    }, "componentFactory"),
    Fe = pe();
export {
    Fe as a
};