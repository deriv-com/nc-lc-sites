import {
    a as _
} from "./_oschunk-NPJTP2VQ.js";
import {
    a as l
} from "./_oschunk-4GXKK3IG.js";
import {
    q as i
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var b = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    A = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Passwort zur\xFCcksetzen"
    },
    y = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Restablecer contrase\xF1a"
    },
    v = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "R\xE9initialiser le mot de passe"
    },
    m = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Reimposta password"
    },
    P = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Zresetuj has\u0142o"
    },
    g = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Repor palavra-passe"
    },
    E = {
        "htx1DHChDEqSTMjCvpDibQ#Value": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    f = {
        "ar-001": {
            translations: b,
            isRTL: !0
        },
        "de-DE": {
            translations: A,
            isRTL: !1
        },
        "es-ES": {
            translations: y,
            isRTL: !1
        },
        "fr-FR": {
            translations: v,
            isRTL: !1
        },
        "it-IT": {
            translations: m,
            isRTL: !1
        },
        "pl-PL": {
            translations: P,
            isRTL: !1
        },
        "pt-PT": {
            translations: g,
            isRTL: !1
        },
        "ru-RU": {
            translations: E,
            isRTL: !1
        }
    };
var n = d; {
    let c = class c extends n.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, f);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onResetPassword$Action() {
            return this.hasOwnProperty("__onResetPassword$Action") || (this.__onResetPassword$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnResetPassword", function(r) {
                    r && (r.setAttribute("code.function", "OnResetPassword"), r.setAttribute("outsystems.function.key", "04daed36-5dac-4b04-8f00-13538724bcbf"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnResetPassword"), e = t.callContext(e), o.variables.isPasswordResetVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onResetPassword$Action
        }
        set _onResetPassword$Action(e) {
            this.__onResetPassword$Action = e
        }
        get _redirect$Action() {
            return this.hasOwnProperty("__redirect$Action") || (this.__redirect$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("redirect", function(r) {
                    r && (r.setAttribute("code.function", "redirect"), r.setAttribute("outsystems.function.key", "5c0f24c5-b3a0-4e74-a3ea-e8157b1b365a"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("redirect"), e = t.callContext(e), i.redirectToOauth$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__redirect$Action
        }
        set _redirect$Action(e) {
            this.__redirect$Action = e
        }
        get _goToLogin$Action() {
            return this.hasOwnProperty("__goToLogin$Action") || (this.__goToLogin$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("GoToLogin", function(r) {
                    r && (r.setAttribute("code.function", "GoToLogin"), r.setAttribute("outsystems.function.key", "6a6faf57-260a-45bc-ba32-dd568bf4871c"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GoToLogin"), e = t.callContext(e), i.redirectToOauth$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__goToLogin$Action
        }
        set _goToLogin$Action(e) {
            this.__goToLogin$Action = e
        }
        get _goBack$Action() {
            return this.hasOwnProperty("__goBack$Action") || (this.__goBack$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("GoBack", function(r) {
                    r && (r.setAttribute("code.function", "GoBack"), r.setAttribute("outsystems.function.key", "6eebda0e-38e6-471a-bcde-0046926bd247"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("GoBack"), e = t.callContext(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "ForgotPassword", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__goBack$Action
        }
        set _goBack$Action(e) {
            this.__goBack$Action = e
        }
        onResetPassword$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnResetPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnResetPassword"), t.setAttribute("outsystems.function.key", "04daed36-5dac-4b04-8f00-13538724bcbf"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onResetPassword$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        redirect$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("redirect__proxy", function(t) {
                t && (t.setAttribute("code.function", "redirect"), t.setAttribute("outsystems.function.key", "5c0f24c5-b3a0-4e74-a3ea-e8157b1b365a"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._redirect$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        goToLogin$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("GoToLogin__proxy", function(t) {
                t && (t.setAttribute("code.function", "GoToLogin"), t.setAttribute("outsystems.function.key", "6a6faf57-260a-45bc-ba32-dd568bf4871c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._goToLogin$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        goBack$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("GoBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "GoBack"), t.setAttribute("outsystems.function.key", "6eebda0e-38e6-471a-bcde-0046926bd247"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._goBack$Action, e)
                } finally {
                    t && t.end()
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return _.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return i.defaultTimeout
        }
    };
    u(c, "ControllerInner");
    let a = c;
    h = a
}
var h, $ = new n.Controller.ControllerFactory(h, l);
export {
    $ as a
};