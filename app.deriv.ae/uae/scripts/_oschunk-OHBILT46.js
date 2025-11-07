import {
    f as h,
    h as z,
    m,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as q,
    g as w,
    m as E,
    o as T,
    q as N,
    r as H,
    s as F,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as L
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as V,
    ub as I
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as P,
    c as u,
    e as k
} from "./_oschunk-M5BUVJ72.js";
var i = k(q());
var l = P,
    A = class A extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordValidationResultRec)
            }, !1, l.SystemStructures.PasswordValidationResultRec), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, l.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("MaxLength", "maxLengthVar", "MaxLength", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 25
            }, !1), this.attr("hasSpaces", "hasSpacesVar", "hasSpaces", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUpperCase", "hasAtLeastUpperCaseIn", "HasAtLeastUpperCase", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUpperCaseInDataFetchStatus", "_hasAtLeastUpperCaseInDataFetchStatus", "_hasAtLeastUpperCaseInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Type", "typeIn", "Type", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastLowerCase", "hasAtLeastLowerCaseIn", "HasAtLeastLowerCase", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastLowerCaseInDataFetchStatus", "_hasAtLeastLowerCaseInDataFetchStatus", "_hasAtLeastLowerCaseInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MustNotContainSpaces", "mustNotContainSpacesIn", "MustNotContainSpaces", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_mustNotContainSpacesInDataFetchStatus", "_mustNotContainSpacesInDataFetchStatus", "_mustNotContainSpacesInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(A, "VariablesRecord");
var C = A;
C.init();
var x = class x extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(x, "WidgetsRecord");
var b = x,
    R = class R extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "Password" in n && (this.variables.passwordIn = n.Password, "_passwordInDataFetchStatus" in n && (this.variables._passwordInDataFetchStatus = n._passwordInDataFetchStatus)), "Length" in n && (this.variables.lengthIn = n.Length, "_lengthInDataFetchStatus" in n && (this.variables._lengthInDataFetchStatus = n._lengthInDataFetchStatus)), "HasAtLeastUpperCase" in n && (this.variables.hasAtLeastUpperCaseIn = n.HasAtLeastUpperCase, "_hasAtLeastUpperCaseInDataFetchStatus" in n && (this.variables._hasAtLeastUpperCaseInDataFetchStatus = n._hasAtLeastUpperCaseInDataFetchStatus)), "HasAtLeastOneNumber" in n && (this.variables.hasAtLeastOneNumberIn = n.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in n && (this.variables._hasAtLeastOneNumberInDataFetchStatus = n._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in n && (this.variables.hasAtLeastOneSpecialCharacterIn = n.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in n && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = n._hasAtLeastOneSpecialCharacterInDataFetchStatus)), "Type" in n && (this.variables.typeIn = n.Type, "_typeInDataFetchStatus" in n && (this.variables._typeInDataFetchStatus = n._typeInDataFetchStatus)), "HasAtLeastLowerCase" in n && (this.variables.hasAtLeastLowerCaseIn = n.HasAtLeastLowerCase, "_hasAtLeastLowerCaseInDataFetchStatus" in n && (this.variables._hasAtLeastLowerCaseInDataFetchStatus = n._hasAtLeastLowerCaseInDataFetchStatus)), "MustNotContainSpaces" in n && (this.variables.mustNotContainSpacesIn = n.MustNotContainSpaces, "_mustNotContainSpacesInDataFetchStatus" in n && (this.variables._mustNotContainSpacesInDataFetchStatus = n._mustNotContainSpacesInDataFetchStatus))
        }
    };
u(R, "Model");
var _ = R;
_._hasValidationWidgetsValue = void 0;
var B = new l.Model.ModelFactory(_);
var G = {
        "PeJZxsKerE2FMLJ_yBndmg#Value": "\u0644\u0627 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0633\u0627\u0641\u0627\u062A",
        "+lNtt8UDnkevUK70VfgFFQ#Value": "\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641 \u062E\u0627\u0635 \u0648\u0627\u062D\u062F",
        "G+FRV2GXnUWxM3u22PWB0A#Value": "\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 1 \u0631\u0642\u0645",
        "piaYiMFY3U6Q9q3xJPU_dg#Value": "\u062D\u0631\u0641 \u0635\u063A\u064A\u0631 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "O4IAK5ywg0ag7Qk+2l8CvQ#Value": "\u062D\u0631\u0641 \u0643\u0628\u064A\u0631 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
        "gaKBOjP5CUOuL20Tz9BMWA#Value": "-16 \u062D\u0631\u0641",
        "hx+H0fHop0evQyvd4NH68g#Value": "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646"
    },
    Q = {
        "PeJZxsKerE2FMLJ_yBndmg#Value": "Au moins un chiffre",
        "+lNtt8UDnkevUK70VfgFFQ#Value": "Au moins un chiffre",
        "G+FRV2GXnUWxM3u22PWB0A#Value": "Au moins un chiffre",
        "piaYiMFY3U6Q9q3xJPU_dg#Value": "Au moins une lettre majuscule et une lettre minuscule",
        "O4IAK5ywg0ag7Qk+2l8CvQ#Value": "Au moins une lettre majuscule et une lettre minuscule",
        "gaKBOjP5CUOuL20Tz9BMWA#Value": "Je veux la r\xE9ponse au format suivant:",
        "hx+H0fHop0evQyvd4NH68g#Value": "Je veux la r\xE9ponse au format suivant:"
    },
    U = {
        "ar-001": {
            translations: G,
            isRTL: !0
        },
        "fr-FR": {
            translations: Q,
            isRTL: !1
        }
    };

function D(d, n, r, s) {
    function e(t) {
        return t.toUpperCase() != t
    }
    u(e, "hasLowerCase");

    function o(t) {
        return /[A-Z]/.test(t)
    }
    u(o, "containsUppercase");

    function g(t) {
        return /\d/.test(t)
    }
    u(g, "hasNumber");

    function f(t) {
        return t.length >= d.Length && t.length <= d.MaxLength
    }
    u(f, "hasGoodLength");

    function p(t) {
        var c = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return c.test(t)
    }
    u(p, "hasSpecialChar");

    function v(t) {
        var c = /\s/;
        return c.test(t)
    }
    u(v, "hasSpaces"), d.HasLowerCase = d.RequiresLowerCase ? e(d.String) : !0, d.HasUpperCase = d.RequiresUpperCase ? o(d.String) : !0, d.HasNumber = d.RequiresNumber ? g(d.String) : !0, d.hasGoodLength = d.RequiresNumber ? f(d.String) : !0, d.hasSpecialChar = d.RequiresSpecialChar ? p(d.String) : !0, d.hasSpaces = d.RequiresNoSpaces ? v(d.String) : !0
}
u(D, "default");
var a = P; {
    let n = class n extends a.Controller.BaseViewController {
        constructor(s, e, o) {
            super(s, e, o, U);
            var g = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(s) {
            this._dataFetchActionNames = s
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(s) {
                var e = this.model,
                    o = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(f) {
                    f && (f.setAttribute("code.function", "OnInitialize"), f.setAttribute("outsystems.function.key", "cab08527-2360-4048-aa26-9d27f08d7969"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnInitialize"), s = o.callContext(s), e.variables.passwordComplexityPolicyVar.minimumLengthAttr = e.variables.lengthIn, e.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = e.variables.hasAtLeastUpperCaseIn, e.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = e.variables.hasAtLeastLowerCaseIn, e.variables.passwordComplexityPolicyVar.numberRequiredAttr = e.variables.hasAtLeastOneNumberIn, e.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = e.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(s) {
            this.__onInitialize$Action = s
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(s) {
                var e = this.model,
                    o = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(f) {
                    return f && (f.setAttribute("code.function", "OnParametersChanged"), f.setAttribute("outsystems.function.key", "e0959cef-461c-4649-ac4f-dd971df87b40"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnParametersChanged"), s = o.callContext(s);
                        var p = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return e.variables.isPasswordEmptyVar = a.BuiltinFunctions.length(e.variables.passwordIn) === 0, p.value = a.Logger.startActiveSpan("checkValid", function(v) {
                                v && (v.setAttribute("code.function", "checkValid"), v.setAttribute("outsystems.function.key", "124f2a87-da7e-4858-bc8e-85a50ca8b1f4"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(D, "checkValid", "OnParametersChanged", {
                                        Length: a.DataConversion.JSNodeParamConverter.to(e.variables.lengthIn, a.DataTypes.DataTypes.Integer),
                                        RequiresSpecialChar: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastOneSpecialCharacterIn, a.DataTypes.DataTypes.Boolean),
                                        String: a.DataConversion.JSNodeParamConverter.to(e.variables.passwordIn, a.DataTypes.DataTypes.Text),
                                        RequiresUpperCase: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastUpperCaseIn, a.DataTypes.DataTypes.Boolean),
                                        RequiresNumber: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastOneNumberIn, a.DataTypes.DataTypes.Boolean),
                                        RequiresLowerCase: a.DataConversion.JSNodeParamConverter.to(e.variables.hasAtLeastLowerCaseIn, a.DataTypes.DataTypes.Boolean),
                                        MaxLength: a.DataConversion.JSNodeParamConverter.to(e.variables.maxLengthVar, a.DataTypes.DataTypes.Integer),
                                        RequiresNoSpaces: a.DataConversion.JSNodeParamConverter.to(e.variables.mustNotContainSpacesIn, a.DataTypes.DataTypes.Boolean),
                                        HasLowerCase: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        HasUpperCase: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        HasNumber: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasGoodLength: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasSpecialChar: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean),
                                        hasSpaces: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                    }, function(t) {
                                        var c = new(o.constructor.getVariableGroupType("uae.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                        return c.hasLowerCaseOut = a.DataConversion.JSNodeParamConverter.from(t.HasLowerCase, a.DataTypes.DataTypes.Boolean), c.hasUpperCaseOut = a.DataConversion.JSNodeParamConverter.from(t.HasUpperCase, a.DataTypes.DataTypes.Boolean), c.hasNumberOut = a.DataConversion.JSNodeParamConverter.from(t.HasNumber, a.DataTypes.DataTypes.Boolean), c.hasGoodLengthOut = a.DataConversion.JSNodeParamConverter.from(t.hasGoodLength, a.DataTypes.DataTypes.Boolean), c.hasSpecialCharOut = a.DataConversion.JSNodeParamConverter.from(t.hasSpecialChar, a.DataTypes.DataTypes.Boolean), c.hasSpacesOut = a.DataConversion.JSNodeParamConverter.from(t.hasSpaces, a.DataTypes.DataTypes.Boolean), c
                                    }, {}, {})
                                } finally {
                                    v && v.end()
                                }
                            }, 1), e.variables.passwordValidationResultVar.isValidAttr = p.value.hasLowerCaseOut && p.value.hasUpperCaseOut && p.value.hasNumberOut && p.value.hasGoodLengthOut, e.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !p.value.hasLowerCaseOut, e.variables.passwordValidationResultVar.missingMinimumLengthAttr = !p.value.hasGoodLengthOut, e.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !p.value.hasUpperCaseOut, e.variables.passwordValidationResultVar.missingNumberAttr = !p.value.hasNumberOut, e.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !p.value.hasSpecialCharOut, e.variables.hasSpacesVar = p.value.hasSpacesOut, o.compliant$Action(e.variables.passwordValidationResultVar.isValidAttr && !p.value.hasSpacesOut && (e.variables.hasAtLeastOneSpecialCharacterIn ? p.value.hasSpecialCharOut : !0), s).then(function() {
                                e.variables.typeIn === "RESET" && I.setIsResetPasswordValid(e.variables.passwordValidationResultVar.isValidAttr)
                            })
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(s) {
            this.__onParametersChanged$Action = s
        }
        onInitialize$Action(s) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "cab08527-2360-4048-aa26-9d27f08d7969"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, s)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onParametersChanged$Action(s) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "e0959cef-461c-4649-ac4f-dd971df87b40"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, s)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(s) {
            this._compliant$Action = s
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(s) {
                var e = this.controller,
                    o = this.model,
                    g = this.idService;
                return e.onInitialize$Action(s)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(s) {
            this._onInitializeEventHandler = s
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(s) {
            this._onReadyEventHandler = s
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(s) {
            this._onRenderEventHandler = s
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(s) {
            this._onDestroyEventHandler = s
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(s) {
                var e = this.controller,
                    o = this.model,
                    g = this.idService;
                return e.onParametersChanged$Action(s)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(s) {
            this._onParametersChangedEventHandler = s
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(s) {
            this._onSyncStartEventHandler = s
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(s) {
            this._onSyncCompleteEventHandler = s
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(s) {
            this._onSyncErrorEventHandler = s
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(s) {
                return controller.handleError(s)
            }), this._handleError
        }
        set handleError(s) {
            this._handleError = s
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return V.defaultTimeout
        }
    };
    u(n, "ControllerInner");
    let d = n;
    O = d, O.registerVariableGroupType("uae.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpaces",
        attrName: "hasSpacesOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var O, J = new a.Controller.ControllerFactory(O, L);
var Ae = w.PlaceholderContent,
    xe = w.IteratorPlaceholderContent,
    K = u(function() {
        var d = T(function(n) {
            var r = n.model,
                s = n.controller,
                e = n.controller.idService,
                o = s.validationService,
                g = s.callContext(),
                f = F,
                p = W,
                v = {
                    props: n,
                    validateWidget: u(function(M) {
                        n.validateWidget(n, M)
                    }, "validateWidget")
                },
                t = r,
                c = H,
                S = N,
                Y = E();
            return i.createElement("div", n.rootNodeProperties, i.createElement(h, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
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
                _widgetRecordProvider: t
            }, c(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
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
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
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
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [i.createElement(m, {
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
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: r.getCachedValue(e.getId("83w+1fouwUm5v7UWaFzpqg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("hx+H0fHop0evQyvd4NH68g#Value", "Must be "))],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), i.createElement(z, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: r.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("gaKBOjP5CUOuL20Tz9BMWA#Value", "-16 characters"))],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
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
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "13"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, !1, this, function() {
                        return [i.createElement(m, {
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
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("muOVq9YvZEWdKAYATvpShA.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("O4IAK5ywg0ag7Qk+2l8CvQ#Value", "At least 1 uppercase letter"))],
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
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
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "20"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [i.createElement(m, {
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
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("QsHJogAWHkyCImUHzhWaNg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("piaYiMFY3U6Q9q3xJPU_dg#Value", "At least 1 lowercase letter"))],
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
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
                        uuid: "26"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "27"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [i.createElement(m, {
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
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("pAVjADFC306IK8rW4H9k2A.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("G+FRV2GXnUWxM3u22PWB0A#Value", "At least 1 number"))],
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "32"
                    },
                    _widgetRecordProvider: t
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
                        uuid: "33"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "34"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [i.createElement(m, {
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
                                uuid: "35"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                                uuid: "36"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("ryvqH8YN3U+vxR0Z253NVg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "37"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("+lNtt8UDnkevUK70VfgFFQ#Value", "At least 1 special character"))],
                    _idProps: {
                        service: e,
                        uuid: "38"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), c(r.variables.mustNotContainSpacesIn, !1, this, function() {
                return [i.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "39"
                    },
                    _widgetRecordProvider: t
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
                        uuid: "40"
                    },
                    _widgetRecordProvider: t
                }, c(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [i.createElement(m, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "41"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [c(r.variables.hasSpacesVar, !1, this, function() {
                        return [i.createElement(m, {
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
                                uuid: "42"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [i.createElement(m, {
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
                                uuid: "43"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), i.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("QbsVw18AxkuDBBmdl4ANwQ.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.hasSpacesVar ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.hasSpacesVar
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "44"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(y, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: [S(p("PeJZxsKerE2FMLJ_yBndmg#Value", "Must not contain spaces"))],
                    _idProps: {
                        service: e,
                        uuid: "45"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "PasswordPolicy",
                    functionKey: "45b90f58-3820-4cd3-8f87-9963fb6f5698",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.PasswordPolicy",
            modelFactory: B,
            controllerFactory: J
        });
        return d.getCssDependencies = function() {
            return ["css/uae.Common.PasswordPolicy.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    Re = K();
export {
    Re as a
};