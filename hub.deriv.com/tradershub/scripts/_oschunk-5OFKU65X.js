import {
    a as D
} from "./_oschunk-AGISAFBQ.js";
import {
    a as I
} from "./_oschunk-Y45M2O2K.js";
import {
    a as l,
    d as y
} from "./_oschunk-27GDEXUT.js";
import {
    a as O
} from "./_oschunk-D2MH3QEK.js";
import {
    af as w
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as N
} from "./_oschunk-NTQBNJ73.js";
import {
    a as $,
    c as u
} from "./_oschunk-DVBKI63I.js";
var H = {
        "4Fz_roe66ka8TosagmeQgg#Value": "Cr\xE9er un mot de passe",
        "YJKZmdYnkk6t92M0SJoU_g#Value": "Mot de passe",
        "zESZYL6Yuka5nLpkm_huFw#Title": "Cr\xE9er un mot de passe | Deriv",
        "zESZYL6Yuka5nLpkm_huFw#TitleExpression.-1261959591.1": "Cr\xE9er un mot de passe | Deriv"
    },
    L = {
        "fr-FR": {
            translations: H,
            isRTL: !1
        }
    };

function C(c, f, m) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "signup_done",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        }
    }), window == null || window.dataLayer.push({
        event: "virtual_signup"
    })
}
u(C, "default");

function g(c, f, m, r) {
    let o = getCookiesFields(),
        t = window.getCookiesObject(o),
        n = getDataObjFromCookies(t, o),
        i = getCookieValue("affiliate_tracking");
    c.Payload = JSON.stringify($({
        client_password: c.NewPassword,
        verification_code: c.VerificationCode,
        type: "trading",
        residence: c.Residence,
        affiliate_token: i
    }, n))
}
u(g, "default");

function S(c, f, m) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "signup_flow_error",
            form_name: "virtual_signup_form_outsystems",
            error_message: "account_creation_failed"
        }
    })
}
u(S, "default");

function p(c, f, m, r) {
    c.Payload = JSON.stringify({
        landing_company: c.CountryCode
    })
}
u(p, "default");

function P(c, f, m) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "password_screen_opened",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
u(P, "default");
var e = N; {
    let f = class f extends e.Controller.BaseViewController {
        constructor(r, o, t) {
            super(r, o, t, L);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _createVirtualAccount$Action() {
            return this.hasOwnProperty("__createVirtualAccount$Action") || (this.__createVirtualAccount$Action = function(r, o) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("CreateVirtualAccount", function(s) {
                    return s && (s.setAttribute("code.function", "CreateVirtualAccount"), s.setAttribute("outsystems.function.key", "02f3d37e-3e5a-4e6a-a74e-66780ce5b354"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("CreateVirtualAccount"), o = n.callContext(o);
                        var d = new e.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$vars")));
                        d.value.newPasswordInLocal = r;
                        var T = new e.DataTypes.VariableHolder,
                            E = new e.DataTypes.VariableHolder,
                            x = new e.DataTypes.VariableHolder,
                            k = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            V = new e.DataTypes.VariableHolder,
                            R = new e.DataTypes.VariableHolder,
                            h = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        return e.Flow.executeAsyncFlow(function() {
                            return V.value = e.Logger.startActiveSpan("NewAccountVirtualPayload", function(a) {
                                a && (a.setAttribute("code.function", "NewAccountVirtualPayload"), a.setAttribute("outsystems.function.key", "7f8a0ecf-49d7-47c5-ab81-17ec901aec0f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(g, "NewAccountVirtualPayload", "CreateVirtualAccount", {
                                        Residence: e.DataConversion.JSNodeParamConverter.to(l.getSelectedResidence(), e.DataTypes.DataTypes.Text),
                                        NewPassword: e.DataConversion.JSNodeParamConverter.to(d.value.newPasswordInLocal, e.DataTypes.DataTypes.Text),
                                        VerificationCode: e.DataConversion.JSNodeParamConverter.to(l.getCode(), e.DataTypes.DataTypes.Text),
                                        Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(A) {
                                        var _ = new(n.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$newAccountVirtualPayloadJSResult"));
                                        return _.payloadOut = e.DataConversion.JSNodeParamConverter.from(A.Payload, e.DataTypes.DataTypes.Text), _
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), t.flush(), y.derivApiSendMessage$Action(V.value.payloadOut, "new_account_virtual", !1, o).then(function(a) {
                                v.value = a
                            }).then(function() {
                                h.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, w, !1)
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    return v.value.isErrorOut ? (e.Logger.startActiveSpan("RudderStackError", function(a) {
                                        a && (a.setAttribute("code.function", "RudderStackError"), a.setAttribute("outsystems.function.key", "d5276b04-e76f-4adf-ad68-f23d0807177e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return n.safeExecuteJSNode(S, "RudderStackError", "CreateVirtualAccount", null, function(A) {}, {}, {})
                                        } finally {
                                            a && a.end()
                                        }
                                    }, 1), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "link-expired", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), o, !0))) : (e.Logger.startActiveSpan("RudderStackSuccess", function(a) {
                                        a && (a.setAttribute("code.function", "RudderStackSuccess"), a.setAttribute("outsystems.function.key", "17b9bbe4-fb0b-4645-9c86-8500dafdbf2c"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return n.safeExecuteJSNode(C, "RudderStackSuccess", "CreateVirtualAccount", null, function(A) {}, {}, {})
                                        } finally {
                                            a && a.end()
                                        }
                                    }, 1), l.setActiveLoginId(h.value.dataOut.new_account_virtualAttr.client_idAttr), l.setAuthToken(h.value.dataOut.new_account_virtualAttr.oauth_tokenAttr), y.cleanupAfterRealSignup$Action(o), E.value = y.gBFeatureFlagValue$Action("trigger_real_account_creation_highcode", o), e.Flow.executeSequence(function() {
                                        return E.value.isEnabledOut ? (l.setInitializeRealSignup(!1), t.flush(), y.postSignupActions$Action(!0, o).then(function(a) {
                                            x.value = a
                                        })) : (t.flush(), y.postSignupActions$Action(!1, o).then(function(a) {
                                            T.value = a
                                        }).then(function() {
                                            return R.value = e.Logger.startActiveSpan("LandingCompanyPayload", function(a) {
                                                a && (a.setAttribute("code.function", "LandingCompanyPayload"), a.setAttribute("outsystems.function.key", "e8048d56-fd9e-4c92-90b3-8e640a7747bf"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return n.safeExecuteJSNode(p, "LandingCompanyPayload", "CreateVirtualAccount", {
                                                        CountryCode: e.DataConversion.JSNodeParamConverter.to(l.getSelectedResidence(), e.DataTypes.DataTypes.Text),
                                                        Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(A) {
                                                        var _ = new(n.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$landingCompanyPayloadJSResult"));
                                                        return _.payloadOut = e.DataConversion.JSNodeParamConverter.from(A.Payload, e.DataTypes.DataTypes.Text), _
                                                    }, {}, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), t.flush(), y.derivApiSendMessage$Action(R.value.payloadOut, "", !1, o).then(function(a) {
                                                k.value = a
                                            })
                                        }).then(function() {
                                            return l.setRawLandingCompanyResponse(k.value.responseOut), l.setInitializeRealSignup(!0), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "currency-selection", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), o, !0))
                                        }))
                                    }))
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__createVirtualAccount$Action
        }
        set _createVirtualAccount$Action(r) {
            this.__createVirtualAccount$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "3b5bc8cf-17ae-41c0-979b-4d62c2605259"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var s = new e.DataTypes.VariableHolder;
                        e.Logger.startActiveSpan("RudderStack", function(d) {
                            d && (d.setAttribute("code.function", "RudderStack"), d.setAttribute("outsystems.function.key", "d7a0432b-99d1-4d09-8e4f-b2ca958acb1a"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(P, "RudderStack", "OnReady", null, function(T) {}, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), s.value = O.setFocus$Action(n.getId("Input_password"), r)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnClickShowPassword", function(i) {
                    i && (i.setAttribute("code.function", "OnClickShowPassword"), i.setAttribute("outsystems.function.key", "a098d53c-07b5-40ea-9fd8-5290365e2319"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), r = t.callContext(r), o.variables.showPasswordVar ? o.variables.showPasswordVar = !1 : o.variables.showPasswordVar = !0
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(r) {
            this.__onClickShowPassword$Action = r
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(r, o) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("PasswordPolicyCompliant", function(s) {
                    s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "a1ea7e37-49ab-4844-a6de-d443e484b7c7"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("PasswordPolicyCompliant"), o = n.callContext(o);
                        var d = new e.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.PasswordPolicyCompliant$vars")));
                        d.value.isValidInLocal = r, t.variables.isPasswordValidVar = d.value.isValidInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(r) {
            this.__passwordPolicyCompliant$Action = r
        }
        get _validate$Action() {
            return this.hasOwnProperty("__validate$Action") || (this.__validate$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("Validate", function(i) {
                    i && (i.setAttribute("code.function", "Validate"), i.setAttribute("outsystems.function.key", "a2f07463-7344-4627-95ab-4c1e49fbc859"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), r = t.callContext(r), o.variables.passwordVar === "" ? (o.widgets.get(n.getId("Input_password")).validAttr = !1, o.widgets.get(n.getId("Input_password")).validationMessageAttr = "Password is required.") : (o.widgets.get(n.getId("Input_password")).validAttr = !0, o.widgets.get(n.getId("Input_password")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__validate$Action
        }
        set _validate$Action(r) {
            this.__validate$Action = r
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "b566eb52-9293-4511-b255-066e99e607b0"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), r = t.callContext(r), l.getAuthToken() !== e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("https://app.deriv.com", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(r) {
            this.__onInitialize$Action = r
        }
        get _createPasswordOnClick$Action() {
            return this.hasOwnProperty("__createPasswordOnClick$Action") || (this.__createPasswordOnClick$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("CreatePasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CreatePasswordOnClick"), i.setAttribute("outsystems.function.key", "d87d49c9-4381-4bd4-b196-8fd5e529e06b"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CreatePasswordOnClick"), r = t.callContext(r), e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (!o.variables.isExecutingVar) return e.Flow.executeSequence(function() {
                                    if (o.variables.isPasswordValidVar) return o.variables.isExecutingVar = !0, t._createVirtualAccount$Action(o.variables.passwordVar, r);
                                    o.variables.passwordVar === "" && (o.widgets.get(n.getId("Input_password")).validAttr = !1, o.widgets.get(n.getId("Input_password")).validationMessageAttr = "Password is required.")
                                })
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__createPasswordOnClick$Action
        }
        set _createPasswordOnClick$Action(r) {
            this.__createPasswordOnClick$Action = r
        }
        createVirtualAccount$Action(r, o) {
            var t = this.controller;
            return e.Logger.startActiveSpan("CreateVirtualAccount__proxy", function(n) {
                return n && (n.setAttribute("code.function", "CreateVirtualAccount"), n.setAttribute("outsystems.function.key", "02f3d37e-3e5a-4e6a-a74e-66780ce5b354"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._createVirtualAccount$Action, o, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3b5bc8cf-17ae-41c0-979b-4d62c2605259"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickShowPassword$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "a098d53c-07b5-40ea-9fd8-5290365e2319"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickShowPassword$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        passwordPolicyCompliant$Action(r, o) {
            var t = this.controller;
            return e.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(n) {
                n && (n.setAttribute("code.function", "PasswordPolicyCompliant"), n.setAttribute("outsystems.function.key", "a1ea7e37-49ab-4844-a6de-d443e484b7c7"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, o, r)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        validate$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("Validate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Validate"), t.setAttribute("outsystems.function.key", "a2f07463-7344-4627-95ab-4c1e49fbc859"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._validate$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "b566eb52-9293-4511-b255-066e99e607b0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        createPasswordOnClick$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CreatePasswordOnClick"), t.setAttribute("outsystems.function.key", "d87d49c9-4381-4bd4-b196-8fd5e529e06b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._createPasswordOnClick$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(r) {
                var o = this.controller,
                    t = this.model,
                    n = this.idService;
                return o.onInitialize$Action(r)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var o = this.controller,
                    t = this.model,
                    n = this.idService;
                return o.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return D.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    u(f, "ControllerInner");
    let c = f;
    b = c, b.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$vars", [{
        name: "NewPassword",
        attrName: "newPasswordInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$newAccountVirtualPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$landingCompanyPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.Signup.CreatePassword.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var b, dt = new e.Controller.ControllerFactory(b, I);
export {
    dt as a
};