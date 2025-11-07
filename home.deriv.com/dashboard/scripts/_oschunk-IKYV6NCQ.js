import {
    a as ce
} from "./_oschunk-V2GLUWLZ.js";
import {
    h as ue,
    i as Re,
    p as xe,
    r as Je,
    s as Ve
} from "./_oschunk-O5KC3WOL.js";
import {
    a as Oe,
    g as W,
    m as j,
    o as Y,
    q as Z,
    r as X,
    s as ee,
    t as te
} from "./_oschunk-NVHFAAS2.js";
import {
    a as U
} from "./_oschunk-AW35UT34.js";
import {
    Ga as Pe,
    Ka as H
} from "./_oschunk-WCMQG33O.js";
import {
    J as $,
    X as x,
    a as se,
    b as Ee,
    c,
    f as we,
    w as Fe,
    x as le
} from "./_oschunk-DFKJJKI4.js";
var J = we(Oe());
var y = x,
    fe = class fe extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DateValue", "dateValueVar", "DateValue", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("InputDate", "inputDateIn", "InputDate", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_inputDateInDataFetchStatus", "_inputDateInDataFetchStatus", "_inputDateInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MinDate", "minDateIn", "MinDate", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_minDateInDataFetchStatus", "_minDateInDataFetchStatus", "_minDateInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MaxDate", "maxDateIn", "MaxDate", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_maxDateInDataFetchStatus", "_maxDateInDataFetchStatus", "_maxDateInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DateFormat", "dateFormatIn", "DateFormat", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return "yyyy-MM-dd"
            }, !1), this.attr("_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Label", "labelIn", "Label", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Enabled", "enabledIn", "Enabled", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enabledInDataFetchStatus", "_enabledInDataFetchStatus", "_enabledInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Required", "requiredIn", "Required", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_requiredInDataFetchStatus", "_requiredInDataFetchStatus", "_requiredInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Placeholder", "placeholderIn", "Placeholder", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_placeholderInDataFetchStatus", "_placeholderInDataFetchStatus", "_placeholderInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsMobile", "isMobileIn", "IsMobile", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isMobileInDataFetchStatus", "_isMobileInDataFetchStatus", "_isMobileInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AllowEPOC", "allowEPOCIn", "AllowEPOC", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_allowEPOCInDataFetchStatus", "_allowEPOCInDataFetchStatus", "_allowEPOCInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowClearButton", "showClearButtonIn", "ShowClearButton", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showClearButtonInDataFetchStatus", "_showClearButtonInDataFetchStatus", "_showClearButtonInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AllowTyping", "allowTypingIn", "AllowTyping", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_allowTypingInDataFetchStatus", "_allowTypingInDataFetchStatus", "_allowTypingInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(fe, "VariablesRecord");
var ae = fe;
ae.init();
var he = class he extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DateField: y.Model.ValidationWidgetRecord
        }
    }
};
c(he, "WidgetsRecord");
var de = he,
    be = class be extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ae
        }
        static getWidgetsRecordConstructor() {
            return de
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {
            "InputDate" in a && (this.variables.inputDateIn = a.InputDate, "_inputDateInDataFetchStatus" in a && (this.variables._inputDateInDataFetchStatus = a._inputDateInDataFetchStatus)), "MinDate" in a && (this.variables.minDateIn = a.MinDate, "_minDateInDataFetchStatus" in a && (this.variables._minDateInDataFetchStatus = a._minDateInDataFetchStatus)), "MaxDate" in a && (this.variables.maxDateIn = a.MaxDate, "_maxDateInDataFetchStatus" in a && (this.variables._maxDateInDataFetchStatus = a._maxDateInDataFetchStatus)), "DateFormat" in a && (this.variables.dateFormatIn = a.DateFormat, "_dateFormatInDataFetchStatus" in a && (this.variables._dateFormatInDataFetchStatus = a._dateFormatInDataFetchStatus)), "ErrorMessage" in a && (this.variables.errorMessageIn = a.ErrorMessage, "_errorMessageInDataFetchStatus" in a && (this.variables._errorMessageInDataFetchStatus = a._errorMessageInDataFetchStatus)), "Label" in a && (this.variables.labelIn = a.Label, "_labelInDataFetchStatus" in a && (this.variables._labelInDataFetchStatus = a._labelInDataFetchStatus)), "Enabled" in a && (this.variables.enabledIn = a.Enabled, "_enabledInDataFetchStatus" in a && (this.variables._enabledInDataFetchStatus = a._enabledInDataFetchStatus)), "Required" in a && (this.variables.requiredIn = a.Required, "_requiredInDataFetchStatus" in a && (this.variables._requiredInDataFetchStatus = a._requiredInDataFetchStatus)), "Placeholder" in a && (this.variables.placeholderIn = a.Placeholder, "_placeholderInDataFetchStatus" in a && (this.variables._placeholderInDataFetchStatus = a._placeholderInDataFetchStatus)), "IsMobile" in a && (this.variables.isMobileIn = a.IsMobile, "_isMobileInDataFetchStatus" in a && (this.variables._isMobileInDataFetchStatus = a._isMobileInDataFetchStatus)), "AllowEPOC" in a && (this.variables.allowEPOCIn = a.AllowEPOC, "_allowEPOCInDataFetchStatus" in a && (this.variables._allowEPOCInDataFetchStatus = a._allowEPOCInDataFetchStatus)), "ShowClearButton" in a && (this.variables.showClearButtonIn = a.ShowClearButton, "_showClearButtonInDataFetchStatus" in a && (this.variables._showClearButtonInDataFetchStatus = a._showClearButtonInDataFetchStatus)), "AllowTyping" in a && (this.variables.allowTypingIn = a.AllowTyping, "_allowTypingInDataFetchStatus" in a && (this.variables._allowTypingInDataFetchStatus = a._allowTypingInDataFetchStatus))
        }
    };
c(be, "Model");
var ne = be;
ne._hasValidationWidgetsValue = void 0;
var Ne = new y.Model.ModelFactory(ne);
var Qe = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u0645\u0633\u062D",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0627\u0644\u064A\u0648\u0645"
    },
    Ke = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0986\u099C"
    },
    ze = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "L\xF6schen",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Heute"
    },
    Ge = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Borrar",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Hoy"
    },
    Ue = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Effacer",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Aujourd'hui"
    },
    je = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Cancella",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Oggi"
    },
    Ye = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u179F\u1798\u17D2\u17A2\u17B6\u178F",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7"
    },
    Ze = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\uC9C0\uC6B0\uAE30",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\uC624\uB298"
    },
    Xe = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u0423\u043D\u0448\u0438\u0445",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440"
    },
    et = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Wyczy\u015B\u0107",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Dzisiaj"
    },
    tt = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Limpar",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Hoje"
    },
    at = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F"
    },
    nt = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u0DB8\u0D9A\u0DB1\u0DCA\u0DB1",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0D85\u0DAF"
    },
    rt = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Futa",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Leo"
    },
    ot = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u0BA4\u0BC6\u0BB3\u0BBF\u0BB5\u0BBE\u0B95",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1"
    },
    it = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u0E25\u0E49\u0E32\u0E07",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49"
    },
    st = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Temizle",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Bug\xFCn"
    },
    lt = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Tozalash",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Bugun"
    },
    ut = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "Tozalash",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "Bugun"
    },
    ct = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "X\xF3a",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "H\xF4m nay"
    },
    dt = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u6E05\u9664",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u4ECA\u5929"
    },
    ft = {
        "JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1": "\u6E05\u9664",
        "aMllCm7LJEqbgJsebFwJQg#Value.80981793.1": "\u4ECA\u5929"
    },
    Me = {
        "ar-001": {
            translations: Qe,
            isRTL: !0
        },
        "bn-BD": {
            translations: Ke,
            isRTL: !1
        },
        "de-DE": {
            translations: ze,
            isRTL: !1
        },
        "es-ES": {
            translations: Ge,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ue,
            isRTL: !1
        },
        "it-IT": {
            translations: je,
            isRTL: !1
        },
        "km-KH": {
            translations: Ye,
            isRTL: !1
        },
        "ko-KR": {
            translations: Ze,
            isRTL: !1
        },
        "mn-MN": {
            translations: Xe,
            isRTL: !1
        },
        "pl-PL": {
            translations: et,
            isRTL: !1
        },
        "pt-PT": {
            translations: tt,
            isRTL: !1
        },
        "ru-RU": {
            translations: at,
            isRTL: !1
        },
        "si-LK": {
            translations: nt,
            isRTL: !1
        },
        "sw-KE": {
            translations: rt,
            isRTL: !1
        },
        "ta-IN": {
            translations: ot,
            isRTL: !1
        },
        "th-TH": {
            translations: it,
            isRTL: !1
        },
        "tr-TR": {
            translations: st,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: lt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ut,
            isRTL: !1
        },
        "vi-VN": {
            translations: ct,
            isRTL: !1
        },
        "zh-CN": {
            translations: dt,
            isRTL: !1
        },
        "zh-TW": {
            translations: ft,
            isRTL: !1
        }
    };

function ye(i, a, d) {
    window.datePickerAPI && delete window.datePickerAPI
}
c(ye, "default");

function De(i, a, d, e) {
    let r = c(() => {
        if (!i.InputDate) return "";
        let t = new Date(i.InputDate),
            l = String(t.getDate()).padStart(2, "0"),
            o = String(t.getMonth() + 1).padStart(2, "0"),
            u = t.getFullYear();
        return l + "/" + o + "/" + u
    }, "formateDate");
    i.DisplayDate = r()
}
c(De, "default");

function me(i, a, d, e) {
    let r = document.getElementById(i.InputId);
    i.AllowTyping || r.setAttribute("readonly", !0)
}
c(me, "default");

function ve(i, a, d, e) {
    var Q, N;
    let r = JSON.parse(a.GetMonthNamings().MonthNamings),
        t = r.length > 0 ? r : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        l = JSON.parse(a.GetDayNamings(1).DayNamings),
        o = l.length > 0 ? l : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        u = {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: o,
            months: t,
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: i.TodayMessage,
            clear: i.ClearMessage,
            dateFormat: "mm/dd/yyyy",
            timeFormat: "hh:ii aa",
            firstDay: 0
        },
        v = {
            days: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0623\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0647", "\u0627\u0644\u0633\u0628\u062A"],
            daysShort: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0623\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0647", "\u0627\u0644\u0633\u0628\u062A"],
            daysMin: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0623\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0647", "\u0627\u0644\u0633\u0628\u062A"],
            months: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0627\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
            monthsShort: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0627\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
            today: "\u0627\u0644\u064A\u0648\u0645",
            clear: "\u062D\u0630\u0641",
            dateFormat: "dd/MM/yyyy",
            timeFormat: "hh:mm aa",
            firstDay: 0
        },
        s = i.IsMobile ? {
            isMobile: !i.AllowTyping,
            keyboardNav: !1
        } : {},
        _ = i.ShowClear ? {
            buttons: [{
                content(S) {
                    return S.options.clear ? "clear" : ""
                },
                onClick(S) {
                    a.SetDate(dateFormat, !1)
                }
            }]
        } : {},
        A = Ee(se(se({
            clear: i.ShowClear,
            dateFormat: i.DateFormat,
            minDate: (Q = i.MinDate) != null ? Q : "",
            maxDate: (N = i.MaxDate) != null ? N : "",
            selectedDates: [i.InputDate],
            autoClose: !0,
            onSelect: c(({
                date: S,
                datepicker: b
            }) => {
                var m;
                let h = (m = b.focusDate) != null ? m : i.InputDate;
                b.selectDate(h, {
                    silent: !0
                }), b.setViewDate(h), a.SetDate(h, !1)
            }, "onSelect"),
            keyboardNav: !i.AllowTyping
        }, s), _), {
            locale: i.lang === "AR" ? v : u,
            isRTL: i.lang === "AR",
            position: i.lang === "AR" ? "bottom right" : "bottom left",
            prevHtml: i.lang === "AR" ? '<svg><path d="M14,12 l5,5 l-5,5"/></svg>' : '<svg><path d="M17,12 l-5,5 l5,5"/></svg>',
            nextHtml: i.lang === "AR" ? '<svg><path d="M17,12 l-5,5 l5,5"/></svg>' : '<svg><path d="M14,12 l5,5 l-5,5"/></svg>'
        }),
        T = new AirDatepicker(`#${i.WidgetID}`, A);
    try {
        i.InputDate && (T == null || T.setViewDate(i.InputDate))
    } catch (S) {}
    window.datePickerAPI ? window.datePickerAPI[`#${i.WidgetID}`] = T : (window.datePickerAPI = {}, window.datePickerAPI[`#${i.WidgetID}`] = T);
    let g = null,
        P = null;

    function E(S) {
        let b = S.target,
            h = b.value || "",
            m = S.inputType || "",
            I = m.startsWith("delete") || m === "insertReplacementText",
            O = b.selectionStart,
            f = P > g && m === "insertText" && S.data;
        if (b.dataset.isFormatting === "true") return;
        if (b.dataset.isFormatting = "true", I && O !== h.length) {
            S.preventDefault(), requestAnimationFrame(() => {
                delete b.dataset.isFormatting
            });
            return
        }
        let D = h.replace(/[^\d]/g, "").slice(0, 8),
            p = "";
        if (D.length <= 1) p = D;
        else if (D.length === 2) p = !(h.charAt(2) === "/") && !I ? `${D}/` : h;
        else if (D.length === 3) {
            let F = D.slice(0, 2),
                R = D.slice(2, 3);
            p = `${F}/${R}`
        } else if (D.length === 4) {
            let F = D.slice(0, 2),
                R = D.slice(2, 4);
            p = !(h.charAt(5) === "/") && !I ? `${F}/${R}/` : h
        } else {
            let F = D.slice(0, 2),
                R = D.slice(2, 4),
                q = D.slice(4, 8),
                K = h.charAt(2) === "/",
                k = h.charAt(5) === "/";
            p = `${F}/${R}/${q}`
        }
        if (b.value !== p) {
            let F = function(z, ie) {
                    let G = 0;
                    for (let M = 0; M < ie; ++M) /\d/.test(z[M]) && G++;
                    return G
                },
                K = function(z, ie) {
                    let G = 0;
                    for (let M = 0; M < z.length; ++M)
                        if (/\d/.test(z[M]) && G++, G >= ie) return M + 1;
                    return z.length
                };
            c(F, "getDigitCountToPos"), c(K, "findCaretForDigitCount");
            let R = b.selectionStart,
                q = F(b.value, R);
            b.value = p;
            let k = K(p, q);
            b.setSelectionRange(k, k), (["insertReplacementText", "deleteContentBackward", "deleteContentForward"].includes(m) || f || p.length === 10) && a.DateFieldOnChange(p)
        } else f && (b.dispatchEvent(new Event("input", {
            bubbles: !0
        })), a.DateFieldOnChange(p));
        requestAnimationFrame(() => {
            delete b.dataset.isFormatting, g = null, P = null
        })
    }
    c(E, "formatDateInput");

    function w(S) {
        let b = document.querySelector(`#${S} input`) || document.querySelector(`#${S}`);
        b && b.dataset.formatBound !== "true" && (b.dataset.formatBound = "true", b.addEventListener("beforeinput", function(h) {
            g = b.selectionStart, P = b.selectionEnd;
            let m = b.value;
            (m.slice(0, g) + h.data + m.slice(P)).replace(/[^\d/]/g, "").length > 10 && h.preventDefault()
        }), b.addEventListener("keypress", function(h) {
            let m = h.key;
            /[0-9\/]/.test(m) || h.preventDefault()
        }), b.addEventListener("input", function(h) {
            h.target.value.length > 10 && (h.target.value = h.target.value.slice(0, 10)), h.isTrusted && E(h)
        }), b.addEventListener("paste", function(h) {
            h.preventDefault()
        }), b.addEventListener("select", () => {
            let h = b.selectionStart,
                m = b.selectionEnd;
            Math.abs(m - h) <= 1 || h < m && b.setSelectionRange(h, h)
        }))
    }
    c(w, "attachDateFormatter"), w(i.WidgetID)
}
c(ve, "default");

function _e(i, a, d, e) {
    let r = new Date(0).getTime(),
        t = new Date(i.InputDate).getTime();
    !i.ShouldAllowEPOC && t <= r ? i.OutputDate = "" : i.OutputDate = i.InputDate
}
c(_e, "default");

function ge(i, a, d, e) {
    var A, T, g;
    let r = i.DateValue,
        t = i.DateFormat || "dd/MM/yyyy",
        o = new Date().getFullYear() - 100;
    if (!r) return a.SetDate(new Date, !0), null;
    let u = v(r, t);
    u ? ((A = window.datePickerAPI[`#${i.WidgetID}`]) == null || A.selectDate(u, {
        silent: !0
    }), (T = window.datePickerAPI[`#${i.WidgetID}`]) == null || T.setViewDate(u), (g = window.datePickerAPI[`#${i.WidgetID}`]) == null || g.setFocusDate(u), a.SetDate(u, !1)) : _(r, t);

    function v(P, E) {
        try {
            let w = s(P, E);
            return w || null
        } catch (w) {
            return null
        }
    }
    c(v, "parseDateWithFormat");

    function s(P, E) {
        let w = P.replace(/[\/\-\.\s]/g, "/"),
            N = E.replace(/[\/\-\.\s]/g, "/").split("/"),
            S = w.split("/");
        if (S.length !== N.length) return null;
        let b, h, m;
        for (let O = 0; O < N.length; O++) {
            let L = N[O].toLowerCase(),
                f = S[O];
            if (!/^\d+$/.test(f)) return null;
            let D = parseInt(f, 10);
            if (L.includes("y")) {
                if (f.length !== 4) return null;
                m = D
            } else if (L.includes("m")) {
                if (f.length !== 2) return null;
                h = D - 1
            } else if (L.includes("d")) {
                if (f.length !== 2) return null;
                b = D
            }
        }
        if (b === void 0 || h === void 0 || m === void 0 || !(b >= 1 && b <= 31 && h >= 0 && h <= 11 && m <= 2099)) return null;
        let I = new Date(m, h, b);
        return I.getDate() !== b || I.getMonth() !== h || I.getFullYear() !== m ? null : I
    }
    c(s, "parseFullDate");

    function _(P, E) {
        var I, O, L;
        let w = !1,
            Q = E.toLowerCase().indexOf("d"),
            N = E.toLowerCase().indexOf("m"),
            S = E.toLowerCase().indexOf("y"),
            b = [{
                name: "day",
                index: Q
            }, {
                name: "month",
                index: N
            }, {
                name: "year",
                index: S
            }].sort((f, D) => f.index - D.index).map(f => f.name),
            h;
        E.includes("/") ? h = /^(\d{2})\/(\d{2})\/(\d{4})$/ : E.includes("-") ? h = /^(\d{2})\-(\d{2})\-(\d{4})$/ : E.includes(".") ? h = /^(\d{2})\.(\d{2})\.(\d{4})$/ : h = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        let m = P.match(h);
        if (m) {
            let f = {
                day: null,
                month: null,
                year: null
            };
            if (f[b[0]] = parseInt(m[1], 10), m[3] && (f[b[1]] = parseInt(m[3], 10), m[5] && m[5].length >= 4 && (f[b[2]] = parseInt(m[5], 10))), f.month !== null && (f.month -= 1), f.day !== null && f.month !== null && f.year !== null) {
                if (f.day >= 1 && f.day <= 31 && f.month >= 0 && f.month <= 11 && f.year <= 2099) {
                    let D = new Date(f.year, f.month, f.day);
                    D.getDate() === f.day && D.getMonth() === f.month && D.getFullYear() === f.year && (a.SetDate(D, !1), w = !0)
                }
            } else if (f.day !== null && f.month !== null) {
                if (f.day >= 1 && f.day <= 31 && f.month >= 0 && f.month <= 11) {
                    let D = new Date(new Date().getFullYear(), f.month, f.day);
                    a.SetDate(D, !1), w = !0
                }
            } else if (f.day !== null && f.day >= 1 && f.day <= 31) {
                let D = new Date;
                D.setDate(f.day), a.SetDate(D, !1), w = !0
            }
        }
        if (!w && P) {
            let [f = "", D = "", p = ""] = (i.DateValue || "").split("/"), F = {
                day: f,
                month: D,
                year: p
            }, R = (I = F.day) != null ? I : 1, q = (O = F.month) != null ? O : 0, K = F.year || new Date().getFullYear(), k = new Date(K, q, R);
            (L = window.datePickerAPI[`#${i.WidgetID}`]) == null || L.setViewDate(k), a.SetDate(k, !1, !0)
        }
    }
    c(_, "handlePartialDateInput")
}
c(ge, "default");

function Se(i, a, d, e) {
    window.datePickerAPI.visible ? window.datePickerAPI[`#${i.WidgetID}`].hide() : window.datePickerAPI[`#${i.WidgetID}`].show()
}
c(Se, "default");
var n = x; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Me);
            var l = this.controller;
            this.clientActionProxies = {
                setDate$Action: c(function(o, u, v) {
                    return o = o === void 0 ? n.DataTypes.DateTime.defaultValue : o, u = u === void 0 ? !1 : u, v = v === void 0 ? !1 : v, l.executeActionInsideJSNode(l._setDate$Action.bind(l, n.DataConversion.JSNodeParamConverter.from(o, n.DataTypes.DataTypes.Date), n.DataConversion.JSNodeParamConverter.from(u, n.DataTypes.DataTypes.Boolean), n.DataConversion.JSNodeParamConverter.from(v, n.DataTypes.DataTypes.Boolean)), l.callContext(), function(s) {
                        return {}
                    }, function() {}, "SetDate")
                }, "setDate$Action"),
                dateFieldOnChange$Action: c(function(o) {
                    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(l._dateFieldOnChange$Action.bind(l, n.DataConversion.JSNodeParamConverter.from(o, n.DataTypes.DataTypes.Text)), l.callContext(), function(u) {
                        return {}
                    }, function() {}, "DateFieldOnChange")
                }, "dateFieldOnChange$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return n.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "30d3dc02-7ab1-43cb-b3e7-7452bed46c0d"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.widgets.get(l.getId("DateField")).validAttr = r.variables.errorMessageIn === n.BuiltinFunctions.nullTextIdentifier(), r.widgets.get(l.getId("DateField")).validationMessageAttr = r.variables.errorMessageIn
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return n.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "32a2c527-85a3-4596-9b4e-02b627a92b69"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), n.Logger.startActiveSpan("ClearDatePickerConfig", function(u) {
                            u && (u.setAttribute("code.function", "ClearDatePickerConfig"), u.setAttribute("outsystems.function.key", "cca2312c-92cd-440d-8fe9-70ba42a3baa1"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ye, "ClearDatePickerConfig", "OnDestroy", null, function(v) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "36385eab-b6c4-4084-b071-b4ca8ff729a1"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new n.DataTypes.VariableHolder,
                            v = new n.DataTypes.VariableHolder;
                        n.Logger.startActiveSpan("SetReadOnly", function(s) {
                            s && (s.setAttribute("code.function", "SetReadOnly"), s.setAttribute("outsystems.function.key", "4a95e0be-94d1-4dee-9d29-2c954d7b1048"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(me, "SetReadOnly", "OnReady", {
                                    AllowTyping: n.DataConversion.JSNodeParamConverter.to(r.variables.allowTypingIn, n.DataTypes.DataTypes.Boolean),
                                    InputId: n.DataConversion.JSNodeParamConverter.to(l.getId("DateField"), n.DataTypes.DataTypes.Text)
                                }, function(_) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), v.value = n.Logger.startActiveSpan("SetInitialDate", function(s) {
                            s && (s.setAttribute("code.function", "SetInitialDate"), s.setAttribute("outsystems.function.key", "8caffeae-5120-4dc9-aebd-b46a2b8f9255"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_e, "SetInitialDate", "OnReady", {
                                    InputDate: n.DataConversion.JSNodeParamConverter.to(r.variables.inputDateIn, n.DataTypes.DataTypes.Text),
                                    ShouldAllowEPOC: n.DataConversion.JSNodeParamConverter.to(r.variables.allowEPOCIn, n.DataTypes.DataTypes.Boolean),
                                    OutputDate: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(_) {
                                    var A = new(t.constructor.getVariableGroupType("dashboard.Common.DateInput.OnReady$setInitialDateJSResult"));
                                    return A.outputDateOut = n.DataConversion.JSNodeParamConverter.from(_.OutputDate, n.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), n.Logger.startActiveSpan("InitAirDatePickr", function(s) {
                            s && (s.setAttribute("code.function", "InitAirDatePickr"), s.setAttribute("outsystems.function.key", "78261684-0a49-4a79-87ec-ee65f007ace4"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ve, "InitAirDatePickr", "OnReady", {
                                    MinDate: n.DataConversion.JSNodeParamConverter.to(r.variables.minDateIn, n.DataTypes.DataTypes.Text),
                                    MaxDate: n.DataConversion.JSNodeParamConverter.to(r.variables.maxDateIn, n.DataTypes.DataTypes.Text),
                                    TodayMessage: n.DataConversion.JSNodeParamConverter.to(n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("aMllCm7LJEqbgJsebFwJQg#Value.80981793.1", "Today"), n.DataTypes.DataTypes.Text),
                                    InputDate: n.DataConversion.JSNodeParamConverter.to(v.value.outputDateOut, n.DataTypes.DataTypes.Text),
                                    WidgetID: n.DataConversion.JSNodeParamConverter.to(l.getId("DateField"), n.DataTypes.DataTypes.Text),
                                    ShowClear: n.DataConversion.JSNodeParamConverter.to(r.variables.showClearButtonIn, n.DataTypes.DataTypes.Boolean),
                                    DateFormat: n.DataConversion.JSNodeParamConverter.to(r.variables.dateFormatIn, n.DataTypes.DataTypes.Text),
                                    IsMobile: n.DataConversion.JSNodeParamConverter.to(r.variables.isMobileIn, n.DataTypes.DataTypes.Boolean),
                                    AllowTyping: n.DataConversion.JSNodeParamConverter.to(r.variables.allowTypingIn, n.DataTypes.DataTypes.Boolean),
                                    ClearMessage: n.DataConversion.JSNodeParamConverter.to(n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("JSE+pv0K7k+D1Ex+Qelqag#Value.65193517.1", "Clear"), n.DataTypes.DataTypes.Text),
                                    lang: n.DataConversion.JSNodeParamConverter.to(H.languageMapper$Action(!1, "", e).charCodeOut, n.DataTypes.DataTypes.Text)
                                }, function(_) {}, {
                                    GetMonthNamings: H.clientActionProxies.getMonthNamings$Action,
                                    GetDayNamings: H.clientActionProxies.getDayNamings$Action,
                                    SetDate: t.clientActionProxies.setDate$Action,
                                    DateFieldOnChange: t.clientActionProxies.dateFieldOnChange$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), u.value = n.Logger.startActiveSpan("Format", function(s) {
                            s && (s.setAttribute("code.function", "Format"), s.setAttribute("outsystems.function.key", "4320f412-ce6f-456f-86c0-de4311a7978b"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(De, "Format", "OnReady", {
                                    InputDate: n.DataConversion.JSNodeParamConverter.to(r.variables.inputDateIn, n.DataTypes.DataTypes.Text),
                                    DisplayDate: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(_) {
                                    var A = new(t.constructor.getVariableGroupType("dashboard.Common.DateInput.OnReady$formatJSResult"));
                                    return A.displayDateOut = n.DataConversion.JSNodeParamConverter.from(_.DisplayDate, n.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), r.variables.dateValueVar = u.value.displayDateOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _dateFieldOnChange$Action() {
            return this.hasOwnProperty("__dateFieldOnChange$Action") || (this.__dateFieldOnChange$Action = function(e, r) {
                var t = this.model,
                    l = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("DateFieldOnChange", function(u) {
                    u && (u.setAttribute("code.function", "DateFieldOnChange"), u.setAttribute("outsystems.function.key", "7131a567-9edb-4c57-a4f5-a7ac93938d57"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        l.ensureControllerAlive("DateFieldOnChange"), r = l.callContext(r);
                        var v = new n.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("dashboard.Common.DateInput.DateFieldOnChange$vars")));
                        v.value.dateValueCurrentInLocal = e, n.Logger.startActiveSpan("JavaScript2", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript2"), s.setAttribute("outsystems.function.key", "5c6cf7dc-c3fd-4362-8482-91264607f823"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(ge, "JavaScript2", "DateFieldOnChange", {
                                    WidgetID: n.DataConversion.JSNodeParamConverter.to(o.getId("DateField"), n.DataTypes.DataTypes.Text),
                                    DateFormat: n.DataConversion.JSNodeParamConverter.to(t.variables.dateFormatIn, n.DataTypes.DataTypes.Text),
                                    DateValue: n.DataConversion.JSNodeParamConverter.to(v.value.dateValueCurrentInLocal, n.DataTypes.DataTypes.Text)
                                }, function(_) {}, {
                                    SetDate: l.clientActionProxies.setDate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__dateFieldOnChange$Action
        }
        set _dateFieldOnChange$Action(e) {
            this.__dateFieldOnChange$Action = e
        }
        get _openCalendar$Action() {
            return this.hasOwnProperty("__openCalendar$Action") || (this.__openCalendar$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return n.Logger.startActiveSpan("openCalendar", function(o) {
                    o && (o.setAttribute("code.function", "openCalendar"), o.setAttribute("outsystems.function.key", "cba5e0c4-5366-4359-9419-d5ae7cc88278"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("openCalendar"), e = t.callContext(e);
                        var u = new n.DataTypes.VariableHolder;
                        n.Logger.startActiveSpan("ShowCalendar", function(v) {
                            v && (v.setAttribute("code.function", "ShowCalendar"), v.setAttribute("outsystems.function.key", "127afc08-f1f4-4bd4-92e4-a36e7cbada67"), v.setAttribute("outsystems.function.owner.name", "dashboard"), v.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Se, "ShowCalendar", "openCalendar", {
                                    WidgetID: n.DataConversion.JSNodeParamConverter.to(l.getId("DateField"), n.DataTypes.DataTypes.Text)
                                }, function(s) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), u.value = Pe.setFocus$Action(l.getId("DateField"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__openCalendar$Action
        }
        set _openCalendar$Action(e) {
            this.__openCalendar$Action = e
        }
        get _setDate$Action() {
            return this.hasOwnProperty("__setDate$Action") || (this.__setDate$Action = function(e, r, t, l) {
                var o = this.model,
                    u = this.controller,
                    v = this.idService;
                return n.Logger.startActiveSpan("SetDate", function(s) {
                    return s && (s.setAttribute("code.function", "SetDate"), s.setAttribute("outsystems.function.key", "db3b82a5-c4f0-4b07-b6e6-f7d261be4536"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        u.ensureControllerAlive("SetDate"), l = u.callContext(l);
                        var _ = new n.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("dashboard.Common.DateInput.SetDate$vars")));
                        return _.value.dateInLocal = e, _.value.showRequiredMsgInLocal = r, _.value.isInvalidInLocal = t, n.Flow.executeAsyncFlow(function() {
                            return u.emitDate$Action(_.value.dateInLocal, _.value.showRequiredMsgInLocal, _.value.isInvalidInLocal, l)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__setDate$Action
        }
        set _setDate$Action(e) {
            this.__setDate$Action = e
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "30d3dc02-7ab1-43cb-b3e7-7452bed46c0d"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "32a2c527-85a3-4596-9b4e-02b627a92b69"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "36385eab-b6c4-4084-b071-b4ca8ff729a1"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        dateFieldOnChange$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("DateFieldOnChange__proxy", function(l) {
                l && (l.setAttribute("code.function", "DateFieldOnChange"), l.setAttribute("outsystems.function.key", "7131a567-9edb-4c57-a4f5-a7ac93938d57"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._dateFieldOnChange$Action, r, e)
                } finally {
                    l && l.end()
                }
            }, 0)
        }
        openCalendar$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("openCalendar__proxy", function(t) {
                t && (t.setAttribute("code.function", "openCalendar"), t.setAttribute("outsystems.function.key", "cba5e0c4-5366-4359-9419-d5ae7cc88278"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._openCalendar$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setDate$Action(e, r, t, l) {
            var o = this.controller;
            return n.Logger.startActiveSpan("SetDate__proxy", function(u) {
                return u && (u.setAttribute("code.function", "SetDate"), u.setAttribute("outsystems.function.key", "db3b82a5-c4f0-4b07-b6e6-f7d261be4536"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._setDate$Action, l, e, r, t)
                }, function() {
                    u && u.end()
                })
            }, 0)
        }
        get emitDate$Action() {
            return this.hasOwnProperty("_emitDate$Action") || (this._emitDate$Action = function() {
                return Promise.resolve()
            }), this._emitDate$Action
        }
        set emitDate$Action(e) {
            this._emitDate$Action = e
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
                    l = this.idService;
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
                    l = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    l = this.idService;
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
            return H.defaultTimeout
        }
    };
    c(a, "ControllerInner");
    let i = a;
    B = i, B.registerVariableGroupType("dashboard.Common.DateInput.OnReady$formatJSResult", [{
        name: "DisplayDate",
        attrName: "displayDateOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), B.registerVariableGroupType("dashboard.Common.DateInput.OnReady$setInitialDateJSResult", [{
        name: "OutputDate",
        attrName: "outputDateOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), B.registerVariableGroupType("dashboard.Common.DateInput.DateFieldOnChange$vars", [{
        name: "DateValueCurrent",
        attrName: "dateValueCurrentInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), B.registerVariableGroupType("dashboard.Common.DateInput.SetDate$vars", [{
        name: "Date",
        attrName: "dateInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Date,
        defaultValue: c(function() {
            return n.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }, {
        name: "ShowRequiredMsg",
        attrName: "showRequiredMsgInLocal",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsInvalid",
        attrName: "isInvalidInLocal",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var B, Le = new n.Controller.ControllerFactory(B, U);
var ke = W.PlaceholderContent,
    ha = W.IteratorPlaceholderContent,
    yt = c(function() {
        var i = Y(function(a) {
            var d = a.model,
                e = a.controller,
                r = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                o = ee,
                u = te,
                v = {
                    props: a,
                    validateWidget: c(function(g) {
                        a.validateWidget(a, g)
                    }, "validateWidget")
                },
                s = d,
                _ = X,
                A = Z,
                T = j();
            return J.createElement("div", a.rootNodeProperties, J.createElement(ue, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, J.createElement(Ve, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: d.getCachedValue(r.getId("R9_gmdBvike759RV9c15BQ.Style"), function() {
                    return d.variables.labelIn === le.nullTextIdentifier() ? "hidden" : ""
                }, function() {
                    return d.variables.labelIn
                }),
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: s,
                style_dataFetchStatus: $.calculateDataFetchStatus(d.variables._labelInDataFetchStatus)
            }, J.createElement(Re, {
                value: d.variables.labelIn,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: s,
                value_dataFetchStatus: $.calculateDataFetchStatus(d.variables._labelInDataFetchStatus)
            })), J.createElement(ue, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: s
            }, J.createElement(ce, {
                getOwnerSpan: c(function() {
                    return T.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return T.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "custom-date-picker",
                    AlignIconRight: !0
                },
                events: {
                    _handleError: c(function(g) {
                        e.handleError(g)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    icon: new ke(function() {
                        return [J.createElement(xe, {
                            extendedEvents: {
                                onClick: c(function() {
                                    var g = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                    e.openCalendar$Action(e.callContext(g))
                                }, "onClick")
                            },
                            icon: "calendar-o",
                            iconSize: 0,
                            style: d.getCachedValue(r.getId("6JTPsa6+SUSHBalMVJfcMw.Style"), function() {
                                return "icon" + (d.variables.enabledIn ? "" : " date-input--disabled")
                            }, function() {
                                return d.variables.enabledIn
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "5"
                            },
                            _widgetRecordProvider: s,
                            style_dataFetchStatus: $.calculateDataFetchStatus(d.variables._enabledInDataFetchStatus)
                        })]
                    }),
                    input: new ke(function() {
                        return [J.createElement(Je, {
                            _validationProps: {
                                validationService: t
                            },
                            enabled: d.variables.enabledIn,
                            extendedProperties: {
                                inputmode: "numeric",
                                "data-testid": "date-picker"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: d.variables.requiredIn,
                            maxLength: 0,
                            onChange: c(function() {
                                var g = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                e.dateFieldOnChange$Action(d.variables.dateValueVar, e.callContext(g))
                            }, "onChange"),
                            prompt: d.getCachedValue(r.getId("DateField.Prompt"), function() {
                                return d.variables.placeholderIn !== le.nullTextIdentifier() ? d.variables.placeholderIn : d.variables.dateFormatIn
                            }, function() {
                                return d.variables.placeholderIn
                            }, function() {
                                return d.variables.dateFormatIn
                            }),
                            style: "form-control",
                            variable: d.createVariable(Fe.DataTypes.Text, d.variables.dateValueVar, function(g) {
                                d.variables.dateValueVar = g
                            }),
                            _idProps: {
                                service: r,
                                name: "DateField"
                            },
                            _widgetRecordProvider: s,
                            enabled_dataFetchStatus: $.calculateDataFetchStatus(d.variables._enabledInDataFetchStatus),
                            mandatory_dataFetchStatus: $.calculateDataFetchStatus(d.variables._requiredInDataFetchStatus),
                            prompt_dataFetchStatus: $.calculateDataFetchStatus(d.variables._placeholderInDataFetchStatus, d.variables._dateFormatInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [o(d.variables.requiredIn), o(d.variables.dateFormatIn), o(d.variables.placeholderIn), o(d.variables.dateValueVar), o(d.variables._requiredInDataFetchStatus), o(d.variables._dateFormatInDataFetchStatus), o(d.variables._placeholderInDataFetchStatus), o(d.variables._enabledInDataFetchStatus), o(d.variables.enabledIn)]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "DateInput",
                    functionKey: "d90691cc-15c4-4a4e-9932-910901752d7f",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.DateInput",
            modelFactory: Ne,
            controllerFactory: Le
        });
        return i.getCssDependencies = function() {
            return ["css/dashboard.Common.DateInput.css", "css/OutSystemsReactWidgets.css"]
        }, i.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.Dayjs.js", "scripts/dashboard.UserScripts.AirDatePicker.js"]
        }, i.getBlocks = function() {
            return [ce]
        }, i
    }, "componentFactory"),
    ba = yt();
var Be = we(Oe());
var V = x,
    Ie = class Ie extends V.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("WidgetId", "widgetIdIn", "WidgetId", !0, !1, V.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DebounceDelay", "debounceDelayIn", "DebounceDelay", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 350
            }, !1), this.attr("_debounceDelayInDataFetchStatus", "_debounceDelayInDataFetchStatus", "_debounceDelayInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(V.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(Ie, "VariablesRecord");
var re = Ie;
re.init();
var pe = class pe extends V.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(pe, "WidgetsRecord");
var Ce = pe,
    Ae = class Ae extends V.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return re
        }
        static getWidgetsRecordConstructor() {
            return Ce
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "WidgetId" in a && (this.variables.widgetIdIn = a.WidgetId, "_widgetIdInDataFetchStatus" in a && (this.variables._widgetIdInDataFetchStatus = a._widgetIdInDataFetchStatus)), "DebounceDelay" in a && (this.variables.debounceDelayIn = a.DebounceDelay, "_debounceDelayInDataFetchStatus" in a && (this.variables._debounceDelayInDataFetchStatus = a._debounceDelayInDataFetchStatus))
        }
    };
c(Ae, "Model");
var oe = Ae;
oe._hasValidationWidgetsValue = void 0;
var $e = new V.Model.ModelFactory(oe);
var He = {};

function Te(i, a, d, e) {
    osDebounce(a.CallEvent, i.WidgetId, i.DebounceDelay)
}
c(Te, "default");
var C = x; {
    let a = class a extends C.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, He);
            var l = this.controller;
            this.clientActionProxies = {
                callEvent$Action: c(function() {
                    return l.executeActionInsideJSNode(l._callEvent$Action.bind(l), l.callContext(), function(o) {
                        return {}
                    }, function() {}, "CallEvent")
                }, "callEvent$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _callEvent$Action() {
            return this.hasOwnProperty("__callEvent$Action") || (this.__callEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return C.Logger.startActiveSpan("CallEvent", function(o) {
                    return o && (o.setAttribute("code.function", "CallEvent"), o.setAttribute("outsystems.function.key", "a0c79a11-f9cd-4301-bd8c-2120f0184207"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CallEvent"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
                            return t.onDebounce$Action(e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__callEvent$Action
        }
        set _callEvent$Action(e) {
            this.__callEvent$Action = e
        }
        get _createDebounce$Action() {
            return this.hasOwnProperty("__createDebounce$Action") || (this.__createDebounce$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return C.Logger.startActiveSpan("CreateDebounce", function(o) {
                    o && (o.setAttribute("code.function", "CreateDebounce"), o.setAttribute("outsystems.function.key", "bdb5c479-0c10-4f08-b7bb-2cfa8af8a9e3"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CreateDebounce"), e = t.callContext(e), C.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "dd15ed54-8f09-4cd2-8e18-1196cee24402"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Te, "JavaScript1", "CreateDebounce", {
                                    DebounceDelay: C.DataConversion.JSNodeParamConverter.to(r.variables.debounceDelayIn.toString(), C.DataTypes.DataTypes.Text),
                                    WidgetId: C.DataConversion.JSNodeParamConverter.to(r.variables.widgetIdIn, C.DataTypes.DataTypes.Text)
                                }, function(v) {}, {
                                    CallEvent: t.clientActionProxies.callEvent$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__createDebounce$Action
        }
        set _createDebounce$Action(e) {
            this.__createDebounce$Action = e
        }
        callEvent$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("CallEvent__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CallEvent"), t.setAttribute("outsystems.function.key", "a0c79a11-f9cd-4301-bd8c-2120f0184207"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._callEvent$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        createDebounce$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("CreateDebounce__proxy", function(t) {
                t && (t.setAttribute("code.function", "CreateDebounce"), t.setAttribute("outsystems.function.key", "bdb5c479-0c10-4f08-b7bb-2cfa8af8a9e3"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._createDebounce$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onDebounce$Action() {
            return this.hasOwnProperty("_onDebounce$Action") || (this._onDebounce$Action = function() {
                return Promise.resolve()
            }), this._onDebounce$Action
        }
        set onDebounce$Action(e) {
            this._onDebounce$Action = e
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
                    l = this.idService;
                return r.createDebounce$Action(e)
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
            return H.defaultTimeout
        }
    };
    c(a, "ControllerInner");
    let i = a;
    qe = i
}
var qe, We = new C.Controller.ControllerFactory(qe, U);
var $a = W.PlaceholderContent,
    Ha = W.IteratorPlaceholderContent,
    Dt = c(function() {
        var i = Y(function(a) {
            var d = a.model,
                e = a.controller,
                r = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                o = ee,
                u = te,
                v = {
                    props: a,
                    validateWidget: c(function(g) {
                        a.validateWidget(a, g)
                    }, "validateWidget")
                },
                s = d,
                _ = X,
                A = Z,
                T = j();
            return Be.createElement("div", a.rootNodeProperties, _(!1, !1, this, function() {
                return []
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "Debounce",
                    functionKey: "f5b950e7-0b64-4825-8e6b-0a1d4ede3124",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Onboarding.Debounce",
            modelFactory: $e,
            controllerFactory: We
        });
        return i.getCssDependencies = function() {
            return []
        }, i.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.Debounce.js"]
        }, i.getBlocks = function() {
            return []
        }, i
    }, "componentFactory"),
    qa = Dt();
export {
    ba as a, qa as b
};