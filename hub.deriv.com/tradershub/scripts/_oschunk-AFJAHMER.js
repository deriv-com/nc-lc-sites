import {
    h,
    j as F,
    q as p,
    y as b
} from "./_oschunk-42NACYKQ.js";
import {
    a as O
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as W,
    g as E,
    i as w
} from "./_oschunk-RKYF3TWC.js";
import {
    a as x,
    c as L
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as g
} from "./_oschunk-2JKANR6M.js";
import {
    c as d,
    g as z
} from "./_oschunk-DVBKI63I.js";
var i = z(W());
var o = g,
    A = class A extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new o.SystemStructures.PasswordValidationResultRec)
            }, !1, o.SystemStructures.PasswordValidationResultRec), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new o.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, o.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("MaxLength", "maxLengthVar", "MaxLength", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 25
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Type", "typeIn", "Type", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("NeedToCheckSpecialCharacter", "needToCheckSpecialCharacterIn", "NeedToCheckSpecialCharacter", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_needToCheckSpecialCharacterInDataFetchStatus", "_needToCheckSpecialCharacterInDataFetchStatus", "_needToCheckSpecialCharacterInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(A, "VariablesRecord");
var P = A;
P.init();
var D = class D extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(D, "WidgetsRecord");
var S = D,
    R = class R extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Password" in t && (this.variables.passwordIn = t.Password, "_passwordInDataFetchStatus" in t && (this.variables._passwordInDataFetchStatus = t._passwordInDataFetchStatus)), "Length" in t && (this.variables.lengthIn = t.Length, "_lengthInDataFetchStatus" in t && (this.variables._lengthInDataFetchStatus = t._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in t && (this.variables.hasAtLeastUppercaseAndLowercaseIn = t.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in t && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = t._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in t && (this.variables.hasAtLeastOneNumberIn = t.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in t && (this.variables._hasAtLeastOneNumberInDataFetchStatus = t._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in t && (this.variables.hasAtLeastOneSpecialCharacterIn = t.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in t && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = t._hasAtLeastOneSpecialCharacterInDataFetchStatus)), "Type" in t && (this.variables.typeIn = t.Type, "_typeInDataFetchStatus" in t && (this.variables._typeInDataFetchStatus = t._typeInDataFetchStatus)), "NeedToCheckSpecialCharacter" in t && (this.variables.needToCheckSpecialCharacterIn = t.NeedToCheckSpecialCharacter, "_needToCheckSpecialCharacterInDataFetchStatus" in t && (this.variables._needToCheckSpecialCharacterInDataFetchStatus = t._needToCheckSpecialCharacterInDataFetchStatus))
        }
    };
d(R, "Model");
var _ = R;
_._hasValidationWidgetsValue = void 0;
var N = new o.Model.ModelFactory(_);
var q = {
        "o1lfmZHMxki3FRa6GsxLpQ#Value": "Au moins un chiffre",
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Au moins un num\xE9ro",
        "NF1sI9th60q4FEIS53OHJA#Value": "Au moins une lettre majuscule et une lettre minuscule",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "Je veux la r\xE9ponse au format suivant:"
    },
    B = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0631\u0642\u0645 \u0648\u0627\u062D\u062F",
        "NF1sI9th60q4FEIS53OHJA#Value": "\u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062D\u0631\u0641 \u0643\u0628\u064A\u0631 \u0648\u0627\u062D\u062F \u0648\u062D\u0631\u0641 \u0635\u063A\u064A\u0631 \u0648\u0627\u062D\u062F",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "-25 \u062D\u0631\u0641\u064B\u0627"
    },
    U = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Mindestens eine Zahl",
        "NF1sI9th60q4FEIS53OHJA#Value": "Mindestens ein Gro\xDFbuchstabe und ein Kleinbuchstabe",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "-25 Zeichen lang"
    },
    J = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Al menos un n\xFAmero",
        "NF1sI9th60q4FEIS53OHJA#Value": "Al menos una letra may\xFAscula y una letra min\xFAscula",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "-25 caracteres"
    },
    Q = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Almeno un numero",
        "NF1sI9th60q4FEIS53OHJA#Value": "Almeno una lettera maiuscola e una lettera minuscola",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "-25 caratteri di lunghezza"
    },
    M = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Co najmniej jedna liczba",
        "NF1sI9th60q4FEIS53OHJA#Value": "Co najmniej jedna wielka litera i jedna ma\u0142a litera",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "- limit 25 znak\xF3w"
    },
    G = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "Pelo menos um n\xFAmero",
        "NF1sI9th60q4FEIS53OHJA#Value": "Pelo menos uma letra mai\xFAscula e uma min\xFAscula",
        "_PkplsxQX0u2VyoqVIQ8rQ#Value": "- limite de 25 caracteres"
    },
    $ = {
        "buyD26Tl7kq1mrWHkFBDcw#Value": "\u041F\u043E \u043A\u0440\u0430\u0439\u043D\u0435\u0439 \u043C\u0435\u0440\u0435 \u043E\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E",
        "NF1sI9th60q4FEIS53OHJA#Value": "\u0414\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0438 \u043E\u0434\u043D\u0430 \u0441\u0442\u0440\u043E\u0447\u043D\u0430\u044F \u0431\u0443\u043A\u0432\u0430"
    },
    H = {
        "fr-FR": {
            translations: q,
            isRTL: !1
        },
        "ar-001": {
            translations: B,
            isRTL: !0
        },
        "de-DE": {
            translations: U,
            isRTL: !1
        },
        "es-ES": {
            translations: J,
            isRTL: !1
        },
        "it-IT": {
            translations: Q,
            isRTL: !1
        },
        "pl-PL": {
            translations: M,
            isRTL: !1
        },
        "pt-PT": {
            translations: G,
            isRTL: !1
        },
        "ru-RU": {
            translations: $,
            isRTL: !1
        }
    };

function I(l, t, C, e) {
    function s(c) {
        return c.toUpperCase() != c
    }
    d(s, "hasLowerCase");

    function a(c) {
        return /[A-Z]/.test(c)
    }
    d(a, "containsUppercase");

    function f(c) {
        return /\d/.test(c)
    }
    d(f, "hasNumber");

    function n(c) {
        return c.length >= l.Length && c.length <= l.MaxLength
    }
    d(n, "hasGoodLength");

    function u(c) {
        var m = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return m.test(c)
    }
    d(u, "hasSpecialChar"), l.HasLowerCase = l.RequiresLowerCaseAndUpperCase ? s(l.String) : !0, l.HasUpperCase = l.RequiresLowerCaseAndUpperCase ? a(l.String) : !0, l.HasNumber = l.RequiresNumber ? f(l.String) : !0, l.hasGoodLength = l.RequiresNumber ? n(l.String) : !0, l.hasSpecialChar = l.RequiresSpecialChar ? u(l.String) : !0
}
d(I, "default");
var r = g; {
    let t = class t extends r.Controller.BaseViewController {
        constructor(e, s, a) {
            super(e, s, a, H);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var s = this.model,
                    a = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "4aa89cbb-07b2-47bc-ab2a-73d36caea85a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnParametersChanged"), e = a.callContext(e);
                        var u = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return s.variables.isPasswordEmptyVar = r.BuiltinFunctions.length(s.variables.passwordIn) === 0, u.value = r.Logger.startActiveSpan("checkValid", function(c) {
                                c && (c.setAttribute("code.function", "checkValid"), c.setAttribute("outsystems.function.key", "672caa3e-132a-49ff-b3f4-612d58c03a34"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return a.safeExecuteJSNode(I, "checkValid", "OnParametersChanged", {
                                        RequiresLowerCaseAndUpperCase: r.DataConversion.JSNodeParamConverter.to(s.variables.hasAtLeastUppercaseAndLowercaseIn, r.DataTypes.DataTypes.Boolean),
                                        RequiresNumber: r.DataConversion.JSNodeParamConverter.to(s.variables.hasAtLeastOneNumberIn, r.DataTypes.DataTypes.Boolean),
                                        String: r.DataConversion.JSNodeParamConverter.to(s.variables.passwordIn, r.DataTypes.DataTypes.Text),
                                        RequiresSpecialChar: r.DataConversion.JSNodeParamConverter.to(s.variables.hasAtLeastOneSpecialCharacterIn, r.DataTypes.DataTypes.Boolean),
                                        MaxLength: r.DataConversion.JSNodeParamConverter.to(s.variables.maxLengthVar, r.DataTypes.DataTypes.Integer),
                                        Length: r.DataConversion.JSNodeParamConverter.to(s.variables.lengthIn, r.DataTypes.DataTypes.Integer),
                                        HasLowerCase: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                        HasUpperCase: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                        HasNumber: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                        hasGoodLength: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                        hasSpecialChar: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                                    }, function(m) {
                                        var y = new(a.constructor.getVariableGroupType("tradershub.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                        return y.hasLowerCaseOut = r.DataConversion.JSNodeParamConverter.from(m.HasLowerCase, r.DataTypes.DataTypes.Boolean), y.hasUpperCaseOut = r.DataConversion.JSNodeParamConverter.from(m.HasUpperCase, r.DataTypes.DataTypes.Boolean), y.hasNumberOut = r.DataConversion.JSNodeParamConverter.from(m.HasNumber, r.DataTypes.DataTypes.Boolean), y.hasGoodLengthOut = r.DataConversion.JSNodeParamConverter.from(m.hasGoodLength, r.DataTypes.DataTypes.Boolean), y.hasSpecialCharOut = r.DataConversion.JSNodeParamConverter.from(m.hasSpecialChar, r.DataTypes.DataTypes.Boolean), y
                                    }, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), s.variables.passwordValidationResultVar.isValidAttr = u.value.hasLowerCaseOut && u.value.hasUpperCaseOut && u.value.hasNumberOut && u.value.hasGoodLengthOut, s.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !u.value.hasLowerCaseOut, s.variables.passwordValidationResultVar.missingMinimumLengthAttr = !u.value.hasGoodLengthOut, s.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !u.value.hasUpperCaseOut, s.variables.passwordValidationResultVar.missingNumberAttr = !u.value.hasNumberOut, s.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !u.value.hasSpecialCharOut, a.compliant$Action(s.variables.needToCheckSpecialCharacterIn ? s.variables.passwordValidationResultVar.isValidAttr && !s.variables.passwordValidationResultVar.missingSpecialCharacterAttr : s.variables.passwordValidationResultVar.isValidAttr, e).then(function() {
                                s.variables.typeIn === "RESET" && x.setIsResetPasswordValid(s.variables.passwordValidationResultVar.isValidAttr)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var s = this.model,
                    a = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "f86df108-c127-48f6-9f30-028b52b1a3d0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnInitialize"), e = a.callContext(e), s.variables.passwordComplexityPolicyVar.minimumLengthAttr = s.variables.lengthIn, s.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = s.variables.hasAtLeastUppercaseAndLowercaseIn, s.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = s.variables.hasAtLeastUppercaseAndLowercaseIn, s.variables.passwordComplexityPolicyVar.numberRequiredAttr = s.variables.hasAtLeastOneNumberIn, s.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = s.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onParametersChanged$Action(e) {
            var s = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "4aa89cbb-07b2-47bc-ab2a-73d36caea85a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._onParametersChanged$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var s = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "f86df108-c127-48f6-9f30-028b52b1a3d0"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onInitialize$Action, e)
                } finally {
                    a && a.end()
                }
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
                var s = this.controller,
                    a = this.model,
                    f = this.idService;
                return s.onInitialize$Action(e)
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
                var s = this.controller,
                    a = this.model,
                    f = this.idService;
                return s.onParametersChanged$Action(e)
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
            return L.defaultTimeout
        }
    };
    d(t, "ControllerInner");
    let l = t;
    V = l, V.registerVariableGroupType("tradershub.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }])
}
var V, k = new r.Controller.ControllerFactory(V, O);
var Ce = w.PlaceholderContent,
    we = w.IteratorPlaceholderContent,
    v = class v extends E.BaseWebBlock {
        static get displayName() {
            return "Common.PasswordPolicy"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "76c7b8fa-a131-48fb-bdf4-11fbe43c11c5",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.PasswordPolicy.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return k
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                C = this.controller,
                e = this.idService,
                s = C.validationService,
                a = this.widgetsRecordProvider,
                f = C.callContext(),
                n = v.ifWidget,
                u = v.textWidget,
                c = v.asPrimitiveValue,
                m = v.getTranslation,
                y = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(h, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, i.createElement(h, {
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
                _widgetRecordProvider: a
            }, n(t.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "gap: 8px; text-align: left;"
                    },
                    style: "display-flex align-items-flex-start",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(h, {
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
                    _widgetRecordProvider: a
                }, n(t.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(p, {
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
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [n(t.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [i.createElement(p, {
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
                            _widgetRecordProvider: a
                        })]
                    }, function() {
                        return [i.createElement(p, {
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
                            _widgetRecordProvider: a
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: t.getCachedValue(e.getId("0Ro2y1Tbmk6XRemruVNrrg.Style"), function() {
                        return t.variables.isPasswordEmptyVar ? "" : t.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return t.variables.isPasswordEmptyVar
                    }, function() {
                        return t.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(F, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: t.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: a
                }), i.createElement(b, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [u(m("_PkplsxQX0u2VyoqVIQ8rQ#Value", "-25 characters long"))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return []
            }), n(t.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && t.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "gap: 8px; text-align: left;"
                    },
                    style: "display-flex align-items-flex-start",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: a
                }, n(t.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(p, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "12"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [n(t.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || t.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [i.createElement(p, {
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
                                uuid: "13"
                            },
                            _widgetRecordProvider: a
                        })]
                    }, function() {
                        return [i.createElement(p, {
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
                                uuid: "14"
                            },
                            _widgetRecordProvider: a
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: t.getCachedValue(e.getId("b9pK35IyIkCFb0Ji72U39Q.Style"), function() {
                        return t.variables.isPasswordEmptyVar ? "" : t.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || t.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return t.variables.isPasswordEmptyVar
                    }, function() {
                        return t.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }, function() {
                        return t.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(b, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [u(m("NF1sI9th60q4FEIS53OHJA#Value", "At least one uppercase letter and one lowercase letter"))],
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return []
            }), n(t.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "gap: 8px; text-align: left;"
                    },
                    style: "display-flex align-items-flex-start",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: a
                }, n(t.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(p, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "19"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [n(t.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [i.createElement(p, {
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
                                uuid: "20"
                            },
                            _widgetRecordProvider: a
                        })]
                    }, function() {
                        return [i.createElement(p, {
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
                                uuid: "21"
                            },
                            _widgetRecordProvider: a
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: t.getCachedValue(e.getId("A9hrM8EHI02iy4ZeUKPZtw.Style"), function() {
                        return t.variables.isPasswordEmptyVar ? "" : t.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return t.variables.isPasswordEmptyVar
                    }, function() {
                        return t.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "22"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(b, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [u(m("buyD26Tl7kq1mrWHkFBDcw#Value", "At least one number"))],
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return []
            }), n(t.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr && t.variables.needToCheckSpecialCharacterIn, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "gap: 8px; text-align: left;"
                    },
                    style: "display-flex align-items-flex-start",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: a
                }, n(t.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(p, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "26"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [n(t.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [i.createElement(p, {
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
                                uuid: "27"
                            },
                            _widgetRecordProvider: a
                        })]
                    }, function() {
                        return [i.createElement(p, {
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
                                uuid: "28"
                            },
                            _widgetRecordProvider: a
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: t.getCachedValue(e.getId("bnSp_j+Sh0OlconbDyxD6A.Style"), function() {
                        return t.variables.isPasswordEmptyVar ? "" : t.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return t.variables.isPasswordEmptyVar
                    }, function() {
                        return t.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "29"
                    },
                    _widgetRecordProvider: a
                }, i.createElement(b, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [u(m("o1lfmZHMxki3FRa6GsxLpQ#Value", "At least one special character"))],
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return []
            }))))
        }
    };
d(v, "View");
var T = v,
    Se = T;
export {
    Se as a
};