import {
    Sb as l,
    ub as c
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as u,
    c as a
} from "./_oschunk-M5BUVJ72.js";
var m = {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-625520071.1": "\u062D\u062F\u062B\u062A \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0631\u062C\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1637161468.1": "\u062D\u062F\u062B\u062A \u0645\u0634\u0643\u0644\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.-175845488.1": "\u062D\u062F\u062B\u062A \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0637\u0644\u0628 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A. \u064A\u0631\u062C\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629."
    },
    f = {
        "ar-001": {
            translations: m,
            isRTL: !0
        }
    };
var e = u,
    s = class s extends e.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r, i) {
                var T = this.controller;
                return e.Logger.startActiveSpan("OnException", function(n) {
                    n && (n.setAttribute("code.function", "OnException"), n.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var g = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            E = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            d = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            y = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            b = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType);
                        if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.ignoreError(r, i)) return e.ErrorHandling.IGNORED_ERROR_RESULT;
                        try {
                            if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.InvalidLoginException)) return e.Logger.error(null, r, null, null, 1), d.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("InvalidLogin", function(t) {
                                t && (t.setAttribute("code.function", "InvalidLogin"), t.setAttribute("outsystems.function.key", "24fd6fb9-c0a6-45cd-8340-c3b1d4ef9569"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    return e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "session-expired", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), i, !0)
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.SecurityException)) return g.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("SecurityException", function(t) {
                                t && (t.setAttribute("code.function", "SecurityException"), t.setAttribute("outsystems.function.key", "1db0d2fa-26aa-479a-9520-99a3a5d75a3a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    return e.BuiltinFunctions.getUserId().toString() !== e.BuiltinFunctions.nullTextIdentifier() ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "invalid", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), i, !0) : (c.setLastURL(e.BuiltinFunctions.getBookmarkableURL()), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "signup", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), i, !0))
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.DataBaseException)) return e.Logger.error(null, r, null, null, 1), y.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("DataBaseException", function(t) {
                                t && (t.setAttribute("code.function", "DataBaseException"), t.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("h3fWDwmg3UeT0Bqt_cQgxw#Message.-175845488.1", "There was a problem with the database request. Please try reloading the page."), 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.CommunicationException)) return e.Logger.error(null, r, null, null, 1), b.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("CommunicationException", function(t) {
                                t && (t.setAttribute("code.function", "CommunicationException"), t.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("ZW2tO1gq9ke3K4B8INEM6w#Message.-625520071.1", "There was a problem communicating with the server. Please try reloading the page."), 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (!e.Exceptions.isSystem(r)) return e.Logger.error(null, r, null, null, 1), E.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("AllExceptions", function(t) {
                                t && (t.setAttribute("code.function", "AllExceptions"), t.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("hd35JhN3zEmey3w4Y9h7LQ#Message.-1637161468.1", "There was a problem. Please contact customer support"), 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            throw r
                        } catch (t) {
                            return e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.defaultErrorHandler(t, i)
                        }
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
    };
a(s, "Controller");
var o = s,
    h = new o(f);
export {
    h as a
};