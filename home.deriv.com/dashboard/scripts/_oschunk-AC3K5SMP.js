import {
    a as P
} from "./_oschunk-O3C4A522.js";
import {
    a as T
} from "./_oschunk-J3DG2BKZ.js";
import {
    b as S,
    h,
    i as A,
    q as R,
    t as q,
    u as j,
    x as g
} from "./_oschunk-O5KC3WOL.js";
import {
    a as re,
    g as D,
    m as J,
    o as x,
    q as H,
    r as W,
    s as Z,
    t as U
} from "./_oschunk-NVHFAAS2.js";
import {
    a as G
} from "./_oschunk-AW35UT34.js";
import {
    Ga as V,
    Ha as E,
    Ka as z,
    a as I
} from "./_oschunk-WCMQG33O.js";
import {
    J as b,
    X as C,
    c,
    f as ie,
    q as L
} from "./_oschunk-DFKJJKI4.js";
var r = ie(re());
var u = C,
    M = class M extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExitPopupOpen", "exitPopupOpenVar", "ExitPopupOpen", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CloseButton", "closeButtonIn", "CloseButton", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_closeButtonInDataFetchStatus", "_closeButtonInDataFetchStatus", "_closeButtonInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Arrowback", "arrowbackIn", "Arrowback", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_arrowbackInDataFetchStatus", "_arrowbackInDataFetchStatus", "_arrowbackInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowTitle", "showTitleIn", "ShowTitle", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", "_showTitleInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Changed", "changedIn", "Changed", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_changedInDataFetchStatus", "_changedInDataFetchStatus", "_changedInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("From", "fromIn", "From", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(M, "VariablesRecord");
var p = M;
p.init();
var Q = class Q extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(Q, "WidgetsRecord");
var N = Q,
    k = class k extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return k._hasValidationWidgetsValue === void 0 && (k._hasValidationWidgetsValue = void 0 || void 0), k._hasValidationWidgetsValue
        }
        setInputs(i) {
            "Title" in i && (this.variables.titleIn = i.Title, "_titleInDataFetchStatus" in i && (this.variables._titleInDataFetchStatus = i._titleInDataFetchStatus)), "CloseButton" in i && (this.variables.closeButtonIn = i.CloseButton, "_closeButtonInDataFetchStatus" in i && (this.variables._closeButtonInDataFetchStatus = i._closeButtonInDataFetchStatus)), "Arrowback" in i && (this.variables.arrowbackIn = i.Arrowback, "_arrowbackInDataFetchStatus" in i && (this.variables._arrowbackInDataFetchStatus = i._arrowbackInDataFetchStatus)), "ShowTitle" in i && (this.variables.showTitleIn = i.ShowTitle, "_showTitleInDataFetchStatus" in i && (this.variables._showTitleInDataFetchStatus = i._showTitleInDataFetchStatus)), "Changed" in i && (this.variables.changedIn = i.Changed, "_changedInDataFetchStatus" in i && (this.variables._changedInDataFetchStatus = i._changedInDataFetchStatus)), "From" in i && (this.variables.fromIn = i.From, "_fromInDataFetchStatus" in i && (this.variables._fromInDataFetchStatus = i._fromInDataFetchStatus))
        }
    };
c(k, "Model");
var w = k;
w._hasValidationWidgetsValue = void 0;
var X = new u.Model.ModelFactory(w);
var ne = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062A\u062D\u0631\u064A\u0631",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u063A\u0627\u062F\u0631",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u0625\u0630\u0627 \u0631\u062C\u0639\u062A\u060C \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0644\u0646 \u064A\u062A\u0645 \u062D\u0641\u0638\u0647\u0627.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u0647\u0644 \u062A\u062E\u0631\u062C \u0627\u0644\u0622\u0646\u061F",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062A\u062D\u0631\u064A\u0631",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u063A\u0627\u062F\u0631",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u0625\u0630\u0627 \u0631\u062C\u0639\u062A\u060C \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0644\u0646 \u064A\u062A\u0645 \u062D\u0641\u0638\u0647\u0627.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u0647\u0644 \u062A\u062E\u0631\u062C \u0627\u0644\u0622\u0646\u061F"
    },
    se = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u09BE \u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u09AF\u09A6\u09BF \u0986\u09AA\u09A8\u09BF \u09AB\u09BF\u09B0\u09C7 \u09AF\u09BE\u09A8, \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u0997\u09C1\u09B2\u09BF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09AC\u09C7 \u09A8\u09BE\u0964",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u098F\u0996\u09A8 \u099B\u09BE\u09A1\u09BC\u099B\u09C7\u09A8 \u0995\u09BF?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u09BE \u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u09A8",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u09AF\u09A6\u09BF \u0986\u09AA\u09A8\u09BF \u09AB\u09BF\u09B0\u09C7 \u09AF\u09BE\u09A8, \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u0997\u09C1\u09B2\u09BF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09AC\u09C7 \u09A8\u09BE\u0964",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u098F\u0996\u09A8 \u099B\u09BE\u09A1\u09BC\u099B\u09C7\u09A8 \u0995\u09BF?"
    },
    oe = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Weiter bearbeiten",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Verlassen",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Wenn du zur\xFCckgehst, werden deine \xC4nderungen nicht gespeichert.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Verlassen Sie jetzt?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Weiter bearbeiten",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Verlassen",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Wenn du zur\xFCckgehst, werden deine \xC4nderungen nicht gespeichert.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Verlassen Sie jetzt?"
    },
    le = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Continuar editando",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Salir",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Si vuelves atr\xE1s, tus cambios no se guardar\xE1n.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\xBFSalir ahora?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Continuar editando",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Salir",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Si vuelves atr\xE1s, tus cambios no se guardar\xE1n.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\xBFSalir ahora?"
    },
    ce = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Continuer \xE0 modifier",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Quitter",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Si vous revenez en arri\xE8re, vos modifications ne seront pas enregistr\xE9es.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Partir maintenant ?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Continuer \xE0 modifier",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Quitter",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Si vous revenez en arri\xE8re, vos modifications ne seront pas enregistr\xE9es.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Partir maintenant ?"
    },
    de = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Continua a modificare",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Uscire",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Se torni indietro, le tue modifiche non verranno salvate.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Uscire ora?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Continua a modificare",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Uscire",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Se torni indietro, le tue modifiche non verranno salvate.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Uscire ora?"
    },
    ue = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u1794\u1793\u17D2\u178F\u1780\u17C2\u179F\u1798\u17D2\u179A\u17BD\u179B",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u1794\u17D2\u179A\u179F\u17B7\u1793\u1794\u17BE\u17A2\u17D2\u1793\u1780\u178F\u17D2\u179A\u17A1\u1794\u17CB\u1791\u17C5\u1780\u17D2\u179A\u17C4\u1799 \u1799\u17C9\u17B6\u1784\u178E\u17B6\u1780\u17CF\u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u1798\u17B7\u1793\u1793\u17B9\u1784\u178F\u17D2\u179A\u17BC\u179C\u179F\u1793\u17D2\u179F\u17C6\u1791\u17BB\u1780\u1791\u17C1\u17D4",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u17A2\u17D2\u1793\u1780\u1785\u17B6\u1780\u1785\u17C1\u1789\u17A5\u17A1\u17BC\u179C\u1793\u17C1\u17C7\u1798\u17C2\u1793\u1791\u17C1?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u1794\u1793\u17D2\u178F\u1780\u17C2\u179F\u1798\u17D2\u179A\u17BD\u179B",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u1794\u17D2\u179A\u179F\u17B7\u1793\u1794\u17BE\u17A2\u17D2\u1793\u1780\u178F\u17D2\u179A\u17A1\u1794\u17CB\u1791\u17C5\u1780\u17D2\u179A\u17C4\u1799 \u1799\u17C9\u17B6\u1784\u178E\u17B6\u1780\u17CF\u1780\u17B6\u179A\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u1798\u17B7\u1793\u1793\u17B9\u1784\u178F\u17D2\u179A\u17BC\u179C\u179F\u1793\u17D2\u179F\u17C6\u1791\u17BB\u1780\u1791\u17C1\u17D4",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u17A2\u17D2\u1793\u1780\u1785\u17B6\u1780\u1785\u17C1\u1789\u17A5\u17A1\u17BC\u179C\u1793\u17C1\u17C7\u1798\u17C2\u1793\u1791\u17C1?"
    },
    he = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\uD3B8\uC9D1 \uACC4\uC18D",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\uB098\uAC00\uAE30",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\uB3CC\uC544\uAC00\uBA74 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\uC9C0\uAE08 \uB098\uAC00\uC2DC\uACA0\uC5B4\uC694?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\uD3B8\uC9D1 \uACC4\uC18D",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\uB098\uAC00\uAE30",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\uB3CC\uC544\uAC00\uBA74 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\uC9C0\uAE08 \uB098\uAC00\uC2DC\uACA0\uC5B4\uC694?"
    },
    ye = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u0417\u0430\u0441\u0432\u0430\u0440\u043B\u0430\u0445\u044B\u0433 \u04AF\u0440\u0433\u044D\u043B\u0436\u043B\u04AF\u04AF\u043B\u044D\u0445",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u0413\u0430\u0440\u0430\u0445",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u042D\u0440\u0433\u044D\u044D\u0434 \u043E\u0440\u0441\u043E\u043D \u0442\u043E\u0445\u0438\u043E\u043B\u0434\u043E\u043B\u0434 \u0442\u0430\u043D\u044B \u04E9\u04E9\u0440\u0447\u043B\u04E9\u043B\u0442\u04AF\u04AF\u0434 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0433\u0434\u0430\u0445\u0433\u04AF\u0439.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u041E\u0434\u043E\u043E \u0433\u0430\u0440\u0447 \u0431\u0430\u0439\u043D\u0430 \u0443\u0443?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u0417\u0430\u0441\u0432\u0430\u0440\u043B\u0430\u0445\u044B\u0433 \u04AF\u0440\u0433\u044D\u043B\u0436\u043B\u04AF\u04AF\u043B\u044D\u0445",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u0413\u0430\u0440\u0430\u0445",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u042D\u0440\u0433\u044D\u044D\u0434 \u043E\u0440\u0441\u043E\u043D \u0442\u043E\u0445\u0438\u043E\u043B\u0434\u043E\u043B\u0434 \u0442\u0430\u043D\u044B \u04E9\u04E9\u0440\u0447\u043B\u04E9\u043B\u0442\u04AF\u04AF\u0434 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0433\u0434\u0430\u0445\u0433\u04AF\u0439.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u041E\u0434\u043E\u043E \u0433\u0430\u0440\u0430\u0445 \u0443\u0443?"
    },
    fe = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Kontynuuj edycj\u0119",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Wyjd\u017A",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Je\u015Bli wr\xF3cisz, zmiany nie zostan\u0105 zapisane.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Wychodzisz teraz?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Kontynuuj edycj\u0119",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Wyjd\u017A",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Je\u015Bli wr\xF3cisz, zmiany nie zostan\u0105 zapisane.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Wychodzisz teraz?"
    },
    _e = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Continuar a editar",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Sair",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Se voltar atr\xE1s, as suas altera\xE7\xF5es n\xE3o ser\xE3o salvas.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Sair agora?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Continuar a editar",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Sair",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Se voltar atr\xE1s, as suas altera\xE7\xF5es n\xE3o ser\xE3o salvas.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Sair agora?"
    },
    ve = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u0412\u044B\u0439\u0442\u0438",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u0415\u0441\u043B\u0438 \u0432\u044B \u0432\u0435\u0440\u043D\u0435\u0442\u0435\u0441\u044C, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u041F\u043E\u043A\u0438\u0434\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u0412\u044B\u0439\u0442\u0438",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u0415\u0441\u043B\u0438 \u0432\u044B \u0432\u0435\u0440\u043D\u0435\u0442\u0435\u0441\u044C, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u041F\u043E\u043A\u0438\u0434\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?"
    },
    me = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u0DC3\u0D82\u0DC3\u0DCA\u0D9A\u0DBB\u0DAB \u0DB4\u0DC0\u0DAD\u0DCA\u0DC0\u0DCF\u0D9C\u0DD9\u0DB1 \u0DBA\u0DB1\u0DCA\u0DB1",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u0DBA\u0DB1\u0DCA\u0DB1",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u0D94\u0DB6 \u0D86\u0DB4\u0DC3\u0DD4 \u0D9C\u0DD2\u0DBA\u0DC4\u0DDC\u0DAD\u0DCA, \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u0DAF\u0DD0\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0 \u0DBA\u0DB1\u0DC0\u0DCF\u0DAF?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u0DC3\u0D82\u0DC3\u0DCA\u0D9A\u0DBB\u0DAB \u0DB4\u0DC0\u0DAD\u0DCA\u0DC0\u0DCF\u0D9C\u0DD9\u0DB1 \u0DBA\u0DB1\u0DCA\u0DB1",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u0DBA\u0DB1\u0DCA\u0DB1",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u0D94\u0DB6 \u0D86\u0DB4\u0DC3\u0DD4 \u0D9C\u0DD2\u0DBA\u0DC4\u0DDC\u0DAD\u0DCA, \u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\u0D9A\u0DB8\u0DCA \u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1\u0DDA \u0DB1\u0DD0\u0DAD.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u0DAF\u0DD0\u0DB1\u0DCA \u0DB4\u0DD2\u0DA7\u0DC0 \u0DBA\u0DB1\u0DC0\u0DCF\u0DAF?"
    },
    ge = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Endelea kuhariri",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Acha",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Ukirudi nyuma, mabadiliko yako hayatahifadhiwa.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Unataka kuondoka sasa?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Endelea kuhariri",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Acha",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Ukirudi nyuma, mabadiliko yako hayatahifadhiwa.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Unataka kuondoka sasa?"
    },
    be = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u0BA4\u0BBF\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6 edasi",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u0BB5\u0BBE",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BCB\u0B95\u0BCD\u0B95\u0BBF\u0B9A\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BBF\u0BA9\u0BBE\u0BB2\u0BCD, \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BAA\u0BC7\u0BBE\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u0BA4\u0BBF\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BCA\u0B9F\u0BB0\u0BB5\u0BC1\u0BAE\u0BCD",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u0BB5\u0BBE",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BCB\u0B95\u0BCD\u0B95\u0BBF\u0B9A\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BBF\u0BA9\u0BBE\u0BB2\u0BCD, \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1 \u0BAA\u0BCB\u0B95\u0BB2\u0BBE\u0BAE\u0BBE?"
    },
    Ve = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E15\u0E48\u0E2D",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u0E2D\u0E2D\u0E01",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E15\u0E48\u0E2D",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u0E2D\u0E2D\u0E01",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21?"
    },
    ke = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "D\xFCzenlemeye devam et",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\xC7\u0131k\u0131\u015F",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Geri d\xF6nersen, de\u011Fi\u015Fikliklerin kaydedilmeyecek.",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u015Eimdi mi \xE7\u0131k\u0131yorsun?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "D\xFCzenlemeye devam et",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\xC7\u0131k\u0131\u015F",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Geri d\xF6nersen, de\u011Fi\u015Fikliklerin kaydedilmeyecek.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u015Eimdi mi \xE7\u0131k\u0131yorsun?"
    },
    Ce = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Tahrirni davom ettirish",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Chiqish",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Agar qaytib kelsangiz, o'zgartirishlar saqlanmaydi.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Hozir chiqyapsizmi?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Tahrirni davom ettirish",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Chiqish",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Agar qaytib kelsangiz, o'zgartirishlar saqlanmaydi.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Hozir chiqyapsizmi?"
    },
    Se = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Tahrirni davom ettirish",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "Chiqish",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "Agar qaytib kelsangiz, o'zgartirishlar saqlanmaydi.",
        "izNeLJDw0EGGziJdkssLTA#Value": "Hozir chiqyapsizmi?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Tahrirni davom ettirish",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "Chiqish",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "Agar qaytib kelsangiz, o'zgartirishlar saqlanmaydi.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "Hozir chiqyapsizmi?"
    },
    Oe = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "Ti\u1EBFp t\u1EE5c ch\u1EC9nh s\u1EEDa",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "R\u1EDDi \u0111i",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "N\u1EBFu b\u1EA1n quay l\u1EA1i, c\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n s\u1EBD kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "izNeLJDw0EGGziJdkssLTA#Value": "B\u1EA1n c\xF3 mu\u1ED1n r\u1EDDi \u0111i b\xE2y gi\u1EDD kh\xF4ng?",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "Ti\u1EBFp t\u1EE5c ch\u1EC9nh s\u1EEDa",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "R\u1EDDi \u0111i",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "N\u1EBFu b\u1EA1n quay l\u1EA1i, c\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n s\u1EBD kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u.",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "B\u1EA1n c\xF3 mu\u1ED1n r\u1EDDi \u0111i b\xE2y gi\u1EDD kh\xF4ng?"
    },
    pe = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u7EE7\u7EED\u7F16\u8F91",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u79BB\u5F00",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u5982\u679C\u60A8\u8FD4\u56DE\uFF0C\u60A8\u7684\u66F4\u6539\u5C06\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u73B0\u5728\u8981\u79BB\u5F00\u5417\uFF1F",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u7EE7\u7EED\u7F16\u8F91",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u79BB\u5F00",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u5982\u679C\u60A8\u8FD4\u56DE\uFF0C\u60A8\u7684\u66F4\u6539\u5C06\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u73B0\u5728\u8981\u79BB\u5F00\u5417\uFF1F"
    },
    we = {
        "0ciL1dJGM0y8fyNhWzhu9Q#Value": "\u7E7C\u7E8C\u7DE8\u8F2F",
        "ZN6mdFcqgkGpDMG5ORwjHQ#Value": "\u96E2\u958B",
        "s8S2Vkw1VEOlvYZNrqibog#Value": "\u5982\u679C\u60A8\u8FD4\u56DE\uFF0C\u60A8\u7684\u66F4\u6539\u5C07\u4E0D\u6703\u88AB\u4FDD\u5B58\u3002",
        "izNeLJDw0EGGziJdkssLTA#Value": "\u73FE\u5728\u96E2\u958B\u55CE\uFF1F",
        "1C3MRJ_a9Een+7CJsDnAyw#Value": "\u7E7C\u7E8C\u7DE8\u8F2F",
        "YLh3XVm1OkWyT4yj8LalXQ#Value": "\u96E2\u958B",
        "gls00D9HeEeZLDQFVMkdrQ#Value": "\u5982\u679C\u60A8\u8FD4\u56DE\uFF0C\u60A8\u7684\u66F4\u6539\u5C07\u4E0D\u6703\u88AB\u4FDD\u5B58\u3002",
        "M_CdhQ8yNkO5yrFfMZU9lQ#Value": "\u73FE\u5728\u96E2\u958B\u55CE\uFF1F"
    },
    Y = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        },
        "bn-BD": {
            translations: se,
            isRTL: !1
        },
        "de-DE": {
            translations: oe,
            isRTL: !1
        },
        "es-ES": {
            translations: le,
            isRTL: !1
        },
        "fr-FR": {
            translations: ce,
            isRTL: !1
        },
        "it-IT": {
            translations: de,
            isRTL: !1
        },
        "km-KH": {
            translations: ue,
            isRTL: !1
        },
        "ko-KR": {
            translations: he,
            isRTL: !1
        },
        "mn-MN": {
            translations: ye,
            isRTL: !1
        },
        "pl-PL": {
            translations: fe,
            isRTL: !1
        },
        "pt-PT": {
            translations: _e,
            isRTL: !1
        },
        "ru-RU": {
            translations: ve,
            isRTL: !1
        },
        "si-LK": {
            translations: me,
            isRTL: !1
        },
        "sw-KE": {
            translations: ge,
            isRTL: !1
        },
        "ta-IN": {
            translations: be,
            isRTL: !1
        },
        "th-TH": {
            translations: Ve,
            isRTL: !1
        },
        "tr-TR": {
            translations: ke,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Ce,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Se,
            isRTL: !1
        },
        "vi-VN": {
            translations: Oe,
            isRTL: !1
        },
        "zh-CN": {
            translations: pe,
            isRTL: !1
        },
        "zh-TW": {
            translations: we,
            isRTL: !1
        }
    };

function F(_, i, y, e) {
    window.location.replace("/dashboard" + _.From)
}
c(F, "default");
var l = C; {
    let i = class i extends l.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Y);
            var o = this.controller;
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
                    a = this.controller,
                    o = this.idService;
                return l.Logger.startActiveSpan("LeaveOnClick", function(n) {
                    n && (n.setAttribute("code.function", "LeaveOnClick"), n.setAttribute("outsystems.function.key", "387200d1-a84d-470f-87a7-ebf0f6c0cfc1"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("LeaveOnClick"), e = a.callContext(e), E.getRedirectURL() !== l.BuiltinFunctions.nullTextIdentifier() ? l.Navigation.navigateTo(l.Navigation.generateScreenURL(E.getRedirectURL(), {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0) : l.Navigation.navigateTo(l.Navigation.generateScreenURL("dashboard", "profile", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
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
                    o = this.idService;
                return l.Logger.startActiveSpan("StayOnClick", function(n) {
                    n && (n.setAttribute("code.function", "StayOnClick"), n.setAttribute("outsystems.function.key", "75d307d3-be96-4bd6-93b0-9a46f93744a7"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("StayOnClick"), e = a.callContext(e);
                        var f = new l.DataTypes.VariableHolder;
                        f.value = V.bottomSheetClose$Action(o.getId("BottomSheet_Leave"), e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        n && n.end()
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
                    o = this.idService;
                return l.Logger.startActiveSpan("LinkOnClick", function(n) {
                    n && (n.setAttribute("code.function", "LinkOnClick"), n.setAttribute("outsystems.function.key", "c5294303-6b17-4c2a-b9f9-257612f4913d"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("LinkOnClick"), e = a.callContext(e);
                        var f = new l.DataTypes.VariableHolder;
                        if (t.variables.changedIn) V.isDesktop$Action(e).isDesktopOut ? t.variables.exitPopupOpenVar = !0 : f.value = V.bottomSheetOpen$Action(o.getId("BottomSheet_Leave"), e);
                        else if (t.variables.fromIn !== l.BuiltinFunctions.nullTextIdentifier()) l.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "52c46e4a-49d0-4368-9540-89bbeb0251f8"), v.setAttribute("outsystems.function.owner.name", "dashboard"), v.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(F, "JavaScript1", "LinkOnClick", {
                                    From: l.DataConversion.JSNodeParamConverter.to(t.variables.fromIn, l.DataTypes.DataTypes.Text)
                                }, function(s) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1);
                        else return l.Navigation.navigateTo(l.Navigation.generateScreenURL("dashboard", "profile", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        get _closePopupOnclick$Action() {
            return this.hasOwnProperty("__closePopupOnclick$Action") || (this.__closePopupOnclick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return l.Logger.startActiveSpan("ClosePopupOnclick", function(n) {
                    n && (n.setAttribute("code.function", "ClosePopupOnclick"), n.setAttribute("outsystems.function.key", "efdc73ed-8b4d-4c9a-ac45-f290c6366dbe"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ClosePopupOnclick"), e = a.callContext(e), t.variables.exitPopupOpenVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closePopupOnclick$Action
        }
        set _closePopupOnclick$Action(e) {
            this.__closePopupOnclick$Action = e
        }
        leaveOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("LeaveOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LeaveOnClick"), a.setAttribute("outsystems.function.key", "387200d1-a84d-470f-87a7-ebf0f6c0cfc1"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._leaveOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        stayOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("StayOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "StayOnClick"), a.setAttribute("outsystems.function.key", "75d307d3-be96-4bd6-93b0-9a46f93744a7"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stayOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        linkOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("LinkOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "LinkOnClick"), a.setAttribute("outsystems.function.key", "c5294303-6b17-4c2a-b9f9-257612f4913d"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._linkOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        closePopupOnclick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("ClosePopupOnclick__proxy", function(a) {
                a && (a.setAttribute("code.function", "ClosePopupOnclick"), a.setAttribute("outsystems.function.key", "efdc73ed-8b4d-4c9a-ac45-f290c6366dbe"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closePopupOnclick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
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
            return z.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let _ = i;
    K = _
}
var K, ee = new l.Controller.ControllerFactory(K, G);
var te = D.PlaceholderContent,
    st = D.IteratorPlaceholderContent,
    Ee = c(function() {
        var _ = x(function(i) {
            var y = i.model,
                e = i.controller,
                t = i.controller.idService,
                a = e.validationService,
                o = e.callContext(),
                n = Z,
                f = U,
                v = {
                    props: i,
                    validateWidget: c(function(d) {
                        i.validateWidget(i, d)
                    }, "validateWidget")
                },
                s = y,
                ae = W,
                m = H,
                O = J();
            return r.createElement("div", i.rootNodeProperties, r.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, r.createElement(h, {
                align: 0,
                animate: !0,
                style: "BackIcon-mobile_container",
                visible: y.variables.closeButtonIn,
                _idProps: {
                    service: t,
                    name: "BackIcon"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: b.calculateDataFetchStatus(y.variables._closeButtonInDataFetchStatus)
            }, r.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: c(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.linkOnClick$Action(e.callContext(d))
                    }, "onClick")
                },
                style: "back-button",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "RightAction2"
                },
                _widgetRecordProvider: s
            }, r.createElement(R, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: L.VersionedURL.getVersionedUrl("img/dashboard.icon_12_.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: s
            }))), r.createElement(h, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "padding-bottom: 34px; padding-top: 10px;"
                },
                visible: y.variables.arrowbackIn,
                _idProps: {
                    service: t,
                    name: "BackArrow"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: b.calculateDataFetchStatus(y.variables._arrowbackInDataFetchStatus)
            }, r.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: c(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.linkOnClick$Action(e.callContext(d))
                    }, "onClick")
                },
                style: "back-button rotate-180",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "RightAction3"
                },
                _widgetRecordProvider: s
            }, r.createElement(R, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: L.VersionedURL.getVersionedUrl("img/dashboard.icon_16_.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: s
            })))), ae(V.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [r.createElement(h, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "margin-bottom: 10px;"
                    },
                    visible: y.variables.showTitleIn,
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: s,
                    visible_dataFetchStatus: b.calculateDataFetchStatus(y.variables._showTitleInDataFetchStatus)
                }, r.createElement(A, {
                    extendedProperties: {
                        style: "color: #000; font-size: 24px; font-style: normal; font-weight: 800;"
                    },
                    value: y.variables.titleIn,
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: b.calculateDataFetchStatus(y.variables._titleInDataFetchStatus)
                }))]
            }, function() {
                return [r.createElement(h, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "margin-inline-start: 24px;"
                    },
                    visible: y.variables.showTitleIn,
                    _idProps: {
                        service: t,
                        uuid: "9"
                    },
                    _widgetRecordProvider: s,
                    visible_dataFetchStatus: b.calculateDataFetchStatus(y.variables._showTitleInDataFetchStatus)
                }, r.createElement(A, {
                    extendedProperties: {
                        style: "color: #000; font-size: 24px; font-style: normal; font-weight: 800;"
                    },
                    value: y.variables.titleIn,
                    _idProps: {
                        service: t,
                        uuid: "10"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: b.calculateDataFetchStatus(y.variables._titleInDataFetchStatus)
                }))]
            }), r.createElement(j, {
                extendedProperties: {
                    style: "border-radius: 32px;"
                },
                showPopup: y.variables.exitPopupOpenVar,
                style: "popup-dialog padding-l",
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: s
            }, r.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between margin-bottom-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "12"
                },
                _widgetRecordProvider: s
            }, r.createElement(g, {
                extendedProperties: {
                    style: "font-size: 24px; font-weight: 800;"
                },
                text: [m(f("M_CdhQ8yNkO5yrFfMZU9lQ#Value", "Leaving now?"))],
                _idProps: {
                    service: t,
                    uuid: "13"
                },
                _widgetRecordProvider: s
            }), r.createElement(q, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: c(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.closePopupOnclick$Action(e.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: s
            }, r.createElement(T, {
                getOwnerSpan: c(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return O.getChildSpan("destroy")
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
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "15",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }))), r.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "margin-top-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "16"
                },
                _widgetRecordProvider: s
            }, m(f("gls00D9HeEeZLDQFVMkdrQ#Value", "If you go back, your changes won\u2019t be saved."))), r.createElement(h, {
                align: 0,
                animate: !1,
                style: "margin-top-xl",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: s
            }, r.createElement(S, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; border-color: #fff; border-width: 1px; height: 48px;"
                },
                isDefault: !1,
                onClick: c(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.leaveOnClick$Action(e.callContext(d))
                }, "onClick"),
                style: "btn full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Leave2"
                },
                _widgetRecordProvider: s
            }, r.createElement(g, {
                extendedProperties: {
                    style: "color: #f3f6f8;"
                },
                text: [m(f("YLh3XVm1OkWyT4yj8LalXQ#Value", "Leave"))],
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: s
            })), r.createElement(h, {
                align: 0,
                animate: !1,
                style: "margin-top-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "20"
                },
                _widgetRecordProvider: s
            }, r.createElement(S, {
                enabled: !0,
                extendedProperties: {
                    style: "border-color: #181c25; font-size: 100%; height: 48px;"
                },
                isDefault: !1,
                onClick: c(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.stayOnClick$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-rounded full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Continueeditting"
                },
                _widgetRecordProvider: s
            }, r.createElement(g, {
                extendedProperties: {
                    style: "color: #181c25;"
                },
                style: "",
                text: [m(f("1C3MRJ_a9Een+7CJsDnAyw#Value", "Continue editting"))],
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: s
            }))))), r.createElement(P, {
                getOwnerSpan: c(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Shape: I.shape.rounded,
                    ShowHandler: !0,
                    ExtendedClass: "min-height-auto height-auto padding-base bottom-sheet__leave"
                },
                events: {
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    name: "BottomSheet_Leave",
                    alias: "2"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    topBar: te.Empty,
                    content: new te(function() {
                        return [r.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "24"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(h, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "25"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "font-size-h5",
                            text: [m(f("izNeLJDw0EGGziJdkssLTA#Value", "Leaving now?"))],
                            _idProps: {
                                service: t,
                                uuid: "26"
                            },
                            _widgetRecordProvider: s
                        })), r.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "27"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [m(f("s8S2Vkw1VEOlvYZNrqibog#Value", "If you go back, your changes won\u2019t be saved."))],
                            _idProps: {
                                service: t,
                                uuid: "28"
                            },
                            _widgetRecordProvider: s
                        })), r.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-xl",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "29"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(S, {
                            enabled: !0,
                            extendedProperties: {
                                style: "background-color: #ff4450;"
                            },
                            isDefault: !1,
                            onClick: c(function() {
                                var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.leaveOnClick$Action(e.callContext(d))
                            }, "onClick"),
                            style: "btn full-width btn-rounded",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Leave"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(g, {
                            extendedProperties: {
                                style: "color: #f3f6f8;"
                            },
                            text: [m(f("ZN6mdFcqgkGpDMG5ORwjHQ#Value", "Leave"))],
                            _idProps: {
                                service: t,
                                uuid: "31"
                            },
                            _widgetRecordProvider: s
                        })), r.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "32"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(S, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #181c25;"
                            },
                            isDefault: !1,
                            onClick: c(function() {
                                var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.stayOnClick$Action(e.callContext(d))
                            }, "onClick"),
                            style: "btn btn-rounded full-width",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Stay"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(g, {
                            extendedProperties: {
                                style: "color: #181c25;"
                            },
                            style: "",
                            text: [m(f("0ciL1dJGM0y8fyNhWzhu9Q#Value", "Continue editing"))],
                            _idProps: {
                                service: t,
                                uuid: "34"
                            },
                            _widgetRecordProvider: s
                        })))))]
                    })
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "LayoutAccounts",
                    functionKey: "e2e842ae-a573-44ea-a322-0cb2d1ca99d7",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfile.LayoutAccounts",
            modelFactory: X,
            controllerFactory: ee
        });
        return _.getCssDependencies = function() {
            return ["css/dashboard.UserProfile.LayoutAccounts.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [T, P]
        }, _
    }, "componentFactory"),
    ot = Ee();
export {
    ot as a
};