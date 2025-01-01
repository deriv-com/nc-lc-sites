import {
    a as T
} from "./_oschunk-YPH53ONY.js";
import {
    a as S
} from "./_oschunk-4GXKK3IG.js";
import {
    a as u,
    q as C
} from "./_oschunk-BDI2RWOA.js";
import {
    a as _
} from "./_oschunk-P3RPGEI5.js";
import {
    Jc as P,
    Qa as m
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var w = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Passwort"
    },
    R = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Contrase\xF1a"
    },
    g = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Mot de passe"
    },
    H = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Password"
    },
    k = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Has\u0142o"
    },
    V = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Palavra-passe"
    },
    L = {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "\u041F\u0430\u0440\u043E\u043B\u044C"
    },
    O = {
        "yALQS6L4p0ikr4zVTXq2zw#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    E = {
        "de-DE": {
            translations: w,
            isRTL: !1
        },
        "es-ES": {
            translations: R,
            isRTL: !1
        },
        "fr-FR": {
            translations: g,
            isRTL: !1
        },
        "it-IT": {
            translations: H,
            isRTL: !1
        },
        "pl-PL": {
            translations: k,
            isRTL: !1
        },
        "pt-PT": {
            translations: V,
            isRTL: !1
        },
        "ru-RU": {
            translations: L,
            isRTL: !1
        },
        "ar-001": {
            translations: O,
            isRTL: !0
        }
    };

function A(c, d, p, t) {
    localStorage.setItem("loginId", c.loginId), localStorage.setItem("token", c.token)
}
l(A, "default");
var e = h; {
    let d = class d extends e.Controller.BaseViewController {
        constructor(t, n, r) {
            super(t, n, r, E);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "283d21a0-d312-4e29-8050-a05091d3baae"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnReady"), t = r.callContext(t), !(n.variables.residenceIn !== "" && n.variables.citizenshipIn !== "")) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {
                            Code: e.DataConversion.ServerDataConverter.to(u.getCode(), e.DataTypes.DataTypes.Text)
                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnClickBack", function(o) {
                    o && (o.setAttribute("code.function", "OnClickBack"), o.setAttribute("outsystems.function.key", "6c72f681-51de-4429-8182-cf8884fd3fe4"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("OnClickBack"), t = r.callContext(t), e.Navigation.navigateTo(e.Navigation.generateScreenURL("PartnersHub", "Citizenship", {
                            CountryOfResidence: e.DataConversion.ServerDataConverter.to(n.variables.residenceIn, e.DataTypes.DataTypes.Text)
                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(t) {
            this.__onClickBack$Action = t
        }
        get _onSubmit$Action() {
            return this.hasOwnProperty("__onSubmit$Action") || (this.__onSubmit$Action = function(t, n) {
                var r = this.model,
                    i = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnSubmit", function(s) {
                    return s && (s.setAttribute("code.function", "OnSubmit"), s.setAttribute("outsystems.function.key", "8a45ccc9-bb2f-4fea-82d3-ec0c6342a839"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnSubmit"), n = i.callContext(n);
                        var v = new e.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePassword.OnSubmit$vars")));
                        v.value.passwordInLocal = t;
                        var f = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), _.newAccountVirtual$Action(function() {
                                var a = new m;
                                return a.typeAttr = "trading", a.client_passwordAttr = v.value.passwordInLocal, a.residenceAttr = r.variables.residenceIn, a.verification_codeAttr = u.getCode(), a
                            }(), u.getServer(), u.getAppId(), "EN", n).then(function(a) {
                                f.value = a
                            }).then(function() {
                                return r.flush(), _.authorize$Action(function() {
                                    var a = new P;
                                    return a.authorizeAttr = f.value.responseOut.new_account_virtualAttr.oauth_tokenAttr, a
                                }(), u.getServer(), u.getAppId(), "EN", n).then(function(a) {
                                    b.value = a
                                })
                            }).then(function() {
                                return e.Logger.startActiveSpan("SetLocal", function(a) {
                                    a && (a.setAttribute("code.function", "SetLocal"), a.setAttribute("outsystems.function.key", "77b05641-545a-4456-b765-2e76755bee34"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return i.safeExecuteJSNode(A, "SetLocal", "OnSubmit", {
                                            loginId: e.DataConversion.JSNodeParamConverter.to(b.value.responseOut.authorizeAttr.loginidAttr, e.DataTypes.DataTypes.Text),
                                            token: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut.new_account_virtualAttr.oauth_tokenAttr, e.DataTypes.DataTypes.Text)
                                        }, function(D) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), r.variables.isLoadingVar = !1, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0))
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onSubmit$Action
        }
        set _onSubmit$Action(t) {
            this.__onSubmit$Action = t
        }
        onReady$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "283d21a0-d312-4e29-8050-a05091d3baae"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickBack$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickBack__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickBack"), r.setAttribute("outsystems.function.key", "6c72f681-51de-4429-8182-cf8884fd3fe4"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickBack$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onSubmit$Action(t, n) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnSubmit__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnSubmit"), i.setAttribute("outsystems.function.key", "8a45ccc9-bb2f-4fea-82d3-ec0c6342a839"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onSubmit$Action, n, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    r = this.model,
                    i = this.idService;
                return n.onReady$Action(t)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return T.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    l(d, "ControllerInner");
    let c = d;
    y = c, y.registerVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePassword.OnSubmit$vars", [{
        name: "Password",
        attrName: "passwordInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var y, J = new e.Controller.ControllerFactory(y, S);
export {
    J as a
};