import {
    h as p,
    i as z,
    p as f,
    x as w
} from "./_oschunk-O5KC3WOL.js";
import {
    a as J,
    g as b,
    m as k,
    o as T,
    q as I,
    r as j,
    s as q,
    t as U
} from "./_oschunk-NVHFAAS2.js";
import {
    a as H
} from "./_oschunk-AW35UT34.js";
import {
    Ka as C
} from "./_oschunk-WCMQG33O.js";
import {
    X as _,
    c as u,
    f as Q,
    n as L,
    o as E
} from "./_oschunk-DFKJJKI4.js";
var i = Q(J());
var l = _,
    x = class x extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordValidationResultRec)
            }, !1, l.SystemStructures.PasswordValidationResultRec), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, l.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("MaxLength", "maxLengthVar", "MaxLength", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 25
            }, !1), this.attr("hasSpaces", "hasSpacesVar", "hasSpaces", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUpperCase", "hasAtLeastUpperCaseIn", "HasAtLeastUpperCase", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUpperCaseInDataFetchStatus", "_hasAtLeastUpperCaseInDataFetchStatus", "_hasAtLeastUpperCaseInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Type", "typeIn", "Type", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastLowerCase", "hasAtLeastLowerCaseIn", "HasAtLeastLowerCase", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastLowerCaseInDataFetchStatus", "_hasAtLeastLowerCaseInDataFetchStatus", "_hasAtLeastLowerCaseInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MustNotContainSpaces", "mustNotContainSpacesIn", "MustNotContainSpaces", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_mustNotContainSpacesInDataFetchStatus", "_mustNotContainSpacesInDataFetchStatus", "_mustNotContainSpacesInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(x, "VariablesRecord");
var P = x;
P.init();
var D = class D extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(D, "WidgetsRecord");
var S = D,
    O = class O extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "Password" in n && (this.variables.passwordIn = n.Password, "_passwordInDataFetchStatus" in n && (this.variables._passwordInDataFetchStatus = n._passwordInDataFetchStatus)), "Length" in n && (this.variables.lengthIn = n.Length, "_lengthInDataFetchStatus" in n && (this.variables._lengthInDataFetchStatus = n._lengthInDataFetchStatus)), "HasAtLeastUpperCase" in n && (this.variables.hasAtLeastUpperCaseIn = n.HasAtLeastUpperCase, "_hasAtLeastUpperCaseInDataFetchStatus" in n && (this.variables._hasAtLeastUpperCaseInDataFetchStatus = n._hasAtLeastUpperCaseInDataFetchStatus)), "HasAtLeastOneNumber" in n && (this.variables.hasAtLeastOneNumberIn = n.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in n && (this.variables._hasAtLeastOneNumberInDataFetchStatus = n._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in n && (this.variables.hasAtLeastOneSpecialCharacterIn = n.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in n && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = n._hasAtLeastOneSpecialCharacterInDataFetchStatus)), "Type" in n && (this.variables.typeIn = n.Type, "_typeInDataFetchStatus" in n && (this.variables._typeInDataFetchStatus = n._typeInDataFetchStatus)), "HasAtLeastLowerCase" in n && (this.variables.hasAtLeastLowerCaseIn = n.HasAtLeastLowerCase, "_hasAtLeastLowerCaseInDataFetchStatus" in n && (this.variables._hasAtLeastLowerCaseInDataFetchStatus = n._hasAtLeastLowerCaseInDataFetchStatus)), "MustNotContainSpaces" in n && (this.variables.mustNotContainSpacesIn = n.MustNotContainSpaces, "_mustNotContainSpacesInDataFetchStatus" in n && (this.variables._mustNotContainSpacesInDataFetchStatus = n._mustNotContainSpacesInDataFetchStatus))
        }
    };
u(O, "Model");
var V = O;
V._hasValidationWidgetsValue = void 0;
var B = new l.Model.ModelFactory(V);
var W = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u0644\u0627 \u0645\u0633\u0627\u0641\u0627\u062A",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u062D\u0631\u0641 \u062E\u0627\u0635 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0631\u0642\u0645 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u062D\u0631\u0641 \u0635\u063A\u064A\u0631 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u062D\u0631\u0641 \u0643\u0628\u064A\u0631 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 {{0}}-16 \u062D\u0631\u0641\u064B\u0627"
    },
    G = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u09B8\u09CD\u09AA\u09C7\u09B8 \u09A8\u09C7\u0987",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 1 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0985\u0995\u09CD\u09B7\u09B0",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 1 \u09B8\u0982\u0996\u09CD\u09AF\u09BE",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 1 \u099B\u09CB\u099F \u09B9\u09BE\u09A4\u09C7\u09B0 \u0985\u0995\u09CD\u09B7\u09B0",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 1 \u09AC\u09DC \u0985\u0995\u09CD\u09B7\u09B0",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}}-16 \u0985\u0995\u09CD\u09B7\u09B0\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7"
    },
    Z = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Keine Leerzeichen",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Mindestens 1 Sonderzeichen",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Mindestens 1 Zahl",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Mindestens 1 Kleinbuchstabe",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Mindestens 1 Gro\xDFbuchstabe",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Muss {{0}}-16 Zeichen lang sein"
    },
    Y = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Sin espacios",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Al menos 1 car\xE1cter especial",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Al menos 1 n\xFAmero",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Al menos 1 letra min\xFAscula",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Al menos 1 letra may\xFAscula",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Debe tener entre {{0}}-16 caracteres"
    },
    X = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Pas d'espaces",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Au moins un caract\xE8re sp\xE9cial",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Au moins un chiffre",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Au moins une lettre minuscule",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Au moins une lettre majuscule",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Doit comporter entre {{0}} et 16 caract\xE8res"
    },
    K = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Nessuno spazio",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Almeno un carattere speciale",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Almeno 1 numero",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Almeno 1 lettera minuscola",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Almeno 1 lettera maiuscola",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Deve essere tra {{0}} e 16 caratteri"
    },
    $ = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u1782\u17D2\u1798\u17B6\u1793\u1785\u1793\u17D2\u179B\u17C4\u17C7",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A\u17AF\u1780\u17C1\u179F\u1799\u17C9\u17B6\u1784\u17A0\u17C4\u1785\u178E\u17B6\u179F\u17CB \u17E1",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u1799\u17C9\u17B6\u1784\u17A0\u17C4\u1785\u178E\u17B6\u179F\u17CB\u179B\u17C1\u1781 \u17E1",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A\u17A1\u17BE\u1784\u178F\u17BC\u1785\u1799\u17C9\u17B6\u1784\u17A0\u17C4\u1785\u178E\u17B6\u179F\u17CB \u17E1",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A\u17A1\u17BE\u1784\u1792\u17C6\u1799\u17C9\u17B6\u1784\u17A0\u17C4\u1785\u178E\u17B6\u179F\u17CB \u17E1",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1798\u17B6\u1793\u179A\u179C\u17B6\u1784 {{0}}-16 \u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A"
    },
    ee = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\uACF5\uBC31 \uC5C6\uC74C",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\uCD5C\uC18C 1\uAC1C\uC758 \uD2B9\uC218 \uBB38\uC790",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\uCD5C\uC18C 1\uAC1C \uC22B\uC790",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\uCD5C\uC18C 1\uAC1C\uC758 \uC18C\uBB38\uC790",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\uCD5C\uC18C 1\uAC1C\uC758 \uB300\uBB38\uC790",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}}-16\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4"
    },
    te = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u0437\u0430\u0439\u0433\u04AF\u0439",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 1 \u043E\u043D\u0446\u0433\u043E\u0439 \u0442\u044D\u043C\u0434\u044D\u0433\u0442",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 1 \u0442\u043E\u043E \u0448\u0430\u0430\u0440\u0434\u043B\u0430\u0433\u0430\u0442\u0430\u0439",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 1 \u0436\u0438\u0436\u0438\u0433 \u04AF\u0441\u044D\u0433 \u0448\u0430\u0430\u0440\u0434\u043B\u0430\u0433\u0430\u0442\u0430\u0439",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 \u043D\u044D\u0433 \u0442\u043E\u043C \u04AF\u0441\u044D\u0433",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}}-16 \u0442\u044D\u043C\u0434\u044D\u0433\u0442 \u0431\u0430\u0439\u0445 \u0451\u0441\u0442\u043E\u0439"
    },
    ae = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Brak spacji",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Co najmniej 1 znak specjalny",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Co najmniej 1 liczba",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Co najmniej jedna ma\u0142a litera",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Co najmniej jedna wielka litera",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Musi mie\u0107 od {{0}} do 16 znak\xF3w"
    },
    re = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Sem espa\xE7os",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Pelo menos 1 caractere especial",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Pelo menos 1 n\xFAmero",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Pelo menos 1 letra min\xFAscula",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Pelo menos 1 letra mai\xFAscula",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Deve ter entre {{0}} e 16 caracteres"
    },
    se = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u041D\u0435\u0442 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u041A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u041A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0446\u0438\u0444\u0440\u0430",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u041A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0441\u0442\u0440\u043E\u0447\u043D\u0430\u044F \u0431\u0443\u043A\u0432\u0430",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u041A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0431\u0443\u043A\u0432\u0430",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u0414\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 {{0}} \u0434\u043E 16 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
    },
    ie = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u0D89\u0DA9\u0D9A\u0DA9 \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u0D85\u0DA9\u0DD4\u0DB8 \u0D91\u0D9A \u0DC0\u0DD2\u0DC1\u0DDA\u0DC2 \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0D85\u0DA9\u0DD4\u0DB8 \u0D91\u0D9A \u0D85\u0D82\u0D9A\u0DBA\u0D9A\u0DCA",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u0D85\u0DA9\u0DD4\u0DB8 \u0D91\u0D9A \u0DC4\u0DBB\u0DD2\u0DBA\u0D9A \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u0D85\u0DA9\u0DD4\u0DB8 \u0D91\u0D9A \u0DC0\u0DD2\u0DC1\u0DCF\u0DBD \u0D85\u0D9A\u0DD4\u0DBB\u0DD4\u0D9A\u0DCA",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}}-16 \u0D85\u0D9A\u0DCA\u0DC2\u0DBB \u0D85\u0DAD\u0DBB \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA\u0DD2"
    },
    ne = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Hakuna nafasi",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Angalau herufi maalum 1",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Angalau nambari 1",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Angalau herufi ndogo 1",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Angalau herufi kubwa 1",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Lazima iwe na herufi {{0}} hadi 16"
    },
    oe = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u0B87\u0B9F\u0BC8\u0BB5\u0BC6\u0BB3\u0BBF \u0B87\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BC1",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 1 \u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BC1 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 1 \u0B8E\u0BA3\u0BCD",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 1 \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 \u0B92\u0BB0\u0BC1 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B85\u0B95\u0BB0\u0BAE\u0BCD",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}}-16 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    le = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 1 \u0E15\u0E31\u0E27",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 1 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 1 \u0E15\u0E31\u0E27",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 1 \u0E15\u0E31\u0E27",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 {{0}} \u0E16\u0E36\u0E07 16 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"
    },
    ce = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Bo\u015Fluk yok",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "En az 1 \xF6zel karakter",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "En az 1 say\u0131",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "En az 1 k\xFC\xE7\xFCk harf",
        "PLij0jjsqUS3FCwo9+E59A#Value": "En az 1 b\xFCy\xFCk harf",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}} ile 16 karakter aras\u0131nda olmal\u0131"
    },
    de = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Bo\u2018sh joylar yo\u2018q",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Kamida 1 maxsus harf",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Kamida 1 raqam",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Kamida 1 kichik harf",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Kamida 1 katta harf",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}} ta 16 ta belgidan iborat bo\u2018lishi kerak"
    },
    ue = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Bo\u2018sh joylar yo\u2018q",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "Kamida 1 maxsus harf",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "Kamida 1 raqam",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "Kamida 1 kichik harf",
        "PLij0jjsqUS3FCwo9+E59A#Value": "Kamida 1 katta harf",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "{{0}} ta 16 ta belgidan iborat bo\u2018lishi kerak"
    },
    he = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "Kh\xF4ng c\xF3 kho\u1EA3ng tr\u1EAFng",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\xCDt nh\u1EA5t 1 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\xCDt nh\u1EA5t 1 s\u1ED1",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\xCDt nh\u1EA5t 1 ch\u1EEF c\xE1i th\u01B0\u1EDDng",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\xCDt nh\u1EA5t 1 ch\u1EEF c\xE1i vi\u1EBFt hoa",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "Ph\u1EA3i c\xF3 t\u1EEB {{0}} \u0111\u1EBFn 16 k\xFD t\u1EF1"
    },
    pe = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u65E0\u7A7A\u683C",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u81F3\u5C111\u4E2A\u7279\u6B8A\u5B57\u7B26",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u81F3\u5C111\u4E2A\u6570\u5B57",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u81F3\u5C111\u4E2A\u5C0F\u5199\u5B57\u6BCD",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u81F3\u5C111\u4E2A\u5927\u5199\u5B57\u6BCD",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u5FC5\u987B\u4E3A {{0}} \u81F3 16 \u4E2A\u5B57\u7B26"
    },
    me = {
        "OBxqe1qO+k+tH0aCxHRXGQ#Value": "\u7121\u7A7A\u683C",
        "B_wqOmv_jkedtVUrwgUBDg#Value": "\u81F3\u5C11\u4E00\u500B\u7279\u6B8A\u7B26\u865F",
        "DjnhHVY1gkOllpbkf1HQZw#Value": "\u81F3\u5C11\u4E00\u500B\u6578\u5B57",
        "Mfx4e8LMC0u3AQUyfVzxJg#Value": "\u81F3\u5C11\u4E00\u500B\u5C0F\u5BEB\u5B57\u6BCD",
        "PLij0jjsqUS3FCwo9+E59A#Value": "\u81F3\u5C11\u4E00\u500B\u5927\u5BEB\u5B57\u6BCD",
        "JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1": "\u5FC5\u9808\u70BA {{0}} \u81F3 16 \u500B\u5B57\u5143"
    },
    N = {
        "ar-001": {
            translations: W,
            isRTL: !0
        },
        "bn-BD": {
            translations: G,
            isRTL: !1
        },
        "de-DE": {
            translations: Z,
            isRTL: !1
        },
        "es-ES": {
            translations: Y,
            isRTL: !1
        },
        "fr-FR": {
            translations: X,
            isRTL: !1
        },
        "it-IT": {
            translations: K,
            isRTL: !1
        },
        "km-KH": {
            translations: $,
            isRTL: !1
        },
        "ko-KR": {
            translations: ee,
            isRTL: !1
        },
        "mn-MN": {
            translations: te,
            isRTL: !1
        },
        "pl-PL": {
            translations: ae,
            isRTL: !1
        },
        "pt-PT": {
            translations: re,
            isRTL: !1
        },
        "ru-RU": {
            translations: se,
            isRTL: !1
        },
        "si-LK": {
            translations: ie,
            isRTL: !1
        },
        "sw-KE": {
            translations: ne,
            isRTL: !1
        },
        "ta-IN": {
            translations: oe,
            isRTL: !1
        },
        "th-TH": {
            translations: le,
            isRTL: !1
        },
        "tr-TR": {
            translations: ce,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: de,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ue,
            isRTL: !1
        },
        "vi-VN": {
            translations: he,
            isRTL: !1
        },
        "zh-CN": {
            translations: pe,
            isRTL: !1
        },
        "zh-TW": {
            translations: me,
            isRTL: !1
        }
    };

function R(d, n, r, s) {
    function e(t) {
        return t.toUpperCase() != t
    }
    u(e, "hasLowerCase");

    function o(t) {
        return /[A-Z]/.test(t)
    }
    u(o, "containsUppercase");

    function v(t) {
        return /\d/.test(t)
    }
    u(v, "hasNumber");

    function m(t) {
        return t.length >= d.Length && t.length <= d.MaxLength
    }
    u(m, "hasGoodLength");

    function h(t) {
        var c = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return c.test(t)
    }
    u(h, "hasSpecialChar");

    function g(t) {
        var c = /\s/;
        return c.test(t)
    }
    u(g, "hasSpaces"), d.HasLowerCase = d.RequiresLowerCase ? e(d.String) : !0, d.HasUpperCase = d.RequiresUpperCase ? o(d.String) : !0, d.HasNumber = d.RequiresNumber ? v(d.String) : !0, d.hasGoodLength = d.RequiresNumber ? m(d.String) : !0, d.hasSpecialChar = d.RequiresSpecialChar ? h(d.String) : !0, d.hasSpaces = d.RequiresNoSpaces ? g(d.String) : !0
}
u(R, "default");
var a = _; {
    let n = class n extends a.Controller.BaseViewController {
        constructor(s, e, o) {
            super(s, e, o, N);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(s) {
            this._dataFetchActionNames = s
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(s) {
                var e = this.model,
                    o = this.controller,
                    v = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(m) {
                    m && (m.setAttribute("code.function", "OnInitialize"), m.setAttribute("outsystems.function.key", "347c6580-a7d4-49c9-b25f-a310677d6be5"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnInitialize"), s = o.callContext(s), e.variables.passwordComplexityPolicyVar.minimumLengthAttr = e.variables.lengthIn, e.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = e.variables.hasAtLeastUpperCaseIn, e.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = e.variables.hasAtLeastLowerCaseIn, e.variables.passwordComplexityPolicyVar.numberRequiredAttr = e.variables.hasAtLeastOneNumberIn, e.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = e.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(s) {
            this.__onInitialize$Action = s
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(s) {
                var e = this.model,
                    o = this.controller,
                    v = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(m) {
                    return m && (m.setAttribute("code.function", "OnParametersChanged"), m.setAttribute("outsystems.function.key", "ace00ebf-5de4-4d02-b87b-6f1d3a85033a"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnParametersChanged"), s = o.callContext(s);
                        var h = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return e.variables.isPasswordEmptyVar = a.BuiltinFunctions.length(e.variables.passwordIn) === 0, h.value = a.Logger.startActiveSpan("checkValid", function(g) {
                                g && (g.setAttribute("code.function", "checkValid"), g.setAttribute("outsystems.function.key", "d33480f3-b071-45ed-8da1-55a2bb9cdee0"), g.setAttribute("outsystems.function.owner.name", "dashboard"), g.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(R, "checkValid", "OnParametersChanged", {
                                        String: a.DataConversion.JSNodeParamConverter.to(e.variables.passwordIn, a.DataTypes.DataTypes.Text),
                                        RequiresUpperCase: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastUpperCaseIn, a.DataTypes.DataTypes.Boolean),
                                        RequiresNoSpaces: a.DataConversion.JSNodeParamConverter.to(e.variables.mustNotContainSpacesIn, a.DataTypes.DataTypes.Boolean),
                                        MaxLength: a.DataConversion.JSNodeParamConverter.to(e.variables.maxLengthVar, a.DataTypes.DataTypes.Integer),
                                        Length: a.DataConversion.JSNodeParamConverter.to(e.variables.lengthIn, a.DataTypes.DataTypes.Integer),
                                        RequiresSpecialChar: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastOneSpecialCharacterIn, a.DataTypes.DataTypes.Boolean),
                                        RequiresLowerCase: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastLowerCaseIn, a.DataTypes.DataTypes.Boolean),
                                        RequiresNumber: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastOneNumberIn, a.DataTypes.DataTypes.Boolean),
                                        HasLowerCase: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        HasUpperCase: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        HasNumber: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasGoodLength: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasSpecialChar: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasSpaces: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                    }, function(t) {
                                        var c = new(o.constructor.getVariableGroupType("dashboard.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                        return c.hasLowerCaseOut = a.DataConversion.JSNodeParamConverter.from(t.HasLowerCase, a.DataTypes.DataTypes.Boolean), c.hasUpperCaseOut = a.DataConversion.JSNodeParamConverter.from(t.HasUpperCase, a.DataTypes.DataTypes.Boolean), c.hasNumberOut = a.DataConversion.JSNodeParamConverter.from(t.HasNumber, a.DataTypes.DataTypes.Boolean), c.hasGoodLengthOut = a.DataConversion.JSNodeParamConverter.from(t.hasGoodLength, a.DataTypes.DataTypes.Boolean), c.hasSpecialCharOut = a.DataConversion.JSNodeParamConverter.from(t.hasSpecialChar, a.DataTypes.DataTypes.Boolean), c.hasSpacesOut = a.DataConversion.JSNodeParamConverter.from(t.hasSpaces, a.DataTypes.DataTypes.Boolean), c
                                    }, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), e.variables.passwordValidationResultVar.isValidAttr = h.value.hasLowerCaseOut && h.value.hasUpperCaseOut && h.value.hasNumberOut && h.value.hasGoodLengthOut && h.value.hasSpecialCharOut, e.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !h.value.hasLowerCaseOut, e.variables.passwordValidationResultVar.missingMinimumLengthAttr = !h.value.hasGoodLengthOut, e.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !h.value.hasUpperCaseOut, e.variables.passwordValidationResultVar.missingNumberAttr = !h.value.hasNumberOut, e.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !h.value.hasSpecialCharOut, e.variables.hasSpacesVar = h.value.hasSpacesOut, o.compliant$Action(e.variables.passwordValidationResultVar.isValidAttr && !h.value.hasSpacesOut, s).then(function() {
                                e.variables.typeIn
                            })
                        })
                    }, function() {
                        m && m.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(s) {
            this.__onParametersChanged$Action = s
        }
        onInitialize$Action(s) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "347c6580-a7d4-49c9-b25f-a310677d6be5"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, s)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onParametersChanged$Action(s) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "ace00ebf-5de4-4d02-b87b-6f1d3a85033a"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, s)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(s) {
            this._compliant$Action = s
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(s) {
                var e = this.controller,
                    o = this.model,
                    v = this.idService;
                return e.onInitialize$Action(s)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(s) {
            this._onInitializeEventHandler = s
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(s) {
            this._onReadyEventHandler = s
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(s) {
            this._onRenderEventHandler = s
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(s) {
            this._onDestroyEventHandler = s
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(s) {
                var e = this.controller,
                    o = this.model,
                    v = this.idService;
                return e.onParametersChanged$Action(s)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(s) {
            this._onParametersChangedEventHandler = s
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(s) {
            this._onSyncStartEventHandler = s
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(s) {
            this._onSyncCompleteEventHandler = s
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(s) {
            this._onSyncErrorEventHandler = s
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(s) {
                return controller.handleError(s)
            }), this._handleError
        }
        set handleError(s) {
            this._handleError = s
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    u(n, "ControllerInner");
    let d = n;
    A = d, A.registerVariableGroupType("dashboard.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpaces",
        attrName: "hasSpacesOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var A, M = new a.Controller.ControllerFactory(A, H);
var Je = b.PlaceholderContent,
    We = b.IteratorPlaceholderContent,
    ge = u(function() {
        var d = T(function(n) {
            var r = n.model,
                s = n.controller,
                e = n.controller.idService,
                o = s.validationService,
                v = s.callContext(),
                m = q,
                h = U,
                g = {
                    props: n,
                    validateWidget: u(function(F) {
                        n.validateWidget(n, F)
                    }, "validateWidget")
                },
                t = r,
                c = j,
                y = I,
                ve = k();
            return i.createElement("div", n.rootNodeProperties, i.createElement(p, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, i.createElement(p, {
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
                _widgetRecordProvider: t
            }, c(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [i.createElement(f, {
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
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: r.getCachedValue(e.getId("mclut8vn20Gdmgl5GOqtew.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(z, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: r.getCachedValue(e.getId("OdHUASMdn0ahUVaqnHdEmQ.Value"), function() {
                        return C.localize$Action(L.resolve(E.TranslationsService).getMessage("JhwHzwM4q0eQdnDjehwskw#ValueExpression.-1566923486.1", "Must be {{0}}-16 characters"), r.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(), "", "", "", "", v).translatedStringOut
                    }, function() {
                        return r.variables.passwordComplexityPolicyVar.minimumLengthAttr
                    }),
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, !1, this, function() {
                return [i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, !1, this, function() {
                        return [i.createElement(f, {
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
                                uuid: "12"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("cxEtpeHSxEC0wxRW7xsvAg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [y(h("PLij0jjsqUS3FCwo9+E59A#Value", "At least 1 uppercase letter"))],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [i.createElement(f, {
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
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("emuB+vD5dUm6LwMERgkHkA.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [y(h("Mfx4e8LMC0u3AQUyfVzxJg#Value", "At least 1 lowercase letter"))],
                    _idProps: {
                        service: e,
                        uuid: "22"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [i.createElement(f, {
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
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("rbyyChqUskaSDelyTRu4SA.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [y(h("DjnhHVY1gkOllpbkf1HQZw#Value", "At least 1 number"))],
                    _idProps: {
                        service: e,
                        uuid: "29"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, i.createElement(p, {
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [i.createElement(f, {
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
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                                uuid: "34"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("_pn3QWZv+EaDdrSNDnZFjQ.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "35"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [y(h("B_wqOmv_jkedtVUrwgUBDg#Value", "At least 1 special character"))],
                    _idProps: {
                        service: e,
                        uuid: "36"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.mustNotContainSpacesIn, !1, this, function() {
                return [i.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "37"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "38"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(f, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "39"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.hasSpacesVar, !1, this, function() {
                        return [i.createElement(f, {
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
                                uuid: "40"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(f, {
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
                                uuid: "41"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(p, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("4PFkDDsGc0+zLac4DRYRSg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.hasSpacesVar ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.hasSpacesVar
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "42"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [y(h("OBxqe1qO+k+tH0aCxHRXGQ#Value", "No spaces"))],
                    _idProps: {
                        service: e,
                        uuid: "43"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "PasswordPolicy",
                    functionKey: "6a0d04b8-2d65-4576-be8b-3a13c2cc3e64",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.PasswordPolicy",
            modelFactory: B,
            controllerFactory: M
        });
        return d.getCssDependencies = function() {
            return ["css/dashboard.Common.PasswordPolicy.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    Ge = ge();
export {
    Ge as a
};