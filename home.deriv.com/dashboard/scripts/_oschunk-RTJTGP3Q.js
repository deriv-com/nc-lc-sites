import {
    a as J
} from "./_oschunk-O3C4A522.js";
import {
    a as X
} from "./_oschunk-Q5H2JROI.js";
import {
    a as V
} from "./_oschunk-J3DG2BKZ.js";
import {
    a as ge
} from "./_oschunk-24WIHVSN.js";
import {
    b as T,
    h as _,
    i as he,
    t as O,
    u as ve,
    v as F,
    x as S
} from "./_oschunk-O5KC3WOL.js";
import {
    a as fe,
    g as P,
    m as B,
    o as N,
    q as U,
    r as W,
    s as H,
    t as x
} from "./_oschunk-NVHFAAS2.js";
import {
    a as de
} from "./_oschunk-AW35UT34.js";
import {
    Ga as g,
    Ha as Y,
    Ka as L,
    a as z,
    la as A,
    pa as G,
    wa as w
} from "./_oschunk-WCMQG33O.js";
import {
    J as E,
    X as I,
    c as s,
    f as ue,
    x as j
} from "./_oschunk-DFKJJKI4.js";
var b = I,
    te = class te extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new G)
            }, !1, G), this.attr("Progress", "progressIn", "Progress", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return A.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return A.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new w)
            }, !1, w), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(te, "VariablesRecord");
var q = te;
q.init();
var ae = class ae extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(ae, "WidgetsRecord");
var Z = ae,
    re = class re extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return Z
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "Progress" in i && (this.variables.progressIn = i.Progress, "_progressInDataFetchStatus" in i && (this.variables._progressInDataFetchStatus = i._progressInDataFetchStatus)), "ProgressColor" in i && (this.variables.progressColorIn = i.ProgressColor, "_progressColorInDataFetchStatus" in i && (this.variables._progressColorInDataFetchStatus = i._progressColorInDataFetchStatus)), "TrailColor" in i && (this.variables.trailColorIn = i.TrailColor, "_trailColorInDataFetchStatus" in i && (this.variables._trailColorInDataFetchStatus = i._trailColorInDataFetchStatus)), "Thickness" in i && (this.variables.thicknessIn = i.Thickness, "_thicknessInDataFetchStatus" in i && (this.variables._thicknessInDataFetchStatus = i._thicknessInDataFetchStatus)), "OptionalConfigs" in i && (this.variables.optionalConfigsIn = i.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in i && (this.variables._optionalConfigsInDataFetchStatus = i._optionalConfigsInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
s(re, "Model");
var $ = re;
$._hasValidationWidgetsValue = void 0;
var be = new b.Model.ModelFactory($);
var v = I,
    ne = class ne extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExitPopupOpen", "exitPopupOpenVar", "ExitPopupOpen", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Heading", "headingIn", "Heading", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headingInDataFetchStatus", "_headingInDataFetchStatus", "_headingInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Progress", "progressIn", "Progress", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnSkipVisible", "btnSkipVisibleIn", "BtnSkipVisible", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnBackVisible", "btnBackVisibleIn", "BtnBackVisible", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnInfoVisible", "btnInfoVisibleIn", "BtnInfoVisible", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsUserProfile", "isUserProfileIn", "IsUserProfile", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isUserProfileInDataFetchStatus", "_isUserProfileInDataFetchStatus", "_isUserProfileInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideProgressBar", "hideProgressBarIn", "HideProgressBar", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideProgressBarInDataFetchStatus", "_hideProgressBarInDataFetchStatus", "_hideProgressBarInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnCloseVisible", "btnCloseVisibleIn", "BtnCloseVisible", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ClassName", "classNameIn", "ClassName", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_classNameInDataFetchStatus", "_classNameInDataFetchStatus", "_classNameInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(ne, "VariablesRecord");
var M = ne;
M.init();
var se = class se extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(se, "WidgetsRecord");
var ie = se,
    R = class R extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return M
        }
        static getWidgetsRecordConstructor() {
            return ie
        }
        static get hasValidationWidgets() {
            return R._hasValidationWidgetsValue === void 0 && (R._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), R._hasValidationWidgetsValue
        }
        setInputs(i) {
            "Heading" in i && (this.variables.headingIn = i.Heading, "_headingInDataFetchStatus" in i && (this.variables._headingInDataFetchStatus = i._headingInDataFetchStatus)), "Progress" in i && (this.variables.progressIn = i.Progress, "_progressInDataFetchStatus" in i && (this.variables._progressInDataFetchStatus = i._progressInDataFetchStatus)), "BtnSkipVisible" in i && (this.variables.btnSkipVisibleIn = i.BtnSkipVisible, "_btnSkipVisibleInDataFetchStatus" in i && (this.variables._btnSkipVisibleInDataFetchStatus = i._btnSkipVisibleInDataFetchStatus)), "BtnBackVisible" in i && (this.variables.btnBackVisibleIn = i.BtnBackVisible, "_btnBackVisibleInDataFetchStatus" in i && (this.variables._btnBackVisibleInDataFetchStatus = i._btnBackVisibleInDataFetchStatus)), "BtnInfoVisible" in i && (this.variables.btnInfoVisibleIn = i.BtnInfoVisible, "_btnInfoVisibleInDataFetchStatus" in i && (this.variables._btnInfoVisibleInDataFetchStatus = i._btnInfoVisibleInDataFetchStatus)), "IsUserProfile" in i && (this.variables.isUserProfileIn = i.IsUserProfile, "_isUserProfileInDataFetchStatus" in i && (this.variables._isUserProfileInDataFetchStatus = i._isUserProfileInDataFetchStatus)), "HideProgressBar" in i && (this.variables.hideProgressBarIn = i.HideProgressBar, "_hideProgressBarInDataFetchStatus" in i && (this.variables._hideProgressBarInDataFetchStatus = i._hideProgressBarInDataFetchStatus)), "BtnCloseVisible" in i && (this.variables.btnCloseVisibleIn = i.BtnCloseVisible, "_btnCloseVisibleInDataFetchStatus" in i && (this.variables._btnCloseVisibleInDataFetchStatus = i._btnCloseVisibleInDataFetchStatus)), "ClassName" in i && (this.variables.classNameIn = i.ClassName, "_classNameInDataFetchStatus" in i && (this.variables._classNameInDataFetchStatus = i._classNameInDataFetchStatus))
        }
    };
s(R, "Model");
var K = R;
K._hasValidationWidgetsValue = void 0;
var pe = new v.Model.ModelFactory(K);
var l = ue(fe());
var Oe = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u063A\u0627\u062F\u0631",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0645\u063A\u0627\u062F\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u0627\u0644\u0628\u0642\u0627\u0621",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u063A\u0627\u062F\u0631",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0623\u0646\u062A \u0639\u0644\u0649 \u0648\u0634\u0643 \u0645\u063A\u0627\u062F\u0631\u0629 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u063A\u064A\u064A\u0631\u0627\u062A\u0643.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u0645\u063A\u0627\u062F\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u062A\u0639\u0631\u064E\u0651\u0641 \u0639\u0644\u064A\u0643"
    },
    Re = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09B8\u09AE\u09C2\u09B9 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u099B\u09BE\u09A1\u09BC\u09A4\u09C7 \u099A\u09BE\u09A8?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u09A5\u09BE\u0995\u09C1\u09A8",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u0997\u09C1\u09B2\u09BF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09BE\u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09AC\u09C7\u09A8?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u099C\u09BE\u09A8\u09C1\u09A8"
    },
    ke = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Bleiben",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Verlassen",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Sie sind im Begriff, diesen Vorgang zu verlassen. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Vorgang verlassen?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Bleiben",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Verlassen",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Sie verlassen gerade diesen Vorgang. Ihre \xC4nderungen werden m\xF6glicherweise nicht gespeichert.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Vorgang beenden?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Kennenlernen"
    },
    we = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Quedarse",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Salir",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Est\xE1s a punto de salir de este proceso. Tus cambios podr\xEDan no guardarse.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\xBFSalir del proceso?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Quedarse",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Salir",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Est\xE1s a punto de salir de este proceso. Es posible que tus cambios no se guarden.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\xBFSalir del proceso?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Con\xF3certe"
    },
    Te = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Rester",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Quitter",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Quitter le processus ?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Rester",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Quitter",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Vous allez quitter ce processus. Vos modifications pourraient ne pas \xEAtre enregistr\xE9es.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Quitter le processus ?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Apprendre \xE0 vous conna\xEEtre"
    },
    Fe = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Rimanere",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Uscire",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Stai per uscire da questo processo. Le modifiche potrebbero non essere salvate.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Uscire dal processo?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Rimanere",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Uscire",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Stai per uscire da questo processo. Le tue modifiche potrebbero non essere salvate.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Uscire dal processo?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Conosciamoci"
    },
    De = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1793\u17B9\u1784\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u179F\u17BC\u1798\u1793\u17C5",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u17A2\u17D2\u1793\u1780\u1780\u17C6\u1796\u17BB\u1784\u1793\u17B9\u1784\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u1793\u17C1\u17C7\u17D4 \u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17D4",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u1785\u17C1\u1789\u1796\u17B8\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u179F\u17D2\u1782\u17B6\u179B\u17CB\u1781\u17D2\u179B\u17BD\u1793\u17A2\u17D2\u1793\u1780"
    },
    ze = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\uBA38\uBB3C\uAE30",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\uB5A0\uB098\uB2E4",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uB0B4\uC6A9\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC5B4\uC694?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\uBA38\uBB3C\uAE30",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\uB5A0\uB098\uB2E4",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\uC774 \uACFC\uC815\uC744 \uC885\uB8CC\uD558\uB824 \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\uB2F9\uC2E0\uC744 \uC54C\uC544\uAC00\uAE30"
    },
    Le = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u04AE\u043B\u0434\u044D\u0445",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u0413\u0430\u0440\u0447 \u044F\u0432\u0430\u0445",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0422\u0430 \u044D\u043D\u044D \u04AF\u0439\u043B \u044F\u0432\u0446\u043D\u0430\u0430\u0441 \u0433\u0430\u0440\u0430\u0445 \u0433\u044D\u0436 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u043D\u044B\u0445 \u04E9\u04E9\u0440\u0447\u043B\u04E9\u043B\u0442\u04AF\u04AF\u0434 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0430\u0433\u04AF\u0439 \u0431\u0430\u0439\u0436 \u043C\u0430\u0433\u0430\u0434\u0433\u04AF\u0439.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u04AE\u0439\u043B \u044F\u0432\u0446 \u0433\u0430\u0440\u0433\u0430\u0445 \u0443\u0443?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u0411\u0430\u0439\u0445",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u0413\u0430\u0440\u0430\u0445",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u042D\u043D\u044D \u04AF\u0439\u043B \u044F\u0432\u0446\u0430\u0430\u0441 \u0433\u0430\u0440\u0447 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u043D\u044B \u04E9\u04E9\u0440\u0447\u043B\u04E9\u043B\u0442\u04AF\u04AF\u0434 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0433\u0434\u0430\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u0436 \u043C\u0430\u0433\u0430\u0434\u0433\u04AF\u0439.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u04AE\u0439\u043B \u044F\u0432\u0446\u0430\u0430\u0441 \u0433\u0430\u0440\u0430\u0445 \u0443\u0443?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u0422\u0430\u043D\u044B\u0433 \u0442\u0430\u043D\u0438\u0445"
    },
    Be = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Pozosta\u0144",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Opu\u015B\u0107",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Zaraz opu\u015Bcisz ten proces. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Opu\u015Bci\u0107 proces?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Pozosta\u0144",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Opu\u015B\u0107",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Zamierzasz opu\u015Bci\u0107 ten proces. Twoje zmiany mog\u0105 nie zosta\u0107 zapisane.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Opu\u015Bci\u0107 proces?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Poznaj si\u0119"
    },
    Ne = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Ficar",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Sair",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Est\xE1 prestes a sair deste processo. As suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Sair do processo?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Ficar",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Sair",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Est\xE1 prestes a sair deste processo. Suas altera\xE7\xF5es podem n\xE3o ser salvas.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Sair do processo?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Conhec\xEA-lo"
    },
    Ue = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u0412\u044B\u0439\u0442\u0438",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u0412\u044B\u0439\u0442\u0438",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438"
    },
    We = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u0DBB\u0DD0\u0DB3\u0DD3 \u0DC3\u0DD2\u0DA7\u0DD2\u0DB1\u0DCA\u0DB1",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0D94\u0DB6 \u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0D89\u0DC0\u0DAD\u0DCA \u0DC0\u0DD3\u0DB8\u0DA7 \u0DBA\u0DB1\u0DCA\u0DB1\u0DDA \u0DBA. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1\u0DAF?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u0DBB\u0DD0\u0DB3\u0DD3 \u0DC3\u0DD2\u0DA7\u0DD2\u0DB1\u0DCA\u0DB1",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0D94\u0DB6\u0DA7 \u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0\u0DD3\u0DB8\u0DA7 \u0DB1\u0DD2\u0DBA\u0DB8\u0DD2\u0DAD\u0DBA\u0DD2. \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DB1\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD4\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD\u0DD2 \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DC0\u0DBD\u0DD2\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1\u0DAF?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u0D94\u0DB6\u0DC0 \u0DAF\u0DD0\u0DB1 \u0D9C\u0DB1\u0DCA\u0DB1"
    },
    He = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Kukaa",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Acha",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Unataka kutoka kwa mchakato huu. Mabadiliko yako huenda yasahifadhiwe.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Kuondoka kwa mchakato?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Kukaa",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Acha",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Unaondoka kwenye mchakato huu. Mabadiliko yako yanaweza isitunzwe.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Jiondoke kwenye mchakato?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Kujua wewe"
    },
    xe = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC1\u0BB1\u0BB5\u0BC1",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0B95\u0BB3\u0BC8 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1 \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0BAF\u0BC8 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1 \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u0B87\u0BB0\u0BC1",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u0BB5\u0BBE",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD\u0BAE\u0BC1\u0BB1\u0BC8 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1\u0B9A\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BAA\u0BCD \u0BAA\u0BCB\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8 olabilir.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u0B9A\u0BC6\u0BAF\u0BB2\u0BCD\u0BAE\u0BC1\u0BB1\u0BC8 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1\u0BB5\u0BBF\u0B9F\u0BB2\u0BBE\u0BAE\u0BBE?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u0B89\u0BA9\u0BCD\u0BA9\u0BC8 \u0B85\u0BB1\u0BBF\u0BA4\u0BB2\u0BCD"
    },
    qe = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E48\u0E2D",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u0E2D\u0E2D\u0E01\u0E44\u0E1B",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E04\u0E38\u0E13"
    },
    $e = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Kal",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Ayr\u0131l",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Bu s\xFCre\xE7ten \xE7\u0131kmak \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u0130\u015Flemi terk etmek mi istiyorsunuz?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Kal",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Ayr\u0131l",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Bu s\xFCreci terk etmek \xFCzeresiniz. De\u011Fi\u015Fiklikleriniz kaydedilmeyebilir.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "S\xFCreci terk etmek istiyor musunuz?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Seni tan\u0131yal\u0131m"
    },
    Me = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Turing",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Chiqish",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Jarayonni tark etmoqchimisiz?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Turing",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Chiqish",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Jarayonni tark etmoqchimisiz?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Siz bilan tanishish"
    },
    Ke = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "Turing",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "Chiqish",
        "0PjFmyBRK0K6PFWravzjIg#Value": "Siz bu jarayonni tark etmoqchisiz. O'zgartirishlar saqlanmasligi mumkin.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "Jarayonni tark etmoqchimisiz?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "Turing",
        "WITAz90t5UKMBlVzdE6tqg#Value": "Chiqish",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "Siz bu jarayondan chiqmoqdasiz. O'zgartirishlaringiz saqlanmasligi mumkin.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "Jarayonni tark etmoqchimisiz?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "Siz bilan tanishish"
    },
    Qe = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u1EDE l\u1EA1i",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "R\u1EDDi kh\u1ECFi",
        "0PjFmyBRK0K6PFWravzjIg#Value": "B\u1EA1n s\u1EAFp tho\xE1t kh\u1ECFi qu\xE1 tr\xECnh n\xE0y. Thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "R\u1EDDi kh\u1ECFi quy tr\xECnh?",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u1EDE l\u1EA1i",
        "WITAz90t5UKMBlVzdE6tqg#Value": "R\u1EDDi kh\u1ECFi",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "B\u1EA1n s\u1EAFp r\u1EDDi kh\u1ECFi quy tr\xECnh n\xE0y. C\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "RdSzI1csNECFgI9aqXEWYw#Value": "R\u1EDDi kh\u1ECFi quy tr\xECnh?",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "L\xE0m quen v\u1EDBi b\u1EA1n"
    },
    je = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u4FDD\u6301",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u79BB\u5F00",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u79BB\u5F00\u6D41\u7A0B\uFF1F",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u4FDD\u6301",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u79BB\u5F00",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u60A8\u5373\u5C06\u79BB\u5F00\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u3002",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u4E86\u89E3\u60A8"
    },
    Ge = {
        "FD6Z9vMCeEmYN_KE4pt_qg#Value": "\u7559\u4E0B",
        "dU+oVT9z1EWUgiQtIGMA6g#Value": "\u96E2\u958B",
        "0PjFmyBRK0K6PFWravzjIg#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u8B8A\u66F4\u53EF\u80FD\u672A\u88AB\u5132\u5B58\u3002",
        "pAyNIpAApEObvKHzVsC_oQ#Value": "\u96E2\u958B\u6D41\u7A0B\uFF1F",
        "RMLc8EWv_EqsAIs2iRoLrw#Value": "\u7559\u4E0B",
        "WITAz90t5UKMBlVzdE6tqg#Value": "\u96E2\u958B",
        "NKwEhV+LBUiPX7bk5t5F5Q#Value": "\u60A8\u5373\u5C07\u96E2\u958B\u6B64\u6D41\u7A0B\u3002\u60A8\u7684\u66F4\u6539\u53EF\u80FD\u672A\u88AB\u4FDD\u5B58\u3002",
        "RdSzI1csNECFgI9aqXEWYw#Value": "\u9000\u51FA\u6D41\u7A0B\uFF1F",
        "FbJEiEEuPkqa2o+hBA6mPQ#Value": "\u8A8D\u8B58\u60A8"
    },
    Ee = {
        "ar-001": {
            translations: Oe,
            isRTL: !0
        },
        "bn-BD": {
            translations: Re,
            isRTL: !1
        },
        "de-DE": {
            translations: ke,
            isRTL: !1
        },
        "es-ES": {
            translations: we,
            isRTL: !1
        },
        "fr-FR": {
            translations: Te,
            isRTL: !1
        },
        "it-IT": {
            translations: Fe,
            isRTL: !1
        },
        "km-KH": {
            translations: De,
            isRTL: !1
        },
        "ko-KR": {
            translations: ze,
            isRTL: !1
        },
        "mn-MN": {
            translations: Le,
            isRTL: !1
        },
        "pl-PL": {
            translations: Be,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ne,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ue,
            isRTL: !1
        },
        "si-LK": {
            translations: We,
            isRTL: !1
        },
        "sw-KE": {
            translations: He,
            isRTL: !1
        },
        "ta-IN": {
            translations: xe,
            isRTL: !1
        },
        "th-TH": {
            translations: qe,
            isRTL: !1
        },
        "tr-TR": {
            translations: $e,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Me,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ke,
            isRTL: !1
        },
        "vi-VN": {
            translations: Qe,
            isRTL: !1
        },
        "zh-CN": {
            translations: je,
            isRTL: !1
        },
        "zh-TW": {
            translations: Ge,
            isRTL: !1
        }
    };
var u = I; {
    let i = class i extends u.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ee);
            var n = this.controller;
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
                    n = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "177f19ba-f3a1-484d-83fe-3f8b630cea9a"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var d = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return u.Flow.executeSequence(function() {
                                if (!t.variables.isUserProfileIn) return t.flush(), L.gET_ClientOnboardingStatus$Action(e).then(function(m) {
                                    d.value = m
                                }).then(function() {
                                    if (d.value.responseOut.dataAttr.tncAttr.acceptedAttr && !L.featureFlagValueByName$Action("SKIP_ONBOARDING_REDIRECTION", e).isEnabledOut) return u.Flow.returnAsync(u.Navigation.navigateTo(u.Navigation.generateScreenURL("dashboard", "home", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0))
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _leaveOnClick$Action() {
            return this.hasOwnProperty("__leaveOnClick$Action") || (this.__leaveOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return u.Logger.startActiveSpan("LeaveOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LeaveOnClick"), r.setAttribute("outsystems.function.key", "2bf5889d-fe1c-4dcd-8410-e630b8b6ca37"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("LeaveOnClick"), e = a.callContext(e), t.variables.isUserProfileIn ? u.Navigation.navigateTo(u.Navigation.generateScreenURL("dashboard", "profile", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0) : Y.getRedirectURL() !== u.BuiltinFunctions.nullTextIdentifier() ? u.Navigation.navigateTo(u.Navigation.generateScreenURL(Y.getRedirectURL(), {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0) : u.Navigation.navigateTo(u.Navigation.generateScreenURL("dashboard", "home", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
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
                    a = this.controller,
                    n = this.idService;
                return u.Logger.startActiveSpan("ClosePopupOnclick", function(r) {
                    r && (r.setAttribute("code.function", "ClosePopupOnclick"), r.setAttribute("outsystems.function.key", "3f421067-be8d-415b-ab37-5fb113ddc32b"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ClosePopupOnclick"), e = a.callContext(e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        r && r.end()
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
                    a = this.controller,
                    n = this.idService;
                return u.Logger.startActiveSpan("StayOnClick", function(r) {
                    r && (r.setAttribute("code.function", "StayOnClick"), r.setAttribute("outsystems.function.key", "63c52856-795d-4111-9dfc-8e78a188784c"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("StayOnClick"), e = a.callContext(e);
                        var d = new u.DataTypes.VariableHolder;
                        d.value = g.bottomSheetClose$Action(n.getId("BottomSheet_Leave"), e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        r && r.end()
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
                    n = this.idService;
                return u.Logger.startActiveSpan("LinkOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LinkOnClick"), r.setAttribute("outsystems.function.key", "c41d9435-9f4a-4fb3-9d51-a5f358c9340c"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("LinkOnClick"), e = a.callContext(e);
                        var d = new u.DataTypes.VariableHolder;
                        g.isDesktop$Action(e).isDesktopOut ? t.variables.exitPopupOpenVar = !0 : d.value = g.bottomSheetOpen$Action(n.getId("BottomSheet_Leave"), e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "177f19ba-f3a1-484d-83fe-3f8b630cea9a"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        leaveOnClick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("LeaveOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LeaveOnClick"), a.setAttribute("outsystems.function.key", "2bf5889d-fe1c-4dcd-8410-e630b8b6ca37"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._leaveOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        closePopupOnclick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("ClosePopupOnclick__proxy", function(a) {
                a && (a.setAttribute("code.function", "ClosePopupOnclick"), a.setAttribute("outsystems.function.key", "3f421067-be8d-415b-ab37-5fb113ddc32b"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closePopupOnclick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        stayOnClick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("StayOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "StayOnClick"), a.setAttribute("outsystems.function.key", "63c52856-795d-4111-9dfc-8e78a188784c"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stayOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        linkOnClick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("LinkOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LinkOnClick"), a.setAttribute("outsystems.function.key", "c41d9435-9f4a-4fb3-9d51-a5f358c9340c"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._linkOnClick$Action, e)
                } finally {
                    a && a.end()
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
        get event_ClickBtnSkip$Action() {
            return this.hasOwnProperty("_event_ClickBtnSkip$Action") || (this._event_ClickBtnSkip$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnSkip$Action
        }
        set event_ClickBtnSkip$Action(e) {
            this._event_ClickBtnSkip$Action = e
        }
        get event_ClickIBtnnfo$Action() {
            return this.hasOwnProperty("_event_ClickIBtnnfo$Action") || (this._event_ClickIBtnnfo$Action = function() {
                return Promise.resolve()
            }), this._event_ClickIBtnnfo$Action
        }
        set event_ClickIBtnnfo$Action(e) {
            this._event_ClickIBtnnfo$Action = e
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
                    n = this.idService;
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
            return L.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let y = i;
    Ae = y
}
var Ae, Se = new u.Controller.ControllerFactory(Ae, de);
var k = ue(fe());
var Ve = {};

function oe(y, i, f, e) {
    y.Initialized = i.InitializedHandler
}
s(oe, "default");
var h = I; {
    let i = class i extends h.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ve);
            var n = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, n.executeActionInsideJSNode(n._initializedHandler$Action.bind(n, h.DataConversion.JSNodeParamConverter.from(r, h.DataTypes.DataTypes.Text)), n.callContext(), function(d) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return h.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnInitialize"), e = a.callContext(e);
                        var d = new h.DataTypes.VariableHolder;
                        g.logEvent$Action(A.logType.general, "Going to create ProgressBar", e), d.value = g.generateUniqueId$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), t.variables.internal_ConfigsVar.uniqueIdAttr = d.value.unique_IDOut, t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, t.variables.internal_ConfigsVar.animateInitialProgressAttr = t.variables.optionalConfigsIn.animateInitialProgressAttr, t.variables.internal_ConfigsVar.typeAttr = A.progressType.bar, t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internal_ConfigsVar.initialProgressAttr = t.variables.internal_ConfigsVar.progressAttr, g.progressBarCreate$Action(t.variables.internal_ConfigsVar, e), a._registerCallbacks$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return h.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnParametersChanged"), e = a.callContext(e), t.variables.progressIn !== t.variables.internal_ConfigsVar.progressAttr && (t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, g.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", h.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.progressAttr), e)), t.variables.progressColorIn !== t.variables.internal_ConfigsVar.progressColorAttr && (t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, g.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", t.variables.internal_ConfigsVar.progressColorAttr, e)), t.variables.trailColorIn !== t.variables.internal_ConfigsVar.trailColorAttr && (t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, g.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", t.variables.internal_ConfigsVar.trailColorAttr, e)), t.variables.thicknessIn !== t.variables.internal_ConfigsVar.thicknessAttr && (t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, g.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", h.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.thicknessAttr), e)), t.variables.optionalConfigsIn.shapeAttr !== t.variables.internal_ConfigsVar.shapeAttr && (t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, g.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", t.variables.internal_ConfigsVar.shapeAttr, e)), t.variables.extendedClassIn !== t.variables.internal_ConfigsVar.extendedClassAttr && (t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, g.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, t) {
                var a = this.model,
                    n = this.controller,
                    r = this.idService;
                return h.Logger.startActiveSpan("InitializedHandler", function(d) {
                    return d && (d.setAttribute("code.function", "InitializedHandler"), d.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                        n.ensureControllerAlive("InitializedHandler"), t = n.callContext(t);
                        var m = new h.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars")));
                        return m.value.progressBarIdInLocal = e, h.Flow.executeAsyncFlow(function() {
                            return n.initialized$Action(m.value.progressBarIdInLocal, t)
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return h.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnDestroy"), e = a.callContext(e), g.progressDestroy$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return h.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e), g.progressInitialize$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), g.logEvent$Action(A.logType.general, "ProgressBar Created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return h.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("RegisterCallbacks"), e = a.callContext(e);
                        var d = new h.DataTypes.VariableHolder;
                        d.value = h.Logger.startActiveSpan("GetCallbackHandlers", function(m) {
                            m && (m.setAttribute("code.function", "GetCallbackHandlers"), m.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc"), m.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), m.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(oe, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: h.DataConversion.JSNodeParamConverter.to(null, h.DataTypes.DataTypes.Object)
                                }, function(o) {
                                    var D = new(a.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return D.initializedOut = h.DataConversion.JSNodeParamConverter.from(o.Initialized, h.DataTypes.DataTypes.Object), D
                                }, {
                                    InitializedHandler: a.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), g.progressRegisterCallback$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, A.registeredCallbackEvents.initialized, d.value.initializedOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return h.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return h.Logger.startActiveSpan("OnParametersChanged__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, t) {
            var a = this.controller;
            return h.Logger.startActiveSpan("InitializedHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "InitializedHandler"), n.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._initializedHandler$Action, t, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return h.Logger.startActiveSpan("OnDestroy__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return h.Logger.startActiveSpan("OnReady__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var t = this.controller;
            return h.Logger.startActiveSpan("RegisterCallbacks__proxy", function(a) {
                a && (a.setAttribute("code.function", "RegisterCallbacks"), a.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._registerCallbacks$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    n = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    n = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    n = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    n = this.idService;
                return t.onParametersChanged$Action(e)
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
            return g.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let y = i;
    Q = y, Q.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
        name: "ProgressBarId",
        attrName: "progressBarIdInLocal",
        mandatory: !1,
        dataType: h.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), Q.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: h.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var Q, Pe = new h.Controller.ControllerFactory(Q, ge);
var Ft = P.PlaceholderContent,
    Dt = P.IteratorPlaceholderContent,
    Je = s(function() {
        var y = N(function(i) {
            var f = i.model,
                e = i.controller,
                t = i.controller.idService,
                a = e.validationService,
                n = e.callContext(),
                r = H,
                d = x,
                m = {
                    props: i,
                    validateWidget: s(function(c) {
                        i.validateWidget(i, c)
                    }, "validateWidget")
                },
                o = f,
                D = W,
                p = U,
                C = B();
            return k.createElement("div", i.rootNodeProperties, k.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: f.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-progress-bar",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressBar"
                },
                _widgetRecordProvider: o
            }, k.createElement(_, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressContainer"
                },
                _widgetRecordProvider: o
            }, k.createElement(_, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__value",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressValue"
                },
                _widgetRecordProvider: o
            }), k.createElement(F, {
                align: 0,
                content: m.props.placeholders.content,
                style: "osui-progress-bar__content ph",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: o
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "ProgressBar",
                    functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Numbers.ProgressBar",
            modelFactory: be,
            controllerFactory: Pe
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, y.getBlocks = function() {
            return []
        }, y
    }, "componentFactory"),
    le = Je();
var ce = P.PlaceholderContent,
    jt = P.IteratorPlaceholderContent,
    Ze = s(function() {
        var y = N(function(i) {
            var f = i.model,
                e = i.controller,
                t = i.controller.idService,
                a = e.validationService,
                n = e.callContext(),
                r = H,
                d = x,
                m = {
                    props: i,
                    validateWidget: s(function(c) {
                        i.validateWidget(i, c)
                    }, "validateWidget")
                },
                o = f,
                D = W,
                p = U,
                C = B();
            return l.createElement("div", i.rootNodeProperties, l.createElement(_, {
                align: 0,
                animate: !1,
                style: f.getCachedValue(t.getId("v_3Y8iJZ0Ue9Zr4EYgIV2A.Style"), function() {
                    return "layout-onboarding full-width full-height display-flex justify-content-center" + (g.isDesktop$Action(n).isDesktopOut ? " overflow-vertical" : "") + (f.variables.classNameIn === j.nullTextIdentifier() ? "" : " " + f.variables.classNameIn)
                }, function() {
                    return f.variables.classNameIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: E.calculateDataFetchStatus(f.variables._classNameInDataFetchStatus)
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "max-width: 600px;"
                },
                style: "display-flex flex-direction-column full-height padding-x-m padding-y-base full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: o
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: o
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: o
            }, l.createElement(O, {
                enabled: !0,
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.event_ClickBtnBack$Action(e.callContext(c))
                }, "onClick"),
                visible: f.variables.btnBackVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnBack"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._btnBackVisibleInDataFetchStatus)
            }, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "rotate-180",
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='m9.281 15.313 5-5a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L12.408 15H22c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-9.594l3.281 3.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-5-5a.964.964 0 0 1 0-1.407' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }))), l.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: o
            }, l.createElement(O, {
                enabled: !0,
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.event_ClickIBtnnfo$Action(e.callContext(c))
                }, "onClick"),
                visible: f.variables.btnInfoVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnInfo"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._btnInfoVisibleInDataFetchStatus)
            }, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='M22.5 16c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C10.719 11.563 9.5 13.688 9.5 16a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M8 16a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0 2.469 1.437 4 4.062 4 6.906a8.02 8.02 0 0 1-4 6.938c-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 8 16m5.281-2.812A1.75 1.75 0 0 1 14.937 12h1.813c1.094 0 2 .906 2 2 0 .688-.406 1.344-1 1.688l-1 .593c-.031.407-.344.719-.75.719a.72.72 0 0 1-.75-.75v-.406c0-.281.125-.531.375-.656L17 14.406a.49.49 0 0 0 .25-.406c0-.281-.219-.469-.5-.469h-1.812a.235.235 0 0 0-.22.156l-.03.032a.734.734 0 0 1-.938.469.78.78 0 0 1-.469-.97zM15 19c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' fill='#000' fill-opacity='.72'/></svg>"
                },
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "8",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), l.createElement(O, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.event_ClickBtnSkip$Action(e.callContext(c))
                }, "onClick"),
                visible: f.variables.btnSkipVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnSkip"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._btnSkipVisibleInDataFetchStatus)
            }, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='64' height='32' viewBox='0 0 64 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16s-7.163 16-16 16H16C7.163 32 0 24.837 0 16' fill='#000' fill-opacity='.04'/><path d='M23.03 13.87q-.049-.546-.443-.85-.387-.308-1.108-.308-.477 0-.796.125a1.04 1.04 0 0 0-.477.343.83.83 0 0 0-.164.492.73.73 0 0 0 .09.403q.105.173.298.308.198.129.477.229.279.099.627.174l.875.198q.755.165 1.332.438.582.274.974.651.398.378.602.87t.209 1.104q-.006.965-.488 1.655-.481.691-1.387 1.06-.9.367-2.172.367-1.278 0-2.227-.383-.95-.382-1.477-1.163-.527-.78-.542-1.974h2.357q.03.492.263.82.234.33.641.498.414.17.955.169.497 0 .845-.134.353-.135.542-.373a.88.88 0 0 0 .194-.547.75.75 0 0 0-.179-.492q-.174-.21-.537-.358a5.5 5.5 0 0 0-.915-.284l-1.064-.248q-1.322-.303-2.083-.98-.76-.68-.755-1.84-.006-.943.507-1.655.511-.71 1.417-1.108.904-.398 2.063-.398 1.183 0 2.053.403.875.398 1.357 1.118.483.721.493 1.67zm5.931 5.126.01-2.898h.338l2.148-2.734h2.754L31.02 17.28h-.641zM26.77 21V10.818h2.43V21zm4.743 0-1.999-3.172 1.6-1.725L34.322 21zm3.57 0v-7.636h2.43V21zm1.217-8.526q-.512 0-.88-.338a1.1 1.1 0 0 1-.368-.826q0-.477.368-.815.368-.343.88-.343.517 0 .88.343.368.338.368.815 0 .483-.368.826a1.25 1.25 0 0 1-.88.338m2.76 11.39v-10.5h2.407v1.307h.075q.149-.348.422-.671.279-.323.706-.527.432-.21 1.034-.209.795 0 1.487.418.696.417 1.123 1.287t.428 2.218q0 1.297-.413 2.172-.408.876-1.104 1.313-.69.437-1.536.437-.576 0-1-.189a2.2 2.2 0 0 1-.71-.497 2.4 2.4 0 0 1-.437-.66h-.05v4.1zm2.382-6.682q0 .616.164 1.074.17.458.482.71.318.25.761.25.447 0 .76-.25.314-.252.473-.71.165-.457.164-1.074 0-.616-.164-1.07a1.5 1.5 0 0 0-.472-.7 1.17 1.17 0 0 0-.761-.249q-.447 0-.76.244-.314.243-.483.696a3.2 3.2 0 0 0-.164 1.079' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "10",
                    alias: "3"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), l.createElement(O, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.linkOnClick$Action(e.callContext(c))
                }, "onClick"),
                visible: f.variables.btnCloseVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnClose"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._btnCloseVisibleInDataFetchStatus)
            }, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<rect width='32' height='32' rx='16' fill='black' fill-opacity='0.04'/>\r
<path d='M20.6875 12.7188L17.4062 16L20.6875 19.3125C21.0938 19.6875 21.0938 20.3438 20.6875 20.7188C20.3125 21.125 19.6562 21.125 19.2812 20.7188L16 17.4375L12.6875 20.7188C12.3125 21.125 11.6562 21.125 11.2812 20.7188C10.875 20.3438 10.875 19.6875 11.2812 19.3125L14.5625 16L11.2812 12.7188C10.875 12.3438 10.875 11.6875 11.2812 11.3125C11.6562 10.9062 12.3125 10.9062 12.6875 11.3125L16 14.5938L19.2812 11.3125C19.6562 10.9062 20.3125 10.9062 20.6875 11.3125C21.0938 11.6875 21.0938 12.3438 20.6875 12.7188Z' fill='#181C25'/>\r
</svg>\r
`
                },
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "12",
                    alias: "4"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })))), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "padding-y-xs margin-top-base",
                visible: !f.variables.hideProgressBarIn,
                _idProps: {
                    service: t,
                    name: "GetToKnowYou"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._hideProgressBarInDataFetchStatus)
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                style: "margin-bottom-xs",
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: o
            }, l.createElement(S, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                text: [p(d("FbJEiEEuPkqa2o+hBA6mPQ#Value", "Get to know you"))],
                _idProps: {
                    service: t,
                    uuid: "15"
                },
                _widgetRecordProvider: o
            })), l.createElement(le, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: f.variables.progressIn,
                    _progressInDataFetchStatus: E.calculateDataFetchStatus(f.variables._progressInDataFetchStatus),
                    ProgressColor: z.color.neutral10,
                    TrailColor: z.color.neutral2,
                    Thickness: 6,
                    OptionalConfigs: f.getCachedValue(t.getId("CAg8oFi9T0WuHKhnqG6aNA.OptionalConfigs"), function() {
                        return (function() {
                            var c = new w;
                            return c.animateInitialProgressAttr = !1, c
                        })()
                    })
                },
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "16",
                    alias: "5"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: ce.Empty
                },
                _dependencies: []
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "padding-top-m padding-bottom-base",
                visible: f.getCachedValue(t.getId("Title.Visible"), function() {
                    return f.variables.headingIn !== j.nullTextIdentifier()
                }, function() {
                    return f.variables.headingIn
                }),
                _idProps: {
                    service: t,
                    name: "Title"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: E.calculateDataFetchStatus(f.variables._headingInDataFetchStatus)
            }, l.createElement(he, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                style: f.getCachedValue(t.getId("IvjQpjhCAEmTMEwpk_b9WA.Style"), function() {
                    return g.isDesktop$Action(n).isDesktopOut ? "font-size-h2" : "font-size-h5"
                }),
                value: f.variables.headingIn,
                _idProps: {
                    service: t,
                    uuid: "18"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: E.calculateDataFetchStatus(f.variables._headingInDataFetchStatus)
            })), l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "cursor: unset; overscroll-behavior: none;"
                },
                style: f.getCachedValue(t.getId("tWk_zwd4xUazvL6vpdNjbw.Style"), function() {
                    return "hide-scrollbar" + (g.isDesktop$Action(n).isDesktopOut ? "" : " flex-1 overflow-vertical")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: o
            }, l.createElement(F, {
                align: 0,
                content: m.props.placeholders.content,
                style: "",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: o
            })), l.createElement(F, {
                align: 0,
                content: m.props.placeholders.buttonContainer,
                style: "padding-top-base button-container",
                _idProps: {
                    service: t,
                    name: "ButtonContainer"
                },
                _widgetRecordProvider: o
            }))), l.createElement(J, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Shape: z.shape.rounded,
                    ExtendedClass: "min-height-auto height-auto padding-base bottom-sheet__leave",
                    ShowHandler: !0
                },
                events: {
                    _handleError: s(function(c) {
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
                _widgetRecordProvider: o,
                placeholders: {
                    topBar: ce.Empty,
                    content: new ce(function() {
                        return [l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "23"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "24"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(S, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "font-size-h5",
                            text: [p(d("RdSzI1csNECFgI9aqXEWYw#Value", "Leave process?"))],
                            _idProps: {
                                service: t,
                                uuid: "25"
                            },
                            _widgetRecordProvider: o
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "26"
                            },
                            _widgetRecordProvider: o
                        }, p(d("NKwEhV+LBUiPX7bk5t5F5Q#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-xl",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "27"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(T, {
                            enabled: !0,
                            extendedProperties: {
                                style: "background-color: #181c25; border-color: #181c25; border-width: 1px;"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                e.leaveOnClick$Action(e.callContext(c))
                            }, "onClick"),
                            style: "btn full-width btn-rounded",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Leave"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(S, {
                            extendedProperties: {
                                style: "color: #f3f6f8;"
                            },
                            text: [p(d("WITAz90t5UKMBlVzdE6tqg#Value", "Leave"))],
                            _idProps: {
                                service: t,
                                uuid: "29"
                            },
                            _widgetRecordProvider: o
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "30"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(T, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #181c25;"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                e.stayOnClick$Action(e.callContext(c))
                            }, "onClick"),
                            style: "btn btn-rounded full-width",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Stay"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(S, {
                            extendedProperties: {
                                style: "color: #181c25;"
                            },
                            style: "",
                            text: [p(d("RMLc8EWv_EqsAIs2iRoLrw#Value", "Stay"))],
                            _idProps: {
                                service: t,
                                uuid: "32"
                            },
                            _widgetRecordProvider: o
                        })))))]
                    })
                },
                _dependencies: []
            }), l.createElement(X, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "33",
                    alias: "7"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }), l.createElement(ve, {
                extendedProperties: {
                    style: "border-radius: 32px;"
                },
                showPopup: f.variables.exitPopupOpenVar,
                style: "popup-dialog padding-l",
                _idProps: {
                    service: t,
                    uuid: "34"
                },
                _widgetRecordProvider: o
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "display-flex align-items-center justify-content-space-between margin-bottom-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "35"
                },
                _widgetRecordProvider: o
            }, l.createElement(S, {
                extendedProperties: {
                    style: "font-size: 24px; font-weight: 800;"
                },
                text: [p(d("pAyNIpAApEObvKHzVsC_oQ#Value", "Leave process?"))],
                _idProps: {
                    service: t,
                    uuid: "36"
                },
                _widgetRecordProvider: o
            }), l.createElement(O, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.closePopupOnclick$Action(e.callContext(c))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "37"
                },
                _widgetRecordProvider: o
            }, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
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
                    _handleError: s(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "38",
                    alias: "8"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }))), l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "margin-top-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "39"
                },
                _widgetRecordProvider: o
            }, p(d("0PjFmyBRK0K6PFWravzjIg#Value", "You\u2019re about to leave this process. Your changes might not be saved."))), l.createElement(_, {
                align: 0,
                animate: !1,
                style: "margin-top-xl",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "40"
                },
                _widgetRecordProvider: o
            }, l.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #181c25; border-color: #181c25; border-width: 1px; height: 48px;"
                },
                isDefault: !1,
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.leaveOnClick$Action(e.callContext(c))
                }, "onClick"),
                style: "btn full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Leave2"
                },
                _widgetRecordProvider: o
            }, l.createElement(S, {
                extendedProperties: {
                    style: "color: #f3f6f8;"
                },
                text: [p(d("dU+oVT9z1EWUgiQtIGMA6g#Value", "Leave"))],
                _idProps: {
                    service: t,
                    uuid: "42"
                },
                _widgetRecordProvider: o
            })), l.createElement(_, {
                align: 0,
                animate: !1,
                style: "margin-top-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "43"
                },
                _widgetRecordProvider: o
            }, l.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "border-color: #181c25; font-size: 100%; height: 48px;"
                },
                isDefault: !1,
                onClick: s(function() {
                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.stayOnClick$Action(e.callContext(c))
                }, "onClick"),
                style: "btn btn-rounded full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Stay2"
                },
                _widgetRecordProvider: o
            }, l.createElement(S, {
                extendedProperties: {
                    style: "color: #181c25;"
                },
                style: "",
                text: [p(d("FD6Z9vMCeEmYN_KE4pt_qg#Value", "Stay"))],
                _idProps: {
                    service: t,
                    uuid: "45"
                },
                _widgetRecordProvider: o
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "LayoutOnboarding",
                    functionKey: "4c5dabb9-5f4a-4ae6-8b30-f915cbb968d1",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutOnboarding",
            modelFactory: pe,
            controllerFactory: Se
        });
        return y.getCssDependencies = function() {
            return ["css/dashboard.Layouts.LayoutOnboarding.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.yupumd.js"]
        }, y.getBlocks = function() {
            return [V, le, J, X]
        }, y
    }, "componentFactory"),
    Gt = Ze();
export {
    Gt as a
};