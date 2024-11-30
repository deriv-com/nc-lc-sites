import {
    a as U
} from "./_oschunk-BHZNFATE.js";
import {
    h as o,
    j as S,
    q as c,
    y as b
} from "./_oschunk-WAXNMQCP.js";
import {
    a as k,
    g as C,
    i as f
} from "./_oschunk-J7LCUWB3.js";
import {
    a as O
} from "./_oschunk-H7UK4VZM.js";
import {
    ia as v
} from "./_oschunk-NTQBNJ73.js";
import {
    c as m,
    g as H
} from "./_oschunk-DVBKI63I.js";
var i = H(k());
var l = v,
    _ = class _ extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, l.SystemStructures.PasswordComplexityPolicyRec), this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordValidationResultRec)
            }, !1, l.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
m(_, "VariablesRecord");
var w = _;
w.init();
var A = class A extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
m(A, "WidgetsRecord");
var p = A,
    R = class R extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "Password" in a && (this.variables.passwordIn = a.Password, "_passwordInDataFetchStatus" in a && (this.variables._passwordInDataFetchStatus = a._passwordInDataFetchStatus))
        }
    };
m(R, "Model");
var h = R;
h._hasValidationWidgetsValue = void 0;
var G = new l.Model.ModelFactory(h);
var F = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u0631\u0627\u0626\u0639! \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u062A\u0641\u064A \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 \u062D\u0631\u0641 \u062E\u0627\u0635 (\u0645\u062B\u0644\u0627\u064B: !\u060C @\u060C #\u060C $\u060C %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 \u0631\u0642\u0645",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 \u062D\u0631\u0641 \u0635\u063A\u064A\u0631",
        "wYONzJay00aT+awaUkXOxA#Value": "1 \u062D\u0631\u0641 \u0643\u0628\u064A\u0631",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u0639\u062F\u062F \u0645\u0646 \u0627\u0644\u062D\u0631\u0648\u0641",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649:"
    },
    L = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Gro\xDFartig! Ihr Passwort erf\xFCllt alle Anforderungen.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 Sonderzeichen (z.B.: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 Zahl",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 Kleinbuchstabe",
        "wYONzJay00aT+awaUkXOxA#Value": "1 Gro\xDFbuchstabe",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " Zeichen",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Mindestens ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Ihr Passwort muss enthalten:"
    },
    N = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Great! Your password meets all the requirements.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 special character (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 number",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lowercase letter",
        "wYONzJay00aT+awaUkXOxA#Value": "1 uppercase letter",
        "rwEUCpoInUSEWvR8KGyJbg#Value": "\xA0characters",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "At least ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Your password must contain:"
    },
    T = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xA1Genial! Tu contrase\xF1a cumple con todos los requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 car\xE1cter especial (por ejemplo: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra may\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Al menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Tu contrase\xF1a debe contener:"
    },
    Z = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "G\xE9nial! Votre mot de passe remplit toutes les exigences.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caract\xE8re sp\xE9cial (par ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caract\xE8res",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
    },
    q = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "G\xE9nial! Votre mot de passe remplit toutes les exigences.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caract\xE8re sp\xE9cial (par ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caract\xE8res",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
    },
    W = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u092C\u0927\u093E\u0908 \u0939\u094B ! \u0906\u092A\u0915\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0938\u092D\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u0913\u0902 \u0915\u094B \u092A\u0942\u0930\u093E \u0915\u0930\u0924\u093E \u0939\u0948.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 \u0935\u093F\u0936\u0947\u0937 \u0935\u0930\u094D\u0923 (\u091C\u0948\u0938\u0947 : !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "\u090F\u0915 \u0938\u0902\u0916\u094D\u092F\u093E",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "\u090F\u0915 \u091B\u094B\u091F\u093E \u0905\u0915\u094D\u0937\u0930",
        "wYONzJay00aT+awaUkXOxA#Value": "\u090F\u0915 \u092C\u095C\u093E \u0905\u0915\u094D\u0937\u0930",
        "rwEUCpoInUSEWvR8KGyJbg#Value": "\u0905\u0915\u094D\u0937\u0930",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u0906\u092A\u0915\u0947 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0915\u0947 \u0932\u093F\u090F \u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u090F\u0901 :"
    },
    j = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Fantastico! La tua password soddisfa tutti i requisiti.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 carattere speciale (ad esempio: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 numero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettera minuscola",
        "wYONzJay00aT+awaUkXOxA#Value": "1 lettera maiuscola",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caratteri",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Almeno ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "La tua password deve contenere:"
    },
    z = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u3059\u3054\u3044\uFF01 \u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u3059\u3079\u3066\u306E\u8981\u4EF6\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u3059\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u3064\u306E\u7279\u6B8A\u6587\u5B57\uFF08\u4F8B: !, @, #, $, %\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u3064\u306E\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u3064\u306E\u5C0F\u6587\u5B57",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u3064\u306E\u5927\u6587\u5B57",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u6587\u5B57",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u5C11\u306A\u304F\u3068\u3082 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u4EE5\u4E0B\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"
    },
    Y = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\uD6CC\uB96D\uD569\uB2C8\uB2E4! \uBE44\uBC00\uBC88\uD638\uB294 \uBAA8\uB4E0 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCDA9\uC871\uD569\uB2C8\uB2E4.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\uAC1C\uC758 \uD2B9\uC218 \uBB38\uC790 (\uC608: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\uAC1C\uC758 \uC22B\uC790",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\uAC1C\uC758 \uC18C\uBB38\uC790",
        "wYONzJay00aT+awaUkXOxA#Value": "1\uAC1C\uC758 \uB300\uBB38\uC790",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \uBB38\uC790",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\uCD5C\uC18C\uD55C ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\uBE44\uBC00\uBC88\uD638\uC5D0\uB294 \uB2E4\uC74C\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4:"
    },
    K = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "Geweldig! Je wachtwoord voldoet aan alle eisen.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 speciaal teken (bijv.: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 cijfer",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 kleine letter",
        "wYONzJay00aT+awaUkXOxA#Value": "1 hoofdletter",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " tekens",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Minstens ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Je wachtwoord moet bevatten:"
    },
    $ = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xD3timo! Sua senha atende a todos os requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 caractere especial (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra mai\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "Sua senha deve conter:"
    },
    J = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\xD3timo! A sua senha cumpre todos os requisitos.",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1 car\xE1cter especial (ex: !, @, #, $, %)",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1 n\xFAmero",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra min\xFAscula",
        "wYONzJay00aT+awaUkXOxA#Value": "1 letra mai\xFAscula",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "A sua senha deve conter:"
    },
    M = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u7801\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u4E2A\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u4E2A\u5C0F\u5199\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u4E2A\u5927\u5199\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u4E2A\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u7801\u5FC5\u987B\u5305\u542B\uFF1A"
    },
    Q = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u7801\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u4E2A\u6570\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u4E2A\u5C0F\u5199\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u4E2A\u5927\u5199\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u4E2A\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u7801\u5FC5\u987B\u5305\u542B\uFF1A"
    },
    X = {
        "oiNfuD2HnkGAxmk6Ah5sqA#Value": "\u592A\u68D2\u4E86\uFF01 \u60A8\u7684\u5BC6\u78BC\u7B26\u5408\u6240\u6709\u8981\u6C42\u3002",
        "F8EtDaZYlkGfsihC3p1G+g#Value": "1\u500B\u7279\u6B8A\u5B57\u7B26\uFF08\u4F8B\u5982\uFF1A\uFF01\uFF0C@\uFF0C\uFF03\uFF0C$\uFF0C\uFF05\uFF09",
        "OMYnQ_ERyUegrAFjGV6_og#Value": "1\u500B\u6578\u5B57",
        "ql00Rx6EHE+VHZcio9Ld7w#Value": "1\u500B\u5C0F\u5BEB\u5B57\u6BCD",
        "wYONzJay00aT+awaUkXOxA#Value": "1\u500B\u5927\u5BEB\u5B57\u6BCD",
        "rwEUCpoInUSEWvR8KGyJbg#Value": " \u500B\u5B57\u7B26",
        "HCZhF4tDjEGF05LZK1PQKA#Value": "\u81F3\u5C11 ",
        "Dl7u+j4q+EGAnNmhoodUlw#Value": "\u60A8\u7684\u5BC6\u78BC\u5FC5\u9808\u5305\u542B\uFF1A"
    },
    I = {
        ar: {
            translations: F,
            isRTL: !0
        },
        "de-DE": {
            translations: L,
            isRTL: !1
        },
        en: {
            translations: N,
            isRTL: !1
        },
        es: {
            translations: T,
            isRTL: !1
        },
        "fr-CA": {
            translations: Z,
            isRTL: !1
        },
        "fr-FR": {
            translations: q,
            isRTL: !1
        },
        "hi-IN": {
            translations: W,
            isRTL: !1
        },
        "it-IT": {
            translations: j,
            isRTL: !1
        },
        "ja-JP": {
            translations: z,
            isRTL: !1
        },
        "ko-KR": {
            translations: Y,
            isRTL: !1
        },
        nl: {
            translations: K,
            isRTL: !1
        },
        pt: {
            translations: $,
            isRTL: !1
        },
        "pt-BR": {
            translations: J,
            isRTL: !1
        },
        "zh-CN": {
            translations: M,
            isRTL: !1
        },
        "zh-Hans": {
            translations: Q,
            isRTL: !1
        },
        "zh-Hant": {
            translations: X,
            isRTL: !1
        }
    };
var u = v; {
    let a = class a extends u.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, I);
            var V = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    V = this.idService;
                return u.Logger.startActiveSpan("OnInitialize", function(s) {
                    s && (s.setAttribute("code.function", "OnInitialize"), s.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var n = new u.DataTypes.VariableHolder;
                        n.value = u.SystemActions.getPasswordComplexityPolicy(e), r.variables.passwordComplexityPolicyVar = n.value.passwordComplexityPolicyOut, r.variables.passwordValidationResultVar.isValidAttr = !1, r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !0, r.variables.passwordValidationResultVar.missingMinimumLengthAttr = !0, r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !0, r.variables.passwordValidationResultVar.missingNumberAttr = !0, r.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !0
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    V = this.idService;
                return u.Logger.startActiveSpan("OnParametersChanged", function(s) {
                    return s && (s.setAttribute("code.function", "OnParametersChanged"), s.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var n = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            if (n.value = u.SystemActions.validatePasswordComplexity(r.variables.passwordIn, e), r.variables.passwordValidationResultVar.isValidAttr = n.value.passwordValidationResultOut.isValidAttr, r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = n.value.passwordValidationResultOut.missingLowerCaseLetterAttr, r.variables.passwordValidationResultVar.missingMinimumLengthAttr = n.value.passwordValidationResultOut.missingMinimumLengthAttr, r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = n.value.passwordValidationResultOut.missingUpperCaseLetterAttr, r.variables.passwordValidationResultVar.missingNumberAttr = n.value.passwordValidationResultOut.missingNumberAttr, r.variables.passwordValidationResultVar.missingSpecialCharacterAttr = n.value.passwordValidationResultOut.missingSpecialCharacterAttr, n.value.passwordValidationResultOut.isValidAttr) {
                                if (r.variables.isValidPasswordVar) return u.Flow.returnAsync();
                                r.variables.isValidPasswordVar = !0
                            } else if (r.variables.isValidPasswordVar) r.variables.isValidPasswordVar = !1;
                            else return u.Flow.returnAsync();
                            return t.compliant$Action(n.value.passwordValidationResultOut.isValidAttr, e)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(e) {
            this._compliant$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    V = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
                    V = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
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
            return O.defaultTimeout
        }
    };
    m(a, "ControllerInner");
    let y = a;
    D = y
}
var D, x = new u.Controller.ControllerFactory(D, U);
var Re = f.PlaceholderContent,
    Ee = f.IteratorPlaceholderContent,
    g = class g extends C.BaseWebBlock {
        static get displayName() {
            return "Utilities.PasswordPolicy"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "98f4a100-e907-494e-8fc0-7cc17fefb0e0",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return x
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                P = this.controller,
                e = this.idService,
                r = P.validationService,
                t = this.widgetsRecordProvider,
                V = P.callContext(),
                s = g.ifWidget,
                n = g.textWidget,
                B = g.asPrimitiveValue,
                d = g.getTranslation,
                ee = this;
            return i.createElement("div", this.getRootNodeProperties(), s(a.variables.passwordComplexityPolicyVar.minimumLengthAttr > 0 || a.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr || a.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr || a.variables.passwordComplexityPolicyVar.numberRequiredAttr || a.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [i.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "font-size-xs",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, s(!a.variables.isValidPasswordVar, !1, this, function() {
                    return [i.createElement(o, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "1"
                        },
                        _widgetRecordProvider: t
                    }, i.createElement(o, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "2"
                        },
                        _widgetRecordProvider: t
                    }, n(d("Dl7u+j4q+EGAnNmhoodUlw#Value", "Your password must contain:"))), s(a.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                        return [i.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("_q87RRvrVECu3VaTIzJ6sQ.Style"), function() {
                                return a.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "" : "text-green-darker"
                            }, function() {
                                return a.variables.passwordValidationResultVar.missingMinimumLengthAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, s(a.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                            return [i.createElement(c, {
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
                            return [i.createElement(c, {
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
                        })), i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, n(d("HCZhF4tDjEGF05LZK1PQKA#Value", "At least ")), i.createElement(S, {
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: a.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }), n(d("rwEUCpoInUSEWvR8KGyJbg#Value", "\xA0characters"))))]
                    }, function() {
                        return []
                    }), s(a.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, !1, this, function() {
                        return [i.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("3fhhgmONGE+VgKcBnDfW3w.Style"), function() {
                                return a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "" : "text-green-darker"
                            }, function() {
                                return a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, s(a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, !1, this, function() {
                            return [i.createElement(c, {
                                icon: "times-circle",
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
                            return [i.createElement(c, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t
                            })]
                        })), i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, n(d("wYONzJay00aT+awaUkXOxA#Value", "1 uppercase letter"))))]
                    }, function() {
                        return []
                    }), s(a.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                        return [i.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("YMZJeUWYikyuvTBV7uNuEw.Style"), function() {
                                return a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr ? "" : "text-green-darker"
                            }, function() {
                                return a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, s(a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                            return [i.createElement(c, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [i.createElement(c, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            })]
                        })), i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, n(d("ql00Rx6EHE+VHZcio9Ld7w#Value", "1 lowercase letter"))))]
                    }, function() {
                        return []
                    }), s(a.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                        return [i.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("BnVnJwyZOEu3kAkpa+cA1g.Style"), function() {
                                return a.variables.passwordValidationResultVar.missingNumberAttr ? "" : "text-green-darker"
                            }, function() {
                                return a.variables.passwordValidationResultVar.missingNumberAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, s(a.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                            return [i.createElement(c, {
                                icon: "times-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [i.createElement(c, {
                                icon: "check-circle",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            })]
                        })), i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, n(d("OMYnQ_ERyUegrAFjGV6_og#Value", "1 number"))))]
                    }, function() {
                        return []
                    }), s(a.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                        return [i.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("0D56A2_eCk2_XxCpklQYGg.Style"), function() {
                                return a.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "" : "text-green-darker"
                            }, function() {
                                return a.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        }, i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, s(a.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                            return [i.createElement(c, {
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
                            return [i.createElement(c, {
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
                        })), i.createElement(o, {
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
                            _widgetRecordProvider: t
                        }, n(d("F8EtDaZYlkGfsihC3p1G+g#Value", "1 special character (ex: !, @, #, $, %)"))))]
                    }, function() {
                        return []
                    }))]
                }, function() {
                    return [i.createElement(o, {
                        align: 0,
                        animate: !1,
                        style: "text-green-darker",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "29"
                        },
                        _widgetRecordProvider: t
                    }, i.createElement(c, {
                        icon: "check-circle",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "30"
                        },
                        _widgetRecordProvider: t
                    }), i.createElement(b, {
                        style: "margin-left-s",
                        text: [n(d("oiNfuD2HnkGAxmk6Ah5sqA#Value", "Great! Your password meets all the requirements."))],
                        _idProps: {
                            service: e,
                            uuid: "31"
                        },
                        _widgetRecordProvider: t
                    }))]
                }))]
            }, function() {
                return []
            }))
        }
    };
m(g, "View");
var E = g,
    Pe = E;
export {
    Pe as a
};