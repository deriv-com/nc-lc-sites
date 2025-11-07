import {
    a as Q
} from "./_oschunk-JQ2HBHMK.js";
import {
    a as L
} from "./_oschunk-L6JZD7VU.js";
import {
    a as V
} from "./_oschunk-HFW3V2GI.js";
import {
    b as w,
    f,
    h as B,
    q as C,
    r as te,
    s as N,
    u as S
} from "./_oschunk-VR5BNL2K.js";
import {
    a as de,
    g as T,
    m as Y,
    o as J,
    q as M,
    r as K,
    s as Z,
    t as ee
} from "./_oschunk-4VHUVDBV.js";
import {
    a as $
} from "./_oschunk-KXORGPRQ.js";
import {
    Hb as j,
    Qb as b,
    Sb as k,
    a as R,
    sb as x,
    ub as X
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as m,
    W as p,
    c as o,
    e as ue,
    w as P
} from "./_oschunk-M5BUVJ72.js";
var ie = {};
var O = p,
    G = class G extends O.Controller.BaseController {
        getDefaultTimeout() {
            return k.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a, u) {
                var e = this.controller;
                O.Logger.debug("V2Onboarding", O.Exceptions.getMessage(a));
                var t = O.Injector.resolve(O.ServiceNames.GlobalExceptionHandler);
                return t(a, u), O.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
    };
o(G, "Controller");
var F = G,
    We = new F(ie);
var h = p,
    W = class W extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExitPopupOpen", "exitPopupOpenVar", "ExitPopupOpen", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Heading", "headingIn", "Heading", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headingInDataFetchStatus", "_headingInDataFetchStatus", "_headingInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Progress", "progressIn", "Progress", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnSkipVisible", "btnSkipVisibleIn", "BtnSkipVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnBackVisible", "btnBackVisibleIn", "BtnBackVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnInfoVisible", "btnInfoVisibleIn", "BtnInfoVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsForOnboarding", "isForOnboardingIn", "IsForOnboarding", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isForOnboardingInDataFetchStatus", "_isForOnboardingInDataFetchStatus", "_isForOnboardingInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowProgressBar", "showProgressBarIn", "ShowProgressBar", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showProgressBarInDataFetchStatus", "_showProgressBarInDataFetchStatus", "_showProgressBarInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnCloseVisible", "btnCloseVisibleIn", "BtnCloseVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SubHeading2", "subHeading2In", "SubHeading2", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(W, "VariablesRecord");
var A = W;
A.init();
var z = class z extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(z, "WidgetsRecord");
var q = z,
    D = class D extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return q
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0 || void 0 || void 0), D._hasValidationWidgetsValue
        }
        setInputs(a) {
            "Heading" in a && (this.variables.headingIn = a.Heading, "_headingInDataFetchStatus" in a && (this.variables._headingInDataFetchStatus = a._headingInDataFetchStatus)), "Progress" in a && (this.variables.progressIn = a.Progress, "_progressInDataFetchStatus" in a && (this.variables._progressInDataFetchStatus = a._progressInDataFetchStatus)), "BtnSkipVisible" in a && (this.variables.btnSkipVisibleIn = a.BtnSkipVisible, "_btnSkipVisibleInDataFetchStatus" in a && (this.variables._btnSkipVisibleInDataFetchStatus = a._btnSkipVisibleInDataFetchStatus)), "BtnBackVisible" in a && (this.variables.btnBackVisibleIn = a.BtnBackVisible, "_btnBackVisibleInDataFetchStatus" in a && (this.variables._btnBackVisibleInDataFetchStatus = a._btnBackVisibleInDataFetchStatus)), "BtnInfoVisible" in a && (this.variables.btnInfoVisibleIn = a.BtnInfoVisible, "_btnInfoVisibleInDataFetchStatus" in a && (this.variables._btnInfoVisibleInDataFetchStatus = a._btnInfoVisibleInDataFetchStatus)), "IsForOnboarding" in a && (this.variables.isForOnboardingIn = a.IsForOnboarding, "_isForOnboardingInDataFetchStatus" in a && (this.variables._isForOnboardingInDataFetchStatus = a._isForOnboardingInDataFetchStatus)), "ShowProgressBar" in a && (this.variables.showProgressBarIn = a.ShowProgressBar, "_showProgressBarInDataFetchStatus" in a && (this.variables._showProgressBarInDataFetchStatus = a._showProgressBarInDataFetchStatus)), "BtnCloseVisible" in a && (this.variables.btnCloseVisibleIn = a.BtnCloseVisible, "_btnCloseVisibleInDataFetchStatus" in a && (this.variables._btnCloseVisibleInDataFetchStatus = a._btnCloseVisibleInDataFetchStatus)), "SubHeading2" in a && (this.variables.subHeading2In = a.SubHeading2, "_subHeading2InDataFetchStatus" in a && (this.variables._subHeading2InDataFetchStatus = a._subHeading2InDataFetchStatus))
        }
    };
o(D, "Model");
var I = D;
I._hasValidationWidgetsValue = void 0;
var se = new h.Model.ModelFactory(I);
var r = ue(de());
var fe = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u063A\u0627\u062F\u0631",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u063A\u0627\u062F\u0631",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u062A\u0631\u0643 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F"
    },
    ve = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09B8\u09AE\u09C2\u09B9 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0995\u09BF \u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u099B\u09BE\u09A1\u09BC\u09A4\u09C7 \u099A\u09BE\u09A8?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u0997\u09C1\u09B2\u09BF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09AC\u09C7\u09A8?"
    },
    _e = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Bleiben",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Verlassen",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Sie sind dabei, diesen Vorgang zu verlassen. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Vorgang verlassen?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Bleiben",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Verlassen",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Sie verlassen gerade diesen Vorgang. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Vorgang beenden?"
    },
    me = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Quedarse",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Salir",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Est\xE1s a punto de salir de este proceso. Tus cambios podr\xEDan no guardarse.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\xBFSalir del proceso?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Quedarse",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Salir",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Est\xE1s a punto de salir de este proceso. Es posible que tus cambios no se guarden.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\xBFSalir del proceso?"
    },
    ge = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Reste",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Quitter",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Quitter le processus ?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Reste",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Quitter",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Quitter le processus ?"
    },
    ye = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Rimanere",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Uscire",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Stai per uscire da questo processo. Le modifiche potrebbero non essere salvate.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Uscire dal processo?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Rimanere",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Uscire",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Stai per uscire da questo processo. Le tue modifiche potrebbero non essere salvate.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Uscire dal processo?"
    },
    be = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1792\u17D2\u179B\u17B6\u1780\u17CB\u1785\u17BB\u17C7\u1785\u17C4\u179B\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A \u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1794\u17D2\u179A\u17BE\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1791\u17B8\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?"
    },
    pe = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "staying",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\uB5A0\uB098\uB2E4",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uB0B4\uC6A9\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC5B4\uC694?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "staying",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\uB5A0\uB098\uB2E4",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\uC774 \uACFC\uC815\uC744 \uC885\uB8CC\uD558\uB824 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
    },
    Se = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Zosta\u0144",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Wyjd\u017A",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Zaraz opu\u015Bcisz ten proces. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Opuszczasz ten proces?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Zosta\u0144",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Wyjd\u017A",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Zarz\u0105dzasz opuszczeniem tego procesu. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Opuszczenie procesu?"
    },
    Ve = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Ficar",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Sair",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Est\xE1 prestes a sair deste processo. As suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Sair do processo?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Ficar",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Sair",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Est\xE1 prestes a sair deste processo. Suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Sair do processo?"
    },
    ke = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u0412\u044B\u0439\u0442\u0438",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u0412\u044B\u0439\u0442\u0438",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?"
    },
    Ce = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u0D86\u0DC0\u0DDA",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA \u0D85\u0DAD\u0DD4\u0DBB\u0DD4\u0DAF\u0DB1\u0DCA\u0DC0\u0DD3\u0DB8\u0DA7 \u0D94\u0DB6\u0DB8 \u0DC4\u0DD0\u0DB8 \u0DAD\u0DD0\u0DB1 \u0DBA\u0DB1\u0DCA\u0DB1\u0DDA \u0DBA. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DCF\u0DB1\u0DB8\u0DCA \u0DB1\u0DD0\u0DAD.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0DB8\u0DD9\u0DC4\u0DD2 \u0DC0\u0DD2\u0DBA\u0DB8\u0DB1\u0DBA \u0D86\u0DC0\u0DDA \u0DB8\u0DD0\u0DBA\u0DD2\u0DAF?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u0D86\u0DC0\u0DDA",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u0D94\u0DB6\u0DA7 \u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0\u0DD3\u0DB8\u0DA7 \u0DB1\u0DD2\u0DBA\u0DB8\u0DD2\u0DAD\u0DBA\u0DD2. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DB1\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD4\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD\u0DD2 \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1\u0DAF?"
    },
    Oe = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Kukaa",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Acha",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Unataka kutoka kwa mchakato huu. Mabadiliko yako huenda yasahifadhiwe.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Kuondoka kwa mchakato?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Kukaa",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Acha",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Unaondoka kwenye mchakato huu. Mabadiliko yako yanaweza isitunzwe.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Jiondoke kwenye mchakato?"
    },
    De = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?"
    },
    we = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Kal",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Ayr\u0131l",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Bu s\xFCre\xE7ten \xE7\u0131kmak \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u0130\u015Flemi terk etmek mi istiyorsunuz?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Kal",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Ayr\u0131l",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Bu s\xFCreci terk etmek \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "S\xFCreci terk etmek istiyor musunuz?"
    },
    Ee = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Turing",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Chiqish",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Jarayonni tark etmoqchimisiz?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Turing",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Chiqish",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Jarayonni tark etmoqchimisiz?"
    },
    Re = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "Turing",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "Chiqish",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "Jarayonni tark etmoqchimisiz?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "Turing",
        "fS6aXQXbuUSY11tr57EBVw#Value": "Chiqish",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "Jarayonni tark etmoqchimisiz?"
    },
    Ae = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u1EDE l\u1EA1i",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "R\u1EDDi kh\u1ECFi",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "B\u1EA1n s\u1EAFp tho\xE1t kh\u1ECFi qu\xE1 tr\xECnh n\xE0y. Thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "B\u1EA1n c\xF3 mu\u1ED1n tho\xE1t kh\u1ECFi quy tr\xECnh n\xE0y kh\xF4ng?",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u1EDE l\u1EA1i",
        "fS6aXQXbuUSY11tr57EBVw#Value": "R\u1EDDi kh\u1ECFi",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "B\u1EA1n s\u1EAFp r\u1EDDi kh\u1ECFi quy tr\xECnh n\xE0y. C\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "R\u1EDDi kh\u1ECFi quy tr\xECnh?"
    },
    Ie = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u4FDD\u6301",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u79BB\u5F00",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u79BB\u5F00\u6D41\u7A0B\uFF1F",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u4FDD\u6301",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u79BB\u5F00",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u3002",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F"
    },
    Pe = {
        "UQQ1_3shWEONDjktzhsmfg#Value": "\u7559\u4E0B",
        "NtqihNlvmE+xifI+y7BsYQ#Value": "\u96E2\u958B",
        "VGTWyjdmp06PkG4RpyhtDw#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u8B8A\u66F4\u53EF\u80FD\u672A\u88AB\u5132\u5B58\u3002",
        "I2GYo3ec+UaNib0GRVA4pQ#Value": "\u96E2\u958B\u6D41\u7A0B\uFF1F",
        "iDGrt9_AH0KNpXqjziVmfA#Value": "\u7559\u4E0B",
        "fS6aXQXbuUSY11tr57EBVw#Value": "\u96E2\u958B",
        "cmiDhDLdhk6rcXbJV1xqdQ#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u672A\u88AB\u4FDD\u5B58\u3002",
        "5qTx0XiDEkiCBvWNZJy8wg#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F"
    },
    oe = {
        "ar-001": {
            translations: fe,
            isRTL: !0
        },
        "bn-BD": {
            translations: ve,
            isRTL: !1
        },
        "de-DE": {
            translations: _e,
            isRTL: !1
        },
        "es-ES": {
            translations: me,
            isRTL: !1
        },
        "fr-FR": {
            translations: ge,
            isRTL: !1
        },
        "it-IT": {
            translations: ye,
            isRTL: !1
        },
        "km-KH": {
            translations: be,
            isRTL: !1
        },
        "ko-KR": {
            translations: pe,
            isRTL: !1
        },
        "pl-PL": {
            translations: Se,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ve,
            isRTL: !1
        },
        "ru-RU": {
            translations: ke,
            isRTL: !1
        },
        "si-LK": {
            translations: Ce,
            isRTL: !1
        },
        "sw-KE": {
            translations: Oe,
            isRTL: !1
        },
        "th-TH": {
            translations: De,
            isRTL: !1
        },
        "tr-TR": {
            translations: we,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Ee,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Re,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ae,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ie,
            isRTL: !1
        },
        "zh-TW": {
            translations: Pe,
            isRTL: !1
        }
    };
var d = p; {
    let a = class a extends d.Controller.BaseViewController {
        constructor(e, t, i) {
            super(e, t, i, oe);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _leaveOnClick$Action() {
            return this.hasOwnProperty("__leaveOnClick$Action") || (this.__leaveOnClick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("LeaveOnClick", function(s) {
                    s && (s.setAttribute("code.function", "LeaveOnClick"), s.setAttribute("outsystems.function.key", "4d10a280-2751-4bf5-a29d-2d679b2d77ea"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return i.ensureControllerAlive("LeaveOnClick"), e = i.callContext(e), X.setfa_current_step(1), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "Home_V2", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__leaveOnClick$Action
        }
        set _leaveOnClick$Action(e) {
            this.__leaveOnClick$Action = e
        }
        get _closePopupOnclick$Action() {
            return this.hasOwnProperty("__closePopupOnclick$Action") || (this.__closePopupOnclick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("ClosePopupOnclick", function(s) {
                    s && (s.setAttribute("code.function", "ClosePopupOnclick"), s.setAttribute("outsystems.function.key", "58d3348a-01d4-4d07-92fb-1019ec3a9994"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ClosePopupOnclick"), e = i.callContext(e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__closePopupOnclick$Action
        }
        set _closePopupOnclick$Action(e) {
            this.__closePopupOnclick$Action = e
        }
        get _stayOnClick$Action() {
            return this.hasOwnProperty("__stayOnClick$Action") || (this.__stayOnClick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("StayOnClick", function(s) {
                    s && (s.setAttribute("code.function", "StayOnClick"), s.setAttribute("outsystems.function.key", "8a5d222e-113b-457a-b1d5-ea4c3c25a84a"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("StayOnClick"), e = i.callContext(e);
                        var v = new d.DataTypes.VariableHolder;
                        v.value = b.bottomSheetClose$Action(l.getId("BottomSheet_Leave"), e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__stayOnClick$Action
        }
        set _stayOnClick$Action(e) {
            this.__stayOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "bba24bb2-668a-46d7-b8fa-f6bb5dd40d64"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var v = new d.DataTypes.VariableHolder,
                            E = new d.DataTypes.VariableHolder,
                            n = new d.DataTypes.VariableHolder(new(d.Controller.BaseController.getJSONDeserializeOutputType(x)));
                        return d.Flow.executeAsyncFlow(function() {
                            return E.value = k.getAuth$Action(e), t.flush(), k.fetchRestAPI$Action("GET", "client/onboarding-status", "", !0, e).then(function(U) {
                                v.value = U
                            }).then(function() {
                                n.value.dataOut = d.JSONUtils.deserializeFromJSON(v.value.resposneOut, x, !1)
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
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("LinkOnClick", function(s) {
                    s && (s.setAttribute("code.function", "LinkOnClick"), s.setAttribute("outsystems.function.key", "fd205374-3a84-40fe-a2b2-1c12fce55246"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("LinkOnClick"), e = i.callContext(e);
                        var v = new d.DataTypes.VariableHolder;
                        b.isDesktop$Action(e).isDesktopOut ? t.variables.exitPopupOpenVar = !0 : v.value = b.bottomSheetOpen$Action(l.getId("BottomSheet_Leave"), e)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        leaveOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LeaveOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "LeaveOnClick"), i.setAttribute("outsystems.function.key", "4d10a280-2751-4bf5-a29d-2d679b2d77ea"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._leaveOnClick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        closePopupOnclick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("ClosePopupOnclick__proxy", function(i) {
                i && (i.setAttribute("code.function", "ClosePopupOnclick"), i.setAttribute("outsystems.function.key", "58d3348a-01d4-4d07-92fb-1019ec3a9994"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closePopupOnclick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        stayOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("StayOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "StayOnClick"), i.setAttribute("outsystems.function.key", "8a5d222e-113b-457a-b1d5-ea4c3c25a84a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stayOnClick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "bba24bb2-668a-46d7-b8fa-f6bb5dd40d64"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        linkOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LinkOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "LinkOnClick"), i.setAttribute("outsystems.function.key", "fd205374-3a84-40fe-a2b2-1c12fce55246"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._linkOnClick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get event_ClickBtnBack$Action() {
            return this.hasOwnProperty("_event_ClickBtnBack$Action") || (this._event_ClickBtnBack$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnBack$Action
        }
        set event_ClickBtnBack$Action(e) {
            this._event_ClickBtnBack$Action = e
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
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    i = this.model,
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
            return k.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let g = a;
    le = g
}
var le, ce = new d.Controller.ControllerFactory(le, $);
var H = T.PlaceholderContent,
    yt = T.IteratorPlaceholderContent,
    Be = o(function() {
        var g = J(function(a) {
            var u = a.model,
                e = a.controller,
                t = a.controller.idService,
                i = e.validationService,
                l = e.callContext(),
                s = Z,
                v = ee,
                E = {
                    props: a,
                    validateWidget: o(function(c) {
                        a.validateWidget(a, c)
                    }, "validateWidget")
                },
                n = u,
                U = K,
                y = M,
                _ = Y();
            return r.createElement("div", a.rootNodeProperties, r.createElement(f, {
                align: 0,
                animate: !1,
                style: u.getCachedValue(t.getId("2GJ7HF2v0Uad6oEN2nrksA.Style"), function() {
                    return "layout-onboarding full-width full-height display-flex justify-content-center" + (b.isDesktop$Action(l).isDesktopOut ? " overflow-vertical" : "")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, r.createElement(f, {
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
                _widgetRecordProvider: n
            }, r.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: n
            }, r.createElement(f, {
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
                _widgetRecordProvider: n
            }, r.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: n
            }, r.createElement(C, {
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
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._btnBackVisibleInDataFetchStatus)
            }, r.createElement(V, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
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
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }))), r.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: n
            }, r.createElement(C, {
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
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._btnInfoVisibleInDataFetchStatus)
            }, r.createElement(V, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
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
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            })), r.createElement(C, {
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
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._btnSkipVisibleInDataFetchStatus)
            }, r.createElement(V, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
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
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "11",
                    alias: "3"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            })), r.createElement(C, {
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
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._btnCloseVisibleInDataFetchStatus)
            }, r.createElement(V, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
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
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "13",
                    alias: "4"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            })))), r.createElement(f, {
                align: 0,
                animate: !0,
                style: "padding-y-xs",
                visible: u.variables.showProgressBarIn,
                _idProps: {
                    service: t,
                    name: "GetToKnowYou"
                },
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._showProgressBarInDataFetchStatus)
            }, r.createElement(L, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Thickness: 6,
                    OptionalConfigs: u.getCachedValue(t.getId("dkvVGQ0ILEeZbPRtqBx_0A.OptionalConfigs"), function() {
                        return (function() {
                            var c = new j;
                            return c.animateInitialProgressAttr = !1, c
                        })()
                    }),
                    ProgressColor: R.color.neutral10,
                    TrailColor: R.color.neutral2,
                    Progress: u.variables.progressIn,
                    _progressInDataFetchStatus: m.calculateDataFetchStatus(u.variables._progressInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "15",
                    alias: "5"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    content: H.Empty
                },
                _dependencies: []
            }))), r.createElement(f, {
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
                _widgetRecordProvider: n
            }, r.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: n
            }, r.createElement(f, {
                align: 0,
                animate: !0,
                visible: u.getCachedValue(t.getId("Subheading.Visible"), function() {
                    return u.variables.subHeading2In !== P.nullTextIdentifier()
                }, function() {
                    return u.variables.subHeading2In
                }),
                _idProps: {
                    service: t,
                    name: "Subheading"
                },
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._subHeading2InDataFetchStatus)
            }, r.createElement(B, {
                value: u.variables.subHeading2In,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: m.calculateDataFetchStatus(u.variables._subHeading2InDataFetchStatus)
            })), r.createElement(f, {
                align: 0,
                animate: !0,
                visible: u.getCachedValue(t.getId("Title.Visible"), function() {
                    return u.variables.headingIn !== P.nullTextIdentifier()
                }, function() {
                    return u.variables.headingIn
                }),
                _idProps: {
                    service: t,
                    name: "Title"
                },
                _widgetRecordProvider: n,
                visible_dataFetchStatus: m.calculateDataFetchStatus(u.variables._headingInDataFetchStatus)
            }, r.createElement(B, {
                extendedProperties: {
                    style: "font-weight: 800;"
                },
                style: u.getCachedValue(t.getId("tYy3nqtxx0qTJ_HwVenYjA.Style"), function() {
                    return b.isDesktop$Action(l).isDesktopOut ? "font-size-h2" : "font-size-h5"
                }),
                value: u.variables.headingIn,
                _idProps: {
                    service: t,
                    uuid: "21"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: m.calculateDataFetchStatus(u.variables._headingInDataFetchStatus)
            }))), r.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "cursor: unset; overscroll-behavior: none;"
                },
                style: u.getCachedValue(t.getId("PUWd7XTQSkO2ik3Xv0e8jQ.Style"), function() {
                    return "hide-scrollbar" + (b.isDesktop$Action(l).isDesktopOut ? "" : " flex-1 overflow-vertical")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: n
            }, r.createElement(N, {
                align: 0,
                content: E.props.placeholders.content,
                style: "",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: n
            }))), r.createElement(N, {
                align: 0,
                content: E.props.placeholders.buttonContainer,
                style: "padding-top-base button-container",
                _idProps: {
                    service: t,
                    name: "ButtonContainer"
                },
                _widgetRecordProvider: n
            }))), r.createElement(Q, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShowHandler: !0,
                    Shape: R.shape.rounded,
                    ExtendedClass: "min-height-auto height-auto padding-base bottom-sheet__leave"
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    name: "BottomSheet_Leave",
                    alias: "6"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    topBar: H.Empty,
                    content: new H(function() {
                        return [r.createElement(f, {
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
                            _widgetRecordProvider: n
                        }, r.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "27"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(S, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "font-size-h5",
                            text: [y(v("5qTx0XiDEkiCBvWNZJy8wg#Value", "Leave process?"))],
                            _idProps: {
                                service: t,
                                uuid: "28"
                            },
                            _widgetRecordProvider: n
                        })), r.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "29"
                            },
                            _widgetRecordProvider: n
                        }, y(v("cmiDhDLdhk6rcXbJV1xqdQ#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), r.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-xl",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "30"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(w, {
                            enabled: !0,
                            extendedProperties: {
                                style: "background-color: #181c25; border-color: #181c25; border-radius: 8px; border-width: 1px;"
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
                            _widgetRecordProvider: n
                        }, r.createElement(S, {
                            extendedProperties: {
                                style: "color: #f3f6f8;"
                            },
                            text: [y(v("fS6aXQXbuUSY11tr57EBVw#Value", "Leave"))],
                            _idProps: {
                                service: t,
                                uuid: "32"
                            },
                            _widgetRecordProvider: n
                        })), r.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "33"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(w, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #181c25; border-radius: 8px;"
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
                            _widgetRecordProvider: n
                        }, r.createElement(S, {
                            extendedProperties: {
                                style: "color: #181c25;"
                            },
                            style: "",
                            text: [y(v("iDGrt9_AH0KNpXqjziVmfA#Value", "Stay"))],
                            _idProps: {
                                service: t,
                                uuid: "35"
                            },
                            _widgetRecordProvider: n
                        })))))]
                    })
                },
                _dependencies: []
            }), r.createElement(te, {
                extendedProperties: {
                    style: "border-radius: 32px;"
                },
                showPopup: u.variables.exitPopupOpenVar,
                style: "popup-dialog padding-l",
                _idProps: {
                    service: t,
                    uuid: "36"
                },
                _widgetRecordProvider: n
            }, r.createElement(f, {
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
                _widgetRecordProvider: n
            }, r.createElement(S, {
                extendedProperties: {
                    style: "font-size: 24px; font-weight: 800;"
                },
                text: [y(v("I2GYo3ec+UaNib0GRVA4pQ#Value", "Leave process?"))],
                _idProps: {
                    service: t,
                    uuid: "38"
                },
                _widgetRecordProvider: n
            }), r.createElement(C, {
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
                _widgetRecordProvider: n
            }, r.createElement(V, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
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
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "40",
                    alias: "7"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }))), r.createElement(f, {
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
                _widgetRecordProvider: n
            }, y(v("VGTWyjdmp06PkG4RpyhtDw#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), r.createElement(f, {
                align: 0,
                animate: !1,
                style: "margin-top-xl",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "42"
                },
                _widgetRecordProvider: n
            }, r.createElement(w, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #181c25; border-color: #181c25; border-radius: 8px; border-width: 1px; height: 48px;"
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
                _widgetRecordProvider: n
            }, r.createElement(S, {
                extendedProperties: {
                    style: "color: #f3f6f8;"
                },
                text: [y(v("NtqihNlvmE+xifI+y7BsYQ#Value", "Leave"))],
                _idProps: {
                    service: t,
                    uuid: "44"
                },
                _widgetRecordProvider: n
            })), r.createElement(f, {
                align: 0,
                animate: !1,
                style: "margin-top-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "45"
                },
                _widgetRecordProvider: n
            }, r.createElement(w, {
                enabled: !0,
                extendedProperties: {
                    style: "border-color: #181c25; border-radius: 8px; font-size: 100%; height: 48px;"
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
                _widgetRecordProvider: n
            }, r.createElement(S, {
                extendedProperties: {
                    style: "color: #181c25;"
                },
                style: "",
                text: [y(v("UQQ1_3shWEONDjktzhsmfg#Value", "Stay"))],
                _idProps: {
                    service: t,
                    uuid: "47"
                },
                _widgetRecordProvider: n
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "LayoutOnboarding",
                    functionKey: "e75d2d9c-8f53-4881-914f-29552b4b1b61",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutOnboarding",
            modelFactory: se,
            controllerFactory: ce
        });
        return g.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutOnboarding.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return ["scripts/uae.UserScripts.yupumd.js"]
        }, g.getBlocks = function() {
            return [V, L, Q]
        }, g
    }, "componentFactory"),
    bt = Be();
export {
    We as a, bt as b
};