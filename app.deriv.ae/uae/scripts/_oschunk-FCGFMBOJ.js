import {
    a as F
} from "./_oschunk-WJ5PVGKG.js";
import "./_oschunk-JQ2HBHMK.js";
import {
    a as z
} from "./_oschunk-7ZNALR7E.js";
import {
    a as M
} from "./_oschunk-OHBILT46.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as k
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as x
} from "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-HFW3V2GI.js";
import {
    a as ve
} from "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as U,
    f as m,
    l as B,
    n as V,
    o as I,
    p as J
} from "./_oschunk-VR5BNL2K.js";
import {
    a as me,
    g as H,
    m as le,
    n as ce,
    q as ue,
    r as fe,
    s as L,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as de
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ba as R,
    Qb as se,
    Sb as E,
    a as oe,
    ua as D,
    ub as h,
    z as ie
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as O,
    c as i,
    e as ge,
    m as ne,
    n as ae,
    p as P,
    v as T
} from "./_oschunk-M5BUVJ72.js";
var ye = {
        "ryyYcvFRfEC9MpZtGx+SMw#Value": "\u062A\u0623\u0643\u064A\u062F",
        "0tmDpW2Tm0mk4b32708Kxg#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "1weFOaD8I0urMkC0u87Jrg#Value": "\u062A\u0623\u0643\u064A\u062F",
        "MVzJOIxfKki_zRBFev9syg#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "bDxu5PRcMU20QPRuisROFw#Value.-853374818.1": "\u0641\u0634\u0644 \u0627\u0644\u0625\u0646\u0634\u0627\u0621",
        "iDBcTS08ZUaJxcWYtYh9_A#Title": "\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv",
        "iDBcTS08ZUaJxcWYtYh9_A#TitleExpression.-220769753.1": "\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv"
    },
    pe = {
        "ar-001": {
            translations: ye,
            isRTL: !0
        }
    };

function G(f, p, o, e) {
    f.code === "AccountAlreadyExists" ? f.errorMessage = "You already have an account. Try to login instead" : f.errorMessage = f.message
}
i(G, "default");

function j(f, p, o, e) {
    let t = {
        length: f.password.length >= 8 && f.password.length <= 16,
        lowercase: /[a-z]/.test(f.password),
        uppercase: /[A-Z]/.test(f.password),
        numbers: /[0-9]/.test(f.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(f.password),
        noSpaces: !/\s/.test(f.password)
    };
    f.isValid = Object.values(t).every(r => r === !0)
}
i(j, "default");

function Y(f, p, o, e) {
    let t = {
        length: f.password.length >= 8 && f.password.length <= 16,
        lowercase: /[a-z]/.test(f.password),
        uppercase: /[A-Z]/.test(f.password),
        numbers: /[0-9]/.test(f.password),
        specialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(f.password),
        noSpaces: !/\s/.test(f.password)
    };
    f.isValid = Object.values(t).every(r => r === !0)
}
i(Y, "default");
var n = O; {
    let p = class p extends n.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, pe);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postMT5UAEUsers$ServerAction() {
            return this.hasOwnProperty("_postMT5UAEUsers$ServerAction") || (this._postMT5UAEUsers$ServerAction = function(e, t, r) {
                var d = this.controller;
                return n.Logger.startActiveSpan("PostMT5UAEUsers", function(a) {
                    return a && (a.setAttribute("code.function", "PostMT5UAEUsers"), a.setAttribute("outsystems.function.key", "a5a5b17b-4e13-40a7-ad80-1caa8013024d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var w = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text),
                            Request: n.DataConversion.ServerDataConverter.to(t, n.DataTypes.DataTypes.Record)
                        };
                        return d.callServerAction("PostMT5UAEUsers", "screenservices/uae/V2Flow/MT5CreatePassword_V2/ActionPostMT5UAEUsers", "JaEEz2S6wU+gwEHgx4qgmw", w, d.callContext(r), void 0, void 0, !0).then(function(u) {
                            var s = new(d.constructor.getVariableGroupType("uae.V2Flow.MT5CreatePassword_V2$ActionPostMT5UAEUsers"));
                            return s.responseOut = n.DataConversion.ServerDataConverter.from(u.Response, D), s
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._postMT5UAEUsers$ServerAction
        }
        set postMT5UAEUsers$ServerAction(e) {
            this._postMT5UAEUsers$ServerAction = e
        }
        get getMt5accountdetails$ServerAction() {
            return this.hasOwnProperty("_getMt5accountdetails$ServerAction") || (this._getMt5accountdetails$ServerAction = function(e, t) {
                var r = this.controller;
                return n.Logger.startActiveSpan("GetMt5accountdetails", function(d) {
                    return d && (d.setAttribute("code.function", "GetMt5accountdetails"), d.setAttribute("outsystems.function.key", "26c89a53-7882-4505-9c64-71e24440b738"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetMt5accountdetails", "screenservices/uae/V2Flow/MT5CreatePassword_V2/ActionGetMt5accountdetails", "+lEWe+QK_EkvSnHHJMpiow", a, r.callContext(t), void 0, void 0, !0).then(function(w) {
                            var u = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5CreatePassword_V2$ActionGetMt5accountdetails"));
                            return u.responseOut = n.DataConversion.ServerDataConverter.from(w.Response, R), u
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 0)
            }), this._getMt5accountdetails$ServerAction
        }
        set getMt5accountdetails$ServerAction(e) {
            this._getMt5accountdetails$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("OnClickShowPassword", function(a) {
                    a && (a.setAttribute("code.function", "OnClickShowPassword"), a.setAttribute("outsystems.function.key", "2ab05e01-f1e5-40bf-8e87-df9d2704c52b"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnClickShowPassword"), e = r.callContext(e), t.variables.showPasswordVar = !t.variables.showPasswordVar
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _onBackClicked$Action() {
            return this.hasOwnProperty("__onBackClicked$Action") || (this.__onBackClicked$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("OnBackClicked", function(a) {
                    a && (a.setAttribute("code.function", "OnBackClicked"), a.setAttribute("outsystems.function.key", "3df9e289-72d4-4472-a109-7869a96ee64f"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("OnBackClicked"), e = r.callContext(e), t.variables.fromIn === "mt5-account-type" ? n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "MT5AccountType", {
                            is_demo: n.DataConversion.ServerDataConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                        }), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0) : n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "Home_V2", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onBackClicked$Action
        }
        set _onBackClicked$Action(e) {
            this.__onBackClicked$Action = e
        }
        get _confirmOnClick$Action() {
            return this.hasOwnProperty("__confirmOnClick$Action") || (this.__confirmOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("ConfirmOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "ConfirmOnClick"), a.setAttribute("outsystems.function.key", "4f6aacd7-283f-406b-b552-9e2b03f362a8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("ConfirmOnClick"), e = r.callContext(e);
                        var w = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType),
                            u = new n.DataTypes.VariableHolder,
                            s = new n.DataTypes.VariableHolder,
                            _ = new n.DataTypes.VariableHolder,
                            S = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder,
                            te = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return t.variables.isExecutingVar = !0, S.value = E.getAuth$Action(e), t.flush(), r.postMT5UAEUsers$ServerAction(S.value.tokenOut, (function() {
                                var v = new ie;
                                return v.is_demoAttr = t.variables.is_demoIn, v.passwordAttr = t.variables.passwordVar, v.account_typeAttr = h.getSelectedMT5AccountType(), v.currencyAttr = t.variables.is_demoIn ? "" : h.getcurrency(), v.platform_idAttr = n.BuiltinFunctions.integerToLongInteger(t.variables.is_demoIn ? 4 : 3), v
                            })(), e).then(function(v) {
                                u.value = v
                            }).then(function() {
                                return n.Flow.executeSequence(function() {
                                    if (!u.value.responseOut.errorsAttr.isEmpty) te.value = n.Logger.startActiveSpan("JavaScript1", function(v) {
                                        v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "9f764d2c-e138-421f-b6e5-4b53eb95210b"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return r.safeExecuteJSNode(G, "JavaScript1", "ConfirmOnClick", {
                                                code: n.DataConversion.JSNodeParamConverter.to(u.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr, n.DataTypes.DataTypes.Text),
                                                message: n.DataConversion.JSNodeParamConverter.to(u.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr, n.DataTypes.DataTypes.Text),
                                                errorMessage: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                            }, function(b) {
                                                var re = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.ConfirmOnClick$javaScript1JSResult"));
                                                return re.errorMessageOut = n.DataConversion.JSNodeParamConverter.from(b.errorMessage, n.DataTypes.DataTypes.Text), re
                                            }, {}, {})
                                        } finally {
                                            v && v.end()
                                        }
                                    }, 1), ve.iziToast_Show$Action(n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("bDxu5PRcMU20QPRuisROFw#Value.-853374818.1", "Creation Failed"), te.value.errorMessageOut, oe.iziToast_Position.topCenter, "", e), t.variables.isExecutingVar = !1;
                                    else return t.flush(), r.getMt5accountdetails$ServerAction(S.value.tokenOut, e).then(function(v) {
                                        s.value = v
                                    }).then(function() {
                                        y.value = n.SystemActions.listFilter(s.value.responseOut.dataAttr.getCurrent(e.iterationContext).realAttr, function(v) {
                                            return v.statusAttr === "created"
                                        }, e), h.setdemo_account_id(n.BuiltinFunctions.longIntegerToText(u.value.responseOut.dataAttr.getCurrent(e.iterationContext).idAttr))
                                    }).then(function() {
                                        return t.variables.is_demoIn ? (l.value = n.SystemActions.listFilter(s.value.responseOut.dataAttr.getCurrent(e.iterationContext).demoAttr, function(v) {
                                            return v.idAttr.equals(u.value.responseOut.dataAttr.getCurrent(e.iterationContext).idAttr)
                                        }, e), E.setSelectedMt5AccountDetails$Action(l.value.filteredListOut.getCurrent(e.iterationContext), e)) : (_.value = n.SystemActions.listFilter(s.value.responseOut.dataAttr.getCurrent(e.iterationContext).realAttr, function(v) {
                                            return v.idAttr.equals(u.value.responseOut.dataAttr.getCurrent(e.iterationContext).idAttr)
                                        }, e), E.setSelectedMt5AccountDetails$Action(_.value.filteredListOut.getCurrent(e.iterationContext), e)), n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "AccountCreationSuccess_V2", {
                                            is_demo: n.DataConversion.ServerDataConverter.to(t.variables.is_demoIn, n.DataTypes.DataTypes.Boolean),
                                            type: n.DataConversion.ServerDataConverter.to(u.value.responseOut.dataAttr.getCurrent(e.iterationContext).typeAttr, n.DataTypes.DataTypes.Text)
                                        }), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0))
                                    })
                                })
                            })
                        }).catch(function(v) {
                            if (n.Logger.debug("MT5CreatePassword_V2.ConfirmOnClick", n.Exceptions.getMessage(v)), !n.Exceptions.isSystem(v)) return n.Logger.error(null, v, null, null, 1), w.value.exceptionMessageAttr = n.Exceptions.getMessage(v), n.Logger.startActiveSpan("AllExceptions", function(b) {
                                return b && (b.setAttribute("code.function", "AllExceptions"), b.setAttribute("outsystems.function.key", "d916d820-7ed3-49aa-8465-d9771ab4ba97"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), n.Flow.tryFinally(function() {
                                    return n.Flow.executeAsyncFlow(function() {
                                        return t.variables.isExecutingVar = !1, n.Flow.returnAsync()
                                    })
                                }, function() {
                                    b && b.end()
                                })
                            }, 1);
                            throw v
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__confirmOnClick$Action
        }
        set _confirmOnClick$Action(e) {
            this.__confirmOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "76f0cc73-52f4-4ffa-8c06-74b5fca0b557"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _passwordInputOnChangeDesktop$Action() {
            return this.hasOwnProperty("__passwordInputOnChangeDesktop$Action") || (this.__passwordInputOnChangeDesktop$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("PasswordInputOnChangeDesktop", function(a) {
                    a && (a.setAttribute("code.function", "PasswordInputOnChangeDesktop"), a.setAttribute("outsystems.function.key", "a3d362df-f974-4f1c-8e51-1e138c33cc9c"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordInputOnChangeDesktop"), e = r.callContext(e);
                        var w = new n.DataTypes.VariableHolder;
                        w.value = n.Logger.startActiveSpan("validatePassword", function(u) {
                            u && (u.setAttribute("code.function", "validatePassword"), u.setAttribute("outsystems.function.key", "ed418fb2-a780-44e1-9ad7-9606e5d895b6"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(j, "validatePassword", "PasswordInputOnChangeDesktop", {
                                    password: n.DataConversion.JSNodeParamConverter.to(t.variables.passwordVar, n.DataTypes.DataTypes.Text),
                                    isValid: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var _ = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.PasswordInputOnChangeDesktop$validatePasswordJSResult"));
                                    return _.isValidOut = n.DataConversion.JSNodeParamConverter.from(s.isValid, n.DataTypes.DataTypes.Boolean), _
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), t.variables.passwordIsValidVar = w.value.isValidOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__passwordInputOnChangeDesktop$Action
        }
        set _passwordInputOnChangeDesktop$Action(e) {
            this.__passwordInputOnChangeDesktop$Action = e
        }
        get _passwordInputOnChange$Action() {
            return this.hasOwnProperty("__passwordInputOnChange$Action") || (this.__passwordInputOnChange$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("PasswordInputOnChange", function(a) {
                    a && (a.setAttribute("code.function", "PasswordInputOnChange"), a.setAttribute("outsystems.function.key", "a7aea266-bcc0-470f-83d6-892865297c96"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("PasswordInputOnChange"), e = r.callContext(e);
                        var w = new n.DataTypes.VariableHolder;
                        w.value = n.Logger.startActiveSpan("validatePassword", function(u) {
                            u && (u.setAttribute("code.function", "validatePassword"), u.setAttribute("outsystems.function.key", "2fbb7786-b199-4032-8b49-2816dc591825"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Y, "validatePassword", "PasswordInputOnChange", {
                                    password: n.DataConversion.JSNodeParamConverter.to(t.variables.passwordVar, n.DataTypes.DataTypes.Text),
                                    isValid: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                }, function(s) {
                                    var _ = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.PasswordInputOnChange$validatePasswordJSResult"));
                                    return _.isValidOut = n.DataConversion.JSNodeParamConverter.from(s.isValid, n.DataTypes.DataTypes.Boolean), _
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), t.variables.passwordIsValidVar = w.value.isValidOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__passwordInputOnChange$Action
        }
        set _passwordInputOnChange$Action(e) {
            this.__passwordInputOnChange$Action = e
        }
        onClickShowPassword$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnClickShowPassword__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickShowPassword"), r.setAttribute("outsystems.function.key", "2ab05e01-f1e5-40bf-8e87-df9d2704c52b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickShowPassword$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onBackClicked$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnBackClicked__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnBackClicked"), r.setAttribute("outsystems.function.key", "3df9e289-72d4-4472-a109-7869a96ee64f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onBackClicked$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        confirmOnClick$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ConfirmOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ConfirmOnClick"), r.setAttribute("outsystems.function.key", "4f6aacd7-283f-406b-b552-9e2b03f362a8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._confirmOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "76f0cc73-52f4-4ffa-8c06-74b5fca0b557"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        passwordInputOnChangeDesktop$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("PasswordInputOnChangeDesktop__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordInputOnChangeDesktop"), r.setAttribute("outsystems.function.key", "a3d362df-f974-4f1c-8e51-1e138c33cc9c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordInputOnChangeDesktop$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        passwordInputOnChange$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("PasswordInputOnChange__proxy", function(r) {
                r && (r.setAttribute("code.function", "PasswordInputOnChange"), r.setAttribute("outsystems.function.key", "a7aea266-bcc0-470f-83d6-892865297c96"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordInputOnChange$Action, e)
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
                    d = this.idService;
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
                return z.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    i(p, "ControllerInner");
    let f = p;
    A = f, A.registerVariableGroupType("uae.V2Flow.MT5CreatePassword_V2$ActionPostMT5UAEUsers", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), A.registerVariableGroupType("uae.V2Flow.MT5CreatePassword_V2$ActionGetMt5accountdetails", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }]), A.registerVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.ConfirmOnClick$javaScript1JSResult", [{
        name: "errorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.PasswordInputOnChangeDesktop$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.V2Flow.MT5CreatePassword_V2.PasswordInputOnChange$validatePasswordJSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }])
}
var A, K = new n.Controller.ControllerFactory(A, de);
var c = ge(me());
var g = O,
    Q = class Q extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("password", "passwordVar", "password", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isExecuting", "isExecutingVar", "isExecuting", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showPassword", "showPasswordVar", "showPassword", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TextVar", "textVarVar", "TextVar", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("passwordIsValid", "passwordIsValidVar", "passwordIsValid", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from", "fromIn", "from", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(Q, "VariablesRecord");
var N = Q;
N.init();
var X = class X extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form2: g.Model.ValidationWidgetRecord,
            Input_TextVar: g.Model.ValidationWidgetRecord,
            PasswordInputDesktop: g.Model.ValidationWidgetRecord,
            Form1: g.Model.ValidationWidgetRecord,
            Input_TextVar2: g.Model.ValidationWidgetRecord,
            PasswordInput: g.Model.ValidationWidgetRecord
        }
    }
};
i(X, "WidgetsRecord");
var Z = X,
    ee = class ee extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return Z
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(p) {
            "is_demo" in p && (this.variables.is_demoIn = g.DataConversion.ServerDataConverter.from(p.is_demo, g.DataTypes.DataTypes.Boolean)), "from" in p && (this.variables.fromIn = g.DataConversion.ServerDataConverter.from(p.from, g.DataTypes.DataTypes.Text))
        }
    };
i(ee, "Model");
var $ = ee;
$._hasValidationWidgetsValue = void 0;
var q = new g.Model.ModelFactory($);
var C = H.PlaceholderContent,
    dt = H.IteratorPlaceholderContent,
    we = i(function() {
        var f = ce(function(p) {
            var o = p.model,
                e = p.controller,
                t = p.controller.idService,
                r = e.validationService,
                d = e.callContext(),
                a = L,
                w = W,
                u = {
                    props: p,
                    validateWidget: i(function(l) {
                        p.validateWidget(p, l)
                    }, "validateWidget")
                },
                s = o,
                _ = fe,
                S = ue,
                y = le();
            return c.createElement("div", p.rootNodeProperties, _(se.isDesktop$Action(d).isDesktopOut, !1, this, function() {
                return [c.createElement(F, {
                    getOwnerSpan: i(function() {
                        return y.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return y.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        BtnBackVisible: !0,
                        ShowProgressBar: !0,
                        SubHeading2: "This will be the password to all of your MT5 aaccounts.",
                        BtnCloseVisible: !0,
                        Heading: "Set MT5 password",
                        Progress: 100
                    },
                    events: {
                        _handleError: i(function(l) {
                            e.handleError(l)
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
                    placeholders: {
                        content: new C(function() {
                            return [c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 550px;"
                                },
                                style: "flex justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(B, {
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
                                    name: "Form2"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "UsernameInput"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(I, {
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form2")
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
                                variable: o.createVariable(T.DataTypes.Text, o.variables.textVarVar, function(l) {
                                    o.variables.textVarVar = l
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Input_TextVar"
                                },
                                _widgetRecordProvider: s
                            })), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 margin-top-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "PasswordField3"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(J, {
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
                            }, S(w("MVzJOIxfKki_zRBFev9syg#Value", "Password"))), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(x, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: h.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form2")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "9",
                                    alias: "2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new C(function() {
                                        return [c.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: o.getCachedValue(t.getId("ShowPasswordImages2.Style"), function() {
                                                return o.widgets.get(t.getId("PasswordInputDesktop")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return o.widgets.get(t.getId("PasswordInputDesktop")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ShowPasswordImages2"
                                            },
                                            _widgetRecordProvider: s
                                        }, _(o.variables.showPasswordVar, !1, this, function() {
                                            return [c.createElement(V, {
                                                extendedEvents: {
                                                    onClick: i(function() {
                                                        var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(l))
                                                    }, "onClick")
                                                },
                                                image: P.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [c.createElement(V, {
                                                extendedEvents: {
                                                    onClick: i(function() {
                                                        var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(l))
                                                    }, "onClick")
                                                },
                                                image: P.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new C(function() {
                                        return [c.createElement(I, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("Form2")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: o.getCachedValue(t.getId("PasswordInputDesktop.type"), function() {
                                                    return o.variables.showPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return o.variables.showPasswordVar
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
                                            onChange: i(function() {
                                                var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                e.passwordInputOnChangeDesktop$Action(e.callContext(l))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: o.createVariable(T.DataTypes.Text, o.variables.passwordVar, function(l) {
                                                o.variables.passwordVar = l
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordInputDesktop"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [a(o.variables.passwordVar), a(o.variables.showPasswordVar), a(o.widgets.get(t.getId("PasswordInputDesktop")).validAttr)]
                            })))), c.createElement(m, {
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
                                    uuid: "14"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(M, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Password: o.variables.passwordVar,
                                    Length: 8,
                                    HasAtLeastLowerCase: !0,
                                    MustNotContainSpaces: !0,
                                    HasAtLeastOneNumber: !0,
                                    HasAtLeastOneSpecialCharacter: !0,
                                    HasAtLeastUpperCase: !0,
                                    Type: "CREATE"
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form2")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "15",
                                    alias: "3"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            })), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(k, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: o.variables.isExecutingVar,
                                    ExtendedClass: "full-width",
                                    ShowLabelOnLoading: !1
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form2")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "17",
                                    alias: "4"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new C(function() {
                                        return [c.createElement(U, {
                                            enabled: o.widgets.get(t.getId("PasswordInputDesktop")).validAttr && o.variables.passwordVar !== "" && o.variables.passwordIsValidVar,
                                            extendedProperties: {
                                                style: "margin-bottom: 0px; padding: 0px 1rem 0px 1rem;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: i(function() {
                                                return Promise.resolve().then(function() {
                                                    var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    return e.confirmOnClick$Action(e.callContext(l))
                                                })
                                            }, "onClick"),
                                            style: 'btn flex items-center justify-center px-4 btn-primary action-button"btn btn-primary flex items-center justify-center px-4 action-button',
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: s
                                        }, c.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: s
                                        }), S(w("1weFOaD8I0urMkC0u87Jrg#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [a(o.variables.passwordIsValidVar), a(o.variables.passwordVar), a(o.widgets.get(t.getId("PasswordInputDesktop")).validAttr)]
                            }))))]
                        }),
                        buttonContainer: C.Empty
                    },
                    _dependencies: [a(o.variables.passwordIsValidVar), a(o.variables.isExecutingVar), a(o.variables.passwordVar), a(o.variables.showPasswordVar), a(o.widgets.get(t.getId("PasswordInputDesktop")).validAttr), a(h.getlanguage()), a(o.variables.textVarVar)]
                })]
            }, function() {
                return [c.createElement(F, {
                    getOwnerSpan: i(function() {
                        return y.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return y.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Progress: 100,
                        BtnBackVisible: !0,
                        SubHeading2: "This will be the password to all of your MT5 accounts.",
                        Heading: "Set MT5 password",
                        BtnCloseVisible: !0
                    },
                    events: {
                        _handleError: i(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: i(function() {
                            var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                            e.onBackClicked$Action(e.callContext(l))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "20",
                        alias: "5"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        content: new C(function() {
                            return [c.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(B, {
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
                                    name: "Form1"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "hidden",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "UsernameInput2"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(I, {
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
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
                                variable: o.createVariable(T.DataTypes.Text, o.variables.textVarVar, function(l) {
                                    o.variables.textVarVar = l
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Input_TextVar2"
                                },
                                _widgetRecordProvider: s
                            })), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 margin-top-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "PasswordField1"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(J, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "PasswordInput",
                                _idProps: {
                                    service: t,
                                    name: "FieldLabel"
                                },
                                _widgetRecordProvider: s
                            }, S(w("0tmDpW2Tm0mk4b32708Kxg#Value", "Password"))), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "position-relative",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(x, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: h.getlanguage() === "en-US"
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "29",
                                    alias: "6"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    icon: new C(function() {
                                        return [c.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: o.getCachedValue(t.getId("ShowPasswordImages.Style"), function() {
                                                return o.widgets.get(t.getId("PasswordInput")).validAttr === !1 ? "eye-image-style-error" : "eye-image-style"
                                            }, function() {
                                                return o.widgets.get(t.getId("PasswordInput")).validAttr
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ShowPasswordImages"
                                            },
                                            _widgetRecordProvider: s
                                        }, _(o.variables.showPasswordVar, !1, this, function() {
                                            return [c.createElement(V, {
                                                extendedEvents: {
                                                    onClick: i(function() {
                                                        var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(l))
                                                    }, "onClick")
                                                },
                                                image: P.VersionedURL.getVersionedUrl("img/uae.eyeunsplash.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "31"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }, function() {
                                            return [c.createElement(V, {
                                                extendedEvents: {
                                                    onClick: i(function() {
                                                        var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onClickShowPassword$Action(e.callContext(l))
                                                    }, "onClick")
                                                },
                                                image: P.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "32"
                                                },
                                                _widgetRecordProvider: s
                                            })]
                                        }))]
                                    }),
                                    input: new C(function() {
                                        return [c.createElement(I, {
                                            _validationProps: {
                                                validationService: r,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                type: o.getCachedValue(t.getId("PasswordInput.type"), function() {
                                                    return o.variables.showPasswordVar ? "text" : "password"
                                                }, function() {
                                                    return o.variables.showPasswordVar
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
                                            onChange: i(function() {
                                                var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                e.passwordInputOnChange$Action(e.callContext(l))
                                            }, "onChange"),
                                            style: "form-control login-password",
                                            variable: o.createVariable(T.DataTypes.Text, o.variables.passwordVar, function(l) {
                                                o.variables.passwordVar = l
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "PasswordInput"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [a(o.variables.passwordVar), a(o.variables.showPasswordVar), a(o.widgets.get(t.getId("PasswordInput")).validAttr)]
                            })))), c.createElement(m, {
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
                                    uuid: "34"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(M, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Type: "CREATE",
                                    Length: 8,
                                    Password: o.variables.passwordVar
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "35",
                                    alias: "7"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            })), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: s
                            }, c.createElement(k, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ExtendedClass: "full-width",
                                    IsLoading: o.variables.isExecutingVar,
                                    ShowLabelOnLoading: !1
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r,
                                    validationParentId: t.getId("Form1")
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "38",
                                    alias: "8"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    button: new C(function() {
                                        return [c.createElement(U, {
                                            enabled: o.widgets.get(t.getId("PasswordInput")).validAttr && o.variables.passwordVar !== "" && o.variables.passwordIsValidVar,
                                            extendedProperties: {
                                                style: "margin-bottom: 0px; padding: 0px 1rem 0px 1rem;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            isDefault: !0,
                                            onClick: i(function() {
                                                return Promise.resolve().then(function() {
                                                    var l = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    return e.confirmOnClick$Action(e.callContext(l))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary flex items-center justify-center px-4 action-button",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: s
                                        }, c.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: s
                                        }), S(w("ryyYcvFRfEC9MpZtGx+SMw#Value", "Confirm")))]
                                    })
                                },
                                _dependencies: [a(o.variables.passwordIsValidVar), a(o.variables.passwordVar), a(o.widgets.get(t.getId("PasswordInput")).validAttr)]
                            })))))]
                        }),
                        buttonContainer: C.Empty
                    },
                    _dependencies: [a(o.variables.passwordIsValidVar), a(o.variables.isExecutingVar), a(o.variables.passwordVar), a(o.variables.showPasswordVar), a(o.widgets.get(t.getId("PasswordInput")).validAttr), a(h.getlanguage()), a(o.variables.textVarVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "MT5CreatePassword_V2",
                    functionKey: "4d5c3088-3c2d-4665-89c5-c598b5887dfc",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.MT5CreatePassword_V2",
            modelFactory: q,
            controllerFactory: K,
            getTitle: i(function(p) {
                var o = p.model,
                    e = p.controller,
                    t = p.controller.idService,
                    r = e.validationService,
                    d = e.callContext(),
                    a = L,
                    w = W,
                    u = {
                        props: p,
                        validateWidget: i(function(s) {
                            p.validateWidget(p, s)
                        }, "validateWidget")
                    };
                return ne.resolve(ae.TranslationsService).getMessage("iDBcTS08ZUaJxcWYtYh9_A#TitleExpression.-220769753.1", "MT5 password | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.MT5CreatePassword_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [F, x, M, k]
        }, f
    }, "componentFactory"),
    _e = we();
export {
    K as controllerModule, q as modelModule, _e as viewModule, z as webFlowControllerModule
};