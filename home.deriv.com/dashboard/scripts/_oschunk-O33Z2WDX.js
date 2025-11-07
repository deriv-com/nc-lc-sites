import {
    a as x
} from "./_oschunk-24WIHVSN.js";
import {
    h as o,
    i as I,
    p as v,
    x as D
} from "./_oschunk-O5KC3WOL.js";
import {
    a as q,
    g as p,
    m as O,
    o as C,
    q as b,
    r as U,
    s as G,
    t as H
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as S
} from "./_oschunk-WCMQG33O.js";
import {
    X as h,
    c as V,
    f as T
} from "./_oschunk-DFKJJKI4.js";
var a = T(q());
var c = h,
    A = class A extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new c.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, c.SystemStructures.PasswordComplexityPolicyRec), this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new c.SystemStructures.PasswordValidationResultRec)
            }, !1, c.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
V(A, "VariablesRecord");
var f = A;
f.init();
var R = class R extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
V(R, "WidgetsRecord");
var E = R,
    P = class P extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(u) {
            "Password" in u && (this.variables.passwordIn = u.Password, "_passwordInDataFetchStatus" in u && (this.variables._passwordInDataFetchStatus = u._passwordInDataFetchStatus))
        }
    };
V(P, "Model");
var _ = P;
_._hasValidationWidgetsValue = void 0;
var k = new c.Model.ModelFactory(_);
var j = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u0631\u0627\u0626\u0639! \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u062A\u0641\u064A \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 \u062D\u0631\u0641 \u062E\u0627\u0635 (\u0645\u062B\u0644\u0627\u064B: !\u060C @\u060C #\u060C $\u060C %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 \u0631\u0642\u0645",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 \u062D\u0631\u0641 \u0635\u063A\u064A\u0631",
        "wYONzJay00aT+awaUkXOxA#Value": "1 \u062D\u0631\u0641 \u0643\u0628\u064A\u0631",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u0639\u062F\u062F \u0645\u0646 \u0627\u0644\u062D\u0631\u0648\u0641",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649:"
    },
    W = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Gro\xDFartig! Ihr Passwort erf\xFCllt alle Anforderungen.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 Sonderzeichen (z.B.: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 Zahl",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 Kleinbuchstabe",
        "wYONzJay00aT+awaUkXOxA#Value": "1 Gro\xDFbuchstabe",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " Zeichen",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Mindestens ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Ihr Passwort muss enthalten:"
    },
    K = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Gro\xDFartig! Ihr Passwort erf\xFCllt alle Anforderungen.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 Sonderzeichen (z.B.: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 Zahl",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 Kleinbuchstabe",
        "wYONzJay00aT+awaUkXOxA#Value": "1 Gro\xDFbuchstabe",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " Zeichen",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Mindestens ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Ihr Passwort muss enthalten:"
    },
    Y = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Great! Your password meets all the requirements.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 special character (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 number",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lowercase letter",
        "wYONzJay00aT+awaUkXOxA#Value": "1 uppercase letter",
        "rwEUCpoInUSEWvR8KGyJbg#Value": "\xA0characters",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "At least ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Your password must contain:"
    },
    z = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xA1Genial! Tu contrase\xF1a cumple con todos los requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 car\xE1cter especial (por ejemplo: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra may\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Al menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Tu contrase\xF1a debe contener:"
    },
    J = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "G\xE9nial! Votre mot de passe remplit toutes les exigences.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caract\xE8re sp\xE9cial (par ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caract\xE8res",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
    },
    $ = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "G\xE9nial! Votre mot de passe remplit toutes les exigences.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caract\xE8re sp\xE9cial (par ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caract\xE8res",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
    },
    M = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "G\xE9nial! Votre mot de passe remplit toutes les exigences.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caract\xE8re sp\xE9cial (par ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caract\xE8res",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
    },
    Q = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u092C\u0927\u093E\u0908 \u0939\u094B ! \u0906\u092A\u0915\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0938\u092D\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u0913\u0902 \u0915\u094B \u092A\u0942\u0930\u093E \u0915\u0930\u0924\u093E \u0939\u0948.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 \u0935\u093F\u0936\u0947\u0937 \u0935\u0930\u094D\u0923 (\u091C\u0948\u0938\u0947 : !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "\u090F\u0915 \u0938\u0902\u0916\u094D\u092F\u093E",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "\u090F\u0915 \u091B\u094B\u091F\u093E \u0905\u0915\u094D\u0937\u0930",
        "wYONzJay00aT+awaUkXOxA#Value": "\u090F\u0915 \u092C\u095C\u093E \u0905\u0915\u094D\u0937\u0930",
        "rwEUCpoInUSEWvR8KGyJbg#Value": "\u0905\u0915\u094D\u0937\u0930",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u0906\u092A\u0915\u0947 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0915\u0947 \u0932\u093F\u090F \u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u090F\u0901 :"
    },
    X = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Fantastico! La tua password soddisfa tutti i requisiti.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 carattere speciale (ad esempio: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 numero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettera minuscola",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettera maiuscola",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caratteri",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Almeno ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "La tua password deve contenere:"
    },
    B = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u3059\u3054\u3044\uFF01 \u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u3059\u3079\u3066\u306E\u8981\u4EF6\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u3059\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u3064\u306E\u7279\u6B8A\u6587\u5B57\uFF08\u4F8B: !, @, #, $, %\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u3064\u306E\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u3064\u306E\u5C0F\u6587\u5B57",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u3064\u306E\u5927\u6587\u5B57",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u6587\u5B57",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u5C11\u306A\u304F\u3068\u3082 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u4EE5\u4E0B\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"
    },
    ee = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\uD6CC\uB96D\uD569\uB2C8\uB2E4! \uBE44\uBC00\uBC88\uD638\uB294 \uBAA8\uB4E0 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCDA9\uC871\uD569\uB2C8\uB2E4.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\uAC1C\uC758 \uD2B9\uC218 \uBB38\uC790 (\uC608: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\uAC1C\uC758 \uC22B\uC790",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\uAC1C\uC758 \uC18C\uBB38\uC790",
        "wYONzJay00aT+awaUkXOxA#Value": "1\uAC1C\uC758 \uB300\uBB38\uC790",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \uBB38\uC790",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\uCD5C\uC18C\uD55C ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\uBE44\uBC00\uBC88\uD638\uC5D0\uB294 \uB2E4\uC74C\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4:"
    },
    te = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Geweldig! Je wachtwoord voldoet aan alle eisen.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 speciaal teken (bijv.: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 cijfer",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 kleine letter",
        "wYONzJay00aT+awaUkXOxA#Value": "1 hoofdletter",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " tekens",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Minstens ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Je wachtwoord moet bevatten:"
    },
    ae = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xD3timo! Sua senha atende a todos os requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caractere especial (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra mai\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Sua senha deve conter:"
    },
    re = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xD3timo! A sua senha cumpre todos os requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 car\xE1cter especial (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra mai\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "A sua senha deve conter:"
    },
    ie = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u7801\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u4E2A\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u4E2A\u5C0F\u5199\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u4E2A\u5927\u5199\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u4E2A\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u7801\u5FC5\u987B\u5305\u542B\uFF1A"
    },
    se = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u7801\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u4E2A\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u4E2A\u5C0F\u5199\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u4E2A\u5927\u5199\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u4E2A\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u7801\u5FC5\u987B\u5305\u542B\uFF1A"
    },
    ne = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u78BC\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u500B\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u500B\u6578\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u500B\u5C0F\u5BEB\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u500B\u5927\u5BEB\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u500B\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u78BC\u5FC5\u9808\u5305\u542B\uFF1A"
    },
    F = {
        ar: {
            translations: j,
            isRTL: !0
        },
        de: {
            translations: W,
            isRTL: !1
        },
        "de-DE": {
            translations: K,
            isRTL: !1
        },
        en: {
            translations: Y,
            isRTL: !1
        },
        es: {
            translations: z,
            isRTL: !1
        },
        fr: {
            translations: J,
            isRTL: !1
        },
        "fr-CA": {
            translations: $,
            isRTL: !1
        },
        "fr-FR": {
            translations: M,
            isRTL: !1
        },
        "hi-IN": {
            translations: Q,
            isRTL: !1
        },
        "it-IT": {
            translations: X,
            isRTL: !1
        },
        "ja-JP": {
            translations: B,
            isRTL: !1
        },
        "ko-KR": {
            translations: ee,
            isRTL: !1
        },
        nl: {
            translations: te,
            isRTL: !1
        },
        pt: {
            translations: ae,
            isRTL: !1
        },
        "pt-BR": {
            translations: re,
            isRTL: !1
        },
        "zh-CN": {
            translations: ie,
            isRTL: !1
        },
        "zh-Hans": {
            translations: se,
            isRTL: !1
        },
        "zh-Hant": {
            translations: ne,
            isRTL: !1
        }
    };
var d = h; {
    let u = class u extends d.Controller.BaseViewController {
        constructor(t, e, s) {
            super(t, e, s, F);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    s = this.controller,
                    y = this.idService;
                return d.Logger.startActiveSpan("OnInitialize", function(l) {
                    l && (l.setAttribute("code.function", "OnInitialize"), l.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnInitialize"), t = s.callContext(t);
                        var n = new d.DataTypes.VariableHolder;
                        n.value = d.SystemActions.getPasswordComplexityPolicy(t), e.variables.passwordComplexityPolicyVar = n.value.passwordComplexityPolicyOut, e.variables.passwordValidationResultVar.isValidAttr = !1, e.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !0, e.variables.passwordValidationResultVar.missingMinimumLengthAttr = !0, e.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !0, e.variables.passwordValidationResultVar.missingNumberAttr = !0, e.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !0
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    s = this.controller,
                    y = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(l) {
                    return l && (l.setAttribute("code.function", "OnParametersChanged"), l.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnParametersChanged"), t = s.callContext(t);
                        var n = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            if (n.value = d.SystemActions.validatePasswordComplexity(e.variables.passwordIn, t), e.variables.passwordValidationResultVar.isValidAttr = n.value.passwordValidationResultOut.isValidAttr, e.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = n.value.passwordValidationResultOut.missingLowerCaseLetterAttr, e.variables.passwordValidationResultVar.missingMinimumLengthAttr = n.value.passwordValidationResultOut.missingMinimumLengthAttr, e.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = n.value.passwordValidationResultOut.missingUpperCaseLetterAttr, e.variables.passwordValidationResultVar.missingNumberAttr = n.value.passwordValidationResultOut.missingNumberAttr, e.variables.passwordValidationResultVar.missingSpecialCharacterAttr = n.value.passwordValidationResultOut.missingSpecialCharacterAttr, n.value.passwordValidationResultOut.isValidAttr) {
                                if (e.variables.isValidPasswordVar) return d.Flow.returnAsync();
                                e.variables.isValidPasswordVar = !0
                            } else if (e.variables.isValidPasswordVar) e.variables.isValidPasswordVar = !1;
                            else return d.Flow.returnAsync();
                            return s.compliant$Action(n.value.passwordValidationResultOut.isValidAttr, t)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return d.Logger.startActiveSpan("OnInitialize__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnInitialize"), s.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnParametersChanged"), s.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
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
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var e = this.controller,
                    s = this.model,
                    y = this.idService;
                return e.onInitialize$Action(t)
            }), this._onInitializeEventHandler
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
                    y = this.idService;
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
            return S.defaultTimeout
        }
    };
    V(u, "ControllerInner");
    let g = u;
    L = g
}
var L, N = new d.Controller.ControllerFactory(L, x);
var De = p.PlaceholderContent,
    xe = p.IteratorPlaceholderContent,
    oe = V(function() {
        var g = C(function(u) {
            var r = u.model,
                t = u.controller,
                e = u.controller.idService,
                s = t.validationService,
                y = t.callContext(),
                l = G,
                n = H,
                le = {
                    props: u,
                    validateWidget: V(function(Z) {
                        u.validateWidget(u, Z)
                    }, "validateWidget")
                },
                i = r,
                m = U,
                w = b,
                ue = O();
            return a.createElement("div", u.rootNodeProperties, m(r.variables.passwordComplexityPolicyVar.minimumLengthAttr > 0 || r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr || r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr || r.variables.passwordComplexityPolicyVar.numberRequiredAttr || r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [a.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "font-size-xs",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: i
                }, m(!r.variables.isValidPasswordVar, !1, this, function() {
                    return [a.createElement(o, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "1"
                        },
                        _widgetRecordProvider: i
                    }, a.createElement(o, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "2"
                        },
                        _widgetRecordProvider: i
                    }, w(n("Dl7u+j4q+EGAnNmhoodUlw#Value", "Your password must contain:"))), m(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                        return [a.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("_q87RRvrVECu3VaTIzJ6sQ.Style"), function() {
                                return r.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "" : "text-green-darker"
                            }, function() {
                                return r.variables.passwordValidationResultVar.missingMinimumLengthAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }, a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        }, m(r.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                            return [a.createElement(v, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [a.createElement(v, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }, w(n("HCZhF4tDjEGF05LZK1PQKA#Value", "At least ")), a.createElement(I, {
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: r.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }), w(n("rwEUCpoInUSEWvR8KGyJbg#Value", "\xA0characters"))))]
                    }, function() {
                        return []
                    }), m(r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, !1, this, function() {
                        return [a.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("3fhhgmONGE+VgKcBnDfW3w.Style"), function() {
                                return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "" : "text-green-darker"
                            }, function() {
                                return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }, a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: i
                        }, m(r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, !1, this, function() {
                            return [a.createElement(v, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [a.createElement(v, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: i
                        }, w(n("wYONzJay00aT+awaUkXOxA#Value", "1 uppercase letter"))))]
                    }, function() {
                        return []
                    }), m(r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                        return [a.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("YMZJeUWYikyuvTBV7uNuEw.Style"), function() {
                                return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr ? "" : "text-green-darker"
                            }, function() {
                                return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }, a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        }, m(r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                            return [a.createElement(v, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [a.createElement(v, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: i
                        }, w(n("ql00Rx6EHE+VHZcio9Ld7w#Value", "1 lowercase letter"))))]
                    }, function() {
                        return []
                    }), m(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                        return [a.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("BnVnJwyZOEu3kAkpa+cA1g.Style"), function() {
                                return r.variables.passwordValidationResultVar.missingNumberAttr ? "" : "text-green-darker"
                            }, function() {
                                return r.variables.passwordValidationResultVar.missingNumberAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        }, a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: i
                        }, m(r.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                            return [a.createElement(v, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [a.createElement(v, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }, w(n("OMYnQ_ERyUegrAFjGV6_og#Value", "1 number"))))]
                    }, function() {
                        return []
                    }), m(r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                        return [a.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("0D56A2_eCk2_XxCpklQYGg.Style"), function() {
                                return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "" : "text-green-darker"
                            }, function() {
                                return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: i
                        }, a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, m(r.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                            return [a.createElement(v, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return [a.createElement(v, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), a.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        }, w(n("F8EtDaZYlkGfsihC3p1G+g#Value", "1 special character (ex: !, @, #, $, %)"))))]
                    }, function() {
                        return []
                    }))]
                }, function() {
                    return [a.createElement(o, {
                        align: 0,
                        animate: !1,
                        style: "text-green-darker",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "29"
                        },
                        _widgetRecordProvider: i
                    }, a.createElement(v, {
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "30"
                        },
                        _widgetRecordProvider: i
                    }), a.createElement(D, {
                        style: "margin-left-s",
                        text: [w(n("oiNfuD2HnkGAxmk6Ah5sqA#Value", "Great! Your password meets all the requirements."))],
                        _idProps: {
                            service: e,
                            uuid: "31"
                        },
                        _widgetRecordProvider: i
                    }))]
                }))]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: V(function() {
                return {
                    codeFunction: "PasswordPolicy",
                    functionKey: "98f4a100-e907-494e-8fc0-7cc17fefb0e0",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Utilities.PasswordPolicy",
            modelFactory: k,
            controllerFactory: N
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, g.getBlocks = function() {
            return []
        }, g
    }, "componentFactory"),
    ke = oe();
export {
    ke as a
};