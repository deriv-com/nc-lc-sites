import {
    a as xe
} from "./_oschunk-RTFWHKPU.js";
import {
    a as be
} from "./_oschunk-OHBILT46.js";
import {
    a as ee
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as J
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as te
} from "./_oschunk-4ZYYVQOE.js";
import {
    a as re
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as Z,
    f as h,
    h as H,
    l as le,
    n as F,
    o as $,
    p as B,
    q,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Re,
    g as L,
    m as Q,
    n as yt,
    o as pe,
    q as K,
    r as Y,
    s as X,
    t as G
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as de,
    E as Ve,
    Ea as me,
    M as se,
    Qb as W,
    Sb as T,
    U as Ie,
    Za as ge,
    a as ae,
    ba as fe,
    db as gt,
    g as vt,
    q as mt,
    tb as ye,
    ub as f,
    za as ve
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as l,
    e as Ee,
    m as R,
    n as x,
    p as M,
    v as N,
    w as O
} from "./_oschunk-M5BUVJ72.js";
var Ot = {
        "Ldd_kILFGUC9yG4BzUu8VA#Title": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv",
        "Ldd_kILFGUC9yG4BzUu8VA#TitleExpression.-1648935080.1": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv"
    },
    pt = {
        "ar-001": {
            translations: Ot,
            isRTL: !0
        }
    };
var ne = E; {
    let g = class g extends ne.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, pt);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _mT5OTPBlockOnOtpVerifyStatusChange$Action() {
            return this.hasOwnProperty("__mT5OTPBlockOnOtpVerifyStatusChange$Action") || (this.__mT5OTPBlockOnOtpVerifyStatusChange$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return ne.Logger.startActiveSpan("MT5OTPBlockOnOtpVerifyStatusChange", function(u) {
                    u && (u.setAttribute("code.function", "MT5OTPBlockOnOtpVerifyStatusChange"), u.setAttribute("outsystems.function.key", "fcb12408-9e16-496d-9572-f5e9c4271b7d"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("MT5OTPBlockOnOtpVerifyStatusChange"), t = i.callContext(t);
                        var d = new ne.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5ResetPassword.MT5OTPBlockOnOtpVerifyStatusChange$vars")));
                        d.value.statusInLocal = e, T.consoleLog$Action(d.value.statusInLocal ? "True" : "False", t), r.variables.otpVerifiedVar = d.value.statusInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__mT5OTPBlockOnOtpVerifyStatusChange$Action
        }
        set _mT5OTPBlockOnOtpVerifyStatusChange$Action(e) {
            this.__mT5OTPBlockOnOtpVerifyStatusChange$Action = e
        }
        mT5OTPBlockOnOtpVerifyStatusChange$Action(e, t) {
            var r = this.controller;
            return ne.Logger.startActiveSpan("MT5OTPBlockOnOtpVerifyStatusChange__proxy", function(i) {
                i && (i.setAttribute("code.function", "MT5OTPBlockOnOtpVerifyStatusChange"), i.setAttribute("outsystems.function.key", "fcb12408-9e16-496d-9572-f5e9c4271b7d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._mT5OTPBlockOnOtpVerifyStatusChange$Action, t, e)
                } finally {
                    i && i.end()
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
                return xe.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    l(g, "ControllerInner");
    let m = g;
    De = m, De.registerVariableGroupType("uae.MT5Flow.MT5ResetPassword.MT5OTPBlockOnOtpVerifyStatusChange$vars", [{
        name: "status",
        attrName: "statusInLocal",
        mandatory: !0,
        dataType: ne.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var De, Me = new ne.Controller.ControllerFactory(De, j);
var Te = Ee(Re());
var P = E,
    $e = class $e extends P.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("password", "passwordVar", "password", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("passwordConfirmation", "passwordConfirmationVar", "passwordConfirmation", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isExecuting", "isExecutingVar", "isExecuting", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showConfirmPassword", "showConfirmPasswordVar", "showConfirmPassword", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TextVar", "textVarVar", "TextVar", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("from", "fromIn", "from", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(P.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l($e, "VariablesRecord");
var _e = $e;
_e.init();
var We = class We extends P.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DesktopForm: P.Model.ValidationWidgetRecord,
            Input_TextVar: P.Model.ValidationWidgetRecord,
            PasswordInputDesktop: P.Model.ValidationWidgetRecord,
            PasswordConfirmInputDesktop: P.Model.ValidationWidgetRecord,
            MobileForm: P.Model.ValidationWidgetRecord,
            Input_TextVar2: P.Model.ValidationWidgetRecord,
            PasswordInputMobile: P.Model.ValidationWidgetRecord,
            PasswordConfirmInputMobile: P.Model.ValidationWidgetRecord
        }
    }
};
l(We, "WidgetsRecord");
var Fe = We,
    Le = class Le extends P.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _e
        }
        static getWidgetsRecordConstructor() {
            return Fe
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(g) {
            "from" in g && (this.variables.fromIn = g.from, "_fromInDataFetchStatus" in g && (this.variables._fromInDataFetchStatus = g._fromInDataFetchStatus))
        }
    };
l(Le, "Model");
var he = Le;
he._hasValidationWidgetsValue = void 0;
var bt = new P.Model.ModelFactory(he);
var S = E,
    Je = class Je extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("otp", "otpVar", "otp", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("verify_request", "verify_requestVar", "verify_request", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new Ie)
            }, !1, Ie), this.attr("enable_resend", "enable_resendVar", "enable_resend", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ClientProfile", "clientProfileVar", "ClientProfile", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new se)
            }, !1, se), this.attr("Timer", "timerVar", "Timer", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("account_type", "account_typeVar", "account_type", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_switching", "is_switchingVar", "is_switching", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("email", "emailIn", "email", !0, !1, S.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("phone", "phoneIn", "phone", !0, !1, S.DataTypes.DataTypes.PhoneNumber, function() {
                return ""
            }, !1), this.attr("_phoneInDataFetchStatus", "_phoneInDataFetchStatus", "_phoneInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from", "fromIn", "from", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from_section", "from_sectionIn", "from_section", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Je, "VariablesRecord");
var Ae = Je;
Ae.init();
var Ue = class Ue extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: S.Model.ValidationWidgetRecord,
            Desktop_Input: S.Model.ValidationWidgetRecord,
            Mobile_Input: S.Model.ValidationWidgetRecord
        }
    }
};
l(Ue, "WidgetsRecord");
var He = Ue,
    Xe = class Xe extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ae
        }
        static getWidgetsRecordConstructor() {
            return He
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(g) {
            "email" in g && (this.variables.emailIn = g.email, "_emailInDataFetchStatus" in g && (this.variables._emailInDataFetchStatus = g._emailInDataFetchStatus)), "phone" in g && (this.variables.phoneIn = g.phone, "_phoneInDataFetchStatus" in g && (this.variables._phoneInDataFetchStatus = g._phoneInDataFetchStatus)), "from" in g && (this.variables.fromIn = g.from, "_fromInDataFetchStatus" in g && (this.variables._fromInDataFetchStatus = g._fromInDataFetchStatus)), "from_section" in g && (this.variables.from_sectionIn = g.from_section, "_from_sectionInDataFetchStatus" in g && (this.variables._from_sectionInDataFetchStatus = g._from_sectionInDataFetchStatus))
        }
    };
l(Xe, "Model");
var we = Xe;
we._hasValidationWidgetsValue = void 0;
var ht = new S.Model.ModelFactory(we);
var I = E,
    ze = class ze extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("otpVerified", "otpVerifiedVar", "otpVerified", !0, !1, I.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("from", "fromIn", "from", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from_section", "from_sectionIn", "from_section", !0, !1, I.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", !0, !1, I.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(ze, "VariablesRecord");
var Ce = ze;
Ce.init();
var je = class je extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(je, "WidgetsRecord");
var Ge = je,
    ie = class ie extends I.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ce
        }
        static getWidgetsRecordConstructor() {
            return Ge
        }
        static get hasValidationWidgets() {
            return ie._hasValidationWidgetsValue === void 0 && (ie._hasValidationWidgetsValue = void 0 || void 0), ie._hasValidationWidgetsValue
        }
        setInputs(g) {
            "from" in g && (this.variables.fromIn = I.DataConversion.ServerDataConverter.from(g.from, I.DataTypes.DataTypes.Text)), "from_section" in g && (this.variables.from_sectionIn = I.DataConversion.ServerDataConverter.from(g.from_section, I.DataTypes.DataTypes.Text))
        }
    };
l(ie, "Model");
var Se = ie;
Se._hasValidationWidgetsValue = void 0;
var qe = new I.Model.ModelFactory(Se);
var _ = Ee(Re());
var Et = {
        "ba5Vhr4evUKXKw9wil0vuA#Value": "\u062A\u0623\u0643\u064A\u062F",
        "YCx1IrJGwk65VOlxpzqcjQ#Value": "\u062A\u0623\u0643\u064A\u062F",
        "M3DFL5hnc0ObDoK4DvXDqg#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "AruFip1n9UicAvPFoDldYA#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5",
        "tuLjmjd8wEy4OdPBB5S6qA#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "CglADivwt0+j+hHgMZw0Lg#Value": "\u062A\u0623\u0643\u064A\u062F",
        "jPgIf9PR70eYLbBkFkdgeg#Value": "\u062A\u0623\u0643\u064A\u062F",
        "1wZTgrQ1Ok+RqJJt91ppVw#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "SaEqFXRG2Ea48OVRHW1M4A#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5",
        "ttysgiEZFk2uP2m+xNM8TA#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "Z5jHEhumNkGfvCH0AsvAZA#Value.-556879795.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629",
        "p_I7qy+LgkKMLimRdia0IA#Value.-556879795.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629",
        "t3nlp8yzw06dpe5qnOYJmw#Value.-556879795.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629",
        "PDg0Vyz2zkWjFVDMBvQ63A#Message.1521643001.1": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
        "KU46KPH0sESrWlh0MpdNpw#Message.1521643001.1": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
        "OAPINLDVUESfBv2pKCsp6A#Value.-556879795.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629"
    },
    At = {
        "ar-001": {
            translations: Et,
            isRTL: !0
        }
    };

function Qe(m, g, a, e) {
    let t = {
        length: m.password.length >= 8 && m.password.length <= 16,
        lowercase: /[a-z]/.test(m.password),
        uppercase: /[A-Z]/.test(m.password),
        numbers: /[0-9]/.test(m.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m.password),
        noSpaces: !/\s/.test(m.password)
    };
    m.isValid = Object.values(t).every(r => r === !0)
}
l(Qe, "default");

function Ke(m, g, a, e) {
    let t = {
        length: m.password.length >= 8 && m.password.length <= 16,
        lowercase: /[a-z]/.test(m.password),
        uppercase: /[A-Z]/.test(m.password),
        numbers: /[0-9]/.test(m.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m.password),
        noSpaces: !/\s/.test(m.password)
    };
    m.isValid = Object.values(t).every(r => r === !0)
}
l(Ke, "default");

function Ye(m, g, a, e) {
    let t = {
        length: m.password.length >= 8 && m.password.length <= 16,
        lowercase: /[a-z]/.test(m.password),
        uppercase: /[A-Z]/.test(m.password),
        numbers: /[0-9]/.test(m.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m.password),
        noSpaces: !/\s/.test(m.password)
    };
    m.isValid = Object.values(t).every(r => r === !0)
}
l(Ye, "default");

function Ze(m, g, a, e) {
    let t = {
        length: m.password.length >= 8 && m.password.length <= 16,
        lowercase: /[a-z]/.test(m.password),
        uppercase: /[A-Z]/.test(m.password),
        numbers: /[0-9]/.test(m.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m.password),
        noSpaces: !/\s/.test(m.password)
    };
    m.isValid = Object.values(t).every(r => r === !0)
}
l(Ze, "default");
var v = E; {
    let g = class g extends v.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, At);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get mT5ChangePassword$ServerAction() {
            return this.hasOwnProperty("_mT5ChangePassword$ServerAction") || (this._mT5ChangePassword$ServerAction = function(e, t, r) {
                var i = this.controller;
                return v.Logger.startActiveSpan("MT5ChangePassword", function(n) {
                    return n && (n.setAttribute("code.function", "MT5ChangePassword"), n.setAttribute("outsystems.function.key", "04580a1b-4466-44a4-bbc0-92ccf9644ab4"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), v.Flow.tryFinally(function() {
                        var u = {
                            authorization: v.DataConversion.ServerDataConverter.to(e, v.DataTypes.DataTypes.Text),
                            Request: v.DataConversion.ServerDataConverter.to(t, v.DataTypes.DataTypes.Record)
                        };
                        return i.callServerAction("MT5ChangePassword", "screenservices/uae/MT5Flow/ResetPasswordView/ActionMT5ChangePassword", "rrwNCR_SwRNEmRLk52fFWA", u, i.callContext(r), void 0, void 0, !0).then(function(d) {
                            var s = new(i.constructor.getVariableGroupType("uae.MT5Flow.ResetPasswordView$ActionMT5ChangePassword"));
                            return s.responseOut = v.DataConversion.ServerDataConverter.from(d.Response, fe), s
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._mT5ChangePassword$ServerAction
        }
        set mT5ChangePassword$ServerAction(e) {
            this._mT5ChangePassword$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onCloseEvent$Action() {
            return this.hasOwnProperty("__onCloseEvent$Action") || (this.__onCloseEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnCloseEvent", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseEvent"), n.setAttribute("outsystems.function.key", "22f1424e-863e-4067-964e-6a8ec504b413"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("OnCloseEvent"), e = r.callContext(e), v.Navigation.navigateTo(v.Navigation.generateScreenURL("uae", "mt5/login-details", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onCloseEvent$Action
        }
        set _onCloseEvent$Action(e) {
            this.__onCloseEvent$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnClickShowPassword", function(n) {
                    n && (n.setAttribute("code.function", "OnClickShowPassword"), n.setAttribute("outsystems.function.key", "2baddf2a-be02-4f2f-a06b-77a3ee42deed"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnClickShowPassword"), e = r.callContext(e), t.variables.showPasswordVar ? t.variables.showPasswordVar = !1 : t.variables.showPasswordVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "3d5129fa-716d-4fdf-8c15-214aff9014fd"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e), t.widgets.get(i.getId("PasswordConfirmInputMobile")).validAttr = !1, t.widgets.get(i.getId("PasswordInputDesktop")).validAttr = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _passwordInputOnChangeMobile$Action() {
            return this.hasOwnProperty("__passwordInputOnChangeMobile$Action") || (this.__passwordInputOnChangeMobile$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("PasswordInputOnChangeMobile", function(n) {
                    n && (n.setAttribute("code.function", "PasswordInputOnChangeMobile"), n.setAttribute("outsystems.function.key", "479af8e3-9225-424d-995a-682c3e8114f9"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordInputOnChangeMobile"), e = r.callContext(e);
                        var u = new v.DataTypes.VariableHolder;
                        u.value = v.Logger.startActiveSpan("validatePassword", function(d) {
                            d && (d.setAttribute("code.function", "validatePassword"), d.setAttribute("outsystems.function.key", "d4f2fa62-ecf4-4dec-8a9d-b3a2748e9c92"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Qe, "validatePassword", "PasswordInputOnChangeMobile", {
                                    password: v.DataConversion.JSNodeParamConverter.to(t.variables.passwordVar, v.DataTypes.DataTypes.Text),
                                    isValid: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var w = new(r.constructor.getVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordInputOnChangeMobile$validatePasswordJSResult"));
                                    return w.isValidOut = v.DataConversion.JSNodeParamConverter.from(s.isValid, v.DataTypes.DataTypes.Boolean), w
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), t.widgets.get(i.getId("PasswordInputMobile")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordInputMobile")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputMobile")).validationMessageAttr = t.variables.passwordConfirmationVar !== v.BuiltinFunctions.nullTextIdentifier() ? t.variables.passwordVar === t.variables.passwordConfirmationVar ? "" : v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("OAPINLDVUESfBv2pKCsp6A#Value.-556879795.1", "Passwords don't match") : ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__passwordInputOnChangeMobile$Action
        }
        set _passwordInputOnChangeMobile$Action(e) {
            this.__passwordInputOnChangeMobile$Action = e
        }
        get _confirmOnClick$Action() {
            return this.hasOwnProperty("__confirmOnClick$Action") || (this.__confirmOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("ConfirmOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ConfirmOnClick"), n.setAttribute("outsystems.function.key", "51cdf414-cfae-4cf3-ba27-acde3662349c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        r.ensureControllerAlive("ConfirmOnClick"), e = r.callContext(e);
                        var u = new v.DataTypes.VariableHolder(new v.DataTypes.ErrorHandlerOutputType),
                            d = new v.DataTypes.VariableHolder,
                            s = new v.DataTypes.VariableHolder,
                            w = new v.DataTypes.VariableHolder(new(v.Controller.BaseController.getJSONDeserializeOutputType(Ve)));
                        return v.Flow.executeAsyncFlow(function() {
                            return s.value = T.getAuth$Action(e), t.variables.isExecutingVar = !0, w.value.dataOut = v.JSONUtils.deserializeFromJSON(f.getSelectedAccountDetails(), Ve, !1), t.flush(), r.mT5ChangePassword$ServerAction(s.value.tokenOut, (function() {
                                var b = new mt;
                                return b.passwordAttr = t.variables.passwordVar, b.platform_account_idAttr = w.value.dataOut.platform_account_idAttr, b
                            })(), e).then(function(b) {
                                d.value = b
                            }).then(function() {
                                if (!d.value.responseOut.errorsAttr.isEmpty) v.FeedbackMessageService.showFeedbackMessage(v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("KU46KPH0sESrWlh0MpdNpw#Message.1521643001.1", "Failed to reset your password."), 3), t.variables.isExecutingVar = !1;
                                else return t.variables.isExecutingVar = !1, v.Flow.returnAsync(v.Navigation.navigateTo(v.Navigation.generateScreenURL("uae", "mt5/reset-password/success", {
                                    from: v.DataConversion.ServerDataConverter.to(t.variables.fromIn, v.DataTypes.DataTypes.Text)
                                }), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        }).catch(function(b) {
                            if (v.Logger.debug("ResetPasswordView.ConfirmOnClick", v.Exceptions.getMessage(b)), !v.Exceptions.isSystem(b)) return v.Logger.error(null, b, null, null, 1), u.value.exceptionMessageAttr = v.Exceptions.getMessage(b), v.Logger.startActiveSpan("AllExceptions", function(A) {
                                return A && (A.setAttribute("code.function", "AllExceptions"), A.setAttribute("outsystems.function.key", "f917a101-1608-4a14-b166-54408c9a1524"), A.setAttribute("outsystems.function.owner.name", "uae"), A.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), A.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), v.Flow.tryFinally(function() {
                                    return v.Flow.executeAsyncFlow(function() {
                                        return v.FeedbackMessageService.showFeedbackMessage(v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("PDg0Vyz2zkWjFVDMBvQ63A#Message.1521643001.1", "Failed to reset your password."), 3), t.variables.isExecutingVar = !1, v.Flow.returnAsync()
                                    })
                                }, function() {
                                    A && A.end()
                                })
                            }, 1);
                            throw b
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__confirmOnClick$Action
        }
        set _confirmOnClick$Action(e) {
            this.__confirmOnClick$Action = e
        }
        get _passwordConfirmInputOnChangeMobile$Action() {
            return this.hasOwnProperty("__passwordConfirmInputOnChangeMobile$Action") || (this.__passwordConfirmInputOnChangeMobile$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("PasswordConfirmInputOnChangeMobile", function(n) {
                    n && (n.setAttribute("code.function", "PasswordConfirmInputOnChangeMobile"), n.setAttribute("outsystems.function.key", "954316b9-aa46-436e-8f9c-da6acd5be71b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordConfirmInputOnChangeMobile"), e = r.callContext(e);
                        var u = new v.DataTypes.VariableHolder;
                        u.value = v.Logger.startActiveSpan("validatePassword", function(d) {
                            d && (d.setAttribute("code.function", "validatePassword"), d.setAttribute("outsystems.function.key", "cae36da9-ebdf-4a65-a701-bcc78f46d7b7"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ke, "validatePassword", "PasswordConfirmInputOnChangeMobile", {
                                    password: v.DataConversion.JSNodeParamConverter.to(t.variables.passwordConfirmationVar, v.DataTypes.DataTypes.Text),
                                    isValid: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var w = new(r.constructor.getVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordConfirmInputOnChangeMobile$validatePasswordJSResult"));
                                    return w.isValidOut = v.DataConversion.JSNodeParamConverter.from(s.isValid, v.DataTypes.DataTypes.Boolean), w
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), t.widgets.get(i.getId("PasswordConfirmInputMobile")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputMobile")).validAttr = t.variables.passwordVar === t.variables.passwordConfirmationVar && u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputMobile")).validationMessageAttr = t.variables.passwordVar === t.variables.passwordConfirmationVar ? "" : v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("t3nlp8yzw06dpe5qnOYJmw#Value.-556879795.1", "Passwords don't match")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__passwordConfirmInputOnChangeMobile$Action
        }
        set _passwordConfirmInputOnChangeMobile$Action(e) {
            this.__passwordConfirmInputOnChangeMobile$Action = e
        }
        get _passwordConfirmInputOnChangeDesktop$Action() {
            return this.hasOwnProperty("__passwordConfirmInputOnChangeDesktop$Action") || (this.__passwordConfirmInputOnChangeDesktop$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("PasswordConfirmInputOnChangeDesktop", function(n) {
                    n && (n.setAttribute("code.function", "PasswordConfirmInputOnChangeDesktop"), n.setAttribute("outsystems.function.key", "a8ef08d9-e8db-44c9-87f1-255a462d693a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordConfirmInputOnChangeDesktop"), e = r.callContext(e);
                        var u = new v.DataTypes.VariableHolder;
                        u.value = v.Logger.startActiveSpan("validatePassword", function(d) {
                            d && (d.setAttribute("code.function", "validatePassword"), d.setAttribute("outsystems.function.key", "c9aeca4b-e980-4bc1-b03c-27518dbe7937"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ye, "validatePassword", "PasswordConfirmInputOnChangeDesktop", {
                                    password: v.DataConversion.JSNodeParamConverter.to(t.variables.passwordConfirmationVar, v.DataTypes.DataTypes.Text),
                                    isValid: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var w = new(r.constructor.getVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordConfirmInputOnChangeDesktop$validatePasswordJSResult"));
                                    return w.isValidOut = v.DataConversion.JSNodeParamConverter.from(s.isValid, v.DataTypes.DataTypes.Boolean), w
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), t.widgets.get(i.getId("PasswordConfirmInputDesktop")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputDesktop")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputDesktop")).validationMessageAttr = t.variables.passwordVar === t.variables.passwordConfirmationVar ? "" : v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("p_I7qy+LgkKMLimRdia0IA#Value.-556879795.1", "Passwords don't match")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__passwordConfirmInputOnChangeDesktop$Action
        }
        set _passwordConfirmInputOnChangeDesktop$Action(e) {
            this.__passwordConfirmInputOnChangeDesktop$Action = e
        }
        get _passwordInputOnChangeDesktop$Action() {
            return this.hasOwnProperty("__passwordInputOnChangeDesktop$Action") || (this.__passwordInputOnChangeDesktop$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("PasswordInputOnChangeDesktop", function(n) {
                    n && (n.setAttribute("code.function", "PasswordInputOnChangeDesktop"), n.setAttribute("outsystems.function.key", "c129a7e2-73d5-4c40-b436-a47369a0e917"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordInputOnChangeDesktop"), e = r.callContext(e);
                        var u = new v.DataTypes.VariableHolder;
                        u.value = v.Logger.startActiveSpan("validatePassword", function(d) {
                            d && (d.setAttribute("code.function", "validatePassword"), d.setAttribute("outsystems.function.key", "00f3093a-69f8-4d70-b0ff-b0f80f2c0c6f"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ze, "validatePassword", "PasswordInputOnChangeDesktop", {
                                    password: v.DataConversion.JSNodeParamConverter.to(t.variables.passwordVar, v.DataTypes.DataTypes.Text),
                                    isValid: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var w = new(r.constructor.getVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordInputOnChangeDesktop$validatePasswordJSResult"));
                                    return w.isValidOut = v.DataConversion.JSNodeParamConverter.from(s.isValid, v.DataTypes.DataTypes.Boolean), w
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), t.widgets.get(i.getId("PasswordInputDesktop")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordInputDesktop")).validAttr = u.value.isValidOut, t.widgets.get(i.getId("PasswordConfirmInputDesktop")).validationMessageAttr = t.variables.passwordConfirmationVar !== v.BuiltinFunctions.nullTextIdentifier() ? t.variables.passwordVar === t.variables.passwordConfirmationVar ? "" : v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("Z5jHEhumNkGfvCH0AsvAZA#Value.-556879795.1", "Passwords don't match") : ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__passwordInputOnChangeDesktop$Action
        }
        set _passwordInputOnChangeDesktop$Action(e) {
            this.__passwordInputOnChangeDesktop$Action = e
        }
        get _onClickShowConfirmPassword$Action() {
            return this.hasOwnProperty("__onClickShowConfirmPassword$Action") || (this.__onClickShowConfirmPassword$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnClickShowConfirmPassword", function(n) {
                    n && (n.setAttribute("code.function", "OnClickShowConfirmPassword"), n.setAttribute("outsystems.function.key", "e71d3540-e62d-4a53-88b8-59fb9199f4d2"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnClickShowConfirmPassword"), e = r.callContext(e), t.variables.showConfirmPasswordVar ? t.variables.showConfirmPasswordVar = !1 : t.variables.showConfirmPasswordVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickShowConfirmPassword$Action
        }
        set _onClickShowConfirmPassword$Action(e) {
            this.__onClickShowConfirmPassword$Action = e
        }
        onCloseEvent$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OnCloseEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnCloseEvent"), r.setAttribute("outsystems.function.key", "22f1424e-863e-4067-964e-6a8ec504b413"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onCloseEvent$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OnClickShowPassword__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickShowPassword"), r.setAttribute("outsystems.function.key", "2baddf2a-be02-4f2f-a06b-77a3ee42deed"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickShowPassword$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "3d5129fa-716d-4fdf-8c15-214aff9014fd"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        passwordInputOnChangeMobile$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("PasswordInputOnChangeMobile__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordInputOnChangeMobile"), r.setAttribute("outsystems.function.key", "479af8e3-9225-424d-995a-682c3e8114f9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordInputOnChangeMobile$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        confirmOnClick$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("ConfirmOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ConfirmOnClick"), r.setAttribute("outsystems.function.key", "51cdf414-cfae-4cf3-ba27-acde3662349c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._confirmOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        passwordConfirmInputOnChangeMobile$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("PasswordConfirmInputOnChangeMobile__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordConfirmInputOnChangeMobile"), r.setAttribute("outsystems.function.key", "954316b9-aa46-436e-8f9c-da6acd5be71b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordConfirmInputOnChangeMobile$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        passwordConfirmInputOnChangeDesktop$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("PasswordConfirmInputOnChangeDesktop__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordConfirmInputOnChangeDesktop"), r.setAttribute("outsystems.function.key", "a8ef08d9-e8db-44c9-87f1-255a462d693a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordConfirmInputOnChangeDesktop$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        passwordInputOnChangeDesktop$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("PasswordInputOnChangeDesktop__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordInputOnChangeDesktop"), r.setAttribute("outsystems.function.key", "c129a7e2-73d5-4c40-b436-a47369a0e917"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordInputOnChangeDesktop$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickShowConfirmPassword$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OnClickShowConfirmPassword__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickShowConfirmPassword"), r.setAttribute("outsystems.function.key", "e71d3540-e62d-4a53-88b8-59fb9199f4d2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickShowConfirmPassword$Action, e)
                } finally {
                    r && r.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    i = this.idService;
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
            return T.defaultTimeout
        }
    };
    l(g, "ControllerInner");
    let m = g;
    z = m, z.registerVariableGroupType("uae.MT5Flow.ResetPasswordView$ActionMT5ChangePassword", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: v.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new fe
        }, "defaultValue"),
        complexType: fe
    }]), z.registerVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordInputOnChangeMobile$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), z.registerVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordConfirmInputOnChangeMobile$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), z.registerVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordConfirmInputOnChangeDesktop$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), z.registerVariableGroupType("uae.MT5Flow.ResetPasswordView.PasswordInputOnChangeDesktop$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var z, wt = new v.Controller.ControllerFactory(z, j);
var k = L.PlaceholderContent,
    Kr = L.IteratorPlaceholderContent,
    It = l(function() {
        var m = pe(function(g) {
            var a = g.model,
                e = g.controller,
                t = g.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                n = X,
                u = G,
                d = {
                    props: g,
                    validateWidget: l(function(c) {
                        g.validateWidget(g, c)
                    }, "validateWidget")
                },
                s = a,
                w = Y,
                b = K,
                A = Q();
            return _.createElement("div", g.rootNodeProperties, w(W.isDesktop$Action(i).isDesktopOut, !1, this, function() {
                return [_.createElement(re, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !1,
                        ShowClosebutton: !0,
                        ShowInfoButton: !1
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        closeBtnEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.onCloseEvent$Action(e.callContext(c))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        contentbody: new k(function() {
                            return [_.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(le, {
                                _validationProps: {
                                    validationService: r
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 40px; margin-right: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                style: '"form card"',
                                _idProps: {
                                    service: t,
                                    name: "DesktopForm"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                extendedProperties: {
                                    style: "---comment-2: /* mobile/heading/h3 */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: s
                            }, b(u("ttysgiEZFk2uP2m+xNM8TA#Value", "Reset MT5 password"))), _.createElement(B, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: s
                            }, b(u("SaEqFXRG2Ea48OVRHW1M4A#Value", "This will reset the password to all of your MT5 accounts."))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "UsernameInput"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement($, {
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("DesktopForm")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    autoComplete: "username"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 50,
                                style: "form-control",
                                variable: a.createVariable(N.DataTypes.Text, a.variables.textVarVar, function(c) {
                                    a.variables.textVarVar = c
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Input_TextVar"
                                },
                                _widgetRecordProvider: s
                            })), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 48p; margin-top: 48px;"
                                },
                                style: "flex flex-col gap-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "PasswordFieldDesktop"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordInputDesktop",
                                _idProps: {
                                    service: t,
                                    name: "FieldLabel3"
                                },
                                _widgetRecordProvider: s
                            }, b(u("1wZTgrQ1Ok+RqJJt91ppVw#Value", "New password"))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(te, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: f.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("DesktopForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "11",
                                    alias: "2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new k(function() {
                                        return [_.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(t.getId("ShowPasswordImages2.Style"), function() {
                                                return a.widgets.get(t.getId("PasswordInputDesktop")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(t.getId("PasswordInputDesktop")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ShowPasswordImages2"
                                            },
                                            _widgetRecordProvider: s
                                        }, w(a.variables.showPasswordVar, !1, this, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new k(function() {
                                        return [_.createElement($, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("DesktopForm")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(t.getId("PasswordInputDesktop.type"), function() {
                                                    return a.variables.showPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return a.variables.showPasswordVar
                                                }),
                                                autoComplete: "new-password",
                                                style: "background: var(--field-default-bg-default, #FFF); border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 4px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 16,
                                            onChange: l(function() {
                                                var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.passwordInputOnChangeDesktop$Action(e.callContext(c))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(N.DataTypes.Text, a.variables.passwordVar, function(c) {
                                                a.variables.passwordVar = c
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordInputDesktop"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordVar), n(a.variables.showPasswordVar), n(a.widgets.get(t.getId("PasswordInputDesktop")).validAttr)]
                            })))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "fill"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(be, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Password: a.variables.passwordVar,
                                    Length: 8,
                                    Type: "CREATE"
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("DesktopForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "17",
                                    alias: "3"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            })), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 48p; margin-bottom: 24px; margin-top: 16px;"
                                },
                                style: "flex flex-col gap-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ConfirmNewPasswordFieldDesktop"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordConfirmInputDesktop",
                                _idProps: {
                                    service: t,
                                    name: "FieldLabel4"
                                },
                                _widgetRecordProvider: s
                            }, b(u("jPgIf9PR70eYLbBkFkdgeg#Value", "Confirm new password"))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: a.getCachedValue(t.getId("FqP23rKY2UO4GFAej+kXaw.Style"), function() {
                                    return a.widgets.get(t.getId("PasswordInputDesktop")).validAttr, ""
                                }, function() {
                                    return a.widgets.get(t.getId("PasswordInputDesktop")).validAttr
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(te, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: f.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("DesktopForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "22",
                                    alias: "4"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new k(function() {
                                        return [_.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(t.getId("7sO8Er5DYUGIGQ2Yv3qbdg.Style"), function() {
                                                return a.widgets.get(t.getId("PasswordConfirmInputDesktop")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(t.getId("PasswordConfirmInputDesktop")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: s
                                        }, w(a.variables.showConfirmPasswordVar, !1, this, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowConfirmPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowConfirmPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new k(function() {
                                        return [_.createElement($, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("DesktopForm")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(t.getId("PasswordConfirmInputDesktop.type"), function() {
                                                    return a.variables.showConfirmPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return a.variables.showConfirmPasswordVar
                                                }),
                                                autoComplete: "new-password",
                                                style: "background: var(--field-default-bg-default, #FFF); border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 4px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 16,
                                            onChange: l(function() {
                                                var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.passwordConfirmInputOnChangeDesktop$Action(e.callContext(c))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(N.DataTypes.Text, a.variables.passwordConfirmationVar, function(c) {
                                                a.variables.passwordConfirmationVar = c
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordConfirmInputDesktop"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordConfirmationVar), n(a.variables.showConfirmPasswordVar), n(a.widgets.get(t.getId("PasswordConfirmInputDesktop")).validAttr)]
                            })))), _.createElement(J, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ShowLabelOnLoading: !1,
                                    ExtendedClass: "full-width",
                                    IsLoading: a.variables.isExecutingVar
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("DesktopForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "27",
                                    alias: "5"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new k(function() {
                                        return [_.createElement(Z, {
                                            enabled: a.widgets.get(t.getId("PasswordInputDesktop")).validAttr && a.variables.passwordVar === a.variables.passwordConfirmationVar && a.variables.passwordVar !== "" && a.variables.passwordConfirmationVar !== "",
                                            extendedProperties: {
                                                style: "margin-bottom: 0px; padding: 0px 1rem 0px 1rem;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: l(function() {
                                                return Promise.resolve().then(function() {
                                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                    return e.confirmOnClick$Action(e.callContext(c))
                                                })
                                            }, "onClick"),
                                            style: 'btn flex items-center justify-center px-4 btn-primary action-button"btn btn-primary flex items-center justify-center px-4 action-button',
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: s
                                        }, _.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: s
                                        }), b(u("CglADivwt0+j+hHgMZw0Lg#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordConfirmationVar), n(a.variables.passwordVar), n(a.widgets.get(t.getId("PasswordInputDesktop")).validAttr)]
                            })))]
                        })
                    },
                    _dependencies: [n(a.variables.isExecutingVar), n(a.variables.passwordConfirmationVar), n(a.variables.showConfirmPasswordVar), n(a.widgets.get(t.getId("PasswordConfirmInputDesktop")).validAttr), n(a.variables.passwordVar), n(a.variables.showPasswordVar), n(a.widgets.get(t.getId("PasswordInputDesktop")).validAttr), n(f.getlanguage()), n(a.variables.textVarVar)]
                })]
            }, function() {
                return [_.createElement(ee, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        closeEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.onCloseEvent$Action(e.callContext(c))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "30",
                        alias: "6"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        content: new k(function() {
                            return [_.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(le, {
                                _validationProps: {
                                    validationService: r
                                },
                                extendedProperties: {
                                    style: "margin-right: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                style: '"form card"',
                                _idProps: {
                                    service: t,
                                    name: "MobileForm"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                extendedProperties: {
                                    style: "---comment-2: /* mobile/heading/h3 */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: s
                            }, b(u("tuLjmjd8wEy4OdPBB5S6qA#Value", "Reset MT5 password"))), _.createElement(B, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: s
                            }, b(u("AruFip1n9UicAvPFoDldYA#Value", "This will reset the password to all of your MT5 accounts."))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "UsernameInput2"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement($, {
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("MobileForm")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    autoComplete: "username"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 50,
                                style: "form-control",
                                variable: a.createVariable(N.DataTypes.Text, a.variables.textVarVar, function(c) {
                                    a.variables.textVarVar = c
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Input_TextVar2"
                                },
                                _widgetRecordProvider: s
                            })), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 48p; margin-top: 48px;"
                                },
                                style: "flex flex-col gap-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "PasswordFieldMobile"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordInputMobile",
                                _idProps: {
                                    service: t,
                                    name: "FieldLabel"
                                },
                                _widgetRecordProvider: s
                            }, b(u("M3DFL5hnc0ObDoK4DvXDqg#Value", "New password"))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(te, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: f.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("MobileForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "41",
                                    alias: "7"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new k(function() {
                                        return [_.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(t.getId("ShowPasswordImages.Style"), function() {
                                                return a.widgets.get(t.getId("PasswordInputMobile")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(t.getId("PasswordInputMobile")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ShowPasswordImages"
                                            },
                                            _widgetRecordProvider: s
                                        }, w(a.variables.showPasswordVar, !1, this, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "43"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "44"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new k(function() {
                                        return [_.createElement($, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("MobileForm")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(t.getId("PasswordInputMobile.type"), function() {
                                                    return a.variables.showPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return a.variables.showPasswordVar
                                                }),
                                                autoComplete: "new-password",
                                                style: "background: var(--field-default-bg-default, #FFF); border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 4px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 16,
                                            onChange: l(function() {
                                                var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.passwordInputOnChangeMobile$Action(e.callContext(c))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(N.DataTypes.Text, a.variables.passwordVar, function(c) {
                                                a.variables.passwordVar = c
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordInputMobile"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordVar), n(a.variables.showPasswordVar), n(a.widgets.get(t.getId("PasswordInputMobile")).validAttr)]
                            })))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "fill"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(be, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Length: 8,
                                    Type: "CREATE",
                                    HasAtLeastOneNumber: !0,
                                    HasAtLeastLowerCase: !0,
                                    HasAtLeastOneSpecialCharacter: !0,
                                    HasAtLeastUpperCase: !0,
                                    MustNotContainSpaces: !0,
                                    Password: a.variables.passwordVar
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("MobileForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "47",
                                    alias: "8"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            })), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 48p; margin-top: 16px;"
                                },
                                style: "flex flex-col gap-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ConfirmPasswordFieldMobile"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(B, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordConfirmInputMobile",
                                _idProps: {
                                    service: t,
                                    name: "FieldLabel2"
                                },
                                _widgetRecordProvider: s
                            }, b(u("YCx1IrJGwk65VOlxpzqcjQ#Value", "Confirm new password"))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: a.getCachedValue(t.getId("d6VA_ukmtkiRojRhFOolpw.Style"), function() {
                                    return a.widgets.get(t.getId("PasswordInputMobile")).validAttr ? "" : "margin-bottom-l"
                                }, function() {
                                    return a.widgets.get(t.getId("PasswordInputMobile")).validAttr
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(te, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: f.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("MobileForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "52",
                                    alias: "9"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new k(function() {
                                        return [_.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(t.getId("_4zCZbSKB0aP9dkUy2_5qw.Style"), function() {
                                                return a.widgets.get(t.getId("PasswordConfirmInputMobile")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(t.getId("PasswordConfirmInputMobile")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: s
                                        }, w(a.variables.showConfirmPasswordVar, !1, this, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowConfirmPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "54"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [_.createElement(F, {
                                                extendedEvents: {
                                                    onClick: l(function() {
                                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        e.onClickShowConfirmPassword$Action(e.callContext(c))
                                                    }, "onClick")
                                                },
                                                image: M.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "55"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new k(function() {
                                        return [_.createElement($, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("MobileForm")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(t.getId("PasswordConfirmInputMobile.type"), function() {
                                                    return a.variables.showConfirmPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return a.variables.showConfirmPasswordVar
                                                }),
                                                autoComplete: "new-password",
                                                style: "background: var(--field-default-bg-default, #FFF); border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 4px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 16,
                                            onChange: l(function() {
                                                var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.passwordConfirmInputOnChangeMobile$Action(e.callContext(c))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(N.DataTypes.Text, a.variables.passwordConfirmationVar, function(c) {
                                                a.variables.passwordConfirmationVar = c
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordConfirmInputMobile"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordConfirmationVar), n(a.variables.showConfirmPasswordVar), n(a.widgets.get(t.getId("PasswordConfirmInputMobile")).validAttr)]
                            })))), _.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(h, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "58"
                                },
                                _widgetRecordProvider: s
                            }, _.createElement(J, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ExtendedClass: "full-width",
                                    ShowLabelOnLoading: !1,
                                    IsLoading: a.variables.isExecutingVar
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("MobileForm")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "59",
                                    alias: "10"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new k(function() {
                                        return [_.createElement(Z, {
                                            enabled: a.widgets.get(t.getId("PasswordInputMobile")).validAttr && a.variables.passwordVar !== "" && a.variables.passwordConfirmationVar !== "" && a.variables.passwordVar === a.variables.passwordConfirmationVar,
                                            extendedProperties: {
                                                style: "margin-bottom: 0px; padding: 0px 1rem 0px 1rem;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: l(function() {
                                                return Promise.resolve().then(function() {
                                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                    return e.confirmOnClick$Action(e.callContext(c))
                                                })
                                            }, "onClick"),
                                            style: 'btn flex items-center justify-center px-4 btn-primary action-button"btn btn-primary flex items-center justify-center px-4 action-button',
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "60"
                                            },
                                            _widgetRecordProvider: s
                                        }, _.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "61"
                                            },
                                            _widgetRecordProvider: s
                                        }), b(u("ba5Vhr4evUKXKw9wil0vuA#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [n(a.variables.passwordConfirmationVar), n(a.variables.passwordVar), n(a.widgets.get(t.getId("PasswordInputMobile")).validAttr)]
                            })))))]
                        }),
                        footer: k.Empty
                    },
                    _dependencies: [n(a.variables.isExecutingVar), n(a.variables.passwordConfirmationVar), n(a.variables.showConfirmPasswordVar), n(a.widgets.get(t.getId("PasswordConfirmInputMobile")).validAttr), n(a.variables.passwordVar), n(a.variables.showPasswordVar), n(a.widgets.get(t.getId("PasswordInputMobile")).validAttr), n(f.getlanguage()), n(a.variables.textVarVar)]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "ResetPasswordView",
                    functionKey: "7adbb7b1-e1cf-4997-be01-2d9796b4ae40",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.ResetPasswordView",
            modelFactory: bt,
            controllerFactory: wt
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [re, te, be, J, ee]
        }, m
    }, "componentFactory"),
    et = It();
var p = Ee(Re());
var Rt = {
        "eRkxs6VZ3kKSJaCkyh4lTA#ValueExpression.-1736084327.1": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "Ezifgh86eUC0aVdFL8gNwQ#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "X3gerj9uZ0Goph8VWywppA#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "hGg7ExE_gEqy2BYIB5Wj5A#Value": "\u0623\u0648",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 (",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u062B\u0627\u0646\u064A\u0629)",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
        "JTmvMUrwy0uOSGGYcF+o2Q#Value": "\u0644\u0645 \u064A\u0635\u0644\u0643 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642\u061F",
        "AKfszH1hfUKkpxpKd3hV0A#ValueExpression.24546143.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645",
        "a4nAOzaL1kS9vBN2yl+2GA#Value": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0631\u0633\u0644 \u0625\u0644\u0649 ",
        "lIWKvhX440a9SDFeC5SxrA#ValueExpression.-1576264390.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0637\u0644\u0648\u0628",
        "TUqvj4vHeEC+E7zMefJI+Q#ValueExpression.-1736084327.1": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "sgWZZptm90uFVbAjdtGHJA#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "MT93yEXBW0+vSPLbE1j1Mw#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "P4QEJetl4kWl3M4uDTpYow#Value": "\u0623\u0648",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 (",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u062B\u0627\u0646\u064A\u0629)",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
        "sDatPDADOUCQmHjUf7Ftew#Value": "\u0644\u0645 \u064A\u0635\u0644\u0643 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642\u061F",
        "cqR9q85qbUqbQ1XgdrQ1qg#ValueExpression.24546143.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645",
        "PNS5vBp0ME64fkwx6mX01A#Value": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0631\u0633\u0644 \u0625\u0644\u0649 ",
        "ctJOgPK+eUSX++hyKHz60A#ValueExpression.-1576264390.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0637\u0644\u0648\u0628",
        "TsOnDDQliUSFdhta7mvc0Q#Value.105757575.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u062A\u062D\u0642\u0642 \u0635\u0627\u0644\u062D",
        "cFum9jEQ5Ui9OdgbIlpKIA#Value.105757575.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u062A\u062D\u0642\u0642 \u0635\u0627\u0644\u062D"
    },
    xt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u0995\u09CB\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09DF \u09AA\u09BE\u09A0\u09BE\u09A8",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u09B8",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u0995\u09CB\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09DF \u09AA\u09BE\u09A0\u09BE\u09A8",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u09B8"
    },
    Dt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Code erneut senden in",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "sec",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "E-Mail erneut senden",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Code erneut senden in",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "sec",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "E-Mail erneut senden"
    },
    kt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Reenviar c\xF3digo en",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "sec",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "Reenviar correo electr\xF3nico",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Reenviar c\xF3digo en",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "sec",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "Reenviar correo electr\xF3nico"
    },
    Mt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Renvoyer le code dans",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "sec",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "Renvoie l'e-mail",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Renvoyer le code dans",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "sec",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "Renvoie l'e-mail"
    },
    Ft = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Invia nuovamente il codice in",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "sec",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "Invia nuovamente l'email",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Invia nuovamente il codice in",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "sec",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "Invia nuovamente l'email"
    },
    Nt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\uCF54\uB4DC \uC7AC\uC804\uC1A1",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u3145",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\uCF54\uB4DC \uC7AC\uC804\uC1A1",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u3145"
    },
    $t = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Wy\u015Blij kod ponownie w",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "sec",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "Wy\u015Blij ponownie e-mail",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Wy\u015Blij kod ponownie w",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "sec",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "Wy\u015Blij ponownie e-mail"
    },
    Wt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Reenviar c\xF3digo em",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "seg",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "Reenviar email",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Reenviar c\xF3digo em",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "seg",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "Reenviar email"
    },
    Lt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u0432",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u0441\u0435\u043A",
        "33qfZ0gNwUCUkw7ygqa1hg#Value": "\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u0432",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u0441\u0435\u043A",
        "FXyHx_7cLEKtGbE9HY7f6Q#Value": "\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E"
    },
    Ht = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u0DC3",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u0DC3"
    },
    Bt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Tuma tena msimbo katika",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "s",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Tuma tena msimbo katika",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "s"
    },
    Jt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u0E2A",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u0E2A"
    },
    Ut = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "Kodu yeniden g\xF6nder",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "s",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "Kodu yeniden g\xF6nder",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "s"
    },
    Xt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "G\u1EEDi l\u1EA1i m\xE3 trong",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "s",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "G\u1EEDi l\u1EA1i m\xE3 trong",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "s"
    },
    Gt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u53D1\u9001\u4EE3\u7801",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u79D2",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u53D1\u9001\u4EE3\u7801",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u79D2"
    },
    qt = {
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u767C\u9001\u4EE3\u78BC",
        "BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1": "\u79D2",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u767C\u9001\u4EE3\u78BC",
        "OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1": "\u79D2"
    },
    Tt = {
        "ar-001": {
            translations: Rt,
            isRTL: !0
        },
        "bn-BD": {
            translations: xt,
            isRTL: !1
        },
        "de-DE": {
            translations: Dt,
            isRTL: !1
        },
        "es-ES": {
            translations: kt,
            isRTL: !1
        },
        "fr-FR": {
            translations: Mt,
            isRTL: !1
        },
        "it-IT": {
            translations: Ft,
            isRTL: !1
        },
        "ko-KR": {
            translations: Nt,
            isRTL: !1
        },
        "pl-PL": {
            translations: $t,
            isRTL: !1
        },
        "pt-PT": {
            translations: Wt,
            isRTL: !1
        },
        "ru-RU": {
            translations: Lt,
            isRTL: !1
        },
        "si-LK": {
            translations: Ht,
            isRTL: !1
        },
        "sw-TZ": {
            translations: Bt,
            isRTL: !1
        },
        "th-TH": {
            translations: Jt,
            isRTL: !1
        },
        "tr-TR": {
            translations: Ut,
            isRTL: !1
        },
        "vi-VN": {
            translations: Xt,
            isRTL: !1
        },
        "zh-CN": {
            translations: Gt,
            isRTL: !1
        },
        "zh-TW": {
            translations: qt,
            isRTL: !1
        }
    };

function tt(m, g, a, e) {
    document.getElementById(m.WidgetID).addEventListener("paste", r => {
        let i = new RegExp(/^\d{1,6}$/),
            n = r.clipboardData.getData("text") || window.clipboardData.getData("Text");
        i.test(n) || r.preventDefault()
    })
}
l(tt, "default");

function rt(m, g, a, e) {
    let t = sessionStorage.getItem("previousUrl"),
        r = t !== null && t !== "",
        i = performance.getEntriesByType("navigation")[0].type == "reload",
        n = performance.getEntriesByType("navigation")[0].type == "navigate" && document.referrer == window.location.href;
    m.PreventTimerRun = !r
}
l(rt, "default");

function nt(m, g, a, e) {
    let t;
    sessionStorage.removeItem("previousUrl");
    let r = l(d => {
            let s = d;
            return () => {
                t = setInterval(() => {
                    s <= 0 ? (g.SetHasTimerStarted(!1), (m.IsDesktop ? document.getElementById("b2-MT5ResendTimer") : document.getElementById("b2-MT5ResendTimer2")) && g.SetTimer(d), clearInterval(t)) : (m.IsDesktop ? document.getElementById("b2-MT5ResendTimer") : document.getElementById("b2-MT5ResendTimer2")) && (g.SetTimer(s - 1), s -= 1)
                }, 1e3)
            }
        }, "withTimer"),
        n = l(() => {
            if (!m.TimeElapse) return 60;
            let d = new Date(m.TimeElapse),
                w = new Date - d,
                b = Math.floor(w / 1e3);
            return b > 60 ? 60 : 60 - b
        }, "getTimeElapsed")();
    r(n)(), g.SetHasTimerStarted(!0), m.TimeElapse ? m.TimeStamp = m.TimeElapse : m.TimeStamp = new Date().toISOString(), window.activeIntervalRef = t
}
l(nt, "default");

function it(m, g, a) {
    window.activeIntervalRef && (clearInterval(window.activeIntervalRef), window.activeIntervalRef = null)
}
l(it, "default");

function ot(m, g, a) {
    let e = localStorage.getItem("redirect_url");
    if (e) try {
        let t = new URL(e);
        (t.hostname.endsWith("deriv.ae") || t.hostname.endsWith("deriv-uae.webflow.io")) && (localStorage.removeItem("redirect_url"), window.location.href = e)
    } catch (t) {}
}
l(ot, "default");

function at(m, g, a, e) {
    let t = JSON.parse(m.auth_response);
    if (Array.isArray(t.data)) {
        let r = t.data[0];
        localStorage.setItem("auth", JSON.stringify(r))
    }
}
l(at, "default");

function st(m, g, a) {
    m.CallOnboardingConfig()
}
l(st, "default");

function lt(m, g, a, e) {
    var s, w, b, A, c, U, y, C, oe;
    let t = l(() => {
            try {
                let ce = window.location.origin,
                    Pe = ce.split("."),
                    Oe = Pe.length;
                return Oe > 2 ? `.${Pe[Oe-2]}.${Pe[Oe-1]}` : `.${ce}`
            } catch (ce) {
                return console.error("Invalid hostname:", ce), null
            }
        }, "getDomainFromHostName"),
        r = JSON.parse(m.ClientProfile),
        i = {
            email: m.UserEmail,
            currency: (s = m.Currency) != null ? s : "",
            residence: (w = r.residence_country) != null ? w : "",
            first_name: (b = r.first_name) != null ? b : "",
            last_name: (A = r.last_name) != null ? A : "",
            preferred_language: (y = (U = m.language) != null ? U : (c = r == null ? void 0 : r.preferred_language) == null ? void 0 : c.toUpperCase()) != null ? y : "EN",
            user_id: r.client_id
        },
        n = {
            domain: t(),
            secure: !0
        };
    window.Cookies && Cookies.set("client_information", JSON.stringify(i), n);
    let u = {
            en: "en-US",
            ar: "ar-001"
        },
        d = (oe = (C = i == null ? void 0 : i.preferred_language) == null ? void 0 : C.toLowerCase()) != null ? oe : "en";
    m.LanguageToUse = u[d]
}
l(lt, "default");

function ut(m, g, a) {
    let e = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Enter", "Tab"];
    !/^[0-9]$/.test(event.key) && !e.includes(event.key) && !((event.ctrlKey || event.metaKey) && event.key === "v") && event.preventDefault()
}
l(ut, "default");

function ct(m, g, a, e) {
    let t = l(() => {
        if (!m.TimeStamp) return 60;
        let r = new Date(m.TimeStamp),
            n = new Date - r,
            u = Math.floor(n / 1e3);
        return u > 60 ? 60 : 60 - u
    }, "getTimeElapsed");
    m.TimeElapsed = t()
}
l(ct, "default");

function dt(m, g, a) {
    function e(t) {
        var r = document.querySelector('meta[name="viewport"]');
        r ? r.content = t : (r = document.createElement("meta"), r.name = "viewport", r.content = t, document.head.appendChild(r))
    }
    l(e, "updateViewportMeta"), e("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
l(dt, "default");
var o = E; {
    let g = class g extends o.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Tt);
            var i = this.controller;
            this.clientActionProxies = {
                setHasTimerStarted$Action: l(function(n) {
                    return n = n === void 0 ? !1 : n, i.executeActionInsideJSNode(i._setHasTimerStarted$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(n, o.DataTypes.DataTypes.Boolean)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "SetHasTimerStarted")
                }, "setHasTimerStarted$Action"),
                setTimer$Action: l(function(n) {
                    return n = n === void 0 ? 0 : n, i.executeActionInsideJSNode(i._setTimer$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(n, o.DataTypes.DataTypes.Integer)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "SetTimer")
                }, "setTimer$Action"),
                callOnboardingConfig$Action: l(function() {
                    return i.executeActionInsideJSNode(i._callOnboardingConfig$Action.bind(i), i.callContext(), function(n) {
                        return {}
                    }, function() {}, "CallOnboardingConfig")
                }, "callOnboardingConfig$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postReauthenticate$ServerAction() {
            return this.hasOwnProperty("_postReauthenticate$ServerAction") || (this._postReauthenticate$ServerAction = function(e, t, r) {
                var i = this.controller;
                return o.Logger.startActiveSpan("PostReauthenticate", function(n) {
                    return n && (n.setAttribute("code.function", "PostReauthenticate"), n.setAttribute("outsystems.function.key", "5e977e4b-8319-4ac8-9d22-8d42df2cae9e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var u = {
                            Authorization: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Text),
                            Request: o.DataConversion.ServerDataConverter.to(t, o.DataTypes.DataTypes.Record)
                        };
                        return i.callServerAction("PostReauthenticate", "screenservices/uae/MT5Flow/MT5OTPBlock/ActionPostReauthenticate", "S69aQEfUk0OI0ZMkCVpxSA", u, i.callContext(r), void 0, void 0, !0).then(function(d) {
                            var s = new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostReauthenticate"));
                            return s.responseOut = o.DataConversion.ServerDataConverter.from(d.Response, me), s
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postReauthenticate$ServerAction
        }
        set postReauthenticate$ServerAction(e) {
            this._postReauthenticate$ServerAction = e
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(e, t) {
                var r = this.controller;
                return o.Logger.startActiveSpan("GetClientProfile", function(i) {
                    return i && (i.setAttribute("code.function", "GetClientProfile"), i.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var n = {
                            authorization: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetClientProfile", "screenservices/uae/MT5Flow/MT5OTPBlock/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", n, r.callContext(t), void 0, void 0, !0).then(function(u) {
                            var d = new(r.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionGetClientProfile"));
                            return d.responseOut = o.DataConversion.ServerDataConverter.from(u.Response, ye), d
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getClientProfile$ServerAction
        }
        set getClientProfile$ServerAction(e) {
            this._getClientProfile$ServerAction = e
        }
        get postClientProfile$ServerAction() {
            return this.hasOwnProperty("_postClientProfile$ServerAction") || (this._postClientProfile$ServerAction = function(e, t, r) {
                var i = this.controller;
                return o.Logger.startActiveSpan("PostClientProfile", function(n) {
                    return n && (n.setAttribute("code.function", "PostClientProfile"), n.setAttribute("outsystems.function.key", "e0734a77-1f76-4e1b-9e82-d46d7b134c62"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var u = {
                            Request: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Record),
                            Authorization: o.DataConversion.ServerDataConverter.to(t, o.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("PostClientProfile", "screenservices/uae/MT5Flow/MT5OTPBlock/ActionPostClientProfile", "EoVeipOo3WghaYKxmAuhpw", u, i.callContext(r), void 0, void 0, !0).then(function(d) {
                            var s = new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostClientProfile"));
                            return s.responseOut = o.DataConversion.ServerDataConverter.from(d.Response, ve), s
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postClientProfile$ServerAction
        }
        set postClientProfile$ServerAction(e) {
            this._postClientProfile$ServerAction = e
        }
        get postAuthVerify$ServerAction() {
            return this.hasOwnProperty("_postAuthVerify$ServerAction") || (this._postAuthVerify$ServerAction = function(e, t, r, i) {
                var n = this.controller;
                return o.Logger.startActiveSpan("PostAuthVerify", function(u) {
                    return u && (u.setAttribute("code.function", "PostAuthVerify"), u.setAttribute("outsystems.function.key", "6978b2aa-20c2-4c00-9ff7-6cde779d8b0e"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var d = {
                            Request: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Record),
                            xuseragent: o.DataConversion.ServerDataConverter.to(t, o.DataTypes.DataTypes.Text),
                            Authorization: o.DataConversion.ServerDataConverter.to(r, o.DataTypes.DataTypes.Text)
                        };
                        return n.callServerAction("PostAuthVerify", "screenservices/uae/MT5Flow/MT5OTPBlock/ActionPostAuthVerify", "HnhdXpI6WCUZ4UtW8OxMeQ", d, n.callContext(i), void 0, void 0, !0).then(function(s) {
                            var w = new(n.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostAuthVerify"));
                            return w.responseOut = o.DataConversion.ServerDataConverter.from(s.Response, ge), w
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 0)
            }), this._postAuthVerify$ServerAction
        }
        set postAuthVerify$ServerAction(e) {
            this._postAuthVerify$ServerAction = e
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(e, t, r) {
                var i = this.controller;
                return o.Logger.startActiveSpan("GetOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnboardingConfig"), n.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var u = {
                            country: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Text),
                            authorization: o.DataConversion.ServerDataConverter.to(t, o.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetOnboardingConfig", "screenservices/uae/MT5Flow/MT5OTPBlock/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", u, i.callContext(r), void 0, void 0, !0).then(function(d) {
                            var s = new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionGetOnboardingConfig"));
                            return s.responseOut = o.DataConversion.ServerDataConverter.from(d.Response, de), s
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(e) {
            this._getOnboardingConfig$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _rightActionOnClick$Action() {
            return this.hasOwnProperty("__rightActionOnClick$Action") || (this.__rightActionOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RightActionOnClick", function(n) {
                    n && (n.setAttribute("code.function", "RightActionOnClick"), n.setAttribute("outsystems.function.key", "03ef3aa0-fad6-4d04-b631-096513491962"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("RightActionOnClick"), e = r.callContext(e), f.setCode(t.variables.otpVar), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "code-info", {
                            verification_type: o.DataConversion.ServerDataConverter.to(f.getVerificationProvider(), o.DataTypes.DataTypes.Text),
                            from: o.DataConversion.ServerDataConverter.to(t.variables.fromIn, o.DataTypes.DataTypes.Text),
                            shouldshowBanner: o.DataConversion.ServerDataConverter.to(!1, o.DataTypes.DataTypes.Boolean)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__rightActionOnClick$Action
        }
        set _rightActionOnClick$Action(e) {
            this.__rightActionOnClick$Action = e
        }
        get _verifyWithEmailPhoneNumberOnClick$Action() {
            return this.hasOwnProperty("__verifyWithEmailPhoneNumberOnClick$Action") || (this.__verifyWithEmailPhoneNumberOnClick$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("VerifyWithEmailPhoneNumberOnClick", function(u) {
                    return u && (u.setAttribute("code.function", "VerifyWithEmailPhoneNumberOnClick"), u.setAttribute("outsystems.function.key", "2a1ce998-a9f2-4d83-ac94-49ab99dd8f47"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("VerifyWithEmailPhoneNumberOnClick"), t = i.callContext(t);
                        var d = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.VerifyWithEmailPhoneNumberOnClick$vars")));
                        return d.value.verificationTypeInLocal = e, o.Flow.executeAsyncFlow(function() {
                            return r.variables.emailIn = d.value.verificationTypeInLocal === "email" ? f.getemail() : "", r.variables.phoneIn = d.value.verificationTypeInLocal === "phone" ? f.getphone() : "", f.setVerificationProvider(d.value.verificationTypeInLocal), r.variables.is_switchingVar = !0, i._resendCode$Action(t).then(function() {
                                r.variables.is_switchingVar = !1
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__verifyWithEmailPhoneNumberOnClick$Action
        }
        set _verifyWithEmailPhoneNumberOnClick$Action(e) {
            this.__verifyWithEmailPhoneNumberOnClick$Action = e
        }
        get _backButtonOnClick$Action() {
            return this.hasOwnProperty("__backButtonOnClick$Action") || (this.__backButtonOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("BackButtonOnClick", function(n) {
                    n && (n.setAttribute("code.function", "BackButtonOnClick"), n.setAttribute("outsystems.function.key", "321a374e-56c0-4945-b714-d379f9d03f38"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("BackButtonOnClick"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder;
                        return f.setCode(o.BuiltinFunctions.nullTextIdentifier()), u.value = T.getAccountActivationInputs$Action(e), t.variables.fromIn === "mt5_enter_password" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "mt5/password", {
                            is_demo: o.DataConversion.ServerDataConverter.to(u.value.accountActivationInputsOut.is_demoAttr, o.DataTypes.DataTypes.Boolean),
                            mt5_type: o.DataConversion.ServerDataConverter.to(f.getSelectedMT5AccountType() === "standard" ? ae.mT5Types.standard : ae.mT5Types.swapFree, o.DataTypes.DataTypes.Integer)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : t.variables.fromIn === "mt5_account_details" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: o.DataConversion.ServerDataConverter.to(u.value.accountActivationInputsOut.is_demoAttr, o.DataTypes.DataTypes.Boolean)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "mt5/password", {
                            mt5_type: o.DataConversion.ServerDataConverter.to(f.getSelectedMT5AccountType() === "standard" ? ae.mT5Types.standard : ae.mT5Types.swapFree, o.DataTypes.DataTypes.Integer),
                            is_demo: o.DataConversion.ServerDataConverter.to(u.value.accountActivationInputsOut.is_demoAttr, o.DataTypes.DataTypes.Boolean)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__backButtonOnClick$Action
        }
        set _backButtonOnClick$Action(e) {
            this.__backButtonOnClick$Action = e
        }
        get _removeJunk$Action() {
            return this.hasOwnProperty("__removeJunk$Action") || (this.__removeJunk$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RemoveJunk", function(n) {
                    n && (n.setAttribute("code.function", "RemoveJunk"), n.setAttribute("outsystems.function.key", "61308413-e762-4b9e-96a6-db260465229f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RemoveJunk"), e = r.callContext(e), o.Logger.startActiveSpan("RemoveJunk", function(u) {
                            u && (u.setAttribute("code.function", "RemoveJunk"), u.setAttribute("outsystems.function.key", "b86c2879-7611-434b-8a04-0c275a4448e6"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(tt, "RemoveJunk", "RemoveJunk", {
                                    WidgetID: o.DataConversion.JSNodeParamConverter.to(W.isDesktop$Action(e).isDesktopOut ? i.getId("Desktop_Input") : i.getId("Mobile_Input"), o.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__removeJunk$Action
        }
        set _removeJunk$Action(e) {
            this.__removeJunk$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "72b65ace-d85e-470d-8531-358beea5b532"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), e = r.callContext(e), r._onClearTimer$Action(e), W.layoutDestroy$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _startTimer$Action() {
            return this.hasOwnProperty("__startTimer$Action") || (this.__startTimer$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("StartTimer", function(u) {
                    u && (u.setAttribute("code.function", "StartTimer"), u.setAttribute("outsystems.function.key", "c254e90b-5339-4e85-8f84-8d055b6d409c"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("StartTimer"), t = i.callContext(t);
                        var d = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$vars")));
                        d.value.is_triggeredInLocal = e;
                        var s = new o.DataTypes.VariableHolder,
                            w = new o.DataTypes.VariableHolder;
                        s.value = o.Logger.startActiveSpan("JavaScript1", function(b) {
                            b && (b.setAttribute("code.function", "JavaScript1"), b.setAttribute("outsystems.function.key", "243fbbd9-d9ee-4d92-9594-e649ed3702f0"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(rt, "JavaScript1", "StartTimer", {
                                    PreventTimerRun: o.DataConversion.JSNodeParamConverter.to(!1, o.DataTypes.DataTypes.Boolean)
                                }, function(A) {
                                    var c = new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$javaScript1JSResult"));
                                    return c.preventTimerRunOut = o.DataConversion.JSNodeParamConverter.from(A.PreventTimerRun, o.DataTypes.DataTypes.Boolean), c
                                }, {}, {})
                            } finally {
                                b && b.end()
                            }
                        }, 1), (r.variables.from_sectionIn === "banner" && f.getTimestamp() === o.BuiltinFunctions.nullTextIdentifier() || s.value.preventTimerRunOut && f.getTimestamp() === o.BuiltinFunctions.nullTextIdentifier()) && !d.value.is_triggeredInLocal || (w.value = o.Logger.startActiveSpan("TimerFunc", function(b) {
                            b && (b.setAttribute("code.function", "TimerFunc"), b.setAttribute("outsystems.function.key", "6f3e8dec-0ecc-4b90-9c25-53dffa8d5c5b"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(nt, "TimerFunc", "StartTimer", {
                                    IsDesktop: o.DataConversion.JSNodeParamConverter.to(W.isDesktop$Action(t).isDesktopOut, o.DataTypes.DataTypes.Boolean),
                                    TimeElapse: o.DataConversion.JSNodeParamConverter.to(f.getTimestamp(), o.DataTypes.DataTypes.Text),
                                    TimeStamp: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                }, function(A) {
                                    var c = new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$timerFuncJSResult"));
                                    return c.timeStampOut = o.DataConversion.JSNodeParamConverter.from(A.TimeStamp, o.DataTypes.DataTypes.Text), c
                                }, {
                                    SetHasTimerStarted: i.clientActionProxies.setHasTimerStarted$Action,
                                    SetTimer: i.clientActionProxies.setTimer$Action
                                }, {})
                            } finally {
                                b && b.end()
                            }
                        }, 1), f.setTimestamp(w.value.timeStampOut))
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__startTimer$Action
        }
        set _startTimer$Action(e) {
            this.__startTimer$Action = e
        }
        get _setTimer$Action() {
            return this.hasOwnProperty("__setTimer$Action") || (this.__setTimer$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("SetTimer", function(u) {
                    u && (u.setAttribute("code.function", "SetTimer"), u.setAttribute("outsystems.function.key", "c371c7b4-9927-4c8a-bbca-398378619b8d"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("SetTimer"), t = i.callContext(t);
                        var d = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.SetTimer$vars")));
                        d.value.newTimerInLocal = e, r.variables.timerVar = d.value.newTimerInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__setTimer$Action
        }
        set _setTimer$Action(e) {
            this.__setTimer$Action = e
        }
        get _setHasTimerStarted$Action() {
            return this.hasOwnProperty("__setHasTimerStarted$Action") || (this.__setHasTimerStarted$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("SetHasTimerStarted", function(u) {
                    u && (u.setAttribute("code.function", "SetHasTimerStarted"), u.setAttribute("outsystems.function.key", "c484f606-a77e-4fe2-99de-4a83cec2c360"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("SetHasTimerStarted"), t = i.callContext(t);
                        var d = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.SetHasTimerStarted$vars")));
                        d.value.hasTimerStarted2InLocal = e, r.variables.hasTimerStartedVar = d.value.hasTimerStarted2InLocal, d.value.hasTimerStarted2InLocal || f.setTimestamp(o.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__setHasTimerStarted$Action
        }
        set _setHasTimerStarted$Action(e) {
            this.__setHasTimerStarted$Action = e
        }
        get _onClearTimer$Action() {
            return this.hasOwnProperty("__onClearTimer$Action") || (this.__onClearTimer$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClearTimer", function(n) {
                    n && (n.setAttribute("code.function", "OnClearTimer"), n.setAttribute("outsystems.function.key", "d169b4da-f204-426f-b338-792c28d5e20e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnClearTimer"), e = r.callContext(e), o.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "21afb79c-ca58-4473-a15d-26b3fbd8283a"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(it, "JavaScript1", "OnClearTimer", null, function(d) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClearTimer$Action
        }
        set _onClearTimer$Action(e) {
            this.__onClearTimer$Action = e
        }
        get _resendCode$Action() {
            return this.hasOwnProperty("__resendCode$Action") || (this.__resendCode$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("ResendCode", function(n) {
                    return n && (n.setAttribute("code.function", "ResendCode"), n.setAttribute("outsystems.function.key", "d449fd64-c006-43eb-b30e-bc050d55710f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("ResendCode"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder,
                            d = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return t.variables.enable_resendVar = !1, t.widgets.get(i.getId("Desktop_Input")).validAttr = !0, t.widgets.get(i.getId("Desktop_Input")).validationMessageAttr = o.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(i.getId("Mobile_Input")).validAttr = !0, t.widgets.get(i.getId("Mobile_Input")).validationMessageAttr = o.BuiltinFunctions.nullTextIdentifier(), d.value = T.getAuth$Action(e), t.flush(), r.postReauthenticate$ServerAction(d.value.tokenOut, (function() {
                                var s = new gt;
                                return s.emailAttr = f.getVerificationProvider() === "email" ? f.getemail() : "", s.phoneAttr = f.getVerificationProvider() === "phone" ? f.getphone() !== o.BuiltinFunctions.nullTextIdentifier() && o.BuiltinFunctions.substr(f.getphone(), 0, 1) !== "+" ? "+" + f.getphone() : f.getphone() : "", s.otp_typeAttr = "mt5_password_change", s.preferred_languageAttr = o.BuiltinFunctions.toLower(T.languageMapper$Action(e).charCodeOut), s
                            })(), e).then(function(s) {
                                u.value = s
                            }).then(function() {
                                (T.getFeatureFlag$Action("PhoneNumber", e).shouldEnableOut || T.getFeatureFlag$Action("Password", e).shouldEnableOut) && u.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr !== o.BuiltinFunctions.nullTextIdentifier() ? (t.widgets.get(i.getId("Desktop_Input")).validAttr = !1, t.widgets.get(i.getId("Desktop_Input")).validationMessageAttr = u.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr, t.widgets.get(i.getId("Mobile_Input")).validAttr = !1, t.widgets.get(i.getId("Mobile_Input")).validationMessageAttr = u.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr) : r._startTimer$Action(!0, e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resendCode$Action
        }
        set _resendCode$Action(e) {
            this.__resendCode$Action = e
        }
        get _onContinueClick$Action() {
            return this.hasOwnProperty("__onContinueClick$Action") || (this.__onContinueClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnContinueClick", function(n) {
                    return n && (n.setAttribute("code.function", "OnContinueClick"), n.setAttribute("outsystems.function.key", "d851f6a5-a58c-40bc-aba1-4973a2ee1d1f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnContinueClick"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder(new o.DataTypes.ErrorHandlerOutputType),
                            d = new o.DataTypes.VariableHolder,
                            s = new o.DataTypes.VariableHolder,
                            w = new o.DataTypes.VariableHolder,
                            b = new o.DataTypes.VariableHolder,
                            A = new o.DataTypes.VariableHolder,
                            c = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType),
                            U = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        return o.Flow.executeAsyncFlow(function() {
                            return t.variables.is_loadingVar = !0, t.variables.verify_requestVar.typeAttr = o.BuiltinFunctions.length(f.getphone()) > 0 && f.getVerificationProvider() === "phone" ? "sms" : "email", t.variables.verify_requestVar.phoneAttr = f.getVerificationProvider() === "phone" ? f.getphone() === "" ? t.variables.phoneIn : f.getphone() : "", t.variables.verify_requestVar.tokenAttr = t.variables.otpVar, t.variables.verify_requestVar.emailAttr = f.getVerificationProvider() === "email" ? f.getemail() === "" ? t.variables.emailIn : f.getemail() : "", t.variables.verify_requestVar.preferred_languageAttr = o.BuiltinFunctions.toLower(T.languageMapper$Action(e).charCodeOut), t.flush(), r.postAuthVerify$ServerAction(t.variables.verify_requestVar, o.BuiltinFunctions.getUserAgent(), "", e).then(function(y) {
                                w.value = y
                            }).then(function() {
                                return o.Flow.executeSequence(function() {
                                    return w.value.responseOut.dataAttr.length > 0 && w.value.responseOut.dataAttr.getItem(0).access_tokenAttr !== o.BuiltinFunctions.nullTextIdentifier() && w.value.responseOut.dataAttr.getItem(0).access_tokenAttr !== "" ? (f.setCode(o.BuiltinFunctions.nullTextIdentifier()), r._onClearTimer$Action(e), U.value.jSONOut = o.JSONUtils.serializeToJSON(w.value.responseOut, !1, !1), o.Logger.startActiveSpan("SaveAuthToSessionStorage", function(y) {
                                        y && (y.setAttribute("code.function", "SaveAuthToSessionStorage"), y.setAttribute("outsystems.function.key", "2ebad723-9da1-4c94-b84c-98eb9c021625"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return r.safeExecuteJSNode(at, "SaveAuthToSessionStorage", "OnContinueClick", {
                                                auth_response: o.DataConversion.JSNodeParamConverter.to(U.value.jSONOut, o.DataTypes.DataTypes.Text)
                                            }, function(C) {}, {}, {})
                                        } finally {
                                            y && y.end()
                                        }
                                    }, 1), b.value = T.getAuth$Action(e), o.Logger.startActiveSpan("PreloadonboardingConfig", function(y) {
                                        y && (y.setAttribute("code.function", "PreloadonboardingConfig"), y.setAttribute("outsystems.function.key", "56125c9a-1da8-45a0-84f9-593eb737fd53"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return r.safeExecuteJSNode(st, "PreloadonboardingConfig", "OnContinueClick", null, function(C) {}, {
                                                CallOnboardingConfig: r.clientActionProxies.callOnboardingConfig$Action
                                            }, {})
                                        } finally {
                                            y && y.end()
                                        }
                                    }, 1), t.flush(), r.getClientProfile$ServerAction(b.value.tokenOut, e).then(function(y) {
                                        d.value = y
                                    }).then(function() {
                                        t.variables.clientProfileVar = o.DataConversion.JSConversions.typeConvertRecord(d.value.responseOut.dataAttr.getCurrent(e.iterationContext), new se, function(y, C) {
                                            return C.client_idAttr = y.client_idAttr, C.first_nameAttr = y.first_nameAttr, C.last_nameAttr = y.last_nameAttr, C.date_of_birthAttr = y.date_of_birthAttr, C.birth_countryAttr = y.birth_countryAttr, C.residence_countryAttr = y.residence_countryAttr, C.citizen_countryAttr = y.citizen_countryAttr, C.genderAttr = y.genderAttr, C.created_timeAttr = y.created_timeAttr, C.updated_timeAttr = y.updated_timeAttr, C.financial_assessmentAttr.client_idAttr = y.client_idAttr, C.preferred_languageAttr = y.preferred_languageAttr, C
                                        })
                                    }).then(function() {
                                        return o.Flow.executeSequence(function() {
                                            if (!d.value.responseOut.dataAttr.isEmpty && d.value.responseOut.dataAttr.getItem(0).residence_countryAttr !== o.BuiltinFunctions.nullTextIdentifier()) f.setresidence(d.value.responseOut.dataAttr.getCurrent(e.iterationContext).residence_countryAttr), f.setfirst_name(d.value.responseOut.dataAttr.getCurrent(e.iterationContext).first_nameAttr), f.setlast_name(d.value.responseOut.dataAttr.getCurrent(e.iterationContext).last_nameAttr);
                                            else return t.flush(), r.postClientProfile$ServerAction((function() {
                                                var y = new vt;
                                                return y.residence_countryAttr = f.getresidence(), y.preferred_languageAttr = o.BuiltinFunctions.toLower(T.languageMapper$Action(e).charCodeOut), y
                                            })(), b.value.tokenOut, e).then(function(y) {
                                                s.value = y
                                            }).then(function() {
                                                t.variables.clientProfileVar = s.value.responseOut.dataAttr.getCurrent(e.iterationContext), f.setresidence(f.getresidence() !== o.BuiltinFunctions.nullTextIdentifier() ? f.getresidence() : s.value.responseOut.dataAttr.getCurrent(e.iterationContext).residence_countryAttr), f.setfirst_name(f.getfirst_name() !== o.BuiltinFunctions.nullTextIdentifier() ? f.getfirst_name() : s.value.responseOut.dataAttr.getCurrent(e.iterationContext).first_nameAttr), f.setlast_name(f.getlast_name() !== o.BuiltinFunctions.nullTextIdentifier() ? f.getlast_name() : s.value.responseOut.dataAttr.getCurrent(e.iterationContext).last_nameAttr)
                                            })
                                        })
                                    }).then(function() {
                                        return f.setresidence(f.getresidence() !== o.BuiltinFunctions.nullTextIdentifier() ? f.getresidence() : d.value.responseOut.dataAttr.getCurrent(e.iterationContext).residence_countryAttr), c.value.jSONOut = o.JSONUtils.serializeToJSON(t.variables.clientProfileVar, !1, !1), A.value = o.Logger.startActiveSpan("SetCookie", function(y) {
                                            y && (y.setAttribute("code.function", "SetCookie"), y.setAttribute("outsystems.function.key", "78dc4348-bb1b-4a26-b01f-f0c8ef6ff9bf"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return r.safeExecuteJSNode(lt, "SetCookie", "OnContinueClick", {
                                                    ClientProfile: o.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, o.DataTypes.DataTypes.Text),
                                                    UserEmail: o.DataConversion.JSNodeParamConverter.to(f.getemail(), o.DataTypes.DataTypes.Text),
                                                    Currency: o.DataConversion.JSNodeParamConverter.to(f.getcurrency(), o.DataTypes.DataTypes.Text),
                                                    language: o.DataConversion.JSNodeParamConverter.to(T.languageMapper$Action(e).charCodeOut, o.DataTypes.DataTypes.Text),
                                                    LanguageToUse: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                                }, function(C) {
                                                    var oe = new(r.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.OnContinueClick$setCookieJSResult"));
                                                    return oe.languageToUseOut = o.DataConversion.JSNodeParamConverter.from(C.LanguageToUse, o.DataTypes.DataTypes.Text), oe
                                                }, {}, {})
                                            } finally {
                                                y && y.end()
                                            }
                                        }, 1), T.redirectAfterAuth$Action(e), o.Logger.startActiveSpan("NavigateToRedirectURL", function(y) {
                                            y && (y.setAttribute("code.function", "NavigateToRedirectURL"), y.setAttribute("outsystems.function.key", "28d2dc52-ec02-4771-88b1-c3b2f488453c"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return r.safeExecuteJSNode(ot, "NavigateToRedirectURL", "OnContinueClick", null, function(C) {}, {}, {})
                                            } finally {
                                                y && y.end()
                                            }
                                        }, 1), t.variables.account_typeVar = f.getSignup_type_from_static(), T.changeLanguage$Action(A.value.languageToUseOut, e), r.onOtpVerifyStatusChange$Action(!0, e)
                                    })) : r.onOtpVerifyStatusChange$Action(!1, e).then(function() {
                                        t.variables.is_loadingVar = !1
                                    }).then(function() {
                                        w.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "RateLimit" ? (t.widgets.get(i.getId("Mobile_Input")).validAttr = !1, t.widgets.get(i.getId("Mobile_Input")).validationMessageAttr = w.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr, t.widgets.get(i.getId("Desktop_Input")).validAttr = !1, t.widgets.get(i.getId("Desktop_Input")).validationMessageAttr = w.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr) : (t.widgets.get(i.getId("Mobile_Input")).validAttr = !1, t.widgets.get(i.getId("Mobile_Input")).validationMessageAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("cFum9jEQ5Ui9OdgbIlpKIA#Value.105757575.1", "Enter a valid verification code"), t.widgets.get(i.getId("Desktop_Input")).validAttr = !1, t.widgets.get(i.getId("Desktop_Input")).validationMessageAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("TsOnDDQliUSFdhta7mvc0Q#Value.105757575.1", "Enter a valid verification code"))
                                    })
                                })
                            })
                        }).catch(function(y) {
                            if (o.Logger.debug("MT5OTPBlock.OnContinueClick", o.Exceptions.getMessage(y)), !o.Exceptions.isSystem(y)) return o.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = o.Exceptions.getMessage(y), o.Logger.startActiveSpan("AllExceptions", function(C) {
                                return C && (C.setAttribute("code.function", "AllExceptions"), C.setAttribute("outsystems.function.key", "487a2f43-e8fe-4c14-9554-2261a5a18287"), C.setAttribute("outsystems.function.owner.name", "uae"), C.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), C.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), o.Flow.tryFinally(function() {
                                    return o.Flow.executeAsyncFlow(function() {
                                        return t.variables.is_loadingVar = !1, o.FeedbackMessageService.showFeedbackMessage(u.value.exceptionMessageAttr, 3), o.Flow.returnAsync()
                                    })
                                }, function() {
                                    C && C.end()
                                })
                            }, 1);
                            throw y
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onContinueClick$Action
        }
        set _onContinueClick$Action(e) {
            this.__onContinueClick$Action = e
        }
        get _onKeypress$Action() {
            return this.hasOwnProperty("__onKeypress$Action") || (this.__onKeypress$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnKeypress", function(n) {
                    n && (n.setAttribute("code.function", "OnKeypress"), n.setAttribute("outsystems.function.key", "dcd63cd4-bb60-4e2e-b802-c85140765b96"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnKeypress"), e = r.callContext(e), o.Logger.startActiveSpan("Validate", function(u) {
                            u && (u.setAttribute("code.function", "Validate"), u.setAttribute("outsystems.function.key", "d5202a8e-bbb9-44fe-918a-3bd4b0a48d87"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(ut, "Validate", "OnKeypress", null, function(d) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onKeypress$Action
        }
        set _onKeypress$Action(e) {
            this.__onKeypress$Action = e
        }
        get _inputOnChange$Action() {
            return this.hasOwnProperty("__inputOnChange$Action") || (this.__inputOnChange$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("InputOnChange", function(n) {
                    n && (n.setAttribute("code.function", "InputOnChange"), n.setAttribute("outsystems.function.key", "e07550b7-b386-42a5-a974-c2c7e16519b5"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("InputOnChange"), e = r.callContext(e), t.widgets.get(i.getId("Desktop_Input")).validAttr = !0, t.widgets.get(i.getId("Desktop_Input")).validationMessageAttr = o.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(i.getId("Mobile_Input")).validAttr = !0, t.widgets.get(i.getId("Mobile_Input")).validationMessageAttr = o.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__inputOnChange$Action
        }
        set _inputOnChange$Action(e) {
            this.__inputOnChange$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "e1c9123d-ff2c-45ed-869c-556529400085"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder;
                        u.value = o.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "fbdf8f19-a3b7-4916-b9ec-d7943f6f3eac"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(ct, "JavaScript1", "OnInitialize", {
                                    TimeStamp: o.DataConversion.JSNodeParamConverter.to(f.getTimestamp(), o.DataTypes.DataTypes.Text),
                                    TimeElapsed: o.DataConversion.JSNodeParamConverter.to(0, o.DataTypes.DataTypes.Integer)
                                }, function(s) {
                                    var w = new(r.constructor.getVariableGroupType("uae.MT5Flow.MT5OTPBlock.OnInitialize$javaScript1JSResult"));
                                    return w.timeElapsedOut = o.DataConversion.JSNodeParamConverter.from(s.TimeElapsed, o.DataTypes.DataTypes.Integer), w
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), t.variables.timerVar = u.value.timeElapsedOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _callOnboardingConfig$Action() {
            return this.hasOwnProperty("__callOnboardingConfig$Action") || (this.__callOnboardingConfig$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("CallOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "CallOnboardingConfig"), n.setAttribute("outsystems.function.key", "e6f4ce23-18ff-4c4b-b13c-e3db8b261223"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("CallOnboardingConfig"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder,
                            d = new o.DataTypes.VariableHolder,
                            s = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        return o.Flow.executeAsyncFlow(function() {
                            return d.value = T.getAuth$Action(e), t.flush(), r.getOnboardingConfig$ServerAction(f.getresidence(), d.value.tokenOut, e).then(function(w) {
                                u.value = w
                            }).then(function() {
                                s.value.jSONOut = o.JSONUtils.serializeToJSON(u.value.responseOut.dataAttr, !1, !1), f.setonboarding_config_data(s.value.jSONOut)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__callOnboardingConfig$Action
        }
        set _callOnboardingConfig$Action(e) {
            this.__callOnboardingConfig$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "f42afb30-72aa-44f2-b2dd-7be2febc28c3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder;
                        t.variables.enable_resendVar = !1, t.variables.is_loadingVar = !1, t.variables.otpVar = f.getCode() !== o.BuiltinFunctions.nullTextIdentifier() ? f.getCode() : o.BuiltinFunctions.nullTextIdentifier(), u.value = W.setFocus$Action(i.getId("Mobile_Input"), e), T.triggerNextOnKeyboardEnter$Action("Input_TextVar", "Verify_btn", e), r._startTimer$Action(!1, e), r._removeJunk$Action(e), o.Logger.startActiveSpan("UpdateMetatag", function(d) {
                            d && (d.setAttribute("code.function", "UpdateMetatag"), d.setAttribute("outsystems.function.key", "fefcd6ef-91bc-491e-a8be-f5fbff276fa0"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(dt, "UpdateMetatag", "OnReady", null, function(s) {}, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        rightActionOnClick$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("RightActionOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "RightActionOnClick"), r.setAttribute("outsystems.function.key", "03ef3aa0-fad6-4d04-b631-096513491962"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._rightActionOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        verifyWithEmailPhoneNumberOnClick$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("VerifyWithEmailPhoneNumberOnClick__proxy", function(i) {
                return i && (i.setAttribute("code.function", "VerifyWithEmailPhoneNumberOnClick"), i.setAttribute("outsystems.function.key", "2a1ce998-a9f2-4d83-ac94-49ab99dd8f47"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._verifyWithEmailPhoneNumberOnClick$Action, t, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        backButtonOnClick$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("BackButtonOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "BackButtonOnClick"), r.setAttribute("outsystems.function.key", "321a374e-56c0-4945-b714-d379f9d03f38"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._backButtonOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        removeJunk$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("RemoveJunk__proxy", function(r) {
                r && (r.setAttribute("code.function", "RemoveJunk"), r.setAttribute("outsystems.function.key", "61308413-e762-4b9e-96a6-db260465229f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._removeJunk$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "72b65ace-d85e-470d-8531-358beea5b532"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        startTimer$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("StartTimer__proxy", function(i) {
                i && (i.setAttribute("code.function", "StartTimer"), i.setAttribute("outsystems.function.key", "c254e90b-5339-4e85-8f84-8d055b6d409c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._startTimer$Action, t, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        setTimer$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("SetTimer__proxy", function(i) {
                i && (i.setAttribute("code.function", "SetTimer"), i.setAttribute("outsystems.function.key", "c371c7b4-9927-4c8a-bbca-398378619b8d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setTimer$Action, t, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        setHasTimerStarted$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("SetHasTimerStarted__proxy", function(i) {
                i && (i.setAttribute("code.function", "SetHasTimerStarted"), i.setAttribute("outsystems.function.key", "c484f606-a77e-4fe2-99de-4a83cec2c360"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setHasTimerStarted$Action, t, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onClearTimer$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnClearTimer__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClearTimer"), r.setAttribute("outsystems.function.key", "d169b4da-f204-426f-b338-792c28d5e20e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClearTimer$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        resendCode$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("ResendCode__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ResendCode"), r.setAttribute("outsystems.function.key", "d449fd64-c006-43eb-b30e-bc050d55710f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._resendCode$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onContinueClick$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnContinueClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnContinueClick"), r.setAttribute("outsystems.function.key", "d851f6a5-a58c-40bc-aba1-4973a2ee1d1f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onContinueClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onKeypress$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnKeypress__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnKeypress"), r.setAttribute("outsystems.function.key", "dcd63cd4-bb60-4e2e-b802-c85140765b96"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onKeypress$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        inputOnChange$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("InputOnChange__proxy", function(r) {
                r && (r.setAttribute("code.function", "InputOnChange"), r.setAttribute("outsystems.function.key", "e07550b7-b386-42a5-a974-c2c7e16519b5"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._inputOnChange$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "e1c9123d-ff2c-45ed-869c-556529400085"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        callOnboardingConfig$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("CallOnboardingConfig__proxy", function(r) {
                return r && (r.setAttribute("code.function", "CallOnboardingConfig"), r.setAttribute("outsystems.function.key", "e6f4ce23-18ff-4c4b-b13c-e3db8b261223"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._callOnboardingConfig$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "f42afb30-72aa-44f2-b2dd-7be2febc28c3"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onOtpVerifyStatusChange$Action() {
            return this.hasOwnProperty("_onOtpVerifyStatusChange$Action") || (this._onOtpVerifyStatusChange$Action = function() {
                return Promise.resolve()
            }), this._onOtpVerifyStatusChange$Action
        }
        set onOtpVerifyStatusChange$Action(e) {
            this._onOtpVerifyStatusChange$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    i = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    i = this.idService;
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
                    r = this.model,
                    i = this.idService;
                return t.onDestroy$Action(e)
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
            return T.defaultTimeout
        }
    };
    l(g, "ControllerInner");
    let m = g;
    V = m, V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostReauthenticate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new me
        }, "defaultValue"),
        complexType: me
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new ye
        }, "defaultValue"),
        complexType: ye
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new ve
        }, "defaultValue"),
        complexType: ve
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionPostAuthVerify", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new ge
        }, "defaultValue"),
        complexType: ge
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new de
        }, "defaultValue"),
        complexType: de
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.VerifyWithEmailPhoneNumberOnClick$vars", [{
        name: "verificationType",
        attrName: "verificationTypeInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$vars", [{
        name: "is_triggered",
        attrName: "is_triggeredInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$javaScript1JSResult", [{
        name: "PreventTimerRun",
        attrName: "preventTimerRunOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.StartTimer$timerFuncJSResult", [{
        name: "TimeStamp",
        attrName: "timeStampOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.SetTimer$vars", [{
        name: "NewTimer",
        attrName: "newTimerInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Integer,
        defaultValue: l(function() {
            return 0
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.SetHasTimerStarted$vars", [{
        name: "HasTimerStarted2",
        attrName: "hasTimerStarted2InLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.OnContinueClick$setCookieJSResult", [{
        name: "LanguageToUse",
        attrName: "languageToUseOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), V.registerVariableGroupType("uae.MT5Flow.MT5OTPBlock.OnInitialize$javaScript1JSResult", [{
        name: "TimeElapsed",
        attrName: "timeElapsedOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Integer,
        defaultValue: l(function() {
            return 0
        }, "defaultValue")
    }])
}
var V, Pt = new o.Controller.ControllerFactory(V, j);
var ue = L.PlaceholderContent,
    Kn = L.IteratorPlaceholderContent,
    zt = l(function() {
        var m = pe(function(g) {
            var a = g.model,
                e = g.controller,
                t = g.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                n = X,
                u = G,
                d = {
                    props: g,
                    validateWidget: l(function(c) {
                        g.validateWidget(g, c)
                    }, "validateWidget")
                },
                s = a,
                w = Y,
                b = K,
                A = Q();
            return p.createElement("div", g.rootNodeProperties, w(W.isDesktop$Action(i).isDesktopOut, !1, this, function() {
                return [p.createElement(re, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0,
                        shouldShowQuestionInfo: !0,
                        ShowInfoButton: !0
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        closeBtnEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.backButtonOnClick$Action(e.callContext(c))
                        }, "closeBtnEvent$Action"),
                        infoBtnEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.rightActionOnClick$Action(e.callContext(c))
                        }, "infoBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        contentbody: new ue(function() {
                            return [p.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(le, {
                                _validationProps: {
                                    validationService: r
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "form display-flex flex-direction-column full-height full-width otp-screen",
                                _idProps: {
                                    service: t,
                                    name: "Form1"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "otp-desktop-layout padding-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Body2"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "verification-otp",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; justify-content: flex-start; margin-bottom: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "image"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(F, {
                                extendedProperties: {
                                    style: "height: 64px; margin-bottom: 0px;"
                                },
                                gridProperties: {
                                    width: "96px"
                                },
                                image: M.VersionedURL.getVersionedUrl("img/uae.ic_verification.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: s
                            })), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(H, {
                                style: "otp-header",
                                value: R.resolve(x.TranslationsService).getMessage("ctJOgPK+eUSX++hyKHz60A#ValueExpression.-1576264390.1", "Verification needed"),
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "margin-top-s",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [b(u("PNS5vBp0ME64fkwx6mX01A#Value", "Enter the verification code sent to "))],
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(H, {
                                extendedProperties: {
                                    dir: "ltr",
                                    style: "font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; overflow-wrap: anywhere;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: a.getCachedValue(t.getId("hTtTp85R1kyUI0T87ZzqOQ.Value"), function() {
                                    return " " + (f.getemail() !== O.nullTextIdentifier() && f.getVerificationProvider() === "email" ? f.getemail() : O.substr(f.getphone(), 0, 1) !== "+" ? "+" + f.getphone() : f.getphone())
                                }, function() {
                                    return f.getemail()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getphone()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: s
                            }))), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement($, {
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
                                },
                                enabled: !0,
                                extendedEvents: {
                                    onKeyDown: l(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        e.onKeypress$Action(e.callContext(c))
                                    }, "onKeyDown")
                                },
                                extendedProperties: {
                                    autoComplete: "off",
                                    inputmode: "numeric"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 6,
                                onChange: l(function() {
                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                    e.inputOnChange$Action(e.callContext(c))
                                }, "onChange"),
                                prompt: R.resolve(x.TranslationsService).getMessage("cqR9q85qbUqbQ1XgdrQ1qg#ValueExpression.24546143.1", "Enter 6-digit code"),
                                style: "form-control margin-top-m otp-placeholder",
                                variable: a.createVariable(N.DataTypes.Text, a.variables.otpVar, function(c) {
                                    a.variables.otpVar = c
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Desktop_Input"
                                },
                                _widgetRecordProvider: s
                            })), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col margin-top-xxl",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                style: "verification-timer",
                                text: [b(u("sDatPDADOUCQmHjUf7Ftew#Value", "Didn\u2019t receive the code?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: s
                            }), w(!a.variables.hasTimerStartedVar || a.variables.is_switchingVar, !1, this, function() {
                                return [p.createElement(h, {
                                    align: 0,
                                    animate: !1,
                                    style: "justify-content-center display-flex",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LinkContainer"
                                    },
                                    _widgetRecordProvider: s
                                }, p.createElement(q, {
                                    enabled: !0,
                                    onClick: l(function() {
                                        return Promise.resolve().then(function() {
                                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                            return e.resendCode$Action(e.callContext(c))
                                        })
                                    }, "onClick"),
                                    style: "text-underline margin-left-s text-neutral-10 font-bold text-align-center",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: s
                                }, p.createElement(D, {
                                    style: a.getCachedValue(t.getId("FXyHx_7cLEKtGbE9HY7f6Q.Style"), function() {
                                        return a.variables.is_switchingVar ? "action-disabled" : ""
                                    }, function() {
                                        return a.variables.is_switchingVar
                                    }),
                                    text: [b(u("FXyHx_7cLEKtGbE9HY7f6Q#Value", "Resend code"))],
                                    _idProps: {
                                        service: t,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: s
                                })))]
                            }, function() {
                                return [p.createElement(H, {
                                    extendedProperties: {
                                        style: "color: #adb5bd; font-weight: bold; text-decoration: underline;"
                                    },
                                    style: "text-underline margin-left-s text-neutral-10 font-bold disabled text-align-center",
                                    value: R.resolve(x.TranslationsService).getMessage("OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.1210306074.1", "Resend code (") + a.variables.timerVar.toString() + R.resolve(x.TranslationsService).getMessage("OA0rqYX7JEiQXWIyVpPH1A#ValueExpression.3606.1", "s)"),
                                    _idProps: {
                                        service: t,
                                        name: "MT5ResendTimer"
                                    },
                                    _widgetRecordProvider: s
                                })]
                            }), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: a.getCachedValue(t.getId("Rr4pWajkh0O7Tgx0u4ZQUQ.Visible"), function() {
                                    return T.getFeatureFlag$Action("PhoneNumber", i).shouldEnableOut && f.getphone() !== O.nullTextIdentifier() && f.getemail() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getphone()
                                }, function() {
                                    return f.getemail()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                style: "margin-top-s",
                                text: [b(u("P4QEJetl4kWl3M4uDTpYow#Value", "Or"))],
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "margin-top-s",
                                visible: a.getCachedValue(t.getId("haiPbJHogECT6AEmRdfGjg.Visible"), function() {
                                    return f.getVerificationProvider() === "phone" && f.getemail() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getemail()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(q, {
                                enabled: !a.variables.hasTimerStartedVar,
                                onClick: l(function() {
                                    return Promise.resolve().then(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.verifyWithEmailPhoneNumberOnClick$Action("email", e.callContext(c))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(t.getId("y8v0A7d9xEu1SpdzgI8lCQ.Style"), function() {
                                    return a.variables.hasTimerStartedVar ? "action-disabled" : ""
                                }, function() {
                                    return a.variables.hasTimerStartedVar
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                                },
                                text: [b(u("MT93yEXBW0+vSPLbE1j1Mw#Value", "Verify with email"))],
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: s
                            }))), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "margin-top-s",
                                visible: a.getCachedValue(t.getId("w96lPDOgeEK6p0+i9sE9Mg.Visible"), function() {
                                    return f.getVerificationProvider() === "email" && f.getphone() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getphone()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(q, {
                                enabled: !a.variables.hasTimerStartedVar,
                                onClick: l(function() {
                                    return Promise.resolve().then(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.verifyWithEmailPhoneNumberOnClick$Action("phone", e.callContext(c))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(t.getId("WjHF7rRK3EmjM4WLEmXfmg.Style"), function() {
                                    return a.variables.hasTimerStartedVar ? "action-disabled" : ""
                                }, function() {
                                    return a.variables.hasTimerStartedVar
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                                },
                                text: [b(u("sgWZZptm90uFVbAjdtGHJA#Value", "Verify with phone number"))],
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: s
                            }))))))), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "full-width display-flex padding-base otp-btn",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer2"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(J, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: a.variables.is_loadingVar
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "29",
                                    alias: "2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new ue(function() {
                                        return [p.createElement(Z, {
                                            enabled: a.getCachedValue(t.getId("Verify_btn2.Enabled"), function() {
                                                return O.length(a.variables.otpVar) === 6 && a.widgets.get(t.getId("Desktop_Input")).validAttr
                                            }, function() {
                                                return a.variables.otpVar
                                            }, function() {
                                                return a.widgets.get(t.getId("Desktop_Input")).validAttr
                                            }),
                                            extendedProperties: {
                                                style: "border-radius: 100px; height: 48px;"
                                            },
                                            isDefault: !0,
                                            onClick: l(function() {
                                                return d.validateWidget(t.getId("Form1")), Promise.resolve().then(function() {
                                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                    return e.onContinueClick$Action(e.callContext(c))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "Verify_btn2"
                                            },
                                            _widgetRecordProvider: s
                                        }, p.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: s
                                        }), p.createElement(H, {
                                            style: "",
                                            value: R.resolve(x.TranslationsService).getMessage("TUqvj4vHeEC+E7zMefJI+Q#ValueExpression.-1736084327.1", "Verify"),
                                            _idProps: {
                                                service: t,
                                                uuid: "32"
                                            },
                                            _widgetRecordProvider: s
                                        }))]
                                    })
                                },
                                _dependencies: [n(a.widgets.get(t.getId("Desktop_Input")).validAttr), n(a.variables.otpVar)]
                            }))))]
                        })
                    },
                    _dependencies: [n(a.widgets.get(t.getId("Desktop_Input")).validAttr), n(a.variables.is_loadingVar), n(a.variables.timerVar), n(a.variables.is_switchingVar), n(a.variables.hasTimerStartedVar), n(a.variables.otpVar), n(f.getphone()), n(f.getVerificationProvider()), n(f.getemail())]
                })]
            }, function() {
                return [p.createElement(ee, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1,
                        back_destination: "mt5_login_details",
                        has_close_icon: !0,
                        shouldShowQuestionInfo: !0,
                        hasRighAction: !0
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        onRightActionEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.rightActionOnClick$Action(e.callContext(c))
                        }, "onRightActionEvent$Action"),
                        closeEvent$Action: l(function() {
                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.backButtonOnClick$Action(e.callContext(c))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "33",
                        alias: "3"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        content: new ue(function() {
                            return [p.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "verification-otp",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; justify-content: flex-start; margin-bottom: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(F, {
                                extendedProperties: {
                                    style: "height: 64px; margin-bottom: 0px;"
                                },
                                gridProperties: {
                                    width: "96px"
                                },
                                image: M.VersionedURL.getVersionedUrl("img/uae.ic_verification.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: s
                            })), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(H, {
                                style: "otp-header",
                                value: R.resolve(x.TranslationsService).getMessage("lIWKvhX440a9SDFeC5SxrA#ValueExpression.-1576264390.1", "Verification needed"),
                                _idProps: {
                                    service: t,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col margin-top-s",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [b(u("a4nAOzaL1kS9vBN2yl+2GA#Value", "Enter the verification code sent to"))],
                                _idProps: {
                                    service: t,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(H, {
                                extendedProperties: {
                                    dir: "ltr",
                                    style: "font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; overflow-wrap: anywhere; white-space: normal;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: a.getCachedValue(t.getId("n08sgPYNXEukWhbO5_vjyw.Value"), function() {
                                    return " " + (f.getemail() !== O.nullTextIdentifier() && f.getVerificationProvider() === "email" ? f.getemail() : O.substr(f.getphone(), 0, 1) !== "+" ? "+" + f.getphone() : f.getphone())
                                }, function() {
                                    return f.getemail()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getphone()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: s
                            })), p.createElement($, {
                                _validationProps: {
                                    validationService: r
                                },
                                enabled: !0,
                                extendedEvents: {
                                    onKeyPress: l(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        e.onKeypress$Action(e.callContext(c))
                                    }, "onKeyPress")
                                },
                                extendedProperties: {
                                    autoComplete: "off",
                                    inputmode: "numeric"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 6,
                                onChange: l(function() {
                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                    e.inputOnChange$Action(e.callContext(c))
                                }, "onChange"),
                                prompt: R.resolve(x.TranslationsService).getMessage("AKfszH1hfUKkpxpKd3hV0A#ValueExpression.24546143.1", "Enter 6-digit code"),
                                style: "form-control margin-top-m otp-placeholder",
                                variable: a.createVariable(N.DataTypes.Text, a.variables.otpVar, function(c) {
                                    a.variables.otpVar = c
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Mobile_Input"
                                },
                                _widgetRecordProvider: s
                            }))), p.createElement(h, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col margin-top-xxl",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                style: "verification-timer",
                                text: [b(u("JTmvMUrwy0uOSGGYcF+o2Q#Value", "Didn\u2019t receive the code?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: s
                            }), w(!a.variables.hasTimerStartedVar || a.variables.is_switchingVar, !1, this, function() {
                                return [p.createElement(h, {
                                    align: 0,
                                    animate: !1,
                                    style: "justify-content-center display-flex",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "LinkContainer2"
                                    },
                                    _widgetRecordProvider: s
                                }, p.createElement(q, {
                                    enabled: !0,
                                    onClick: l(function() {
                                        return Promise.resolve().then(function() {
                                            var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                            return e.resendCode$Action(e.callContext(c))
                                        })
                                    }, "onClick"),
                                    style: "text-underline margin-left-s text-neutral-10 font-bold text-align-center",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "48"
                                    },
                                    _widgetRecordProvider: s
                                }, p.createElement(D, {
                                    style: a.getCachedValue(t.getId("33qfZ0gNwUCUkw7ygqa1hg.Style"), function() {
                                        return a.variables.is_switchingVar ? "action-disabled" : ""
                                    }, function() {
                                        return a.variables.is_switchingVar
                                    }),
                                    text: [b(u("33qfZ0gNwUCUkw7ygqa1hg#Value", "Resend code"))],
                                    _idProps: {
                                        service: t,
                                        uuid: "49"
                                    },
                                    _widgetRecordProvider: s
                                })))]
                            }, function() {
                                return [p.createElement(H, {
                                    extendedProperties: {
                                        style: "color: #adb5bd; font-weight: bold; text-decoration: underline;"
                                    },
                                    style: "text-underline margin-left-s text-neutral-10 font-bold disabled text-align-center",
                                    value: R.resolve(x.TranslationsService).getMessage("BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.1210306074.1", "Resend code (") + a.variables.timerVar.toString() + R.resolve(x.TranslationsService).getMessage("BgsbWDsnWE+GO8JkuEFX+A#ValueExpression.3606.1", "s)"),
                                    _idProps: {
                                        service: t,
                                        name: "MT5ResendTimer2"
                                    },
                                    _widgetRecordProvider: s
                                })]
                            }), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: a.getCachedValue(t.getId("9S+89uH6F0m3Pd8zAZK1Ow.Visible"), function() {
                                    return T.getFeatureFlag$Action("PhoneNumber", i).shouldEnableOut && f.getphone() !== O.nullTextIdentifier() && f.getemail() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getphone()
                                }, function() {
                                    return f.getemail()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                style: "margin-top-s",
                                text: [b(u("hGg7ExE_gEqy2BYIB5Wj5A#Value", "Or"))],
                                _idProps: {
                                    service: t,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: s
                            }), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "margin-top-s",
                                visible: a.getCachedValue(t.getId("z6XhT0LNIUupU+CmFeQagg.Visible"), function() {
                                    return f.getVerificationProvider() === "phone" && f.getemail() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getemail()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(q, {
                                enabled: !a.variables.hasTimerStartedVar,
                                onClick: l(function() {
                                    return Promise.resolve().then(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.verifyWithEmailPhoneNumberOnClick$Action("email", e.callContext(c))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(t.getId("pBT3MQYf8UCoPfVe2K6SpQ.Style"), function() {
                                    return a.variables.hasTimerStartedVar || a.variables.is_switchingVar ? "action-disabled" : ""
                                }, function() {
                                    return a.variables.hasTimerStartedVar
                                }, function() {
                                    return a.variables.is_switchingVar
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                                },
                                text: [b(u("X3gerj9uZ0Goph8VWywppA#Value", "Verify with email"))],
                                _idProps: {
                                    service: t,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: s
                            }))), p.createElement(h, {
                                align: 0,
                                animate: !0,
                                style: "margin-top-s",
                                visible: a.getCachedValue(t.getId("OCIPVD0Je0eSSuksLUrDSA.Visible"), function() {
                                    return f.getVerificationProvider() === "email" && f.getphone() !== O.nullTextIdentifier()
                                }, function() {
                                    return f.getVerificationProvider()
                                }, function() {
                                    return f.getphone()
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(q, {
                                enabled: !a.variables.hasTimerStartedVar,
                                onClick: l(function() {
                                    return Promise.resolve().then(function() {
                                        var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.verifyWithEmailPhoneNumberOnClick$Action("phone", e.callContext(c))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(t.getId("dgnXipx3PUKcF6mU_s8oWA.Style"), function() {
                                    return a.variables.hasTimerStartedVar || a.variables.is_switchingVar ? "action-disabled" : ""
                                }, function() {
                                    return a.variables.hasTimerStartedVar
                                }, function() {
                                    return a.variables.is_switchingVar
                                }),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                                },
                                text: [b(u("Ezifgh86eUC0aVdFL8gNwQ#Value", "Verify with phone number"))],
                                _idProps: {
                                    service: t,
                                    uuid: "58"
                                },
                                _widgetRecordProvider: s
                            })))))))]
                        }),
                        footer: new ue(function() {
                            return [p.createElement(h, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "calc(100% - 2rem)"
                                },
                                style: "absolute bottom-4 left-4 otp-mobile",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "59"
                                },
                                _widgetRecordProvider: s
                            }, p.createElement(J, {
                                getOwnerSpan: l(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: a.variables.is_loadingVar
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        e.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "60",
                                    alias: "4"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new ue(function() {
                                        return [p.createElement(Z, {
                                            enabled: a.getCachedValue(t.getId("Verify_btn.Enabled"), function() {
                                                return O.length(a.variables.otpVar) === 6 && a.widgets.get(t.getId("Mobile_Input")).validAttr
                                            }, function() {
                                                return a.variables.otpVar
                                            }, function() {
                                                return a.widgets.get(t.getId("Mobile_Input")).validAttr
                                            }),
                                            extendedProperties: {
                                                style: "border-radius: 100px; height: 48px;"
                                            },
                                            isDefault: !1,
                                            onClick: l(function() {
                                                return Promise.resolve().then(function() {
                                                    var c = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                    return e.onContinueClick$Action(e.callContext(c))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary w-full",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "Verify_btn"
                                            },
                                            _widgetRecordProvider: s
                                        }, p.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "62"
                                            },
                                            _widgetRecordProvider: s
                                        }), p.createElement(H, {
                                            style: "",
                                            value: R.resolve(x.TranslationsService).getMessage("eRkxs6VZ3kKSJaCkyh4lTA#ValueExpression.-1736084327.1", "Verify"),
                                            _idProps: {
                                                service: t,
                                                uuid: "63"
                                            },
                                            _widgetRecordProvider: s
                                        }))]
                                    })
                                },
                                _dependencies: [n(a.widgets.get(t.getId("Mobile_Input")).validAttr), n(a.variables.otpVar)]
                            }))]
                        })
                    },
                    _dependencies: [n(a.widgets.get(t.getId("Mobile_Input")).validAttr), n(a.variables.is_loadingVar), n(a.variables.timerVar), n(a.variables.is_switchingVar), n(a.variables.hasTimerStartedVar), n(a.variables.otpVar), n(f.getphone()), n(f.getVerificationProvider()), n(f.getemail())]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "MT5OTPBlock",
                    functionKey: "542875e0-c15b-4c44-9eaf-1ef498930770",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.MT5OTPBlock",
            modelFactory: ht,
            controllerFactory: Pt
        });
        return m.getCssDependencies = function() {
            return ["css/uae.MT5Flow.MT5OTPBlock.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [re, J, ee]
        }, m
    }, "componentFactory"),
    ft = zt();
var ci = L.PlaceholderContent,
    di = L.IteratorPlaceholderContent,
    jt = l(function() {
        var m = yt(function(g) {
            var a = g.model,
                e = g.controller,
                t = g.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                n = X,
                u = G,
                d = {
                    props: g,
                    validateWidget: l(function(c) {
                        g.validateWidget(g, c)
                    }, "validateWidget")
                },
                s = a,
                w = Y,
                b = K,
                A = Q();
            return Te.createElement("div", g.rootNodeProperties, w(a.variables.otpVerifiedVar, !1, this, function() {
                return [Te.createElement(et, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        from: a.variables.fromIn
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    _dependencies: []
                })]
            }, function() {
                return [Te.createElement(ft, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        from_section: a.variables.from_sectionIn,
                        from: a.variables.fromIn
                    },
                    events: {
                        _handleError: l(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        onOtpVerifyStatusChange$Action: l(function(c) {
                            var U = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.mT5OTPBlockOnOtpVerifyStatusChange$Action(c, e.callContext(U))
                        }, "onOtpVerifyStatusChange$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: s,
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "MT5ResetPassword",
                    functionKey: "907fd72d-c582-4019-bdc8-6e01cd4bbc54",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.MT5ResetPassword",
            modelFactory: qe,
            controllerFactory: Me,
            getTitle: l(function(g) {
                var a = g.model,
                    e = g.controller,
                    t = g.controller.idService,
                    r = e.validationService,
                    i = e.callContext(),
                    n = X,
                    u = G,
                    d = {
                        props: g,
                        validateWidget: l(function(s) {
                            g.validateWidget(g, s)
                        }, "validateWidget")
                    };
                return R.resolve(x.TranslationsService).getMessage("Ldd_kILFGUC9yG4BzUu8VA#TitleExpression.-1648935080.1", "MT5 reset password | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [et, ft]
        }, m
    }, "componentFactory"),
    Qt = jt();
export {
    Me as controllerModule, qe as modelModule, Qt as viewModule, xe as webFlowControllerModule
};