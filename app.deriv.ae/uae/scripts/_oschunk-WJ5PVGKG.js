import {
    a as F
} from "./_oschunk-JQ2HBHMK.js";
import {
    a as x
} from "./_oschunk-L6JZD7VU.js";
import {
    a as S
} from "./_oschunk-HFW3V2GI.js";
import {
    b as E,
    f as h,
    h as L,
    q as V,
    r as Y,
    s as D,
    u as p
} from "./_oschunk-VR5BNL2K.js";
import {
    a as se,
    g as T,
    m as z,
    o as j,
    q as $,
    r as G,
    s as K,
    t as Z
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Q
} from "./_oschunk-KXORGPRQ.js";
import {
    Hb as M,
    Qb as b,
    Sb as O,
    a as I,
    sb as H
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as v,
    W as k,
    c as o,
    e as re,
    w
} from "./_oschunk-M5BUVJ72.js";
var f = k,
    W = class W extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExitPopupOpen", "exitPopupOpenVar", "ExitPopupOpen", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Heading", "headingIn", "Heading", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headingInDataFetchStatus", "_headingInDataFetchStatus", "_headingInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Progress", "progressIn", "Progress", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnSkipVisible", "btnSkipVisibleIn", "BtnSkipVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnBackVisible", "btnBackVisibleIn", "BtnBackVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnInfoVisible", "btnInfoVisibleIn", "BtnInfoVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsForOnboarding", "isForOnboardingIn", "IsForOnboarding", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isForOnboardingInDataFetchStatus", "_isForOnboardingInDataFetchStatus", "_isForOnboardingInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowProgressBar", "showProgressBarIn", "ShowProgressBar", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showProgressBarInDataFetchStatus", "_showProgressBarInDataFetchStatus", "_showProgressBarInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnCloseVisible", "btnCloseVisibleIn", "BtnCloseVisible", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SubHeading2", "subHeading2In", "SubHeading2", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(W, "VariablesRecord");
var P = W;
P.init();
var B = class B extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(B, "WidgetsRecord");
var U = B,
    C = class C extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return U
        }
        static get hasValidationWidgets() {
            return C._hasValidationWidgetsValue === void 0 && (C._hasValidationWidgetsValue = void 0 || void 0 || void 0), C._hasValidationWidgetsValue
        }
        setInputs(r) {
            "Heading" in r && (this.variables.headingIn = r.Heading, "_headingInDataFetchStatus" in r && (this.variables._headingInDataFetchStatus = r._headingInDataFetchStatus)), "Progress" in r && (this.variables.progressIn = r.Progress, "_progressInDataFetchStatus" in r && (this.variables._progressInDataFetchStatus = r._progressInDataFetchStatus)), "BtnSkipVisible" in r && (this.variables.btnSkipVisibleIn = r.BtnSkipVisible, "_btnSkipVisibleInDataFetchStatus" in r && (this.variables._btnSkipVisibleInDataFetchStatus = r._btnSkipVisibleInDataFetchStatus)), "BtnBackVisible" in r && (this.variables.btnBackVisibleIn = r.BtnBackVisible, "_btnBackVisibleInDataFetchStatus" in r && (this.variables._btnBackVisibleInDataFetchStatus = r._btnBackVisibleInDataFetchStatus)), "BtnInfoVisible" in r && (this.variables.btnInfoVisibleIn = r.BtnInfoVisible, "_btnInfoVisibleInDataFetchStatus" in r && (this.variables._btnInfoVisibleInDataFetchStatus = r._btnInfoVisibleInDataFetchStatus)), "IsForOnboarding" in r && (this.variables.isForOnboardingIn = r.IsForOnboarding, "_isForOnboardingInDataFetchStatus" in r && (this.variables._isForOnboardingInDataFetchStatus = r._isForOnboardingInDataFetchStatus)), "ShowProgressBar" in r && (this.variables.showProgressBarIn = r.ShowProgressBar, "_showProgressBarInDataFetchStatus" in r && (this.variables._showProgressBarInDataFetchStatus = r._showProgressBarInDataFetchStatus)), "BtnCloseVisible" in r && (this.variables.btnCloseVisibleIn = r.BtnCloseVisible, "_btnCloseVisibleInDataFetchStatus" in r && (this.variables._btnCloseVisibleInDataFetchStatus = r._btnCloseVisibleInDataFetchStatus)), "SubHeading2" in r && (this.variables.subHeading2In = r.SubHeading2, "_subHeading2InDataFetchStatus" in r && (this.variables._subHeading2InDataFetchStatus = r._subHeading2InDataFetchStatus))
        }
    };
o(C, "Model");
var A = C;
A._hasValidationWidgetsValue = void 0;
var te = new f.Model.ModelFactory(A);
var n = re(se());
var oe = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u063A\u0627\u062F\u0631",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u063A\u0627\u062F\u0631",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u062A\u0631\u0643 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F"
    },
    le = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09B8\u09AE\u09C2\u09B9 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0995\u09BF \u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u099B\u09BE\u09A1\u09BC\u09A4\u09C7 \u099A\u09BE\u09A8?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u0997\u09C1\u09B2\u09BF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09AC\u09C7\u09A8?"
    },
    ce = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Bleiben",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Verlassen",
        "cmYyotqRmkqAphrSHXbahw#Value": "Sie sind dabei, diesen Vorgang zu verlassen. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Vorgang verlassen?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Bleiben",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Verlassen",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Sie verlassen gerade diesen Vorgang. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Vorgang beenden?"
    },
    ue = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Quedarse",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Salir",
        "cmYyotqRmkqAphrSHXbahw#Value": "Est\xE1s a punto de salir de este proceso. Tus cambios podr\xEDan no guardarse.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\xBFSalir del proceso?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Quedarse",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Salir",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Est\xE1s a punto de salir de este proceso. Es posible que tus cambios no se guarden.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\xBFSalir del proceso?"
    },
    de = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Reste",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Quitter",
        "cmYyotqRmkqAphrSHXbahw#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Quitter le processus ?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Reste",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Quitter",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Quitter le processus ?"
    },
    fe = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Rimanere",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Uscire",
        "cmYyotqRmkqAphrSHXbahw#Value": "Stai per uscire da questo processo. Le modifiche potrebbero non essere salvate.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Uscire dal processo?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Rimanere",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Uscire",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Stai per uscire da questo processo. Le tue modifiche potrebbero non essere salvate.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Uscire dal processo?"
    },
    he = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1792\u17D2\u179B\u17B6\u1780\u17CB\u1785\u17BB\u17C7\u1785\u17C4\u179B\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A \u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1794\u17D2\u179A\u17BE\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1791\u17B8\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?"
    },
    ye = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "staying",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\uB5A0\uB098\uB2E4",
        "cmYyotqRmkqAphrSHXbahw#Value": "\uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uB0B4\uC6A9\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC5B4\uC694?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "staying",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\uB5A0\uB098\uB2E4",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\uC774 \uACFC\uC815\uC744 \uC885\uB8CC\uD558\uB824 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
    },
    ge = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Zosta\u0144",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Wyjd\u017A",
        "cmYyotqRmkqAphrSHXbahw#Value": "Zaraz opu\u015Bcisz ten proces. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Opuszczasz ten proces?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Zosta\u0144",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Wyjd\u017A",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Zarz\u0105dzasz opuszczeniem tego procesu. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Opuszczenie procesu?"
    },
    ve = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Ficar",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Sair",
        "cmYyotqRmkqAphrSHXbahw#Value": "Est\xE1 prestes a sair deste processo. As suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Sair do processo?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Ficar",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Sair",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Est\xE1 prestes a sair deste processo. Suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Sair do processo?"
    },
    _e = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u0412\u044B\u0439\u0442\u0438",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u0412\u044B\u0439\u0442\u0438",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?"
    },
    me = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u0D86\u0DC0\u0DDA",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA \u0D85\u0DAD\u0DD4\u0DBB\u0DD4\u0DAF\u0DB1\u0DCA\u0DC0\u0DD3\u0DB8\u0DA7 \u0D94\u0DB6\u0DB8 \u0DC4\u0DD0\u0DB8 \u0DAD\u0DD0\u0DB1 \u0DBA\u0DB1\u0DCA\u0DB1\u0DDA \u0DBA. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DCF\u0DB1\u0DB8\u0DCA \u0DB1\u0DD0\u0DAD.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0DB8\u0DD9\u0DC4\u0DD2 \u0DC0\u0DD2\u0DBA\u0DB8\u0DB1\u0DBA \u0D86\u0DC0\u0DDA \u0DB8\u0DD0\u0DBA\u0DD2\u0DAF?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u0D86\u0DC0\u0DDA",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u0D94\u0DB6\u0DA7 \u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0\u0DD3\u0DB8\u0DA7 \u0DB1\u0DD2\u0DBA\u0DB8\u0DD2\u0DAD\u0DBA\u0DD2. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DB1\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD4\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD\u0DD2 \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1\u0DAF?"
    },
    be = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Kukaa",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Acha",
        "cmYyotqRmkqAphrSHXbahw#Value": "Unataka kutoka kwa mchakato huu. Mabadiliko yako huenda yasahifadhiwe.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Kuondoka kwa mchakato?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Kukaa",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Acha",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Unaondoka kwenye mchakato huu. Mabadiliko yako yanaweza isitunzwe.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Jiondoke kwenye mchakato?"
    },
    pe = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?"
    },
    Se = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Kal",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Ayr\u0131l",
        "cmYyotqRmkqAphrSHXbahw#Value": "Bu s\xFCre\xE7ten \xE7\u0131kmak \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u0130\u015Flemi terk etmek mi istiyorsunuz?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Kal",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Ayr\u0131l",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Bu s\xFCreci terk etmek \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "S\xFCreci terk etmek istiyor musunuz?"
    },
    Ve = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Turing",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Chiqish",
        "cmYyotqRmkqAphrSHXbahw#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Jarayonni tark etmoqchimisiz?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Turing",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Chiqish",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Jarayonni tark etmoqchimisiz?"
    },
    Ce = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "Turing",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "Chiqish",
        "cmYyotqRmkqAphrSHXbahw#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "Jarayonni tark etmoqchimisiz?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "Turing",
        "f5TWE+Io40yRdoHg04y7mg#Value": "Chiqish",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "Jarayonni tark etmoqchimisiz?"
    },
    Re = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u1EDE l\u1EA1i",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "R\u1EDDi kh\u1ECFi",
        "cmYyotqRmkqAphrSHXbahw#Value": "B\u1EA1n s\u1EAFp tho\xE1t kh\u1ECFi qu\xE1 tr\xECnh n\xE0y. Thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "B\u1EA1n c\xF3 mu\u1ED1n tho\xE1t kh\u1ECFi quy tr\xECnh n\xE0y kh\xF4ng?",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u1EDE l\u1EA1i",
        "f5TWE+Io40yRdoHg04y7mg#Value": "R\u1EDDi kh\u1ECFi",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "B\u1EA1n s\u1EAFp r\u1EDDi kh\u1ECFi quy tr\xECnh n\xE0y. C\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "I_11pErRGUCUxbVFV6uNjA#Value": "R\u1EDDi kh\u1ECFi quy tr\xECnh?"
    },
    ke = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u4FDD\u6301",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u79BB\u5F00",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u79BB\u5F00\u6D41\u7A0B\uFF1F",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u4FDD\u6301",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u79BB\u5F00",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u3002",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F"
    },
    Ee = {
        "Gh352fgqbEyNU+YMa5j+aQ#Value": "\u7559\u4E0B",
        "Jh1xHONb8kKf27eeIPi2LA#Value": "\u96E2\u958B",
        "cmYyotqRmkqAphrSHXbahw#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u8B8A\u66F4\u53EF\u80FD\u672A\u88AB\u5132\u5B58\u3002",
        "HDfzmyF7RkiMSLRkfs5Eog#Value": "\u96E2\u958B\u6D41\u7A0B\uFF1F",
        "QXAnQ8BSC0OnUZ9RPdIjyQ#Value": "\u7559\u4E0B",
        "f5TWE+Io40yRdoHg04y7mg#Value": "\u96E2\u958B",
        "EHZ6WUqopE2ri3WNlKaWlQ#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u672A\u88AB\u4FDD\u5B58\u3002",
        "I_11pErRGUCUxbVFV6uNjA#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F"
    },
    ae = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        },
        "bn-BD": {
            translations: le,
            isRTL: !1
        },
        "de-DE": {
            translations: ce,
            isRTL: !1
        },
        "es-ES": {
            translations: ue,
            isRTL: !1
        },
        "fr-FR": {
            translations: de,
            isRTL: !1
        },
        "it-IT": {
            translations: fe,
            isRTL: !1
        },
        "km-KH": {
            translations: he,
            isRTL: !1
        },
        "ko-KR": {
            translations: ye,
            isRTL: !1
        },
        "pl-PL": {
            translations: ge,
            isRTL: !1
        },
        "pt-PT": {
            translations: ve,
            isRTL: !1
        },
        "ru-RU": {
            translations: _e,
            isRTL: !1
        },
        "si-LK": {
            translations: me,
            isRTL: !1
        },
        "sw-KE": {
            translations: be,
            isRTL: !1
        },
        "th-TH": {
            translations: pe,
            isRTL: !1
        },
        "tr-TR": {
            translations: Se,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Ve,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ce,
            isRTL: !1
        },
        "vi-VN": {
            translations: Re,
            isRTL: !1
        },
        "zh-CN": {
            translations: ke,
            isRTL: !1
        },
        "zh-TW": {
            translations: Ee,
            isRTL: !1
        }
    };
var d = k; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, ae);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "12641c12-a8d4-4d69-bac2-951599de11bd"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var y = new d.DataTypes.VariableHolder,
                            R = new d.DataTypes.VariableHolder,
                            i = new d.DataTypes.VariableHolder(new(d.Controller.BaseController.getJSONDeserializeOutputType(H)));
                        return d.Flow.executeAsyncFlow(function() {
                            return y.value = O.getAuth$Action(e), t.flush(), O.fetchRestAPI$Action("GET", "client/onboarding-status", "", !0, e).then(function(q) {
                                R.value = q
                            }).then(function() {
                                i.value.dataOut = d.JSONUtils.deserializeFromJSON(R.value.resposneOut, H, !1)
                            }).then(function() {})
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _closePopupOnclick$Action() {
            return this.hasOwnProperty("__closePopupOnclick$Action") || (this.__closePopupOnclick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("ClosePopupOnclick", function(s) {
                    s && (s.setAttribute("code.function", "ClosePopupOnclick"), s.setAttribute("outsystems.function.key", "4244d3d4-d22b-46e1-82bb-771882e33903"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ClosePopupOnclick"), e = a.callContext(e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__closePopupOnclick$Action
        }
        set _closePopupOnclick$Action(e) {
            this.__closePopupOnclick$Action = e
        }
        get _leaveOnClick$Action() {
            return this.hasOwnProperty("__leaveOnClick$Action") || (this.__leaveOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("LeaveOnClick", function(s) {
                    s && (s.setAttribute("code.function", "LeaveOnClick"), s.setAttribute("outsystems.function.key", "4ee66a4e-e134-4a19-a2f7-872f977fa6ae"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("LeaveOnClick"), e = a.callContext(e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "Home_V2", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__leaveOnClick$Action
        }
        set _leaveOnClick$Action(e) {
            this.__leaveOnClick$Action = e
        }
        get _stayOnClick$Action() {
            return this.hasOwnProperty("__stayOnClick$Action") || (this.__stayOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("StayOnClick", function(s) {
                    s && (s.setAttribute("code.function", "StayOnClick"), s.setAttribute("outsystems.function.key", "57b9d719-8c59-4fd1-9727-5ad023cee84d"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("StayOnClick"), e = a.callContext(e);
                        var y = new d.DataTypes.VariableHolder;
                        y.value = b.bottomSheetClose$Action(l.getId("BottomSheet_Leave"), e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__stayOnClick$Action
        }
        set _stayOnClick$Action(e) {
            this.__stayOnClick$Action = e
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("LinkOnClick", function(s) {
                    s && (s.setAttribute("code.function", "LinkOnClick"), s.setAttribute("outsystems.function.key", "81f2e0f4-4fa2-4577-97b3-3443381278e8"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("LinkOnClick"), e = a.callContext(e);
                        var y = new d.DataTypes.VariableHolder;
                        b.isDesktop$Action(e).isDesktopOut ? t.variables.exitPopupOpenVar = !0 : y.value = b.bottomSheetOpen$Action(l.getId("BottomSheet_Leave"), e)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "12641c12-a8d4-4d69-bac2-951599de11bd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        closePopupOnclick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("ClosePopupOnclick__proxy", function(a) {
                a && (a.setAttribute("code.function", "ClosePopupOnclick"), a.setAttribute("outsystems.function.key", "4244d3d4-d22b-46e1-82bb-771882e33903"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closePopupOnclick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        leaveOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LeaveOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LeaveOnClick"), a.setAttribute("outsystems.function.key", "4ee66a4e-e134-4a19-a2f7-872f977fa6ae"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._leaveOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        stayOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("StayOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "StayOnClick"), a.setAttribute("outsystems.function.key", "57b9d719-8c59-4fd1-9727-5ad023cee84d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stayOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        linkOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LinkOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LinkOnClick"), a.setAttribute("outsystems.function.key", "81f2e0f4-4fa2-4577-97b3-3443381278e8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._linkOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get event_ClickIBtnnfo$Action() {
            return this.hasOwnProperty("_event_ClickIBtnnfo$Action") || (this._event_ClickIBtnnfo$Action = function() {
                return Promise.resolve()
            }), this._event_ClickIBtnnfo$Action
        }
        set event_ClickIBtnnfo$Action(e) {
            this._event_ClickIBtnnfo$Action = e
        }
        get event_ClickBtnSkip$Action() {
            return this.hasOwnProperty("_event_ClickBtnSkip$Action") || (this._event_ClickBtnSkip$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnSkip$Action
        }
        set event_ClickBtnSkip$Action(e) {
            this._event_ClickBtnSkip$Action = e
        }
        get event_ClickBtnBack$Action() {
            return this.hasOwnProperty("_event_ClickBtnBack$Action") || (this._event_ClickBtnBack$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnBack$Action
        }
        set event_ClickBtnBack$Action(e) {
            this._event_ClickBtnBack$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    l = this.idService;
                return t.onReady$Action(e)
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
            return O.defaultTimeout
        }
    };
    o(r, "ControllerInner");
    let _ = r;
    ie = _
}
var ie, ne = new d.Controller.ControllerFactory(ie, Q);
var N = T.PlaceholderContent,
    rt = T.IteratorPlaceholderContent,
    Pe = o(function() {
        var _ = j(function(r) {
            var u = r.model,
                e = r.controller,
                t = r.controller.idService,
                a = e.validationService,
                l = e.callContext(),
                s = K,
                y = Z,
                R = {
                    props: r,
                    validateWidget: o(function(c) {
                        r.validateWidget(r, c)
                    }, "validateWidget")
                },
                i = u,
                q = G,
                m = $,
                g = z();
            return n.createElement("div", r.rootNodeProperties, n.createElement(h, {
                align: 0,
                animate: !1,
                style: u.getCachedValue(t.getId("Gf+nRQkNLUaV3UH7GjyCPQ.Style"), function() {
                    return "layout-onboarding full-width full-height display-flex justify-content-center" + (b.isDesktop$Action(l).isDesktopOut ? " overflow-vertical" : "")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 24px; max-width: 600px;"
                },
                style: "display-flex flex-direction-column full-height padding-x-m padding-y-base full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            }, n.createElement(V, {
                enabled: !0,
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickBtnBack$Action(e.callContext(c))
                }, "onClick"),
                visible: u.variables.btnBackVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnBack"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._btnBackVisibleInDataFetchStatus)
            }, n.createElement(S, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='m9.281 15.313 5-5a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L12.408 15H22c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-9.594l3.281 3.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-5-5a.964.964 0 0 1 0-1.407' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }))), n.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: i
            }, n.createElement(V, {
                enabled: !0,
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickIBtnnfo$Action(e.callContext(c))
                }, "onClick"),
                visible: u.variables.btnInfoVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnInfo"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._btnInfoVisibleInDataFetchStatus)
            }, n.createElement(S, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='M22.5 16c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C10.719 11.563 9.5 13.688 9.5 16a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M8 16a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0 2.469 1.437 4 4.062 4 6.906a8.02 8.02 0 0 1-4 6.938c-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 8 16m5.281-2.812A1.75 1.75 0 0 1 14.937 12h1.813c1.094 0 2 .906 2 2 0 .688-.406 1.344-1 1.688l-1 .593c-.031.407-.344.719-.75.719a.72.72 0 0 1-.75-.75v-.406c0-.281.125-.531.375-.656L17 14.406a.49.49 0 0 0 .25-.406c0-.281-.219-.469-.5-.469h-1.812a.235.235 0 0 0-.22.156l-.03.032a.734.734 0 0 1-.938.469.78.78 0 0 1-.469-.97zM15 19c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' fill='#000' fill-opacity='.72'/></svg>"
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })), n.createElement(V, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickBtnSkip$Action(e.callContext(c))
                }, "onClick"),
                visible: u.variables.btnSkipVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnSkip"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._btnSkipVisibleInDataFetchStatus)
            }, n.createElement(S, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='64' height='32' viewBox='0 0 64 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16s-7.163 16-16 16H16C7.163 32 0 24.837 0 16' fill='#000' fill-opacity='.04'/><path d='M23.03 13.87q-.049-.546-.443-.85-.387-.308-1.108-.308-.477 0-.796.125a1.04 1.04 0 0 0-.477.343.83.83 0 0 0-.164.492.73.73 0 0 0 .09.403q.105.173.298.308.198.129.477.229.279.099.627.174l.875.198q.755.165 1.332.438.582.274.974.651.398.378.602.87t.209 1.104q-.006.965-.488 1.655-.481.691-1.387 1.06-.9.367-2.172.367-1.278 0-2.227-.383-.95-.382-1.477-1.163-.527-.78-.542-1.974h2.357q.03.492.263.82.234.33.641.498.414.17.955.169.497 0 .845-.134.353-.135.542-.373a.88.88 0 0 0 .194-.547.75.75 0 0 0-.179-.492q-.174-.21-.537-.358a5.5 5.5 0 0 0-.915-.284l-1.064-.248q-1.322-.303-2.083-.98-.76-.68-.755-1.84-.006-.943.507-1.655.511-.71 1.417-1.108.904-.398 2.063-.398 1.183 0 2.053.403.875.398 1.357 1.118.483.721.493 1.67zm5.931 5.126.01-2.898h.338l2.148-2.734h2.754L31.02 17.28h-.641zM26.77 21V10.818h2.43V21zm4.743 0-1.999-3.172 1.6-1.725L34.322 21zm3.57 0v-7.636h2.43V21zm1.217-8.526q-.512 0-.88-.338a1.1 1.1 0 0 1-.368-.826q0-.477.368-.815.368-.343.88-.343.517 0 .88.343.368.338.368.815 0 .483-.368.826a1.25 1.25 0 0 1-.88.338m2.76 11.39v-10.5h2.407v1.307h.075q.149-.348.422-.671.279-.323.706-.527.432-.21 1.034-.209.795 0 1.487.418.696.417 1.123 1.287t.428 2.218q0 1.297-.413 2.172-.408.876-1.104 1.313-.69.437-1.536.437-.576 0-1-.189a2.2 2.2 0 0 1-.71-.497 2.4 2.4 0 0 1-.437-.66h-.05v4.1zm2.382-6.682q0 .616.164 1.074.17.458.482.71.318.25.761.25.447 0 .76-.25.314-.252.473-.71.165-.457.164-1.074 0-.616-.164-1.07a1.5 1.5 0 0 0-.472-.7 1.17 1.17 0 0 0-.761-.249q-.447 0-.76.244-.314.243-.483.696a3.2 3.2 0 0 0-.164 1.079' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "11",
                    alias: "3"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })), n.createElement(V, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.linkOnClick$Action(e.callContext(c))
                }, "onClick"),
                visible: u.variables.btnCloseVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnClose"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._btnCloseVisibleInDataFetchStatus)
            }, n.createElement(S, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<rect width='32' height='32' rx='16' fill='black' fill-opacity='0.04'/>\r
<path d='M20.6875 12.7188L17.4062 16L20.6875 19.3125C21.0938 19.6875 21.0938 20.3438 20.6875 20.7188C20.3125 21.125 19.6562 21.125 19.2812 20.7188L16 17.4375L12.6875 20.7188C12.3125 21.125 11.6562 21.125 11.2812 20.7188C10.875 20.3438 10.875 19.6875 11.2812 19.3125L14.5625 16L11.2812 12.7188C10.875 12.3438 10.875 11.6875 11.2812 11.3125C11.6562 10.9062 12.3125 10.9062 12.6875 11.3125L16 14.5938L19.2812 11.3125C19.6562 10.9062 20.3125 10.9062 20.6875 11.3125C21.0938 11.6875 21.0938 12.3438 20.6875 12.7188Z' fill='#181C25'/>\r
</svg>\r
`
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "13",
                    alias: "4"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })))), n.createElement(h, {
                align: 0,
                animate: !0,
                style: "padding-y-xs",
                visible: u.variables.showProgressBarIn,
                _idProps: {
                    service: t,
                    name: "GetToKnowYou"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._showProgressBarInDataFetchStatus)
            }, n.createElement(x, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: u.variables.progressIn,
                    _progressInDataFetchStatus: v.calculateDataFetchStatus(u.variables._progressInDataFetchStatus),
                    Thickness: 6,
                    OptionalConfigs: u.getCachedValue(t.getId("BTEPsp1YzkacGvY9ztpA5g.OptionalConfigs"), function() {
                        return (function() {
                            var c = new M;
                            return c.animateInitialProgressAttr = !1, c
                        })()
                    }),
                    ProgressColor: I.color.neutral10,
                    TrailColor: I.color.neutral2
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "15",
                    alias: "5"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: N.Empty
                },
                _dependencies: []
            }))), n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "16"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !0,
                visible: u.getCachedValue(t.getId("Title.Visible"), function() {
                    return u.variables.headingIn !== w.nullTextIdentifier()
                }, function() {
                    return u.variables.headingIn
                }),
                _idProps: {
                    service: t,
                    name: "Title"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._headingInDataFetchStatus)
            }, n.createElement(L, {
                extendedProperties: {
                    style: "font-size: 24px; font-weight: 800;"
                },
                value: u.variables.headingIn,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: v.calculateDataFetchStatus(u.variables._headingInDataFetchStatus)
            })), n.createElement(h, {
                align: 0,
                animate: !0,
                visible: u.getCachedValue(t.getId("Subheading.Visible"), function() {
                    return u.variables.subHeading2In !== w.nullTextIdentifier()
                }, function() {
                    return u.variables.subHeading2In
                }),
                _idProps: {
                    service: t,
                    name: "Subheading"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: v.calculateDataFetchStatus(u.variables._subHeading2InDataFetchStatus)
            }, n.createElement(L, {
                value: u.variables.subHeading2In,
                _idProps: {
                    service: t,
                    uuid: "21"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: v.calculateDataFetchStatus(u.variables._subHeading2InDataFetchStatus)
            }))), n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "cursor: unset; overscroll-behavior: none;"
                },
                style: u.getCachedValue(t.getId("ZrpfYG_PPkuJTjAEl+Gzuw.Style"), function() {
                    return "hide-scrollbar" + (b.isDesktop$Action(l).isDesktopOut ? "" : " flex-1 overflow-vertical")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: i
            }, n.createElement(D, {
                align: 0,
                content: R.props.placeholders.content,
                style: "",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: i
            }))), n.createElement(D, {
                align: 0,
                content: R.props.placeholders.buttonContainer,
                style: "padding-top-base button-container",
                _idProps: {
                    service: t,
                    name: "ButtonContainer"
                },
                _widgetRecordProvider: i
            }))), n.createElement(F, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "min-height-auto height-auto padding-base bottom-sheet__leave",
                    ShowHandler: !0,
                    Shape: I.shape.rounded
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    name: "BottomSheet_Leave",
                    alias: "6"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    topBar: N.Empty,
                    content: new N(function() {
                        return [n.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "26"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(h, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "font-size-h5",
                            text: [m(y("I_11pErRGUCUxbVFV6uNjA#Value", "Leave process?"))],
                            _idProps: {
                                service: t,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        })), n.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        }, m(y("EHZ6WUqopE2ri3WNlKaWlQ#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), n.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-xl",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "background-color: #181c25; border-color: #181c25; border-width: 1px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                e.leaveOnClick$Action(e.callContext(c))
                            }, "onClick"),
                            style: "btn full-width btn-rounded",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Leave"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(p, {
                            extendedProperties: {
                                style: "color: #f3f6f8;"
                            },
                            text: [m(y("f5TWE+Io40yRdoHg04y7mg#Value", "Leave"))],
                            _idProps: {
                                service: t,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        })), n.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "33"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #181c25;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                e.stayOnClick$Action(e.callContext(c))
                            }, "onClick"),
                            style: "btn btn-rounded full-width",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Stay"
                            },
                            _widgetRecordProvider: i
                        }, n.createElement(p, {
                            extendedProperties: {
                                style: "color: #181c25;"
                            },
                            style: "",
                            text: [m(y("QXAnQ8BSC0OnUZ9RPdIjyQ#Value", "Stay"))],
                            _idProps: {
                                service: t,
                                uuid: "35"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: []
            }), n.createElement(Y, {
                extendedProperties: {
                    style: "border-radius: 32px;"
                },
                showPopup: u.variables.exitPopupOpenVar,
                style: "popup-dialog padding-l",
                _idProps: {
                    service: t,
                    uuid: "36"
                },
                _widgetRecordProvider: i
            }, n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "display-flex align-items-center justify-content-space-between margin-bottom-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "37"
                },
                _widgetRecordProvider: i
            }, n.createElement(p, {
                extendedProperties: {
                    style: "font-size: 24px; font-weight: 800;"
                },
                text: [m(y("HDfzmyF7RkiMSLRkfs5Eog#Value", "Leave process?"))],
                _idProps: {
                    service: t,
                    uuid: "38"
                },
                _widgetRecordProvider: i
            }), n.createElement(V, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.closePopupOnclick$Action(e.callContext(c))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "39"
                },
                _widgetRecordProvider: i
            }, n.createElement(S, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z' fill='#F6F7F8'/>\r
<g clip-path='url(#clip0_15863_13804)'>\r
<path d='M28.7812 20.2812L25.0312 24.0312L28.75 27.75C29.0625 28.0312 29.0625 28.5 28.75 28.7812C28.4688 29.0938 28 29.0938 27.7188 28.7812L23.9688 25.0625L20.25 28.7812C19.9688 29.0938 19.5 29.0938 19.2188 28.7812C18.9062 28.5 18.9062 28.0312 19.2188 27.7188L22.9375 24L19.2188 20.2812C18.9062 20 18.9062 19.5312 19.2188 19.2188C19.5 18.9375 19.9688 18.9375 20.2812 19.2188L24 22.9688L27.7188 19.25C28 18.9375 28.4688 18.9375 28.7812 19.25C29.0625 19.5312 29.0625 20 28.7812 20.2812Z' fill='#181C25'/>\r
</g>\r
<defs>\r
<clipPath id='clip0_15863_13804'>\r
<rect width='12' height='24' fill='white' transform='translate(18 12)'/>\r
</clipPath>\r
</defs>\r
</svg>\r
`
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "40",
                    alias: "7"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }))), n.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "margin-top-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "41"
                },
                _widgetRecordProvider: i
            }, m(y("cmYyotqRmkqAphrSHXbahw#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), n.createElement(h, {
                align: 0,
                animate: !1,
                style: "margin-top-xl",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "42"
                },
                _widgetRecordProvider: i
            }, n.createElement(E, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #181c25; border-color: #181c25; border-width: 1px; height: 48px;"
                },
                isDefault: !1,
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.leaveOnClick$Action(e.callContext(c))
                }, "onClick"),
                style: "btn full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Leave2"
                },
                _widgetRecordProvider: i
            }, n.createElement(p, {
                extendedProperties: {
                    style: "color: #f3f6f8;"
                },
                text: [m(y("Jh1xHONb8kKf27eeIPi2LA#Value", "Leave"))],
                _idProps: {
                    service: t,
                    uuid: "44"
                },
                _widgetRecordProvider: i
            })), n.createElement(h, {
                align: 0,
                animate: !1,
                style: "margin-top-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "45"
                },
                _widgetRecordProvider: i
            }, n.createElement(E, {
                enabled: !0,
                extendedProperties: {
                    style: "border-color: #181c25; font-size: 100%; height: 48px;"
                },
                isDefault: !1,
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.stayOnClick$Action(e.callContext(c))
                }, "onClick"),
                style: "btn btn-rounded full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Stay2"
                },
                _widgetRecordProvider: i
            }, n.createElement(p, {
                extendedProperties: {
                    style: "color: #181c25;"
                },
                style: "",
                text: [m(y("Gh352fgqbEyNU+YMa5j+aQ#Value", "Stay"))],
                _idProps: {
                    service: t,
                    uuid: "47"
                },
                _widgetRecordProvider: i
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "LayoutMT5",
                    functionKey: "ff0b790a-cb21-45bf-b616-3af8cab0bb6c",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutMT5",
            modelFactory: te,
            controllerFactory: ne
        });
        return _.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutMT5.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return ["scripts/uae.UserScripts.yupumd.js"]
        }, _.getBlocks = function() {
            return [S, x, F]
        }, _
    }, "componentFactory"),
    st = Pe();
export {
    st as a
};