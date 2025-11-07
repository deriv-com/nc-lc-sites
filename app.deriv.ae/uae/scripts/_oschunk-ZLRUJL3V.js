import {
    a as N
} from "./_oschunk-WJ5PVGKG.js";
import "./_oschunk-JQ2HBHMK.js";
import {
    a as q
} from "./_oschunk-7ZNALR7E.js";
import {
    a as Q
} from "./_oschunk-6K5EBY3W.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as $
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as M
} from "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as G,
    f as y,
    l as z,
    n as x,
    o as R,
    p as I,
    r as me,
    u as j
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Ae,
    g as U,
    m as ve,
    n as ge,
    q as pe,
    r as ye,
    s as W,
    t as J
} from "./_oschunk-4VHUVDBV.js";
import {
    a as fe
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    E as B,
    Ea as k,
    Qb as de,
    Sb as h,
    a as T,
    db as le,
    ib as F,
    ua as D,
    ub as b,
    z as ue
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as V,
    c as u,
    e as _e,
    m as se,
    n as ce,
    p as E,
    v as O
} from "./_oschunk-M5BUVJ72.js";
var Se = {
        "181NHW9EpkCTD5F+uR5wYQ#Value": "\u062A\u0623\u0643\u064A\u062F",
        "Oj5cuYV2D0S8Us5kU+DRBA#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "acraM+8gwEil41_H3pQCoQ#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "VxEPJcG_DESpAHlKMbpn9Q#Value": "\u062A\u0623\u0643\u064A\u062F",
        "_deh+Q6JfEuUT_HRMPkotw#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "7xe5re51pkiLVI3AcmV0bQ#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "l0QyX0u_VEioS+ipk+mqzA#Value.-112774460.1": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        "Ou7zZrf3TEGhJbjnw+HoVQ#Title": "\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv",
        "Ou7zZrf3TEGhJbjnw+HoVQ#TitleExpression.-220769753.1": "\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv"
    },
    we = {
        "ar-001": {
            translations: Se,
            isRTL: !0
        }
    };

function Y(v, p, a, e) {
    v.message.includes("400") ? v.errorMessage = "Invalid password. Enter another password or reset it" : v.errorMessage = v.message
}
u(Y, "default");

function X(v, p, a, e) {
    v.code.includes("ValidationError") ? v.errorMessage = v.InvalidPasswordMessage : v.errorMessage = v.message
}
u(X, "default");

function Z(v, p, a, e) {
    let r = {
        length: v.password.length >= 8 && v.password.length <= 16,
        lowercase: /[a-z]/.test(v.password),
        uppercase: /[A-Z]/.test(v.password),
        numbers: /[0-9]/.test(v.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v.password)
    };
    v.isValid = Object.values(r).every(n => n === !0)
}
u(Z, "default");

function K(v, p, a) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
u(K, "default");
var t = V; {
    let p = class p extends t.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, we);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postMT5UAEUsers$ServerAction() {
            return this.hasOwnProperty("_postMT5UAEUsers$ServerAction") || (this._postMT5UAEUsers$ServerAction = function(e, r, n) {
                var s = this.controller;
                return t.Logger.startActiveSpan("PostMT5UAEUsers", function(o) {
                    return o && (o.setAttribute("code.function", "PostMT5UAEUsers"), o.setAttribute("outsystems.function.key", "a5a5b17b-4e13-40a7-ad80-1caa8013024d"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var g = {
                            Authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return s.callServerAction("PostMT5UAEUsers", "screenservices/uae/V2Flow/MT5EnterPassword_V2/ActionPostMT5UAEUsers", "JaEEz2S6wU+gwEHgx4qgmw", g, s.callContext(n), void 0, void 0, !0).then(function(f) {
                            var c = new(s.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionPostMT5UAEUsers"));
                            return c.responseOut = t.DataConversion.ServerDataConverter.from(f.Response, D), c
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._postMT5UAEUsers$ServerAction
        }
        set postMT5UAEUsers$ServerAction(e) {
            this._postMT5UAEUsers$ServerAction = e
        }
        get getAccounts$ServerAction() {
            return this.hasOwnProperty("_getAccounts$ServerAction") || (this._getAccounts$ServerAction = function(e, r, n, s, o) {
                var g = this.controller;
                return t.Logger.startActiveSpan("GetAccounts", function(f) {
                    return f && (f.setAttribute("code.function", "GetAccounts"), f.setAttribute("outsystems.function.key", "9a67846a-fd6e-4da7-9b7f-473202634306"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var c = {
                            authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            with_balance: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Text),
                            real_only: t.DataConversion.ServerDataConverter.to(n, t.DataTypes.DataTypes.Text),
                            force_api_fetch: t.DataConversion.ServerDataConverter.to(s, t.DataTypes.DataTypes.Text)
                        };
                        return g.callServerAction("GetAccounts", "screenservices/uae/V2Flow/MT5EnterPassword_V2/ActionGetAccounts", "02fkJ+ShY4j2DDsRxspdlw", c, g.callContext(o), void 0, void 0, !0).then(function(w) {
                            var _ = new(g.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionGetAccounts"));
                            return _.responseOut = t.DataConversion.ServerDataConverter.from(w.Response, F), _
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 0)
            }), this._getAccounts$ServerAction
        }
        set getAccounts$ServerAction(e) {
            this._getAccounts$ServerAction = e
        }
        get postReauthenticate$ServerAction() {
            return this.hasOwnProperty("_postReauthenticate$ServerAction") || (this._postReauthenticate$ServerAction = function(e, r, n) {
                var s = this.controller;
                return t.Logger.startActiveSpan("PostReauthenticate", function(o) {
                    return o && (o.setAttribute("code.function", "PostReauthenticate"), o.setAttribute("outsystems.function.key", "5e977e4b-8319-4ac8-9d22-8d42df2cae9e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var g = {
                            Authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return s.callServerAction("PostReauthenticate", "screenservices/uae/V2Flow/MT5EnterPassword_V2/ActionPostReauthenticate", "S69aQEfUk0OI0ZMkCVpxSA", g, s.callContext(n), void 0, void 0, !0).then(function(f) {
                            var c = new(s.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionPostReauthenticate"));
                            return c.responseOut = t.DataConversion.ServerDataConverter.from(f.Response, k), c
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._postReauthenticate$ServerAction
        }
        set postReauthenticate$ServerAction(e) {
            this._postReauthenticate$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnClickShowPassword", function(o) {
                    o && (o.setAttribute("code.function", "OnClickShowPassword"), o.setAttribute("outsystems.function.key", "54616e01-d3c4-4f6e-bcec-4a5ac7c29272"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnClickShowPassword"), e = n.callContext(e), r.variables.showPasswordVar ? r.variables.showPasswordVar = !1 : r.variables.showPasswordVar = !0
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _onCloseBtnEvent$Action() {
            return this.hasOwnProperty("__onCloseBtnEvent$Action") || (this.__onCloseBtnEvent$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnCloseBtnEvent", function(o) {
                    o && (o.setAttribute("code.function", "OnCloseBtnEvent"), o.setAttribute("outsystems.function.key", "66da5e55-111a-44d5-ac8d-1f5df4a37e8a"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnCloseBtnEvent"), e = n.callContext(e);
                        var g = new t.DataTypes.VariableHolder;
                        return g.value = h.getAccountActivationInputs$Action(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "mt5/activation", {
                            is_demo: t.DataConversion.ServerDataConverter.to(g.value.accountActivationInputsOut.is_demoAttr, t.DataTypes.DataTypes.Boolean),
                            account_type: t.DataConversion.ServerDataConverter.to((g.value.accountActivationInputsOut.account_typeAttr === "standard" ? T.mT5Types.standard : T.mT5Types.swapFree).toString(), t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onCloseBtnEvent$Action
        }
        set _onCloseBtnEvent$Action(e) {
            this.__onCloseBtnEvent$Action = e
        }
        get _activateOnClick$Action() {
            return this.hasOwnProperty("__activateOnClick$Action") || (this.__activateOnClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("ActivateOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "ActivateOnClick"), o.setAttribute("outsystems.function.key", "70f9ec08-62e2-4d28-b73b-2d87acbb713b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ActivateOnClick"), e = n.callContext(e);
                        var g = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            f = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder,
                            w = new t.DataTypes.VariableHolder,
                            _ = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return w.value = h.getAuth$Action(e), r.variables.isExecutingVar = !0, r.flush(), n.postMT5UAEUsers$ServerAction(w.value.tokenOut, (function() {
                                var i = new ue;
                                return i.is_demoAttr = r.variables.is_demoIn, i.passwordAttr = r.variables.passwordVar, i.account_typeAttr = b.getSelectedMT5AccountType(), i.currencyAttr = r.variables.is_demoIn ? "" : b.getcurrency(), i.platform_idAttr = t.BuiltinFunctions.integerToLongInteger(r.variables.is_demoIn ? 4 : 3), i
                            })(), e).then(function(i) {
                                f.value = i
                            }).then(function() {
                                return t.Flow.executeSequence(function() {
                                    if (f.value.responseOut.errorsAttr.getCurrent(e.iterationContext).statusAttr.equals(t.BuiltinFunctions.integerToLongInteger(400))) d.value = t.Logger.startActiveSpan("JavaScript2", function(i) {
                                        i && (i.setAttribute("code.function", "JavaScript2"), i.setAttribute("outsystems.function.key", "22a3f85d-bc31-44ec-a179-60b65accfe59"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return n.safeExecuteJSNode(X, "JavaScript2", "ActivateOnClick", {
                                                code: t.DataConversion.JSNodeParamConverter.to(f.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr, t.DataTypes.DataTypes.Text),
                                                InvalidPasswordMessage: t.DataConversion.JSNodeParamConverter.to(t.Injector.resolve(t.ServiceNames.TranslationsService).getMessage("l0QyX0u_VEioS+ipk+mqzA#Value.-112774460.1", "Invalid password"), t.DataTypes.DataTypes.Text),
                                                message: t.DataConversion.JSNodeParamConverter.to(f.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr, t.DataTypes.DataTypes.Text),
                                                errorMessage: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(S) {
                                                var A = new(n.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.ActivateOnClick$javaScript2JSResult"));
                                                return A.errorMessageOut = t.DataConversion.JSNodeParamConverter.from(S.errorMessage, t.DataTypes.DataTypes.Text), A
                                            }, {}, {})
                                        } finally {
                                            i && i.end()
                                        }
                                    }, 1), r.variables.isExecutingVar = !1, r.widgets.get(s.getId("PasswordInput")).validationMessageAttr = d.value.errorMessageOut, r.widgets.get(s.getId("PasswordInput2")).validationMessageAttr = d.value.errorMessageOut, r.widgets.get(s.getId("PasswordInput2")).validAttr = !1, r.widgets.get(s.getId("PasswordInput")).validAttr = !1;
                                    else return r.flush(), n.getAccounts$ServerAction(w.value.tokenOut, "", "", "true", e).then(function(i) {
                                        c.value = i
                                    }).then(function() {
                                        return r.variables.isExecutingVar = !1, t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "AccountCreationSuccess_V2", {
                                            type: t.DataConversion.ServerDataConverter.to(f.value.responseOut.dataAttr.getCurrent(e.iterationContext).typeAttr, t.DataTypes.DataTypes.Text),
                                            is_demo: t.DataConversion.ServerDataConverter.to(r.variables.is_demoIn, t.DataTypes.DataTypes.Boolean)
                                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0))
                                    })
                                })
                            })
                        }).catch(function(i) {
                            if (t.Logger.debug("MT5EnterPassword_V2.ActivateOnClick", t.Exceptions.getMessage(i)), !t.Exceptions.isSystem(i)) return t.Logger.error(null, i, null, null, 1), g.value.exceptionMessageAttr = t.Exceptions.getMessage(i), t.Logger.startActiveSpan("AllExceptions", function(S) {
                                return S && (S.setAttribute("code.function", "AllExceptions"), S.setAttribute("outsystems.function.key", "f5a2369d-5b3a-48bc-8112-60060f488a59"), S.setAttribute("outsystems.function.owner.name", "uae"), S.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), S.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return _.value = t.Logger.startActiveSpan("JavaScript1", function(A) {
                                            A && (A.setAttribute("code.function", "JavaScript1"), A.setAttribute("outsystems.function.key", "14e6f24f-4314-4b91-837c-c5bf74879938"), A.setAttribute("outsystems.function.owner.name", "uae"), A.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return n.safeExecuteJSNode(Y, "JavaScript1", "ActivateOnClick", {
                                                    message: t.DataConversion.JSNodeParamConverter.to(g.value.exceptionMessageAttr, t.DataTypes.DataTypes.Text),
                                                    errorMessage: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                                }, function(be) {
                                                    var ae = new(n.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.ActivateOnClick$javaScript1JSResult"));
                                                    return ae.errorMessageOut = t.DataConversion.JSNodeParamConverter.from(be.errorMessage, t.DataTypes.DataTypes.Text), ae
                                                }, {}, {})
                                            } finally {
                                                A && A.end()
                                            }
                                        }, 1), t.Flow.returnAsync()
                                    })
                                }, function() {
                                    S && S.end()
                                })
                            }, 1);
                            throw i
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__activateOnClick$Action
        }
        set _activateOnClick$Action(e) {
            this.__activateOnClick$Action = e
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("onClickBack", function(o) {
                    o && (o.setAttribute("code.function", "onClickBack"), o.setAttribute("outsystems.function.key", "75f79b42-f8fe-48b2-9f70-9bf6690ea0a3"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("onClickBack"), e = n.callContext(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "MT5AccountType", {
                            is_demo: t.DataConversion.ServerDataConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(e) {
            this.__onClickBack$Action = e
        }
        get _passwordInputOnFocus$Action() {
            return this.hasOwnProperty("__passwordInputOnFocus$Action") || (this.__passwordInputOnFocus$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("PasswordInputOnFocus", function(o) {
                    o && (o.setAttribute("code.function", "PasswordInputOnFocus"), o.setAttribute("outsystems.function.key", "a8e94cc2-b8d7-4e95-887c-dd3106e90fa9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("PasswordInputOnFocus"), e = n.callContext(e);
                        var g = new t.DataTypes.VariableHolder;
                        g.value = t.Logger.startActiveSpan("validatePassword", function(f) {
                            f && (f.setAttribute("code.function", "validatePassword"), f.setAttribute("outsystems.function.key", "a1bdd072-d6c3-4bc9-9272-eefe3a3f0a51"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Z, "validatePassword", "PasswordInputOnFocus", {
                                    password: t.DataConversion.JSNodeParamConverter.to(r.variables.passwordVar, t.DataTypes.DataTypes.Text),
                                    isValid: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                                }, function(c) {
                                    var w = new(n.constructor.getVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.PasswordInputOnFocus$validatePasswordJSResult"));
                                    return w.isValidOut = t.DataConversion.JSNodeParamConverter.from(c.isValid, t.DataTypes.DataTypes.Boolean), w
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), r.widgets.get(s.getId("PasswordInput")).validAttr = g.value.isValidOut, r.widgets.get(s.getId("PasswordInput2")).validAttr = g.value.isValidOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__passwordInputOnFocus$Action
        }
        set _passwordInputOnFocus$Action(e) {
            this.__passwordInputOnFocus$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "c8b6f630-9cec-42d5-ab0d-c385a9d9705b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e), r.widgets.get(s.getId("PasswordInput")).validAttr = !1, r.variables.sendingOTPVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onForgotPasswordClick$Action() {
            return this.hasOwnProperty("__onForgotPasswordClick$Action") || (this.__onForgotPasswordClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnForgotPasswordClick", function(o) {
                    return o && (o.setAttribute("code.function", "OnForgotPasswordClick"), o.setAttribute("outsystems.function.key", "f86c78ed-a4e0-40c3-adb1-2870f84788c9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnForgotPasswordClick"), e = n.callContext(e);
                        var g = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            f = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder,
                            w = new t.DataTypes.VariableHolder,
                            _ = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(B)));
                        return t.Flow.executeAsyncFlow(function() {
                            return w.value = h.getUserMetaData$Action(e), r.variables.sendingOTPVar = !0, _.value.dataOut = t.JSONUtils.deserializeFromJSON(b.getSelectedAccountDetails(), B, !1), c.value = h.getAuth$Action(e), r.flush(), n.postReauthenticate$ServerAction(c.value.tokenOut, (function() {
                                var d = new le;
                                return d.emailAttr = b.getProvider() === "email" ? w.value.userMetadataOut.emailAttr : "", d.phoneAttr = b.getProvider() === "phone" ? w.value.userMetadataOut.phoneAttr !== t.BuiltinFunctions.nullTextIdentifier() && t.BuiltinFunctions.substr(w.value.userMetadataOut.phoneAttr, 0, 1) !== "+" ? "+" + w.value.userMetadataOut.phoneAttr : w.value.userMetadataOut.phoneAttr : "", d.otp_typeAttr = "mt5_password_change", d.preferred_languageAttr = t.BuiltinFunctions.toLower(h.languageMapper$Action(e).charCodeOut), d.typeAttr = _.value.dataOut.platform_typeAttr, d
                            })(), e).then(function(d) {
                                f.value = d
                            }).then(function() {
                                if (f.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "RateLimit") r.variables.sendingOTPVar = !1, b.setTimestamp(t.BuiltinFunctions.nullTextIdentifier()), r.variables.showRateLimitPopupVar = !0;
                                else return r.variables.sendingOTPVar = !1, b.setTimestamp(t.BuiltinFunctions.nullTextIdentifier()), t.Logger.startActiveSpan("StoreNavigationUrl", function(d) {
                                    d && (d.setAttribute("code.function", "StoreNavigationUrl"), d.setAttribute("outsystems.function.key", "debf1d04-4c45-44b4-9d44-8c102cf299c7"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return n.safeExecuteJSNode(K, "StoreNavigationUrl", "OnForgotPasswordClick", null, function(i) {}, {}, {})
                                    } finally {
                                        d && d.end()
                                    }
                                }, 1), b.setCode(t.BuiltinFunctions.nullTextIdentifier()), b.setVerificationProvider(b.getProvider()), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "mt5/reset-password", {
                                    from: t.DataConversion.ServerDataConverter.to("mt5_enter_password", t.DataTypes.DataTypes.Text)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        }).catch(function(d) {
                            if (t.Logger.debug("MT5EnterPassword_V2.OnForgotPasswordClick", t.Exceptions.getMessage(d)), !t.Exceptions.isSystem(d)) return t.Logger.error(null, d, null, null, 1), g.value.exceptionMessageAttr = t.Exceptions.getMessage(d), t.Logger.startActiveSpan("AllExceptions", function(i) {
                                return i && (i.setAttribute("code.function", "AllExceptions"), i.setAttribute("outsystems.function.key", "b61a8e5e-a230-46ab-8ebb-181e38fd560f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return t.Flow.returnAsync()
                                    })
                                }, function() {
                                    i && i.end()
                                })
                            }, 1);
                            throw d
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onForgotPasswordClick$Action
        }
        set _onForgotPasswordClick$Action(e) {
            this.__onForgotPasswordClick$Action = e
        }
        get _rateLimitPopupButtonClick$Action() {
            return this.hasOwnProperty("__rateLimitPopupButtonClick$Action") || (this.__rateLimitPopupButtonClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("RateLimitPopupButtonClick", function(o) {
                    o && (o.setAttribute("code.function", "RateLimitPopupButtonClick"), o.setAttribute("outsystems.function.key", "faff2783-4e13-46d8-819a-cca19c1d629f"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RateLimitPopupButtonClick"), e = n.callContext(e), r.variables.showRateLimitPopupVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__rateLimitPopupButtonClick$Action
        }
        set _rateLimitPopupButtonClick$Action(e) {
            this.__rateLimitPopupButtonClick$Action = e
        }
        onClickShowPassword$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnClickShowPassword__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickShowPassword"), n.setAttribute("outsystems.function.key", "54616e01-d3c4-4f6e-bcec-4a5ac7c29272"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickShowPassword$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onCloseBtnEvent$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnCloseBtnEvent__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnCloseBtnEvent"), n.setAttribute("outsystems.function.key", "66da5e55-111a-44d5-ac8d-1f5df4a37e8a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseBtnEvent$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        activateOnClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ActivateOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ActivateOnClick"), n.setAttribute("outsystems.function.key", "70f9ec08-62e2-4d28-b73b-2d87acbb713b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._activateOnClick$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onClickBack$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("onClickBack__proxy", function(n) {
                n && (n.setAttribute("code.function", "onClickBack"), n.setAttribute("outsystems.function.key", "75f79b42-f8fe-48b2-9f70-9bf6690ea0a3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickBack$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        passwordInputOnFocus$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("PasswordInputOnFocus__proxy", function(n) {
                n && (n.setAttribute("code.function", "PasswordInputOnFocus"), n.setAttribute("outsystems.function.key", "a8e94cc2-b8d7-4e95-887c-dd3106e90fa9"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._passwordInputOnFocus$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c8b6f630-9cec-42d5-ab0d-c385a9d9705b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onForgotPasswordClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnForgotPasswordClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnForgotPasswordClick"), n.setAttribute("outsystems.function.key", "f86c78ed-a4e0-40c3-adb1-2870f84788c9"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onForgotPasswordClick$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        rateLimitPopupButtonClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("RateLimitPopupButtonClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "RateLimitPopupButtonClick"), n.setAttribute("outsystems.function.key", "faff2783-4e13-46d8-819a-cca19c1d629f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._rateLimitPopupButtonClick$Action, e)
                } finally {
                    n && n.end()
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
                var r = this.controller,
                    n = this.model,
                    s = this.idService;
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
                return q.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    u(p, "ControllerInner");
    let v = p;
    C = v, C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionPostMT5UAEUsers", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionGetAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2$ActionPostReauthenticate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new k
        }, "defaultValue"),
        complexType: k
    }]), C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.ActivateOnClick$javaScript1JSResult", [{
        name: "errorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.ActivateOnClick$javaScript2JSResult", [{
        name: "errorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.V2Flow.MT5EnterPassword_V2.PasswordInputOnFocus$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var C, ee = new t.Controller.ControllerFactory(C, fe);
var l = _e(Ae());
var m = V,
    ne = class ne extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("password", "passwordVar", "password", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isExecuting", "isExecutingVar", "isExecuting", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("sendingOTP", "sendingOTPVar", "sendingOTP", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TextVar", "textVarVar", "TextVar", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showRateLimitPopup", "showRateLimitPopupVar", "showRateLimitPopup", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("mt5_type", "mt5_typeIn", "mt5_type", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_mt5_typeInDataFetchStatus", "_mt5_typeInDataFetchStatus", "_mt5_typeInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ne, "VariablesRecord");
var L = ne;
L.init();
var oe = class oe extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form2: m.Model.ValidationWidgetRecord,
            Input_TextVar: m.Model.ValidationWidgetRecord,
            PasswordInput2: m.Model.ValidationWidgetRecord,
            Form1: m.Model.ValidationWidgetRecord,
            Input_TextVar2: m.Model.ValidationWidgetRecord,
            PasswordInput: m.Model.ValidationWidgetRecord
        }
    }
};
u(oe, "WidgetsRecord");
var te = oe,
    ie = class ie extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(p) {
            "is_demo" in p && (this.variables.is_demoIn = m.DataConversion.ServerDataConverter.from(p.is_demo, m.DataTypes.DataTypes.Boolean)), "mt5_type" in p && (this.variables.mt5_typeIn = m.DataConversion.ServerDataConverter.from(p.mt5_type, m.DataTypes.DataTypes.Integer))
        }
    };
u(ie, "Model");
var H = ie;
H._hasValidationWidgetsValue = void 0;
var re = new m.Model.ModelFactory(H);
var P = U.PlaceholderContent,
    ft = U.IteratorPlaceholderContent,
    Ce = u(function() {
        var v = ge(function(p) {
            var a = p.model,
                e = p.controller,
                r = p.controller.idService,
                n = e.validationService,
                s = e.callContext(),
                o = W,
                g = J,
                f = {
                    props: p,
                    validateWidget: u(function(i) {
                        p.validateWidget(p, i)
                    }, "validateWidget")
                },
                c = a,
                w = ye,
                _ = pe,
                d = ve();
            return l.createElement("div", p.rootNodeProperties, w(de.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [l.createElement(N, {
                    getOwnerSpan: u(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Progress: 100,
                        SubHeading2: a.getCachedValue(r.getId("7c1n5VJ7XUaacWYcsFuJtw.SubHeading2"), function() {
                            return "Use your MT5 password to activate an MT5 [" + (a.variables.mt5_typeIn === T.mT5Types.standard ? "Standard" : "Swap-free") + "] account"
                        }, function() {
                            return a.variables.mt5_typeIn
                        }),
                        Heading: "Enter MT5 password",
                        ShowProgressBar: !0,
                        BtnCloseVisible: !0,
                        BtnBackVisible: !0
                    },
                    events: {
                        _handleError: u(function(i) {
                            e.handleError(i)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: u(function() {
                            var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.onClickBack$Action(e.callContext(i))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: c,
                    placeholders: {
                        content: new P(function() {
                            return [l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(z, {
                                _validationProps: {
                                    validationService: n
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
                                    service: r,
                                    name: "Form2"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "UsernameInput"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(R, {
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form2")
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
                                variable: a.createVariable(O.DataTypes.Text, a.variables.textVarVar, function(i) {
                                    a.variables.textVarVar = i
                                }),
                                _idProps: {
                                    service: r,
                                    name: "Input_TextVar"
                                },
                                _widgetRecordProvider: c
                            })), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 margin-top-m",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "PasswordField2"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(I, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordInput2",
                                _idProps: {
                                    service: r,
                                    name: "FieldLabel2"
                                },
                                _widgetRecordProvider: c
                            }, _(g("7xe5re51pkiLVI3AcmV0bQ#Value", "Password"))), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(M, {
                                getOwnerSpan: u(function() {
                                    return d.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return d.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: b.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: u(function(i) {
                                        e.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form2")
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "9",
                                    alias: "2"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    icon: new P(function() {
                                        return [l.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(r.getId("ShowPasswordImages2.Style"), function() {
                                                return a.widgets.get(r.getId("PasswordInput2")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(r.getId("PasswordInput2")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "ShowPasswordImages2"
                                            },
                                            _widgetRecordProvider: c
                                        }, w(a.variables.showPasswordVar, !1, this, function() {
                                            return [l.createElement(x, {
                                                extendedEvents: {
                                                    onClick: u(function() {
                                                        var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(i))
                                                    }, "onClick")
                                                },
                                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: c
                                            })]
                                        }, function() {
                                            return [l.createElement(x, {
                                                extendedEvents: {
                                                    onClick: u(function() {
                                                        var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(i))
                                                    }, "onClick")
                                                },
                                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: c
                                            })]
                                        }))]
                                    }),
                                    input: new P(function() {
                                        return [l.createElement(R, {
                                            _validationProps: {
                                                validationService: n,
                                                validationParentId: r.getId("Form2")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(r.getId("PasswordInput2.type"), function() {
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
                                            onChange: u(function() {
                                                var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                e.passwordInputOnFocus$Action(e.callContext(i))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(O.DataTypes.Text, a.variables.passwordVar, function(i) {
                                                a.variables.passwordVar = i
                                            }),
                                            _idProps: {
                                                service: r,
                                                name: "PasswordInput2"
                                            },
                                            _widgetRecordProvider: c
                                        })]
                                    })
                                },
                                _dependencies: [o(a.variables.passwordVar), o(a.variables.showPasswordVar), o(a.widgets.get(r.getId("PasswordInput2")).validAttr)]
                            })))), l.createElement(y, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: u(function() {
                                        return Promise.resolve().then(function() {
                                            var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                            return e.onForgotPasswordClick$Action(e.callContext(i))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0px 2px 0px; text-align: end;"
                                },
                                style: "margin-top-base",
                                visible: a.variables.sendingOTPVar === !1,
                                _idProps: {
                                    service: r,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(I, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "cursor-pointer",
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(j, {
                                extendedProperties: {
                                    style: "color: var(--button-black-tertiary-label, #000); font-size: 12px; font-style: normal; font-weight: 700; line-height: 18px; text-decoration-line: underline; text-decoration-skip-ink: none; text-decoration-style: solid; text-decoration-thickness: auto; text-underline-offset: auto; text-underline-position: from-font;"
                                },
                                style: "cursor-pointer",
                                text: [_(g("_deh+Q6JfEuUT_HRMPkotw#Value", "Forgot password?"))],
                                _idProps: {
                                    service: r,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: c
                            }))), l.createElement(y, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0; text-align: end;"
                                },
                                style: " pt-2",
                                visible: a.variables.sendingOTPVar === !0,
                                _idProps: {
                                    service: r,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "spinner",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: c
                            })), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 48px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement($, {
                                getOwnerSpan: u(function() {
                                    return d.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return d.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ExtendedClass: "full-width",
                                    IsLoading: a.variables.isExecutingVar,
                                    ShowLabelOnLoading: !1
                                },
                                events: {
                                    _handleError: u(function(i) {
                                        e.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form2")
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "20",
                                    alias: "3"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    button: new P(function() {
                                        return [l.createElement(G, {
                                            enabled: a.widgets.get(r.getId("PasswordInput2")).validAttr && a.variables.passwordVar !== "",
                                            extendedProperties: {
                                                style: "margin-bottom: 0px; margin-top: 0px; padding: 0px 1rem 0px 1rem;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: u(function() {
                                                return f.validateWidget(r.getId("Form2")), Promise.resolve().then(function() {
                                                    var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                    return e.activateOnClick$Action(e.callContext(i))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary action-button",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: c
                                        }, l.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: c
                                        }), _(g("VxEPJcG_DESpAHlKMbpn9Q#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [o(a.variables.passwordVar), o(a.widgets.get(r.getId("PasswordInput2")).validAttr)]
                            }))))]
                        }),
                        buttonContainer: P.Empty
                    },
                    _dependencies: [o(a.variables.isExecutingVar), o(a.variables.sendingOTPVar), o(a.variables.passwordVar), o(a.variables.showPasswordVar), o(a.widgets.get(r.getId("PasswordInput2")).validAttr), o(b.getlanguage()), o(a.variables.textVarVar)]
                })]
            }, function() {
                return [l.createElement(N, {
                    getOwnerSpan: u(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowProgressBar: !0,
                        BtnBackVisible: !0,
                        Progress: 100,
                        SubHeading2: a.getCachedValue(r.getId("mw69ONE8iEWyyet0ofUSoA.SubHeading2"), function() {
                            return "Use your MT5 password to activate an MT5 [" + (a.variables.mt5_typeIn === T.mT5Types.standard ? "Standard" : "Swap-free") + "] account"
                        }, function() {
                            return a.variables.mt5_typeIn
                        }),
                        Heading: "Enter MT5 password",
                        BtnCloseVisible: !0
                    },
                    events: {
                        _handleError: u(function(i) {
                            e.handleError(i)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: u(function() {
                            var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.onClickBack$Action(e.callContext(i))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: r,
                        uuid: "23",
                        alias: "4"
                    },
                    _widgetRecordProvider: c,
                    placeholders: {
                        content: new P(function() {
                            return [l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                style: "full-height",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "FormLayout"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(z, {
                                _validationProps: {
                                    validationService: n
                                },
                                extendedProperties: {
                                    style: "margin-right: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                style: "full-height",
                                _idProps: {
                                    service: r,
                                    name: "Form1"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100dvh - 222px);"
                                },
                                style: "section-grow",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "UsernameInput2"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(R, {
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form1")
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
                                variable: a.createVariable(O.DataTypes.Text, a.variables.textVarVar, function(i) {
                                    a.variables.textVarVar = i
                                }),
                                _idProps: {
                                    service: r,
                                    name: "Input_TextVar2"
                                },
                                _widgetRecordProvider: c
                            })), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 margin-top-m",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "PasswordField1"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(I, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordInput",
                                _idProps: {
                                    service: r,
                                    name: "FieldLabel"
                                },
                                _widgetRecordProvider: c
                            }, _(g("acraM+8gwEil41_H3pQCoQ#Value", "Password"))), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(M, {
                                getOwnerSpan: u(function() {
                                    return d.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return d.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: b.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: u(function(i) {
                                        e.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form1")
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "33",
                                    alias: "5"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    icon: new P(function() {
                                        return [l.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: a.getCachedValue(r.getId("ShowPasswordImages.Style"), function() {
                                                return a.widgets.get(r.getId("PasswordInput")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return a.widgets.get(r.getId("PasswordInput")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "ShowPasswordImages"
                                            },
                                            _widgetRecordProvider: c
                                        }, w(a.variables.showPasswordVar, !1, this, function() {
                                            return [l.createElement(x, {
                                                extendedEvents: {
                                                    onClick: u(function() {
                                                        var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(i))
                                                    }, "onClick")
                                                },
                                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "35"
                                                },
                                                _widgetRecordProvider: c
                                            })]
                                        }, function() {
                                            return [l.createElement(x, {
                                                extendedEvents: {
                                                    onClick: u(function() {
                                                        var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(i))
                                                    }, "onClick")
                                                },
                                                image: E.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "36"
                                                },
                                                _widgetRecordProvider: c
                                            })]
                                        }))]
                                    }),
                                    input: new P(function() {
                                        return [l.createElement(R, {
                                            _validationProps: {
                                                validationService: n,
                                                validationParentId: r.getId("Form1")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: a.getCachedValue(r.getId("PasswordInput.type"), function() {
                                                    return a.variables.showPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return a.variables.showPasswordVar
                                                }),
                                                style: "background: var(--field-default-bg-default, #FFF); border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 4px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 16,
                                            onChange: u(function() {
                                                var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                e.passwordInputOnFocus$Action(e.callContext(i))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: a.createVariable(O.DataTypes.Text, a.variables.passwordVar, function(i) {
                                                a.variables.passwordVar = i
                                            }),
                                            _idProps: {
                                                service: r,
                                                name: "PasswordInput"
                                            },
                                            _widgetRecordProvider: c
                                        })]
                                    })
                                },
                                _dependencies: [o(a.variables.passwordVar), o(a.variables.showPasswordVar), o(a.widgets.get(r.getId("PasswordInput")).validAttr)]
                            })))), l.createElement(y, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: u(function() {
                                        return Promise.resolve().then(function() {
                                            var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                            return e.onForgotPasswordClick$Action(e.callContext(i))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0px 2px 0px; text-align: end;"
                                },
                                style: "margin-top-base",
                                visible: a.variables.sendingOTPVar === !1,
                                _idProps: {
                                    service: r,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(I, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(j, {
                                extendedProperties: {
                                    style: "color: var(--button-black-tertiary-label, #000); font-size: 12px; font-style: normal; font-weight: 700; line-height: 18px; text-decoration-line: underline; text-decoration-skip-ink: none; text-decoration-style: solid; text-decoration-thickness: auto; text-underline-offset: auto; text-underline-position: from-font;"
                                },
                                text: [_(g("Oj5cuYV2D0S8Us5kU+DRBA#Value", "Forgot password?"))],
                                _idProps: {
                                    service: r,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: c
                            }))), l.createElement(y, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0; text-align: end;"
                                },
                                visible: a.variables.sendingOTPVar === !0,
                                _idProps: {
                                    service: r,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "spinner",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: c
                            }))), l.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement(y, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "mobile-button fixed bottom-0 p-4",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: c
                            }, l.createElement($, {
                                getOwnerSpan: u(function() {
                                    return d.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return d.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: a.variables.isExecutingVar,
                                    ExtendedClass: "full-width",
                                    ShowLabelOnLoading: !1
                                },
                                events: {
                                    _handleError: u(function(i) {
                                        e.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: r.getId("Form1")
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "45",
                                    alias: "6"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    button: new P(function() {
                                        return [l.createElement(G, {
                                            enabled: a.widgets.get(r.getId("PasswordInput")).validAttr && a.variables.passwordVar !== "",
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: u(function() {
                                                return f.validateWidget(r.getId("Form1")), Promise.resolve().then(function() {
                                                    var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                                    return e.activateOnClick$Action(e.callContext(i))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary action-button",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "46"
                                            },
                                            _widgetRecordProvider: c
                                        }, l.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "47"
                                            },
                                            _widgetRecordProvider: c
                                        }), _(g("181NHW9EpkCTD5F+uR5wYQ#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [o(a.variables.passwordVar), o(a.widgets.get(r.getId("PasswordInput")).validAttr)]
                            })))))]
                        }),
                        buttonContainer: P.Empty
                    },
                    _dependencies: [o(a.variables.isExecutingVar), o(a.variables.sendingOTPVar), o(a.variables.passwordVar), o(a.variables.showPasswordVar), o(a.widgets.get(r.getId("PasswordInput")).validAttr), o(b.getlanguage()), o(a.variables.textVarVar)]
                })]
            }), l.createElement(me, {
                extendedProperties: {
                    style: "width: 328px;"
                },
                showPopup: a.variables.showRateLimitPopupVar,
                style: "popup-dialog padding-base",
                _idProps: {
                    service: r,
                    uuid: "48"
                },
                _widgetRecordProvider: c
            }, l.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "49"
                },
                _widgetRecordProvider: c
            }, l.createElement(Q, {
                getOwnerSpan: u(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: u(function(i) {
                        e.handleError(i)
                    }, "_handleError"),
                    buttonClick$Action: u(function() {
                        var i = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                        e.rateLimitPopupButtonClick$Action(e.callContext(i))
                    }, "buttonClick$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: r,
                    uuid: "50",
                    alias: "7"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            }))))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "MT5EnterPassword_V2",
                    functionKey: "66f3ee3a-f7b7-414c-a125-b8e7c3e1e855",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.MT5EnterPassword_V2",
            modelFactory: re,
            controllerFactory: ee,
            getTitle: u(function(p) {
                var a = p.model,
                    e = p.controller,
                    r = p.controller.idService,
                    n = e.validationService,
                    s = e.callContext(),
                    o = W,
                    g = J,
                    f = {
                        props: p,
                        validateWidget: u(function(c) {
                            p.validateWidget(p, c)
                        }, "validateWidget")
                    };
                return se.resolve(ce.TranslationsService).getMessage("Ou7zZrf3TEGhJbjnw+HoVQ#TitleExpression.-220769753.1", "MT5 password | Deriv")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.MT5EnterPassword_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [N, M, $, Q]
        }, v
    }, "componentFactory"),
    he = Ce();
export {
    ee as controllerModule, re as modelModule, he as viewModule, q as webFlowControllerModule
};