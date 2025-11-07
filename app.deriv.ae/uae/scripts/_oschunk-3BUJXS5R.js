import {
    a as z
} from "./_oschunk-OHBILT46.js";
import {
    a as U
} from "./_oschunk-KQUJMKWN.js";
import {
    a as X
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as N
} from "./_oschunk-4ZYYVQOE.js";
import {
    b as ae,
    f as _,
    h as x,
    n as F,
    o as $,
    p as k,
    q as ie,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ue,
    g as B,
    m as K,
    o as Z,
    q as ee,
    r as te,
    s as re,
    t as ne
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Y
} from "./_oschunk-KXORGPRQ.js";
import {
    C as W,
    Qb as V,
    Sb as A,
    ub as D
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as v,
    W as O,
    c as u,
    e as ce,
    m as p,
    n as C,
    p as E,
    v as R,
    w as h
} from "./_oschunk-M5BUVJ72.js";
var l = ce(ue());
var g = O,
    j = class j extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("password", "passwordVar", "password", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("passwordRepeat", "passwordRepeatVar", "passwordRepeat", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPasswordRepeat", "showPasswordRepeatVar", "showPasswordRepeat", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("EmailPhoneFieldValue", "emailPhoneFieldValueVar", "EmailPhoneFieldValue", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("show_spinner", "show_spinnerVar", "show_spinner", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("screen", "screenIn", "screen", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_screenInDataFetchStatus", "_screenInDataFetchStatus", "_screenInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_loading", "is_loadingIn", "is_loading", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("country_list", "country_listIn", "country_list", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new(g.GenericTypeCache.getGenericList(W)))
            }, !1, g.GenericTypeCache.getGenericList(W)), this.attr("_country_listInDataFetchStatus", "_country_listInDataFetchStatus", "_country_listInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FieldErrorMessage", "fieldErrorMessageIn", "FieldErrorMessage", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fieldErrorMessageInDataFetchStatus", "_fieldErrorMessageInDataFetchStatus", "_fieldErrorMessageInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedPhoneNumberCountry", "selectedPhoneNumberCountryIn", "SelectedPhoneNumberCountry", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedPhoneNumberCountryInDataFetchStatus", "_selectedPhoneNumberCountryInDataFetchStatus", "_selectedPhoneNumberCountryInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_button_disabled", "is_button_disabledIn", "is_button_disabled", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_button_disabledInDataFetchStatus", "_is_button_disabledInDataFetchStatus", "_is_button_disabledInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(j, "VariablesRecord");
var M = j;
M.init();
var q = class q extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_password: g.Model.ValidationWidgetRecord,
            Input_password2: g.Model.ValidationWidgetRecord,
            Input_EmailPhoneFieldValue: g.Model.ValidationWidgetRecord
        }
    }
};
u(q, "WidgetsRecord");
var G = q,
    Q = class Q extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return M
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(d) {
            "screen" in d && (this.variables.screenIn = d.screen, "_screenInDataFetchStatus" in d && (this.variables._screenInDataFetchStatus = d._screenInDataFetchStatus)), "is_loading" in d && (this.variables.is_loadingIn = d.is_loading, "_is_loadingInDataFetchStatus" in d && (this.variables._is_loadingInDataFetchStatus = d._is_loadingInDataFetchStatus)), "ErrorMessage" in d && (this.variables.errorMessageIn = d.ErrorMessage, "_errorMessageInDataFetchStatus" in d && (this.variables._errorMessageInDataFetchStatus = d._errorMessageInDataFetchStatus)), "country_list" in d && (this.variables.country_listIn = d.country_list, "_country_listInDataFetchStatus" in d && (this.variables._country_listInDataFetchStatus = d._country_listInDataFetchStatus)), "FieldErrorMessage" in d && (this.variables.fieldErrorMessageIn = d.FieldErrorMessage, "_fieldErrorMessageInDataFetchStatus" in d && (this.variables._fieldErrorMessageInDataFetchStatus = d._fieldErrorMessageInDataFetchStatus)), "SelectedPhoneNumberCountry" in d && (this.variables.selectedPhoneNumberCountryIn = d.SelectedPhoneNumberCountry, "_selectedPhoneNumberCountryInDataFetchStatus" in d && (this.variables._selectedPhoneNumberCountryInDataFetchStatus = d._selectedPhoneNumberCountryInDataFetchStatus)), "is_button_disabled" in d && (this.variables.is_button_disabledIn = d.is_button_disabled, "_is_button_disabledInDataFetchStatus" in d && (this.variables._is_button_disabledInDataFetchStatus = d._is_button_disabledInDataFetchStatus))
        }
    };
u(Q, "Model");
var L = Q;
L._hasValidationWidgetsValue = void 0;
var se = new g.Model.ModelFactory(L);
var de = {
        "HLXRESUY3kuSmlGXskgXiQ#ValueExpression.-1679196512.1": "\u062A\u0623\u0643\u064A\u062F",
        "HLXRESUY3kuSmlGXskgXiQ#ValueExpression.1310518931.1": "\u0623\u0631\u0633\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 (OTP)",
        "hoa0_3K2P0ahttvhxHYMUQ#ValueExpression.-374653993.1": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "hiQKNxSSGEacNuEzq4sDJw#Value": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "HJdTAUvvUkiJhQDL9TybDA#Value": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "d83f7awMWEOIeSTlFcSLmA#ValueExpression.1758829696.1": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "v_P4sEUHSUS5PgjUT3kgqA#ValueExpression.1455217307.1": "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "v_P4sEUHSUS5PgjUT3kgqA#ValueExpression.1591906331.1": "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "QGS2f6UCrE255mMZ8R2ytA#ValueExpression.1758829696.1": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "nm5omE3DXU2ZbgSMlUAhog#ValueExpression.1281629883.1": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "nm5omE3DXU2ZbgSMlUAhog#ValueExpression.1972771131.1": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        "WsTC7Kj4_0q03Yo9UdKA6g#Value": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A. \u0633\u062A\u062A\u0644\u0642\u0649 \u0631\u0645\u0632 OTP \u0644\u062A\u0623\u0643\u064A\u062F \u0637\u0644\u0628 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646.",
        "FgSVnz67WkOSkL1W6O9TaA#Value": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643. \u0633\u062A\u062A\u0644\u0642\u0649 \u0631\u0645\u0632 OTP \u0644\u062A\u0623\u0643\u064A\u062F \u0637\u0644\u0628 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646.",
        "wc79ojuY8kK7uloHpR6wBA#Value": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "5MB+FprbUk6i8YytXiOfHg#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "loaAmqm+lUigAYjXsdJg5g#Value": "Deriv \u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649.",
        "YOEMa3woxk67IwQiXqi38w#Value": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "GPCFbibHIkSJNaJ5xnFAIw#Value": "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "yY1vIExN30qpzmcAq2PIqQ#Value": "\u0627\u0633\u062A\u062E\u062F\u0645 \u0647\u0630\u0627 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0643\u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644.",
        "vd9vuLjzmU6JqD3BCA1siA#Value": "\u0623\u0646\u0634\u0626 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "S+wtQxwVNU+t9buaPbgHGg#Value.592876195.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629.",
        "Iwagu5osuEiXbkRzzqNEtQ#Value.592876195.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629.",
        "mHxPg0LjwECTOorBzt6hLQ#Value.592876195.1": "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629."
    },
    oe = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };

function J(S, d, r, t) {
    let e = document.getElementById(S.WidgetID);
    e == null || e.addEventListener("keydown", n => {
        n.key === " " && n.preventDefault()
    }), e == null || e.addEventListener("input", n => {
        if (new RegExp(/\s/g).test(n.target.value)) {
            let i = n.target.value.replace(/\s/g, "");
            d.InputFieldValueChange(i)
        }
    })
}
u(J, "default");
var s = O; {
    let d = class d extends s.Controller.BaseViewController {
        constructor(t, e, n) {
            super(t, e, n, oe);
            var a = this.controller;
            this.clientActionProxies = {
                inputFieldValueChange$Action: u(function(i) {
                    return i = i === void 0 ? "" : i, a.executeActionInsideJSNode(a._inputFieldValueChange$Action.bind(a, s.DataConversion.JSNodeParamConverter.from(i, s.DataTypes.DataTypes.Text)), a.callContext(), function(o) {
                        return {}
                    }, function() {}, "InputFieldValueChange")
                }, "inputFieldValueChange$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "03eae4cc-5be5-4868-95a8-80022041b82e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), t = n.callContext(t), e.widgets.get(a.getId("Input_password")).validationMessageAttr = e.variables.errorMessageIn, e.widgets.get(a.getId("Input_password")).validAttr = e.variables.errorMessageIn === s.BuiltinFunctions.nullTextIdentifier(), e.widgets.get(a.getId("Input_EmailPhoneFieldValue")).validationMessageAttr = e.variables.fieldErrorMessageIn, e.widgets.get(a.getId("Input_EmailPhoneFieldValue")).validAttr = e.variables.fieldErrorMessageIn === s.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _togglePasswordView$Action() {
            return this.hasOwnProperty("__togglePasswordView$Action") || (this.__togglePasswordView$Action = function(t, e) {
                var n = this.model,
                    a = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("TogglePasswordView", function(o) {
                    o && (o.setAttribute("code.function", "TogglePasswordView"), o.setAttribute("outsystems.function.key", "08ecbd7f-c28a-48f5-85db-1cfd22109ea7"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("TogglePasswordView"), e = a.callContext(e);
                        var m = new s.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.Common.PasswordBlock.TogglePasswordView$vars")));
                        m.value.is_confirm_fieldInLocal = t, m.value.is_confirm_fieldInLocal ? n.variables.showPasswordRepeatVar = !n.variables.showPasswordRepeatVar : n.variables.showPasswordVar = !n.variables.showPasswordVar
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__togglePasswordView$Action
        }
        set _togglePasswordView$Action(t) {
            this.__togglePasswordView$Action = t
        }
        get _removeSpace$Action() {
            return this.hasOwnProperty("__removeSpace$Action") || (this.__removeSpace$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("RemoveSpace", function(i) {
                    i && (i.setAttribute("code.function", "RemoveSpace"), i.setAttribute("outsystems.function.key", "2a06cef0-3a26-47bd-b4b3-d497637f97eb"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RemoveSpace"), t = n.callContext(t), s.Logger.startActiveSpan("RemoveSpace", function(o) {
                            o && (o.setAttribute("code.function", "RemoveSpace"), o.setAttribute("outsystems.function.key", "a2be52fa-6e64-4087-8aaf-bdaf5388bbba"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(J, "RemoveSpace", "RemoveSpace", {
                                    WidgetID: s.DataConversion.JSNodeParamConverter.to(a.getId("Input_EmailPhoneFieldValue"), s.DataTypes.DataTypes.Text)
                                }, function(m) {}, {
                                    InputFieldValueChange: n.clientActionProxies.inputFieldValueChange$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__removeSpace$Action
        }
        set _removeSpace$Action(t) {
            this.__removeSpace$Action = t
        }
        get _onClickForgotPassword$Action() {
            return this.hasOwnProperty("__onClickForgotPassword$Action") || (this.__onClickForgotPassword$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnClickForgotPassword", function(i) {
                    i && (i.setAttribute("code.function", "OnClickForgotPassword"), i.setAttribute("outsystems.function.key", "35118f81-672f-4c33-8f18-a126635347a6"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickForgotPassword"), t = n.callContext(t), e.variables.show_spinnerVar = !0, s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "forgot-password", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickForgotPassword$Action
        }
        set _onClickForgotPassword$Action(t) {
            this.__onClickForgotPassword$Action = t
        }
        get _onCountrySelect$Action() {
            return this.hasOwnProperty("__onCountrySelect$Action") || (this.__onCountrySelect$Action = function(t, e) {
                var n = this.model,
                    a = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnCountrySelect", function(o) {
                    return o && (o.setAttribute("code.function", "OnCountrySelect"), o.setAttribute("outsystems.function.key", "4ea811a2-7ad0-4837-9030-e98b64b55b14"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnCountrySelect"), e = a.callContext(e);
                        var m = new s.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.Common.PasswordBlock.OnCountrySelect$vars")));
                        return m.value.selectedCountryInLocal = t, s.Flow.executeAsyncFlow(function() {
                            return a.countryChangeEvent$Action(m.value.selectedCountryInLocal, e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onCountrySelect$Action
        }
        set _onCountrySelect$Action(t) {
            this.__onCountrySelect$Action = t
        }
        get _inputFieldValueChange$Action() {
            return this.hasOwnProperty("__inputFieldValueChange$Action") || (this.__inputFieldValueChange$Action = function(t, e) {
                var n = this.model,
                    a = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("InputFieldValueChange", function(o) {
                    return o && (o.setAttribute("code.function", "InputFieldValueChange"), o.setAttribute("outsystems.function.key", "4fb1595b-0c50-444a-b770-9c901af5b5ea"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InputFieldValueChange"), e = a.callContext(e);
                        var m = new s.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.Common.PasswordBlock.InputFieldValueChange$vars")));
                        return m.value.fieldValueInLocal = t, s.Flow.executeAsyncFlow(function() {
                            return n.variables.emailPhoneFieldValueVar = m.value.fieldValueInLocal, a.changePhoneEmailEvent$Action(m.value.fieldValueInLocal, e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__inputFieldValueChange$Action
        }
        set _inputFieldValueChange$Action(t) {
            this.__inputFieldValueChange$Action = t
        }
        get _onClickConfirm$Action() {
            return this.hasOwnProperty("__onClickConfirm$Action") || (this.__onClickConfirm$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnClickConfirm", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickConfirm"), i.setAttribute("outsystems.function.key", "58871196-0cc8-435d-910a-68bf2770a3eb"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnClickConfirm"), t = n.callContext(t), s.Flow.executeAsyncFlow(function() {
                            return A.getFeatureFlag$Action("Tracking", t).shouldEnableOut && A.rudderstackTrackEvent$Action("ce_authorisation_ae_form", "click", "verify_password", e.variables.screenIn, "", "", "", t), s.Flow.executeSequence(function() {
                                if (!(e.variables.screenIn !== "login" && e.variables.screenIn !== "forgot") || e.variables.passwordVar === e.variables.passwordRepeatVar) return n.confirmPasswordEvent$Action(e.variables.passwordVar, t);
                                e.widgets.get(a.getId("Input_password2")).validAttr = !1, e.widgets.get(a.getId("Input_password2")).validationMessageAttr = s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("mHxPg0LjwECTOorBzt6hLQ#Value.592876195.1", "Passwords do not match.")
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickConfirm$Action
        }
        set _onClickConfirm$Action(t) {
            this.__onClickConfirm$Action = t
        }
        get _confirmPasswordOnChange$Action() {
            return this.hasOwnProperty("__confirmPasswordOnChange$Action") || (this.__confirmPasswordOnChange$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("ConfirmPasswordOnChange", function(i) {
                    i && (i.setAttribute("code.function", "ConfirmPasswordOnChange"), i.setAttribute("outsystems.function.key", "618e4819-e15a-499a-af9e-28750b93f86b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("ConfirmPasswordOnChange"), t = n.callContext(t), e.variables.passwordRepeatVar !== s.BuiltinFunctions.nullTextIdentifier() && e.variables.passwordVar !== e.variables.passwordRepeatVar && e.variables.passwordVar !== s.BuiltinFunctions.nullTextIdentifier() ? (e.widgets.get(a.getId("Input_password2")).validAttr = !1, e.widgets.get(a.getId("Input_password2")).validationMessageAttr = s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("Iwagu5osuEiXbkRzzqNEtQ#Value.592876195.1", "Passwords do not match.")) : (e.widgets.get(a.getId("Input_password2")).validAttr = !0, e.widgets.get(a.getId("Input_password2")).validationMessageAttr = s.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__confirmPasswordOnChange$Action
        }
        set _confirmPasswordOnChange$Action(t) {
            this.__confirmPasswordOnChange$Action = t
        }
        get _input_passwordOnChange$Action() {
            return this.hasOwnProperty("__input_passwordOnChange$Action") || (this.__input_passwordOnChange$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("Input_passwordOnChange", function(i) {
                    return i && (i.setAttribute("code.function", "Input_passwordOnChange"), i.setAttribute("outsystems.function.key", "62463b46-bf14-4973-bb91-f1c7340f734b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("Input_passwordOnChange"), t = n.callContext(t), s.Flow.executeAsyncFlow(function() {
                            return e.variables.passwordRepeatVar !== s.BuiltinFunctions.nullTextIdentifier() && (e.variables.passwordVar !== e.variables.passwordRepeatVar && e.variables.passwordVar !== s.BuiltinFunctions.nullTextIdentifier() ? (e.widgets.get(a.getId("Input_password2")).validAttr = !1, e.widgets.get(a.getId("Input_password2")).validationMessageAttr = s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("S+wtQxwVNU+t9buaPbgHGg#Value.592876195.1", "Passwords do not match.")) : (e.widgets.get(a.getId("Input_password2")).validAttr = !0, e.widgets.get(a.getId("Input_password2")).validationMessageAttr = s.BuiltinFunctions.nullTextIdentifier())), s.Flow.executeSequence(function() {
                                if (e.variables.errorMessageIn !== s.BuiltinFunctions.nullTextIdentifier()) return n.errorMessageClearEvent$Action(t)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__input_passwordOnChange$Action
        }
        set _input_passwordOnChange$Action(t) {
            this.__input_passwordOnChange$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "81bbe267-7980-4146-ac9e-39ef50ad3b59"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t), e.variables.screenIn === "forgot" && n._removeSpace$Action(t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _validatePassword$Action() {
            return this.hasOwnProperty("__validatePassword$Action") || (this.__validatePassword$Action = function(t, e) {
                var n = this.model,
                    a = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("ValidatePassword", function(o) {
                    o && (o.setAttribute("code.function", "ValidatePassword"), o.setAttribute("outsystems.function.key", "ed087afd-ec18-4828-bd0d-a995856c9083"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ValidatePassword"), e = a.callContext(e);
                        var m = new s.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.Common.PasswordBlock.ValidatePassword$vars")));
                        m.value.isValidInLocal = t, n.variables.isPasswordValidVar = m.value.isValidInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__validatePassword$Action
        }
        set _validatePassword$Action(t) {
            this.__validatePassword$Action = t
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "03eae4cc-5be5-4868-95a8-80022041b82e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        togglePasswordView$Action(t, e) {
            var n = this.controller;
            return s.Logger.startActiveSpan("TogglePasswordView__proxy", function(a) {
                a && (a.setAttribute("code.function", "TogglePasswordView"), a.setAttribute("outsystems.function.key", "08ecbd7f-c28a-48f5-85db-1cfd22109ea7"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._togglePasswordView$Action, e, t)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        removeSpace$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("RemoveSpace__proxy", function(n) {
                n && (n.setAttribute("code.function", "RemoveSpace"), n.setAttribute("outsystems.function.key", "2a06cef0-3a26-47bd-b4b3-d497637f97eb"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._removeSpace$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickForgotPassword$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("OnClickForgotPassword__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickForgotPassword"), n.setAttribute("outsystems.function.key", "35118f81-672f-4c33-8f18-a126635347a6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickForgotPassword$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onCountrySelect$Action(t, e) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnCountrySelect__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnCountrySelect"), a.setAttribute("outsystems.function.key", "4ea811a2-7ad0-4837-9030-e98b64b55b14"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onCountrySelect$Action, e, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        inputFieldValueChange$Action(t, e) {
            var n = this.controller;
            return s.Logger.startActiveSpan("InputFieldValueChange__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InputFieldValueChange"), a.setAttribute("outsystems.function.key", "4fb1595b-0c50-444a-b770-9c901af5b5ea"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._inputFieldValueChange$Action, e, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onClickConfirm$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("OnClickConfirm__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnClickConfirm"), n.setAttribute("outsystems.function.key", "58871196-0cc8-435d-910a-68bf2770a3eb"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onClickConfirm$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        confirmPasswordOnChange$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("ConfirmPasswordOnChange__proxy", function(n) {
                n && (n.setAttribute("code.function", "ConfirmPasswordOnChange"), n.setAttribute("outsystems.function.key", "618e4819-e15a-499a-af9e-28750b93f86b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._confirmPasswordOnChange$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        input_passwordOnChange$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("Input_passwordOnChange__proxy", function(n) {
                return n && (n.setAttribute("code.function", "Input_passwordOnChange"), n.setAttribute("outsystems.function.key", "62463b46-bf14-4973-bb91-f1c7340f734b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._input_passwordOnChange$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "81bbe267-7980-4146-ac9e-39ef50ad3b59"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        validatePassword$Action(t, e) {
            var n = this.controller;
            return s.Logger.startActiveSpan("ValidatePassword__proxy", function(a) {
                a && (a.setAttribute("code.function", "ValidatePassword"), a.setAttribute("outsystems.function.key", "ed087afd-ec18-4828-bd0d-a995856c9083"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._validatePassword$Action, e, t)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get changePhoneEmailEvent$Action() {
            return this.hasOwnProperty("_changePhoneEmailEvent$Action") || (this._changePhoneEmailEvent$Action = function() {
                return Promise.resolve()
            }), this._changePhoneEmailEvent$Action
        }
        set changePhoneEmailEvent$Action(t) {
            this._changePhoneEmailEvent$Action = t
        }
        get countryChangeEvent$Action() {
            return this.hasOwnProperty("_countryChangeEvent$Action") || (this._countryChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._countryChangeEvent$Action
        }
        set countryChangeEvent$Action(t) {
            this._countryChangeEvent$Action = t
        }
        get errorMessageClearEvent$Action() {
            return this.hasOwnProperty("_errorMessageClearEvent$Action") || (this._errorMessageClearEvent$Action = function() {
                return Promise.resolve()
            }), this._errorMessageClearEvent$Action
        }
        set errorMessageClearEvent$Action(t) {
            this._errorMessageClearEvent$Action = t
        }
        get confirmPasswordEvent$Action() {
            return this.hasOwnProperty("_confirmPasswordEvent$Action") || (this._confirmPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._confirmPasswordEvent$Action
        }
        set confirmPasswordEvent$Action(t) {
            this._confirmPasswordEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    a = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
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
                    n = this.model,
                    a = this.idService;
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
            return A.defaultTimeout
        }
    };
    u(d, "ControllerInner");
    let S = d;
    P = S, P.registerVariableGroupType("uae.Common.PasswordBlock.TogglePasswordView$vars", [{
        name: "is_confirm_field",
        attrName: "is_confirm_fieldInLocal",
        mandatory: !1,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), P.registerVariableGroupType("uae.Common.PasswordBlock.OnCountrySelect$vars", [{
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), P.registerVariableGroupType("uae.Common.PasswordBlock.InputFieldValueChange$vars", [{
        name: "FieldValue",
        attrName: "fieldValueInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), P.registerVariableGroupType("uae.Common.PasswordBlock.ValidatePassword$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var P, le = new s.Controller.ControllerFactory(P, Y);
var T = B.PlaceholderContent,
    ze = B.IteratorPlaceholderContent,
    ge = u(function() {
        var S = Z(function(d) {
            var r = d.model,
                t = d.controller,
                e = d.controller.idService,
                n = t.validationService,
                a = t.callContext(),
                i = re,
                o = ne,
                m = {
                    props: d,
                    validateWidget: u(function(f) {
                        d.validateWidget(d, f)
                    }, "validateWidget")
                },
                c = r,
                H = te,
                b = ee,
                w = K();
            return l.createElement("div", d.rootNodeProperties, l.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column full-height overflow-hidden",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                style: r.getCachedValue(e.getId("dXv5baHneka_hW+KiP6DTg.Style"), function() {
                    return "flex-grow overflow-scroll " + (V.isDesktop$Action(a).isDesktopOut ? "" : "padding-bottom-base")
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: c
            }, l.createElement(_, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column gap-xs margin-bottom-m",
                visible: r.variables.screenIn === "setup",
                _idProps: {
                    service: e,
                    name: "SetupPasswordTitle"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(y, {
                style: "password-block__title",
                text: [b(o("vd9vuLjzmU6JqD3BCA1siA#Value", "Set your password"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: c
            }), l.createElement(y, {
                style: "font-size-base",
                text: [b(o("yY1vIExN30qpzmcAq2PIqQ#Value", "Use this password as a backup to log in."))],
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: c
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column gap-xs margin-bottom-m",
                visible: r.variables.screenIn === "change",
                _idProps: {
                    service: e,
                    name: "ChangePasswordTitle"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(y, {
                style: "password-block__title",
                text: [b(o("GPCFbibHIkSJNaJ5xnFAIw#Value", "Change password"))],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: c
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column gap-xs margin-bottom-m",
                visible: r.variables.screenIn === "login",
                _idProps: {
                    service: e,
                    name: "LoginPasswordTitle"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(y, {
                style: "password-block__title",
                text: [b(o("YOEMa3woxk67IwQiXqi38w#Value", "Enter password"))],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: c
            }), l.createElement(y, {
                style: "font-size-base",
                text: [b(o("loaAmqm+lUigAYjXsdJg5g#Value", "Enter your password to log in to your Deriv account."))],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: c
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column gap-xs margin-bottom-m",
                visible: r.variables.screenIn === "reset",
                _idProps: {
                    service: e,
                    name: "ResetPasswordTitle"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(y, {
                style: "password-block__title",
                text: [b(o("5MB+FprbUk6i8YytXiOfHg#Value", "Reset password"))],
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: c
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column gap-xs margin-bottom-m",
                visible: r.variables.screenIn === "forgot",
                _idProps: {
                    service: e,
                    name: "ForgotPasswordTitle"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(y, {
                style: "password-block__title",
                text: [b(o("wc79ojuY8kK7uloHpR6wBA#Value", "Forgot your password?"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: c
            }), H(A.getFeatureFlag$Action("PhoneNumber", a).shouldEnableOut, !1, this, function() {
                return [l.createElement(y, {
                    style: "font-size-base",
                    text: [b(o("FgSVnz67WkOSkL1W6O9TaA#Value", "Enter your email or phone number. You\u2019ll get an OTP to confirm your reset request."))],
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: c
                })]
            }, function() {
                return [l.createElement(y, {
                    style: "font-size-base",
                    text: [b(o("WsTC7Kj4_0q03Yo9UdKA6g#Value", "Enter your email. You\u2019ll get an OTP to confirm your reset request."))],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: c
                })]
            })), l.createElement(_, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "w-full display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Field"
                },
                _widgetRecordProvider: c
            }, l.createElement(_, {
                align: 0,
                animate: !0,
                visible: r.variables.screenIn !== "forgot",
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(k, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: c
            }, l.createElement(x, {
                style: "font-size-s",
                value: r.getCachedValue(e.getId("LH2HY_rEfEylvQOLhrjkXg.Value"), function() {
                    return r.variables.screenIn === "change" || r.variables.screenIn === "reset" ? p.resolve(C.TranslationsService).getMessage("nm5omE3DXU2ZbgSMlUAhog#ValueExpression.1972771131.1", "New password") : p.resolve(C.TranslationsService).getMessage("nm5omE3DXU2ZbgSMlUAhog#ValueExpression.1281629883.1", "Password")
                }, function() {
                    return r.variables.screenIn
                }),
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: c,
                value_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }))), l.createElement(_, {
                align: 0,
                animate: !0,
                style: r.getCachedValue(e.getId("ahw+TuX0h0uuRlKPddn01A.Style"), function() {
                    return V.isDesktop$Action(a).isDesktopOut && r.variables.screenIn === "login" ? "margin-bottom-m" : ""
                }, function() {
                    return r.variables.screenIn
                }),
                visible: r.variables.screenIn !== "forgot",
                _idProps: {
                    service: e,
                    uuid: "20"
                },
                _widgetRecordProvider: c,
                style_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus),
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(N, {
                getOwnerSpan: u(function() {
                    return w.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return w.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: r.getCachedValue(e.getId("oIFqj6DaakG6JIAM2XXD9g.AlignIconRight"), function() {
                        return h.toLower(A.languageMapper$Action(a).charCodeOut) === "en"
                    })
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "21",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    icon: new T(function() {
                        return [l.createElement(_, {
                            align: 0,
                            animate: !0,
                            visible: r.getCachedValue(e.getId("afuD8Kq_+kuQRXA4TGldtg.Visible"), function() {
                                return r.variables.passwordVar !== h.nullTextIdentifier()
                            }, function() {
                                return r.variables.passwordVar
                            }),
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: c
                        }, H(r.variables.showPasswordVar, !1, this, function() {
                            return [l.createElement(F, {
                                extendedEvents: {
                                    onClick: u(function() {
                                        var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.togglePasswordView$Action(!1, t.callContext(f))
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: c
                            })]
                        }, function() {
                            return [l.createElement(F, {
                                extendedEvents: {
                                    onClick: u(function() {
                                        var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.togglePasswordView$Action(!1, t.callContext(f))
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: c
                            })]
                        }))]
                    }),
                    input: new T(function() {
                        return [l.createElement($, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            extendedProperties: {
                                type: r.getCachedValue(e.getId("Input_password.type"), function() {
                                    return r.variables.showPasswordVar ? "text" : "password"
                                }, function() {
                                    return r.variables.showPasswordVar
                                })
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !1,
                            maxLength: 16,
                            onChange: u(function() {
                                return Promise.resolve().then(function() {
                                    var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                    return t.input_passwordOnChange$Action(t.callContext(f))
                                })
                            }, "onChange"),
                            prompt: p.resolve(C.TranslationsService).getMessage("QGS2f6UCrE255mMZ8R2ytA#ValueExpression.1758829696.1", "Enter your password"),
                            style: "form-control font-size-s",
                            variable: r.createVariable(R.DataTypes.Text, r.variables.passwordVar, function(f) {
                                r.variables.passwordVar = f
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: c
                        })]
                    })
                },
                _dependencies: [i(r.variables.showPasswordVar), i(r.variables.passwordVar)]
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: r.getCachedValue(e.getId("PnBtdrCR10e5vuyOPHnsTA.Style"), function() {
                    return "margin-bottom-base " + (r.variables.errorMessageIn !== h.nullTextIdentifier() ? "password-block__error" : "")
                }, function() {
                    return r.variables.errorMessageIn
                }),
                visible: r.variables.screenIn !== "login" && r.variables.screenIn !== "forgot",
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: c,
                style_dataFetchStatus: v.calculateDataFetchStatus(r.variables._errorMessageInDataFetchStatus),
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(z, {
                getOwnerSpan: u(function() {
                    return w.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return w.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    MustNotContainSpaces: !0,
                    Password: r.variables.passwordVar,
                    HasAtLeastOneNumber: !0,
                    Type: "CREATE",
                    Length: 8,
                    HasAtLeastOneSpecialCharacter: !0,
                    HasAtLeastUpperCase: !0,
                    HasAtLeastLowerCase: !0
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError"),
                    compliant$Action: u(function(f) {
                        var I = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                        t.validatePassword$Action(f, t.callContext(I))
                    }, "compliant$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "27",
                    alias: "2"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                visible: r.variables.screenIn !== "login" && r.variables.screenIn !== "forgot",
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(k, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: c
            }, l.createElement(x, {
                style: "font-size-s",
                value: r.getCachedValue(e.getId("NwpZfEPPdkusrU3X6Gbi2A.Value"), function() {
                    return r.variables.screenIn === "change" || r.variables.screenIn === "reset" ? p.resolve(C.TranslationsService).getMessage("v_P4sEUHSUS5PgjUT3kgqA#ValueExpression.1455217307.1", "Confirm new password") : p.resolve(C.TranslationsService).getMessage("v_P4sEUHSUS5PgjUT3kgqA#ValueExpression.1591906331.1", "Confirm password")
                }, function() {
                    return r.variables.screenIn
                }),
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: c,
                value_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }))), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "margin-bottom-m",
                visible: r.variables.screenIn !== "login" && r.variables.screenIn !== "forgot",
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(N, {
                getOwnerSpan: u(function() {
                    return w.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return w.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: r.getCachedValue(e.getId("G1wd8VgCe0qGvRympJ7s4A.AlignIconRight"), function() {
                        return h.toLower(A.languageMapper$Action(a).charCodeOut) === "en"
                    })
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "32",
                    alias: "3"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    icon: new T(function() {
                        return [l.createElement(_, {
                            align: 0,
                            animate: !0,
                            visible: r.getCachedValue(e.getId("x+x9xEytBEeZbtXaEOrgew.Visible"), function() {
                                return r.variables.passwordRepeatVar !== h.nullTextIdentifier()
                            }, function() {
                                return r.variables.passwordRepeatVar
                            }),
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: c
                        }, H(r.variables.showPasswordRepeatVar, !1, this, function() {
                            return [l.createElement(F, {
                                extendedEvents: {
                                    onClick: u(function() {
                                        var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.togglePasswordView$Action(!0, t.callContext(f))
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: c
                            })]
                        }, function() {
                            return [l.createElement(F, {
                                extendedEvents: {
                                    onClick: u(function() {
                                        var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.togglePasswordView$Action(!0, t.callContext(f))
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: c
                            })]
                        }))]
                    }),
                    input: new T(function() {
                        return [l.createElement($, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            extendedProperties: {
                                type: r.getCachedValue(e.getId("Input_password2.type"), function() {
                                    return r.variables.showPasswordRepeatVar ? "text" : "password"
                                }, function() {
                                    return r.variables.showPasswordRepeatVar
                                })
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !1,
                            maxLength: 16,
                            onChange: u(function() {
                                var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                t.confirmPasswordOnChange$Action(t.callContext(f))
                            }, "onChange"),
                            prompt: p.resolve(C.TranslationsService).getMessage("d83f7awMWEOIeSTlFcSLmA#ValueExpression.1758829696.1", "Enter your password"),
                            style: "form-control font-size-s",
                            variable: r.createVariable(R.DataTypes.Text, r.variables.passwordRepeatVar, function(f) {
                                r.variables.passwordRepeatVar = f
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_password2"
                            },
                            _widgetRecordProvider: c
                        })]
                    })
                },
                _dependencies: [i(r.variables.showPasswordRepeatVar), i(r.variables.passwordRepeatVar)]
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: r.getCachedValue(e.getId("2zCMxGBSn0CXvL2qFLOEfA.Style"), function() {
                    return "display-flex justify-content-flex-end margin-bottom-m " + (V.isDesktop$Action(a).isDesktopOut ? "" : "margin-top-m")
                }),
                visible: r.variables.screenIn === "login",
                _idProps: {
                    service: e,
                    uuid: "37"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: c
            }, l.createElement(ie, {
                enabled: !0,
                onClick: u(function() {
                    var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                    t.onClickForgotPassword$Action(t.callContext(f))
                }, "onClick"),
                style: r.getCachedValue(e.getId("X7k6D5p5TkC8VuOJ5RE0yA.Style"), function() {
                    return r.variables.show_spinnerVar ? "action-disabled pointer-events-none" : ""
                }, function() {
                    return r.variables.show_spinnerVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "39"
                },
                _widgetRecordProvider: c
            }, l.createElement(y, {
                extendedProperties: {
                    style: "color: var(--core-color-solid-slate-1400, #000); text-decoration: underline;"
                },
                style: "font-size-s font-bold",
                text: [b(o("HJdTAUvvUkiJhQDL9TybDA#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "40"
                },
                _widgetRecordProvider: c
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "display: flex; flex-direction: row-reverse;"
                },
                visible: r.variables.show_spinnerVar,
                _idProps: {
                    service: e,
                    uuid: "41"
                },
                _widgetRecordProvider: c
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "spinner",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "42"
                },
                _widgetRecordProvider: c
            })))), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "margin-bottom-m",
                visible: r.getCachedValue(e.getId("td9OlS6jyEK7+3suwaXkhw.Visible"), function() {
                    return r.variables.screenIn === "forgot" && A.getFeatureFlag$Action("PhoneNumber", a).shouldEnableOut
                }, function() {
                    return r.variables.screenIn
                }),
                _idProps: {
                    service: e,
                    uuid: "43"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(U, {
                getOwnerSpan: u(function() {
                    return w.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return w.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SelectedCountry: r.getCachedValue(e.getId("OnVDjt6ZhUmHBhXWIleztQ.SelectedCountry"), function() {
                        return r.variables.selectedPhoneNumberCountryIn !== h.nullTextIdentifier() ? r.variables.selectedPhoneNumberCountryIn : D.getresidence() !== h.nullTextIdentifier() ? D.getresidence() : "ae"
                    }, function() {
                        return r.variables.selectedPhoneNumberCountryIn
                    }, function() {
                        return D.getresidence()
                    }),
                    _selectedCountryInDataFetchStatus: v.calculateDataFetchStatus(r.variables._selectedPhoneNumberCountryInDataFetchStatus),
                    CountryList: r.variables.country_listIn,
                    _countryListInDataFetchStatus: v.calculateDataFetchStatus(r.variables._country_listInDataFetchStatus),
                    ErrorMessage: r.variables.fieldErrorMessageIn,
                    _errorMessageInDataFetchStatus: v.calculateDataFetchStatus(r.variables._fieldErrorMessageInDataFetchStatus)
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError"),
                    countrySelectEvent$Action: u(function(f) {
                        return Promise.resolve().then(function() {
                            var I = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                            return t.onCountrySelect$Action(f, t.callContext(I))
                        })
                    }, "countrySelectEvent$Action"),
                    fieldValueChangeEvent$Action: u(function(f) {
                        return Promise.resolve().then(function() {
                            var I = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                            return t.inputFieldValueChange$Action(f, t.callContext(I))
                        })
                    }, "fieldValueChangeEvent$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "44",
                    alias: "4"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            })), l.createElement(_, {
                align: 0,
                animate: !0,
                style: "margin-bottom-m",
                visible: r.getCachedValue(e.getId("GL5O32oO9kCIyC4K5Lwi0w.Visible"), function() {
                    return r.variables.screenIn === "forgot" && !A.getFeatureFlag$Action("PhoneNumber", a).shouldEnableOut
                }, function() {
                    return r.variables.screenIn
                }),
                _idProps: {
                    service: e,
                    uuid: "45"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
            }, l.createElement(k, {
                extendedProperties: {
                    style: "margin-bottom: 4px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "46"
                },
                _widgetRecordProvider: c
            }, b(o("hiQKNxSSGEacNuEzq4sDJw#Value", "Email"))), l.createElement($, {
                _validationProps: {
                    validationService: n
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 100,
                onChange: u(function() {
                    return Promise.resolve().then(function() {
                        var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                        return t.inputFieldValueChange$Action(r.variables.emailPhoneFieldValueVar, t.callContext(f))
                    })
                }, "onChange"),
                prompt: p.resolve(C.TranslationsService).getMessage("hoa0_3K2P0ahttvhxHYMUQ#ValueExpression.-374653993.1", "Enter your email"),
                style: "form-control",
                variable: r.createVariable(R.DataTypes.Text, r.variables.emailPhoneFieldValueVar, function(f) {
                    r.variables.emailPhoneFieldValueVar = f
                }),
                _idProps: {
                    service: e,
                    name: "Input_EmailPhoneFieldValue"
                },
                _widgetRecordProvider: c
            })))), l.createElement(_, {
                align: 0,
                animate: !1,
                style: r.getCachedValue(e.getId("u4VEEv+3iU2vzQW3N78yeg.Style"), function() {
                    return V.isDesktop$Action(a).isDesktopOut ? "padding-y-base" : ""
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "48"
                },
                _widgetRecordProvider: c
            }, l.createElement(X, {
                getOwnerSpan: u(function() {
                    return w.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return w.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: r.variables.is_loadingIn,
                    _isLoadingInDataFetchStatus: v.calculateDataFetchStatus(r.variables._is_loadingInDataFetchStatus),
                    ExtendedClass: "w-full"
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "49",
                    alias: "5"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    button: new T(function() {
                        return [l.createElement(ae, {
                            enabled: r.getCachedValue(e.getId("C8S0hU_9EkeP0EC_af0S5A.Enabled"), function() {
                                return r.variables.is_button_disabledIn ? !1 : r.variables.screenIn === "forgot" ? r.variables.fieldErrorMessageIn === h.nullTextIdentifier() && r.variables.emailPhoneFieldValueVar !== h.nullTextIdentifier() : r.variables.screenIn === "login" ? r.variables.passwordVar !== h.nullTextIdentifier() && r.variables.errorMessageIn === h.nullTextIdentifier() : r.variables.screenIn === "reset" || r.variables.screenIn === "change" || r.variables.screenIn === "setup" ? r.variables.isPasswordValidVar && r.variables.fieldErrorMessageIn === h.nullTextIdentifier() && r.variables.passwordRepeatVar !== h.nullTextIdentifier() && r.variables.passwordVar === r.variables.passwordRepeatVar : r.variables.isPasswordValidVar
                            }, function() {
                                return r.variables.is_button_disabledIn
                            }, function() {
                                return r.variables.screenIn
                            }, function() {
                                return r.variables.fieldErrorMessageIn
                            }, function() {
                                return r.variables.emailPhoneFieldValueVar
                            }, function() {
                                return r.variables.passwordVar
                            }, function() {
                                return r.variables.errorMessageIn
                            }, function() {
                                return r.variables.isPasswordValidVar
                            }, function() {
                                return r.variables.passwordRepeatVar
                            }),
                            extendedProperties: {
                                style: "border-radius: 100px; height: 48px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            isDefault: !0,
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var f = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                    return t.onClickConfirm$Action(t.callContext(f))
                                })
                            }, "onClick"),
                            style: "btn btn-primary font-bold sign-up-btn font-size-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: c,
                            enabled_dataFetchStatus: v.calculateDataFetchStatus(r.variables._is_button_disabledInDataFetchStatus, r.variables._screenInDataFetchStatus, r.variables._fieldErrorMessageInDataFetchStatus, r.variables._errorMessageInDataFetchStatus)
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: c
                        }), l.createElement(x, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            style: "ml-2",
                            value: r.getCachedValue(e.getId("Wt+Q4H9Dy0WcLeYQ5Ene_A.Value"), function() {
                                return r.variables.screenIn === "forgot" ? p.resolve(C.TranslationsService).getMessage("HLXRESUY3kuSmlGXskgXiQ#ValueExpression.1310518931.1", "Send OTP") : p.resolve(C.TranslationsService).getMessage("HLXRESUY3kuSmlGXskgXiQ#ValueExpression.-1679196512.1", "Confirm")
                            }, function() {
                                return r.variables.screenIn
                            }),
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: c,
                            value_dataFetchStatus: v.calculateDataFetchStatus(r.variables._screenInDataFetchStatus)
                        }))]
                    })
                },
                _dependencies: [i(r.variables._errorMessageInDataFetchStatus), i(r.variables._fieldErrorMessageInDataFetchStatus), i(r.variables._screenInDataFetchStatus), i(r.variables._is_button_disabledInDataFetchStatus), i(r.variables.passwordRepeatVar), i(r.variables.isPasswordValidVar), i(r.variables.errorMessageIn), i(r.variables.passwordVar), i(r.variables.emailPhoneFieldValueVar), i(r.variables.fieldErrorMessageIn), i(r.variables.screenIn), i(r.variables.is_button_disabledIn)]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "PasswordBlock",
                    functionKey: "5c4ed5c1-4471-404d-b09c-7786cb544a3d",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.PasswordBlock",
            modelFactory: se,
            controllerFactory: le
        });
        return S.getCssDependencies = function() {
            return ["css/uae.Common.PasswordBlock.css", "css/OutSystemsReactWidgets.css"]
        }, S.getJsDependencies = function() {
            return []
        }, S.getBlocks = function() {
            return [N, z, U, X]
        }, S
    }, "componentFactory"),
    Ge = ge();
export {
    Ge as a
};