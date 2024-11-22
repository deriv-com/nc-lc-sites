import {
    d as f
} from "./_oschunk-27GDEXUT.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";

function u(A, r, s) {
    window.location.reload()
}
i(u, "default");
var l = {};
var e = d,
    c = class c extends e.Controller.BaseController {
        getDefaultTimeout() {
            return f.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r, s) {
                var b = this.controller;
                return e.Logger.startActiveSpan("OnException", function(o) {
                    o && (o.setAttribute("code.function", "OnException"), o.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var E = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            y = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            m = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            g = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType);
                        if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.ignoreError(r, s)) return e.ErrorHandling.IGNORED_ERROR_RESULT;
                        try {
                            if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.SecurityException)) return E.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("SecurityException", function(t) {
                                t && (t.setAttribute("code.function", "SecurityException"), t.setAttribute("outsystems.function.key", "1db0d2fa-26aa-479a-9520-99a3a5d75a3a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.Logger.startActiveSpan("ReloadWindow", function(n) {
                                        n && (n.setAttribute("code.function", "ReloadWindow"), n.setAttribute("outsystems.function.key", "678853f5-a242-461e-bc97-8454bab09a17"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return b.safeExecuteJSNode(u, "ReloadWindow", "OnException", null, function(p) {}, {}, {})
                                        } finally {
                                            n && n.end()
                                        }
                                    }, 1);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.DataBaseException)) return e.Logger.error(null, r, null, null, 1), m.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("DataBaseException", function(t) {
                                t && (t.setAttribute("code.function", "DataBaseException"), t.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem with the database request. Please try reloading the page.", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.CommunicationException)) return e.Logger.error(null, r, null, null, 1), g.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("CommunicationException", function(t) {
                                t && (t.setAttribute("code.function", "CommunicationException"), t.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem communicating with the server. Please try reloading the page.", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (!e.Exceptions.isSystem(r)) return e.Logger.error(null, r, null, null, 1), y.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("AllExceptions", function(t) {
                                t && (t.setAttribute("code.function", "AllExceptions"), t.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem. Please try reloading the page.", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            throw r
                        } catch (t) {
                            return e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.defaultErrorHandler(t, s)
                        }
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
    };
i(c, "Controller");
var a = c,
    S = new a(l);
export {
    S as a
};